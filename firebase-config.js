import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- CẤU HÌNH ---
const firebaseConfig = CONFIG.FIREBASE_CONFIG

// Khởi tạo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();
let currentUser = null;

// --- CÁC HÀM XỬ LÝ ---

// 1. Hàm Đăng Nhập
const handleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        currentUser = result.user;
        alert(`Xin chào ${currentUser.displayName}!`);
        updateUserUI(currentUser);
        loadUserProgress();
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        alert("Lỗi: " + error.message);
    }
};

// 2. Hàm Đăng Xuất (Gắn vào window để gọi từ nút Thoát động)
window.logout = () => {
    signOut(auth).then(() => {
        alert("Đã đăng xuất");
        currentUser = null;
        updateUserUI(null);
        location.reload();
    });
};

// 3. Hàm Lưu/Tải (Gắn window để script.js gọi được)
window.saveLessonProgress = (lessonIndex, score) => {
    if (!currentUser) return;
    set(ref(db, 'users/' + currentUser.uid + '/lessons/' + lessonIndex), {
        score: score,
        timestamp: Date.now(),
        completed: true
    }).then(() => console.log("Đã lưu kết quả!"));
};

window.loadUserProgress = () => {
    if (!currentUser) return;
    get(child(ref(db), `users/${currentUser.uid}/lessons`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (typeof window.markCompletedLessons === 'function') {
                window.markCompletedLessons(snapshot.val());
            }
        }
    });
};

// --- QUAN TRỌNG: GẮN SỰ KIỆN CLICK ---
// Đoạn này sẽ chạy khi web tải xong, tự tìm nút login và gắn hàm vào
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        // Xóa sự kiện cũ nếu có và gắn sự kiện mới
        loginBtn.addEventListener('click', handleLogin);
        console.log("✅ Đã kích hoạt nút Đăng nhập");
    } else {
        console.error("❌ Không tìm thấy nút login-btn (Kiểm tra lại HTML)");
    }
});

// Theo dõi trạng thái đăng nhập
// --- CẬP NHẬT TRONG firebase-config.js ---

onAuthStateChanged(auth, (user) => {
    if (user) {
        // 1. Đăng nhập thành công
        console.log("Đã đăng nhập:", user.email);
        currentUser = user;
        window.currentUser = user; // Gán vào window để script.js nhìn thấy
        
        updateUserUI(user);
        loadUserProgress();
        
        // 2. QUAN TRỌNG: Vẽ lại Sidebar ngay lập tức để mở khóa
        // Dùng setTimeout để đảm bảo script.js đã chạy xong và hàm renderLessonList đã tồn tại
        setTimeout(() => {
            if (typeof window.renderLessonList === 'function') {
                window.renderLessonList(); 
                console.log("Đã mở khóa lộ trình!");
            }
        }, 500);

        // 3. Tự động tải lại tab bài tập nếu đang bị hiện thông báo khóa
        const contentArea = document.getElementById('content-area');
        if (contentArea && contentArea.innerHTML.includes('Tính năng bị khóa')) {
            const activeTabBtn = document.querySelector('.tab-btn.active');
            if (activeTabBtn) activeTabBtn.click(); 
        }

    } else {
        // Đăng xuất
        currentUser = null;
        window.currentUser = null;
        updateUserUI(null);
        
        // Vẽ lại để khóa lại
        if (typeof window.renderLessonList === 'function') {
            window.renderLessonList(); 
        }
    }
});

function updateUserUI(user) {
    const loginBtn = document.getElementById('login-btn');
    const userDisplay = document.getElementById('user-info');
    
    if (user) {
        if(loginBtn) loginBtn.style.display = 'none';
        if(userDisplay) {
            userDisplay.style.display = 'flex';
            userDisplay.innerHTML = `
                <img src="${user.photoURL}" style="width:28px; height:28px; border-radius:50%; margin-right:8px;">
                <span style="font-size:14px; font-weight:bold; color:#333; margin-right:10px;">${user.displayName}</span>
                <button onclick="logout()" style="background:none; border:1px solid #ff4b4b; color:#ff4b4b; padding:2px 8px; border-radius:4px; cursor:pointer; font-size:12px;">Thoát</button>
            `;
        }
    } else {
        if(loginBtn) loginBtn.style.display = 'flex';
        if(userDisplay) userDisplay.style.display = 'none';
    }
}
// --- SỬA HÀM NÀY ĐỂ HIỆN ĐIỂM SỐ ---
function markCompletedLessons(data) {
    // Đợi 1 chút để danh sách bài học (bên trái) load xong
    setTimeout(() => {
        const listItems = document.querySelectorAll('#lesson-list li');
        
        // 1. Dọn dẹp các điểm số/tích cũ trước khi vẽ mới (tránh bị trùng lặp khi F5)
        listItems.forEach(li => {
            const oldBadge = li.querySelector('.score-badge');
            if (oldBadge) oldBadge.remove();
        });

        // 2. Duyệt qua dữ liệu tải về từ Firebase
        for (const [lessonIdx, lessonData] of Object.entries(data)) {
            // Kiểm tra xem bài học thứ lessonIdx có tồn tại trong menu không
            if (listItems[lessonIdx]) {
                const li = listItems[lessonIdx];

                // Tạo một cái nhãn (Badge) để chứa điểm và dấu tích
                const span = document.createElement('span');
                span.className = 'score-badge';
                
                // Logic: Nếu có điểm thì hiện điểm, không thì chỉ hiện tích
                // Ví dụ: "100đ ✅" hoặc "80đ ✅"
                const scoreText = (lessonData.score !== undefined) ? `${lessonData.score}đ ` : '';
                
                span.innerHTML = `${scoreText}<i class="fa-solid fa-circle-check"></i>`;
                
                // Style cho đẹp (Màu xanh lá)
                span.style.marginLeft = 'auto';
                span.style.color = '#27ae60';
                span.style.fontWeight = 'bold';
                span.style.fontSize = '14px';

                // Gắn vào dòng bài học
                li.appendChild(span);
                
                // Căn chỉnh layout cho dòng bài học (để tên bài sang trái, điểm sang phải)
                li.style.display = 'flex';
                li.style.justifyContent = 'space-between';
                li.style.alignItems = 'center';
            }
        }
    }, 1000); // Giữ nguyên delay 1s để đảm bảo an toàn
}

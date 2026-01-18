/* ============================================================
   PHẦN 2: LOGIC XỬ LÝ 
   ============================================================ */

// const API_KEY = CONFIG.API_KEY; 

let currentLesson = null;
const contentArea = document.getElementById('content-area');

// 1. Khởi tạo danh sách bài học
function init() {
    const list = document.getElementById('lesson-list');
    if (!list) return; // Nếu không tìm thấy list thì dừng ngay để tránh lỗi
    
    list.innerHTML = '';
    courseData.forEach((lesson, index) => {
        const li = document.createElement('li');
        // LOGIC KHÓA: Nếu chưa đăng nhập VÀ bài học thứ 3 trở đi (index > 1)
        // const isLocked = !window.currentUser && index > 1;
        const isLocked = false;
        if (isLocked) {
            li.className = 'locked-lesson';
            li.style.opacity = '0.6';
            li.style.cursor = 'not-allowed';
            li.style.background = '#f9f9f9';
            li.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <span>🔒 Bài ${index + 1}: (Bị khóa)</span>
                    <i class="fa-solid fa-lock" style="color: #999;"></i>
                </div>
            `;
            // Không gán sự kiện onclick loadLesson
            li.onclick = () => {
                alert("Bạn cần đăng nhập để mở khóa các bài học tiếp theo!");
                window.loginWithGoogle();
            };
        } else {
            // Render bài học bình thường (Mở)
            li.innerHTML = `Bài ${index + 1}: ${lesson.title}`;
            if (currentLesson && currentLesson.id === lesson.id) {
                li.classList.add('active');
            }
            li.onclick = () => loadLesson(index);
        }

        list.appendChild(li);
    });
}

// 2. Tải bài học & Highlight
function loadLesson(index) {
    currentLesson = courseData[index];
    
    // Cập nhật tiêu đề
    const titleEl = document.getElementById('lesson-title');
    if (titleEl) titleEl.innerText = currentLesson.title;
    
    // Hiện tabs
    const tabsEl = document.getElementById('tabs');
    if (tabsEl) tabsEl.style.display = 'block';

    // Highlight bài đang học trong sidebar
    const listItems = document.querySelectorAll('#lesson-list li');
    listItems.forEach(li => li.classList.remove('active-lesson'));
    if (listItems[index]) listItems[index].classList.add('active-lesson');
    
    // Mặc định mở tab Từ vựng
    openTab('vocab');

    // Trên điện thoại, chọn bài xong thì đóng menu
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.classList.contains('hidden')) {
            toggleSidebar();
        }
    }
}

// 3. Chuyển Tab
// --- SỬA HÀM CHUYỂN TAB ---
openTab = function(tabName) {
    // 1. Xóa class active ở tất cả các nút tab cũ
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // 2. Tìm nút vừa bấm để highlight (thêm class active)
    // Map tên tab với thứ tự nút: Vocab(0), Grammar(1), Flashcard(2), Practice(3), AI(4)
    const tabMap = { 'vocab': 0, 'grammar': 1, 'flashcard': 2, 'practice': 3, 'ai-chat': 4 };
    const btns = document.querySelectorAll('.tab-btn');
    
    // Nếu tìm thấy nút tương ứng thì highlight nó
    if (btns[tabMap[tabName]]) {
        btns[tabMap[tabName]].classList.add('active');
    }

    // 3. Hiển thị nội dung tương ứng
    if (contentArea) {
        contentArea.innerHTML = ''; // Xóa nội dung cũ
        
        if (tabName === 'vocab') {
            renderVocab();
        } else if (tabName === 'grammar') {
            renderGrammar();
        } else if (tabName === 'flashcard') {
            // Kiểm tra xem hàm Flashcard đã có chưa, nếu chưa thì báo lỗi nhẹ
            if (typeof initFlashcard === 'function') initFlashcard();
        } else if (tabName === 'practice') {
            renderPractice();
        } else if (tabName === 'ai-chat') {
            // ĐÂY LÀ DÒNG QUAN TRỌNG ĐỂ HIỆN KHUNG CHAT
            if (typeof renderAIChat === 'function') {
                renderAIChat(); 
            } else {
                contentArea.innerHTML = "<p>Lỗi: Chưa tìm thấy hàm renderAIChat trong file script.js</p>";
            }
        }
    }
}

// 4. Render Từ vựng (Dạng Lưới)
function renderVocab() {
    if (!currentLesson.vocab) return;
    const gridDiv = document.createElement('div');
    gridDiv.className = 'vocab-grid';

    currentLesson.vocab.forEach(v => {
        const div = document.createElement('div');
        div.className = 'vocab-item';
        div.innerHTML = `
            <div style="margin-bottom:5px;">
                <span class="vocab-word">${v.word}</span> 
                <span style="color:#888; font-size:13px;">${v.ipa || ''}</span>
            </div>
            <div style="font-size:14px; color:#555; margin-bottom:5px;">${v.type || 'v'}</div>
            <div style="font-size:15px; color:#333;">👉 ${v.meaning}</div>
            <button class="btn-speak" onclick="speak('${v.word}')">🔊</button>
        `;
        gridDiv.appendChild(div);
    });
    contentArea.appendChild(gridDiv);
}

// 5. Render Ngữ pháp
function renderGrammar() {
    // if (!window.currentUser) {
    //     renderLockedContent('content-area', 'Ngữ Pháp & Cấu Trúc');
    //     return; // Dừng lại
    // }
    if (!currentLesson.grammar) return;
    const div = document.createElement('div');
    div.className = 'grammar-section';
    div.innerHTML = `<h3>${currentLesson.grammar.title}</h3>${currentLesson.grammar.content}`;
    contentArea.appendChild(div);
}


// Biến lưu đáp án tạm thời của người dùng { câu_hỏi_số_0: đáp_án, ... }
let userAnswers = {};

function normalizeText(text) {
    return text.toLowerCase()
        .replace(/[.,!?;:]/g, '') // Bỏ dấu câu
        .replace(/\b0\b/g, 'zero')
        .replace(/\b1\b/g, 'one')
        .replace(/\b2\b/g, 'two')
        .replace(/\b3\b/g, 'three')
        .replace(/\b4\b/g, 'four')
        .replace(/\b5\b/g, 'five')
        .replace(/\b6\b|6:00/g, 'six')   // Xử lý số 6 và giờ 6:00
        .replace(/\b7\b|7:00/g, 'seven')    
        .replace(/\b8\b|8:00/g, 'eight')
        .replace(/\b9\b|9:00/g, 'nine')
        .replace(/\b10\b/g, 'ten')
        .replace(/\s+/g, ' ') // Xóa khoảng trắng thừa
        .trim();
}

// 1. Render Giao diện Luyện tập (Quiz)
function renderPractice() {
    // if (!window.currentUser) {
    //     contentArea.innerHTML = `
    //         <div style="text-align: center; padding: 50px 20px; background: white; border-radius: 15px; border: 2px dashed #ccc;">
    //             <i class="fa-solid fa-lock" style="font-size: 50px; color: #999; margin-bottom: 20px;"></i>
    //             <h2 style="color: #555; margin-bottom: 10px;">Nội dung bị khóa</h2>
    //             <p style="font-size: 16px; color: #666; margin-bottom: 25px;">
    //                 Bạn cần đăng nhập để làm bài tập và lưu kết quả học tập.
    //             </p>
                
    //             <button onclick="window.loginWithGoogle()" class="chat-btn" style="padding: 12px 30px; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    //                 <i class="fa-brands fa-google"></i> Đăng nhập bằng Google
    //             </button>
    //         </div>
    //     `;
    //     return; // 🛑 DỪNG LẠI NGAY, KHÔNG CHẠY CODE BÊN DƯỚI
    // }

    // Reset lại đáp án mỗi khi mở lại tab
    userAnswers = {};

    // A. Phần Luyện Nói
    if (currentLesson.speaking) {
        const speakDiv = document.createElement('div');
        speakDiv.className = 'speaking-box';
        speakDiv.innerHTML = `
            <h3>🎙️ Luyện Phát Âm</h3>
            <p>Hãy bấm micro và đọc to câu sau:</p>
            <div class="speaking-text">"${currentLesson.speaking}"</div>
            
            <button class="btn-speak" onclick="speak('${currentLesson.speaking}')" style="margin-bottom:15px;">🔊 Nghe mẫu</button>
            <br>
            
            <button id="mic-btn" class="btn-mic" onclick="checkPronunciation('${currentLesson.speaking}')">
                <i class="fa-solid fa-microphone"></i>
            </button>
            
            <div id="speak-result-container" style="min-height: 60px; margin-top: 15px;">
                <p id="speak-result" class="feedback" style="font-size:16px; color:#666;">
                    Bấm micro để nói (Máy sẽ đợi bạn ngắt quãng 2.5s)
                </p>
            </div>
        `;
        contentArea.appendChild(speakDiv);
    }

    // B. Phần Trắc nghiệm & Điền từ (LOGIC MỚI)
    if (currentLesson.quiz) {
        const quizContainer = document.createElement('div');
        quizContainer.id = 'quiz-container';
        
        const quizTitle = document.createElement('h3');
        quizTitle.innerText = "📝 Bài Tập Thực Hành";
        quizTitle.style.marginTop = "30px";
        quizContainer.appendChild(quizTitle);

        currentLesson.quiz.forEach((q, idx) => {
            const div = document.createElement('div');
            div.className = 'quiz-item';
            div.id = `quiz-q-${idx}`; // Đánh dấu ID để lát chấm điểm tô màu
            
            let html = `<p style="font-size: 16px; margin-bottom: 10px;"><b>Câu ${idx+1}:</b> ${q.question}</p>`;

            if (q.type === 'text') {
                // Dạng điền từ
                html += `
                    <input type="text" class="quiz-input" 
                           placeholder="Nhập đáp án..." 
                           oninput="recordAnswer(${idx}, this.value)">
                    <div class="feedback-msg"></div>
                `;
            } else {
                // Dạng trắc nghiệm
                let optionsHtml = '';
                q.options.forEach((opt, optIdx) => {
                    optionsHtml += `
                        <button class="quiz-option-btn" 
                                id="q${idx}-opt${optIdx}"
                                onclick="selectOption(${idx}, ${optIdx})">
                            ${opt}
                        </button>`;
                });
                html += `<div class="quiz-options">${optionsHtml}</div><div class="feedback-msg"></div>`;
            }
            div.innerHTML = html;
            quizContainer.appendChild(div);
        });

        // Khu vực hiển thị kết quả tổng kết
        const resultDiv = document.createElement('div');
        resultDiv.id = 'quiz-result-area';
        resultDiv.style.marginTop = '20px';
        resultDiv.style.textAlign = 'center';
        resultDiv.innerHTML = `
            <button id="submit-quiz-btn" class="chat-btn" onclick="submitQuiz()" style="padding: 12px 30px; font-size: 16px;">Nộp bài</button>
            <div id="final-score" style="display:none; margin-top: 15px;"></div>
            <button id="retry-quiz-btn" class="chat-btn" onclick="renderPractice()" style="display:none; background: #555; margin-top: 10px;">Làm lại bài</button>
        `;
        
        quizContainer.appendChild(resultDiv);
        contentArea.appendChild(quizContainer);
    }
}

// 2. Hàm lưu lựa chọn của người dùng (Chưa chấm điểm)
function selectOption(qIdx, optIdx) {
    // Lưu đáp án vào biến tạm
    userAnswers[qIdx] = optIdx;

    // Cập nhật giao diện (Highlight nút đang chọn)
    const buttons = document.querySelectorAll(`#quiz-q-${qIdx} .quiz-option-btn`);
    buttons.forEach(btn => btn.classList.remove('selected')); // Xóa highlight cũ
    
    document.getElementById(`q${qIdx}-opt${optIdx}`).classList.add('selected');
}

function recordAnswer(qIdx, value) {
    userAnswers[qIdx] = value.trim();
}

// 3. Hàm NỘP BÀI & CHẤM ĐIỂM (Quan trọng)
function submitQuiz() {
    let correctCount = 0;
    const totalQuestions = currentLesson.quiz.length;

    // Duyệt qua từng câu hỏi để kiểm tra
    currentLesson.quiz.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const itemDiv = document.getElementById(`quiz-q-${idx}`);
        const feedbackDiv = itemDiv.querySelector('.feedback-msg');
        
        // Reset style cũ
        itemDiv.classList.remove('correct-bg', 'wrong-bg');
        feedbackDiv.innerHTML = '';

        let isCorrect = false;

        // Logic so sánh đáp án
        if (q.type === 'text') {
            // So sánh chuỗi (không phân biệt hoa thường)
            if (userAns && userAns.toLowerCase() === q.answer.toLowerCase()) {
                isCorrect = true;
            }
        } else {
            // So sánh index trắc nghiệm
            if (userAns === q.answer) {
                isCorrect = true;
            }
        }

        // Xử lý Giao diện Kết quả
        if (isCorrect) {
            correctCount++;
            itemDiv.classList.add('correct-bg'); // Thêm viền xanh
            feedbackDiv.innerHTML = `<span style="color:var(--primary-color); font-weight:bold;">✅ Chính xác!</span>`;
        } else {
            itemDiv.classList.add('wrong-bg'); // Thêm viền đỏ
            // Hiển thị đáp án đúng
            let rightAnswerText = q.type === 'text' ? q.answer : q.options[q.answer];
            feedbackDiv.innerHTML = `<span style="color:#ff4b4b; font-weight:bold;">❌ Sai rồi. Đáp án đúng: "${rightAnswerText}"</span>`;
        }
    });

    // Tính điểm (Thang 100)
    const score = Math.round((correctCount / totalQuestions) * 100);

    // Hiển thị Tổng kết
    const submitBtn = document.getElementById('submit-quiz-btn');
    const resultArea = document.getElementById('final-score');
    const retryBtn = document.getElementById('retry-quiz-btn');

    submitBtn.style.display = 'none'; // Ẩn nút nộp bài
    retryBtn.style.display = 'inline-block'; // Hiện nút làm lại
    
    resultArea.style.display = 'block';
    resultArea.innerHTML = `
        <h2 style="color: var(--secondary-color);">Kết quả: ${score}/100 điểm</h2>
        <p>Bạn làm đúng ${correctCount}/${totalQuestions} câu.</p>
    `;

    // LƯU ĐIỂM LÊN FIREBASE (Chỉ lưu khi nộp bài)
    // Lấy index bài học hiện tại trong mảng courseData
    const lessonIdx = courseData.findIndex(l => l.id === currentLesson.id);
    if (lessonIdx !== -1 && typeof window.saveLessonProgress === 'function') {
        window.saveLessonProgress(lessonIdx, score);
    }
}


// --- CÁC HÀM HỖ TRỢ ---

function renderLockedContent(containerId, featureName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 2px dashed #e0e0e0; margin-top: 20px;">
            <div style="background: #f0f0f0; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fa-solid fa-lock" style="font-size: 32px; color: #999;"></i>
            </div>
            <h2 style="color: #444; margin-bottom: 10px;">Tính năng bị khóa</h2>
            <p style="font-size: 15px; color: #666; margin-bottom: 25px; max-width: 400px; margin-left: auto; margin-right: auto;">
                Bạn cần đăng nhập để truy cập <b>${featureName}</b> và mở khóa toàn bộ lộ trình học.
            </p>
            <button onclick="window.loginWithGoogle()" class="chat-btn" style="padding: 10px 25px; font-size: 15px; background: #4285F4; border: none; color: white; border-radius: 25px; cursor: pointer; transition: 0.2s;">
                <i class="fa-brands fa-google"></i> Đăng nhập ngay
            </button>
        </div>
    `;
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

function checkAnswer(btn, correctIndex, selectedIndex) {
    const feedback = btn.parentElement.nextElementSibling;
    if (correctIndex === selectedIndex) {
        feedback.innerHTML = "✅ Chính xác!";
        feedback.className = "feedback correct";
        btn.style.background = "#dfffe0"; // Xanh nhạt
        btn.style.borderColor = "#58cc02";
        // Lưu tiến độ: Bài học hiện tại (chúng ta cần biết index của bài học)
        // Tìm index của bài học hiện tại trong mảng courseData
        const lessonIdx = courseData.indexOf(currentLesson);
        
        // Chỉ lưu tượng trưng là đã làm (bạn có thể phát triển thêm logic tính điểm 10/10 mới lưu)
        if (typeof saveLessonProgress === 'function') {
            saveLessonProgress(lessonIdx, 100); // Lưu là hoàn thành
        }
    } else {
        feedback.innerHTML = "❌ Sai rồi, thử lại nhé!";
        feedback.className = "feedback wrong";
        btn.style.background = "#ffe0e0"; // Đỏ nhạt
        btn.style.borderColor = "#ff4b4b";
    }
}

function checkInputAnswer(idx, correctAnswer) {
    const inputVal = document.getElementById(`quiz-input-${idx}`).value.trim();
    const feedback = document.getElementById(`feedback-${idx}`);
    // So sánh (bỏ qua dấu chấm câu, chữ hoa thường)
    const cleanInput = inputVal.toLowerCase().replace(/[.,!?]/g, '');
    const cleanAnswer = correctAnswer.toLowerCase().replace(/[.,!?]/g, '');

    if (cleanInput === cleanAnswer) {
        feedback.innerHTML = "✅ Chính xác!";
        feedback.className = "feedback correct";
    } else {
        feedback.innerHTML = `❌ Đáp án đúng là: <b>${correctAnswer}</b>`;
        feedback.className = "feedback wrong";
    }
}

// Hàm Bật/Tắt Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-toggle-btn');
    if (sidebar) sidebar.classList.toggle('hidden');
    
    // Hiện nút menu nếu sidebar ẩn
    if (sidebar && sidebar.classList.contains('hidden')) {
        if(menuBtn) menuBtn.style.display = 'block';
    } else {
        if(menuBtn) menuBtn.style.display = 'none';
    }
}

// TÌM KIẾM TỪ ĐIỂN
function searchDictionary() {
    const input = document.getElementById('dict-input').value.toLowerCase().trim();
    const resultBox = document.getElementById('dict-results');
    
    if (input === "") {
        resultBox.style.display = "none";
        return;
    }

    if (typeof dictionaryDB !== 'undefined') {
        const results = dictionaryDB.filter(item => 
            item.word.toLowerCase().startsWith(input) || 
            item.word.toLowerCase().includes(input)
        );

        if (results.length > 0) {
            resultBox.style.display = "block";
            resultBox.innerHTML = "";
            results.forEach(item => {
                const div = document.createElement('div');
                div.className = 'dict-item';
                div.innerHTML = `
                    <div class="dict-word">${item.word} <small style="color:#999; font-weight:normal;">${item.ipa}</small></div>
                    <div style="font-size:13px; color:#555;">${item.meaning}</div>
                    <button class="btn-speak" style="float:none; margin-top:5px;" onclick="speak('${item.word}')">🔊</button>
                `;
                resultBox.appendChild(div);
            });
        } else {
            resultBox.style.display = "none";
        }
    }
}

/* ============================================================
   LOGIC FLASHCARD (MỚI)
   ============================================================ */

let currentFlashcardIndex = 0; // Theo dõi thẻ đang học

// 1. Cập nhật hàm openTab để hỗ trợ tab 'flashcard'
// (Bạn tìm hàm openTab cũ và thay thế hoặc sửa lại đoạn if/else if)
const originalOpenTab = openTab; // Lưu hàm cũ nếu cần, hoặc sửa trực tiếp
// --- SỬA HÀM CHUYỂN TAB ---
openTab = function(tabName) {
    // 1. Xóa class active ở tất cả các nút tab cũ
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    // 2. Tìm nút vừa bấm để highlight (thêm class active)
    // Map tên tab với thứ tự nút: Vocab(0), Grammar(1), Flashcard(2), Practice(3), AI(4)
    const tabMap = { 'vocab': 0, 'grammar': 1, 'flashcard': 2, 'practice': 3, 'ai-chat': 4 };
    const btns = document.querySelectorAll('.tab-btn');
    
    // Nếu tìm thấy nút tương ứng thì highlight nó
    if (btns[tabMap[tabName]]) {
        btns[tabMap[tabName]].classList.add('active');
    }

    // 3. Hiển thị nội dung tương ứng
    if (contentArea) {
        contentArea.innerHTML = ''; // Xóa nội dung cũ
        
        if (tabName === 'vocab') {
            renderVocab();
        } else if (tabName === 'grammar') {
            renderGrammar();
        } else if (tabName === 'flashcard') {
            // Kiểm tra xem hàm Flashcard đã có chưa, nếu chưa thì báo lỗi nhẹ
            if (typeof initFlashcard === 'function') initFlashcard();
        } else if (tabName === 'practice') {
            renderPractice();
        } else if (tabName === 'ai-chat') {
            // ĐÂY LÀ DÒNG QUAN TRỌNG ĐỂ HIỆN KHUNG CHAT
            if (typeof renderAIChat === 'function') {
                renderAIChat(); 
            } else {
                contentArea.innerHTML = "<p>Lỗi: Chưa tìm thấy hàm renderAIChat trong file script.js</p>";
            }
        }
    }
}

// 2. Hàm Khởi tạo Flashcard
function initFlashcard() {
    // if (!window.currentUser) {
    //     renderLockedContent('content-area', 'Flashcard Ghi Nhớ');
    //     return;
    // }
    if (!currentLesson.vocab || currentLesson.vocab.length === 0) {
        contentArea.innerHTML = "<p>Bài này chưa có từ vựng để học Flashcard.</p>";
        return;
    }
    currentFlashcardIndex = 0; // Reset về từ đầu tiên
    renderCardUI();
}

// 3. Hàm vẽ giao diện thẻ
function renderCardUI() {
    const vocab = currentLesson.vocab[currentFlashcardIndex];
    
    // --- TỰ ĐỘNG TRA TỪ ĐIỂN ĐỂ LẤY THÊM THÔNG TIN ---
    // Tìm xem từ này có trong dictionaryDB không để lấy context & example
    let extraInfo = {}; 
    if (typeof dictionaryDB !== 'undefined') {
        const found = dictionaryDB.find(d => d.word.toLowerCase() === vocab.word.toLowerCase());
        if (found) {
            extraInfo = found;
        }
    }

    // Dữ liệu hiển thị (Ưu tiên lấy từ dictionaryDB nếu có, không thì lấy từ bài học)
    const displayData = {
        word: vocab.word,
        ipa: vocab.ipa || "",
        meaning: vocab.meaning,
        type: vocab.type || extraInfo.type || "verb", // Mặc định nếu thiếu
        context: extraInfo.context || "Dùng trong giao tiếp hàng ngày.", // Mặc định nếu thiếu
        example: extraInfo.example || `I use "${vocab.word}" every day.` // Tạo ví dụ giả nếu thiếu
    };

    contentArea.innerHTML = `
        <div class="flashcard-container">
            <div style="margin-bottom: 10px; color: #777;">
                Thẻ ${currentFlashcardIndex + 1} / ${currentLesson.vocab.length}
            </div>

            <div class="flashcard-scene" onclick="this.querySelector('.flashcard-inner').classList.toggle('is-flipped')">
                <div class="flashcard-inner">
                    <div class="flashcard-face flashcard-front">
                        <div class="fc-word">${displayData.word}</div>
                        <div class="fc-ipa">${displayData.ipa}</div>
                        <button class="btn-speak" onclick="event.stopPropagation(); speak('${displayData.word}')">🔊 Nghe phát âm</button>
                        <div class="fc-hint">(Bấm để lật xem nghĩa)</div>
                    </div>

                    <div class="flashcard-face flashcard-back">
                        <div class="fc-meaning">${displayData.meaning}</div>
                        <div class="fc-type">Loại từ: ${displayData.type}</div>
                        <div class="fc-context">💡 ${displayData.context}</div>
                        <div class="fc-example">📝 Ví dụ: "${displayData.example}"</div>
                    </div>
                </div>
            </div>

            <div class="flashcard-controls">
                <button class="btn-control" onclick="prevCard()"><i class="fa-solid fa-arrow-left"></i> Trước</button>
                <button class="btn-control" onclick="nextCard()">Tiếp theo <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    `;
}

// 4. Chuyển thẻ tiếp theo
function nextCard() {
    if (currentFlashcardIndex < currentLesson.vocab.length - 1) {
        currentFlashcardIndex++;
        renderCardUI();
    } else {
        alert("Chúc mừng! Bạn đã học hết thẻ trong bài này.");
        // Có thể reset về 0 nếu muốn
        // currentFlashcardIndex = 0; renderCardUI();
    }
}

// 5. Quay lại thẻ trước
function prevCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderCardUI();
    }
}

// --- LOGIC LUYỆN NÓI (NÂNG CẤP: CHỜ 2.5 GIÂY) ---
let practiceRecognition;
let practiceSilenceTimer;

// --- 4. HÀM XỬ LÝ MICRO (CHECK PRONUNCIATION) ---
window.checkPronunciation = function(targetPhrase) {
    const resultDisplay = document.getElementById('speak-result');
    const micBtn = document.getElementById('mic-btn');

    if (!('webkitSpeechRecognition' in window)) {
        alert("Trình duyệt không hỗ trợ. Hãy dùng Chrome trên máy tính.");
        return;
    }

    if (micBtn.classList.contains('listening')) {
        if (practiceRecognition) practiceRecognition.stop();
        return;
    }

    practiceRecognition = new webkitSpeechRecognition();
    practiceRecognition.lang = 'en-US'; 
    practiceRecognition.interimResults = true; 
    practiceRecognition.continuous = true; 

    practiceRecognition.start();
    micBtn.classList.add('listening');
    
    // Xóa nội dung cũ, hiện trạng thái đang nghe
    resultDisplay.innerHTML = `<span style="color:#2b70c9; font-weight:bold;">👂 Đang nghe... (Nói xong hãy im lặng 2.5s)</span>`;
    resultDisplay.className = "feedback";

    practiceRecognition.onresult = function(event) {
        clearTimeout(practiceSilenceTimer);

        let transcript = '';
        for (let i = 0; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }

        // Hiện chữ người dùng đang nói (Realtime)
        resultDisplay.innerHTML = `🗣️ Bạn đang nói: "<b style="color:#333;">${transcript}</b>"`;

        // Đợi im lặng 2.5s thì chấm điểm
        practiceSilenceTimer = setTimeout(() => {
            console.log("Đang dừng mic để chấm điểm..."); // Debug xem có chạy vào đây không
            practiceRecognition.stop();
            comparePronunciation(targetPhrase, transcript);
        }, 2500); 
    };

    practiceRecognition.onerror = function(event) {
        if (event.error === 'no-speech') return; 
        console.warn("Mic Error:", event.error);
        micBtn.classList.remove('listening');
        resultDisplay.innerText = "❌ Lỗi Micro. Hãy thử lại.";
    };

    practiceRecognition.onend = function() {
        micBtn.classList.remove('listening');
        clearTimeout(practiceSilenceTimer);
    };
};

// --- 5. HÀM CHẤM ĐIỂM (LOGIC SO SÁNH) ---
function comparePronunciation(target, input) {
    const resultDisplay = document.getElementById('speak-result');
    
    // 1. Chuẩn hóa dữ liệu (Chuyển số thành chữ, bỏ dấu câu)
    const cleanTarget = normalizeText(target);
    const cleanInput = normalizeText(input);

    if (!cleanInput) {
        resultDisplay.innerHTML = "❌ Bạn chưa nói gì cả (hoặc mic không nghe rõ).";
        return;
    }

    // 2. LOGIC CHẤM ĐIỂM MỚI (Đếm số từ trùng khớp)
    
    // Tách câu thành mảng các từ (ví dụ: "i", "wake", "up"...)
    const targetWords = cleanTarget.split(' ');
    const inputWords = cleanInput.split(' ');
    
    let matchCount = 0;

    // Duyệt qua từng từ của câu mẫu, xem người dùng có nói từ đó không
    targetWords.forEach(word => {
        if (inputWords.includes(word)) {
            matchCount++;
        }
    });

    // Tính phần trăm độ chính xác
    // (Số từ đúng / Tổng số từ của câu mẫu)
    const accuracy = matchCount / targetWords.length;

    console.log(`Đúng ${matchCount}/${targetWords.length} từ. Tỷ lệ: ${accuracy}`);

    // 3. Đánh giá: Phải đúng trên 70% số từ mới được coi là ĐÚNG
    // (Hoặc nếu câu ngắn dưới 3 từ thì phải đúng 100%)
    const threshold = targetWords.length <= 3 ? 1.0 : 0.65;

    if (accuracy >= threshold) {
        resultDisplay.innerHTML = `
            <div style="background:#e6fffa; border:2px solid #27ae60; padding:15px; border-radius:10px;">
                <div style="color:#27ae60; font-size: 20px; font-weight:bold; margin-bottom:5px;">
                    ✅ Tuyệt vời! Chính xác.
                </div>
                <div>Bạn nói: "<i>${input}</i>"</div>
            </div>
        `;
    } else {
        resultDisplay.innerHTML = `
            <div style="background:#fff5f5; border:2px solid #ff4b4b; padding:15px; border-radius:10px;">
                <div style="color:#ff4b4b; font-size: 18px; font-weight:bold; margin-bottom:5px;">
                    ⚠️ Chưa chính xác lắm
                </div>
                <div style="margin-bottom:5px;">Mẫu: <b>${target}</b></div>
                <div style="margin-bottom:5px;">Bạn nói: "<i>${input}</i>"</div>
                <div style="font-size:13px; color:#777;">
                    (Bạn mới đúng khoảng ${Math.round(accuracy * 100)}% nội dung)
                </div>
            </div>
        `;
    }
}

/* ============================================================
   LOGIC AI CHAT & VOICE 
   ============================================================ */

let cachedModel = null; // Biến lưu model đã tìm thấy

// 1. Render Giao diện Chat
// function renderAIChat() {
//     if (!window.currentUser) {
//         renderLockedContent('content-area', 'Trợ Lý AI & Luyện Nói');
//         return;
//     }
//     contentArea.innerHTML = `
//         <div class="chat-container">
//             <div class="chat-box" id="chat-box">
//                 <div class="chat-message ai">
//                     Hello! I am your AI English Tutor. <br>
//                     (Tôi đang kết nối với Google để tìm model phù hợp nhất cho bạn...)
//                 </div>
//             </div>
//             <div class="chat-input-area">
//                 <button class="chat-mic-btn" id="chat-mic" onclick="toggleVoiceChat()">
//                     <i class="fa-solid fa-microphone"></i>
//                 </button>
//                 <input type="text" id="chat-input" placeholder="Nhập tin nhắn..." onkeypress="handleEnter(event)">
//                 <button class="chat-btn" onclick="sendMessage()">Gửi</button>
//             </div>
//         </div>
//         <div style="text-align:center; margin-top:10px;">
//             <label style="font-size:14px; color:#555; cursor:pointer; user-select:none;">
//                 <input type="checkbox" id="auto-speak-toggle" > 🔊 Tự động đọc câu trả lời
//             </label>
//         </div>
//     `;
    
//     // Tự động kiểm tra model ngay khi mở tab
//     detectBestModel(); 
// }

// function handleEnter(e) {
//     if (e.key === 'Enter') sendMessage();
// }

// 2. Hàm Tự động dò tìm Model khả dụng (QUAN TRỌNG NHẤT)
async function detectBestModel() {
    if (cachedModel) return cachedModel; // Nếu đã tìm thấy rồi thì dùng luôn

    try {
        // Hỏi Google: "Tôi được phép dùng những model nào?"
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();

        if (data.error) {
            console.error("Lỗi API Key:", data.error.message);
            appendMessage("⚠️ Lỗi API Key: " + data.error.message, 'ai');
            return null;
        }

        // Lọc ra các model hỗ trợ chat (generateContent)
        const validModels = data.models.filter(m => 
            m.supportedGenerationMethods.includes("generateContent")
        );

        if (validModels.length === 0) {
            appendMessage("⚠️ Không tìm thấy model nào khả dụng cho Key này.", 'ai');
            return null;
        }

        // Ưu tiên chọn model 'flash' (nhanh) hoặc 'pro' (thông minh)
        // Sắp xếp: Ưu tiên model có chữ 'flash' lên đầu, sau đó đến 'pro'
        validModels.sort((a, b) => {
            if (a.name.includes("flash")) return -1;
            if (b.name.includes("flash")) return 1;
            return 0;
        });

        // Lấy tên model đầu tiên (bỏ phần 'models/' ở đầu nếu có)
        cachedModel = validModels[0].name.replace("models/", "");
        console.log("✅ Đã tìm thấy model tốt nhất:", cachedModel);
        
        // Thông báo nhẹ cho người dùng
        const chatBox = document.getElementById('chat-box');
        if(chatBox) {
            const firstMsg = chatBox.querySelector('.chat-message.ai');
            if(firstMsg) firstMsg.innerHTML = `Hello! I am ready. (Đã kết nối với <b>${cachedModel}</b>).<br>Hãy bấm micro để nói chuyện nhé!`;
        }

        return cachedModel;

    } catch (e) {
        console.error("Lỗi kết nối danh sách model:", e);
        // Fallback: Nếu không dò được thì dùng liều model quốc dân này
        cachedModel = "gemini-1.5-flash"; 
        return cachedModel;
    }
}

// --- LOGIC GỬI TIN NHẮN (BẢN FIX LỖI HIỂN THỊ) ---

async function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const userText = inputField.value.trim();

    if (!userText) return;

    // 1. Hiện tin nhắn của BẠN (Bên phải - Màu xanh)
    appendMessage(userText, 'user');
    inputField.value = '';

    // Kiểm tra API Key
    if (typeof API_KEY === 'undefined' || !API_KEY || API_KEY.includes("HÃY_DÁN")) {
        appendMessage("⚠️ LỖI: Chưa có API Key! Hãy kiểm tra file script.js", 'ai');
        return;
    }

    // 2. Hiện trạng thái "Thinking..." (Tạm thời)
    const loadingDivId = appendMessage("Thinking...", 'ai');

    try {
        // Đảm bảo đã có model trước khi gọi
        const modelName = await detectBestModel();
        
        if (!modelName) {
            removeMessage(loadingDivId); // Xóa chữ thinking
            appendMessage("❌ Không tìm thấy model AI nào. Kiểm tra lại API Key.", 'ai');
            return;
        }

        const responseText = await callGeminiAPI(userText, modelName);
        
        // 3. XÓA chữ "Thinking..." đi
        removeMessage(loadingDivId);

        // 4. Tạo tin nhắn MỚI của AI (Bên trái - Màu xám)
        appendMessage(responseText, 'ai');
        
        // Tự động đọc
        const autoSpeak = document.getElementById('auto-speak-toggle').checked;
        if (autoSpeak) speak(responseText);

    } catch (error) {
        console.error("Lỗi AI:", error);
        removeMessage(loadingDivId); // Xóa chữ thinking
        appendMessage(`❌ Lỗi: ${error.message}`, 'ai');
    }
}

// --- CÁC HÀM HỖ TRỢ GIAO DIỆN (UI HELPERS) ---

// Thêm tin nhắn vào khung chat
function appendMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.id = 'msg-' + Date.now() + Math.random(); // ID ngẫu nhiên để không trùng
    
    // Xử lý xuống dòng và in đậm (Markdown cơ bản)
    let formattedText = text.replace(/\n/g, '<br>');
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); // In đậm **text**

    div.innerHTML = formattedText;
    
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; // Tự cuộn xuống đáy
    return div.id;
}

// Xóa tin nhắn (dùng để xóa chữ Thinking...)
function removeMessage(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

// 4. Gọi API với Model đã tìm được
async function callGeminiAPI(text, modelName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;
    
    const prompt = `
        You are a friendly English tutor. The user is a beginner.
        User said: "${text}"
        Task:
        1. Correct grammar mistakes politely.
        2. Reply in simple English.
        3. Keep it short (under 50 words).
    `;

    const requestBody = {
        contents: [{ parts: [{ text: prompt }] }]
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    if (data.error) throw new Error(data.error.message);
    if (!data.candidates || data.candidates.length === 0) return "⚠️ AI không phản hồi.";

    return data.candidates[0].content.parts[0].text;
}

// Biến lưu bộ đếm thời gian im lặng
let silenceTimer;
let recognition;

// 5. Chức năng Voice Chat (Nâng cấp: Không mất chữ cũ + Nghe liên tục)
function toggleVoiceChat() {
    const micBtn = document.getElementById('chat-mic');
    const inputField = document.getElementById('chat-input');

    if (!('webkitSpeechRecognition' in window)) {
        alert("Trình duyệt không hỗ trợ. Hãy dùng Chrome trên máy tính.");
        return;
    }

    if (micBtn.classList.contains('listening')) {
        if (recognition) recognition.stop();
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; 
    recognition.interimResults = true; 
    recognition.continuous = true; // Nghe liên tục

    recognition.start();
    
    micBtn.classList.add('listening');
    inputField.placeholder = "Đang nghe... (Dừng 2s tự gửi)";
    inputField.value = ""; 

    recognition.onresult = function(event) {
        clearTimeout(silenceTimer); // Xóa bộ đếm cũ

        // --- ĐOẠN SỬA LỖI QUAN TRỌNG Ở ĐÂY ---
        // Thay vì chỉ lấy event.results[i], ta duyệt từ 0 để lấy cả những câu đã chốt trước đó
        let finalTranscript = '';
        
        for (let i = 0; i < event.results.length; ++i) {
            finalTranscript += event.results[i][0].transcript;
        }

        // Hiển thị toàn bộ nội dung đã nói
        inputField.value = finalTranscript;
        // -------------------------------------

        // Thiết lập bộ đếm mới: Im lặng 2.5 giây thì tự gửi (Tăng lên chút cho thoải mái)
        silenceTimer = setTimeout(() => {
            recognition.stop(); 
            sendMessage();      
        }, 2500); 
    };

    recognition.onerror = function(event) {
        // Đôi khi lỗi 'no-speech' xảy ra do im lặng quá lâu, ta bỏ qua để trải nghiệm mượt hơn
        if (event.error === 'no-speech') return;
        
        console.warn("Lỗi Voice:", event.error);
        micBtn.classList.remove('listening');
        inputField.placeholder = "Lỗi mic. Thử lại!";
    };
    
    recognition.onend = function() {
        micBtn.classList.remove('listening');
        inputField.placeholder = "Nhập tin nhắn...";
        clearTimeout(silenceTimer);
    };
}

// 6. Text-to-Speech
function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// 7. Helper Chat UI
function appendMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.id = 'msg-' + Date.now();
    div.innerHTML = text.replace(/\n/g, '<br>');
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    return div.id;
}

function updateMessage(id, newText) {
    const div = document.getElementById(id);
    if (div) {
        div.innerHTML = newText.replace(/\n/g, '<br>');
        const chatBox = document.getElementById('chat-box');
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// --- KHỞI CHẠY ỨNG DỤNG (WINDOW ONLOAD) ---
// Đây là phần sửa lỗi quan trọng nhất: Chỉ chạy code khi HTML đã tải xong
window.onload = function() {
    init(); // Tạo danh sách bài học

    // Kiểm tra màn hình để ẩn/hiện sidebar ban đầu
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-toggle-btn');
    
    if (window.innerWidth <= 768) {
        if(sidebar) sidebar.classList.add('hidden');
        if(menuBtn) menuBtn.style.display = 'block';
    } else {
        if(menuBtn) menuBtn.style.display = 'none';
    }
    
    // Ẩn kết quả từ điển khi click ra ngoài
    document.addEventListener('click', function(event) {
        const dictWrapper = document.querySelector('.dict-wrapper');
        const resultBox = document.getElementById('dict-results');
        if (dictWrapper && !dictWrapper.contains(event.target)) {
            if(resultBox) resultBox.style.display = 'none';
        }
    });
};


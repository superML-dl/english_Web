/* ============================================================
   1. CẤU HÌNH & KHỞI TẠO
   ============================================================ */

// API Key cho AI (Nếu bạn chưa có thì để trống hoặc dùng key test)
// const API_KEY = CONFIG.API_KEY; 

let currentLesson = null;
const contentArea = document.getElementById('content-area');

// Chạy khi trang web tải xong
window.onload = function() {
    init(); // Tạo danh sách bài học

    // Ẩn kết quả từ điển khi click ra ngoài
    document.addEventListener('click', function(event) {
        const dictWrapper = document.querySelector('.dict-wrapper');
        const resultBox = document.getElementById('dict-results');
        if (dictWrapper && !dictWrapper.contains(event.target)) {
            if(resultBox) resultBox.style.display = 'none';
        }
    });

    // Reset giao diện menu cho chắc chắn
    handleResize();
};

// Lắng nghe sự kiện thay đổi kích thước màn hình để reset menu
window.addEventListener('resize', handleResize);

function handleResize() {
    if (window.innerWidth > 768) {
        // Nếu là Desktop: Xóa hết class của Mobile
        const sidebar = document.getElementById('my-sidebar');
        const overlay = document.getElementById('mobile-overlay');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.style.display = 'none';
        if (mobileBtn) mobileBtn.style.display = 'none';
    } else {
        // Nếu là Mobile: Hiện lại nút 3 gạch (nếu menu đang đóng)
        const sidebar = document.getElementById('my-sidebar');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        if (sidebar && !sidebar.classList.contains('open')) {
            if (mobileBtn) mobileBtn.style.display = 'block';
        }
    }
}

/* ============================================================
   2. LOGIC MENU (QUAN TRỌNG NHẤT)
   ============================================================ */

// 1. Mở Menu Mobile
function openMobileMenu() {
    const sidebar = document.getElementById('my-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (sidebar && overlay) {
        sidebar.classList.add('open');   // Trượt menu ra
        overlay.style.display = 'block'; // Hiện màn đen
        if (mobileBtn) mobileBtn.style.display = 'none'; // Ẩn nút 3 gạch
    }
}

// 2. Đóng Menu (Thông minh: Chỉ chạy trên Mobile)
function closeAnyMenu() {
    // [BẢO VỆ] Nếu là Desktop thì KHÔNG LÀM GÌ CẢ (Thoát ngay)
    if (window.innerWidth > 768) {
        return; 
    }

    const sidebar = document.getElementById('my-sidebar');
    const overlay = document.getElementById('mobile-overlay');
    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (sidebar) sidebar.classList.remove('open'); // Trượt menu vào
    if (overlay) overlay.style.display = 'none';   // Ẩn màn đen
    if (mobileBtn) mobileBtn.style.display = 'block'; // Hiện lại nút 3 gạch
}

// 3. Hàm Desktop Toggle (Bỏ trống vì Desktop cố định)
function toggleDesktopSidebar() {
    // Không làm gì cả trên giao diện cố định
}

/* ============================================================
   3. LOGIC BÀI HỌC (LESSON)
   ============================================================ */

// 1. Khởi tạo danh sách bài học bên trái
function init() {
    const list = document.getElementById('lesson-list');
    if (!list) return;
    
    list.innerHTML = '';
    courseData.forEach((lesson, index) => {
        const li = document.createElement('li');
        
        // Logic khóa bài (Tạm thời mở hết = false)
        const isLocked = false; 

        if (isLocked) {
            li.className = 'locked-lesson';
            li.style.opacity = '0.6';
            li.style.cursor = 'not-allowed';
            li.style.background = '#f9f9f9';
            li.innerHTML = `<span>🔒 Bài ${index + 1}: (Bị khóa)</span> <i class="fa-solid fa-lock" style="color: #999;"></i>`;
            li.onclick = () => {
                alert("Bạn cần đăng nhập để mở khóa!");
            };
        } else {
            li.innerHTML = `Bài ${index + 1}: ${lesson.title}`;
            if (currentLesson && currentLesson.id === lesson.id) {
                li.classList.add('active');
            }
            li.onclick = () => loadLesson(index);
        }
        list.appendChild(li);
    });
}

// 2. Tải bài học & Đóng menu nếu là mobile
function loadLesson(index) {
    console.log("Đang tải bài học số:", index);
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

    // QUAN TRỌNG: Đóng menu mobile sau khi chọn bài
    closeAnyMenu();
}

/* ============================================================
   4. LOGIC TABS & NỘI DUNG
   ============================================================ */

function openTab(tabName) {
    // 1. Highlight nút Tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    const tabMap = { 'vocab': 0, 'grammar': 1, 'flashcard': 2, 'practice': 3, 'ai-chat': 4 };
    const btns = document.querySelectorAll('.tab-btn');
    if (btns[tabMap[tabName]]) {
        btns[tabMap[tabName]].classList.add('active');
    }

    // 2. Hiển thị nội dung
    if (contentArea) {
        contentArea.innerHTML = ''; // Xóa nội dung cũ
        
        if (tabName === 'vocab') {
            renderVocab();
        } else if (tabName === 'grammar') {
            renderGrammar();
        } else if (tabName === 'flashcard') {
            if (typeof initFlashcard === 'function') initFlashcard();
        } else if (tabName === 'practice') {
            renderPractice();
        } else if (tabName === 'ai-chat') {
            if (typeof renderAIChat === 'function') {
                renderAIChat(); 
            } else {
                contentArea.innerHTML = "<p>Tính năng đang phát triển...</p>";
            }
        }
    }
}

// Render Từ vựng
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

// Render Ngữ pháp
function renderGrammar() {
    if (!currentLesson.grammar) return;
    const div = document.createElement('div');
    div.className = 'grammar-section';
    div.innerHTML = `<h3>${currentLesson.grammar.title}</h3>${currentLesson.grammar.content}`;
    contentArea.appendChild(div);
}

/* ============================================================
   5. LOGIC BÀI TẬP (PRACTICE)
   ============================================================ */

let userAnswers = {}; // Lưu đáp án tạm

function renderPractice() {
    contentArea.innerHTML = ''; 
    userAnswers = {}; 

    // A. Phần Speaking
    if (currentLesson.speaking) {
        // ... (Giữ nguyên code phần Speaking của bạn ở đây) ...
        // Nếu bạn cần code Speaking chuẩn thì dùng lại code của Ngày 16
        const speakContainer = document.createElement('div');
        const speakingList = Array.isArray(currentLesson.speaking) ? currentLesson.speaking : [currentLesson.speaking];
        
        let speakHtml = `<h3>🎙️ Luyện Phát Âm</h3><p>Bấm micro và đọc to các câu sau:</p>`;
        speakingList.forEach((text, idx) => {
            const safeText = text.replace(/'/g, "\\'");
            speakHtml += `
                <div class="speaking-box" style="margin-bottom:15px;">
                    <div class="speaking-text">"${text}"</div>
                    <button class="btn-speak" onclick="speak('${safeText}')">🔊 Nghe</button>
                    <button id="mic-btn-${idx}" class="btn-mic" onclick="checkPronunciation('${safeText}', ${idx})"><i class="fa-solid fa-microphone"></i></button>
                    <div id="speak-result-${idx}" class="feedback" style="margin-top:5px; min-height:20px;"></div>
                </div>`;
        });
        speakContainer.innerHTML = speakHtml;
        contentArea.appendChild(speakContainer);
    }

    // B. Phần Quiz (Trắc nghiệm + Tự luận + Câu hỏi mở)
    if (currentLesson.quiz) {
        const quizContainer = document.createElement('div');
        quizContainer.id = 'quiz-container';
        quizContainer.innerHTML = `<h3 style="margin-top:30px;">📝 Bài Tập Thực Hành</h3>`;

        currentLesson.quiz.forEach((q, idx) => {
            const div = document.createElement('div');
            div.className = 'quiz-item';
            div.id = `quiz-q-${idx}`;
            
            let html = `<p style="font-size: 16px; margin-bottom: 10px;"><b>Câu ${idx+1}:</b> ${q.question}</p>`;

            if (q.type === 'choice') {
                let optionsHtml = '';
                q.options.forEach((opt, optIdx) => {
                    optionsHtml += `<button class="quiz-option-btn" id="q${idx}-opt${optIdx}" onclick="selectOption(${idx}, ${optIdx})">${opt}</button>`;
                });
                html += `<div class="quiz-options">${optionsHtml}</div>`;
            } 
            else if (q.type === 'text') {
                html += `<input type="text" class="quiz-input" placeholder="Nhập đáp án chính xác..." oninput="recordAnswer(${idx}, this.value)">`;
            }
            // --- TÍNH NĂNG MỚI: CÂU HỎI MỞ (OPEN) ---
            else if (q.type === 'open') {
                html += `
                    <textarea class="quiz-input" rows="3" placeholder="Viết ý tưởng của bạn vào đây..." oninput="recordAnswer(${idx}, this.value)" style="width:100%; padding:10px; border-radius:10px; border:2px solid #eee; font-family:inherit;"></textarea>
                    <div class="feedback-msg" style="margin-top:10px; color:#555; font-style:italic; display:none;"></div>
                `;
            }
            // ----------------------------------------

            html += `<div class="feedback-msg"></div>`;
            div.innerHTML = html;
            quizContainer.appendChild(div);
        });

        // Nút nộp bài
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
            <button id="submit-quiz-btn" class="chat-btn" onclick="submitQuiz()" style="margin-top:20px;">Nộp bài</button>
            <div id="final-score" style="display:none; margin-top: 15px; font-weight:bold; font-size:18px;"></div>
            <button id="retry-quiz-btn" class="chat-btn" onclick="renderPractice()" style="display:none; background:#555; margin-top:10px;">Làm lại</button>
        `;
        quizContainer.appendChild(resultDiv);
        contentArea.appendChild(quizContainer);
    }
}

// Lưu lựa chọn
function selectOption(qIdx, optIdx) {
    userAnswers[qIdx] = optIdx;
    const buttons = document.querySelectorAll(`#quiz-q-${qIdx} .quiz-option-btn`);
    buttons.forEach(btn => btn.classList.remove('selected'));
    document.getElementById(`q${qIdx}-opt${optIdx}`).classList.add('selected');
}

function recordAnswer(qIdx, value) {
    userAnswers[qIdx] = value.trim();
}

// Chấm điểm
function submitQuiz() {
    let correctCount = 0;
    // Chỉ tính điểm các câu trắc nghiệm (choice) và điền từ chính xác (text)
    // Các câu hỏi mở (open) sẽ không tính vào tổng điểm để tránh gây nản lòng
    const scorableQuestions = currentLesson.quiz.filter(q => q.type !== 'open'); 
    const totalScore = scorableQuestions.length;

    currentLesson.quiz.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const itemDiv = document.getElementById(`quiz-q-${idx}`);
        const feedbackDiv = itemDiv.querySelector('.feedback-msg'); // Chọn div feedback cuối cùng
        
        itemDiv.classList.remove('correct-bg', 'wrong-bg');
        let isCorrect = false;

        // XỬ LÝ CÂU HỎI MỞ (MỚI)
        if (q.type === 'open') {
            // Luôn hiện màu xanh (khích lệ) và hiện gợi ý
            itemDiv.classList.add('correct-bg');
            feedbackDiv.style.display = 'block';
            feedbackDiv.innerHTML = `
                <span style="color:#2b70c9;">💡 <b>Gợi ý mẫu (Band 8+):</b></span><br>
                "${q.answer}"
            `;
            return; // Bỏ qua phần tính điểm bên dưới
        }

        // Xử lý các loại cũ
        if (q.type === 'text') {
            if (userAns && normalizeText(userAns) === normalizeText(q.answer)) isCorrect = true;
        } else if (q.type === 'choice') {
            if (userAns === q.answer) isCorrect = true;
        }

        if (isCorrect) {
            correctCount++;
            itemDiv.classList.add('correct-bg');
            feedbackDiv.innerHTML = `<span style="color:var(--primary-color); font-weight:bold;">✅ Chính xác!</span>`;
        } else {
            itemDiv.classList.add('wrong-bg');
            let rightAnswerText = q.type === 'choice' ? q.options[q.answer] : q.answer;
            feedbackDiv.innerHTML = `<span style="color:#ff4b4b;">❌ Đáp án đúng: <b>${rightAnswerText}</b></span>`;
        }
    });

    // Hiển thị điểm số (chỉ tính trên các câu có đáp án cố định)
    const scoreDiv = document.getElementById('final-score');
    scoreDiv.style.display = 'block';
    scoreDiv.innerHTML = `Kết quả: ${correctCount}/${totalScore} câu trắc nghiệm chính xác.`;
    
    document.getElementById('submit-quiz-btn').style.display = 'none';
    document.getElementById('retry-quiz-btn').style.display = 'inline-block';
}

/* ============================================================
   6. LOGIC FLASHCARD
   ============================================================ */

let currentFlashcardIndex = 0;

function initFlashcard() {
    if (!currentLesson.vocab || currentLesson.vocab.length === 0) {
        contentArea.innerHTML = "<p>Bài này chưa có từ vựng để học Flashcard.</p>";
        return;
    }
    currentFlashcardIndex = 0;
    renderCardUI();
}

function renderCardUI() {
    const vocab = currentLesson.vocab[currentFlashcardIndex];
    let extraInfo = {}; 
    if (typeof dictionaryDB !== 'undefined') {
        const found = dictionaryDB.find(d => d.word.toLowerCase() === vocab.word.toLowerCase());
        if (found) extraInfo = found;
    }

    const displayData = {
        word: vocab.word,
        ipa: vocab.ipa || "",
        meaning: vocab.meaning,
        type: vocab.type || "verb", 
        // SỬA Ở ĐÂY: Lấy trực tiếp từ vocab.context và vocab.example
        context: vocab.context || "Ngữ cảnh đang cập nhật", 
        example: vocab.example || `Ví dụ đang cập nhật cho từ "${vocab.word}"`
    };

    contentArea.innerHTML = `
        <div class="flashcard-container">
            <div style="margin-bottom: 10px; color: #777;">Thẻ ${currentFlashcardIndex + 1} / ${currentLesson.vocab.length}</div>
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

function nextCard() {
    if (currentFlashcardIndex < currentLesson.vocab.length - 1) {
        currentFlashcardIndex++;
        renderCardUI();
    } else {
        alert("Chúc mừng! Bạn đã học hết thẻ trong bài này.");
    }
}

function prevCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        renderCardUI();
    }
}

/* ============================================================
   7. CÔNG CỤ HỖ TRỢ (Voice, Dict, Helper)
   ============================================================ */

function speak(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function normalizeText(text) {
    return text.toLowerCase().replace(/[.,!?;:]/g, '').trim();
}

// Logic kiểm tra phát âm (Voice)
let practiceRecognition;
let practiceSilenceTimer;
let currentMicIndex = -1;

window.checkPronunciation = function(targetPhrase, index) {
    // Lấy đúng phần tử theo ID index (mic-btn-0, mic-btn-1...)
    const resultDisplay = document.getElementById(`speak-result-${index}`);
    const micBtn = document.getElementById(`mic-btn-${index}`);

    // 1. Kiểm tra trình duyệt
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Trình duyệt không hỗ trợ. Hãy dùng Google Chrome.");
        return;
    }

    // Nếu đang bấm lại chính nút mic đó -> Dừng
    if (micBtn.classList.contains('listening')) {
        if (practiceRecognition) practiceRecognition.stop();
        return;
    }

    // Nếu đang nghe ở một mic khác -> Dừng mic cũ trước khi bật mic mới
    if (currentMicIndex !== -1 && currentMicIndex !== index) {
        const oldMic = document.getElementById(`mic-btn-${currentMicIndex}`);
        if (oldMic) oldMic.classList.remove('listening');
        if (practiceRecognition) practiceRecognition.stop();
        clearTimeout(practiceSilenceTimer);
    }

    currentMicIndex = index; // Cập nhật index hiện tại

    // 2. Cấu hình Mic
    practiceRecognition = new SpeechRecognition();
    practiceRecognition.lang = 'en-US'; 
    practiceRecognition.interimResults = true; 
    
    const isMobile = window.innerWidth <= 768;
    practiceRecognition.continuous = !isMobile; 

    let finalTranscript = '';
    let hasChecked = false;

    practiceRecognition.start();
    micBtn.classList.add('listening');
    
    resultDisplay.innerHTML = `<span style="color:#2b70c9; font-weight:bold;">👂 Đang nghe...</span>`;
    resultDisplay.className = "feedback";

    // 3. Xử lý kết quả
    practiceRecognition.onresult = function(event) {
        clearTimeout(practiceSilenceTimer);
        finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            finalTranscript += event.results[i][0].transcript;
        }

        resultDisplay.innerHTML = `🗣️ Bạn nói: "<b style="color:#333;">${finalTranscript}</b>"`;

        practiceSilenceTimer = setTimeout(() => {
            practiceRecognition.stop(); 
        }, 2000); 
    };

    // 4. Xử lý lỗi
    practiceRecognition.onerror = function(event) {
        if (event.error === 'no-speech') return;
        micBtn.classList.remove('listening');
        resultDisplay.innerHTML = `<span style="color:red">❌ Lỗi: ${event.error}</span>`;
    };

    // 5. Kết thúc và chấm điểm
    practiceRecognition.onend = function() {
        micBtn.classList.remove('listening');
        clearTimeout(practiceSilenceTimer);

        if (!hasChecked && finalTranscript.trim().length > 0) {
            hasChecked = true;
            // Gọi hàm so sánh (cần sửa hàm comparePronunciation để nhận resultDisplay làm tham số hoặc tự tìm lại)
            comparePronunciation(targetPhrase, finalTranscript, resultDisplay); 
        } else if (!hasChecked) {
             resultDisplay.innerHTML = "❌ Chưa nghe rõ.";
        }
    };
};

function comparePronunciation(target, input, uiElement) {
    // Nếu không truyền uiElement (tương thích code cũ), thử tìm mặc định
    const resultDisplay = uiElement || document.getElementById('speak-result');
    if (!resultDisplay) return;

    const cleanTarget = normalizeText(target);
    const cleanInput = normalizeText(input);

    if (!cleanInput) {
        resultDisplay.innerHTML = "❌ Bạn chưa nói gì cả.";
        return;
    }

    const targetWords = cleanTarget.split(' ');
    const inputWords = cleanInput.split(' ');
    let matchCount = 0;

    targetWords.forEach(word => {
        if (inputWords.includes(word)) matchCount++;
    });

    const accuracy = matchCount / targetWords.length;
    const threshold = targetWords.length <= 3 ? 1.0 : 0.65;

    if (accuracy >= threshold) {
        resultDisplay.innerHTML = `
            <div style="background:#e6fffa; border:2px solid #27ae60; padding:10px; border-radius:10px; margin-top:5px;">
                <div style="color:#27ae60; font-weight:bold;">✅ Chính xác!</div>
                <div>Bạn: "<i>${input}</i>"</div>
            </div>`;
    } else {
        resultDisplay.innerHTML = `
            <div style="background:#fff5f5; border:2px solid #ff4b4b; padding:10px; border-radius:10px; margin-top:5px;">
                <div style="color:#ff4b4b; font-weight:bold;">⚠️ Chưa chuẩn</div>
                <div>Mẫu: <b>${target}</b></div>
                <div>Bạn: "<i>${input}</i>"</div>
            </div>`;
    }
}

// Logic tra từ điển
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
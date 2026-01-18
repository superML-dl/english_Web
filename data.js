const courseData = [
    // --- NGÀY 1 (GIỮ NGUYÊN) ---
    {
        id: 1,
        title: "Ngày 1: Thì Hiện Tại Đơn & Daily Routine",
        vocab: [
            { word: "Wake up", ipa: "/weɪk ʌp/", meaning: "Thức dậy (mở mắt)", type: "cụm động từ" },
            { word: "Get up", ipa: "/ɡet ʌp/", meaning: "Ra khỏi giường", type: "cụm động từ" },
            { word: "Have breakfast", ipa: "/hæv ˈbrek.fəst/", meaning: "Ăn sáng", type: "cụm động từ" },
            { word: "Go to work", ipa: "/ɡəʊ tuː wɜːk/", meaning: "Đi làm", type: "cụm động từ" },
            { word: "Have lunch", ipa: "/hæv lʌntʃ/", meaning: "Ăn trưa", type: "cụm động từ" },
            { word: "Have dinner", ipa: "/hæv ˈdɪn.ər/", meaning: "Ăn tối", type: "cụm động từ" },
            { word: "Watch TV", ipa: "/wɒtʃ tiː viː/", meaning: "Xem TV", type: "cụm động từ" },
            { word: "Go to bed", ipa: "/ɡəʊ tuː bed/", meaning: "Đi ngủ", type: "cụm động từ" },
            { word: "Brush teeth", ipa: "/brʌʃ tiːθ/", meaning: "Đánh răng", type: "cụm động từ" },
            { word: "Wash face", ipa: "/wɒʃ feɪs/", meaning: "Rửa mặt", type: "cụm động từ" },
            { word: "Get dressed", ipa: "/ɡet drest/", meaning: "Thay quần áo", type: "cụm động từ" },
            { word: "Cook dinner", ipa: "/kʊk ˈdɪn.ər/", meaning: "Nấu bữa tối", type: "cụm động từ" },
            { word: "Read a book", ipa: "/riːd ə bʊk/", meaning: "Đọc sách", type: "cụm động từ" },
            { word: "Take a shower", ipa: "/teɪk ə ʃaʊər/", meaning: "Đi tắm", type: "cụm động từ" }
        ],
        grammar: {
            title: "Thì Hiện Tại Đơn (Present Simple)",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Khái niệm & Cách dùng</h3>
                    <p>Thì hiện tại đơn dùng để nói về thói quen hằng ngày hoặc sự thật hiển nhiên.</p>
                    <hr>
                    <h3>1.2 Cấu trúc câu Khẳng định (+)</h3>
                    <ul>
                        <li><b>I / You / We / They</b> + V (nguyên thể)</li>
                        <li><b>He / She / It</b> + V (thêm s/es)</li>
                    </ul>
                    <div style="background: #fff3cd; padding: 10px; border-radius: 5px;">
                        <b>🔥 QUY TẮC S/ES:</b> Thêm "es" với từ tận cùng là: o, s, x, z, ch, sh ("Ông Sáu Chạy Xe SH Zỏm"). Còn lại thêm "s".
                    </div>
                    <hr>
                    <h3>1.3 Phủ định (-) & Nghi vấn (?)</h3>
                    <ul>
                        <li>(-) S + don't/doesn't + V (nguyên thể)</li>
                        <li>(?) Do/Does + S + V (nguyên thể)?</li>
                    </ul>
                </div>
            `
        },
        quiz: [
            { question: "1. I ___ (work) in a factory.", options: ["works", "work", "working"], answer: 1 },
            { question: "2. He ___ (live) in Ho Chi Minh City.", options: ["live", "lives", "living"], answer: 1 },
            { question: "3. She ___ (watch) TV at night.", options: ["watchs", "watches", "watching"], answer: 1 },
            { question: "4. It ___ (rain) a lot in the summer.", options: ["rains", "rain", "rainnes"], answer: 0 },
            { question: "5. Chuyển sang phủ định: 'He likes coffee.'", options: ["He not like coffee.", "He don't likes coffee.", "He doesn't like coffee."], answer: 2 },
            { question: "6. Chuyển sang phủ định: 'They play football.'", options: ["They don't play football.", "They doesn't play football.", "They not play football."], answer: 0 },
            { question: "7. Tìm lỗi sai: 'She doesn't goes to school.'", options: ["doesn't", "goes (sai vì thừa es)", "school"], answer: 1 },
            { question: "8. Tạo câu hỏi: 'You live in Hanoi.'", options: ["Do you live in Hanoi?", "Are you live in Hanoi?", "Does you live in Hanoi?"], answer: 0 },
            { question: "9. Tạo câu hỏi: 'He plays games.'", options: ["Do he play games?", "Does he plays games?", "Does he play games?"], answer: 2 },
            { question: "10. I ______ at 6 a.m. (Mở mắt thức dậy)", options: ["wake up", "go to bed", "have lunch"], answer: 0 }
        ],
        speaking: "I wake up at six and go to work"
    },

    // --- NGÀY 2 (MỚI THÊM VÀO) ---
    {
        id: 2,
        title: "Ngày 2: Trạng từ tần suất & 30 Từ vựng Lifestyle",
        
        // 1. TỪ VỰNG (30 TỪ)
        vocab: [
            { word: "Wake up", ipa: "/weɪk ʌp/", meaning: "Thức dậy", type: "v" },
            { word: "Get up", ipa: "/ɡet ʌp/", meaning: "Ra khỏi giường", type: "v" },
            { word: "Brush teeth", ipa: "/brʌʃ tiːθ/", meaning: "Đánh răng", type: "v" },
            { word: "Take a shower", ipa: "/teɪk ə ʃaʊər/", meaning: "Tắm", type: "v" },
            { word: "Get dressed", ipa: "/ɡet drest/", meaning: "Mặc quần áo", type: "v" },
            { word: "Have breakfast", ipa: "/hæv ˈbrek.fəst/", meaning: "Ăn sáng", type: "v" },
            { word: "Go to work", ipa: "/ɡəʊ tuː wɜːk/", meaning: "Đi làm", type: "v" },
            { word: "Go to school", ipa: "/ɡəʊ tuː skuːl/", meaning: "Đi học", type: "v" },
            { word: "Commute", ipa: "/kəˈmjuːt/", meaning: "Đi lại (từ nhà đến chỗ làm)", type: "v" },
            { word: "Work", ipa: "/wɜːk/", meaning: "Làm việc", type: "v" },
            { word: "Study", ipa: "/ˈstʌd.i/", meaning: "Học", type: "v" },
            { word: "Have lunch", ipa: "/hæv lʌntʃ/", meaning: "Ăn trưa", type: "v" },
            { word: "Take a break", ipa: "/teɪk ə breɪk/", meaning: "Nghỉ giải lao", type: "v" },
            { word: "Check email", ipa: "/tʃek ˈiː.meɪl/", meaning: "Kiểm tra email", type: "v" },
            { word: "Finish work", ipa: "/ˈfɪn.ɪʃ wɜːk/", meaning: "Tan làm", type: "v" },
            { word: "Go home", ipa: "/ɡəʊ həʊm/", meaning: "Về nhà", type: "v" },
            { word: "Cook", ipa: "/kʊk/", meaning: "Nấu ăn", type: "v" },
            { word: "Have dinner", ipa: "/hæv ˈdɪn.ər/", meaning: "Ăn tối", type: "v" },
            { word: "Eat out", ipa: "/iːt aʊt/", meaning: "Ăn ngoài (nhà hàng)", type: "v" },
            { word: "Watch TV", ipa: "/wɒtʃ tiː viː/", meaning: "Xem TV", type: "v" },
            { word: "Listen to music", ipa: "/ˈlɪs.ən tuː ˈmjuː.zɪk/", meaning: "Nghe nhạc", type: "v" },
            { word: "Read books", ipa: "/riːd bʊks/", meaning: "Đọc sách", type: "v" },
            { word: "Exercise", ipa: "/ˈek.sə.saɪz/", meaning: "Tập thể dục", type: "v" },
            { word: "Go for a walk", ipa: "/ɡəʊ fɔːr ə wɔːk/", meaning: "Đi dạo", type: "v" },
            { word: "Relax", ipa: "/rɪˈlæks/", meaning: "Thư giãn", type: "v" },
            { word: "Meet friends", ipa: "/miːt frendz/", meaning: "Gặp bạn bè", type: "v" },
            { word: "Do homework", ipa: "/duː ˈhəʊm.wɜːk/", meaning: "Làm bài tập", type: "v" },
            { word: "Take notes", ipa: "/teɪk nəʊts/", meaning: "Ghi chép", type: "v" },
            { word: "Go to bed", ipa: "/ɡəʊ tuː bed/", meaning: "Đi ngủ (lên giường)", type: "v" },
            { word: "Sleep", ipa: "/sliːp/", meaning: "Ngủ", type: "v" }
        ],

        // 2. NGỮ PHÁP (ADVERBS OF FREQUENCY)
        grammar: {
            title: "Trạng Từ Tần Suất & Present Simple",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Trạng từ tần suất là gì?</h3>
                    <p>Dùng để nói mức độ thường xuyên của hành động:</p>
                    <ul style="list-style: none; padding: 0;">
                        <li>⭐⭐⭐⭐⭐ <b>Always</b> (Luôn luôn)</li>
                        <li>⭐⭐⭐⭐ <b>Usually</b> (Thường xuyên)</li>
                        <li>⭐⭐⭐ <b>Often</b> (Hay)</li>
                        <li>⭐⭐ <b>Sometimes</b> (Thỉnh thoảng)</li>
                        <li>⭐ <b>Rarely</b> (Hiếm khi)</li>
                        <li>❌ <b>Never</b> (Không bao giờ)</li>
                    </ul>
                    
                    <hr>

                    <h3>1.2 Vị trí trong câu (Rất quan trọng)</h3>
                    <p><b>a. Với động từ thường:</b> Đứng TRƯỚC động từ.</p>
                    <p class="note">S + <b>Trạng từ</b> + V</p>
                    <ul>
                        <li><i>I <b>always</b> wake up early.</i></li>
                        <li><i>She <b>often</b> works late.</i></li>
                    </ul>

                    <p><b>b. Với động từ "To Be" (am/is/are):</b> Đứng SAU To Be.</p>
                    <p class="note">S + To Be + <b>Trạng từ</b></p>
                    <ul>
                        <li><i>I am <b>usually</b> tired.</i></li>
                        <li><i>He is <b>never</b> late.</i></li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (GẤP ĐÔI - 32 CÂU)
        quiz: [
            // --- Bài 1: Chia động từ (8 câu) ---
            { question: "1. She ___ (wake up) at 6 a.m.", options: ["wake up", "wakes up", "waked up"], answer: 1 },
            { question: "2. He ___ (go) to work by bus.", options: ["go", "goes", "gos"], answer: 1 },
            { question: "3. They ___ (study) English every day.", options: ["studies", "study", "studys"], answer: 1 },
            { question: "4. My father ___ (work) on Sunday.", options: ["works", "work", "working"], answer: 0 },
            { question: "5. We ___ (have) dinner at home.", options: ["has", "haves", "have"], answer: 2 },
            { question: "6. She ___ (watch) TV in the evening.", options: ["watches", "watchs", "watch"], answer: 0 },
            { question: "7. I ___ (read) books at night.", options: ["reads", "reading", "read"], answer: 2 },
            { question: "8. He ___ (play) football after work.", options: ["plays", "play", "plaies"], answer: 0 },

            // --- Bài 2: Vị trí Trạng từ (6 câu) ---
            { question: "9. I ___ wake up at 6 a.m. (usually)", options: ["usually", "am usually", "usually am"], answer: 0 },
            { question: "10. She ___ drinks coffee. (often)", options: ["is often", "often", "often is"], answer: 1 },
            { question: "11. They ___ go to the gym. (sometimes)", options: ["sometimes", "are sometimes", "sometimes are"], answer: 0 },
            { question: "12. He is ___ late for work. (never)", options: ["never", "not never", "doesn't never"], answer: 0 },
            { question: "13. We ___ watch TV after dinner. (usually)", options: ["usually", "are usually", "usually do"], answer: 0 },
            { question: "14. I am ___ tired in the morning. (often)", options: ["often", "do often", "often am"], answer: 0 },

            // --- Bài 3: Sắp xếp câu (6 câu) ---
            { question: "15. Sắp xếp: always / I / breakfast / have / at home", options: ["I have always breakfast at home.", "I always have breakfast at home.", "Always I have breakfast at home."], answer: 1 },
            { question: "16. Sắp xếp: often / she / TV / watches", options: ["She watches often TV.", "She often watches TV.", "Often she watches TV."], answer: 1 },
            { question: "17. Sắp xếp: never / he / late / is", options: ["He never is late.", "He is late never.", "He is never late."], answer: 2 },
            { question: "18. Sắp xếp: usually / they / work / hard", options: ["They usually work hard.", "They work usually hard.", "They work hard usually."], answer: 0 },
            { question: "19. Sắp xếp: sometimes / we / dinner / eat / out", options: ["We eat sometimes dinner out.", "We sometimes eat dinner out.", "We eat dinner out sometimes."], answer: 1 },
            { question: "20. Sắp xếp: rarely / I / coffee / drink", options: ["I drink rarely coffee.", "I rarely drink coffee.", "Rarely I drink coffee."], answer: 1 },

            // --- Bài 4: Viết câu hoàn chỉnh (4 câu) ---
            { question: "21. Ghép câu: I / usually / wake up / 6 a.m.", options: ["I usually wake up at 6 a.m.", "I wake up usually at 6 a.m.", "I usually wakes up at 6 a.m."], answer: 0 },
            { question: "22. Ghép câu: She / often / go to work / bus", options: ["She often go to work by bus.", "She often goes to work by bus.", "She goes often to work by bus."], answer: 1 },
            { question: "23. Ghép câu: They / never / watch TV / morning", options: ["They never watches TV in the morning.", "They never watch TV in the morning.", "They don't never watch TV in the morning."], answer: 1 },
            { question: "24. Ghép câu: He / sometimes / play football / evening", options: ["He sometimes plays football in the evening.", "He plays sometimes football in the evening.", "He sometimes play football in the evening."], answer: 0 },

            // --- Bài 5: Từ vựng (8 câu) ---
            { question: "25. I ___ at 6 a.m. every day.", options: ["wake up", "go to bed", "watch TV"], answer: 0 },
            { question: "26. I ___ my teeth after breakfast.", options: ["wash", "brush", "clean"], answer: 1 },
            { question: "27. She ___ to work by bus.", options: ["goes", "go", "going"], answer: 0 },
            { question: "28. We ___ lunch at 12 p.m.", options: ["eat", "have", "do"], answer: 1 },
            { question: "29. He ___ emails in the morning.", options: ["checks", "watches", "looks"], answer: 0 },
            { question: "30. They ___ dinner at home.", options: ["have", "has", "having"], answer: 0 },
            { question: "31. I ___ TV in the evening.", options: ["watch", "see", "look"], answer: 0 },
            { question: "32. I ___ to bed at 11 p.m.", options: ["go", "goes", "sleep"], answer: 0 }
        ],

        // 4. LUYỆN NÓI
        speaking: "I usually wake up at six"
    },
    // --- NGÀY 3 (MỚI THÊM VÀO) ---
    {
        id: 3,
        title: "Ngày 3: Trạng từ thời gian (Time Expressions)",
        
        // 1. TỪ VỰNG (30 TỪ: 18 Động từ đơn + 12 Phrasal Verbs)
        vocab: [
            // A. Động từ đơn (Verbs)
            { word: "Wake", ipa: "/weɪk/", meaning: "Đánh thức", type: "v" },
            { word: "Study", ipa: "/ˈstʌd.i/", meaning: "Học (nghiên cứu)", type: "v" },
            { word: "Work", ipa: "/wɜːk/", meaning: "Làm việc", type: "v" },
            { word: "Read", ipa: "/riːd/", meaning: "Đọc", type: "v" },
            { word: "Write", ipa: "/raɪt/", meaning: "Viết", type: "v" },
            { word: "Cook", ipa: "/kʊk/", meaning: "Nấu ăn", type: "v" },
            { word: "Eat", ipa: "/iːt/", meaning: "Ăn", type: "v" },
            { word: "Drink", ipa: "/drɪŋk/", meaning: "Uống", type: "v" },
            { word: "Sleep", ipa: "/sliːp/", meaning: "Ngủ", type: "v" },
            { word: "Relax", ipa: "/rɪˈlæks/", meaning: "Thư giãn", type: "v" },
            { word: "Walk", ipa: "/wɔːk/", meaning: "Đi bộ", type: "v" },
            { word: "Run", ipa: "/rʌn/", meaning: "Chạy", type: "v" },
            { word: "Drive", ipa: "/draɪv/", meaning: "Lái xe", type: "v" },
            { word: "Clean", ipa: "/kliːn/", meaning: "Dọn dẹp", type: "v" },
            { word: "Rest", ipa: "/rest/", meaning: "Nghỉ ngơi", type: "v" },
            { word: "Learn", ipa: "/lɜːn/", meaning: "Học (tiếp thu cái mới)", type: "v" },
            { word: "Help", ipa: "/help/", meaning: "Giúp đỡ", type: "v" },
            { word: "Wait", ipa: "/weɪt/", meaning: "Chờ đợi", type: "v" },

            // B. Cụm động từ (Phrasal Verbs)
            { word: "Wake up", ipa: "/weɪk ʌp/", meaning: "Tỉnh giấc (mở mắt)", type: "phrasal verb" },
            { word: "Get up", ipa: "/ɡet ʌp/", meaning: "Ra khỏi giường", type: "phrasal verb" },
            { word: "Go out", ipa: "/ɡəʊ aʊt/", meaning: "Đi chơi / Ra ngoài", type: "phrasal verb" },
            { word: "Stay up", ipa: "/steɪ ʌp/", meaning: "Thức khuya", type: "phrasal verb" },
            { word: "Sit down", ipa: "/sɪt daʊn/", meaning: "Ngồi xuống", type: "phrasal verb" },
            { word: "Stand up", ipa: "/stænd ʌp/", meaning: "Đứng lên", type: "phrasal verb" },
            { word: "Come back", ipa: "/kʌm bæk/", meaning: "Quay lại / Trở về", type: "phrasal verb" },
            { word: "Go home", ipa: "/ɡəʊ həʊm/", meaning: "Về nhà", type: "phrasal verb" },
            { word: "Turn on", ipa: "/tɜːn ɒn/", meaning: "Bật (đèn, máy)", type: "phrasal verb" },
            { word: "Turn off", ipa: "/tɜːn ɒf/", meaning: "Tắt (đèn, máy)", type: "phrasal verb" },
            { word: "Look for", ipa: "/lʊk fɔːr/", meaning: "Tìm kiếm", type: "phrasal verb" },
            { word: "Take off", ipa: "/teɪk ɒf/", meaning: "Cởi ra / Cất cánh", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP
        grammar: {
            title: "Trạng từ & Giới từ chỉ thời gian",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Khái niệm</h3>
                    <p>Dùng để trả lời câu hỏi <b>WHEN?</b> (Khi nào?). Thường đứng ở <b>CUỐI câu</b>.</p>
                    
                    <hr>

                    <h3>1.2 Các nhóm thời gian cơ bản</h3>
                    
                    <p><b>A. Every + Time (Mỗi...)</b></p>
                    <ul>
                        <li>every day (mỗi ngày), every week (mỗi tuần), every morning (mỗi sáng)...</li>
                        <li>Ví dụ: <i>I work every day.</i></li>
                    </ul>

                    <p><b>B. Giới từ IN / ON / AT (Rất quan trọng)</b></p>
                    <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
                        <tr style="background: #ecf0f1;">
                            <th style="padding:5px;">Giới từ</th>
                            <th style="padding:5px;">Dùng cho</th>
                            <th style="padding:5px;">Ví dụ</th>
                        </tr>
                        <tr>
                            <td><b>IN</b></td>
                            <td>Buổi, Tháng, Năm</td>
                            <td>in the morning<br>in the evening</td>
                        </tr>
                        <tr>
                            <td><b>ON</b></td>
                            <td>Thứ, Ngày</td>
                            <td>on Monday<br>on Sunday</td>
                        </tr>
                        <tr>
                            <td><b>AT</b></td>
                            <td>Giờ, Thời điểm cụ thể</td>
                            <td>at 7 a.m.<br>at night<br>at noon (trưa)</td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 Cấu trúc câu đầy đủ</h3>
                    <p class="note"><b>S + V + (Tần suất) + (Thời gian)</b></p>
                    <p>Lưu ý: <i>Trạng từ tần suất (always, often...)</i> đứng trước động từ. <i>Thời gian (every day, at night...)</i> đứng cuối câu.</p>
                    <p>Ví dụ: <i>I <b>usually</b> work <b>every day</b>.</i></p>
                </div>
            `
        },

        // 3. BÀI TẬP (42 câu -> Rút gọn còn các câu tiêu biểu dạng trắc nghiệm)
        quiz: [
            // Bài 1: Điền giới từ (In/On/At)
            { question: "1. I work ___ the morning.", options: ["in", "on", "at"], answer: 0 },
            { question: "2. She studies ___ night.", options: ["in", "on", "at"], answer: 2 },
            { question: "3. They play football ___ Sunday.", options: ["in", "on", "at"], answer: 1 },
            { question: "4. He wakes up ___ 6 a.m.", options: ["in", "on", "at"], answer: 2 },
            { question: "5. She has lunch ___ noon (buổi trưa).", options: ["in", "on", "at"], answer: 2 },
            
            // Bài 2: Hoàn thành câu (Logic)
            { question: "6. Chọn từ đúng: I read books ___.", options: ["every day", "at day", "in day"], answer: 0 },
            { question: "7. Chọn từ đúng: He watches TV ___.", options: ["on the evening", "in the evening", "at the evening"], answer: 1 },
            
            // Bài 3: Sắp xếp câu
            { question: "8. Sắp xếp: every day / I / work", options: ["I work every day.", "Every day I work.", "I every day work."], answer: 0 },
            { question: "9. Sắp xếp: in the morning / she / studies", options: ["She studies in the morning.", "In the morning she studies.", "She in the morning studies."], answer: 0 },
            { question: "10. Sắp xếp: usually / I / evening / relax / the", options: ["I usually relax in the evening.", "I relax usually in the evening.", "In the evening usually I relax."], answer: 0 },
            
            // Bài 4: Viết câu hoàn chỉnh
            { question: "11. Ghép câu: She / often / study English / evening", options: ["She often studies English in the evening.", "She often study English on the evening.", "She often studies English at the evening."], answer: 0 },
            { question: "12. Ghép câu: They / never / work / Sunday", options: ["They never work on Sunday.", "They never works on Sunday.", "They don't never work in Sunday."], answer: 0 },
            
            // Bài 5: Phân loại từ (Kiểm tra kiến thức V vs Phrasal V)
            { question: "13. Từ nào là Cụm động từ (Phrasal Verb)?", options: ["Sleep", "Wake up", "Read"], answer: 1 },
            { question: "14. Từ nào là Cụm động từ?", options: ["Go home", "Walk", "Run"], answer: 0 },
            
            // Bài 6: Điền từ vựng
            { question: "15. I ___ up at 6 a.m.", options: ["wake", "wakes", "waking"], answer: 0 },
            { question: "16. They ___ for a job. (Tìm kiếm)", options: ["look", "look at", "look for"], answer: 2 },
            { question: "17. Please ___ the TV. (Tắt)", options: ["turn on", "turn off", "turn out"], answer: 1 }
        ],

        // 4. LUYỆN NÓI
        speaking: "I usually relax in the evening"
    },
    // --- NGÀY 4 (MỚI THÊM VÀO) ---
    {
        id: 4,
        title: "Ngày 4: Thì Hiện Tại Tiếp Diễn (Present Continuous)",
        
        // 1. TỪ VỰNG (30 TỪ: 18 V + 12 PV)
        vocab: [
            // A. ĐỘNG TỪ (V) - 18 từ
            { word: "Study", ipa: "/ˈstʌd.i/", meaning: "Học", type: "v" },
            { word: "Work", ipa: "/wɜːk/", meaning: "Làm việc", type: "v" },
            { word: "Read", ipa: "/riːd/", meaning: "Đọc", type: "v" },
            { word: "Write", ipa: "/raɪt/", meaning: "Viết", type: "v" },
            { word: "Cook", ipa: "/kʊk/", meaning: "Nấu ăn", type: "v" },
            { word: "Clean", ipa: "/kliːn/", meaning: "Dọn dẹp", type: "v" },
            { word: "Watch", ipa: "/wɒtʃ/", meaning: "Xem (TV)", type: "v" },
            { word: "Listen", ipa: "/ˈlɪs.ən/", meaning: "Nghe", type: "v" },
            { word: "Talk", ipa: "/tɔːk/", meaning: "Nói chuyện", type: "v" },
            { word: "Sleep", ipa: "/sliːp/", meaning: "Ngủ", type: "v" },
            { word: "Eat", ipa: "/iːt/", meaning: "Ăn", type: "v" },
            { word: "Drink", ipa: "/drɪŋk/", meaning: "Uống", type: "v" },
            { word: "Walk", ipa: "/wɔːk/", meaning: "Đi bộ", type: "v" },
            { word: "Run", ipa: "/rʌn/", meaning: "Chạy", type: "v" },
            { word: "Drive", ipa: "/draɪv/", meaning: "Lái xe", type: "v" },
            { word: "Wait", ipa: "/weɪt/", meaning: "Chờ đợi", type: "v" },
            { word: "Help", ipa: "/help/", meaning: "Giúp đỡ", type: "v" },
            { word: "Learn", ipa: "/lɜːn/", meaning: "Học (kỹ năng mới)", type: "v" },

            // B. CỤM ĐỘNG TỪ (PV) - 12 từ
            { word: "Work on", ipa: "/wɜːk ɒn/", meaning: "Làm việc về (dự án/cái gì)", type: "phrasal verb" },
            { word: "Talk to", ipa: "/tɔːk tuː/", meaning: "Nói chuyện với ai", type: "phrasal verb" },
            { word: "Listen to", ipa: "/ˈlɪs.ən tuː/", meaning: "Lắng nghe cái gì", type: "phrasal verb" },
            { word: "Look at", ipa: "/lʊk æt/", meaning: "Nhìn vào", type: "phrasal verb" },
            { word: "Wait for", ipa: "/weɪt fɔːr/", meaning: "Chờ đợi ai/cái gì", type: "phrasal verb" },
            { word: "Stay at home", ipa: "/steɪ æt həʊm/", meaning: "Ở nhà", type: "phrasal verb" }, // Cụm từ cố định
            { word: "Go out", ipa: "/ɡəʊ aʊt/", meaning: "Đi ra ngoài", type: "phrasal verb" },
            { word: "Come in", ipa: "/kʌm ɪn/", meaning: "Đi vào", type: "phrasal verb" },
            { word: "Sit down", ipa: "/sɪt daʊn/", meaning: "Ngồi xuống", type: "phrasal verb" },
            { word: "Stand up", ipa: "/stænd ʌp/", meaning: "Đứng lên", type: "phrasal verb" },
            { word: "Write down", ipa: "/raɪt daʊn/", meaning: "Ghi chép lại", type: "phrasal verb" },
            { word: "Clean up", ipa: "/kliːn ʌp/", meaning: "Dọn dẹp sạch sẽ", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP
        grammar: {
            title: "Thì Hiện Tại Tiếp Diễn (Present Continuous)",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Khái niệm</h3>
                    <p>Dùng để nói về:</p>
                    <ul>
                        <li>Hành động đang xảy ra <b>ngay lúc nói</b> (now).</li>
                        <li>Hành động đang diễn ra trong khoảng thời gian hiện tại (today, this week).</li>
                    </ul>
                    <p><i>Ví dụ: I am studying English now.</i></p>

                    <hr>

                    <h3>1.2 Cấu trúc (S + To Be + V-ing)</h3>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr>
                            <td><b>(+) Khẳng định</b></td>
                            <td>S + am/is/are + V-ing</td>
                            <td><i>I am working.</i></td>
                        </tr>
                        <tr>
                            <td><b>(-) Phủ định</b></td>
                            <td>S + am/is/are + <b>not</b> + V-ing</td>
                            <td><i>He is not watching TV.</i></td>
                        </tr>
                        <tr>
                            <td><b>(?) Câu hỏi</b></td>
                            <td>Am/Is/Are + S + V-ing?</td>
                            <td><i>Are you studying?</i></td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 Dấu hiệu nhận biết</h3>
                    <p>Trong câu thường có: <b>now, right now, at the moment, today, this week.</b></p>

                    <hr>
                    
                    <h3>1.4 So sánh: Present Simple vs. Present Continuous</h3>
                    <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
                        <tr style="background: #ecf0f1;">
                            <th>Present Simple (Đơn)</th>
                            <th>Present Continuous (Tiếp diễn)</th>
                        </tr>
                        <tr>
                            <td>Chỉ <b>thói quen</b></td>
                            <td>Chỉ việc <b>đang diễn ra</b></td>
                        </tr>
                        <tr>
                            <td>every day, usually, often</td>
                            <td>now, at the moment</td>
                        </tr>
                        <tr>
                            <td><i>I work every day.</i></td>
                            <td><i>I am working now.</i></td>
                        </tr>
                    </table>
                </div>
            `
        },

        // 3. BÀI TẬP (Chuyển đổi từ 6 bài tập trong giáo án sang trắc nghiệm)
        quiz: [
            // --- Bài 1: Chia động từ (V-ing) ---
            { question: "1. I ___ (study) English now.", options: ["study", "am studying", "studying"], answer: 1 },
            { question: "2. She ___ (cook) dinner at the moment.", options: ["is cooking", "cooks", "cooking"], answer: 0 },
            { question: "3. They ___ (play) football now.", options: ["playing", "are playing", "play"], answer: 1 },
            { question: "4. We ___ (work) today.", options: ["are working", "work", "works"], answer: 0 },
            { question: "5. He ___ (watch) TV right now.", options: ["watching", "is watching", "watches"], answer: 1 },
            { question: "6. My mother ___ (clean) the house.", options: ["is cleaning", "cleans", "cleaning"], answer: 0 },
            { question: "7. The children ___ (sleep) now.", options: ["is sleeping", "are sleeping", "sleeps"], answer: 1 },

            // --- Bài 2: Chọn thì đúng (Simple vs Continuous) ---
            { question: "8. I usually ___ (wake up) at 6 a.m.", options: ["am waking up", "wake up"], answer: 1 },
            { question: "9. But I ___ (wake up) late today.", options: ["am waking up", "wake up"], answer: 0 },
            { question: "10. She often ___ (work) at night.", options: ["is working", "works"], answer: 1 },
            { question: "11. Look! She ___ (work) now.", options: ["is working", "works"], answer: 0 },
            { question: "12. They ___ (play) football every Sunday.", options: ["are playing", "play"], answer: 1 },
            { question: "13. They ___ (play) football at the moment.", options: ["are playing", "play"], answer: 0 },
            
            // --- Bài 3: Chuyển sang phủ định ---
            { question: "14. Phủ định: 'I am working now.'", options: ["I not am working now.", "I am not working now.", "I don't working now."], answer: 1 },
            { question: "15. Phủ định: 'She is cooking dinner.'", options: ["She is not cooking dinner.", "She doesn't cooking dinner.", "She not is cooking dinner."], answer: 0 },
            
            // --- Bài 4: Viết câu hỏi Yes/No ---
            { question: "16. Câu hỏi: 'You are studying now.'", options: ["Do you studying now?", "Are you studying now?", "You are studying now?"], answer: 1 },
            { question: "17. Câu hỏi: 'She is sleeping.'", options: ["Is she sleeping?", "Does she sleeping?", "Is she sleep?"], answer: 0 },

            // --- Bài 5: Phân loại V và PV ---
            { question: "18. 'Clean up' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "19. 'Read' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "20. 'Listen to' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },

            // --- Bài 6: Điền từ phù hợp ---
            { question: "21. I am ___ English now.", options: ["study", "studying", "studies"], answer: 1 },
            { question: "22. He is ___ to music.", options: ["listening", "hearing", "watching"], answer: 0 },
            { question: "23. I am ___ for the bus.", options: ["waiting", "looking", "seeing"], answer: 0 }
        ],

        // 4. LUYỆN NÓI
        speaking: "I am studying English now"
    },
    // --- NGÀY 5 (MỚI THÊM VÀO) ---
    {
        id: 5,
        title: "Ngày 5: State Verbs (Động từ trạng thái)",
        
        // 1. TỪ VỰNG (30 TỪ: 18 V + 12 PV)
        vocab: [
            // A. ĐỘNG TỪ TRẠNG THÁI (State Verbs) - 18 từ
            { word: "Know", ipa: "/nəʊ/", meaning: "Biết", type: "verb" },
            { word: "Understand", ipa: "/ˌʌn.dəˈstænd/", meaning: "Hiểu", type: "verb" },
            { word: "Believe", ipa: "/bɪˈliːv/", meaning: "Tin tưởng", type: "verb" },
            { word: "Remember", ipa: "/rɪˈmem.bər/", meaning: "Nhớ", type: "verb" },
            { word: "Forget", ipa: "/fəˈɡet/", meaning: "Quên", type: "verb" },
            { word: "Like", ipa: "/laɪk/", meaning: "Thích", type: "verb" },
            { word: "Love", ipa: "/lʌv/", meaning: "Yêu", type: "verb" },
            { word: "Hate", ipa: "/heɪt/", meaning: "Ghét", type: "verb" },
            { word: "Want", ipa: "/wɒnt/", meaning: "Muốn", type: "verb" },
            { word: "Need", ipa: "/niːd/", meaning: "Cần", type: "verb" },
            { word: "Prefer", ipa: "/prɪˈfɜːr/", meaning: "Thích hơn", type: "verb" },
            { word: "Own", ipa: "/əʊn/", meaning: "Sở hữu", type: "verb" },
            { word: "Have", ipa: "/hæv/", meaning: "Có", type: "verb" },
            { word: "Think", ipa: "/θɪŋk/", meaning: "Nghĩ (quan điểm)", type: "verb" },
            { word: "Feel", ipa: "/fiːl/", meaning: "Cảm thấy", type: "verb" },
            { word: "See", ipa: "/siː/", meaning: "Thấy", type: "verb" },
            { word: "Hear", ipa: "/hɪər/", meaning: "Nghe thấy", type: "verb" },
            { word: "Seem", ipa: "/siːm/", meaning: "Có vẻ như", type: "verb" },

            // B. CỤM ĐỘNG TỪ (Phrasal Verbs) - 12 từ
            { word: "Belong to", ipa: "/bɪˈlɒŋ tuː/", meaning: "Thuộc về", type: "phrasal verb" },
            { word: "Care about", ipa: "/keər əˈbaʊt/", meaning: "Quan tâm đến", type: "phrasal verb" },
            { word: "Agree with", ipa: "/əˈɡriː wɪð/", meaning: "Đồng ý với", type: "phrasal verb" },
            { word: "Depend on", ipa: "/dɪˈpend ɒn/", meaning: "Phụ thuộc vào", type: "phrasal verb" },
            { word: "Wait for", ipa: "/weɪt fɔːr/", meaning: "Chờ đợi", type: "phrasal verb" },
            { word: "Look like", ipa: "/lʊk laɪk/", meaning: "Trông giống", type: "phrasal verb" },
            { word: "Listen to", ipa: "/ˈlɪs.ən tuː/", meaning: "Lắng nghe", type: "phrasal verb" },
            { word: "Talk about", ipa: "/tɔːk əˈbaʊt/", meaning: "Nói về", type: "phrasal verb" },
            { word: "Think about", ipa: "/θɪŋk əˈbaʊt/", meaning: "Suy nghĩ về (hành động)", type: "phrasal verb" },
            { word: "Feel like", ipa: "/fiːl laɪk/", meaning: "Cảm thấy muốn/như là", type: "phrasal verb" },
            { word: "Care for", ipa: "/keər fɔːr/", meaning: "Thích / Chăm sóc", type: "phrasal verb" },
            { word: "Worry about", ipa: "/ˈwʌr.i əˈbaʊt/", meaning: "Lo lắng về", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP
        grammar: {
            title: "State Verbs (Động từ trạng thái)",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Khái niệm quan trọng</h3>
                    <p>State verbs là động từ chỉ <b>cảm xúc, suy nghĩ, nhận thức, sở hữu</b>.</p>
                    <div style="background: #ffdddd; padding: 15px; border-left: 5px solid #e74c3c; margin: 10px 0;">
                        <b>❌ QUY TẮC VÀNG:</b><br>
                        KHÔNG dùng dạng <b>V-ing</b> (tiếp diễn) với State Verbs.<br>
                        <i>Ví dụ: Không nói "I am liking it". Phải nói "I like it".</i>
                    </div>

                    <hr>

                    <h3>1.2 Các nhóm State Verbs thường gặp</h3>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr style="background: #ecf0f1;">
                            <th>Nhóm</th>
                            <th>Từ vựng</th>
                            <th>Ví dụ</th>
                        </tr>
                        <tr>
                            <td><b>Suy nghĩ</b></td>
                            <td>know, understand, believe, remember</td>
                            <td><i>I <b>know</b> him.</i></td>
                        </tr>
                        <tr>
                            <td><b>Cảm xúc</b></td>
                            <td>like, love, hate, want, need</td>
                            <td><i>I <b>want</b> coffee.</i></td>
                        </tr>
                        <tr>
                            <td><b>Sở hữu</b></td>
                            <td>have, own, belong to</td>
                            <td><i>This <b>belongs</b> to me.</i></td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 So sánh: Action vs. State</h3>
                    <ul>
                        <li><b>Action Verb (Ăn, chạy, làm...):</b> Dùng được cả V-ing.<br>-> <i>I am eating now.</i> (Đúng)</li>
                        <li><b>State Verb (Biết, thích, hiểu...):</b> CHỈ dùng thì đơn.<br>-> <i>I am knowing.</i> (Sai) -> <i>I know.</i> (Đúng)</li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (Chuyển thể từ 6 bài tập trong giáo án)
        quiz: [
            // --- Bài 1: Chọn dạng đúng ---
            { question: "1. I ___ the answer. (know)", options: ["know", "am knowing"], answer: 0 },
            { question: "2. She ___ coffee. (like)", options: ["likes", "is liking"], answer: 0 },
            { question: "3. We ___ the lesson. (understand)", options: ["are understanding", "understand"], answer: 1 },
            { question: "4. He ___ now. (Lưu ý: Work là Action verb)", options: ["works", "is working"], answer: 1 },
            { question: "5. They ___ you. (believe)", options: ["believe", "are believing"], answer: 0 },
            
            // --- Bài 2: Đúng hay Sai ngữ pháp ---
            { question: "6. Câu này ĐÚNG hay SAI: 'I am knowing him.'", options: ["Đúng", "Sai (State verb không chia V-ing)"], answer: 1 },
            { question: "7. Câu này ĐÚNG hay SAI: 'She likes music.'", options: ["Đúng", "Sai"], answer: 0 },
            { question: "8. Câu này ĐÚNG hay SAI: 'I am loving this book.'", options: ["Đúng", "Sai (Love là chỉ cảm xúc)"], answer: 1 },

            // --- Bài 3: Sửa lỗi sai (Chọn câu đúng) ---
            { question: "9. Sửa câu: 'I am liking coffee.'", options: ["I like coffee.", "I liking coffee."], answer: 0 },
            { question: "10. Sửa câu: 'She is knowing the answer.'", options: ["She know the answer.", "She knows the answer."], answer: 1 },
            { question: "11. Sửa câu: 'He is having two brothers.'", options: ["He has two brothers.", "He have two brothers."], answer: 0 },

            // --- Bài 4: Viết câu (Ghép từ) ---
            { question: "12. Ghép câu: They / believe / teacher", options: ["They believe the teacher.", "They are believing the teacher."], answer: 0 },
            { question: "13. Ghép câu: He / need / help", options: ["He needing help.", "He needs help."], answer: 1 },

            // --- Bài 5: Phân loại V và PV ---
            { question: "14. 'Belong to' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "15. 'Know' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "16. 'Care about' là loại từ gì?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },

            // --- Bài 6: Điền từ vựng ---
            { question: "17. This bag ___ to me.", options: ["belongs", "owns", "haves"], answer: 0 },
            { question: "18. I ___ English very much.", options: ["want", "like", "know"], answer: 1 },
            { question: "19. They ___ about their future. (Lo lắng)", options: ["care", "worry", "think"], answer: 1 }
        ],

        // 4. LUYỆN NÓI
        speaking: "I know the answer and I like English"
    },
    // --- NGÀY 6 (REVIEW DAY - KHÔNG CẮT BỚT) ---
    {
        id: 6,
        title: "Ngày 6: Ôn tập tổng hợp (Day 1-5)",
        
        // 1. TỪ VỰNG ÔN TẬP (30 TỪ: 18 V + 12 PV)
        vocab: [
            // A. ĐỘNG TỪ (V)
            { word: "Work", ipa: "/wɜːk/", meaning: "Làm việc", type: "verb" },
            { word: "Study", ipa: "/ˈstʌd.i/", meaning: "Học", type: "verb" },
            { word: "Read", ipa: "/riːd/", meaning: "Đọc", type: "verb" },
            { word: "Write", ipa: "/raɪt/", meaning: "Viết", type: "verb" },
            { word: "Cook", ipa: "/kʊk/", meaning: "Nấu ăn", type: "verb" },
            { word: "Eat", ipa: "/iːt/", meaning: "Ăn", type: "verb" },
            { word: "Drink", ipa: "/drɪŋk/", meaning: "Uống", type: "verb" },
            { word: "Sleep", ipa: "/sliːp/", meaning: "Ngủ", type: "verb" },
            { word: "Relax", ipa: "/rɪˈlæks/", meaning: "Thư giãn", type: "verb" },
            { word: "Clean", ipa: "/kliːn/", meaning: "Dọn dẹp", type: "verb" },
            { word: "Help", ipa: "/help/", meaning: "Giúp đỡ", type: "verb" },
            { word: "Wait", ipa: "/weɪt/", meaning: "Chờ đợi", type: "verb" },
            { word: "Like", ipa: "/laɪk/", meaning: "Thích", type: "verb" },
            { word: "Love", ipa: "/lʌv/", meaning: "Yêu", type: "verb" },
            { word: "Know", ipa: "/nəʊ/", meaning: "Biết", type: "verb" },
            { word: "Understand", ipa: "/ˌʌn.dəˈstænd/", meaning: "Hiểu", type: "verb" },
            { word: "Believe", ipa: "/bɪˈliːv/", meaning: "Tin tưởng", type: "verb" },
            { word: "Need", ipa: "/niːd/", meaning: "Cần", type: "verb" },

            // B. CỤM ĐỘNG TỪ (PV)
            { word: "Wake up", ipa: "/weɪk ʌp/", meaning: "Thức dậy", type: "phrasal verb" },
            { word: "Get up", ipa: "/ɡet ʌp/", meaning: "Ra khỏi giường", type: "phrasal verb" },
            { word: "Go to work", ipa: "/ɡəʊ tuː wɜːk/", meaning: "Đi làm", type: "phrasal verb" },
            { word: "Go home", ipa: "/ɡəʊ həʊm/", meaning: "Về nhà", type: "phrasal verb" },
            { word: "Stay at home", ipa: "/steɪ æt həʊm/", meaning: "Ở nhà", type: "phrasal verb" },
            { word: "Go out", ipa: "/ɡəʊ aʊt/", meaning: "Ra ngoài", type: "phrasal verb" },
            { word: "Turn on", ipa: "/tɜːn ɒn/", meaning: "Bật (máy/đèn)", type: "phrasal verb" },
            { word: "Turn off", ipa: "/tɜːn ɒf/", meaning: "Tắt (máy/đèn)", type: "phrasal verb" },
            { word: "Look for", ipa: "/lʊk fɔːr/", meaning: "Tìm kiếm", type: "phrasal verb" },
            { word: "Wait for", ipa: "/weɪt fɔːr/", meaning: "Chờ ai đó", type: "phrasal verb" },
            { word: "Belong to", ipa: "/bɪˈlɒŋ tuː/", meaning: "Thuộc về", type: "phrasal verb" },
            { word: "Care about", ipa: "/keər əˈbaʊt/", meaning: "Quan tâm đến", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP TỔNG HỢP
        grammar: {
            title: "Tổng hợp kiến thức Tuần 1",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Nhắc nhanh kiến thức lõi</h3>
                    <ul>
                        <li><b>Present Simple:</b> Thói quen, sự thật hiển nhiên. (<i>always, usually, often, every day...</i>)</li>
                        <li><b>Present Continuous:</b> Đang diễn ra ngay lúc nói. (<i>now, right now, at the moment...</i>)</li>
                        <li><b>State Verbs:</b> Động từ chỉ cảm xúc/nhận thức (<i>know, like, believe...</i>) -> <b>KHÔNG</b> dùng V-ing.</li>
                        <li><b>Thời gian:</b> 
                            <br>- <b>in</b> morning/afternoon/evening
                            <br>- <b>on</b> Monday/Sunday
                            <br>- <b>at</b> night/noon/6 a.m.
                        </li>
                    </ul>
                    <hr>
                    <h3>1.2 Yêu cầu bài tập</h3>
                    <p>Hôm nay bài tập sẽ rất nhiều (50 câu) để rà soát toàn bộ kiến thức. Hãy làm cẩn thận từng câu một!</p>
                </div>
            `
        },

        // 3. BÀI TẬP (50 CÂU - KHÔNG CẮT BỚT)
        quiz: [
            // --- BÀI 1: CHỌN THÌ ĐÚNG (10 CÂU) ---
            { question: "1. I usually ___ (wake up) at 6 a.m.", options: ["am waking up", "wake up"], answer: 1 },
            { question: "2. I ___ (wake up) late today.", options: ["wake up", "am waking up"], answer: 1 },
            { question: "3. She often ___ (work) at night.", options: ["works", "is working"], answer: 0 },
            { question: "4. She ___ (work) now.", options: ["works", "is working"], answer: 1 },
            { question: "5. They ___ (play) football every Sunday.", options: ["play", "are playing"], answer: 0 },
            { question: "6. They ___ (play) football at the moment.", options: ["play", "are playing"], answer: 1 },
            { question: "7. He ___ (watch) TV in the evening.", options: ["watches", "is watching"], answer: 0 },
            { question: "8. He ___ (watch) TV right now.", options: ["watches", "is watching"], answer: 1 },
            { question: "9. We ___ (study) English every day.", options: ["study", "are studying"], answer: 0 },
            { question: "10. We ___ (study) English this week.", options: ["study", "are studying"], answer: 1 },

            // --- BÀI 2: ĐÚNG / SAI (8 CÂU) ---
            { question: "11. 'I am knowing the answer.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "12. 'She likes coffee.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "13. 'They are believing you.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "14. 'He is working now.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "15. 'I am liking this book.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "16. 'We usually work on Monday.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "17. 'She is understanding English.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "18. 'I am studying English now.' - Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },

            // --- BÀI 3: SỬA LỖI SAI (8 CÂU) ---
            { question: "19. Sửa lỗi: 'I am knowing her name.'", options: ["I know her name.", "I knowing her name."], answer: 0 },
            { question: "20. Sửa lỗi: 'She is liking music.'", options: ["She likes music.", "She like music."], answer: 0 },
            { question: "21. Sửa lỗi: 'They are understanding the lesson.'", options: ["They understands the lesson.", "They understand the lesson."], answer: 1 },
            { question: "22. Sửa lỗi: 'He works now.'", options: ["He working now.", "He is working now."], answer: 1 },
            { question: "23. Sửa lỗi: 'I work at the moment.'", options: ["I am working at the moment.", "I working at the moment."], answer: 0 },
            { question: "24. Sửa lỗi: 'She study English every day.'", options: ["She studies English every day.", "She is studying English every day."], answer: 0 },
            { question: "25. Sửa lỗi: 'He go to work by bus.'", options: ["He goes to work by bus.", "He is going to work by bus."], answer: 0 },
            { question: "26. Kiểm tra câu: 'We are usually tired in the morning.'", options: ["Câu này ĐÚNG.", "Sai ở 'are'", "Sai ở 'usually'"], answer: 0 },

            // --- BÀI 4: VIẾT LẠI CÂU (6 CÂU) ---
            { question: "27. Viết lại 'I work every day' với 'now'", options: ["I am working now.", "I work now."], answer: 0 },
            { question: "28. Viết lại 'She studies English' với 'at the moment'", options: ["She studies English at the moment.", "She is studying English at the moment."], answer: 1 },
            { question: "29. Viết lại 'They are playing football now' với 'every Sunday'", options: ["They play football every Sunday.", "They are playing football every Sunday."], answer: 0 },
            { question: "30. Chuyển sang phủ định: 'He likes coffee.'", options: ["He not like coffee.", "He does not like coffee."], answer: 1 },
            { question: "31. Chuyển sang câu hỏi: 'You are studying now.'", options: ["Do you studying now?", "Are you studying now?"], answer: 1 },
            { question: "32. Chuyển sang phủ định: 'She works on Monday.'", options: ["She does not work on Monday.", "She not works on Monday."], answer: 0 },

            // --- BÀI 5: PHÂN LOẠI V / PV (10 CÂU) ---
            { question: "33. 'Wake up' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "34. 'Study' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "35. 'Belong to' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "36. 'Clean' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "37. 'Turn off' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "38. 'Like' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "39. 'Go home' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "40. 'Wait' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "41. 'Care about' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "42. 'Read' là V hay PV?", options: ["V", "PV"], answer: 0 },

            // --- BÀI 6: ĐIỀN TỪ PHÙ HỢP (8 CÂU) ---
            { question: "43. I ___ English every day.", options: ["study", "am studying"], answer: 0 },
            { question: "44. I ___ English now.", options: ["study", "am studying"], answer: 1 },
            { question: "45. She ___ coffee. (State verb)", options: ["likes", "is liking"], answer: 0 },
            { question: "46. This bag ___ to me.", options: ["belongs", "is belonging"], answer: 0 },
            { question: "47. We ___ TV in the evening.", options: ["watch", "are watching"], answer: 0 },
            { question: "48. He ___ for the bus now.", options: ["waits", "is waiting"], answer: 1 },
            { question: "49. I ___ up at 6 a.m.", options: ["wake", "waking"], answer: 0 },
            { question: "50. They ___ at home today.", options: ["stay", "are staying"], answer: 1 }
        ],

        // 4. SPEAKING & WRITING (TỰ LUYỆN)
        speaking: "I am studying English now and I like it"
    },
    // --- NGÀY 7 (TEST TUẦN 1 - 50 CÂU HỎI) ---
    {
        id: 7,
        title: "Ngày 7: KIỂM TRA TUẦN 1 (Week 1 Test)",
        
        // 1. TỪ VỰNG KIỂM TRA (30 TỪ ĐÃ HỌC)
        vocab: [
            // A. VERBS (18 từ)
            { word: "Work", ipa: "/wɜːk/", meaning: "Làm việc", type: "verb" },
            { word: "Study", ipa: "/ˈstʌd.i/", meaning: "Học", type: "verb" },
            { word: "Read", ipa: "/riːd/", meaning: "Đọc", type: "verb" },
            { word: "Write", ipa: "/raɪt/", meaning: "Viết", type: "verb" },
            { word: "Cook", ipa: "/kʊk/", meaning: "Nấu ăn", type: "verb" },
            { word: "Eat", ipa: "/iːt/", meaning: "Ăn", type: "verb" },
            { word: "Drink", ipa: "/drɪŋk/", meaning: "Uống", type: "verb" },
            { word: "Sleep", ipa: "/sliːp/", meaning: "Ngủ", type: "verb" },
            { word: "Relax", ipa: "/rɪˈlæks/", meaning: "Thư giãn", type: "verb" },
            { word: "Clean", ipa: "/kliːn/", meaning: "Dọn dẹp", type: "verb" },
            { word: "Help", ipa: "/help/", meaning: "Giúp đỡ", type: "verb" },
            { word: "Wait", ipa: "/weɪt/", meaning: "Chờ đợi", type: "verb" },
            { word: "Like", ipa: "/laɪk/", meaning: "Thích", type: "verb" },
            { word: "Love", ipa: "/lʌv/", meaning: "Yêu", type: "verb" },
            { word: "Know", ipa: "/nəʊ/", meaning: "Biết", type: "verb" },
            { word: "Understand", ipa: "/ˌʌn.dəˈstænd/", meaning: "Hiểu", type: "verb" },
            { word: "Believe", ipa: "/bɪˈliːv/", meaning: "Tin tưởng", type: "verb" },
            { word: "Need", ipa: "/niːd/", meaning: "Cần", type: "verb" },

            // B. PHRASAL VERBS (12 từ)
            { word: "Wake up", ipa: "/weɪk ʌp/", meaning: "Thức dậy", type: "phrasal verb" },
            { word: "Get up", ipa: "/ɡet ʌp/", meaning: "Ra khỏi giường", type: "phrasal verb" },
            { word: "Go to work", ipa: "/ɡəʊ tuː wɜːk/", meaning: "Đi làm", type: "phrasal verb" },
            { word: "Go home", ipa: "/ɡəʊ həʊm/", meaning: "Về nhà", type: "phrasal verb" },
            { word: "Stay at home", ipa: "/steɪ æt həʊm/", meaning: "Ở nhà", type: "phrasal verb" },
            { word: "Go out", ipa: "/ɡəʊ aʊt/", meaning: "Ra ngoài", type: "phrasal verb" },
            { word: "Turn on", ipa: "/tɜːn ɒn/", meaning: "Bật (đèn/máy)", type: "phrasal verb" },
            { word: "Turn off", ipa: "/tɜːn ɒf/", meaning: "Tắt (đèn/máy)", type: "phrasal verb" },
            { word: "Look for", ipa: "/lʊk fɔːr/", meaning: "Tìm kiếm", type: "phrasal verb" },
            { word: "Wait for", ipa: "/weɪt fɔːr/", meaning: "Chờ đợi ai", type: "phrasal verb" },
            { word: "Belong to", ipa: "/bɪˈlɒŋ tuː/", meaning: "Thuộc về", type: "phrasal verb" },
            { word: "Care about", ipa: "/keər əˈbaʊt/", meaning: "Quan tâm", type: "phrasal verb" }
        ],

        // 2. HƯỚNG DẪN KIỂM TRA
        grammar: {
            title: "Quy chế kiểm tra Tuần 1",
            content: `
                <div style="line-height: 1.6;">
                    <h3>🎯 Mục tiêu</h3>
                    <p>Bài kiểm tra này tổng hợp kiến thức từ Ngày 1 đến Ngày 5. Bạn cần làm thật nghiêm túc.</p>
                    
                    <h3>📊 Thang điểm đánh giá</h3>
                    <p>Tổng cộng có <b>50 câu hỏi</b>.</p>
                    <ul>
                        <li><b>Trên 40 câu đúng (≥ 80%):</b> ✅ ĐẠT - Bạn đã sẵn sàng sang Tuần 2.</li>
                        <li><b>30 - 39 câu đúng (60-79%):</b> ⚠️ TẠM ĐƯỢC - Nên ôn lại Ngày 3, 4, 5.</li>
                        <li><b>Dưới 30 câu đúng (< 60%):</b> ❌ CHƯA ĐẠT - Cần học lại từ Ngày 1.</li>
                    </ul>
                    <hr>
                    <p><i>Hãy hít thở sâu và bắt đầu làm bài bên dưới! 👇</i></p>
                </div>
            `
        },

        // 3. BỘ ĐỀ 50 CÂU HỎI
        quiz: [
            // --- BÀI 1: CHỌN THÌ ĐÚNG (10 CÂU) ---
            { question: "1. I usually ___ at 6 a.m.", options: ["wake up", "am waking up"], answer: 0 },
            { question: "2. I ___ late today.", options: ["wake up", "am waking up"], answer: 1 },
            { question: "3. She often ___ at night.", options: ["works", "is working"], answer: 0 },
            { question: "4. She ___ now.", options: ["works", "is working"], answer: 1 },
            { question: "5. They ___ football every Sunday.", options: ["play", "are playing"], answer: 0 },
            { question: "6. They ___ football at the moment.", options: ["play", "are playing"], answer: 1 },
            { question: "7. He ___ coffee. (State verb)", options: ["likes", "is liking"], answer: 0 },
            { question: "8. I ___ the answer.", options: ["know", "am knowing"], answer: 0 },
            { question: "9. We ___ English every day.", options: ["study", "are studying"], answer: 0 },
            { question: "10. We ___ English this week.", options: ["study", "are studying"], answer: 1 },

            // --- BÀI 2: ĐÚNG / SAI (8 CÂU) ---
            { question: "11. 'I am knowing her name.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "12. 'She likes music.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "13. 'They are believing the story.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "14. 'He is working now.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "15. 'I am loving this book.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "16. 'We usually work on Monday.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },
            { question: "17. 'She is understanding English.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 1 },
            { question: "18. 'I am studying English now.' -> Đúng hay Sai?", options: ["Đúng", "Sai"], answer: 0 },

            // --- BÀI 3: SỬA LỖI SAI (8 CÂU) ---
            { question: "19. Sửa lỗi: 'I am liking coffee.'", options: ["I like coffee.", "I liking coffee."], answer: 0 },
            { question: "20. Sửa lỗi: 'She study English every day.'", options: ["She studies English every day.", "She is studying English."], answer: 0 },
            { question: "21. Sửa lỗi: 'He go to work by bus.'", options: ["He goes to work by bus.", "He going to work by bus."], answer: 0 },
            { question: "22. Sửa lỗi: 'They is playing football now.'", options: ["They playing football now.", "They are playing football now."], answer: 1 },
            { question: "23. Sửa lỗi: 'I work at the moment.'", options: ["I working at the moment.", "I am working at the moment."], answer: 1 },
            { question: "24. Sửa lỗi: 'She is know the answer.'", options: ["She knows the answer.", "She knowing the answer."], answer: 0 },
            { question: "25. Sửa lỗi: 'We are usually work on Sunday.'", options: ["We usually work on Sunday.", "We are usually working on Sunday."], answer: 0 },
            { question: "26. Sửa lỗi: 'He watching TV now.'", options: ["He watches TV now.", "He is watching TV now."], answer: 1 },

            // --- BÀI 4: VIẾT LẠI CÂU (6 CÂU) ---
            { question: "27. Chuyển 'I work every day' sang thì hiện tại tiếp diễn (now):", options: ["I am working now.", "I work now."], answer: 0 },
            { question: "28. Chuyển 'She studies English' sang thì hiện tại tiếp diễn (at the moment):", options: ["She studies English at the moment.", "She is studying English at the moment."], answer: 1 },
            { question: "29. Chuyển 'They are playing football now' sang thì hiện tại đơn (every Sunday):", options: ["They play football every Sunday.", "They plays football every Sunday."], answer: 0 },
            { question: "30. Phủ định câu 'He likes coffee':", options: ["He don't like coffee.", "He does not like coffee."], answer: 1 },
            { question: "31. Đặt câu hỏi cho 'You are studying now':", options: ["Are you studying now?", "Do you studying now?"], answer: 0 },
            { question: "32. Phủ định câu 'She works on Monday':", options: ["She does not work on Monday.", "She not works on Monday."], answer: 0 },

            // --- BÀI 5: PHÂN LOẠI V / PV (10 CÂU) ---
            { question: "33. 'Wake up' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "34. 'Study' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "35. 'Belong to' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "36. 'Clean' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "37. 'Turn off' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "38. 'Like' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "39. 'Go home' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "40. 'Wait' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "41. 'Care about' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "42. 'Read' là?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },

            // --- BÀI 6: ĐIỀN TỪ PHÙ HỢP (8 CÂU) ---
            { question: "43. I ___ English every day.", options: ["study", "am studying"], answer: 0 },
            { question: "44. I ___ English now.", options: ["study", "am studying"], answer: 1 },
            { question: "45. She ___ coffee.", options: ["likes", "is liking"], answer: 0 },
            { question: "46. This book ___ to me.", options: ["belongs", "is belonging"], answer: 0 },
            { question: "47. We ___ TV in the evening.", options: ["watch", "are watching"], answer: 0 },
            { question: "48. He ___ for the bus now.", options: ["waits", "is waiting"], answer: 1 },
            { question: "49. I ___ up at 6 a.m.", options: ["wake", "get"], answer: 0 },
            { question: "50. They ___ at home today.", options: ["stay", "are staying"], answer: 1 }
        ],

        // 4. PHẦN TỰ LUYỆN NÓI & VIẾT
        speaking: "I usually work but today I am staying at home"
    },
    // --- NGÀY 8 (MỚI THÊM VÀO - KHÔNG CẮT BỚT) ---
    {
        id: 8,
        title: "Ngày 8: Past Simple (Quá khứ đơn - Cơ bản)",
        
        // 1. TỪ VỰNG (30 TỪ: 18 V + 12 PV - DẠNG QUÁ KHỨ)
        vocab: [
            // A. ĐỘNG TỪ - QUÁ KHỨ (V) - 18 từ
            { word: "Worked", ipa: "/wɜːkt/", meaning: "Đã làm việc (gốc: work)", type: "verb" },
            { word: "Studied", ipa: "/ˈstʌd.id/", meaning: "Đã học (gốc: study)", type: "verb" },
            { word: "Played", ipa: "/pleɪd/", meaning: "Đã chơi (gốc: play)", type: "verb" },
            { word: "Watched", ipa: "/wɒtʃt/", meaning: "Đã xem (gốc: watch)", type: "verb" },
            { word: "Cleaned", ipa: "/kliːnd/", meaning: "Đã dọn dẹp (gốc: clean)", type: "verb" },
            { word: "Visited", ipa: "/ˈvɪz.ɪtɪd/", meaning: "Đã thăm (gốc: visit)", type: "verb" },
            { word: "Went", ipa: "/went/", meaning: "Đã đi (gốc: go - Bất quy tắc)", type: "verb" },
            { word: "Ate", ipa: "/eɪt/", meaning: "Đã ăn (gốc: eat - Bất quy tắc)", type: "verb" },
            { word: "Saw", ipa: "/sɔː/", meaning: "Đã thấy/xem (gốc: see - Bất quy tắc)", type: "verb" },
            { word: "Did", ipa: "/dɪd/", meaning: "Đã làm (gốc: do - Bất quy tắc)", type: "verb" },
            { word: "Had", ipa: "/hæd/", meaning: "Đã có/ăn (gốc: have - Bất quy tắc)", type: "verb" },
            { word: "Made", ipa: "/meɪd/", meaning: "Đã làm/tạo (gốc: make - Bất quy tắc)", type: "verb" },
            { word: "Took", ipa: "/tʊk/", meaning: "Đã lấy (gốc: take - Bất quy tắc)", type: "verb" },
            { word: "Got", ipa: "/ɡɒt/", meaning: "Đã nhận/trở nên (gốc: get - Bất quy tắc)", type: "verb" },
            { word: "Came", ipa: "/keɪm/", meaning: "Đã đến (gốc: come - Bất quy tắc)", type: "verb" },
            { word: "Met", ipa: "/met/", meaning: "Đã gặp (gốc: meet - Bất quy tắc)", type: "verb" },
            { word: "Bought", ipa: "/bɔːt/", meaning: "Đã mua (gốc: buy - Bất quy tắc)", type: "verb" },
            { word: "Drank", ipa: "/dræŋk/", meaning: "Đã uống (gốc: drink - Bất quy tắc)", type: "verb" },

            // B. CỤM ĐỘNG TỪ - QUÁ KHỨ (PV) - 12 từ
            { word: "Woke up", ipa: "/wəʊk ʌp/", meaning: "Đã thức dậy (gốc: wake up)", type: "phrasal verb" },
            { word: "Got up", ipa: "/ɡɒt ʌp/", meaning: "Đã ra khỏi giường (gốc: get up)", type: "phrasal verb" },
            { word: "Went out", ipa: "/went aʊt/", meaning: "Đã ra ngoài (gốc: go out)", type: "phrasal verb" },
            { word: "Stayed at home", ipa: "/steɪd æt həʊm/", meaning: "Đã ở nhà (gốc: stay at home)", type: "phrasal verb" },
            { word: "Came back", ipa: "/keɪm bæk/", meaning: "Đã quay lại (gốc: come back)", type: "phrasal verb" },
            { word: "Went home", ipa: "/went həʊm/", meaning: "Đã về nhà (gốc: go home)", type: "phrasal verb" },
            { word: "Turned on", ipa: "/tɜːnd ɒn/", meaning: "Đã bật (gốc: turn on)", type: "phrasal verb" },
            { word: "Turned off", ipa: "/tɜːnd ɒf/", meaning: "Đã tắt (gốc: turn off)", type: "phrasal verb" },
            { word: "Looked for", ipa: "/lʊkt fɔːr/", meaning: "Đã tìm kiếm (gốc: look for)", type: "phrasal verb" },
            { word: "Took off", ipa: "/tʊk ɒf/", meaning: "Đã cởi ra/cất cánh (gốc: take off)", type: "phrasal verb" },
            { word: "Sat down", ipa: "/sæt daʊn/", meaning: "Đã ngồi xuống (gốc: sit down)", type: "phrasal verb" },
            { word: "Stood up", ipa: "/stʊd ʌp/", meaning: "Đã đứng lên (gốc: stand up)", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP (PAST SIMPLE)
        grammar: {
            title: "Thì Quá Khứ Đơn (Past Simple)",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Cách dùng & Dấu hiệu</h3>
                    <p>Dùng để nói về hành động <b>đã xảy ra và kết thúc</b> trong quá khứ.</p>
                    <p><b>Từ khóa thường gặp:</b></p>
                    <ul>
                        <li><b>yesterday</b> (hôm qua)</li>
                        <li><b>last</b> night / last week / last year (tối qua, tuần trước...)</li>
                        <li><b>ago</b> (2 days ago - 2 ngày trước)</li>
                        <li><b>in</b> + năm quá khứ (in 2020)</li>
                    </ul>

                    <hr>

                    <h3>1.2 Cấu trúc câu Khẳng định (+)</h3>
                    <p><b>S + V-quá khứ</b></p>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr>
                            <td style="background:#f9f9f9;"><b>1. Có quy tắc (Regular)</b></td>
                            <td>Thêm <b>-ed</b> vào sau động từ.<br><i>Ví dụ: work → work<b>ed</b>, play → play<b>ed</b></i></td>
                        </tr>
                        <tr>
                            <td style="background:#f9f9f9;"><b>2. Bất quy tắc (Irregular)</b></td>
                            <td>Biến đổi hoàn toàn (Phải học thuộc!).<br><i>Ví dụ: go → <b>went</b>, eat → <b>ate</b></i></td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 Cấu trúc Phủ định (-) & Nghi vấn (?)</h3>
                    <div style="background: #fff3cd; padding: 10px; border-left: 5px solid #f1c40f;">
                        <b>⚠️ QUY TẮC QUAN TRỌNG:</b><br>
                        Khi đã mượn trợ động từ <b>DID</b> (trong câu phủ định và câu hỏi), động từ chính phải quay về <b>NGUYÊN THỂ</b> (Không chia -ed hay cột 2 nữa).
                    </div>
                    <br>
                    <ul>
                        <li><b>(-) Phủ định:</b> S + <b>did not (didn't)</b> + V-nguyên thể
                            <br>-> <i>I <b>didn't go</b> to work. (Không phải: didn't went)</i>
                        </li>
                        <li><b>(?) Câu hỏi:</b> <b>Did</b> + S + V-nguyên thể?
                            <br>-> <i><b>Did</b> you <b>work</b> yesterday? (Không phải: Did you worked?)</i>
                        </li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (GIỮ NGUYÊN TẤT CẢ CÁC CÂU)
        quiz: [
            // --- BÀI 1: CHIA ĐỘNG TỪ (10 CÂU) ---
            { question: "1. I ___ (work) yesterday.", options: ["work", "worked", "working"], answer: 1 },
            { question: "2. She ___ (study) English last night.", options: ["study", "studied", "studies"], answer: 1 },
            { question: "3. They ___ (play) football yesterday afternoon.", options: ["play", "played", "playing"], answer: 1 },
            { question: "4. He ___ (watch) TV last night.", options: ["watch", "watched", "watches"], answer: 1 },
            { question: "5. We ___ (clean) the house yesterday.", options: ["clean", "cleaned", "cleaning"], answer: 1 },
            { question: "6. I ___ (go) to work yesterday. (Bất quy tắc)", options: ["go", "goed", "went"], answer: 2 },
            { question: "7. She ___ (eat) breakfast at home. (Bất quy tắc)", options: ["eated", "ate", "eats"], answer: 1 },
            { question: "8. They ___ (see) a movie last night. (Bất quy tắc)", options: ["see", "saw", "seen"], answer: 1 },
            { question: "9. He ___ (do) his homework yesterday. (Bất quy tắc)", options: ["do", "did", "done"], answer: 1 },
            { question: "10. We ___ (have) dinner at 7 p.m. (Bất quy tắc)", options: ["have", "had", "has"], answer: 1 },

            // --- BÀI 2: CHUYỂN SANG PHỦ ĐỊNH (6 CÂU) ---
            { question: "11. 'I worked yesterday.' -> Phủ định?", options: ["I didn't worked yesterday.", "I didn't work yesterday."], answer: 1 },
            { question: "12. 'She studied English last night.' -> Phủ định?", options: ["She didn't study English.", "She didn't studied English."], answer: 0 },
            { question: "13. 'They went to school yesterday.' -> Phủ định?", options: ["They didn't go to school.", "They didn't went to school."], answer: 0 },
            { question: "14. 'He ate breakfast at home.' -> Phủ định?", options: ["He didn't ate breakfast.", "He didn't eat breakfast."], answer: 1 },
            { question: "15. 'We watched TV last night.' -> Phủ định?", options: ["We didn't watch TV.", "We didn't watched TV."], answer: 0 },
            { question: "16. 'She did her homework yesterday.' -> Phủ định?", options: ["She didn't did her homework.", "She didn't do her homework."], answer: 1 },

            // --- BÀI 3: VIẾT CÂU HỎI YES/NO (6 CÂU) ---
            { question: "17. Question: 'You worked yesterday.'", options: ["Did you work yesterday?", "Did you worked yesterday?"], answer: 0 },
            { question: "18. Question: 'She studied English last night.'", options: ["Did she study English?", "Do she study English?"], answer: 0 },
            { question: "19. Question: 'They played football yesterday.'", options: ["Did they play football?", "Did they played football?"], answer: 0 },
            { question: "20. Question: 'He went to work yesterday.'", options: ["Did he went to work?", "Did he go to work?"], answer: 1 },
            { question: "21. Question: 'You ate dinner at home.'", options: ["Did you eat dinner?", "Did you ate dinner?"], answer: 0 },
            { question: "22. Question: 'She watched TV last night.'", options: ["Did she watch TV?", "Does she watch TV?"], answer: 0 },

            // --- BÀI 4: PHÂN LOẠI V / PV (8 CÂU) ---
            { question: "23. 'Went' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "24. 'Woke up' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "25. 'Studied' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "26. 'Came back' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "27. 'Ate' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "28. 'Turned off' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },
            { question: "29. 'Met' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 0 },
            { question: "30. 'Went home' là V hay PV?", options: ["Động từ (V)", "Cụm động từ (PV)"], answer: 1 },

            // --- BÀI 5: ĐIỀN TỪ ĐÚNG (6 CÂU) ---
            { question: "31. I ___ to work yesterday.", options: ["go", "went"], answer: 1 },
            { question: "32. She ___ English last night.", options: ["studied", "studies"], answer: 0 },
            { question: "33. We ___ dinner at home.", options: ["have", "had"], answer: 1 },
            { question: "34. They ___ TV yesterday evening.", options: ["watched", "watch"], answer: 0 },
            { question: "35. He ___ up at 6 a.m. yesterday.", options: ["wake", "woke"], answer: 1 },
            { question: "36. I ___ for my keys yesterday. (looked for)", options: ["look", "looked"], answer: 1 }
        ],

        // 4. LUYỆN NÓI
        speaking: "Yesterday I went to work and came back home"
    },
    // --- NGÀY 9 (MỚI THÊM VÀO - WH-QUESTIONS) ---
    {
        id: 9,
        title: "Ngày 9: Past Simple - Câu hỏi WH (Wh-Questions)",
        
        // 1. TỪ VỰNG (30 TỪ: 18 V + 12 PV - DẠNG QUÁ KHỨ)
        vocab: [
            // A. ĐỘNG TỪ (V) - QUÁ KHỨ
            { word: "Asked", ipa: "/ɑːskt/", meaning: "Đã hỏi (gốc: ask)", type: "verb" },
            { word: "Answered", ipa: "/ˈɑːn.səd/", meaning: "Đã trả lời (gốc: answer)", type: "verb" },
            { word: "Explained", ipa: "/ɪkˈspleɪnd/", meaning: "Đã giải thích (gốc: explain)", type: "verb" },
            { word: "Decided", ipa: "/dɪˈsaɪ.dɪd/", meaning: "Đã quyết định (gốc: decide)", type: "verb" },
            { word: "Chose", ipa: "/tʃəʊz/", meaning: "Đã chọn (gốc: choose)", type: "verb" },
            { word: "Arrived", ipa: "/əˈraɪvd/", meaning: "Đã đến (gốc: arrive)", type: "verb" },
            { word: "Left", ipa: "/left/", meaning: "Đã rời đi (gốc: leave)", type: "verb" },
            { word: "Started", ipa: "/ˈstɑː.tɪd/", meaning: "Đã bắt đầu (gốc: start)", type: "verb" },
            { word: "Finished", ipa: "/ˈfɪn.ɪʃt/", meaning: "Đã kết thúc (gốc: finish)", type: "verb" },
            { word: "Opened", ipa: "/ˈəʊ.pənd/", meaning: "Đã mở (gốc: open)", type: "verb" },
            { word: "Closed", ipa: "/kləʊzd/", meaning: "Đã đóng (gốc: close)", type: "verb" },
            { word: "Helped", ipa: "/helpt/", meaning: "Đã giúp (gốc: help)", type: "verb" },
            { word: "Called", ipa: "/kɔːld/", meaning: "Đã gọi (gốc: call)", type: "verb" },
            { word: "Texted", ipa: "/ˈteks.tɪd/", meaning: "Đã nhắn tin (gốc: text)", type: "verb" },
            { word: "Waited", ipa: "/ˈweɪ.tɪd/", meaning: "Đã chờ (gốc: wait)", type: "verb" },
            { word: "Visited", ipa: "/ˈvɪz.ɪ.tɪd/", meaning: "Đã thăm (gốc: visit)", type: "verb" },
            { word: "Traveled", ipa: "/ˈtræv.əld/", meaning: "Đã du lịch (gốc: travel)", type: "verb" },
            { word: "Learned", ipa: "/lɜːnd/", meaning: "Đã học (gốc: learn)", type: "verb" },

            // B. CỤM ĐỘNG TỪ (PV) - QUÁ KHỨ
            { word: "Asked for", ipa: "/ɑːskt fɔːr/", meaning: "Đã xin cái gì (gốc: ask for)", type: "phrasal verb" },
            { word: "Talked about", ipa: "/tɔːkt əˈbaʊt/", meaning: "Đã nói về (gốc: talk about)", type: "phrasal verb" },
            { word: "Thought about", ipa: "/θɔːt əˈbaʊt/", meaning: "Đã nghĩ về (gốc: think about)", type: "phrasal verb" },
            { word: "Came back", ipa: "/keɪm bæk/", meaning: "Đã quay lại (gốc: come back)", type: "phrasal verb" },
            { word: "Went out", ipa: "/went aʊt/", meaning: "Đã ra ngoài (gốc: go out)", type: "phrasal verb" },
            { word: "Stayed up", ipa: "/steɪd ʌp/", meaning: "Đã thức khuya (gốc: stay up)", type: "phrasal verb" },
            { word: "Woke up", ipa: "/wəʊk ʌp/", meaning: "Đã thức dậy (gốc: wake up)", type: "phrasal verb" },
            { word: "Got up", ipa: "/ɡɒt ʌp/", meaning: "Đã ra khỏi giường (gốc: get up)", type: "phrasal verb" },
            { word: "Sat down", ipa: "/sæt daʊn/", meaning: "Đã ngồi xuống (gốc: sit down)", type: "phrasal verb" },
            { word: "Stood up", ipa: "/stʊd ʌp/", meaning: "Đã đứng lên (gốc: stand up)", type: "phrasal verb" },
            { word: "Looked for", ipa: "/lʊkt fɔːr/", meaning: "Đã tìm kiếm (gốc: look for)", type: "phrasal verb" },
            { word: "Turned on", ipa: "/tɜːnd ɒn/", meaning: "Đã bật (gốc: turn on)", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP (WH-QUESTIONS)
        grammar: {
            title: "Câu hỏi WH trong Quá Khứ Đơn",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Các từ để hỏi (WH)</h3>
                    <ul>
                        <li><b>What:</b> Cái gì (Hành động/Sự vật)</li>
                        <li><b>Where:</b> Ở đâu (Địa điểm)</li>
                        <li><b>When:</b> Khi nào (Thời gian)</li>
                        <li><b>Why:</b> Tại sao (Lý do)</li>
                        <li><b>Who:</b> Ai (Người)</li>
                    </ul>

                    <hr>

                    <h3>1.2 Cấu trúc chuẩn (Rất quan trọng)</h3>
                    
                    <p><b>A. Với What / Where / When / Why:</b></p>
                    <div style="background: #e8f8f5; padding: 10px; border-left: 5px solid #1abc9c;">
                        <b>WH + did + S + V-nguyên thể?</b>
                    </div>
                    <p>Ví dụ: <i><b>What did</b> you <b>do</b> yesterday?</i></p>
                    <p class="note" style="color:red;">❌ SAI: What did you <b>did</b>? / Where did she <b>went</b>?</p>

                    <p><b>B. Với WHO (Khi hỏi ai làm gì):</b></p>
                    <div style="background: #fff3cd; padding: 10px; border-left: 5px solid #f1c40f;">
                        <b>Who + V-quá khứ ...? (KHÔNG dùng did)</b>
                    </div>
                    <p>Ví dụ: <i><b>Who called</b> you last night?</i> (Ai đã gọi cho bạn?)</p>

                    <hr>

                    <h3>1.3 Cách trả lời</h3>
                    <p>Dùng thì <b>Past Simple</b> để trả lời ngắn gọn, đúng trọng tâm.</p>
                    <ul>
                        <li>Hỏi: <i>Where did she go?</i></li>
                        <li>Trả lời: <i>She <b>went</b> to school.</i></li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (CHUYỂN ĐỔI SANG TRẮC NGHIỆM)
        quiz: [
            // --- BÀI 1: ĐẶT CÂU HỎI WH (8 CÂU) ---
            { question: "1. Đặt câu hỏi cho: 'You worked yesterday.' (What)", options: ["What did you do yesterday?", "What did you worked yesterday?"], answer: 0 },
            { question: "2. Đặt câu hỏi cho: 'She went to school.' (Where)", options: ["Where did she went?", "Where did she go?"], answer: 1 },
            { question: "3. Đặt câu hỏi cho: 'They met last night.' (When)", options: ["When did they meet?", "When did they met?"], answer: 0 },
            { question: "4. Đặt câu hỏi cho: 'He left early.' (Why)", options: ["Why did he left early?", "Why did he leave early?"], answer: 1 },
            { question: "5. Đặt câu hỏi cho: 'You ate lunch at home.' (Where)", options: ["Where did you eat lunch?", "Where you ate lunch?"], answer: 0 },
            { question: "6. Đặt câu hỏi cho: 'She studied English.' (What)", options: ["What did she study?", "What did she studied?"], answer: 0 },
            { question: "7. Đặt câu hỏi cho: 'They came back late.' (When)", options: ["When did they come back?", "When they came back?"], answer: 0 },
            { question: "8. Đặt câu hỏi cho: 'He called you.' (Who - Ai gọi bạn?)", options: ["Who called you?", "Who did call you?"], answer: 0 },

            // --- BÀI 2: CHỌN CÂU ĐÚNG (6 CÂU) ---
            { question: "9. Chọn câu đúng:", options: ["What did you do yesterday?", "What did you did yesterday?"], answer: 0 },
            { question: "10. Chọn câu đúng:", options: ["Where did she went last night?", "Where did she go last night?"], answer: 1 },
            { question: "11. Chọn câu đúng:", options: ["Who did call you?", "Who called you?"], answer: 1 },
            { question: "12. Chọn câu đúng:", options: ["When did they arrive?", "When they did arrive?"], answer: 0 },
            { question: "13. Chọn câu đúng:", options: ["Why did he leave early?", "Why he did leave early?"], answer: 0 },
            { question: "14. Chọn câu đúng:", options: ["What did she study?", "What she did study?"], answer: 0 },

            // --- BÀI 3: TRẢ LỜI CÂU HỎI (CHECK NGỮ PHÁP) ---
            { question: "15. Q: Where did you go? - A: I ___ to school.", options: ["go", "went"], answer: 1 },
            { question: "16. Q: What did you eat? - A: I ___ pizza.", options: ["eat", "ate"], answer: 1 },
            
            // --- BÀI 4: PHÂN LOẠI V / PV (8 CÂU) ---
            { question: "17. 'Arrived' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "18. 'Went out' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "19. 'Explained' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "20. 'Woke up' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "21. 'Chose' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "22. 'Talked about' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "23. 'Left' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "24. 'Stayed up' là V hay PV?", options: ["V", "PV"], answer: 1 },

            // --- BÀI 5: ĐIỀN TỪ ĐÚNG (6 CÂU) ---
            { question: "25. I ___ English yesterday.", options: ["learn", "learned"], answer: 1 },
            { question: "26. She ___ the door last night.", options: ["closed", "close"], answer: 0 },
            { question: "27. We ___ for help yesterday.", options: ["ask", "asked"], answer: 1 },
            { question: "28. They ___ late last night. (stayed up)", options: ["stayed up", "stay up"], answer: 0 },
            { question: "29. He ___ me yesterday evening.", options: ["called", "call"], answer: 0 },
            { question: "30. I ___ about my future yesterday.", options: ["think", "thought"], answer: 1 }
        ],

        // 4. LUYỆN NÓI
        speaking: "What did you do yesterday"
    },
    // --- NGÀY 10 (MỚI THÊM VÀO - STORYTELLING) ---
    {
        id: 10,
        title: "Ngày 10: Past Simple - Kể chuyện theo trình tự",
        
        // 1. TỪ VỰNG (30 TỪ: 18 V + 12 PV - DẠNG QUÁ KHỨ)
        vocab: [
            // A. ĐỘNG TỪ (V) - QUÁ KHỨ
            { word: "Woke", ipa: "/wəʊk/", meaning: "Đã đánh thức (gốc: wake)", type: "verb" },
            { word: "Got", ipa: "/ɡɒt/", meaning: "Đã nhận/được (gốc: get)", type: "verb" },
            { word: "Started", ipa: "/ˈstɑː.tɪd/", meaning: "Đã bắt đầu (gốc: start)", type: "verb" },
            { word: "Finished", ipa: "/ˈfɪn.ɪʃt/", meaning: "Đã kết thúc (gốc: finish)", type: "verb" },
            { word: "Worked", ipa: "/wɜːkt/", meaning: "Đã làm việc (gốc: work)", type: "verb" },
            { word: "Met", ipa: "/met/", meaning: "Đã gặp (gốc: meet)", type: "verb" },
            { word: "Talked", ipa: "/tɔːkt/", meaning: "Đã nói chuyện (gốc: talk)", type: "verb" },
            { word: "Ate", ipa: "/eɪt/", meaning: "Đã ăn (gốc: eat)", type: "verb" },
            { word: "Drank", ipa: "/dræŋk/", meaning: "Đã uống (gốc: drink)", type: "verb" },
            { word: "Relaxed", ipa: "/rɪˈlækst/", meaning: "Đã thư giãn (gốc: relax)", type: "verb" },
            { word: "Rested", ipa: "/ˈres.tɪd/", meaning: "Đã nghỉ ngơi (gốc: rest)", type: "verb" },
            { word: "Arrived", ipa: "/əˈraɪvd/", meaning: "Đã đến (gốc: arrive)", type: "verb" },
            { word: "Left", ipa: "/left/", meaning: "Đã rời đi (gốc: leave)", type: "verb" },
            { word: "Returned", ipa: "/rɪˈtɜːnd/", meaning: "Đã trở lại (gốc: return)", type: "verb" },
            { word: "Opened", ipa: "/ˈəʊ.pənd/", meaning: "Đã mở (gốc: open)", type: "verb" },
            { word: "Closed", ipa: "/kləʊzd/", meaning: "Đã đóng (gốc: close)", type: "verb" },
            { word: "Learned", ipa: "/lɜːnd/", meaning: "Đã học (gốc: learn)", type: "verb" },
            { word: "Enjoyed", ipa: "/ɪnˈdʒɔɪd/", meaning: "Đã tận hưởng/thích (gốc: enjoy)", type: "verb" },

            // B. CỤM ĐỘNG TỪ (PV) - QUÁ KHỨ
            { word: "Woke up", ipa: "/wəʊk ʌp/", meaning: "Đã thức dậy (gốc: wake up)", type: "phrasal verb" },
            { word: "Got up", ipa: "/ɡɒt ʌp/", meaning: "Đã ra khỏi giường (gốc: get up)", type: "phrasal verb" },
            { word: "Went out", ipa: "/went aʊt/", meaning: "Đã ra ngoài (gốc: go out)", type: "phrasal verb" },
            { word: "Came back", ipa: "/keɪm bæk/", meaning: "Đã quay lại (gốc: come back)", type: "phrasal verb" },
            { word: "Went home", ipa: "/went həʊm/", meaning: "Đã về nhà (gốc: go home)", type: "phrasal verb" },
            { word: "Sat down", ipa: "/sæt daʊn/", meaning: "Đã ngồi xuống (gốc: sit down)", type: "phrasal verb" },
            { word: "Stood up", ipa: "/stʊd ʌp/", meaning: "Đã đứng lên (gốc: stand up)", type: "phrasal verb" },
            { word: "Ate out", ipa: "/eɪt aʊt/", meaning: "Đã ăn ngoài (gốc: eat out)", type: "phrasal verb" },
            { word: "Hung out", ipa: "/hʌŋ aʊt/", meaning: "Đã đi chơi/tụ tập (gốc: hang out)", type: "phrasal verb" },
            { word: "Stayed at home", ipa: "/steɪd æt həʊm/", meaning: "Đã ở nhà (gốc: stay at home)", type: "phrasal verb" },
            { word: "Turned on", ipa: "/tɜːnd ɒn/", meaning: "Đã bật (gốc: turn on)", type: "phrasal verb" },
            { word: "Turned off", ipa: "/tɜːnd ɒf/", meaning: "Đã tắt (gốc: turn off)", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP (SEQUENCE WORDS)
        grammar: {
            title: "Từ nối trình tự (Sequence Words)",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Tại sao cần từ nối?</h3>
                    <p>Để câu chuyện mạch lạc, người nghe biết việc gì xảy ra trước, việc gì sau.</p>
                    
                    <h3>1.2 Các từ nối cơ bản</h3>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr style="background: #ecf0f1;">
                            <th>Từ nối</th>
                            <th>Nghĩa</th>
                            <th>Vị trí</th>
                        </tr>
                        <tr>
                            <td><b>First</b></td>
                            <td>Đầu tiên</td>
                            <td>Đầu câu</td>
                        </tr>
                        <tr>
                            <td><b>Then</b></td>
                            <td>Sau đó</td>
                            <td>Đầu câu</td>
                        </tr>
                        <tr>
                            <td><b>After that</b></td>
                            <td>Sau đó nữa</td>
                            <td>Đầu câu</td>
                        </tr>
                        <tr>
                            <td><b>Finally</b></td>
                            <td>Cuối cùng</td>
                            <td>Đầu câu</td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 Cấu trúc kể chuyện chuẩn</h3>
                    <p><b>First</b>, I woke up early.<br>
                    <b>Then</b>, I went to work.<br>
                    <b>After that</b>, I met my friends.<br>
                    <b>Finally</b>, I went home.</p>
                </div>
            `
        },

        // 3. BÀI TẬP (CHUYỂN ĐỔI SANG TRẮC NGHIỆM)
        quiz: [
            // --- BÀI 1: SẮP XẾP CÂU (6 CÂU) ---
            { 
                question: "1. Câu nào nên đứng ĐẦU TIÊN trong đoạn văn?", 
                options: ["Finally, I went home.", "First, I woke up at 6 a.m.", "Then, I went to work."], 
                answer: 1 
            },
            { 
                question: "2. Sau khi thức dậy ('First, I woke up...'), câu nào hợp lý tiếp theo?", 
                options: ["Finally, I watched TV.", "Then, I brushed my teeth and had breakfast.", "First, I went to sleep."], 
                answer: 1 
            },
            { 
                question: "3. Câu nào thường đứng CUỐI CÙNG?", 
                options: ["First, I got up.", "After that, I worked.", "Finally, I went to bed."], 
                answer: 2 
            },

            // --- BÀI 2: ĐIỀN TỪ NỐI (8 CÂU) ---
            { question: "4. ___, I woke up early. (Bắt đầu câu chuyện)", options: ["Finally", "First", "Then"], answer: 1 },
            { question: "5. First, I woke up. ___, I got up. (Tiếp theo)", options: ["Finally", "Then", "First"], answer: 1 },
            { question: "6. ___, I went to work. (Tiếp theo)", options: ["First", "After that", "Finally"], answer: 1 },
            { question: "7. ___, I finished work at 6 p.m. (Gần cuối)", options: ["First", "Then", "Finally"], answer: 1 },
            { question: "8. ___, I went home and relaxed. (Kết thúc)", options: ["Then", "After that", "Finally"], answer: 2 },
            
            // --- BÀI 3: VIẾT CÂU (CHỌN CÂU ĐÚNG) ---
            { question: "9. Chọn câu đúng: first / wake up / 6 a.m.", options: ["First, I woke up at 6 a.m.", "First I wake up at 6 a.m."], answer: 0 },
            { question: "10. Chọn câu đúng: finally / go home", options: ["Finally, I went home.", "Finally I go home."], answer: 0 },

            // --- BÀI 4: PHÂN LOẠI V / PV (8 CÂU) ---
            { question: "11. 'Woke' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "12. 'Woke up' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "13. 'Met' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "14. 'Went home' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "15. 'Enjoyed' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "16. 'Hung out' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "17. 'Finished' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "18. 'Ate out' là V hay PV?", options: ["V", "PV"], answer: 1 },

            // --- BÀI 5: ĐIỀN TỪ VỰNG (6 CÂU) ---
            { question: "19. I ___ up early yesterday.", options: ["woke", "wake"], answer: 0 },
            { question: "20. She ___ work at 8 a.m.", options: ["start", "started"], answer: 1 },
            { question: "21. We ___ lunch at a restaurant. (ate)", options: ["ate", "eat"], answer: 0 },
            { question: "22. They ___ out with friends last night. (hung out)", options: ["hang", "hung"], answer: 1 },
            { question: "23. He ___ work at 6 p.m. (finished)", options: ["finished", "finish"], answer: 0 },
            { question: "24. I ___ TV and relaxed. (watched)", options: ["watch", "watched"], answer: 1 }
        ],

        // 4. LUYỆN NÓI
        speaking: "First I woke up then I went to work"
    },
    // --- NGÀY 11 (MỚI THÊM VÀO - PRESENT PERFECT vs PAST SIMPLE) ---
    {
        id: 11,
        title: "Ngày 11: Present Perfect (Làm quen) vs Past Simple",
        
        // 1. TỪ VỰNG (30 TỪ MỚI - KÈM DẠNG V3/ED)
        vocab: [
            // A. ĐỘNG TỪ (V) - 18 từ
            { word: "Completed", ipa: "/kəmˈpliːtɪd/", meaning: "Hoàn thành (gốc: complete)", type: "verb" },
            { word: "Chosen", ipa: "/ˈtʃəʊ.zən/", meaning: "Đã chọn (gốc: choose - V3)", type: "verb" },
            { word: "Developed", ipa: "/dɪˈvel.əpt/", meaning: "Phát triển (gốc: develop)", type: "verb" },
            { word: "Improved", ipa: "/ɪmˈpruːvd/", meaning: "Cải thiện (gốc: improve)", type: "verb" },
            { word: "Joined", ipa: "/dʒɔɪnd/", meaning: "Tham gia (gốc: join)", type: "verb" },
            { word: "Achieved", ipa: "/əˈtʃiːvd/", meaning: "Đạt được (gốc: achieve)", type: "verb" },
            { word: "Gained", ipa: "/ɡeɪnd/", meaning: "Thu được (gốc: gain)", type: "verb" },
            { word: "Faced", ipa: "/feɪst/", meaning: "Đối mặt (gốc: face)", type: "verb" },
            { word: "Handled", ipa: "/ˈhæn.dəld/", meaning: "Xử lý (gốc: handle)", type: "verb" },
            { word: "Managed", ipa: "/ˈmæn.ɪdʒd/", meaning: "Quản lý (gốc: manage)", type: "verb" },
            { word: "Applied", ipa: "/əˈplaɪd/", meaning: "Áp dụng (gốc: apply)", type: "verb" },
            { word: "Explored", ipa: "/ɪkˈsplɔːrd/", meaning: "Khám phá (gốc: explore)", type: "verb" },
            { word: "Attempted", ipa: "/əˈtemp.tɪd/", meaning: "Cố gắng (gốc: attempt)", type: "verb" },
            { word: "Avoided", ipa: "/əˈvɔɪ.dɪd/", meaning: "Tránh (gốc: avoid)", type: "verb" },
            { word: "Considered", ipa: "/kənˈsɪd.əd/", meaning: "Cân nhắc (gốc: consider)", type: "verb" },
            { word: "Realized", ipa: "/ˈrɪə.laɪzd/", meaning: "Nhận ra (gốc: realize)", type: "verb" },
            { word: "Recognized", ipa: "/ˈrek.əɡ.naɪzd/", meaning: "Công nhận/Nhận ra (gốc: recognize)", type: "verb" },
            { word: "Overcome", ipa: "/ˌəʊ.vəˈkʌm/", meaning: "Vượt qua (gốc: overcome - V3)", type: "verb" },

            // B. CỤM ĐỘNG TỪ (PV) - 12 từ
            { word: "Signed up for", ipa: "/saɪnd ʌp/", meaning: "Đăng ký (gốc: sign up for)", type: "phrasal verb" },
            { word: "Took part in", ipa: "/tʊk pɑːt/", meaning: "Tham gia (gốc: take part in)", type: "phrasal verb" },
            { word: "Dealt with", ipa: "/delt wɪð/", meaning: "Xử lý (gốc: deal with)", type: "phrasal verb" },
            { word: "Focused on", ipa: "/ˈfəʊ.kəst ɒn/", meaning: "Tập trung vào (gốc: focus on)", type: "phrasal verb" },
            { word: "Gave up", ipa: "/ɡeɪv ʌp/", meaning: "Bỏ cuộc (gốc: give up)", type: "phrasal verb" },
            { word: "Kept up with", ipa: "/kept ʌp/", meaning: "Theo kịp (gốc: keep up with)", type: "phrasal verb" },
            { word: "Ran out of", ipa: "/ræn aʊt/", meaning: "Cạn kiệt (gốc: run out of)", type: "phrasal verb" },
            { word: "Figured out", ipa: "/ˈfɪɡ.əd aʊt/", meaning: "Hiểu ra (gốc: figure out)", type: "phrasal verb" },
            { word: "Set up", ipa: "/set ʌp/", meaning: "Thiết lập (gốc: set up)", type: "phrasal verb" },
            { word: "Worked on", ipa: "/wɜːkt ɒn/", meaning: "Làm về (gốc: work on)", type: "phrasal verb" },
            { word: "Moved on", ipa: "/muːvd ɒn/", meaning: "Tiếp tục (gốc: move on)", type: "phrasal verb" },
            { word: "Carried on", ipa: "/ˈkær.id ɒn/", meaning: "Tiếp tục làm (gốc: carry on)", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP (PRESENT PERFECT vs PAST SIMPLE)
        grammar: {
            title: "Present Perfect vs Past Simple",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Khái niệm Present Perfect (Hiện tại hoàn thành)</h3>
                    <p>Công thức: <b>S + have/has + V3 (Past Participle)</b></p>
                    <p>Dùng khi:</p>
                    <ul>
                        <li>Nói về trải nghiệm trong đời (không rõ thời gian).</li>
                        <li>Kết quả còn liên quan đến hiện tại.</li>
                    </ul>
                    <p>Ví dụ: <i>I <b>have visited</b> Da Nang.</i> (Đã từng đi, không nói khi nào)</p>

                    <hr>

                    <h3>1.2 So sánh trực diện</h3>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr style="background: #ecf0f1;">
                            <th>Tiêu chí</th>
                            <th>Past Simple</th>
                            <th>Present Perfect</th>
                        </tr>
                        <tr>
                            <td><b>Thời gian</b></td>
                            <td>Xác định (yesterday, last year)</td>
                            <td>Không xác định (ever, never, before)</td>
                        </tr>
                        <tr>
                            <td><b>Ví dụ</b></td>
                            <td>I <b>went</b> to Hue last year.</td>
                            <td>I <b>have been</b> to Hue.</td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 Dấu hiệu nhận biết</h3>
                    <ul>
                        <li><b>Ever:</b> Đã từng (dùng trong câu hỏi) -> <i>Have you ever...?</i></li>
                        <li><b>Never:</b> Chưa từng -> <i>I have never...</i></li>
                        <li><b>Already:</b> Đã rồi -> <i>I have already finished.</i></li>
                        <li><b>Yet:</b> Chưa (cuối câu phủ định/hỏi) -> <i>I haven't finished yet.</i></li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (ĐA DẠNG HÓA: TRẮC NGHIỆM + NHẬP LIỆU)
        quiz: [
            // --- BÀI 1: CHỌN THÌ ĐÚNG (TRẮC NGHIỆM) ---
            { question: "1. I ___ the lesson already.", options: ["finish", "have finished"], answer: 1 },
            { question: "2. She ___ the course last month. (Có 'last month')", options: ["joined", "has joined"], answer: 0 },
            { question: "3. We ___ online learning. (Kinh nghiệm)", options: ["never try", "have never tried"], answer: 1 },
            { question: "4. He ___ his teacher yesterday. (Có 'yesterday')", options: ["met", "has met"], answer: 0 },
            { question: "5. They ___ many cities. (Trải nghiệm)", options: ["visited", "have visited"], answer: 1 },
            { question: "6. I ___ a lot from this class. (Kết quả hiện tại)", options: ["learned", "have learned"], answer: 1 },
            { question: "7. She ___ studying English in 2022. (Mốc thời gian cụ thể)", options: ["started", "has started"], answer: 0 },
            { question: "8. We ___ this method before.", options: ["have never used", "never used"], answer: 0 },
            { question: "9. He ___ three reports so far.", options: ["wrote", "has written"], answer: 1 },
            { question: "10. I ___ that video last night.", options: ["watched", "have watched"], answer: 0 },

            // --- BÀI 2: CHIA ĐỘNG TỪ V3 (NHẬP LIỆU - TỰ GÕ) ---
            // Lưu ý: type: 'text' để kích hoạt ô nhập liệu thay vì nút bấm
            { question: "11. I have ___ (complete) the task.", type: "text", answer: "completed" },
            { question: "12. She has ___ (choose) a new major.", type: "text", answer: "chosen" },
            { question: "13. We have ___ (develop) new skills.", type: "text", answer: "developed" },
            { question: "14. He has ___ (improve) his pronunciation.", type: "text", answer: "improved" },
            { question: "15. They have ___ (join) the online class.", type: "text", answer: "joined" },
            { question: "16. I have ___ (achieve) my goal.", type: "text", answer: "achieved" },
            { question: "17. She has ___ (gain) experience.", type: "text", answer: "gained" },
            { question: "18. We have ___ (face) many challenges.", type: "text", answer: "faced" },

            // --- BÀI 3: VIẾT LẠI CÂU (NHẬP LIỆU) ---
            { question: "19. Viết lại: 'I finished the lesson.' (thêm 'already' -> Present Perfect)", type: "text", answer: "I have already finished the lesson" }, // Chấp nhận tương đối
            { question: "20. Viết lại: 'She never tried online courses.' (Present Perfect)", type: "text", answer: "She has never tried online courses" },
            { question: "21. Viết lại: 'They studied English before.' (Present Perfect)", type: "text", answer: "They have studied English before" },
            { question: "22. Viết lại: 'He did the test.' (thêm 'yet' -> Phủ định)", type: "text", answer: "He has not done the test yet" }, // Hoặc He hasn't...
            { question: "23. Viết lại: 'You learned new skills.' (thêm 'ever' -> Câu hỏi)", type: "text", answer: "Have you ever learned new skills" },
            { question: "24. Viết lại: 'We met new people.' (Present Perfect)", type: "text", answer: "We have met new people" },

            // --- BÀI 4: PHÂN LOẠI TỪ (TRẮC NGHIỆM) ---
            { question: "25. 'Overcome' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "26. 'Give up' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "27. 'Recognize' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "28. 'Focus on' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "29. 'Achieve' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "30. 'Deal with' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "31. 'Apply' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "32. 'Sign up for' là V hay PV?", options: ["V", "PV"], answer: 1 },

            // --- BÀI 5: ĐIỀN TỪ (NHẬP LIỆU) ---
            { question: "33. I have ___ (gained) a lot from this course.", type: "text", answer: "gained" },
            { question: "34. She has ___ (signed) up for an online class.", type: "text", answer: "signed" },
            { question: "35. We have ___ (faced) many difficulties.", type: "text", answer: "faced" },
            { question: "36. He decided to ___ (carry) on instead of quitting.", type: "text", answer: "carry" },
            { question: "37. They ___ (focus) on improving their skills.", type: "text", answer: "focus" },
            { question: "38. I finally ___ (figured) out the problem.", type: "text", answer: "figured" }
        ],

        // 4. LUYỆN NÓI
        speaking: "I have learned many new skills and never gave up"
    },
    // --- NGÀY 12 (PAST SIMPLE vs PRESENT PERFECT + FOR/SINCE) ---
    {
        id: 12,
        title: "Ngày 12: Past Simple vs Present Perfect + For/Since",
        
        // 1. TỪ VỰNG (30 TỪ MỚI - KHÔNG LẶP)
        vocab: [
            // A. ĐỘNG TỪ (V) - 18 từ
            { word: "Specialized", ipa: "/ˈspeʃ.ə.laɪzd/", meaning: "Chuyên về (gốc: specialize)", type: "verb" },
            { word: "Strengthened", ipa: "/ˈstreŋ.θənd/", meaning: "Củng cố (gốc: strengthen)", type: "verb" },
            { word: "Monitored", ipa: "/ˈmɒn.ɪ.təd/", meaning: "Theo dõi (gốc: monitor)", type: "verb" },
            { word: "Evaluated", ipa: "/ɪˈvæl.ju.eɪ.tɪd/", meaning: "Đánh giá (gốc: evaluate)", type: "verb" },
            { word: "Adjusted", ipa: "/əˈdʒʌs.tɪd/", meaning: "Điều chỉnh (gốc: adjust)", type: "verb" },
            { word: "Refined", ipa: "/rɪˈfaɪnd/", meaning: "Tinh chỉnh (gốc: refine)", type: "verb" },
            { word: "Sustained", ipa: "/səˈsteɪnd/", meaning: "Duy trì (gốc: sustain)", type: "verb" },
            { word: "Expanded", ipa: "/ɪkˈspændɪd/", meaning: "Mở rộng (gốc: expand)", type: "verb" },
            { word: "Prioritized", ipa: "/praɪˈɒr.ɪ.taɪzd/", meaning: "Ưu tiên (gốc: prioritize)", type: "verb" },
            { word: "Integrated", ipa: "/ˈɪn.tɪ.ɡreɪ.tɪd/", meaning: "Tích hợp (gốc: integrate)", type: "verb" },
            { word: "Allocated", ipa: "/ˈæl.ə.keɪ.tɪd/", meaning: "Phân bổ (gốc: allocate)", type: "verb" },
            { word: "Initiated", ipa: "/ɪˈnɪʃ.i.eɪ.tɪd/", meaning: "Khởi xướng (gốc: initiate)", type: "verb" },
            { word: "Consolidated", ipa: "/kənˈsɒl.ɪ.deɪ.tɪd/", meaning: "Củng cố/Hợp nhất (gốc: consolidate)", type: "verb" },
            { word: "Diagnosed", ipa: "/ˈdaɪ.əɡ.nəʊzd/", meaning: "Chẩn đoán (gốc: diagnose)", type: "verb" },
            { word: "Verified", ipa: "/ˈver.ɪ.faɪd/", meaning: "Xác minh (gốc: verify)", type: "verb" },
            { word: "Formulated", ipa: "/ˈfɔː.mjə.leɪ.tɪd/", meaning: "Xây dựng/Đề ra (gốc: formulate)", type: "verb" },
            { word: "Executed", ipa: "/ˈek.sɪ.kjuː.tɪd/", meaning: "Thực hiện/Thi hành (gốc: execute)", type: "verb" },
            { word: "Documented", ipa: "/ˈdɒk.jə.men.tɪd/", meaning: "Ghi chép/Lưu trữ (gốc: document)", type: "verb" },

            // B. CỤM ĐỘNG TỪ (PV) - 12 từ
            { word: "Built on", ipa: "/bɪlt ɒn/", meaning: "Phát triển dựa trên (gốc: build on)", type: "phrasal verb" },
            { word: "Cut down on", ipa: "/kʌt daʊn ɒn/", meaning: "Cắt giảm (gốc: cut down on)", type: "phrasal verb" },
            { word: "Caught up on", ipa: "/kɔːt ʌp ɒn/", meaning: "Làm bù/Bắt kịp (gốc: catch up on)", type: "phrasal verb" },
            { word: "Fell behind", ipa: "/fel bɪˈhaɪnd/", meaning: "Tụt lại phía sau (gốc: fall behind)", type: "phrasal verb" },
            { word: "Phased out", ipa: "/feɪzd aʊt/", meaning: "Loại bỏ dần (gốc: phase out)", type: "phrasal verb" },
            { word: "Stepped up", ipa: "/stept ʌp/", meaning: "Tăng cường (gốc: step up)", type: "phrasal verb" },
            { word: "Followed through", ipa: "/ˈfɒl.əʊd θruː/", meaning: "Theo đến cùng (gốc: follow through)", type: "phrasal verb" },
            { word: "Broke down", ipa: "/brəʊk daʊn/", meaning: "Phân tích/Hư hỏng (gốc: break down)", type: "phrasal verb" },
            { word: "Rolled out", ipa: "/rəʊld aʊt/", meaning: "Triển khai (gốc: roll out)", type: "phrasal verb" },
            { word: "Scaled up", ipa: "/skeɪld ʌp/", meaning: "Mở rộng quy mô (gốc: scale up)", type: "phrasal verb" },
            { word: "Locked in", ipa: "/lɒkt ɪn/", meaning: "Chốt/Cố định (gốc: lock in)", type: "phrasal verb" },
            { word: "Mapped out", ipa: "/mæpt aʊt/", meaning: "Vạch kế hoạch (gốc: map out)", type: "phrasal verb" }
        ],

        // 2. NGỮ PHÁP (PAST SIMPLE vs PRESENT PERFECT + FOR/SINCE)
        grammar: {
            title: "Phân biệt Past Simple vs Present Perfect",
            content: `
                <div style="line-height: 1.6;">
                    <h3>1.1 Quy tắc quyết định nhanh</h3>
                    <div style="background: #e8f8f5; padding: 10px; border-left: 5px solid #1abc9c; margin-bottom: 10px;">
                        👉 <b>CÓ mốc thời gian quá khứ (yesterday, in 2020)</b> → Dùng <b>PAST SIMPLE</b>.<br>
                        👉 <b>KHÔNG có mốc thời gian (trải nghiệm, kết quả)</b> → Dùng <b>PRESENT PERFECT</b>.
                    </div>
                    <p>Ví dụ:</p>
                    <ul>
                        <li><i>I <b>completed</b> the course <b>in 2023</b>.</i> (Past Simple)</li>
                        <li><i>I <b>have completed</b> the course.</i> (Present Perfect)</li>
                    </ul>

                    <hr>

                    <h3>1.2 FOR và SINCE</h3>
                    <p>Dùng với Present Perfect để nói về khoảng thời gian kéo dài đến hiện tại.</p>
                    <table border="1" style="border-collapse: collapse; width: 100%;">
                        <tr>
                            <td><b>FOR</b></td>
                            <td>+ Khoảng thời gian (2 years, 3 months, a long time)</td>
                            <td><i>I have studied <b>for 2 years</b>.</i></td>
                        </tr>
                        <tr>
                            <td><b>SINCE</b></td>
                            <td>+ Mốc thời gian bắt đầu (2022, last week, yesterday)</td>
                            <td><i>She has worked here <b>since 2021</b>.</i></td>
                        </tr>
                    </table>

                    <hr>

                    <h3>1.3 So sánh trực diện</h3>
                    <ul>
                        <li>❌ SAI: <i>I have studied in 2020.</i></li>
                        <li>✅ ĐÚNG: <i>I studied in 2020.</i></li>
                        <li>✅ ĐÚNG: <i>I have studied since 2020.</i></li>
                    </ul>
                </div>
            `
        },

        // 3. BÀI TẬP (TRẮC NGHIỆM + NHẬP LIỆU)
        quiz: [
            // --- BÀI 1: CHỌN THÌ ĐÚNG (TRẮC NGHIỆM) ---
            { question: "1. I ___ the training last summer. (Có 'last summer')", options: ["have completed", "completed"], answer: 1 },
            { question: "2. She ___ her writing skills significantly. (Kết quả hiện tại)", options: ["has improved", "improved"], answer: 0 },
            { question: "3. We ___ learning online in 2021. (Có 'in 2021')", options: ["have started", "started"], answer: 1 },
            { question: "4. He ___ valuable experience so far. (Có 'so far')", options: ["has gained", "gained"], answer: 0 },
            { question: "5. They ___ in many workshops. (Trải nghiệm)", options: ["have participated", "participated"], answer: 0 },
            { question: "6. I ___ the report yesterday. (Có 'yesterday')", options: ["have finished", "finished"], answer: 1 },
            { question: "7. She ___ similar tasks before. (Có 'before')", options: ["has handled", "handled"], answer: 0 },
            { question: "8. We ___ our mentor last week. (Có 'last week')", options: ["have met", "met"], answer: 1 },
            { question: "9. He ___ many obstacles. (Kết quả)", options: ["has overcome", "overcame"], answer: 0 },
            { question: "10. I ___ the assignment already. (Có 'already')", options: ["have submitted", "submitted"], answer: 0 },

            // --- BÀI 2: ĐIỀN FOR / SINCE (TRẮC NGHIỆM) ---
            { question: "11. I have focused on this goal ___ three months.", options: ["for", "since"], answer: 0 },
            { question: "12. She has worked on the project ___ March.", options: ["for", "since"], answer: 1 },
            { question: "13. We have lived here ___ a long time.", options: ["for", "since"], answer: 0 },
            { question: "14. He has prepared for the exam ___ last week.", options: ["for", "since"], answer: 1 },
            { question: "15. They have followed this method ___ 2022.", options: ["for", "since"], answer: 1 },
            { question: "16. I have stayed motivated ___ several weeks.", options: ["for", "since"], answer: 0 },
            { question: "17. She has practiced daily ___ the beginning.", options: ["for", "since"], answer: 1 },
            { question: "18. We have collaborated ___ two semesters.", options: ["for", "since"], answer: 0 },

            // --- BÀI 3: SỬA LỖI SAI (NHẬP LIỆU) ---
            { question: "19. Sửa lỗi: 'I have completed the program last year.'", type: "text", answer: "I completed the program last year" },
            { question: "20. Sửa lỗi: 'She studied online since 2021.'", type: "text", answer: "She has studied online since 2021" },
            { question: "21. Sửa lỗi: 'We have joined the team in May.'", type: "text", answer: "We joined the team in May" },
            { question: "22. Sửa lỗi: 'He has worked here for last year.' (Sửa 'for' thành 'since' hoặc bỏ 'has')", type: "text", answer: "He has worked here since last year" },
            { question: "23. Sửa lỗi: 'They learned this skill for six months.' (Ý nói kéo dài đến nay)", type: "text", answer: "They have learned this skill for six months" },
            { question: "24. Sửa lỗi: 'I have finished the task yesterday.'", type: "text", answer: "I finished the task yesterday" },

            // --- BÀI 4: VIẾT LẠI CÂU (NHẬP LIỆU) ---
            { question: "25. Viết lại: 'I started learning English in 2022.' (Dùng Present Perfect + since)", type: "text", answer: "I have learned English since 2022" }, // Hoặc "have been learning"
            { question: "26. Viết lại: 'She finished the project.' (Thêm 'already')", type: "text", answer: "She has already finished the project" },
            { question: "27. Viết lại: 'We worked on this topic for three months.' (Chuyển sang Present Perfect)", type: "text", answer: "We have worked on this topic for three months" },
            { question: "28. Viết lại: 'He joined the course last year.' (Giữ nguyên Past Simple)", type: "text", answer: "He joined the course last year" },
            { question: "29. Viết lại: 'They practiced speaking for weeks.' (Chuyển sang Present Perfect)", type: "text", answer: "They have practiced speaking for weeks" },
            { question: "30. Viết lại: 'I learned many techniques before.' (Chuyển sang Present Perfect)", type: "text", answer: "I have learned many techniques before" },

            // --- BÀI 5: PHÂN LOẠI TỪ (TRẮC NGHIỆM) ---
            { question: "31. 'Sustain' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "32. 'Cut down on' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "33. 'Evaluate' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "34. 'Break down' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "35. 'Prioritize' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "36. 'Map out' là V hay PV?", options: ["V", "PV"], answer: 1 },
            { question: "37. 'Integrate' là V hay PV?", options: ["V", "PV"], answer: 0 },
            { question: "38. 'Step up' là V hay PV?", options: ["V", "PV"], answer: 1 },

            // --- BÀI 6: ĐIỀN TỪ (NHẬP LIỆU) ---
            { question: "39. We have ___ (mapped) out our strategy carefully.", type: "text", answer: "mapped" },
            { question: "40. She decided to ___ (step) up her efforts this month.", type: "text", answer: "step" },
            { question: "41. They are trying to ___ (cut) down on unnecessary tasks.", type: "text", answer: "cut" },
            { question: "42. He has ___ (monitored) progress weekly.", type: "text", answer: "monitored" },
            { question: "43. The team plans to ___ (roll) out the project next year.", type: "text", answer: "roll" },
            { question: "44. I need to ___ (adjust) my study plan.", type: "text", answer: "adjust" }
        ],

        // 4. LUYỆN NÓI
        speaking: "I have studied English since 2022"
    },

];
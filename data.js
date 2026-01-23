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
{
        id: 13,
        title: "Ngày 13: Test Tuần 2 - Past Simple vs Present Perfect (IELTS Style)",
        vocab: [], // Ngày kiểm tra không có từ vựng mới
        grammar: {
            title: "MỤC TIÊU & PHẠM VI BÀI TEST",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 2px dashed #ff4b4b;">
                    <h3 style="color: #ff4b4b; margin-top: 0;">⚠️ KIỂM TRA ĐỊNH KỲ TUẦN 2</h3>
                    <p><strong>Thời lượng:</strong> 30 phút</p>
                    <p><strong>Phạm vi kiến thức:</strong></p>
                    <ul>
                        <li>Phân biệt <b>Past Simple</b> (Quá khứ đơn) và <b>Present Perfect</b> (Hiện tại hoàn thành).</li>
                        <li>Cách dùng các từ nhận biết: <i>For, Since, Ever, Never, Already, Yet...</i></li>
                        <li><b>Sửa lỗi sai:</b> Các lỗi trộn thì phổ biến (Lỗi khiến bạn bị kẹt ở band 5.0 - 6.0 IELTS).</li>
                    </ul>
                    <p style="font-style: italic; color: #555;">Lưu ý: Hãy làm bài trung thực, không tra từ điển để đánh giá đúng năng lực.</p>
                </div>
            `
        },
        quiz: [
            // --- BÀI 1: CHỌN THÌ ĐÚNG ---
            {
                question: "Bài 1 - Câu 1: I ___ (completed / have completed) the course last year.",
                type: "choice",
                options: ["completed", "have completed"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: She ___ (has improved / improved) her speaking skills a lot.",
                type: "choice",
                options: ["has improved", "improved"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: We ___ (started / have started) learning English in 2021.",
                type: "choice",
                options: ["started", "have started"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: He ___ (has never tried / never tried) online classes before.",
                type: "choice",
                options: ["has never tried", "never tried"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: They ___ (finished / have finished) the task already.",
                type: "choice",
                options: ["finished", "have finished"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 6: I ___ (met / have met) my teacher yesterday.",
                type: "choice",
                options: ["met", "have met"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: She ___ (has lived / lived) here since 2020.",
                type: "choice",
                options: ["has lived", "lived"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: We ___ (have practiced / practiced) speaking for three months.",
                type: "choice",
                options: ["have practiced", "practiced"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 9: He ___ (has submitted / submitted) the report last night.",
                type: "choice",
                options: ["has submitted", "submitted"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 10: I ___ (have seen / saw) this problem many times.",
                type: "choice",
                options: ["have seen", "saw"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 11: They ___ (joined / have joined) the program two weeks ago.",
                type: "choice",
                options: ["joined", "have joined"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 12: She ___ (has never failed / never failed) an exam.",
                type: "choice",
                options: ["has never failed", "never failed"],
                answer: 0
            },

            // --- BÀI 2: ĐIỀN FOR / SINCE / Ø ---
            {
                question: "Bài 2 - Câu 1: I have studied English ___ two years.",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 2: She has worked here ___ 2019.",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 1
            },
            {
                question: "Bài 2 - Câu 3: We finished the project ___ last month.",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 2
            },
            {
                question: "Bài 2 - Câu 4: He has been interested in AI ___ a long time.",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 5: They joined the team ___ May.",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 2
            },
            {
                question: "Bài 2 - Câu 6: I have not seen him ___ yesterday. (Lưu ý: Chọn theo đáp án của đề bài)",
                type: "choice",
                options: ["for", "since", "Ø"],
                answer: 2
            },

            // --- BÀI 3: TÌM LỖI SAI VÀ SỬA ---
            {
                question: "Bài 3 - Câu 1: 'I have finished the assignment yesterday.' -> Viết lại câu đúng:",
                type: "text",
                answer: "I finished the assignment yesterday"
            },
            {
                question: "Bài 3 - Câu 2: 'She studied English since 2020.' -> Viết lại câu đúng:",
                type: "text",
                answer: "She has studied English since 2020"
            },
            {
                question: "Bài 3 - Câu 3: 'We have met our supervisor last week.' -> Viết lại câu đúng:",
                type: "text",
                answer: "We met our supervisor last week"
            },
            {
                question: "Bài 3 - Câu 4: 'He has worked here for last year.' -> Viết lại câu đúng:",
                type: "text",
                answer: "He has worked here since last year"
            },
            {
                question: "Bài 3 - Câu 5: 'They learned this method for three months.' -> Viết lại câu đúng (dùng Present Perfect):",
                type: "text",
                answer: "They have learned this method for three months"
            },
            {
                question: "Bài 3 - Câu 6: 'I have already saw this video.' -> Viết lại câu đúng:",
                type: "text",
                answer: "I have already seen this video"
            },
            {
                question: "Bài 3 - Câu 7: 'She has never went abroad.' -> Viết lại câu đúng:",
                type: "text",
                answer: "She has never gone abroad"
            },
            {
                question: "Bài 3 - Câu 8: 'We have discussed this issue in the meeting last night.' -> Viết lại câu đúng:",
                type: "text",
                answer: "We discussed this issue in the meeting last night"
            },

            // --- BÀI 4: CHỌN CÂU ĐÚNG (IELTS Writing Lỗi nhỏ) ---
            {
                question: "Bài 4 - Cặp 1: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "I have taken the test in 2022.",
                    "I took the test in 2022."
                ],
                answer: 1
            },
            {
                question: "Bài 4 - Cặp 2: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "I have never experienced online learning before.",
                    "I never experienced online learning before."
                ],
                answer: 0
            },
            {
                question: "Bài 4 - Cặp 3: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "She has worked here for five years.",
                    "She worked here for five years."
                ],
                answer: 0
            },
            {
                question: "Bài 4 - Cặp 4: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "We have completed the task already.",
                    "We completed the task already."
                ],
                answer: 0
            },
            {
                question: "Bài 4 - Cặp 5: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "He has joined the program last year.",
                    "He joined the program last year."
                ],
                answer: 1
            },
            {
                question: "Bài 4 - Cặp 6: Chọn câu đúng ngữ pháp.",
                type: "choice",
                options: [
                    "They have lived here since 2018.",
                    "They lived here since 2018."
                ],
                answer: 0
            },

            // --- BÀI 5: VIẾT LẠI CÂU ---
            {
                question: "Bài 5 - Câu 1: Viết lại câu dùng Present Perfect + since: 'I started learning English in 2021.'",
                type: "text",
                answer: "I have learned English since 2021"
            },
            {
                question: "Bài 5 - Câu 2: Viết lại câu dùng Already: 'She finished the report.'",
                type: "text",
                answer: "She has already finished the report"
            },
            {
                question: "Bài 5 - Câu 3: Chia thì Present Perfect: 'We (practice) speaking for six months.'",
                type: "text",
                answer: "We have practiced speaking for six months"
            },
            {
                question: "Bài 5 - Câu 4: Chia thì đúng (giữ nguyên mốc thời gian): 'He (attend) the workshop last week.'",
                type: "text",
                answer: "He attended the workshop last week"
            }
        ],
        speaking: [
                "How long have you been learning English?",
                "What have you improved recently?",
                "When did you start learning English?"
        ]
    },
    {
        id: 14,
        title: "Ngày 14: Future Forms - Will vs Be Going To vs Present Continuous",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) ---
            { word: "plan", type: "v", ipa: "/plæn/", meaning: "lên kế hoạch", example: "I plan to study abroad." },
            { word: "intend", type: "v", ipa: "/ɪnˈtend/", meaning: "dự định", example: "I intend to improve my writing." },
            { word: "expect", type: "v", ipa: "/ɪkˈspekt/", meaning: "mong đợi, dự đoán", example: "I expect better results." },
            { word: "predict", type: "v", ipa: "/prɪˈdɪkt/", meaning: "dự đoán", example: "Experts predict rapid growth." },
            { word: "prepare", type: "v", ipa: "/prɪˈper/", meaning: "chuẩn bị", example: "I am preparing for the IELTS exam." },
            { word: "decide", type: "v", ipa: "/dɪˈsaɪd/", meaning: "quyết định", example: "I decided to focus on speaking." },
            { word: "arrange", type: "v", ipa: "/əˈreɪndʒ/", meaning: "sắp xếp", example: "I arranged a meeting with my tutor." },
            { word: "postpone", type: "v", ipa: "/poʊˈspoʊn/", meaning: "hoãn lại", example: "The test was postponed." },
            { word: "confirm", type: "v", ipa: "/kənˈfɜːrm/", meaning: "xác nhận", example: "Please confirm your schedule." },
            { word: "consider", type: "v", ipa: "/kənˈsɪdər/", meaning: "cân nhắc", example: "I am considering studying overseas." },
            { word: "aim", type: "v", ipa: "/eɪm/", meaning: "hướng tới", example: "I aim to achieve band 7." },
            { word: "estimate", type: "v", ipa: "/ˈestɪmeɪt/", meaning: "ước tính", example: "It is estimated that costs will rise." },
            { word: "anticipate", type: "v", ipa: "/ænˈtɪsɪpeɪt/", meaning: "dự đoán trước", example: "We anticipate future challenges." },
            { word: "organize", type: "v", ipa: "/ˈɔːrɡənaɪz/", meaning: "tổ chức", example: "The workshop was well organized." },
            { word: "schedule", type: "v", ipa: "/ˈskedʒuːl/", meaning: "lên lịch", example: "The exam is scheduled for June." },

            // --- B. DANH TỪ (NOUNS) ---
            { word: "plan", type: "n", ipa: "/plæn/", meaning: "kế hoạch", example: "A long-term plan is necessary." },
            { word: "goal", type: "n", ipa: "/ɡoʊl/", meaning: "mục tiêu", example: "My goal is to improve fluency." },
            { word: "decision", type: "n", ipa: "/dɪˈsɪʒn/", meaning: "quyết định", example: "This decision affects my future." },
            { word: "prediction", type: "n", ipa: "/prɪˈdɪkʃn/", meaning: "dự đoán", example: "Climate predictions vary." },
            { word: "intention", type: "n", ipa: "/ɪnˈtenʃn/", meaning: "ý định", example: "She has no intention of quitting." },
            { word: "arrangement", type: "n", ipa: "/əˈreɪndʒmənt/", meaning: "sự sắp xếp", example: "Travel arrangements are complete." },
            { word: "schedule", type: "n", ipa: "/ˈskedʒuːl/", meaning: "lịch trình", example: "The schedule is very tight." },
            { word: "priority", type: "n", ipa: "/praɪˈɔːrəti/", meaning: "ưu tiên", example: "Education should be a priority." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả", example: "The outcome was positive." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", example: "Online learning is a growing trend." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ / ADV) ---
            { word: "future", type: "adj", ipa: "/ˈfjuːtʃər/", meaning: "tương lai", example: "Future plans should be realistic." },
            { word: "long-term", type: "adj", ipa: "/ˌlɔːŋ ˈtɜːrm/", meaning: "dài hạn", example: "Long-term goals require patience." },
            { word: "short-term", type: "adj", ipa: "/ˌʃɔːrt ˈtɜːrm/", meaning: "ngắn hạn", example: "Short-term solutions are not enough." },
            { word: "likely", type: "adj", ipa: "/ˈlaɪkli/", meaning: "có khả năng", example: "It is likely to happen." },
            { word: "eventually", type: "adv", ipa: "/ɪˈventʃuəli/", meaning: "cuối cùng thì", example: "Eventually, technology will dominate." }
        ],
        grammar: {
            title: "PHÂN BIỆT 3 CÁCH NÓI TƯƠNG LAI (FUTURE FORMS)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <h3 style="color: #ff4b4b; margin-top: 0;">1. QUY TẮC QUYẾT ĐỊNH NHANH (3 GIÂY)</h3>
                    <p>Hãy tự hỏi 3 câu sau trước khi chọn thì:</p>
                    <ul style="list-style: none; padding-left: 10px;">
                        <li>❓ Quyết định <b>ngay lúc nói</b>? 👉 Dùng <b>WILL</b></li>
                        <li>❓ Đã có <b>kế hoạch/ý định</b> từ trước? 👉 Dùng <b>BE GOING TO</b></li>
                        <li>❓ Đã có <b>lịch chốt, thời gian cụ thể</b> (vé, hẹn)? 👉 Dùng <b>PRESENT CONTINUOUS</b></li>
                    </ul>

                    <hr style="margin: 20px 0; border-top: 1px dashed #ccc;">

                    <h4 style="color: #2b70c9;">1.1. WILL (Tương lai đơn)</h4>
                    <p><b>Cách dùng:</b> Quyết định tức thì (ngay lúc nói), lời hứa, lời đề nghị, hoặc dự đoán theo quan điểm cá nhân (I think...).</p>
                    <p><b>Cấu trúc:</b> S + will + V</p>
                    <div style="background: #e3f2fd; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                        Example: <br>
                        - I’m tired. I <b>will take</b> a break. (Quyết định ngay)<br>
                        - I think technology <b>will change</b> education. (Quan điểm)
                    </div>
                    <div style="background: #ffebee; padding: 10px; border-radius: 5px; border-left: 4px solid #ff4b4b;">
                        <b>⚠️ Lỗi IELTS:</b><br>
                        ❌ I will study abroad next year. (Sai vì du học là kế hoạch lớn)<br>
                        ✅ I <b>am going to</b> study abroad next year.
                    </div>

                    <h4 style="color: #2b70c9; margin-top: 20px;">1.2. BE GOING TO (Tương lai gần)</h4>
                    <p><b>Cách dùng:</b> Kế hoạch/dự định đã có TRƯỚC khi nói. Dự đoán dựa trên BẰNG CHỨNG thực tế.</p>
                    <p><b>Cấu trúc:</b> S + am/is/are + going to + V</p>
                    <div style="background: #e3f2fd; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                        Example: <br>
                        - I <b>am going to apply</b> for a scholarship. (Dự định)<br>
                        - Look at the clouds! It <b>is going to rain</b>. (Có bằng chứng)
                    </div>

                    <h4 style="color: #2b70c9; margin-top: 20px;">1.3. PRESENT CONTINUOUS (Hiện tại tiếp diễn)</h4>
                    <p><b>Cách dùng:</b> Lịch trình đã sắp xếp cố định (thường có thời gian, địa điểm, người gặp cụ thể).</p>
                    <p><b>Cấu trúc:</b> S + am/is/are + V-ing</p>
                    <div style="background: #e3f2fd; padding: 10px; border-radius: 5px; margin-bottom: 10px;">
                        Example: <br>
                        - I <b>am meeting</b> my tutor tomorrow at 9 AM. (Lịch hẹn)<br>
                        - We <b>are taking</b> the IELTS test next month. (Đã đăng ký)
                    </div>
                    <div style="background: #ffebee; padding: 10px; border-radius: 5px; border-left: 4px solid #ff4b4b;">
                        <b>⚠️ Lỗi IELTS:</b><br>
                        ❌ I will meet my tutor tomorrow. (Sai vì đây là lịch hẹn)<br>
                        ✅ I <b>am meeting</b> my tutor tomorrow.
                    </div>
                </div>
            `
        },
        quiz: [
            // --- BÀI 1: CHỌN DẠNG ĐÚNG ---
            {
                question: "Bài 1 - Câu 1: I think online education ___ become more popular. (Opinion)",
                type: "choice",
                options: ["will", "is going to", "is becoming"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: I already decided. I ___ study overseas next year. (Plan)",
                type: "choice",
                options: ["will", "am going to", "am studying"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: The sky is very dark. It ___ rain soon. (Evidence)",
                type: "choice",
                options: ["will", "is going to", "is raining"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: I forgot my pen. I ___ borrow one. (Instant decision)",
                type: "choice",
                options: ["will", "am going to", "am borrowing"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: We ___ discuss the results with our teacher tomorrow at 3 p.m. (Fixed schedule)",
                type: "choice",
                options: ["will", "are going to", "are discussing"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 6: She made a plan. She ___ focus on writing skills this month.",
                type: "choice",
                options: ["will", "is going to", "is focusing"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 7: Don’t worry. I ___ explain everything. (Promise)",
                type: "choice",
                options: ["will", "am going to", "am explaining"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: Look at those students. They ___ fail the test. (Evidence based)",
                type: "choice",
                options: ["will", "are going to", "are failing"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 9: I ___ attend an IELTS workshop this Saturday. (Already booked)",
                type: "choice",
                options: ["will", "am going to", "am attending"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 10: I think governments ___ invest more in education.",
                type: "choice",
                options: ["will", "are going to", "are investing"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 11: I’m free now. I ___ help you with your homework. (Offer)",
                type: "choice",
                options: ["will", "am going to", "am helping"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 12: He has an appointment. He ___ meet his supervisor this afternoon.",
                type: "choice",
                options: ["will", "is going to", "is meeting"],
                answer: 2
            },

            // --- BÀI 2: SỬA LỖI SAI KIỂU IELTS ---
            {
                question: "Bài 2 - Câu 1: 'I will take the IELTS test next Friday.' (Lịch thi cố định) -> Viết lại câu đúng:",
                type: "text",
                answer: "I am taking the IELTS test next Friday"
            },
            {
                question: "Bài 2 - Câu 2: 'I am going to think technology will change education.' (Quan điểm cá nhân) -> Viết lại câu đúng:",
                type: "text",
                answer: "I think technology will change education"
            },
            {
                question: "Bài 2 - Câu 3: 'Look at the clouds. It will rain.' (Có bằng chứng) -> Viết lại câu đúng:",
                type: "text",
                answer: "It is going to rain"
            },
            {
                question: "Bài 2 - Câu 4: 'I am meeting more vocabulary next month.' (Dự định học thêm từ mới) -> Viết lại câu đúng:",
                type: "text",
                answer: "I am learning more vocabulary next month"
            },
            {
                question: "Bài 2 - Câu 5: 'I will going to study harder this year.' (Sai ngữ pháp cơ bản) -> Viết lại câu đúng:",
                type: "text",
                answer: "I am going to study harder this year"
            },
            {
                question: "Bài 2 - Câu 6: 'I am going to meet my friend right now.' (Quyết định ngay tức thì) -> Viết lại câu đúng:",
                type: "text",
                answer: "I will meet my friend right now"
            },

            // --- BÀI 3: VIẾT LẠI CÂU ---
            {
                question: "Bài 3 - Câu 1: (Decision now) 'I / take / a break.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "I will take a break"
            },
            {
                question: "Bài 3 - Câu 2: (Plan) 'I / improve / my speaking.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "I am going to improve my speaking"
            },
            {
                question: "Bài 3 - Câu 3: (Timetable fixed) 'We / have / an exam / next Monday.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "We are having an exam next Monday"
            },
            {
                question: "Bài 3 - Câu 4: (Prediction/Opinion) 'AI / change / learning.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "AI will change learning"
            },
            {
                question: "Bài 3 - Câu 5: (Evidence-based) 'Prices / increase.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "Prices are going to increase"
            },
            {
                question: "Bài 3 - Câu 6: (Promise) 'I / not forget / this lesson.' -> Viết câu hoàn chỉnh:",
                type: "text",
                answer: "I will not forget this lesson"
            }
        ],
        speaking: [
            "What are your plans for the weekend?",
            "Do you think technology will change education?",
            "Are you going to take any courses next month?"
        ]
    },
    {
        id: 15,
        title: "Ngày 15: Future Forms - IELTS Trap Test (Mục tiêu Band 7)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) ---
            { word: "implement", type: "v", ipa: "/ˈɪmplɪment/", meaning: "triển khai", example: "Implement a new policy." },
            { word: "project", type: "v", ipa: "/prəˈdʒekt/", meaning: "dự đoán (chính thức)", example: "Growth is projected to increase." },
            { word: "forecast", type: "v", ipa: "/ˈfɔːrkæst/", meaning: "dự báo", example: "Experts forecast higher demand." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", example: "Governments must prioritize education." },
            { word: "allocate", type: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", example: "Allocate resources effectively." },
            { word: "revise", type: "v", ipa: "/rɪˈvaɪz/", meaning: "sửa đổi, xem lại", example: "Revise the proposal." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết (vấn đề)", example: "Address social issues." },
            { word: "commit", type: "v", ipa: "/kəˈmɪt/", meaning: "cam kết", example: "Commit to long-term goals." },
            { word: "propose", type: "v", ipa: "/prəˈpoʊz/", meaning: "đề xuất", example: "Propose a solution." },
            { word: "anticipate", type: "v", ipa: "/ænˈtɪsɪpeɪt/", meaning: "lường trước, liệu trước", example: "We anticipate that sales will recover by the end of the year." },
            { word: "initiate", type: "v", ipa: "/ɪˈnɪʃieɪt/", meaning: "khởi xướng, bắt đầu", example: "The government initiated a program to support small businesses." },
            { word: "strengthen", type: "v", ipa: "/ˈstreŋθn/", meaning: "củng cố, tăng cường", example: "Reading daily will help strengthen your vocabulary range." },
            { word: "expand", type: "v", ipa: "/ɪkˈspænd/", meaning: "mở rộng", example: "The company plans to expand its operations into the Asian market." },
            { word: "restrict", type: "v", ipa: "/rɪˈstrɪkt/", meaning: "hạn chế, giới hạn", example: "Access to this area is restricted to authorized personnel only." },
            { word: "stabilize", type: "v", ipa: "/ˈsteɪbəlaɪz/", meaning: "ổn định", example: "The economy has started to stabilize after the recent crisis." },

            // --- B. DANH TỪ (NOUNS) ---
            { word: "projection", type: "n", ipa: "/prəˈdʒekʃn/", meaning: "sự dự báo, số liệu dự đoán", example: "Current projections suggest a significant population decline." },
            { word: "commitment", type: "n", ipa: "/kəˈmɪtmənt/", meaning: "sự cam kết", example: "She showed great commitment to achieving her academic goals." },
            { word: "initiative", type: "n", ipa: "/ɪˈnɪʃətɪv/", meaning: "sáng kiến", example: "This new environmental initiative aims to reduce plastic waste." },
            { word: "implementation", type: "n", ipa: "/ˌɪmplɪmenˈteɪʃn/", meaning: "sự triển khai", example: "The implementation of the new safety rules was delayed." },
            { word: "regulation", type: "n", ipa: "/ˌreɡjuˈleɪʃn/", meaning: "quy định", example: "Strict safety regulations must be followed in the laboratory." },
            { word: "allocation", type: "n", ipa: "/ˌæləˈkeɪʃn/", meaning: "sự phân bổ", example: "The efficient allocation of funds is crucial for the project's success." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự hạn chế, ràng buộc", example: "Budget constraints limit our ability to hire new staff members." },
            { word: "capacity", type: "n", ipa: "/kəˈpæsəti/", meaning: "năng lực, sức chứa", example: "The stadium has a seating capacity of 50,000 spectators." },
            { word: "efficiency", type: "n", ipa: "/ɪˈfɪʃnsi/", meaning: "hiệu quả, năng suất", example: "We need to improve energy efficiency in the manufacturing process." },
            { word: "sustainability", type: "n", ipa: "/səˌsteɪnəˈbɪləti/", meaning: "tính bền vững", example: "Sustainability is a key factor in modern urban planning." },

            // --- C. TÍNH TỪ / TRẠNG TỪ ---
            { word: "inevitable", type: "adj", ipa: "/ɪnˈevɪtəbl/", meaning: "không thể tránh khỏi", example: "Change is inevitable in any growing organization." },
            { word: "feasible", type: "adj", ipa: "/ˈfiːzəbl/", meaning: "khả thi", example: "It is not feasible to complete the construction by tomorrow." },
            { word: "strategic", type: "adj", ipa: "/strəˈtiːdʒɪk/", meaning: "mang tính chiến lược", example: "They made a strategic decision to enter the European market." },
            { word: "gradual", type: "adj", ipa: "/ˈɡrædʒuəl/", meaning: "dần dần", example: "There has been a gradual improvement in the patient's health." },
            { word: "ultimately", type: "adv", ipa: "/ˈʌltɪmətli/", meaning: "rốt cuộc, cuối cùng", example: "Ultimately, the decision lies with the board of directors." }
        ],
        grammar: {
            title: "CHIẾN LƯỢC SỬA LỖI: BAND 6 → BAND 7",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 2px solid #58cc02;">
                    <h3 style="color: #58cc02; margin-top: 0;">🎯 LÀM SAO ĐỂ LÊN BAND 7+?</h3>
                    <p>Trong IELTS Speaking & Writing, để thoát khỏi band 5-6, bạn cần tránh các lỗi "Future Forms" sau:</p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
                        <div style="background: #ffebee; padding: 15px; border-radius: 8px;">
                            <h4 style="color: #d32f2f; margin: 0 0 10px 0;">❌ LỖI BAND 5-6 (Cần tránh)</h4>
                            <ul style="padding-left: 20px; margin: 0;">
                                <li>Dùng <b>WILL</b> cho mọi loại tương lai (kể cả kế hoạch).</li>
                                <li>Không phân biệt được "Ý định" vs "Lịch cố định".</li>
                                <li>Dùng sai động từ sau "going to".</li>
                                <li>Dùng thì tương lai nhưng văn phong quá suồng sã (văn nói).</li>
                            </ul>
                            <p style="margin-top: 10px; font-style: italic;">"I will improve my English next year." (Quá đơn giản)</p>
                        </div>

                        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px;">
                            <h4 style="color: #2e7d32; margin: 0 0 10px 0;">✅ CHIẾN LƯỢC BAND 7+</h4>
                            <ul style="padding-left: 20px; margin: 0;">
                                <li>Chọn đúng thì theo ngữ cảnh (Will / Going to / Pres. Cont).</li>
                                <li>Kết hợp với từ vựng học thuật (Vocabulary Level B2/C1).</li>
                                <li>Dùng cấu trúc diễn đạt kế hoạch dài hạn.</li>
                            </ul>
                            <p style="margin-top: 10px; font-weight: bold;">"I am going to focus on improving my English over the next year."</p>
                        </div>
                    </div>

                    <hr style="margin: 20px 0; border-top: 1px dashed #ccc;">
                    <p><b>💡 Kết luận:</b> Band 7 cần sự <b>LOGIC</b> và <b>KIỂM SOÁT LỖI</b>, không phải cứ dùng từ khó là được. Hãy làm bài test dưới đây để kiểm tra độ nhạy bén của bạn.</p>
                </div>
            `
        },
        quiz: [
            // --- BÀI 1: CHỌN DẠNG ĐÚNG (TEST BẪY IELTS) ---
            {
                question: "Bài 1 - Câu 1: I can’t understand this chart. I ___ explain it again. (Quyết định ngay lúc nói)",
                type: "choice",
                options: ["will", "am going to", "am explaining"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: I already have a plan. I ___ focus on academic vocabulary this month.",
                type: "choice",
                options: ["will", "am going to", "am focusing"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Look at the statistics. The gap ___ widen in the future. (Dự đoán có bằng chứng)",
                type: "choice",
                options: ["will", "is going to", "is widening"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: We ___ submit the assignment on Friday at 5 p.m. (Deadline fixed)",
                type: "choice",
                options: ["will", "are going to", "are submitting"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 5: Many experts believe governments ___ invest more in education. (Quan điểm/Opinion)",
                type: "choice",
                options: ["will", "are going to", "are investing"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: I didn’t expect this question. I ___ guess the answer.",
                type: "choice",
                options: ["will", "am going to", "am guessing"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: She has made arrangements. She ___ attend a writing workshop next week.",
                type: "choice",
                options: ["will", "is going to", "is attending"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 8: The sky is clear. It ___ rain today. (Evidence based)",
                type: "choice",
                options: ["will", "will not", "is not going to"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 9: Our team ___ present the results tomorrow morning. (Scheduled)",
                type: "choice",
                options: ["will", "is going to", "is presenting", "are presenting"],
                answer: 3
            },
            {
                question: "Bài 1 - Câu 10: I think online courses ___ replace traditional classrooms completely.",
                type: "choice",
                options: ["will", "are going to", "are replacing"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 11: The train is late. I ___ take a taxi. (Instant decision)",
                type: "choice",
                options: ["will", "am going to", "am taking"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 12: They already decided. They ___ expand the program next year.",
                type: "choice",
                options: ["will", "are going to", "are expanding"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 13: According to the timetable, the lecture ___ start at 9 a.m. (Lịch trình tàu xe/trường học thường dùng Present Simple)",
                type: "choice",
                options: ["will", "is going to", "starts"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 14: Don’t worry. I ___ handle this issue. (Promise)",
                type: "choice",
                options: ["will", "am going to", "am handling"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI SAI KIỂU IELTS ---
            {
                question: "Bài 2 - Câu 1: 'I will attend the IELTS test next Saturday.' (Đã đăng ký thi) -> Viết lại câu đúng:",
                type: "text",
                answer: "I am taking the IELTS test next Saturday"
            },
            {
                question: "Bài 2 - Câu 2: 'I am going to think technology will affect education.' (Quan điểm) -> Viết lại câu đúng:",
                type: "text",
                answer: "I think technology will affect education"
            },
            {
                question: "Bài 2 - Câu 3: 'Look at the evidence. It will lead to serious problems.' (Có bằng chứng) -> Viết lại câu đúng:",
                type: "text",
                answer: "It is going to lead to serious problems"
            },
            {
                question: "Bài 2 - Câu 4: 'We are going to submit the report yesterday.' (Quá khứ) -> Viết lại câu đúng:",
                type: "text",
                answer: "We submitted the report yesterday"
            },
            {
                question: "Bài 2 - Câu 5: 'I am meeting my homework tonight.' (Làm bài tập là hành động cá nhân, không phải gặp gỡ) -> Viết lại câu đúng:",
                type: "text",
                answer: "I am doing my homework tonight"
            },
            {
                question: "Bài 2 - Câu 6: 'The government will planning to reduce costs.' (Sai cấu trúc) -> Viết lại câu đúng:",
                type: "text",
                answer: "The government is planning to reduce costs"
            },
            {
                question: "Bài 2 - Câu 7: 'I am going to improve my English right now.' (Ngay lập tức) -> Viết lại câu đúng:",
                type: "text",
                answer: "I will improve my English right now"
            },
            {
                question: "Bài 2 - Câu 8: 'The conference will be holding next month.' (Bị động) -> Viết lại câu đúng:",
                type: "text",
                answer: "The conference is being held next month"
            },

            // --- BÀI 3: VIẾT LẠI CÂU BAND 7 ---
            {
                question: "Bài 3 - Câu 1: 'I plan to study abroad.' (Dùng be going to)",
                type: "text",
                answer: "I am going to study abroad"
            },
            {
                question: "Bài 3 - Câu 2: 'The decision is made now. I help you.' (Dùng will)",
                type: "text",
                answer: "I will help you"
            },
            {
                question: "Bài 3 - Câu 3: 'The meeting is fixed for Monday.' (Dùng present continuous)",
                type: "text",
                answer: "We are meeting on Monday"
            },
            {
                question: "Bài 3 - Câu 4: 'Experts predict a rise in demand.' (Dùng cấu trúc: Experts project that...)",
                type: "text",
                answer: "Experts project that demand will rise"
            },
            {
                question: "Bài 3 - Câu 5: 'There is clear evidence of change.' (Viết lại: ...change is going to occur)",
                type: "text",
                answer: "There is clear evidence that change is going to occur"
            },
            {
                question: "Bài 3 - Câu 6: 'I promise I finish the task on time.' (Dùng will)",
                type: "text",
                answer: "I will finish the task on time"
            },

            // --- BÀI 4: BÀI TẬP TỪ VỰNG (ĐIỀN TỪ) ---
            {
                question: "Bài 4 - Câu 1: The government plans to ___ new regulations. (implement / predict)",
                type: "choice",
                options: ["implement", "predict"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 2: Funding should be ___ more effectively. (allocated / forecasted)",
                type: "choice",
                options: ["allocated", "forecasted"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 3: This ___ requires long-term commitment. (initiative / projection)",
                type: "choice",
                options: ["initiative", "projection"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 4: Experts ___ that costs will rise. (forecast / initiate)",
                type: "choice",
                options: ["forecast", "initiate"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 5: Education reform is ___ in modern societies. (inevitable / feasible)",
                type: "choice",
                options: ["inevitable", "feasible"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 6: The proposal is not ___ at the moment. (feasible / gradual)",
                type: "choice",
                options: ["feasible", "gradual"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 7: We must ___ key issues carefully. (address / commit)",
                type: "choice",
                options: ["address", "commit"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 8: This strategy aims to improve ___ and productivity. (efficiency / constraint)",
                type: "choice",
                options: ["efficiency", "constraint"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 9: Resources are limited due to financial ___. (constraints / capacity)",
                type: "choice",
                options: ["constraints", "capacity"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 10: ___, technology will transform education. (Ultimately / Strategic)",
                type: "choice",
                options: ["Ultimately", "Strategic"],
                answer: 0
            }
        ]
    },
    {
        id: 16,
        title: "Ngày 16: Conditionals (0-1-2) - IELTS Core",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) ---
            { word: "consume", type: "v", ipa: "/kənˈsuːm/", meaning: "tiêu thụ", context: "Tài nguyên, thực phẩm", example: "People consume too much sugar." },
            { word: "invest", type: "v", ipa: "/ɪnˈvest/", meaning: "đầu tư", context: "Kinh tế, giáo dục", example: "Governments invest in education." },
            { word: "regulate", type: "v", ipa: "/ˈreɡjuleɪt/", meaning: "kiểm soát, quản lý", context: "Luật pháp", example: "If the government regulated prices, inflation would slow." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm nhẹ (rủi ro)", context: "Thiên tai, rủi ro", example: "Policies can mitigate climate risks." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", context: "Chính sách", example: "If schools prioritized quality, outcomes would improve." },
            { word: "implement", type: "v", ipa: "/ˈɪmplɪment/", meaning: "triển khai", context: "Kế hoạch", example: "New rules are implemented nationwide." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết (vấn đề)", context: "Vấn đề xã hội", example: "If authorities addressed the issue, tensions would ease." },
            { word: "allocate", type: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", context: "Ngân sách", example: "Funds are allocated to public services." },
            { word: "enhance", type: "v", ipa: "/ɪnˈhæns/", meaning: "nâng cao", context: "Chất lượng, kỹ năng", example: "Practice enhances fluency." },
            { word: "neglect", type: "v", ipa: "/nɪˈɡlekt/", meaning: "bỏ bê", context: "Sức khỏe, trách nhiệm", example: "If people neglect health, problems arise." },
            { word: "compensate", type: "v", ipa: "/ˈkɑːmpenseɪt/", meaning: "bù đắp", context: "Tài chính, thiệt hại", example: "Higher wages could compensate for inflation." },
            { word: "stimulate", type: "v", ipa: "/ˈstɪmjuleɪt/", meaning: "thúc đẩy", context: "Kinh tế", example: "Investment stimulates economic growth." },
            { word: "discourage", type: "v", ipa: "/dɪˈskɜːrɪdʒ/", meaning: "làm nản lòng, ngăn cản", context: "Hành vi", example: "Strict rules discourage cheating." },
            { word: "facilitate", type: "v", ipa: "/fəˈsɪlɪteɪt/", meaning: "tạo điều kiện", context: "Quá trình", example: "Technology facilitates learning." },
            { word: "restrict", type: "v", ipa: "/rɪˈstrɪkt/", meaning: "hạn chế", context: "Quyền truy cập", example: "If access were restricted, inequality would increase." },

            // --- B. DANH TỪ (NOUNS) ---
            { word: "inequality", type: "n", ipa: "/ˌɪnɪˈkwɑːləti/", meaning: "sự bất bình đẳng", context: "Xã hội", example: "Education reduces inequality." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "khả năng tiếp cận", context: "Giáo dục, y tế", example: "Access to education is essential." },
            { word: "incentive", type: "n", ipa: "/ɪnˈsentɪv/", meaning: "động lực", context: "Tài chính, tinh thần", example: "Financial incentives motivate students." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả", context: "Dự án, công việc", example: "Positive outcomes depend on effort." },
            { word: "regulation", type: "n", ipa: "/ˌreɡjuˈleɪʃn/", meaning: "quy định", context: "Luật pháp", example: "Environmental regulations protect nature." },
            { word: "investment", type: "n", ipa: "/ɪnˈvestmənt/", meaning: "sự đầu tư", context: "Tài chính", example: "Investment in infrastructure is needed." },
            { word: "consequence", type: "n", ipa: "/ˈkɑːnsɪkwens/", meaning: "hậu quả", context: "Tiêu cực", example: "Poor planning leads to negative consequences." },
            { word: "efficiency", type: "n", ipa: "/ɪˈfɪʃnsi/", meaning: "hiệu quả (năng suất)", context: "Công việc", example: "Technology improves efficiency." },
            { word: "productivity", type: "n", ipa: "/ˌproʊdʌkˈtɪvəti/", meaning: "năng suất", context: "Làm việc", example: "High productivity creates more value." },
            { word: "sustainability", type: "n", ipa: "/səˌsteɪnəˈbɪləti/", meaning: "tính bền vững", context: "Môi trường", example: "Sustainability is key for future generations." },

            // --- C. TÍNH TỪ / TRẠNG TỪ ---
            { word: "inevitable", type: "adj", ipa: "/ɪnˈevɪtəbl/", meaning: "không thể tránh khỏi", context: "Kết quả", example: "Climate change is inevitable without action." },
            { word: "feasible", type: "adj", ipa: "/ˈfiːzəbl/", meaning: "khả thi", context: "Kế hoạch", example: "The plan is feasible." },
            { word: "long-term", type: "adj", ipa: "/ˌlɔːŋ ˈtɜːrm/", meaning: "dài hạn", context: "Mục tiêu", example: "Long-term solutions are required." },
            { word: "significantly", type: "adv", ipa: "/sɪɡˈnɪfɪkəntli/", meaning: "đáng kể", context: "Mức độ", example: "Results improve significantly." },
            { word: "hypothetical", type: "adj", ipa: "/ˌhaɪpəˈθetɪkl/", meaning: "giả định", context: "Tình huống", example: "This is a hypothetical situation." }
        ],
        grammar: {
            title: "CONDITIONALS 0 - 1 - 2 (IELTS CORE)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Bài này là trọng tâm band 6-7. Hãy phân biệt rõ "Sự thật", "Tương lai" và "Giả định".</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h3 style="color: #2b70c9; margin: 0;">1. ZERO CONDITIONAL (Sự thật hiển nhiên)</h3>
                        <p><b>Dùng khi:</b> Nói về quy luật, chân lý, thói quen luôn đúng.</p>
                        <p><b>Cấu trúc:</b> <span style="background:#e3f2fd; padding:3px 8px; border-radius:4px;">If + Present Simple, Present Simple</span></p>
                        <p><i>Ví dụ:</i> If people <b>eat</b> too much sugar, they <b>gain</b> weight.</p>
                        <p style="color:#d32f2f; font-weight:bold;">⚠️ Lỗi sai: If people <u>will eat</u>... (Không dùng will).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h3 style="color: #58cc02; margin: 0;">2. FIRST CONDITIONAL (Tương lai có thật)</h3>
                        <p><b>Dùng khi:</b> Dự đoán khả năng cao sẽ xảy ra trong tương lai.</p>
                        <p><b>Cấu trúc:</b> <span style="background:#e8f5e9; padding:3px 8px; border-radius:4px;">If + Present Simple, Will/Can + V</span></p>
                        <p><i>Ví dụ:</i> If governments <b>invest</b> more, outcomes <b>will improve</b>.</p>
                        <p><b>Mẹo:</b> Rất phổ biến trong IELTS Speaking Part 3 (Dự đoán).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h3 style="color: #ff9800; margin: 0;">3. SECOND CONDITIONAL (Giả định / Band 7+)</h3>
                        <p><b>Dùng khi:</b> Nói về điều KHÔNG CÓ THẬT hoặc ít khả năng xảy ra. Dùng để khuyên bảo hoặc giả thuyết.</p>
                        <p><b>Cấu trúc:</b> <span style="background:#fff3e0; padding:3px 8px; border-radius:4px;">If + Past Simple, Would/Could + V</span></p>
                        <p><i>Ví dụ:</i> If I <b>had</b> more time, I <b>would focus</b> on writing.</p>
                        <p style="background:#ffebee; padding:10px; border-radius:5px; color:#c62828;">
                            <b>🚨 LỖI CHẾT NGƯỜI:</b><br>
                            ❌ If I <u>have</u> more time, I <u>would</u> study... (Sai thì)<br>
                            ❌ If governments <u>will reduce</u> fees... (Sai will)<br>
                            ✅ If governments <b>reduced</b> fees, students <b>would benefit</b>.
                        </p>
                    </div>
                </div>
            `
        },
        // PHẦN SPEAKING: Chỉ chứa các câu mẫu để luyện nói với Micro
        speaking: [
            "If I were a teacher, I would teach students how to think critically.",
            "If students had access to better materials, they could improve their self-study skills.",
            "If governments do not act now, environmental problems will become irreversible.",
            "If people were more aware of health risks, they would change their lifestyle."
        ],
        quiz: [
            // --- BÀI 1: CHỌN LOẠI CÂU ---
            {
                question: "Bài 1 - Câu 1: Xác định loại câu: 'If people drive too fast, accidents happen.'",
                type: "choice",
                options: ["Zero Conditional (Sự thật)", "First Conditional (Tương lai)", "Second Conditional (Giả định)"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: Xác định loại câu: 'If the government increases funding, schools will improve.'",
                type: "choice",
                options: ["Zero Conditional", "First Conditional", "Second Conditional"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Xác định loại câu: 'If I were the minister, I would change the policy.'",
                type: "choice",
                options: ["Zero Conditional", "First Conditional", "Second Conditional"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 4: Xác định loại câu: 'If students practice speaking daily, they become more confident.'",
                type: "choice",
                options: ["Zero Conditional", "First Conditional", "Second Conditional"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: Xác định loại câu: 'If I had better resources, I could study more effectively.'",
                type: "choice",
                options: ["Zero Conditional", "First Conditional", "Second Conditional"],
                answer: 2
            },

            // --- BÀI 2: CHIA ĐỘNG TỪ (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: If people ___ (consume) less plastic, pollution ___ (decrease). <br><i>(Nhập: consume, decreases)</i>",
                type: "text",
                answer: "consume, decreases"
            },
            {
                question: "Bài 2 - Câu 2: If I ___ (have) more confidence, I ___ (participate) more actively. (Second Conditional)",
                type: "text",
                answer: "had, would participate"
            },
            {
                question: "Bài 2 - Câu 3: If governments ___ (invest) in education, the workforce ___ (benefit). (First Conditional)",
                type: "text",
                answer: "invest, will benefit"
            },
            {
                question: "Bài 2 - Câu 4: If students ___ (not manage) time well, they ___ (struggle) academically. (First Conditional)",
                type: "text",
                answer: "do not manage, will struggle"
            },

            // --- BÀI 3: SỬA LỖI SAI (VIẾT LẠI CÂU) ---
            {
                question: "Bài 3 - Câu 1: 'If students will study harder, they will get better results.' -> Sửa lỗi:",
                type: "text",
                answer: "If students study harder, they will get better results"
            },
            {
                question: "Bài 3 - Câu 2: 'If I have more time, I would read more academic articles.' -> Sửa lỗi (dùng Type 2):",
                type: "text",
                answer: "If I had more time, I would read more academic articles"
            },
            {
                question: "Bài 3 - Câu 3: 'If people would care more about the environment, pollution decreases.' -> Sửa lỗi (dùng Type 0):",
                type: "text",
                answer: "If people care more about the environment, pollution decreases"
            },
            {
                question: "Bài 3 - Câu 4: 'If governments invest more, citizens would benefit.' -> Sửa lỗi (dùng Type 2):",
                type: "text",
                answer: "If governments invested more, citizens would benefit"
            },
            {
                question: "Bài 3 - Câu 5: 'If I was you, I will focus on writing.' -> Sửa lỗi (Chuẩn IELTS):",
                type: "text",
                answer: "If I were you, I would focus on writing"
            },
            {
                question: "Bài 3 - Câu 6: 'If technology improves, people would rely on it more.' -> Sửa lỗi (dùng Type 2):",
                type: "text",
                answer: "If technology improved, people would rely on it more"
            },

            // --- BÀI 4: BIẾN ĐỔI CÂU (SENTENCE TRANSFORMATION) ---
            {
                question: "Bài 4 - Câu 1: 'I don’t have enough time, so I don’t practice speaking.' <br>-> Viết lại (Second Conditional): If I had...",
                type: "text",
                answer: "If I had enough time, I would practice speaking"
            },
            {
                question: "Bài 4 - Câu 2: 'Students practice regularly. They improve pronunciation.' <br>-> Viết lại (Zero Conditional): If...",
                type: "text",
                answer: "If students practice regularly, they improve pronunciation"
            },
            {
                question: "Bài 4 - Câu 3: 'Governments reduce costs. Education becomes more accessible.' <br>-> Viết lại (First Conditional): If...",
                type: "text",
                answer: "If governments reduce costs, education will become more accessible"
            },
            {
                question: "Bài 4 - Câu 4: 'I am not rich, so I cannot study abroad.' <br>-> Viết lại (Second Conditional): If I...",
                type: "text",
                answer: "If I were rich, I could study abroad"
            },
            {
                question: "Bài 4 - Câu 5: 'People ignore health advice. They face serious problems.' <br>-> Viết lại (Zero Conditional): If...",
                type: "text",
                answer: "If people ignore health advice, they face serious problems"
            },
            {
                question: "Bài 4 - Câu 6: 'Schools receive more funding. They can upgrade facilities.' <br>-> Viết lại (First Conditional): If...",
                type: "text",
                answer: "If schools receive more funding, they can upgrade facilities"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG (TRẮC NGHIỆM ĐỂ NHANH HƠN) ---
            {
                question: "Bài 6 - Câu 1: If governments ___ more in education, inequality would decrease.",
                type: "choice",
                options: ["invest", "consume"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Technology can ___ learning efficiency.",
                type: "choice",
                options: ["enhance", "neglect"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Poor planning leads to negative ___.",
                type: "choice",
                options: ["outcomes", "incentives"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Access to healthcare should not be ___.",
                type: "choice",
                options: ["restricted", "facilitated"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Environmental policies aim to ___ long-term risks.",
                type: "choice",
                options: ["mitigate", "stimulate"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: If people ___ their health, problems arise.",
                type: "choice",
                options: ["neglect", "prioritize"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Education plays a key role in reducing ___.",
                type: "choice",
                options: ["inequality", "productivity"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Strict rules can ___ dishonest behavior.",
                type: "choice",
                options: ["discourage", "enhance"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: Public ___ stimulates economic growth.",
                type: "choice",
                options: ["investment", "consequence"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: This solution is not ___ in the current context.",
                type: "choice",
                options: ["feasible", "hypothetical"],
                answer: 0
            },

            // --- BÀI 7: WRITING (VIẾT CÂU) - ĐƯA VÀO PHẦN QUIZ ---
            {
                question: "Bài 7: Viết 1 câu Second Conditional (If + Past, Would + V) về chủ đề giáo dục.",
                type: "text",
                answer: "If education were free, everyone could access it" // Đáp án mẫu để hệ thống không báo lỗi, bạn có thể tự kiểm tra
            },
            {
                question: "Bài 7: Viết 1 câu dùng từ 'hypothetical' (giả định).",
                type: "text",
                answer: "This is a hypothetical situation"
            },
            {
                question: "Bài 7: Viết 1 câu dùng từ 'feasible' (khả thi).",
                type: "text",
                answer: "The plan is feasible"
            }
        ]
    },
    {
        id: 17,
        title: "Ngày 17: Mixed Conditionals (Nâng cao) - Tư duy Band 8.0",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) ---
            { word: "deteriorate", type: "v", ipa: "/dɪˈtɪriəreɪt/", meaning: "xấu đi, xuống cấp", context: "Tình trạng, chất lượng", example: "Without maintenance, the building will deteriorate rapidly." },
            { word: "exacerbate", type: "v", ipa: "/ɪɡˈzæsərbeɪt/", meaning: "làm trầm trọng hơn", context: "Vấn đề, bệnh tật", example: "Rising unemployment has exacerbated social inequality." },
            { word: "alleviate", type: "v", ipa: "/əˈliːvieɪt/", meaning: "làm giảm nhẹ", context: "Nỗi đau, nghèo đói", example: "Government aid helps alleviate poverty in rural areas." },
            { word: "undermine", type: "v", ipa: "/ˌʌndərˈmaɪn/", meaning: "làm suy yếu", context: "Niềm tin, thẩm quyền", example: "Constant criticism can undermine a student's confidence." },
            { word: "foster", type: "v", ipa: "/ˈfɔːstər/", meaning: "thúc đẩy, nuôi dưỡng", context: "Giá trị tích cực", example: "Teamwork fosters a sense of community." },
            { word: "rectify", type: "v", ipa: "/ˈrektɪfaɪ/", meaning: "sửa chữa, khắc phục", context: "Lỗi lầm nghiêm trọng", example: "It will take years to rectify the mistakes of the past." },
            { word: "hamper", type: "v", ipa: "/ˈhæmpər/", meaning: "cản trở, gây khó khăn", context: "Tiến độ, phát triển", example: "Bad weather hampered the rescue efforts." },
            { word: "intensify", type: "v", ipa: "/ɪnˈtensɪfaɪ/", meaning: "làm gia tăng, tăng cường", context: "Áp lực, cạnh tranh", example: "The conflict intensified after peace talks failed." },
            { word: "safeguard", type: "v", ipa: "/ˈseɪfɡɑːrd/", meaning: "bảo vệ, che chở", context: "Quyền lợi, lợi ích", example: "New laws are needed to safeguard user privacy." },
            { word: "counteract", type: "v", ipa: "/ˌkaʊntərˈækt/", meaning: "chống lại, làm mất tác dụng", context: "Tác động tiêu cực", example: "We need to counteract the effects of global warming." },
            { word: "offset", type: "v", ipa: "/ˈɔːfset/", meaning: "bù đắp", context: "Chi phí, thiệt hại", example: "The gains in efficiency offset the higher costs." },
            { word: "trigger", type: "v", ipa: "/ˈtrɪɡər/", meaning: "kích hoạt, gây ra", context: "Sự thay đổi, sự kiện", example: "Certain foods can trigger an allergic reaction." },
            { word: "constrain", type: "v", ipa: "/kənˈstreɪn/", meaning: "hạn chế, ràng buộc", context: "Tài nguyên, lựa chọn", example: "We are constrained by a tight budget." },
            { word: "reinforce", type: "v", ipa: "/ˌriːɪnˈfɔːrs/", meaning: "củng cố, gia cố", context: "Kỷ luật, niềm tin", example: "The report reinforces the need for immediate action." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm thiểu (rủi ro)", context: "Rủi ro lâu dài", example: "Strategies to mitigate the impact of the recession." },

            // --- B. DANH TỪ (NOUNS) ---
            { word: "intervention", type: "n", ipa: "/ˌɪntərˈvenʃn/", meaning: "sự can thiệp", context: "Chính phủ, y tế", example: "Government intervention helped stabilize prices." },
            { word: "implication", type: "n", ipa: "/ˌɪmplɪˈkeɪʃn/", meaning: "hệ quả, ẩn ý", context: "Hành động, quyết định", example: "The legal implications of this contract are complex." },
            { word: "disparity", type: "n", ipa: "/dɪˈspærəti/", meaning: "sự chênh lệch", context: "Thu nhập, xã hội", example: "There is a growing disparity between the rich and the poor." },
            { word: "resilience", type: "n", ipa: "/rɪˈzɪliəns/", meaning: "khả năng chống chịu", context: "Kinh tế, tinh thần", example: "The city showed remarkable resilience after the earthquake." },
            { word: "accountability", type: "n", ipa: "/əˌkaʊntəˈbɪləti/", meaning: "trách nhiệm giải trình", context: "Công việc, chính trị", example: "There must be greater accountability in public spending." },
            { word: "vulnerability", type: "n", ipa: "/ˌvʌlnərəˈbɪləti/", meaning: "sự dễ bị tổn thương", context: "Hệ thống, con người", example: "The vulnerability of the system to cyber attacks is concerning." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự ràng buộc", context: "Tài chính, thời gian", example: "Time constraints made it impossible to finish the project." },
            { word: "trade-off", type: "n", ipa: "/ˈtreɪd ɔːf/", meaning: "sự đánh đổi", context: "Lựa chọn", example: "There is a trade-off between economic growth and environmental protection." },
            { word: "precedent", type: "n", ipa: "/ˈpresɪdənt/", meaning: "tiền lệ", context: "Pháp luật, lịch sử", example: "This court decision sets a dangerous precedent." },
            { word: "backlash", type: "n", ipa: "/ˈbæklæʃ/", meaning: "phản ứng dữ dội", context: "Dư luận", example: "The company faced a public backlash over its new policy." },

            // --- C. TÍNH TỪ / TRẠNG TỪ ---
            { word: "counterproductive", type: "adj", ipa: "/ˌkaʊntərprəˈdʌktɪv/", meaning: "phản tác dụng", context: "Hành động, biện pháp", example: "Overworking can be counterproductive to your health." },
            { word: "substantial", type: "adj", ipa: "/səbˈstænʃl/", meaning: "đáng kể", context: "Số lượng, mức độ", example: "A substantial number of people voted against the proposal." },
            { word: "inherent", type: "adj", ipa: "/ɪnˈherənt/", meaning: "vốn có, cố hữu", context: "Bản chất", example: "Stress is an inherent part of this job." },
            { word: "arguably", type: "adv", ipa: "/ˈɑːrɡjuəbli/", meaning: "có thể cho rằng", context: "Tranh luận", example: "He is arguably the most talented player in the league." },
            { word: "long-standing", type: "adj", ipa: "/ˌlɔːŋ ˈstændɪŋ/", meaning: "tồn tại lâu dài", context: "Vấn đề, truyền thống", example: "It is a long-standing tradition in our family." }
        ],
        grammar: {
            title: "MIXED CONDITIONALS - TƯ DUY LOGIC BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="color:#555;">Mixed Conditionals thể hiện tư duy logic cao cấp về <b>Nguyên nhân - Hệ quả</b> xuyên thời gian.</p>

                    <div style="margin-top:20px; border-left: 5px solid #d32f2f; padding-left: 15px;">
                        <h4 style="color: #d32f2f; margin: 0;">1. MIXED TYPE A (Quá khứ → Hiện tại)</h4>
                        <p><b>Logic:</b> Nguyên nhân trong Quá khứ gây ra Kết quả ở Hiện tại.</p>
                        <p><b>Cấu trúc:</b> <span style="background:#ffebee; padding:3px 8px; border-radius:4px;">If + Past Perfect, Would + V</span></p>
                        <p><i>Ví dụ:</i> If I <b>had studied</b> harder (past), I <b>would have</b> a better job now (present).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #1976d2; padding-left: 15px;">
                        <h4 style="color: #1976d2; margin: 0;">2. MIXED TYPE B (Hiện tại → Quá khứ)</h4>
                        <p><b>Logic:</b> Bản chất ở Hiện tại quyết định hành động trong Quá khứ.</p>
                        <p><b>Cấu trúc:</b> <span style="background:#e3f2fd; padding:3px 8px; border-radius:4px;">If + Past Simple, Would + Have + V3</span></p>
                        <p><i>Ví dụ:</i> If I <b>were</b> more confident (nature), I <b>would have spoken</b> up yesterday (past action).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #388e3c; padding-left: 15px;">
                        <h4 style="color: #388e3c; margin: 0;">3. ĐẢO NGỮ (INVERSION) - BAND 8.0</h4>
                        <p><b>Cấu trúc:</b> Had + S + V3, ...</p>
                        <p><i>Ví dụ:</i> <b>Had</b> governments <b>acted</b> earlier, the crisis would be less severe.</p>
                        <p><b>Cấu trúc:</b> Without / But for + Noun</p>
                        <p><i>Ví dụ:</i> <b>Without</b> technology, remote learning would not exist.</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "If governments had prioritized education earlier, inequality would be lower today.",
            "If people were more environmentally responsible, we would have avoided this crisis.",
            "Without technological innovation, remote learning would not exist.",
            "Had society invested in prevention, the outcome would be different."
        ],
        quiz: [
            // --- BÀI 1: XÁC ĐỊNH LOẠI CÂU ---
            {
                question: "Bài 1 - Câu 1: 'If I had managed my time better, I would be less stressed now.'",
                type: "choice",
                options: ["Mixed: Past -> Present", "Mixed: Present -> Past", "Type 3: Past -> Past"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: 'If people were more disciplined, they would have avoided many problems.'",
                type: "choice",
                options: ["Mixed: Past -> Present", "Mixed: Present -> Past", "Type 2: Present -> Present"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: 'Had the policy been implemented earlier, outcomes would be different today.'",
                type: "choice",
                options: ["Inversion (Mixed: Past -> Present)", "Inversion (Type 3)", "Type 2"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: 'But for public funding, access to education would be limited.'",
                type: "choice",
                options: ["Mixed (dạng rút gọn)", "Zero Conditional", "First Conditional"],
                answer: 0
            },

            // --- BÀI 2: CHIA ĐỘNG TỪ ---
            {
                question: "Bài 2 - Câu 1: If governments ___ (invest) earlier, productivity ___ (be) higher today. <br><i>(Nhập: had invested, would be)</i>",
                type: "text",
                answer: "had invested, would be"
            },
            {
                question: "Bài 2 - Câu 2: If I ___ (be) more organized, I ___ (finish) the task yesterday. <br><i>(Nhập: were, would have finished)</i>",
                type: "text",
                answer: "were, would have finished"
            },
            {
                question: "Bài 2 - Câu 3: Without effective leadership, the situation ___ (deteriorate) further right now. <br><i>(Nhập: would deteriorate)</i>",
                type: "text",
                answer: "would deteriorate"
            },
            {
                question: "Bài 2 - Câu 4: If people ___ (understand) the risks, they ___ (make) better decisions now. <br><i>(Nhập: had understood, would make)</i>",
                type: "text",
                answer: "had understood, would make"
            },

            // --- BÀI 3: SỬA LỖI ---
            {
                question: "Bài 3 - Câu 1: 'If I studied harder in the past, I would have a better career now.' -> Sửa lỗi:",
                type: "text",
                answer: "If I had studied harder in the past, I would have a better career now"
            },
            {
                question: "Bài 3 - Câu 2: 'If governments invested earlier, inequality would have been lower today.' -> Sửa lỗi:",
                type: "text",
                answer: "If governments had invested earlier, inequality would be lower today"
            },
            {
                question: "Bài 3 - Câu 3: 'Without technology, education would not improved so rapidly.' -> Sửa lỗi:",
                type: "text",
                answer: "Without technology, education would not have improved so rapidly"
            },
            {
                question: "Bài 3 - Câu 4: 'Had policies been stricter, people are safer today.' -> Sửa lỗi:",
                type: "text",
                answer: "Had policies been stricter, people would be safer today"
            },

            // --- BÀI 4: BIẾN ĐỔI CÂU ---
            {
                question: "Bài 4 - Câu 1: 'I didn’t plan well, so I am under pressure now.' <br>-> Viết lại (Mixed): If I...",
                type: "text",
                answer: "If I had planned well, I would not be under pressure now"
            },
            {
                question: "Bài 4 - Câu 2: 'People are careless, so they caused many problems in the past.' <br>-> Viết lại (Mixed): If people...",
                type: "text",
                answer: "If people were not careless, they would not have caused many problems"
            },
            {
                question: "Bài 4 - Câu 3: 'The government failed to act early. The situation is serious now.' <br>-> Viết lại (Đảo ngữ - Had):",
                type: "text",
                answer: "Had the government acted early, the situation would not be serious now"
            },
            {
                question: "Bài 4 - Câu 4: 'Technology plays a major role. Otherwise, progress would be slower.' <br>-> Viết lại (But for):",
                type: "text",
                answer: "But for technology, progress would be slower"
            },

            // --- BÀI 5: HOÀN THÀNH TÌNH HUỐNG (CÂU HỎI MỞ - NEW) ---
            {
                question: "Bài 5 - Câu 1: If governments had prioritized education earlier, today... (Viết tiếp ý của bạn)",
                type: "open",
                answer: "today inequality would be much lower and the workforce would be more skilled."
            },
            {
                question: "Bài 5 - Câu 2: If people were more environmentally responsible, ... (Viết tiếp ý của bạn)",
                type: "open",
                answer: "we would have avoided the current climate crisis."
            },
            {
                question: "Bài 5 - Câu 3: Without technological innovation, ... (Viết tiếp ý của bạn)",
                type: "open",
                answer: "our lives would be completely different and remote work would be impossible."
            },
            {
                question: "Bài 5 - Câu 4: Had society invested in prevention, ... (Viết tiếp ý của bạn)",
                type: "open",
                answer: "the outcome of the pandemic would have been much better."
            },

            // --- BÀI 6: TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Poor decisions can ___ social inequality.",
                type: "choice",
                options: ["exacerbate", "alleviate"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Early ___ could have prevented the crisis.",
                type: "choice",
                options: ["intervention", "implication"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Education builds ___ in young people.",
                type: "choice",
                options: ["resilience", "backlash"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Corruption severely ___ public trust.",
                type: "choice",
                options: ["undermines", "fosters"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Financial ___ limit policy options.",
                type: "choice",
                options: ["constraints", "precedents"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: These measures aim to ___ long-term damage.",
                type: "choice",
                options: ["mitigate", "trigger"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Strict rules are sometimes ___.",
                type: "choice",
                options: ["counterproductive", "substantial"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: This issue has ___ roots in society.",
                type: "choice",
                options: ["long-standing", "arguably"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ - NEW) ---
            {
                question: "Bài 7: Viết 1 câu Mixed Conditional (Quá khứ -> Hiện tại) về chủ đề công việc.",
                type: "open",
                answer: "If I had accepted that job offer, I would be living in New York now."
            },
            {
                question: "Bài 7: Viết 1 câu dùng cấu trúc 'Inversion' (Đảo ngữ với Had).",
                type: "open",
                answer: "Had I known about the risks, I would never have invested in that company."
            }
        ]
    },
    {
        id: 18,
        title: "Ngày 18: Conditionals Nâng cao (Wish / If Only / Should / Were To)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 6.0 ---
            { word: "improve", type: "v", ipa: "/ɪmˈpruːv/", meaning: "cải thiện", context: "Kỹ năng, tình trạng", example: "I want to improve my speaking skills." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm", context: "Căng thẳng, chi phí", example: "Yoga helps reduce stress levels." },
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng", context: "Chi phí, số lượng", example: "Costs may increase significantly." },
            { word: "affect", type: "v", ipa: "/əˈfekt/", meaning: "ảnh hưởng", context: "Quyết định, kết quả", example: "This decision affects all students." },
            { word: "cause", type: "v", ipa: "/kɔːz/", meaning: "gây ra", context: "Vấn đề, hậu quả", example: "Carelessness causes many problems." },
            { word: "solve", type: "v", ipa: "/sɒlv/", meaning: "giải quyết", context: "Vấn đề, bài toán", example: "We need to solve this issue immediately." },
            { word: "support", type: "v", ipa: "/səˈpɔːrt/", meaning: "hỗ trợ", context: "Giáo dục, chính sách", example: "The government should support public education." },
            { word: "control", type: "v", ipa: "/kənˈtrəʊl/", meaning: "kiểm soát", context: "Chi tiêu, cảm xúc", example: "It is important to control spending." },
            { word: "protect", type: "v", ipa: "/prəˈtekt/", meaning: "bảo vệ", context: "Môi trường, sức khỏe", example: "We must protect the environment." },
            { word: "waste", type: "v", ipa: "/weɪst/", meaning: "lãng phí", context: "Thời gian, tài nguyên", example: "Don't waste time on trivial things." },
            { word: "avoid", type: "v", ipa: "/əˈvɔɪd/", meaning: "tránh", context: "Lỗi lầm, rủi ro", example: "Try to avoid making mistakes." },
            { word: "manage", type: "v", ipa: "/ˈmænɪdʒ/", meaning: "quản lý", context: "Thời gian, dự án", example: "She knows how to manage time well." },
            { word: "depend", type: "v", ipa: "/dɪˈpend/", meaning: "phụ thuộc", context: "Kết quả, nỗ lực", example: "Success depends on your effort." },
            { word: "follow", type: "v", ipa: "/ˈfɒləʊ/", meaning: "tuân theo", context: "Quy định, hướng dẫn", example: "Please follow the rules strictly." },
            { word: "provide", type: "v", ipa: "/prəˈvaɪd/", meaning: "cung cấp", context: "Cơ hội, thông tin", example: "This course provides excellent opportunities." },

            // --- B. DANH TỪ (NOUNS) - BAND 6.0 ---
            { word: "problem", type: "n", ipa: "/ˈprɒbləm/", meaning: "vấn đề", context: "Xã hội, cá nhân", example: "We need to identify the core problem." },
            { word: "solution", type: "n", ipa: "/səˈluːʃn/", meaning: "giải pháp", context: "Vấn đề", example: "Finding a practical solution is urgent." },
            { word: "decision", type: "n", ipa: "/dɪˈsɪʒn/", meaning: "quyết định", context: "Quan trọng", example: "This is a difficult decision to make." },
            { word: "result", type: "n", ipa: "/rɪˈzʌlt/", meaning: "kết quả", context: "Học tập, công việc", example: "The results were better than expected." },
            { word: "policy", type: "n", ipa: "/ˈpɒləsi/", meaning: "chính sách", context: "Chính phủ, công ty", example: "The new policy affects everyone." },
            { word: "rule", type: "n", ipa: "/ruːl/", meaning: "quy định", context: "Trường học, xã hội", example: "Breaking the rule has consequences." },
            { word: "experience", type: "n", ipa: "/ɪkˈspɪəriəns/", meaning: "kinh nghiệm", context: "Làm việc, sống", example: "Experience is often the best teacher." },
            { word: "opportunity", type: "n", ipa: "/ˌɒpəˈtjuːnəti/", meaning: "cơ hội", context: "Phát triển, học tập", example: "Seize the opportunity when it comes." },
            { word: "pressure", type: "n", ipa: "/ˈpreʃər/", meaning: "áp lực", context: "Công việc, thi cử", example: "Students face a lot of pressure." },
            { word: "responsibility", type: "n", ipa: "/rɪˌspɒnsəˈbɪləti/", meaning: "trách nhiệm", context: "Cá nhân, xã hội", example: "It is your responsibility to finish the task." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 6.0 ---
            { word: "important", type: "adj", ipa: "/ɪmˈpɔːrtnt/", meaning: "quan trọng", context: "Vấn đề, sự kiện", example: "Education is extremely important." },
            { word: "necessary", type: "adj", ipa: "/ˈnesəsəri/", meaning: "cần thiết", context: "Hành động", example: "It is necessary to take action now." },
            { word: "possible", type: "adj", ipa: "/ˈpɒsəbl/", meaning: "có thể", context: "Khả năng", example: "It is possible to achieve your goals." },
            { word: "unlikely", type: "adj", ipa: "/ʌnˈlaɪkli/", meaning: "không có khả năng cao", context: "Dự đoán", example: "It is unlikely to rain today." },
            { word: "seriously", type: "adv", ipa: "/ˈsɪəriəsli/", meaning: "một cách nghiêm túc", context: "Thái độ", example: "Please take this issue seriously." }
        ],
        grammar: {
            title: "CONDITIONALS NÂNG CAO (WISH / IF ONLY / SHOULD / WERE TO)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Nhóm cấu trúc này giúp bạn ghi điểm Band 7+ nhờ khả năng diễn đạt sắc thái cảm xúc (tiếc nuối, phàn nàn) và mức độ giả định tinh tế.</p>

                    <div style="margin-top:20px; border-left: 5px solid #e91e63; padding-left: 15px;">
                        <h4 style="color: #e91e63; margin: 0;">1. WISH / IF ONLY (Mong muốn & Tiếc nuối)</h4>
                        <p><b>a) Trái với hiện tại:</b> <span style="background:#fce4ec; padding:2px 5px;">Wish + S + V2/ed (Past Simple)</span><br>
                        <i>Ex: I wish I <b>had</b> more free time. (Hiện tại tôi rất bận)</i></p>
                        
                        <p><b>b) Tiếc nuối quá khứ:</b> <span style="background:#fce4ec; padding:2px 5px;">Wish + S + Had + V3 (Past Perfect)</span><br>
                        <i>Ex: If only I <b>had studied</b> harder at school. (Tôi đã lười biếng)</i></p>
                        
                        <p><b>c) Phàn nàn (người khác):</b> <span style="background:#fce4ec; padding:2px 5px;">Wish + S + Would + V</span><br>
                        <i>Ex: I wish people <b>would stop</b> wasting food. (Thói quen khó chịu)</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #2196f3; padding-left: 15px;">
                        <h4 style="color: #2196f3; margin: 0;">2. SHOULD (Khả năng thấp)</h4>
                        <p><b>Cấu trúc:</b> If + S + Should + V, S + Will/Would + V</p>
                        <p><b>Dùng khi:</b> Sự việc ít khả năng xảy ra nhưng vẫn có thể. Thường dùng trong văn phong trang trọng, thông báo.</p>
                        <i>Ex: If you <b>should need</b> help, please contact us.</i>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #9c27b0; padding-left: 15px;">
                        <h4 style="color: #9c27b0; margin: 0;">3. WERE TO (Giả định rất xa)</h4>
                        <p><b>Cấu trúc:</b> If + S + Were to + V, S + Would + V</p>
                        <p><b>Dùng khi:</b> Giả định rất khó xảy ra hoặc hoàn toàn là giả thuyết. Dùng trong chính sách, học thuật.</p>
                        <i>Ex: If the government <b>were to ban</b> cars, pollution would drop.</i>
                    </div>

                    <div style="margin-top:15px; background:#f5f5f5; padding:10px; border-radius:5px;">
                        <b>📊 So sánh mức độ khả thi:</b><br>
                        Type 1 (Cao) > Type 2 (Thấp) > If + Should (Rất thấp) > If + Were to (Giả thuyết)
                    </div>
                </div>
            `
        },
        speaking: [
            "I wish governments would invest more in public transport.",
            "If only students had taken the exam more seriously.",
            "If problems should arise, immediate action would be taken.",
            "If the education system were to change completely, many families would be affected."
        ],
        quiz: [
            // --- BÀI 1: CHỌN CẤU TRÚC ĐÚNG ---
            {
                question: "Bài 1 - Câu 1: I ___ I had more time to relax. (Mong muốn hiện tại)",
                type: "choice",
                options: ["wish", "if only", "should"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: If the policy ___ fail, serious consequences would follow. (Khả năng thấp)",
                type: "choice",
                options: ["should", "were to", "had"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: ___ people were more patient, conflicts would decrease.",
                type: "choice",
                options: ["If only", "Wish", "Should"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: If you ___ have any questions, please ask. (Trang trọng)",
                type: "choice",
                options: ["should", "were to", "had"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: I ___ I had not wasted so much time. (Tiếc nuối)",
                type: "choice",
                options: ["wish", "hope", "should"],
                answer: 0
            },

            // --- BÀI 2: CHIA ĐỘNG TỪ ---
            {
                question: "Bài 2 - Câu 1: I wish I ___ (know) the answer right now.",
                type: "text",
                answer: "knew"
            },
            {
                question: "Bài 2 - Câu 2: If only governments ___ (invest) more in healthcare (in the past).",
                type: "text",
                answer: "had invested"
            },
            {
                question: "Bài 2 - Câu 3: I wish people ___ (stop) using plastic bags. (Phàn nàn)",
                type: "text",
                answer: "would stop"
            },
            {
                question: "Bài 2 - Câu 4: If problems ___ (arise), the team will respond quickly. (Should)",
                type: "text",
                answer: "should arise"
            },
            {
                question: "Bài 2 - Câu 5: If the company ___ (decide) to expand, costs would rise. (Were to)",
                type: "text",
                answer: "were to decide"
            },
            {
                question: "Bài 2 - Câu 6: I wish I ___ (prepare) better for the exam yesterday.",
                type: "text",
                answer: "had prepared"
            },

            // --- BÀI 3: SỬA LỖI SAI ---
            {
                question: "Bài 3 - Câu 1: 'I wish I have more confidence.' -> Sửa lỗi:",
                type: "text",
                answer: "I wish I had more confidence"
            },
            {
                question: "Bài 3 - Câu 2: 'If only the government would invest more.' (Mong muốn hiện tại - dùng Past Simple) -> Sửa lỗi:",
                type: "text",
                answer: "If only the government invested more"
            },
            {
                question: "Bài 3 - Câu 3: 'I wish I would be more organized.' (Không dùng would cho bản thân) -> Sửa lỗi:",
                type: "text",
                answer: "I wish I were more organized"
            },
            {
                question: "Bài 3 - Câu 4: 'If the plan should fails, we will revise it.' -> Sửa lỗi:",
                type: "text",
                answer: "If the plan should fail, we will revise it"
            },
            {
                question: "Bài 3 - Câu 5: 'If the school were banning phones, students would react strongly.' -> Sửa lỗi (Were to):",
                type: "text",
                answer: "If the school were to ban phones, students would react strongly"
            },
            {
                question: "Bài 3 - Câu 6: 'I wish I didn’t miss the deadline yesterday.' -> Sửa lỗi (Tiếc nuối quá khứ):",
                type: "text",
                answer: "I wish I hadn't missed the deadline yesterday"
            },

            // --- BÀI 4: BIẾN ĐỔI CÂU ---
            {
                question: "Bài 4 - Câu 1: 'I don’t have enough time, so I feel stressed.' <br>-> Viết lại (I wish...):",
                type: "text",
                answer: "I wish I had enough time"
            },
            {
                question: "Bài 4 - Câu 2: 'The authorities did not act early. Now the problem is serious.' <br>-> Viết lại (If only...):",
                type: "text",
                answer: "If only the authorities had acted early"
            },
            {
                question: "Bài 4 - Câu 3: 'There is a small chance of technical issues. We are prepared.' <br>-> Viết lại (If... should...):",
                type: "text",
                answer: "If technical issues should arise, we are prepared"
            },
            {
                question: "Bài 4 - Câu 4: 'The government may introduce strict rules. This could affect students.' <br>-> Viết lại (If... were to...):",
                type: "text",
                answer: "If the government were to introduce strict rules, this could affect students"
            },
            {
                question: "Bài 4 - Câu 5: 'People waste food regularly. This is annoying.' <br>-> Viết lại (I wish... would...):",
                type: "text",
                answer: "I wish people would stop wasting food"
            },

            // --- BÀI 5: HOÀN THÀNH TÌNH HUỐNG (CÂU HỎI MỞ) ---
            {
                question: "Bài 5 - Câu 1: I wish governments would... (Viết tiếp ý kiến của bạn)",
                type: "open",
                answer: "invest more in renewable energy sources."
            },
            {
                question: "Bài 5 - Câu 2: If only students had... (Viết tiếp về quá khứ)",
                type: "open",
                answer: "paid more attention during the lecture."
            },
            {
                question: "Bài 5 - Câu 3: If problems should..., immediate action would be taken. (Viết tiếp)",
                type: "open",
                answer: "occur during the process"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Good planning can ___ stress. (reduce / cause)",
                type: "choice",
                options: ["reduce", "cause"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: This policy may ___ young people. (affect / waste)",
                type: "choice",
                options: ["affect", "waste"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Education provides many ___. (opportunities / pressures)",
                type: "choice",
                options: ["opportunities", "pressures"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: We need a practical ___ to this problem. (solution / rule)",
                type: "choice",
                options: ["solution", "rule"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Time management is an important ___. (skill / pressure)",
                type: "choice",
                options: ["skill", "pressure"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Success often ___ on effort. (depends / avoids)",
                type: "choice",
                options: ["depends", "avoids"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Governments must ___ clear rules. (follow / provide)",
                type: "choice",
                options: ["follow", "provide"],
                answer: 1
            },
            {
                question: "Bài 6 - Câu 8: People should take this issue ___. (seriously / unlikely)",
                type: "choice",
                options: ["seriously", "unlikely"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'If... should...' (Khả năng thấp).",
                type: "open",
                answer: "If you should need any assistance, feel free to call me."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'If... were to...' (Giả định xa).",
                type: "open",
                answer: "If I were to win the lottery, I would travel the world."
            }
        ]
    },
    {
        id: 19,
        title: "Ngày 19: Reported Speech (Câu Tường Thuật) - Cơ bản & Nâng cao",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) ---
            { word: "say", type: "v", ipa: "/seɪ/", meaning: "nói (tường thuật)", context: "Không có tân ngữ chỉ người ngay sau", example: "He said that he was tired." },
            { word: "tell", type: "v", ipa: "/tel/", meaning: "kể, bảo", context: "Bắt buộc có tân ngữ (tell + O)", example: "She told me the truth." },
            { word: "ask", type: "v", ipa: "/æsk/", meaning: "hỏi, yêu cầu", context: "Câu hỏi hoặc mệnh lệnh", example: "He asked if I needed help." },
            { word: "answer", type: "v", ipa: "/ˈænsər/", meaning: "trả lời", context: "Phản hồi câu hỏi", example: "She answered the question immediately." },
            { word: "explain", type: "v", ipa: "/ɪkˈspleɪn/", meaning: "giải thích", context: "Làm rõ vấn đề", example: "The teacher explained the rule carefully." },
            { word: "suggest", type: "v", ipa: "/səˈdʒest/", meaning: "gợi ý", context: "Đề xuất (+ V-ing)", example: "He suggested taking a break." },
            { word: "advise", type: "v", ipa: "/ədˈvaɪz/", meaning: "khuyên", context: "Lời khuyên (+ O + to V)", example: "She advised me to rest." },
            { word: "request", type: "v", ipa: "/rɪˈkwest/", meaning: "yêu cầu (lịch sự)", context: "Trang trọng hơn ask", example: "He requested me to wait outside." },
            { word: "agree", type: "v", ipa: "/əˈɡriː/", meaning: "đồng ý", context: "Chấp nhận ý kiến", example: "They agreed with the idea." },
            { word: "refuse", type: "v", ipa: "/rɪˈfjuːz/", meaning: "từ chối", context: "Không chấp nhận", example: "He refused to answer the question." },
            { word: "promise", type: "v", ipa: "/ˈprɒmɪs/", meaning: "hứa", context: "Cam kết", example: "She promised to help me." },
            { word: "warn", type: "v", ipa: "/wɔːrn/", meaning: "cảnh báo", context: "Nguy hiểm, rủi ro", example: "The sign warns people to be careful." },
            { word: "admit", type: "v", ipa: "/ədˈmɪt/", meaning: "thừa nhận", context: "Lỗi lầm, sự thật", example: "He admitted his mistake." },
            { word: "deny", type: "v", ipa: "/dɪˈnaɪ/", meaning: "phủ nhận", context: "Cáo buộc", example: "She denied the accusation." },
            { word: "mention", type: "v", ipa: "/ˈmenʃn/", meaning: "đề cập", context: "Nhắc đến", example: "He mentioned the problem briefly." },

            // --- B. DANH TỪ (NOUNS) ---
            { word: "statement", type: "n", ipa: "/ˈsteɪtmənt/", meaning: "lời phát biểu, câu trần thuật", context: "Văn bản, lời nói", example: "His statement was very clear." },
            { word: "question", type: "n", ipa: "/ˈkwestʃən/", meaning: "câu hỏi", context: "Giao tiếp", example: "Can I ask a quick question?" },
            { word: "advice", type: "n", ipa: "/ədˈvaɪs/", meaning: "lời khuyên", context: "Không đếm được", example: "She gave me some useful advice." },
            { word: "suggestion", type: "n", ipa: "/səˈdʒestʃən/", meaning: "lời gợi ý", context: "Ý tưởng", example: "I am open to any suggestions." },
            { word: "information", type: "n", ipa: "/ˌɪnfəˈmeɪʃn/", meaning: "thông tin", context: "Dữ liệu", example: "Please provide more information." },
            { word: "opinion", type: "n", ipa: "/əˈpɪnjən/", meaning: "ý kiến", context: "Quan điểm cá nhân", example: "What is your opinion on this?" },
            { word: "response", type: "n", ipa: "/rɪˈspɒns/", meaning: "câu trả lời, phản hồi", context: "Giao tiếp", example: "I am waiting for his response." },
            { word: "request", type: "n", ipa: "/rɪˈkwest/", meaning: "lời yêu cầu", context: "Hành động", example: "Her request was approved." },
            { word: "discussion", type: "n", ipa: "/dɪˈskʌʃn/", meaning: "cuộc thảo luận", context: "Cuộc họp", example: "We had a long discussion about the plan." },
            { word: "explanation", type: "n", ipa: "/ˌekspləˈneɪʃn/", meaning: "lời giải thích", context: "Làm rõ", example: "His explanation was confusing." },

            // --- C. TÍNH TỪ / TRẠNG TỪ ---
            { word: "clear", type: "adj", ipa: "/klɪər/", meaning: "rõ ràng", context: "Thông tin, lời nói", example: "The instructions were very clear." },
            { word: "polite", type: "adj", ipa: "/pəˈlaɪt/", meaning: "lịch sự", context: "Thái độ", example: "It is important to be polite." },
            { word: "direct", type: "adj", ipa: "/dəˈrekt/", meaning: "trực tiếp", context: "Lời nói thẳng", example: "He gave a direct answer." },
            { word: "indirect", type: "adj", ipa: "/ˌɪndəˈrekt/", meaning: "gián tiếp", context: "Cách nói vòng vo", example: "Reported speech is also called indirect speech." },
            { word: "carefully", type: "adv", ipa: "/ˈkeəfəli/", meaning: "một cách cẩn thận", context: "Hành động", example: "Listen carefully to the instructions." }
        ],
        grammar: {
            title: "REPORTED SPEECH (CẤU TRÚC CỐT LÕI)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="color:#666;">Reported Speech (Câu tường thuật) là kỹ năng quan trọng trong IELTS Writing & Speaking Part 3 để thuật lại ý kiến người khác.</p>

                    <div style="margin-top:20px;">
                        <h4 style="color: #2b70c9;">1. QUY TẮC BACKSHIFTING (Lùi thì)</h4>
                        <p>Khi động từ tường thuật ở quá khứ (<i>said, told, asked</i>), ta phải lùi thì của câu gốc về quá khứ một bậc.</p>
                        <ul style="background:#e3f2fd; padding:15px 25px; border-radius:8px;">
                            <li><b>Present Simple</b> ➝ Past Simple</li>
                            <li><b>Present Continuous</b> ➝ Past Continuous</li>
                            <li><b>Present Perfect / Past Simple</b> ➝ Past Perfect</li>
                            <li><b>Will</b> ➝ Would | <b>Can</b> ➝ Could</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 4px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02;">2. CÂU TRẦN THUẬT (Statements)</h4>
                        <p><b>Cấu trúc:</b> S + said (that) / told + O + (that) + Clause</p>
                        <p><i>Ví dụ:</i> "I work hard." ➝ He <b>said that</b> he <b>worked</b> hard.</p>
                        <p style="color:#d32f2f;">⚠️ <b>Lưu ý:</b> "Said" không đi với tân ngữ chỉ người ngay sau (Sai: He said me).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 4px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800;">3. CÂU HỎI (Reported Questions)</h4>
                        <p><b>a) Yes/No Question:</b> asked + if / whether + S + V (lùi thì)</p>
                        <p><i>Ví dụ:</i> "Do you like it?" ➝ He asked <b>if</b> I <b>liked</b> it.</p>
                        
                        <p><b>b) Wh- Question:</b> asked + Wh-word + S + V (lùi thì)</p>
                        <p><i>Ví dụ:</i> "Where are you?" ➝ He asked <b>where</b> I <b>was</b>.</p>
                        <p style="color:#d32f2f;">⚠️ <b>Lỗi sai:</b> He asked where <u>was I</u>. (Không đảo ngữ trong câu tường thuật).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 4px solid #9c27b0; padding-left: 15px;">
                        <h4 style="color: #9c27b0;">4. GỢI Ý & LỜI KHUYÊN</h4>
                        <p><b>Suggest:</b> S + suggested + V-ing<br>
                        <i>"Let's go." ➝ He suggested going.</i></p>
                        
                        <p><b>Advise:</b> S + advised + O + to V<br>
                        <i>"You should rest." ➝ She advised me to rest.</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "He said that he was busy with his work.",
            "She told me that she had finished the report.",
            "The teacher asked if everyone was ready.",
            "They suggested taking a break for lunch.",
            "My manager advised me to improve my writing skills."
        ],
        quiz: [
            // --- BÀI 1: CHUYỂN CÂU TRẦN THUẬT (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: 'I am busy.' -> He said that he ___ busy.",
                type: "choice",
                options: ["is", "was", "has been"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: 'I will call you later.' -> She said she ___ call me later.",
                type: "choice",
                options: ["will", "would", "can"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: 'I have finished my homework.' -> He said he ___ finished his homework.",
                type: "choice",
                options: ["has", "had", "finished"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: 'I studied English last year.' -> She said she ___ English the year before.",
                type: "choice",
                options: ["studied", "has studied", "had studied"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 5: 'I can help you.' -> He told me that he ___ help me.",
                type: "choice",
                options: ["can", "could", "will"],
                answer: 1
            },

            // --- BÀI 2: CHUYỂN CÂU HỎI (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Do you need help?' -> He asked ___ I needed help. (Điền từ nối)",
                type: "text",
                answer: "if"
            },
            {
                question: "Bài 2 - Câu 2: 'Where are you going?' -> He asked where I ___ going.",
                type: "text",
                answer: "was"
            },
            {
                question: "Bài 2 - Câu 3: 'Why are you late?' -> She asked why I ___ late.",
                type: "text",
                answer: "was"
            },
            {
                question: "Bài 2 - Câu 4: 'Did you arrive on time?' -> He asked if I ___ arrived on time.",
                type: "text",
                answer: "had"
            },

            // --- BÀI 3: CHUYỂN GỢI Ý (TRẮC NGHIỆM) ---
            {
                question: "Bài 3 - Câu 1: 'Let’s study together.' -> He suggested ___ together.",
                type: "choice",
                options: ["study", "to study", "studying"],
                answer: 2
            },
            {
                question: "Bài 3 - Câu 2: 'You should revise vocabulary.' -> She advised me ___ vocabulary.",
                type: "choice",
                options: ["revise", "to revise", "revising"],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 3: 'Please sit down.' -> He asked me ___ sit down.",
                type: "choice",
                options: ["to", "for", "that"],
                answer: 0
            },

            // --- BÀI 4: SỬA LỖI SAI (VIẾT LẠI CÂU) ---
            {
                question: "Bài 4 - Câu 1: 'He said me that he was tired.' -> Sửa lỗi (Dùng Told):",
                type: "text",
                answer: "He told me that he was tired"
            },
            {
                question: "Bài 4 - Câu 2: 'She told that she would come later.' -> Sửa lỗi (Dùng Said):",
                type: "text",
                answer: "She said that she would come later"
            },
            {
                question: "Bài 4 - Câu 3: 'He asked where did I live.' -> Sửa lỗi (Bỏ trợ động từ):",
                type: "text",
                answer: "He asked where I lived"
            },
            {
                question: "Bài 4 - Câu 4: 'She asked me do I need help.' -> Sửa lỗi (Dùng If):",
                type: "text",
                answer: "She asked me if I needed help"
            },
            {
                question: "Bài 4 - Câu 5: 'The teacher suggested to take a break.' -> Sửa lỗi (V-ing):",
                type: "text",
                answer: "The teacher suggested taking a break"
            },

            // --- BÀI 6: TỪ VỰNG (ĐIỀN TỪ) ---
            {
                question: "Bài 6 - Câu 1: He ___ that he would arrive late. (said / told)",
                type: "choice",
                options: ["said", "told"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: She ___ me to wait outside. (said / told)",
                type: "choice",
                options: ["said", "told"],
                answer: 1
            },
            {
                question: "Bài 6 - Câu 3: The teacher gave useful ___. (advice / suggest)",
                type: "choice",
                options: ["advice", "suggest"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: He ___ taking a short break. (suggested / advised)",
                type: "choice",
                options: ["suggested", "advised"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: I didn’t hear his ___. (response / respond)",
                type: "choice",
                options: ["response", "respond"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: The manager made a formal ___. (request / ask)",
                type: "choice",
                options: ["request", "ask"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: He ___ his mistake honestly. (admitted / denied)",
                type: "choice",
                options: ["admitted", "denied"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Please speak ___. (carefully / care)",
                type: "choice",
                options: ["carefully", "care"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Tường thuật lại câu sau: 'I am planning to change my job.' -> He said...",
                type: "open",
                answer: "He said that he was planning to change his job."
            },
            {
                question: "Bài 7: Tường thuật lại câu hỏi: 'Why do you want to learn English?' -> She asked me...",
                type: "open",
                answer: "She asked me why I wanted to learn English."
            }
        ]
    },
    {
        id: 20,
        title: "Ngày 20: Passive Voice (Câu Bị Động) - IELTS Core",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 6.5 ---
            { word: "introduce", type: "v", ipa: "/ˌɪntrəˈduːs/", meaning: "ban hành, giới thiệu", context: "Chính sách, luật", example: "A new law was introduced to reduce pollution." },
            { word: "implement", type: "v", ipa: "/ˈɪmplɪment/", meaning: "triển khai", context: "Kế hoạch, hệ thống", example: "The policy was implemented nationwide." },
            { word: "establish", type: "v", ipa: "/ɪˈstæblɪʃ/", meaning: "thành lập, thiết lập", context: "Tổ chức, ủy ban", example: "A specialized committee was established." },
            { word: "conduct", type: "v", ipa: "/kənˈdʌkt/", meaning: "tiến hành", context: "Nghiên cứu, khảo sát", example: "A survey was conducted to gather opinions." },
            { word: "publish", type: "v", ipa: "/ˈpʌblɪʃ/", meaning: "công bố, xuất bản", context: "Kết quả, báo cáo", example: "The research results were published yesterday." },
            { word: "approve", type: "v", ipa: "/əˈpruːv/", meaning: "phê duyệt", context: "Kế hoạch, ngân sách", example: "The construction plan was approved by the council." },
            { word: "reject", type: "v", ipa: "/rɪˈdʒekt/", meaning: "bác bỏ", context: "Đề xuất", example: "The proposal was rejected due to high costs." },
            { word: "monitor", type: "v", ipa: "/ˈmɒnɪtər/", meaning: "theo dõi, giám sát", context: "Tiến độ, chất lượng", example: "Progress is monitored closely by supervisors." },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Hiệu suất, kết quả", example: "Employee performance is evaluated annually." },
            { word: "regulate", type: "v", ipa: "/ˈreɡjuleɪt/", meaning: "quản lý, điều chỉnh", context: "Ngành công nghiệp", example: "The banking industry is strictly regulated." },
            { word: "enforce", type: "v", ipa: "/ɪnˈfɔːrs/", meaning: "thực thi, cưỡng chế", context: "Luật lệ", example: "Safety rules are strictly enforced here." },
            { word: "require", type: "v", ipa: "/rɪˈkwaɪər/", meaning: "yêu cầu", context: "Thủ tục, giấy tờ", example: "Valid identification documents are required." },
            { word: "affect", type: "v", ipa: "/əˈfekt/", meaning: "ảnh hưởng", context: "Cuộc sống, môi trường", example: "Thousands of lives were affected by the storm." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Tiêu chuẩn, máy móc", example: "High standards are maintained throughout the process." },
            { word: "replace", type: "v", ipa: "/rɪˈpleɪs/", meaning: "thay thế", context: "Hệ thống cũ", example: "Old computer systems are being replaced." },

            // --- B. DANH TỪ (NOUNS) - BAND 6.5 ---
            { word: "policy", type: "n", ipa: "/ˈpɒləsi/", meaning: "chính sách", context: "Chính phủ, công ty", example: "The new policy was criticized by the public." },
            { word: "measure", type: "n", ipa: "/ˈmeʒər/", meaning: "biện pháp", context: "Giải quyết vấn đề", example: "Urgent measures were taken to stop the leak." },
            { word: "regulation", type: "n", ipa: "/ˌreɡjuˈleɪʃn/", meaning: "quy định", context: "Luật pháp", example: "New regulations were introduced last week." },
            { word: "procedure", type: "n", ipa: "/prəˈsiːdʒər/", meaning: "quy trình", context: "Làm việc", example: "Safety procedures must be followed." },
            { word: "standard", type: "n", ipa: "/ˈstændərd/", meaning: "tiêu chuẩn", context: "Chất lượng", example: "High standards are expected in this job." },
            { word: "survey", type: "n", ipa: "/ˈsɜːrveɪ/", meaning: "khảo sát", context: "Nghiên cứu", example: "The survey was completed by 1000 people." },
            { word: "report", type: "n", ipa: "/rɪˈpɔːrt/", meaning: "báo cáo", context: "Công việc", example: "The report has been submitted." },
            { word: "authority", type: "n", ipa: "/əˈθɔːrəti/", meaning: "cơ quan chức năng", context: "Chính quyền", example: "The plan was checked by the local authority." },
            { word: "requirement", type: "n", ipa: "/rɪˈkwaɪərmənt/", meaning: "yêu cầu", context: "Tiêu chí", example: "All requirements have been met." },
            { word: "impact", type: "n", ipa: "/ˈɪmpækt/", meaning: "tác động", context: "Kết quả", example: "The environmental impact was assessed." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 6.5 ---
            { word: "widely", type: "adv", ipa: "/ˈwaɪdli/", meaning: "rộng rãi", context: "Sử dụng, công nhận", example: "English is widely spoken around the world." },
            { word: "officially", type: "adv", ipa: "/əˈfɪʃəli/", meaning: "chính thức", context: "Thông báo", example: "The news was officially announced today." },
            { word: "carefully", type: "adv", ipa: "/ˈkeəfəli/", meaning: "cẩn thận", context: "Kiểm tra, làm việc", example: "The data was carefully analyzed." },
            { word: "regularly", type: "adv", ipa: "/ˈreɡjələrli/", meaning: "thường xuyên", context: "Kiểm tra, bảo trì", example: "The equipment is checked regularly." },
            { word: "effectively", type: "adv", ipa: "/ɪˈfektɪvli/", meaning: "một cách hiệu quả", context: "Giải quyết", example: "The problem was handled effectively." }
        ],
        grammar: {
            title: "PASSIVE VOICE (BỊ ĐỘNG) - IELTS ACADEMIC",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Passive Voice giúp bài viết khách quan và học thuật hơn (đặc biệt trong Writing Task 1 & 2). Hãy tập trung vào đối tượng chịu tác động thay vì người thực hiện.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. CẤU TRÚC CỐT LÕI</h4>
                        <p><b>S + BE (chia thì) + V3/ed (+ by Agent)</b></p>
                        <p><i>Active:</i> People use this method widely.<br>
                        <i>Passive:</i> This method <b>is used</b> widely.</p>
                        <table style="width:100%; border-collapse: collapse; margin-top:10px; font-size:14px;">
                            <tr style="background:#e3f2fd;"><td style="padding:5px; border:1px solid #ccc;"><b>Thì</b></td><td style="padding:5px; border:1px solid #ccc;"><b>Cấu trúc Bị động</b></td></tr>
                            <tr><td style="padding:5px; border:1px solid #ccc;">Present Simple</td><td style="padding:5px; border:1px solid #ccc;">am / is / are + V3</td></tr>
                            <tr><td style="padding:5px; border:1px solid #ccc;">Past Simple</td><td style="padding:5px; border:1px solid #ccc;">was / were + V3</td></tr>
                            <tr><td style="padding:5px; border:1px solid #ccc;">Present Perfect</td><td style="padding:5px; border:1px solid #ccc;">have / has <b>been</b> + V3</td></tr>
                            <tr><td style="padding:5px; border:1px solid #ccc;">Future / Modal</td><td style="padding:5px; border:1px solid #ccc;">will / can <b>be</b> + V3</td></tr>
                        </table>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">2. DẠNG NÂNG CAO (BAND 7+)</h4>
                        
                        <p><b>A. Reporting Verbs (Khách quan hóa ý kiến):</b><br>
                        Thay vì <i>"People think..."</i>, hãy dùng:<br>
                        👉 <i>It is <b>believed / argued / reported</b> that...</i></p>
                        
                        <p><b>B. Causative (Nhờ vả / Thuê mướn):</b><br>
                        Cấu trúc: <b>Have / Get + Object + V3</b><br>
                        👉 <i>I <b>had my laptop repaired</b> yesterday. (Tôi thuê thợ sửa)</i></p>
                    </div>

                    <div style="margin-top:20px; background:#ffebee; padding:10px; border-radius:5px;">
                        <b>⚠️ LƯU Ý VỀ "BY + AGENT":</b><br>
                        - <b>Bỏ:</b> by people, by someone, by them (chung chung/không quan trọng).<br>
                        - <b>Giữ:</b> by Einstein, by the government (cụ thể/quan trọng).
                    </div>
                </div>
            `
        },
        speaking: [
            "This method is widely used in many schools.",
            "It is believed that education creates opportunities.",
            "The new policy is expected to be implemented soon.",
            "I had my computer fixed by a technician."
        ],
        quiz: [
            // --- BÀI 1: CHUYỂN ACTIVE -> PASSIVE (TEXT INPUT) ---
            {
                question: "Bài 1 - Câu 1: 'People consider this method effective.' -> This method...",
                type: "text",
                answer: "is considered effective"
            },
            {
                question: "Bài 1 - Câu 2: 'The government introduced a new policy last year.' -> A new policy...",
                type: "text",
                answer: "was introduced last year"
            },
            {
                question: "Bài 1 - Câu 3: 'Experts have completed the report.' -> The report...",
                type: "text",
                answer: "has been completed"
            },
            {
                question: "Bài 1 - Câu 4: 'They will revise the plan soon.' -> The plan...",
                type: "text",
                answer: "will be revised soon"
            },
            {
                question: "Bài 1 - Câu 5: 'Someone has stolen my bag.' -> My bag...",
                type: "text",
                answer: "has been stolen"
            },
            {
                question: "Bài 1 - Câu 6: 'Schools should encourage critical thinking.' -> Critical thinking...",
                type: "text",
                answer: "should be encouraged"
            },

            // --- BÀI 2: CHIA ĐỘNG TỪ BỊ ĐỘNG ---
            {
                question: "Bài 2 - Câu 1: The project ___ (finish) last month. (Past Simple)",
                type: "text",
                answer: "was finished"
            },
            {
                question: "Bài 2 - Câu 2: New rules ___ (introduce) recently. (Present Perfect)",
                type: "text",
                answer: "have been introduced"
            },
            {
                question: "Bài 2 - Câu 3: This issue ___ (discuss) widely in the media right now. (Present Continuous)",
                type: "text",
                answer: "is being discussed"
            },
            {
                question: "Bài 2 - Câu 4: The decision ___ (make) tomorrow. (Future)",
                type: "text",
                answer: "will be made"
            },
            {
                question: "Bài 2 - Câu 5: The building ___ (repair) at the moment.",
                type: "text",
                answer: "is being repaired"
            },
            {
                question: "Bài 2 - Câu 6: The results ___ (expect) to improve.",
                type: "text",
                answer: "are expected"
            },
            {
                question: "Bài 2 - Câu 7: The form must ___ (submit) online.",
                type: "text",
                answer: "be submitted"
            },
            {
                question: "Bài 2 - Câu 8: My phone ___ (steal) yesterday.",
                type: "text",
                answer: "was stolen"
            },

            // --- BÀI 3: CHỌN CÂU TỰ NHIÊN HƠN (ACADEMIC STYLE) ---
            {
                question: "Bài 3 - Câu 1: Chọn câu học thuật hơn:",
                type: "choice",
                options: ["People believe that online learning is effective.", "It is believed that online learning is effective."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 2: Chọn câu học thuật hơn:",
                type: "choice",
                options: ["Someone has damaged the road.", "The road has been damaged."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 3: Chọn câu học thuật hơn:",
                type: "choice",
                options: ["The company will make a decision soon.", "A decision will be made soon."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 4: Chọn câu học thuật hơn:",
                type: "choice",
                options: ["People say the policy will fail.", "The policy is said to fail."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 5: Chọn câu tự nhiên hơn (Thuê dịch vụ):",
                type: "choice",
                options: ["They repaired my car yesterday.", "I had my car repaired yesterday."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 6: Chọn câu học thuật hơn:",
                type: "choice",
                options: ["Teachers should explain the rules clearly.", "The rules should be explained clearly."],
                answer: 1
            },

            // --- BÀI 4: SỬA LỖI SAI ---
            {
                question: "Bài 4 - Câu 1: 'The problem was solve last week.' -> Sửa lỗi:",
                type: "text",
                answer: "The problem was solved last week"
            },
            {
                question: "Bài 4 - Câu 2: 'The report has complete already.' -> Sửa lỗi:",
                type: "text",
                answer: "The report has been completed already"
            },
            {
                question: "Bài 4 - Câu 3: 'This issue is discuss by experts.' -> Sửa lỗi:",
                type: "text",
                answer: "This issue is discussed by experts"
            },
            {
                question: "Bài 4 - Câu 4: 'The rules will been changed soon.' -> Sửa lỗi:",
                type: "text",
                answer: "The rules will be changed soon"
            },
            {
                question: "Bài 4 - Câu 5: 'My house got repair yesterday.' -> Sửa lỗi (Causative):",
                type: "text",
                answer: "My house got repaired yesterday"
            },
            {
                question: "Bài 4 - Câu 6: 'It is believing that technology helps education.' -> Sửa lỗi:",
                type: "text",
                answer: "It is believed that technology helps education"
            },

            // --- BÀI 5: BIẾN ĐỔI CÂU NÂNG CAO ---
            {
                question: "Bài 5 - Câu 1: 'People think climate change is a serious issue.' <br>-> Viết lại: It is...",
                type: "text",
                answer: "It is thought that climate change is a serious issue"
            },
            {
                question: "Bài 5 - Câu 2: 'Someone cleaned the room.' <br>-> Viết lại: The room...",
                type: "text",
                answer: "The room has been cleaned"
            },
            {
                question: "Bài 5 - Câu 3: 'They are building a new bridge.' <br>-> Viết lại: A new bridge...",
                type: "text",
                answer: "A new bridge is being built"
            },
            {
                question: "Bài 5 - Câu 4: 'I asked a technician to fix my computer.' <br>-> Viết lại: I had my computer...",
                type: "text",
                answer: "I had my computer fixed"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: New safety ___ were introduced. (measures / impacts)",
                type: "choice",
                options: ["measures", "impacts"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: The results were ___ published. (officially / carefully)",
                type: "choice",
                options: ["officially", "carefully"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: This industry is strictly ___. (regulated / conducted)",
                type: "choice",
                options: ["regulated", "conducted"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: The report was ___ by experts. (evaluated / maintained)",
                type: "choice",
                options: ["evaluated", "maintained"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: High standards must be ___. (maintained / replaced)",
                type: "choice",
                options: ["maintained", "replaced"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: A survey was ___ to collect data. (conducted / established)",
                type: "choice",
                options: ["conducted", "established"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: The proposal was ___ by authorities. (approved / affected)",
                type: "choice",
                options: ["approved", "affected"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: These documents are ___ for registration. (required / enforced)",
                type: "choice",
                options: ["required", "enforced"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu Passive Voice dùng cấu trúc 'It is believed that...'",
                type: "open",
                answer: "It is believed that regular exercise improves health."
            },
            {
                question: "Bài 7: Viết 1 câu dùng cấu trúc 'Have something done' (thuê dịch vụ).",
                type: "open",
                answer: "I had my hair cut yesterday."
            }
        ]
    },
    {
        id: 21,
        title: "Ngày 21: Relative Clauses (Mệnh Đề Quan Hệ) - Nâng Band 6 -> 7",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 6.5 ---
            { word: "affect", type: "v", ipa: "/əˈfekt/", meaning: "ảnh hưởng", context: "Quyết định, chính sách", example: "New policies affect all students." },
            { word: "support", type: "v", ipa: "/səˈpɔːrt/", meaning: "hỗ trợ", context: "Gia đình, tài chính", example: "Families support learners emotionally and financially." },
            { word: "provide", type: "v", ipa: "/prəˈvaɪd/", meaning: "cung cấp", context: "Tài nguyên, cơ hội", example: "Schools provide essential resources." },
            { word: "require", type: "v", ipa: "/rɪˈkwaɪər/", meaning: "yêu cầu", context: "Công việc, điều kiện", example: "The job requires previous experience." },
            { word: "improve", type: "v", ipa: "/ɪmˈpruːv/", meaning: "cải thiện", context: "Kỹ năng, kết quả", example: "Daily practice improves fluency." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm", context: "Bất bình đẳng, chi phí", example: "Education reduces social inequality." },
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng", context: "Chi phí, số lượng", example: "Living costs increase annually." },
            { word: "encourage", type: "v", ipa: "/ɪnˈkɜːrɪdʒ/", meaning: "khuyến khích", context: "Hành động tích cực", example: "Teachers encourage active participation." },
            { word: "experience", type: "v", ipa: "/ɪkˈspɪəriəns/", meaning: "trải qua, nếm trải", context: "Khó khăn, áp lực", example: "Students often experience exam pressure." },
            { word: "manage", type: "v", ipa: "/ˈmænɪdʒ/", meaning: "quản lý", context: "Thời gian, dự án", example: "Learn to manage time effectively." },
            { word: "develop", type: "v", ipa: "/dɪˈveləp/", meaning: "phát triển", context: "Kỹ năng, tư duy", example: "Critical skills develop gradually." },
            { word: "face", type: "v", ipa: "/feɪs/", meaning: "đối mặt", context: "Thách thức, vấn đề", example: "Young people face many challenges." },
            { word: "consider", type: "v", ipa: "/kənˈsɪdər/", meaning: "cân nhắc, xem xét", context: "Lựa chọn", example: "Many students consider studying abroad." },
            { word: "depend", type: "v", ipa: "/dɪˈpend/", meaning: "phụ thuộc", context: "Kết quả, nỗ lực", example: "Success depends on consistent effort." },
            { word: "allow", type: "v", ipa: "/əˈlaʊ/", meaning: "cho phép", context: "Quy định, sự linh hoạt", example: "Flexible rules allow more creativity." },

            // --- B. DANH TỪ (NOUNS) - BAND 6.5 ---
            { word: "policy", type: "n", ipa: "/ˈpɒləsi/", meaning: "chính sách", context: "Chính phủ, trường học", example: "The new policy was approved." },
            { word: "method", type: "n", ipa: "/ˈmeθəd/", meaning: "phương pháp", context: "Giảng dạy, làm việc", example: "This teaching method is effective." },
            { word: "approach", type: "n", ipa: "/əˈprəʊtʃ/", meaning: "cách tiếp cận", context: "Vấn đề", example: "A holistic approach is needed." },
            { word: "resource", type: "n", ipa: "/ˈriːsɔːrs/", meaning: "tài nguyên", context: "Học tập, tự nhiên", example: "Online resources are widely available." },
            { word: "opportunity", type: "n", ipa: "/ˌɒpəˈtjuːnəti/", meaning: "cơ hội", context: "Thăng tiến, học tập", example: "Don't miss this opportunity." },
            { word: "challenge", type: "n", ipa: "/ˈtʃælɪndʒ/", meaning: "thách thức", context: "Khó khăn", example: "Overcoming this challenge takes time." },
            { word: "pressure", type: "n", ipa: "/ˈpreʃər/", meaning: "áp lực", context: "Học tập, công việc", example: "Academic pressure is high." },
            { word: "decision", type: "n", ipa: "/dɪˈsɪʒn/", meaning: "quyết định", context: "Quan trọng", example: "It was a difficult decision." },
            { word: "environment", type: "n", ipa: "/ɪnˈvaɪrənmənt/", meaning: "môi trường", context: "Học tập, sống", example: "A supportive learning environment." },
            { word: "experience", type: "n", ipa: "/ɪkˈspɪəriəns/", meaning: "trải nghiệm, kinh nghiệm", context: "Cuộc sống", example: "Real-world experience is valuable." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 6.5 ---
            { word: "effective", type: "adj", ipa: "/ɪˈfektɪv/", meaning: "hiệu quả", context: "Phương pháp, thuốc", example: "This strategy is highly effective." },
            { word: "available", type: "adj", ipa: "/əˈveɪləbl/", meaning: "sẵn có", context: "Tài liệu, thời gian", example: "Resources are readily available." },
            { word: "necessary", type: "adj", ipa: "/ˈnesəsəri/", meaning: "cần thiết", context: "Điều kiện", example: "Basic skills are necessary." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Thay đổi, tác động", example: "There was a significant improvement." },
            { word: "gradually", type: "adv", ipa: "/ˈɡrædʒuəli/", meaning: "dần dần", context: "Thay đổi theo thời gian", example: "Skills improve gradually with practice." }
        ],
        grammar: {
            title: "RELATIVE CLAUSES (MỆNH ĐỀ QUAN HỆ)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Relative Clauses giúp câu văn chặt chẽ, tránh lặp từ và thể hiện khả năng tổ chức ý (Band 7+).</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. PHÂN LOẠI (Rất quan trọng dấu phẩy)</h4>
                        <p><b>A. Defining (Xác định):</b> KHÔNG có dấu phẩy. Thông tin bắt buộc.<br>
                        <i>Ex: The students <b>who study hard</b> will pass. (Chỉ những học sinh chăm chỉ mới đỗ)</i></p>
                        
                        <p><b>B. Non-defining (Không xác định):</b> CÓ dấu phẩy. Thông tin bổ sung (bỏ đi câu vẫn có nghĩa).<br>
                        <i>Ex: My father, <b>who is a doctor</b>, works late.</i><br>
                        <span style="color:red;">⚠️ Không dùng "THAT" trong mệnh đề có dấu phẩy.</span></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. ĐẠI TỪ QUAN HỆ</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Who:</b> Người (Chủ ngữ)</li>
                            <li><b>Whom:</b> Người (Tân ngữ - Formal)</li>
                            <li><b>Which:</b> Vật / Sự việc</li>
                            <li><b>That:</b> Người / Vật (Chỉ dùng trong Defining)</li>
                            <li><b>Whose:</b> Sở hữu (Của ai/cái gì)</li>
                            <li><b>Where / When:</b> Nơi chốn / Thời gian</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. RÚT GỌN MỆNH ĐỀ (Advanced)</h4>
                        <p><b>a) Active (Chủ động) → V-ing</b><br>
                        <i>Students <s>who study</s> abroad → Students <b>studying</b> abroad...</i></p>
                        
                        <p><b>b) Passive (Bị động) → V3/ed</b><br>
                        <i>The rule <s>which was introduced</s> last year → The rule <b>introduced</b> last year...</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "Students who practice daily improve faster.",
            "My teacher, who has 20 years of experience, is very strict.",
            "The city where I studied is crowded but exciting.",
            "Online learning, which reduces costs, benefits many students."
        ],
        quiz: [
            // --- BÀI 1: CHỌN ĐẠI TỪ QUAN HỆ ---
            {
                question: "Bài 1 - Câu 1: Students ___ work part-time often struggle with time management.",
                type: "choice",
                options: ["who", "which", "whose"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: The policy ___ was approved last year is controversial.",
                type: "choice",
                options: ["who", "which", "where"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: The teacher, ___ has a PhD, is very demanding. (Có dấu phẩy)",
                type: "choice",
                options: ["that", "who", "which"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: This is the city ___ I grew up.",
                type: "choice",
                options: ["which", "that", "where"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 5: The year ___ the law was passed was significant.",
                type: "choice",
                options: ["when", "where", "which"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: People ___ opinions are ignored may feel frustrated. (Sở hữu)",
                type: "choice",
                options: ["who", "whom", "whose"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 7: The book ___ you recommended was helpful.",
                type: "choice",
                options: ["who", "where", "which"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 8: Online courses, ___ are widely available, attract many learners.",
                type: "choice",
                options: ["that", "which", "who"],
                answer: 1
            },

            // --- BÀI 2: DẤU PHẨY (CHỌN CÂU ĐÚNG) ---
            {
                question: "Bài 2 - Câu 1: Chọn câu viết đúng chính tả:",
                type: "choice",
                options: ["My brother who lives abroad works in IT.", "My brother, who lives abroad, works in IT."],
                answer: 1
            },
            {
                question: "Bài 2 - Câu 2: Chọn câu viết đúng (Defining - Thông tin bắt buộc):",
                type: "choice",
                options: ["The method which is widely used is effective.", "The method, which is widely used, is effective."],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 3: Chọn câu viết đúng (Chỉ nhóm cụ thể):",
                type: "choice",
                options: ["Students who study regularly achieve better results.", "Students, who study regularly, achieve better results."],
                answer: 0
            },

            // --- BÀI 3: RÚT GỌN MỆNH ĐỀ (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'Students who attend extra classes improve faster.' -> Rút gọn: Students...",
                type: "text",
                answer: "attending extra classes improve faster"
            },
            {
                question: "Bài 3 - Câu 2: 'The report which was published last week gained attention.' -> Rút gọn: The report...",
                type: "text",
                answer: "published last week gained attention"
            },
            {
                question: "Bài 3 - Câu 3: 'People who live in cities face more stress.' -> Rút gọn: People...",
                type: "text",
                answer: "living in cities face more stress"
            },
            {
                question: "Bài 3 - Câu 4: 'The building which was damaged in the storm is unsafe.' -> Rút gọn: The building...",
                type: "text",
                answer: "damaged in the storm is unsafe"
            },

            // --- BÀI 4: SỬA LỖI SAI ---
            {
                question: "Bài 4 - Câu 1: 'The teacher which taught me English was strict.' -> Sửa lỗi:",
                type: "text",
                answer: "The teacher who taught me English was strict"
            },
            {
                question: "Bài 4 - Câu 2: 'The city that I studied there is expensive.' -> Sửa lỗi (Thừa từ):",
                type: "text",
                answer: "The city that I studied in is expensive" // Hoặc "The city where I studied is expensive"
            },
            {
                question: "Bài 4 - Câu 3: 'Students who they work part-time feel stressed.' -> Sửa lỗi (Thừa chủ ngữ):",
                type: "text",
                answer: "Students who work part-time feel stressed"
            },
            {
                question: "Bài 4 - Câu 4: 'The policy, that was introduced recently, is effective.' -> Sửa lỗi (Dấu phẩy không dùng that):",
                type: "text",
                answer: "The policy, which was introduced recently, is effective"
            },
            {
                question: "Bài 4 - Câu 5: 'People whom are motivated learn faster.' -> Sửa lỗi (Whom làm chủ ngữ là sai):",
                type: "text",
                answer: "People who are motivated learn faster"
            },

            // --- BÀI 5: VIẾT LẠI CÂU NÂNG BAND (TEXT INPUT) ---
            {
                question: "Bài 5 - Câu 1: 'Online learning became popular during the pandemic. It is still growing.' -> (Dùng ', which'): Online learning...",
                type: "text",
                answer: "Online learning, which became popular during the pandemic, is still growing"
            },
            {
                question: "Bài 5 - Câu 2: 'Students have supportive families. They usually perform well.' -> (Dùng 'whose'): Students...",
                type: "text",
                answer: "Students whose families are supportive usually perform well"
            },
            {
                question: "Bài 5 - Câu 3: 'This is the place. I took my IELTS test here.' -> (Dùng 'where'): This is the place...",
                type: "text",
                answer: "where I took my IELTS test"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Education provides valuable ___. (opportunities / pressures)",
                type: "choice",
                options: ["opportunities", "pressures"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Students face academic ___. (challenges / methods)",
                type: "choice",
                options: ["challenges", "methods"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: This ___ requires careful planning. (decision / affect)",
                type: "choice",
                options: ["decision", "affect"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Resources are not equally ___. (available / effective)",
                type: "choice",
                options: ["available", "effective"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Good teaching methods are ___. (effective / significant)",
                type: "choice",
                options: ["effective", "significant"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Career success often ___ on effort. (depends / provides)",
                type: "choice",
                options: ["depends", "provides"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Pressure can ___ performance. (affect / allow)",
                type: "choice",
                options: ["affect", "allow"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Skills develop ___ over time. (gradually / widely)",
                type: "choice",
                options: ["gradually", "widely"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng Mệnh đề quan hệ rút gọn (V-ing hoặc V3).",
                type: "open",
                answer: "The man standing over there is my uncle."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'which' để thay thế cho cả mệnh đề trước (Ví dụ: ..., which is good).",
                type: "open",
                answer: "He passed the exam, which surprised everyone."
            }
        ]
    },
    {
        id: 22,
        title: "Ngày 22: Comparisons (So Sánh) - Nâng Band 6 -> 7",
        vocab: [
            // --- A. TÍNH TỪ (ADJECTIVES) - BAND 6.5 ---
            { word: "effective", type: "adj", ipa: "/ɪˈfektɪv/", meaning: "hiệu quả", context: "Phương pháp, giải pháp", example: "This method is more effective than the old one." },
            { word: "efficient", type: "adj", ipa: "/ɪˈfɪʃnt/", meaning: "hiệu suất cao, tiết kiệm", context: "Hệ thống, công việc", example: "An efficient system saves time and money." },
            { word: "affordable", type: "adj", ipa: "/əˈfɔːrdəbl/", meaning: "có thể chi trả (giá phải chăng)", context: "Giá cả, dịch vụ", example: "Public education is more affordable than private schooling." },
            { word: "convenient", type: "adj", ipa: "/kənˈviːniənt/", meaning: "tiện lợi", context: "Dịch vụ, vị trí", example: "Online learning is convenient for busy people." },
            { word: "accessible", type: "adj", ipa: "/əkˈsesəbl/", meaning: "dễ tiếp cận", context: "Giáo dục, thông tin", example: "Education should be accessible to everyone." },
            { word: "practical", type: "adj", ipa: "/ˈpræktɪkl/", meaning: "thực tế", context: "Giải pháp, kỹ năng", example: "We need a more practical solution." },
            { word: "flexible", type: "adj", ipa: "/ˈfleksəbl/", meaning: "linh hoạt", context: "Thời gian, kế hoạch", example: "Flexible schedules help learners manage their time." },
            { word: "complex", type: "adj", ipa: "/kəmˈpleks/", meaning: "phức tạp", context: "Vấn đề, hệ thống", example: "The process is more complex than it seems." },
            { word: "costly", type: "adj", ipa: "/ˈkɔːstli/", meaning: "tốn kém", context: "Chi phí", example: "Private education can be very costly." },
            { word: "beneficial", type: "adj", ipa: "/ˌbenɪˈfɪʃl/", meaning: "có lợi", context: "Tác động, thói quen", example: "Reading is beneficial for mental health." },
            { word: "reliable", type: "adj", ipa: "/rɪˈlaɪəbl/", meaning: "đáng tin cậy", context: "Nguồn tin, người", example: "This source is more reliable than that one." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Sự thay đổi, khác biệt", example: "There is a significant difference between the two groups." },
            { word: "limited", type: "adj", ipa: "/ˈlɪmɪtɪd/", meaning: "hạn chế", context: "Tài nguyên, thời gian", example: "Resources are limited in rural areas." },
            { word: "challenging", type: "adj", ipa: "/ˈtʃælɪndʒɪŋ/", meaning: "đầy thách thức", context: "Công việc, bài tập", example: "Academic study is challenging but rewarding." },
            { word: "balanced", type: "adj", ipa: "/ˈbælənst/", meaning: "cân bằng", context: "Quan điểm, chế độ ăn", example: "A balanced approach is needed to solve this." },

            // --- B. DANH TỪ (NOUNS) - BAND 6.5 ---
            { word: "difference", type: "n", ipa: "/ˈdɪfrəns/", meaning: "sự khác biệt", context: "So sánh", example: "There is a big difference in quality." },
            { word: "advantage", type: "n", ipa: "/ədˈvæntɪdʒ/", meaning: "lợi thế, ưu điểm", context: "So sánh", example: "One advantage of online learning is flexibility." },
            { word: "disadvantage", type: "n", ipa: "/ˌdɪsədˈvæntɪdʒ/", meaning: "bất lợi, nhược điểm", context: "So sánh", example: "A major disadvantage is the lack of interaction." },
            { word: "benefit", type: "n", ipa: "/ˈbenɪfɪt/", meaning: "lợi ích", context: "Kết quả tích cực", example: "The benefits outweigh the costs." },
            { word: "cost", type: "n", ipa: "/kɔːst/", meaning: "chi phí", context: "Tài chính", example: "The cost of living is rising." },
            { word: "quality", type: "n", ipa: "/ˈkwɑːləti/", meaning: "chất lượng", context: "Đánh giá", example: "Quality is more important than quantity." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "khả năng tiếp cận", context: "Cơ hội", example: "Access to the internet varies by region." },
            { word: "pressure", type: "n", ipa: "/ˈpreʃər/", meaning: "áp lực", context: "Tinh thần", example: "Students face more pressure nowadays." },
            { word: "opportunity", type: "n", ipa: "/ˌɒpəˈtjuːnəti/", meaning: "cơ hội", context: "Phát triển", example: "Cities offer more job opportunities." },
            { word: "effort", type: "n", ipa: "/ˈefərt/", meaning: "nỗ lực", context: "Công việc", example: "Success requires consistent effort." },

            // --- C. TRẠNG TỪ BỔ TRỢ (ADVERBS) - BAND 6.5 ---
            { word: "slightly", type: "adv", ipa: "/ˈslaɪtli/", meaning: "hơi, một chút", context: "Mức độ nhỏ", example: "This year's sales are slightly higher." },
            { word: "significantly", type: "adv", ipa: "/sɪɡˈnɪfɪkəntli/", meaning: "đáng kể", context: "Mức độ lớn", example: "Prices have increased significantly." },
            { word: "far", type: "adv", ipa: "/fɑːr/", meaning: "rất nhiều (nhấn mạnh)", context: "So sánh hơn", example: "This option is far better." },
            { word: "considerably", type: "adv", ipa: "/kənˈsɪdərəbli/", meaning: "đáng kể", context: "Mức độ lớn", example: "It is considerably more expensive." },
            { word: "relatively", type: "adv", ipa: "/ˈrelətɪvli/", meaning: "tương đối", context: "So sánh", example: "The test was relatively easy." }
        ],
        grammar: {
            title: "COMPARISONS (SO SÁNH) - NÂNG BAND 7",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">So sánh là kỹ năng cốt lõi trong IELTS Writing Task 1. Band 7 yêu cầu sự chính xác và đa dạng cấu trúc.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. CẤU TRÚC CƠ BẢN (ÔN TẬP)</h4>
                        <p><b>So sánh hơn:</b> Adj/Adv + <b>er</b> + than (ngắn) | <b>more</b> + Adj/Adv + than (dài)<br>
                        <i>Ex: Faster than, More flexible than.</i></p>
                        
                        <p><b>So sánh nhất:</b> The + Adj/Adv + <b>est</b> (ngắn) | The <b>most</b> + Adj/Adv (dài)<br>
                        <i>Ex: The fastest, The most effective.</i></p>
                        <p style="color:red;">⚠️ Lỗi sai: <s>more better</s>, <s>the most cheapest</s>.</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. SO SÁNH BẰNG & KHÔNG BẰNG</h4>
                        <p><b>As ... as:</b> Ngang bằng.<br>
                        <i>Ex: Online courses are <b>as effective as</b> traditional ones.</i></p>
                        
                        <p><b>Not as/so ... as:</b> Không bằng (Dùng để giảm nhẹ).<br>
                        <i>Ex: This method is <b>not as practical as</b> expected.</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. CẤU TRÚC NÂNG CAO (BAND 7+)</h4>
                        <p><b>a) Double Comparatives (Càng... càng...):</b><br>
                        The + Comparative..., The + Comparative...<br>
                        <i>Ex: <b>The more</b> you practice, <b>the better</b> you become.</i></p>
                        
                        <p><b>b) Nhấn mạnh mức độ:</b><br>
                        Far / Much / Significantly + So sánh hơn.<br>
                        <i>Ex: It is <b>far more expensive</b> than I thought.</i></p>
                        
                        <p><b>c) Implicit Comparison (So sánh ngầm):</b><br>
                        Không dùng "than" nhưng vẫn mang nghĩa so sánh.<br>
                        <i>Ex: This approach proves <b>superior</b> in many aspects.</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "Online learning is more flexible than traditional classes.",
            "The more you study, the better your results become.",
            "Public transport is far more affordable than driving.",
            "This solution is not as effective as the previous one."
        ],
        quiz: [
            // --- BÀI 1: CHỌN DẠNG SO SÁNH ĐÚNG ---
            {
                question: "Bài 1 - Câu 1: Online learning is ___ (flexible) than traditional education.",
                type: "choice",
                options: ["more flexible", "flexibler", "as flexible"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: This method is the ___ (effective) solution so far.",
                type: "choice",
                options: ["more effective", "most effective", "effective"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: The results are ___ higher than expected. (Nhấn mạnh)",
                type: "choice",
                options: ["much", "more", "very"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: University education is not ___ affordable ___ vocational training.",
                type: "choice",
                options: ["as ... as", "more ... than", "so ... than"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: The ___ people study, the ___ confident they become.",
                type: "choice",
                options: ["more ... more", "most ... most", "more ... most"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: This year’s figures are ___ lower than last year’s. (Một chút)",
                type: "choice",
                options: ["slightly", "highly", "very"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: Rural areas offer ___ opportunities than cities.",
                type: "choice",
                options: ["fewer", "less", "little"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: This approach is ___ practical but ___ costly.",
                type: "choice",
                options: ["more ... less", "most ... least", "more ... little"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI SAI (VIẾT LẠI CÂU) ---
            {
                question: "Bài 2 - Câu 1: 'This method is more better than the old one.' -> Sửa lỗi:",
                type: "text",
                answer: "This method is better than the old one"
            },
            {
                question: "Bài 2 - Câu 2: 'Online learning is more convenient but interaction is low.' (Parallelism) -> Sửa lỗi:",
                type: "text",
                answer: "Online learning is more convenient but less interactive"
            },
            {
                question: "Bài 2 - Câu 3: 'This solution is the most cheapest option.' -> Sửa lỗi:",
                type: "text",
                answer: "This solution is the cheapest option"
            },
            {
                question: "Bài 2 - Câu 4: 'The higher the cost, fewer students can afford it.' (Double Comparative) -> Sửa lỗi:",
                type: "text",
                answer: "The higher the cost, the fewer students can afford it"
            },
            {
                question: "Bài 2 - Câu 5: 'Education today is more expensive that before.' -> Sửa lỗi:",
                type: "text",
                answer: "Education today is more expensive than before"
            },
            {
                question: "Bài 2 - Câu 6: 'This system is not as efficient than expected.' -> Sửa lỗi:",
                type: "text",
                answer: "This system is not as efficient as expected"
            },

            // --- BÀI 3: BIẾN ĐỔI CÂU (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'Online learning is cheaper than traditional classes.' <br>-> Dùng 'far': Online learning is...",
                type: "text",
                answer: "far cheaper than traditional classes"
            },
            {
                question: "Bài 3 - Câu 2: 'Students study more. They achieve better results.' <br>-> Dùng 'The more...': The more students study...",
                type: "text",
                answer: "the better results they achieve" // hoặc "the better their results become"
            },
            {
                question: "Bài 3 - Câu 3: 'City life is stressful. Rural life is less stressful.' <br>-> Dùng 'not as... as': Rural life is...",
                type: "text",
                answer: "not as stressful as city life"
            },
            {
                question: "Bài 3 - Câu 4: 'This year’s figures are higher than last year’s.' <br>-> Dùng 'slightly': This year's figures are...",
                type: "text",
                answer: "slightly higher than last year's"
            },
            {
                question: "Bài 3 - Câu 5: 'This solution performs better in many ways.' <br>-> Dùng 'superior': This solution is...",
                type: "text",
                answer: "superior in many ways"
            },

            // --- BÀI 5: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 5 - Câu 1: Online learning offers more ___ than traditional classes. (flexibility / flexible)",
                type: "choice",
                options: ["flexibility", "flexible"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 2: There is a ___ difference between the two methods. (significant / significantly)",
                type: "choice",
                options: ["significant", "significantly"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 3: Public education is more ___ than private education. (affordable / costly)",
                type: "choice",
                options: ["affordable", "costly"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 4: This option has several ___ and disadvantages. (advantages / benefits)",
                type: "choice",
                options: ["advantages", "benefits"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 5: The cost is ___ higher this year. (slightly / slight)",
                type: "choice",
                options: ["slightly", "slight"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 6: Students face academic ___. (pressure / press)",
                type: "choice",
                options: ["pressure", "press"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 7: Education quality varies ___ between regions. (considerably / considerable)",
                type: "choice",
                options: ["considerably", "considerable"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 8: This approach is more ___ but less costly. (effective / affect)",
                type: "choice",
                options: ["effective", "affect"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 9: Access to resources remains ___. (limited / limit)",
                type: "choice",
                options: ["limited", "limit"],
                answer: 0
            },
            {
                question: "Bài 5 - Câu 10: Hard work leads to better academic ___. (results / reasons)",
                type: "choice",
                options: ["results", "reasons"],
                answer: 0
            },

            // --- BÀI 6: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 6: So sánh chi phí: Viết 1 câu so sánh giữa học online và học offline.",
                type: "open",
                answer: "Online courses are generally more affordable than traditional offline courses."
            },
            {
                question: "Bài 6: Viết 1 câu dùng cấu trúc 'The more..., the more...'",
                type: "open",
                answer: "The more books you read, the more knowledge you gain."
            }
        ]
    },
    {
        id: 23,
        title: "Ngày 23: Modals Advanced (Động từ khuyết thiếu) - Logic & Tone",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 6.5 ---
            { word: "consider", type: "v", ipa: "/kənˈsɪdər/", meaning: "cân nhắc", context: "Đề xuất (Should consider)", example: "Governments should consider these reforms." },
            { word: "ensure", type: "v", ipa: "/ɪnˈʃʊr/", meaning: "đảm bảo", context: "Luật pháp (Must ensure)", example: "Strict laws must ensure public safety." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết", context: "Vấn đề (Can address)", example: "This policy can address inequality." },
            { word: "affect", type: "v", ipa: "/əˈfekt/", meaning: "ảnh hưởng", context: "Dự đoán (May affect)", example: "The decision may affect thousands of students." },
            { word: "improve", type: "v", ipa: "/ɪmˈpruːv/", meaning: "cải thiện", context: "Khả năng (Could improve)", example: "Technology could improve efficiency." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm", context: "Mục tiêu (Should reduce)", example: "We should aim to reduce waste." },
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng", context: "Dự đoán (Might increase)", example: "Costs might increase next year." },
            { word: "support", type: "v", ipa: "/səˈpɔːrt/", meaning: "hỗ trợ", context: "Chính sách (Ought to support)", example: "The state ought to support small businesses." },
            { word: "provide", type: "v", ipa: "/prəˈvaɪd/", meaning: "cung cấp", context: "Nghĩa vụ (Have to provide)", example: "Schools have to provide necessary materials." },
            { word: "manage", type: "v", ipa: "/ˈmænɪdʒ/", meaning: "quản lý", context: "Khuyên bảo (Should manage)", example: "Students should manage their time better." },
            { word: "prevent", type: "v", ipa: "/prɪˈvent/", meaning: "ngăn chặn", context: "Khả năng (Can prevent)", example: "Early detection can prevent serious illness." },
            { word: "promote", type: "v", ipa: "/prəˈmoʊt/", meaning: "thúc đẩy", context: "Mục đích (To promote)", example: "Education promotes social equality." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Quy định (Must maintain)", example: "Drivers must maintain a safe speed." },
            { word: "respond", type: "v", ipa: "/rɪˈspɒnd/", meaning: "phản hồi, ứng phó", context: "Trách nhiệm (Must respond)", example: "Authorities must respond quickly." },
            { word: "recognize", type: "v", ipa: "/ˈrekəɡnaɪz/", meaning: "thừa nhận, nhận diện", context: "Khuyên bảo (Should recognize)", example: "We should recognize the importance of this issue." },

            // --- B. DANH TỪ (NOUNS) - BAND 6.5 ---
            { word: "policy", type: "n", ipa: "/ˈpɒləsi/", meaning: "chính sách", context: "Chính phủ", example: "This policy might fail." },
            { word: "regulation", type: "n", ipa: "/ˌreɡjuˈleɪʃn/", meaning: "quy định", context: "Bắt buộc", example: "Regulations must be followed." },
            { word: "standard", type: "n", ipa: "/ˈstændərd/", meaning: "tiêu chuẩn", context: "Chất lượng", example: "High standards must be maintained." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "quyền tiếp cận", context: "Cơ hội", example: "Equal access should be guaranteed." },
            { word: "impact", type: "n", ipa: "/ˈɪmpækt/", meaning: "tác động", context: "Kết quả", example: "The environmental impact could be severe." },
            { word: "challenge", type: "n", ipa: "/ˈtʃælɪndʒ/", meaning: "thách thức", context: "Khó khăn", example: "We may face serious challenges." },
            { word: "solution", type: "n", ipa: "/səˈluːʃn/", meaning: "giải pháp", context: "Vấn đề", example: "A viable solution must be found." },
            { word: "benefit", type: "n", ipa: "/ˈbenɪfɪt/", meaning: "lợi ích", context: "Kết quả tốt", example: "The benefits might outweigh the costs." },
            { word: "responsibility", type: "n", ipa: "/rɪˌspɒnsəˈbɪləti/", meaning: "trách nhiệm", context: "Nghĩa vụ", example: "It is our responsibility to act." },
            { word: "efficiency", type: "n", ipa: "/ɪˈfɪʃnsi/", meaning: "hiệu quả (năng suất)", context: "Công việc", example: "Technology can improve efficiency." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 6.5 ---
            { word: "possible", type: "adj", ipa: "/ˈpɒsəbl/", meaning: "có thể", context: "Khả năng", example: "It is possible that prices will rise." },
            { word: "likely", type: "adj", ipa: "/ˈlaɪkli/", meaning: "có khả năng cao", context: "Dự đoán", example: "It is likely to happen." },
            { word: "necessary", type: "adj", ipa: "/ˈnesəsəri/", meaning: "cần thiết", context: "Yêu cầu", example: "Changes are necessary." },
            { word: "effective", type: "adj", ipa: "/ɪˈfektɪv/", meaning: "hiệu quả", context: "Kết quả", example: "This method may not be effective." },
            { word: "appropriate", type: "adj", ipa: "/əˈproʊpriət/", meaning: "phù hợp", context: "Hành động", example: "Appropriate action should be taken." }
        ],
        grammar: {
            title: "MODALS (LOGIC & TONE) - BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Modals không chỉ là ngữ pháp, nó thể hiện "Thái độ" (Tone) của người viết. Band 7 yêu cầu dùng Modals để giảm nhẹ tính khẳng định (Hedging).</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. THANG ĐỘ CHẮC CHẮN (CERTAINTY)</h4>
                        <p><b>Must</b> (95%) > <b>Will</b> (80%) > <b>Should</b> (70%) > <b>May/Might/Could</b> (30-50%)</p>
                        <p><i>Ví dụ:</i><br>
                        - It <b>must</b> be true. (Suy luận chắc chắn)<br>
                        - It <b>may</b> be true. (Dự đoán thận trọng - Academic)</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. MUST vs HAVE TO</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Must:</b> Suy luận logic hoặc cảm xúc chủ quan.<br><i>Ex: You must be tired after work.</i></li>
                            <li><b>Have to:</b> Quy định, luật lệ bên ngoài.<br><i>Ex: Students have to wear uniforms.</i></li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. MODALS + PERFECT (Suy luận Quá khứ)</h4>
                        <p>Cấu trúc: <b>Modal + Have + V3/ed</b></p>
                        <ul style="padding-left:20px;">
                            <li><b>Must have V3:</b> Chắc chắn đã xảy ra.<br><i>The plan must have failed.</i></li>
                            <li><b>Should have V3:</b> Lẽ ra nên làm (nhưng không làm).<br><i>He should have studied harder.</i></li>
                            <li><b>Could have V3:</b> Có thể đã xảy ra (nhưng không chắc).</li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "Governments should consider investing more in renewable energy.",
            "This policy may have a positive impact on the economy.",
            "Students must follow the academic regulations strictly.",
            "The project could have failed without proper planning.",
            "Authorities ought to address public concerns immediately."
        ],
        quiz: [
            // --- BÀI 1: CHỌN MODAL PHÙ HỢP ---
            {
                question: "Bài 1 - Câu 1: This policy ___ improve access to education. (Khả năng - Possibility)",
                type: "choice",
                options: ["must", "may", "has to"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Students ___ follow academic rules. (Quy định bắt buộc)",
                type: "choice",
                options: ["might", "have to", "could"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: The data ___ be reliable; it was collected carefully. (Suy luận mạnh)",
                type: "choice",
                options: ["must", "can", "should"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: Governments ___ consider long-term solutions. (Lời khuyên/Đề xuất)",
                type: "choice",
                options: ["may", "should", "will"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 5: Online courses ___ not suit practical subjects. (Khả năng thấp)",
                type: "choice",
                options: ["must", "might", "have to"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 6: The result ___ be accurate, given the method used. (Suy luận)",
                type: "choice",
                options: ["ought to", "must", "can"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 7: Authorities ___ enforce regulations more strictly. (Lời khuyên)",
                type: "choice",
                options: ["ought to", "may", "might"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: The project ___ fail without proper funding. (Dự đoán/Khả năng)",
                type: "choice",
                options: ["could", "must", "has to"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI SAI (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Governments must to invest more in education.' -> Sửa lỗi:",
                type: "text",
                answer: "Governments must invest more in education"
            },
            {
                question: "Bài 2 - Câu 2: 'This solution will may cause problems.' -> Sửa lỗi (Chọn 1 modal):",
                type: "text",
                answer: "This solution may cause problems" // Hoặc will
            },
            {
                question: "Bài 2 - Câu 3: 'Students should to manage their time better.' -> Sửa lỗi:",
                type: "text",
                answer: "Students should manage their time better"
            },
            {
                question: "Bài 2 - Câu 4: 'The plan must have succeed last year.' -> Sửa lỗi (V3):",
                type: "text",
                answer: "The plan must have succeeded last year"
            },
            {
                question: "Bài 2 - Câu 5: 'Online learning can reduces costs.' -> Sửa lỗi:",
                type: "text",
                answer: "Online learning can reduce costs"
            },
            {
                question: "Bài 2 - Câu 6: 'The policy should have been implement earlier.' -> Sửa lỗi (Bị động):",
                type: "text",
                answer: "The policy should have been implemented earlier"
            },

            // --- BÀI 3: PHÂN TÍCH SẮC THÁI (TONE) ---
            {
                question: "Bài 3 - Câu 1: Chọn câu học thuật & an toàn hơn:",
                type: "choice",
                options: ["This policy will solve unemployment.", "This policy may help reduce unemployment."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 2: Chọn câu lịch sự hơn:",
                type: "choice",
                options: ["Governments must reduce tuition fees.", "Governments should consider reducing tuition fees."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 3: Chọn câu chính xác hơn về dữ liệu:",
                type: "choice",
                options: ["The results are wrong.", "The results might be inaccurate."],
                answer: 1
            },
            {
                question: "Bài 3 - Câu 4: Chọn câu suy luận quá khứ:",
                type: "choice",
                options: ["The reform failed.", "The reform may have failed."],
                answer: 1
            },

            // --- BÀI 4: BIẾN ĐỔI CÂU (TEXT INPUT) ---
            {
                question: "Bài 4 - Câu 1: 'It is possible that costs will increase.' <br>-> Dùng 'may': Costs...",
                type: "text",
                answer: "Costs may increase"
            },
            {
                question: "Bài 4 - Câu 2: 'It is very likely that the plan failed.' <br>-> Dùng 'must have': The plan...",
                type: "text",
                answer: "The plan must have failed"
            },
            {
                question: "Bài 4 - Câu 3: 'It would be better if governments invested more.' <br>-> Dùng 'should': Governments...",
                type: "text",
                answer: "Governments should invest more"
            },
            {
                question: "Bài 4 - Câu 4: 'It was a mistake not to act earlier.' <br>-> Dùng 'should have': We...",
                type: "text",
                answer: "We should have acted earlier"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Governments should ___ public concerns. (address / affect)",
                type: "choice",
                options: ["address", "affect"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Education policies aim to improve ___ to learning. (access / impact)",
                type: "choice",
                options: ["access", "impact"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Clear rules help ___ academic standards. (maintain / prevent)",
                type: "choice",
                options: ["maintain", "prevent"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: These measures may ___ costs. (reduce / promote)",
                type: "choice",
                options: ["reduce", "promote"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Authorities must take ___. (responsibility / benefit)",
                type: "choice",
                options: ["responsibility", "benefit"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: This approach brings several ___. (benefits / policies)",
                type: "choice",
                options: ["benefits", "policies"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'should' để đưa ra lời khuyên cho học sinh.",
                type: "open",
                answer: "Students should review their notes daily to improve memory."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'may/might' để dự đoán về công nghệ trong tương lai.",
                type: "open",
                answer: "AI might replace some manual jobs in the next decade."
            }
        ]
    },
    {
        id: 24,
        title: "Ngày 24: Nominalisation (Danh Từ Hóa) - Vũ Khí Band 7+ Writing",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 7.0 ---
            { word: "enhance", type: "v", ipa: "/ɪnˈhæns/", meaning: "nâng cao, tăng cường", context: "Chất lượng, kỹ năng", example: "Education enhances employability." },
            { word: "undermine", type: "v", ipa: "/ˌʌndərˈmaɪn/", meaning: "làm suy yếu", context: "Niềm tin, nỗ lực", example: "Corruption undermines trust in the government." },
            { word: "facilitate", type: "v", ipa: "/fəˈsɪlɪteɪt/", meaning: "tạo điều kiện thuận lợi", context: "Quá trình, học tập", example: "Technology facilitates distance learning." },
            { word: "exacerbate", type: "v", ipa: "/ɪɡˈzæsərbeɪt/", meaning: "làm trầm trọng hơn", context: "Vấn đề, bất bình đẳng", example: "High costs exacerbate inequality." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết (vấn đề)", context: "Vấn đề xã hội", example: "Policies must address social issues." },
            { word: "allocate", type: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", context: "Tài nguyên, ngân sách", example: "We must allocate resources fairly." },
            { word: "regulate", type: "v", ipa: "/ˈreɡjuleɪt/", meaning: "điều chỉnh, quản lý", context: "Ngành công nghiệp", example: "The banking industry is strictly regulated." },
            { word: "stimulate", type: "v", ipa: "/ˈstɪmjuleɪt/", meaning: "kích thích, thúc đẩy", context: "Kinh tế, sự phát triển", example: "Investment stimulates economic growth." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", context: "Hành động, mục tiêu", example: "Governments should prioritize education." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm nhẹ (rủi ro)", context: "Tác động tiêu cực", example: "Measures to mitigate climate risks." },
            { word: "implement", type: "v", ipa: "/ˈɪmplɪment/", meaning: "triển khai, thực hiện", context: "Kế hoạch, chính sách", example: "The new policy was implemented last month." },
            { word: "sustain", type: "v", ipa: "/səˈsteɪn/", meaning: "duy trì, chống đỡ", context: "Phát triển, sự sống", example: "We must sustain economic development." },
            { word: "justify", type: "v", ipa: "/ˈdʒʌstɪfaɪ/", meaning: "biện minh, chứng minh là đúng", context: "Hành động, chi phí", example: "The high costs are justified by the results." },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Hiệu quả, kết quả", example: "Performance is evaluated annually." },
            { word: "transform", type: "v", ipa: "/trænsˈfɔːrm/", meaning: "chuyển đổi, biến đổi", context: "Cuộc sống, hệ thống", example: "Education transforms lives." },

            // --- B. DANH TỪ (NOUNS) - NOMINALISATION ---
            { word: "improvement", type: "n", ipa: "/ɪmˈpruːvmənt/", meaning: "sự cải thiện", context: "Từ 'improve'", example: "There is a need for improvement." },
            { word: "investment", type: "n", ipa: "/ɪnˈvestmənt/", meaning: "sự đầu tư", context: "Từ 'invest'", example: "Public investment is crucial." },
            { word: "reduction", type: "n", ipa: "/rɪˈdʌkʃn/", meaning: "sự giảm bớt", context: "Từ 'reduce'", example: "A reduction in costs." },
            { word: "development", type: "n", ipa: "/dɪˈveləpmənt/", meaning: "sự phát triển", context: "Từ 'develop'", example: "Economic development is slow." },
            { word: "effectiveness", type: "n", ipa: "/ɪˈfektɪvnəs/", meaning: "tính hiệu quả", context: "Từ 'effective'", example: "The effectiveness of the drug." },
            { word: "efficiency", type: "n", ipa: "/ɪˈfɪʃnsi/", meaning: "hiệu suất", context: "Từ 'efficient'", example: "Energy efficiency is important." },
            { word: "equality", type: "n", ipa: "/iˈkwɑːləti/", meaning: "sự bình đẳng", context: "Từ 'equal'", example: "We strive for gender equality." },
            { word: "inequality", type: "n", ipa: "/ˌɪnɪˈkwɑːləti/", meaning: "sự bất bình đẳng", context: "Xã hội", example: "Income inequality is rising." },
            { word: "concern", type: "n", ipa: "/kənˈsɜːrn/", meaning: "mối lo ngại", context: "Từ 'concerned'", example: "There is growing concern about safety." },
            { word: "failure", type: "n", ipa: "/ˈfeɪljər/", meaning: "sự thất bại", context: "Từ 'fail'", example: "The failure of the project was unexpected." },
            { word: "success", type: "n", ipa: "/səkˈses/", meaning: "sự thành công", context: "Từ 'succeed'", example: "Hard work leads to success." },

            // --- C. TRẠNG TỪ / TÍNH TỪ HỌC THUẬT ---
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Mức độ, thay đổi", example: "A significant increase in sales." },
            { word: "widespread", type: "adj", ipa: "/ˈwaɪdspred/", meaning: "phổ biến, lan rộng", context: "Niềm tin, vấn đề", example: "There is widespread support for the plan." },
            { word: "long-term", type: "adj", ipa: "/ˌlɔːŋ ˈtɜːrm/", meaning: "dài hạn", context: "Mục tiêu, tác động", example: "Long-term effects are unknown." },
            { word: "substantial", type: "adj", ipa: "/səbˈstænʃl/", meaning: "đáng kể, lớn", context: "Số lượng", example: "A substantial amount of money." },
            { word: "increasingly", type: "adv", ipa: "/ɪnˈkriːsɪŋli/", meaning: "ngày càng", context: "Xu hướng", example: "Students are increasingly reliant on technology." }
        ],
        grammar: {
            title: "NOMINALISATION (DANH TỪ HÓA) - BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Nominalisation là kỹ thuật chuyển Động từ/Tính từ thành Danh từ. Đây là đặc điểm cốt lõi của văn phong học thuật (Academic Writing), giúp câu văn khách quan và cô đọng hơn.</p>

                    <div style="margin-top:20px;">
                        <h4 style="color: #2b70c9;">1. TẠI SAO CẦN NOMINALISATION?</h4>
                        <p><b>Band 6 (Văn nói):</b> <i>People think education is important.</i> (Chủ ngữ "People" yếu)</p>
                        <p><b>Band 7+ (Học thuật):</b> <i>There is <b>widespread recognition</b> of the <b>importance</b> of education.</i> (Khách quan, trang trọng)</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. CÁC DẠNG CHUYỂN ĐỔI CHÍNH</h4>
                        
                        <p><b>A. Động từ → Danh từ:</b><br>
                        - invest → <b>investment</b><br>
                        - fail → <b>failure</b><br>
                        <i>Ex: The government <b>invests</b> in schools. → Government <b>investment</b> in schools is essential.</i></p>
                        
                        <p><b>B. Tính từ → Danh từ:</b><br>
                        - effective → <b>effectiveness</b><br>
                        - difficult → <b>difficulty</b><br>
                        <i>Ex: The drug is <b>effective</b>. → The <b>effectiveness</b> of the drug is proven.</i></p>

                        <p><b>C. Mệnh đề → Cụm danh từ:</b><br>
                        - People are concerned about... → There is <b>growing concern</b> about...</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. KẾT HỢP VỚI PASSIVE VOICE</h4>
                        <p>Cấu trúc cực mạnh cho Task 2:</p>
                        <p><i>It is widely believed that the policy will work.</i><br>
                        → <i>There is <b>widespread belief</b> in the <b>effectiveness</b> of the policy.</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "There has been a significant increase in tuition fees recently.",
            "Public investment in education remains limited in some areas.",
            "The failure of the policy led to public criticism.",
            "There is growing concern about social inequality.",
            "This approach improves efficiency in the workplace."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN NOMINALISATION (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Tìm danh từ hóa trong câu: 'There has been a significant increase in tuition fees.'",
                type: "choice",
                options: ["increase", "significant", "fees"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: Tìm danh từ hóa: 'Public investment in education is vital.'",
                type: "choice",
                options: ["public", "investment", "vital"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Tìm danh từ hóa: 'The failure of the policy caused problems.'",
                type: "choice",
                options: ["caused", "policy", "failure"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 4: Tìm danh từ hóa: 'This approach improves efficiency.'",
                type: "choice",
                options: ["improves", "efficiency", "approach"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 5: Tìm danh từ hóa: 'There is growing concern about inequality.'",
                type: "choice",
                options: ["growing", "concern", "about"],
                answer: 1
            },

            // --- BÀI 2: CHUYỂN ĐỘNG TỪ -> DANH TỪ (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'The government decided to change the policy.' -> The government made a...",
                type: "text",
                answer: "decision"
            },
            {
                question: "Bài 2 - Câu 2: 'Schools must improve teaching quality.' -> There is a need for ___ in teaching quality.",
                type: "text",
                answer: "improvement"
            },
            {
                question: "Bài 2 - Câu 3: 'The company invested heavily in technology.' -> The company made a heavy ___ in technology.",
                type: "text",
                answer: "investment"
            },
            {
                question: "Bài 2 - Câu 4: 'The system failed due to poor planning.' -> The ___ of the system was due to poor planning.",
                type: "text",
                answer: "failure"
            },
            {
                question: "Bài 2 - Câu 5: 'Authorities aim to reduce unemployment.' -> The aim is the ___ of unemployment.",
                type: "text",
                answer: "reduction"
            },
            {
                question: "Bài 2 - Câu 6: 'Universities need to develop new programs.' -> The ___ of new programs is needed.",
                type: "text",
                answer: "development"
            },
            {
                question: "Bài 2 - Câu 7: 'The reform did not succeed.' -> The reform was not a...",
                type: "text",
                answer: "success"
            },
            {
                question: "Bài 2 - Câu 8: 'The policy affected students.' -> The policy had an ___ on students.",
                type: "text",
                answer: "effect" // hoặc impact
            },

            // --- BÀI 3: CHUYỂN MỆNH ĐỀ -> CỤM DANH TỪ (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'People are worried about climate change.' -> There is ___ about climate change.",
                type: "text",
                answer: "worry" // hoặc concern
            },
            {
                question: "Bài 3 - Câu 2: 'Students lack basic skills.' -> There is a ___ of basic skills among students.",
                type: "text",
                answer: "lack"
            },
            {
                question: "Bài 3 - Câu 3: 'The public does not trust the system.' -> There is a lack of ___ in the system.",
                type: "text",
                answer: "trust"
            },
            {
                question: "Bài 3 - Câu 4: 'Many people oppose the proposal.' -> There is strong ___ to the proposal.",
                type: "text",
                answer: "opposition"
            },
            {
                question: "Bài 3 - Câu 5: 'The economy is growing slowly.' -> There is slow economic...",
                type: "text",
                answer: "growth"
            },
            {
                question: "Bài 3 - Câu 6: 'Students are increasingly dependent on technology.' -> There is increasing ___ on technology.",
                type: "text",
                answer: "dependence"
            },

            // --- BÀI 4: SỬA LỖI SAI (VIẾT LẠI CÂU) ---
            {
                question: "Bài 4 - Câu 1: 'The improvement of education is improving society.' (Lặp từ) -> Sửa lỗi:",
                type: "text",
                answer: "The improvement of education benefits society" // Hoặc improves society (động từ khác đi)
            },
            {
                question: "Bài 4 - Câu 2: 'There is an increase of costs last year.' (Sai giới từ/thì) -> Sửa lỗi:",
                type: "text",
                answer: "There was an increase in costs last year"
            },
            {
                question: "Bài 4 - Câu 3: 'The government made an investment education.' (Thiếu giới từ) -> Sửa lỗi:",
                type: "text",
                answer: "The government made an investment in education"
            },
            {
                question: "Bài 4 - Câu 4: 'The failure the policy caused problems.' (Thiếu giới từ) -> Sửa lỗi:",
                type: "text",
                answer: "The failure of the policy caused problems"
            },
            {
                question: "Bài 4 - Câu 5: 'There is a lack motivate among students.' (Sai dạng từ) -> Sửa lỗi:",
                type: "text",
                answer: "There is a lack of motivation among students"
            },
            {
                question: "Bài 4 - Câu 6: 'The effectiveness is education is clear.' (Sai giới từ) -> Sửa lỗi:",
                type: "text",
                answer: "The effectiveness of education is clear"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Public ___ in education is essential. (investment / invest)",
                type: "choice",
                options: ["investment", "invest"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: There has been a ___ increase in costs. (significant / signify)",
                type: "choice",
                options: ["significant", "signify"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: This policy aims at poverty ___. (reduction / reduce)",
                type: "choice",
                options: ["reduction", "reduce"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Education plays a key role in social ___. (development / develop)",
                type: "choice",
                options: ["development", "develop"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: There is growing public ___ about inequality. (concern / concerned)",
                type: "choice",
                options: ["concern", "concerned"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: These measures may ___ long-term risks. (mitigate / mitigation)",
                type: "choice",
                options: ["mitigate", "mitigation"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Resources must be ___ efficiently. (allocated / allocation)",
                type: "choice",
                options: ["allocated", "allocation"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Technology has ___ learning methods. (transformed / transformation)",
                type: "choice",
                options: ["transformed", "transformation"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: The ___ of the reform disappointed many. (failure / fail)",
                type: "choice",
                options: ["failure", "fail"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: Education is ___ important in modern society. (increasingly / increase)",
                type: "choice",
                options: ["increasingly", "increase"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng danh từ hóa (Verb -> Noun) về chủ đề môi trường.",
                type: "open",
                answer: "The protection of the environment is everyone's responsibility."
            },
            {
                question: "Bài 7: Viết 1 câu dùng danh từ hóa (Adj -> Noun) về chủ đề sức khỏe.",
                type: "open",
                answer: "The importance of regular exercise cannot be overstated."
            }
        ]
    },
    {
        id: 25,
        title: "Ngày 25: Cohesion & Coherence (Mạch lạc & Liên kết) - Band 7+ Core",
        vocab: [
            // --- A. LINKING WORDS (TỪ NỐI) - BAND 7.0 ---
            { word: "moreover", type: "adv", ipa: "/mɔːrˈoʊvər/", meaning: "hơn nữa (bổ sung mạnh)", context: "Thêm ý", example: "Moreover, funding increased significantly." },
            { word: "furthermore", type: "adv", ipa: "/ˈfɜːrðərmɔːr/", meaning: "hơn nữa (trang trọng)", context: "Thêm ý học thuật", example: "Furthermore, this policy benefits students." },
            { word: "therefore", type: "adv", ipa: "/ˈðerfɔːr/", meaning: "vì vậy", context: "Nguyên nhân - Kết quả", example: "Costs rose; therefore, profits fell." },
            { word: "consequently", type: "adv", ipa: "/ˈkɑːnsɪkwentli/", meaning: "hệ quả là", context: "Kết quả (Logic mạnh)", example: "Consequently, the project was delayed." },
            { word: "however", type: "adv", ipa: "/haʊˈevər/", meaning: "tuy nhiên", context: "Đối lập", example: "The plan is good; however, it is costly." },
            { word: "nevertheless", type: "adv", ipa: "/ˌnevərðəˈles/", meaning: "tuy nhiên (nhấn mạnh)", context: "Đối lập mạnh", example: "It was raining; nevertheless, we went out." },
            { word: "whereas", type: "conj", ipa: "/ˌwerˈæz/", meaning: "trong khi (so sánh)", context: "So sánh 2 mặt", example: "He is rich, whereas she is poor." },
            { word: "while", type: "conj", ipa: "/waɪl/", meaning: "trong khi (nhượng bộ)", context: "Đối lập nhẹ", example: "While I agree, I have some doubts." },
            { word: "instance", type: "n", ipa: "/ˈɪnstəns/", meaning: "ví dụ", context: "For instance", example: "For instance, solar energy is renewable." },
            { word: "overall", type: "adv", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung", context: "Tổng kết", example: "Overall, the results are positive." },
            { word: "contrast", type: "n", ipa: "/ˈkɑːntræst/", meaning: "sự tương phản", context: "In contrast", example: "In contrast, the new model is faster." },
            { word: "result", type: "n", ipa: "/rɪˈzʌlt/", meaning: "kết quả", context: "As a result", example: "As a result, prices dropped." },
            { word: "extent", type: "n", ipa: "/ɪkˈstent/", meaning: "mức độ", context: "To a large extent", example: "I agree to a large extent." },
            { word: "notably", type: "adv", ipa: "/ˈnoʊtəbli/", meaning: "đáng chú ý là", context: "Nhấn mạnh ví dụ", example: "Notably, sales increased in Asia." },

            // --- B. TỪ VỰNG LOGIC (LOGICAL FLOW) ---
            { word: "contribute", type: "v", ipa: "/kənˈtrɪbjuːt/", meaning: "đóng góp (dẫn đến)", context: "Nguyên nhân", example: "Stress contributes to illness." },
            { word: "lead", type: "v", ipa: "/liːd/", meaning: "dẫn đến", context: "Kết quả (Lead to)", example: "This can lead to serious problems." },
            { word: "cause", type: "v", ipa: "/kɔːz/", meaning: "gây ra", context: "Nguyên nhân", example: "Smoking causes cancer." },
            { word: "factor", type: "n", ipa: "/ˈfæktər/", meaning: "yếu tố", context: "Phân tích", example: "Cost is a major factor." },
            { word: "impact", type: "n", ipa: "/ˈɪmpækt/", meaning: "tác động", context: "Kết quả", example: "The environmental impact is huge." },
            { word: "issue", type: "n", ipa: "/ˈɪʃuː/", meaning: "vấn đề", context: "Chủ đề bàn luận", example: "This is a complex issue." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Thay đổi", example: "A growing trend in education." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả đầu ra", context: "Kết quả cuối cùng", example: "The outcome was successful." },
            { word: "approach", type: "n", ipa: "/əˈproʊtʃ/", meaning: "cách tiếp cận", context: "Giải pháp", example: "A new approach is needed." },
            { word: "evidence", type: "n", ipa: "/ˈevɪdəns/", meaning: "bằng chứng", context: "Chứng minh", example: "There is clear evidence of climate change." },
            { word: "priority", type: "n", ipa: "/praɪˈɔːrəti/", meaning: "sự ưu tiên", context: "Quan trọng", example: "Safety is our top priority." },
            { word: "balance", type: "n", ipa: "/ˈbæləns/", meaning: "sự cân bằng", context: "Giải pháp", example: "We need a balance between work and life." },

            // --- C. TÍNH TỪ / TRẠNG TỪ LOGIC ---
            { word: "coherent", type: "adj", ipa: "/koʊˈhɪrənt/", meaning: "mạch lạc", context: "Bài viết, lập luận", example: "A coherent argument is essential." },
            { word: "logical", type: "adj", ipa: "/ˈlɑːdʒɪkl/", meaning: "hợp lý, có logic", context: "Suy luận", example: "This is a logical conclusion." },
            { word: "consistent", type: "adj", ipa: "/kənˈsɪstənt/", meaning: "nhất quán", context: "Quan điểm", example: "Her performance has been consistent." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Mức độ", example: "A significant improvement." },
            { word: "relatively", type: "adv", ipa: "/ˈrelətɪvli/", meaning: "tương đối", context: "So sánh", example: "The test was relatively easy." },
            { word: "largely", type: "adv", ipa: "/ˈlɑːrdʒli/", meaning: "phần lớn", context: "Mức độ", example: "The success was largely due to effort." }
        ],
        grammar: {
            title: "COHESION & COHERENCE (MẠCH LẠC & LIÊN KẾT)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Cohesion (Liên kết từ ngữ) và Coherence (Mạch lạc ý tưởng) chiếm 25% điểm số Writing. Band 7 yêu cầu dùng từ nối tự nhiên và logic chặt chẽ.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. PHÂN BIỆT KHÁI NIỆM</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Cohesion:</b> Liên kết bề mặt (từ nối, đại từ thay thế).<br><i>Ex: Therefore, However, This...</i></li>
                            <li><b>Coherence:</b> Logic ý tưởng (sắp xếp ý, phát triển đoạn văn).<br><i>Topic Sentence -> Explain -> Example -> Result.</i></li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. NHÓM TỪ NỐI (FUNCTIONAL LINKING)</h4>
                        <p><b>a) Bổ sung (Addition):</b> Moreover, Furthermore, In addition.</p>
                        <p><b>b) Nguyên nhân - Kết quả (Cause-Effect):</b> Therefore, Thus, Consequently, As a result.</p>
                        <p><b>c) Đối lập (Contrast):</b> However, Nevertheless, On the other hand, Whereas (nối câu).</p>
                        <p><b>d) Ví dụ (Example):</b> For example, For instance, Such as (liệt kê).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. THAY THẾ & THAM CHIẾU (BAND 7+)</h4>
                        <p>Tránh lặp từ bằng cách dùng:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Reference:</b> This / These + Noun (tóm lại ý trước).<br><i>Ex: "This issue is serious." (Thay vì lặp lại tên vấn đề)</i></li>
                            <li><b>Substitution:</b> One / Ones.<br><i>Ex: "Private universities are costly; public ones are cheaper."</i></li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "Education is costly; however, it brings long-term benefits.",
            "Online learning is flexible; therefore, many students prefer it.",
            "The government increased funding, and as a result, access improved.",
            "While online learning is convenient, it lacks social interaction.",
            "This approach is effective; moreover, it is easy to implement."
        ],
        quiz: [
            // --- BÀI 1: CHỌN TỪ NỐI PHÙ HỢP ---
            {
                question: "Bài 1 - Câu 1: Education is costly; ___, it brings long-term benefits. (Đối lập)",
                type: "choice",
                options: ["however", "therefore", "moreover"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: Online learning is flexible. ___, it may reduce interaction. (Bổ sung ý trái chiều)",
                type: "choice",
                options: ["In addition", "On the other hand", "Thus"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Public funding increased. ___, access improved. (Kết quả)",
                type: "choice",
                options: ["However", "For example", "Consequently"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 4: Technology enhances efficiency; ___, training is required. (Tuy nhiên - nhấn mạnh)",
                type: "choice",
                options: ["nevertheless", "furthermore", "therefore"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: ___ traditional classes, online courses are more flexible. (So sánh)",
                type: "choice",
                options: ["In contrast to", "Moreover", "As a result"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: The policy is effective; ___, it requires careful monitoring. (Bổ sung/Tuy nhiên tùy ngữ cảnh - ở đây là tuy nhiên)",
                type: "choice",
                options: ["however", "therefore", "for instance"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: ___ economic growth, inequality remains an issue. (Mặc dù)",
                type: "choice",
                options: ["Despite", "However", "Thus"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: Students need skills ___ critical thinking. (Liệt kê)",
                type: "choice",
                options: ["such as", "therefore", "however"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI COHESION (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'People think education is important. Moreover it helps society.' (Dùng Moreover đầu câu phải có phẩy) -> Sửa:",
                type: "text",
                answer: "People think education is important. Moreover, it helps society"
            },
            {
                question: "Bài 2 - Câu 2: 'The policy failed. Because the funding was limited.' (Không để Because đầu câu đơn lẻ trong Academic) -> Nối câu:",
                type: "text",
                answer: "The policy failed because the funding was limited"
            },
            {
                question: "Bài 2 - Câu 3: 'Costs increased, so therefore access declined.' (Thừa từ) -> Sửa:",
                type: "text",
                answer: "Costs increased; therefore, access declined" // hoặc bỏ therefore
            },
            {
                question: "Bài 2 - Câu 4: 'Education improves skills. For example students get jobs.' (Thiếu dấu phẩy) -> Sửa:",
                type: "text",
                answer: "Education improves skills. For example, students get jobs"
            },
            {
                question: "Bài 2 - Câu 5: 'Technology helps learning. But it also causes problems.' (Tránh But đầu câu) -> Dùng However:",
                type: "text",
                answer: "Technology helps learning. However, it also causes problems"
            },

            // --- BÀI 3: TÁI CẤU TRÚC ĐOẠN VĂN (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: Gộp câu dùng 'Although': 'Education is expensive. It offers long-term benefits.'",
                type: "text",
                answer: "Although education is expensive, it offers long-term benefits"
            },
            {
                question: "Bài 3 - Câu 2: Gộp câu dùng 'While': 'Online learning is flexible. It lacks face-to-face interaction.'",
                type: "text",
                answer: "While online learning is flexible, it lacks face-to-face interaction"
            },
            {
                question: "Bài 3 - Câu 3: Gộp câu dùng 'As a result': 'The government increased funding. Access improved.'",
                type: "text",
                answer: "The government increased funding; as a result, access improved"
            },

            // --- BÀI 4: REFERENCE & SUBSTITUTION ---
            {
                question: "Bài 4 - Câu 1: Thay thế từ lặp: 'Public universities are affordable. Private universities are costly.' -> ...Private ___ are costly.",
                type: "text",
                answer: "ones"
            },
            {
                question: "Bài 4 - Câu 2: Thay thế từ lặp: 'The policy caused problems. The problems affected students.' -> ...___ problems affected students.",
                type: "text",
                answer: "These" // hoặc Such
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Education ___ to social mobility. (contributes / leads)",
                type: "choice",
                options: ["contributes", "leads"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Rising costs ___ reduced access. (lead to / result)",
                type: "choice",
                options: ["lead to", "result"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: This is a key ___ in policy design. (factor / effect)",
                type: "choice",
                options: ["factor", "effect"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: There is clear ___ to support this view. (evidence / fact)",
                type: "choice",
                options: ["evidence", "fact"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: The ___ of the reform was positive. (outcome / trend)",
                type: "choice",
                options: ["outcome", "trend"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Governments should make education a ___. (priority / balance)",
                type: "choice",
                options: ["priority", "balance"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: A ___ approach is required. (coherent / logic)",
                type: "choice",
                options: ["coherent", "logic"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: These changes had a ___ impact. (significant / sign)",
                type: "choice",
                options: ["significant", "sign"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'However' để thể hiện sự đối lập.",
                type: "open",
                answer: "I wanted to go out; however, it started raining heavily."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'Therefore' để thể hiện nguyên nhân - kết quả.",
                type: "open",
                answer: "He studied very hard; therefore, he passed the exam with flying colors."
            }
        ]
    },
    {
        id: 26,
        title: "Ngày 26: Paraphrasing (Diễn Đạt Lại) - Kỹ Năng Sống Còn Band 7+",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - BAND 7.0 ---
            { word: "illustrate", type: "v", ipa: "/ˈɪləstreɪt/", meaning: "minh họa, cho thấy (Task 1)", context: "Biểu đồ, số liệu", example: "The chart illustrates the trends in tourism." },
            { word: "demonstrate", type: "v", ipa: "/ˈdemənstreɪt/", meaning: "chứng minh, thể hiện", context: "Luận điểm, dữ liệu", example: "The study demonstrates a link between diet and health." },
            { word: "indicate", type: "v", ipa: "/ˈɪndɪkeɪt/", meaning: "chỉ ra, cho thấy", context: "Số liệu, dấu hiệu", example: "The figures indicate a sharp rise in sales." },
            { word: "reflect", type: "v", ipa: "/rɪˈflekt/", meaning: "phản ánh", context: "Xu hướng, thực tế", example: "The data reflects the economic downturn." },
            { word: "constitute", type: "v", ipa: "/ˈkɑːnstɪtuːt/", meaning: "cấu thành, tạo thành", context: "Tỷ lệ phần trăm", example: "Women constitute 50% of the workforce." },
            { word: "account for", type: "v", ipa: "/əˈkaʊnt fɔːr/", meaning: "chiếm (tỷ lệ), giải thích", context: "Task 1 (Pie chart)", example: "Oil accounts for 30% of energy consumption." },
            { word: "represent", type: "v", ipa: "/ˌreprɪˈzent/", meaning: "đại diện cho, tương ứng với", context: "Số liệu", example: "This figure represents a significant increase." },
            { word: "experience", type: "v", ipa: "/ɪkˈspɪəriəns/", meaning: "trải qua (xu hướng)", context: "Tăng/giảm", example: "The country experienced a period of growth." },
            { word: "undergo", type: "v", ipa: "/ˌʌndərˈɡoʊ/", meaning: "trải qua (sự thay đổi lớn)", context: "Thay đổi, cải cách", example: "The system underwent major changes." },
            { word: "contribute", type: "v", ipa: "/kənˈtrɪbjuːt/", meaning: "đóng góp (dẫn đến)", context: "Nguyên nhân", example: "Stress contributes to health problems." },
            { word: "result in", type: "v", ipa: "/rɪˈzʌlt ɪn/", meaning: "dẫn đến", context: "Kết quả", example: "The policy resulted in lower costs." },
            { word: "lead to", type: "v", ipa: "/liːd tuː/", meaning: "gây ra, dẫn tới", context: "Hệ quả", example: "Poor planning led to failure." },
            { word: "pose", type: "v", ipa: "/poʊz/", meaning: "đặt ra (vấn đề/thách thức)", context: "Vấn đề tiêu cực", example: "Pollution poses a threat to wildlife." },
            { word: "alleviate", type: "v", ipa: "/əˈliːvieɪt/", meaning: "làm giảm nhẹ", context: "Vấn đề, áp lực", example: "Measures to alleviate traffic congestion." },
            { word: "exert", type: "v", ipa: "/ɪɡˈzɜːrt/", meaning: "gây ra (áp lực/ảnh hưởng)", context: "Tác động", example: "Parents exert a strong influence on children." },

            // --- B. DANH TỪ (NOUNS) - BAND 7.0 ---
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Task 1", example: "There was an upward trend in sales." },
            { word: "figure", type: "n", ipa: "/ˈfɪɡjər/", meaning: "số liệu", context: "Thay thế cho 'number'", example: "The figure for Japan increased slightly." },
            { word: "proportion", type: "n", ipa: "/prəˈpɔːrʃn/", meaning: "tỷ lệ (phần trăm)", context: "Task 1", example: "The proportion of students rose." },
            { word: "impact", type: "n", ipa: "/ˈɪmpækt/", meaning: "tác động", context: "Kết quả", example: "The environmental impact is severe." },
            { word: "factor", type: "n", ipa: "/ˈfæktər/", meaning: "yếu tố", context: "Nguyên nhân", example: "Cost is a major factor." },
            { word: "issue", type: "n", ipa: "/ˈɪʃuː/", meaning: "vấn đề", context: "Chủ đề bàn luận", example: "This is a complex issue." },
            { word: "pressure", type: "n", ipa: "/ˈpreʃər/", meaning: "áp lực", context: "Tinh thần, công việc", example: "Students face academic pressure." },
            { word: "concern", type: "n", ipa: "/kənˈsɜːrn/", meaning: "mối lo ngại", context: "Xã hội", example: "There is growing concern about crime." },
            { word: "growth", type: "n", ipa: "/ɡroʊθ/", meaning: "sự tăng trưởng", context: "Kinh tế, số liệu", example: "Economic growth slowed down." },
            { word: "decline", type: "n", ipa: "/dɪˈklaɪn/", meaning: "sự sụt giảm", context: "Số liệu", example: "A sharp decline in profits." },
            { word: "variation", type: "n", ipa: "/ˌveriˈeɪʃn/", meaning: "sự biến động, khác biệt", context: "Task 1", example: "There were significant variations in price." },
            { word: "distribution", type: "n", ipa: "/ˌdɪstrɪˈbjuːʃn/", meaning: "sự phân bố", context: "Dân số, tài nguyên", example: "The distribution of wealth is uneven." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 7.0 ---
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Thay đổi lớn", example: "A significant improvement." },
            { word: "considerable", type: "adj", ipa: "/kənˈsɪdərəbl/", meaning: "đáng kể", context: "Số lượng lớn", example: "A considerable amount of time." },
            { word: "gradual", type: "adj", ipa: "/ˈɡrædʒuəl/", meaning: "dần dần", context: "Thay đổi chậm", example: "A gradual increase." },
            { word: "sharp", type: "adj", ipa: "/ʃɑːrp/", meaning: "mạnh, đột ngột", context: "Thay đổi nhanh", example: "A sharp drop in temperature." },
            { word: "notable", type: "adj", ipa: "/ˈnoʊtəbl/", meaning: "đáng chú ý", context: "Điểm nổi bật", example: "A notable difference." },
            { word: "relatively", type: "adv", ipa: "/ˈrelətɪvli/", meaning: "tương đối", context: "So sánh", example: "The test was relatively easy." }
        ],
        grammar: {
            title: "PARAPHRASING (DIỄN ĐẠT LẠI) - KỸ NĂNG BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Paraphrasing không chỉ là thay từ đồng nghĩa (Synonyms) mà là thay đổi cấu trúc câu một cách linh hoạt để giữ nguyên ý nghĩa.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. 5 TRỤ CỘT PARAPHRASING</h4>
                        <ul style="padding-left:20px;">
                            <li><b>A. Từ đồng nghĩa (Synonyms):</b> increase → rise, grow, expand.</li>
                            <li><b>B. Loại từ (Word Class):</b> invest (v) → investment (n).</li>
                            <li><b>C. Cấu trúc (Structure):</b> Active ↔ Passive.</li>
                            <li><b>D. Góc nhìn (Viewpoint):</b> Students face pressure → There is pressure on students.</li>
                            <li><b>E. Tham chiếu (Reference):</b> This issue, Such measures.</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; background:#ffebee; padding:10px; border-radius:5px;">
                        <b>⚠️ TRÁNH LỖI "FAKE PARAPHRASE":</b><br>
                        - Dùng từ "đao to búa lớn" nhưng sai ngữ cảnh (Ex: very crucially important).<br>
                        - Thay từ làm đổi nghĩa gốc.<br>
                        - Câu văn bị cứng, thiếu tự nhiên.
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">2. KỸ THUẬT NÂNG CAO (BAND 7.5+)</h4>
                        <p><b>A. Condensing (Nén ý):</b><br>
                        <i>People are worried about the environment.</i><br>
                        → <i>There is <b>growing environmental concern</b>.</i></p>
                        
                        <p><b>B. Expansion (Mở rộng):</b><br>
                        <i>Education is expensive.</i><br>
                        → <i>Education often involves <b>substantial financial costs</b>.</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "Online education is widely regarded as a flexible learning method.",
            "There has been a rapid rise in the cost of living.",
            "The government implemented a new policy to alleviate poverty.",
            "This chart illustrates the variations in temperature over a year.",
            "Students are currently facing significant academic pressure."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN PARAPHRASE ĐÚNG (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Chọn câu paraphrase tốt nhất cho: 'Education is important.'",
                type: "choice",
                options: ["Education is very huge important.", "Education is a significant factor in personal development."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Chọn câu paraphrase tốt nhất cho: 'Costs increased rapidly.'",
                type: "choice",
                options: ["There was a rapid rise in costs.", "Costs made a quick up."],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: Chọn câu paraphrase tốt nhất cho: 'Students face pressure.'",
                type: "choice",
                options: ["Students are under pressure.", "Students meet pressure face to face."],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: Chọn câu paraphrase tốt nhất cho: 'People think the policy failed.'",
                type: "choice",
                options: ["The policy is thought to be bad.", "The policy is believed to have failed."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 5: Chọn câu paraphrase tốt nhất cho: 'Online learning is flexible.'",
                type: "choice",
                options: ["Online learning allows flexibility.", "Online learning is flexibility."],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: Chọn câu paraphrase tốt nhất cho: 'The number fell.'",
                type: "choice",
                options: ["The number declined.", "The number went downly."],
                answer: 0
            },

            // --- BÀI 2: PARAPHRASE TỪNG CÂU (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'People believe online learning is effective.' -> Paraphrase dùng Passive (It is...):",
                type: "text",
                answer: "It is believed that online learning is effective"
            },
            {
                question: "Bài 2 - Câu 2: 'The government invested more in education.' -> Paraphrase dùng Noun (Investment): There was an...",
                type: "text",
                answer: "increase in government investment in education" // Hoặc "There was more investment..."
            },
            {
                question: "Bài 2 - Câu 3: 'Students face increasing academic pressure.' -> Paraphrase: Students are under...",
                type: "text",
                answer: "increasing academic pressure"
            },
            {
                question: "Bài 2 - Câu 4: 'Costs rose significantly last year.' -> Paraphrase dùng Noun: There was a...",
                type: "text",
                answer: "significant rise in costs last year"
            },
            {
                question: "Bài 2 - Câu 5: 'Many people are concerned about inequality.' -> Paraphrase dùng Noun Phrase: There is...",
                type: "text",
                answer: "growing concern about inequality"
            },
            {
                question: "Bài 2 - Câu 6: 'Technology has changed the way people learn.' -> Paraphrase: The way people learn...",
                type: "text",
                answer: "has been changed by technology"
            },

            // --- BÀI 3: ĐỔI CẤU TRÚC (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: (Passive) 'People think this solution is practical.' -> It is...",
                type: "text",
                answer: "thought that this solution is practical"
            },
            {
                question: "Bài 3 - Câu 2: (Nominalisation) 'The government reduced unemployment.' -> The government achieved a...",
                type: "text",
                answer: "reduction in unemployment"
            },
            {
                question: "Bài 3 - Câu 3: (Substitution) 'The changes affected students. The changes also affected teachers.' -> The changes affected students and...",
                type: "text",
                answer: "also affected teachers" // Hoặc dùng "they"
            },
            {
                question: "Bài 3 - Câu 4: (Condensing) 'People are worried about the environment.' -> There is...",
                type: "text",
                answer: "environmental concern"
            },
            {
                question: "Bài 3 - Câu 5: (Viewpoint) 'Students lack motivation.' -> There is a...",
                type: "text",
                answer: "lack of motivation among students"
            },

            // --- BÀI 4: SỬA LỖI FAKE PARAPHRASE (TEXT INPUT) ---
            {
                question: "Bài 4 - Câu 1: 'Education is very crucially important.' (Lặp từ) -> Sửa:",
                type: "text",
                answer: "Education is crucial" // hoặc very important
            },
            {
                question: "Bài 4 - Câu 2: 'There was an enhancement of cost.' (Sai từ) -> Sửa (dùng increase/rise):",
                type: "text",
                answer: "There was an increase in cost"
            },
            {
                question: "Bài 4 - Câu 3: 'Students face many pressures situation.' (Thừa từ) -> Sửa:",
                type: "text",
                answer: "Students face a lot of pressure"
            },
            {
                question: "Bài 4 - Câu 4: 'The policy was successed.' (Sai loại từ) -> Sửa:",
                type: "text",
                answer: "The policy was successful" // hoặc succeeded
            },
            {
                question: "Bài 4 - Câu 5: 'People have concern to the environment.' (Sai giới từ) -> Sửa:",
                type: "text",
                answer: "People have concern for the environment" // hoặc about
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: The chart ___ changes over time. (illustrates / accounts)",
                type: "choice",
                options: ["illustrates", "accounts"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: This factor ___ economic growth. (contributes / affects)",
                type: "choice",
                options: ["affects", "contributes"], // affect sth, contribute TO sth
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: There was a ___ decline in numbers. (sharp / pose)",
                type: "choice",
                options: ["sharp", "pose"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Education plays a key ___ in development. (role / figure)",
                type: "choice",
                options: ["role", "figure"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Students ___ high levels of pressure. (experience / exert)",
                type: "choice",
                options: ["experience", "exert"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Costs increased at a ___ pace. (gradual / sharp)",
                type: "choice",
                options: ["gradual", "sharp"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: These figures ___ regional differences. (reflect / lead)",
                type: "choice",
                options: ["reflect", "lead"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Technology has a ___ impact on learning. (significant / significance)",
                type: "choice",
                options: ["significant", "significance"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: Environmental ___ are growing. (concerns / impacts)",
                type: "choice",
                options: ["concerns", "impacts"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: Income ___ varies across regions. (distribution / trend)",
                type: "choice",
                options: ["distribution", "trend"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Paraphrase câu mở bài Task 2 sau: 'Some people think online education is better than traditional education.'",
                type: "open",
                answer: "It is often argued that online learning offers more advantages compared to traditional classroom methods."
            },
            {
                question: "Bài 7: Paraphrase câu mô tả số liệu: 'The price increased significantly in 2020.'",
                type: "open",
                answer: "There was a significant increase in the price in 2020."
            }
        ]
    },
    {
        id: 27,
        title: "Ngày 27: Error Analysis (Phân Tích & Sửa Lỗi) - Tư Duy Giám Khảo Band 7+",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - SỬA LỖI & TINH CHỈNH ---
            { word: "identify", type: "v", ipa: "/aɪˈdentɪfaɪ/", meaning: "xác định, nhận diện (lỗi)", context: "Lỗi sai, vấn đề", example: "It is important to identify common errors." },
            { word: "rectify", type: "v", ipa: "/ˈrektɪfaɪ/", meaning: "sửa chữa (lỗi nghiêm trọng)", context: "Tình huống, sai sót", example: "Mistakes must be rectified immediately." },
            { word: "eliminate", type: "v", ipa: "/ɪˈlɪmɪneɪt/", meaning: "loại bỏ", context: "Lỗi thừa, sự không cần thiết", example: "Eliminate unnecessary words to improve clarity." },
            { word: "revise", type: "v", ipa: "/rɪˈvaɪz/", meaning: "chỉnh sửa, xem lại", context: "Bài viết, kế hoạch", example: "Students should revise their essays carefully." },
            { word: "refine", type: "v", ipa: "/rɪˈfaɪn/", meaning: "tinh chỉnh, làm tốt hơn", context: "Câu văn, ý tưởng", example: "Refine your arguments to make them stronger." },
            { word: "clarify", type: "v", ipa: "/ˈklærəfaɪ/", meaning: "làm rõ", context: "Ý nghĩa, sự mơ hồ", example: "Please clarify your point." },
            { word: "distort", type: "v", ipa: "/dɪˈstɔːrt/", meaning: "làm sai lệch", context: "Ý nghĩa, sự thật", example: "This translation distorts the original meaning." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Độ chính xác, ý nghĩa", example: "Maintain a formal tone throughout the essay." },
            { word: "justify", type: "v", ipa: "/ˈdʒʌstɪfaɪ/", meaning: "biện minh, giải thích hợp lý", context: "Lựa chọn từ, ý kiến", example: "Can you justify your choice of words?" },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Chất lượng, hiệu quả", example: "Evaluate the effectiveness of the solution." },
            { word: "verify", type: "v", ipa: "/ˈverɪfaɪ/", meaning: "kiểm chứng, xác minh", context: "Thông tin, dữ liệu", example: "Always verify your sources." },
            { word: "adjust", type: "v", ipa: "/əˈdʒʌst/", meaning: "điều chỉnh", context: "Cấu trúc, từ ngữ", example: "Adjust the sentence structure for better flow." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "xử lý, giải quyết", context: "Lỗi sai, vấn đề", example: "The feedback addresses key weaknesses." },
            { word: "avoid", type: "v", ipa: "/əˈvɔɪd/", meaning: "tránh", context: "Lỗi lặp, sự mơ hồ", example: "Avoid using informal language." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm", context: "Số lượng lỗi", example: "Proofreading helps reduce errors." },
            { word: "strengthen", type: "v", ipa: "/ˈstreŋθn/", meaning: "củng cố", context: "Lập luận, cấu trúc", example: "Use evidence to strengthen your argument." },

            // --- B. DANH TỪ (NOUNS) - TIÊU CHÍ CHẤM ĐIỂM ---
            { word: "error", type: "n", ipa: "/ˈerər/", meaning: "lỗi", context: "Ngữ pháp, dùng từ", example: "Grammatical errors can lower your score." },
            { word: "accuracy", type: "n", ipa: "/ˈækjərəsi/", meaning: "độ chính xác", context: "Ngữ pháp, thông tin", example: "Accuracy is key in IELTS Writing." },
            { word: "clarity", type: "n", ipa: "/ˈklærəti/", meaning: "độ rõ ràng", context: "Diễn đạt", example: "Clarity is more important than complexity." },
            { word: "logic", type: "n", ipa: "/ˈlɑːdʒɪk/", meaning: "tính logic", context: "Mạch văn", example: "The logic of the paragraph is flawed." },
            { word: "consistency", type: "n", ipa: "/kənˈsɪstənsi/", meaning: "tính nhất quán", context: "Quan điểm, thì", example: "Maintain consistency in verb tenses." },
            { word: "collocation", type: "n", ipa: "/ˌkɑːləˈkeɪʃn/", meaning: "kết hợp từ", context: "Tự nhiên", example: "Using wrong collocations sounds unnatural." },
            { word: "structure", type: "n", ipa: "/ˈstrʌktʃər/", meaning: "cấu trúc", context: "Câu, đoạn văn", example: "Vary your sentence structure." },
            { word: "meaning", type: "n", ipa: "/ˈmiːnɪŋ/", meaning: "ý nghĩa", context: "Nội dung", example: "The meaning should be clear." },
            { word: "precision", type: "n", ipa: "/prɪˈsɪʒn/", meaning: "độ chuẩn xác", context: "Từ vựng", example: "Precision in vocabulary is rewarded." },
            { word: "revision", type: "n", ipa: "/rɪˈvɪʒn/", meaning: "sự chỉnh sửa", context: "Bài viết", example: "Make necessary revisions before submitting." },
            { word: "feedback", type: "n", ipa: "/ˈfiːdbæk/", meaning: "phản hồi", context: "Đánh giá", example: "Constructive feedback helps you improve." },
            { word: "guideline", type: "n", ipa: "/ˈɡaɪdlaɪn/", meaning: "hướng dẫn", context: "Quy tắc", example: "Follow the guidelines strictly." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - ĐÁNH GIÁ ---
            { word: "accurate", type: "adj", ipa: "/ˈækjərət/", meaning: "chính xác", context: "Thông tin, ngữ pháp", example: "Ensure that your data is accurate." },
            { word: "clear", type: "adj", ipa: "/klɪər/", meaning: "rõ ràng", context: "Ý tưởng", example: "Your main point must be clear." },
            { word: "coherent", type: "adj", ipa: "/koʊˈhɪrənt/", meaning: "mạch lạc", context: "Bài viết", example: "The essay is well-organized and coherent." },
            { word: "appropriate", type: "adj", ipa: "/əˈproʊpriət/", meaning: "phù hợp", context: "Ngữ cảnh, văn phong", example: "Use appropriate vocabulary for the topic." },
            { word: "misleading", type: "adj", ipa: "/ˌmɪsˈliːdɪŋ/", meaning: "gây hiểu lầm", context: "Thông tin", example: "This sentence is misleading." },
            { word: "systematically", type: "adv", ipa: "/ˌsɪstəˈmætɪkli/", meaning: "một cách có hệ thống", context: "Kiểm tra, làm việc", example: "Check your work systematically." }
        ],
        grammar: {
            title: "ERROR ANALYSIS (PHÂN TÍCH LỖI) - BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">IELTS không chỉ chấm cái bạn viết đúng, mà còn trừ điểm cái bạn viết sai. Kỹ năng tự sửa lỗi (Self-correction) là chìa khóa để lên Band 7+.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. THỨ TỰ ƯU TIÊN SỬA LỖI</h4>
                        <ol style="padding-left:20px;">
                            <li><b>Meaning/Logic:</b> Sai nghĩa là lỗi nặng nhất.</li>
                            <li><b>Grammar:</b> Sai thì, cấu trúc câu.</li>
                            <li><b>Lexical:</b> Sai collocation, dùng từ không chuẩn.</li>
                            <li><b>Cohesion:</b> Liên kết lỏng lẻo, lặp từ.</li>
                        </ol>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #d32f2f; padding-left: 15px;">
                        <h4 style="color: #d32f2f; margin: 0;">2. 6 NHÓM LỖI CHÍ TỬ</h4>
                        <p><b>A. Lỗi Thì (Tense):</b> Mốc thời gian quá khứ nhưng chia hiện tại.<br>
                        ❌ <i>Last year, costs increase.</i> -> ✅ <i>increased</i></p>
                        
                        <p><b>B. Lỗi Chủ-Vị (S-V Agreement):</b> Chủ ngữ số nhiều chia số ít.<br>
                        ❌ <i>Students who studies...</i> -> ✅ <i>study</i></p>
                        
                        <p><b>C. Lỗi Modal (Chắc chắn thái quá):</b><br>
                        ❌ <i>This will solve the problem.</i> -> ✅ <i>This <b>may</b> help solve...</i></p>
                        
                        <p><b>D. Lỗi Collocation (Kết hợp từ sai):</b><br>
                        ❌ <i>Make an improvement.</i> -> ✅ <i>Make an improvement</i> (Sai) -> ✅ <i><b>Lead to</b> an improvement.</i></p>
                        
                        <p><b>E. Lỗi Reference (Mơ hồ):</b><br>
                        ❌ <i>This is important.</i> -> ✅ <i>This <b>issue</b> is important.</i></p>
                    </div>

                    <div style="margin-top:20px; background:#e8f5e9; padding:10px; border-radius:5px;">
                        <b>💡 CHIẾN LƯỢC SỬA LỖI:</b><br>
                        Đừng chỉ vá lỗi (fix errors). Hãy <b>viết lại câu (rewrite)</b> để cấu trúc gãy gọn hơn và tránh hoàn toàn cái bẫy cũ.
                    </div>
                </div>
            `
        },
        speaking: [
            "Identifying common errors helps students improve faster.",
            "Teachers should providing clear feedback to learners.",
            "This solution may not be feasible in the long run.",
            "There is a significant difference between the two charts.",
            "The government must address this issue immediately."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN LỖI (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Tìm lỗi trong câu: 'Last decade, online learning increase rapidly.'",
                type: "choice",
                options: ["Lỗi Thì (Tense)", "Lỗi Collocation", "Lỗi Modal"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: Tìm lỗi: 'Students who studies abroad gain experience.'",
                type: "choice",
                options: ["Lỗi Chủ-Vị (Subject-Verb)", "Lỗi Reference", "Lỗi Logic"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: Tìm lỗi: 'This solution will solve the problem completely.' (Quá khẳng định)",
                type: "choice",
                options: ["Lỗi Modal (Tone)", "Lỗi Thì", "Lỗi Cấu trúc"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: Tìm lỗi: 'The policy make an improvement in access.'",
                type: "choice",
                options: ["Lỗi Collocation (make improvement)", "Lỗi Thì", "Lỗi Reference"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: Tìm lỗi: 'This is important because this affects many people.'",
                type: "choice",
                options: ["Lỗi Reference (This mơ hồ)", "Lỗi Modal", "Lỗi Chủ-Vị"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: Tìm lỗi: 'Education is important. Education is important for society.'",
                type: "choice",
                options: ["Lỗi Lặp (Repetition)", "Lỗi Thì", "Lỗi Logic"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: Tìm lỗi: 'People have to be tired after the exam.' (Suy luận sai)",
                type: "choice",
                options: ["Lỗi Modal (Must vs Have to)", "Lỗi Thì", "Lỗi Cấu trúc"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: Tìm lỗi: 'The results are discuss widely.'",
                type: "choice",
                options: ["Lỗi Bị động (Passive)", "Lỗi Modal", "Lỗi Reference"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'The government should to invest more.' -> Sửa lỗi:",
                type: "text",
                answer: "The government should invest more"
            },
            {
                question: "Bài 2 - Câu 2: 'There has many reasons for this trend.' -> Sửa lỗi (There are...):",
                type: "text",
                answer: "There are many reasons for this trend"
            },
            {
                question: "Bài 2 - Câu 3: 'Costs increased, so therefore access declined.' -> Sửa lỗi (Bỏ so):",
                type: "text",
                answer: "Costs increased; therefore, access declined"
            },
            {
                question: "Bài 2 - Câu 4: 'The data is reliable because they were collected carefully.' -> Sửa lỗi (Data số nhiều/ít? Thường dùng it cho data tập hợp):",
                type: "text",
                answer: "The data is reliable because it was collected carefully"
            },
            {
                question: "Bài 2 - Câu 5: 'Online learning gives convenience to students.' -> Sửa lỗi (provides/offers):",
                type: "text",
                answer: "Online learning provides convenience to students" // hoặc offers
            },
            {
                question: "Bài 2 - Câu 6: 'Students face many pressures situation.' -> Sửa lỗi (pressure là danh từ không đếm được hoặc áp lực):",
                type: "text",
                answer: "Students face a lot of pressure" // hoặc stressful situations
            },
            {
                question: "Bài 2 - Câu 7: 'The plan must have succeed last year.' -> Sửa lỗi (V3):",
                type: "text",
                answer: "The plan must have succeeded last year"
            },
            {
                question: "Bài 2 - Câu 8: 'This policy is effective, on the other hand it is costly.' -> Sửa lỗi (Dùng However/But):",
                type: "text",
                answer: "This policy is effective; however, it is costly"
            },

            // --- BÀI 3: TÁI VIẾT NÂNG BAND (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'People think education is important.' -> Viết lại (It is widely...):",
                type: "text",
                answer: "It is widely acknowledged that education is important" // hoặc recognized
            },
            {
                question: "Bài 3 - Câu 2: 'Students face pressure and students face stress.' -> Viết lại (tránh lặp): Students face...",
                type: "text",
                answer: "both pressure and stress"
            },
            {
                question: "Bài 3 - Câu 3: 'The government invested more, so access improved.' -> Viết lại (As a result): The government invested more...",
                type: "text",
                answer: "and as a result, access improved"
            },
            {
                question: "Bài 3 - Câu 4: 'Technology will change education completely.' -> Viết lại (An toàn hơn - May/Might): Technology...",
                type: "text",
                answer: "may change education completely"
            },
            {
                question: "Bài 3 - Câu 5: 'This is a problem. This affects students.' -> Viết lại (Relative clause): This problem...",
                type: "text",
                answer: "affects students" // Hoặc This is a problem which affects students
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Students should ___ common mistakes. (identify / distort)",
                type: "choice",
                options: ["identify", "distort"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: This change ___ the original meaning. (distorts / clarifies)",
                type: "choice",
                options: ["distorts", "clarifies"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Errors must be ___ before submission. (rectified / justified)",
                type: "choice",
                options: ["rectified", "justified"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Feedback helps improve ___. (accuracy / error)",
                type: "choice",
                options: ["accuracy", "error"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: The argument lacks ___. (logic / revision)",
                type: "choice",
                options: ["logic", "revision"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: This phrasing is ___ and needs revision. (misleading / accurate)",
                type: "choice",
                options: ["misleading", "accurate"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Writers should check ___ carefully. (collocations / revisions)",
                type: "choice",
                options: ["collocations", "revisions"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Minor edits can ___ clarity. (improve / distort)",
                type: "choice",
                options: ["improve", "distort"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: The sentence was revised ___. (systematically / misleadingly)",
                type: "choice",
                options: ["systematically", "misleadingly"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: Clear ___ guide effective writing. (guidelines / errors)",
                type: "choice",
                options: ["guidelines", "errors"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu mô tả một lỗi sai phổ biến mà bạn hay mắc phải.",
                type: "open",
                answer: "I often forget to check subject-verb agreement when writing quickly."
            },
            {
                question: "Bài 7: Viết lại câu sau để tránh lỗi tuyệt đối hóa: 'Money solves all problems.'",
                type: "open",
                answer: "Money can help solve many problems."
            }
        ]
    },
    {
        id: 28,
        title: "Ngày 28: Writing Task 2 - Idea Generation & Argument Structure (Tư Duy & Lập Luận)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - ARGUMENTATION ---
            { word: "argue", type: "v", ipa: "/ˈɑːrɡjuː/", meaning: "lập luận, cho rằng", context: "Nêu quan điểm", example: "Many scholars argue that funding is insufficient." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "giữ quan điểm (kiên định)", context: "Khẳng định", example: "He maintains that the policy is flawed." },
            { word: "contend", type: "v", ipa: "/kənˈtend/", meaning: "cho rằng (trang trọng)", context: "Tranh luận", example: "Critics contend that the law is unfair." },
            { word: "highlight", type: "v", ipa: "/ˈhaɪlaɪt/", meaning: "làm nổi bật", context: "Nhấn mạnh vấn đề", example: "The report highlights the need for reform." },
            { word: "demonstrate", type: "v", ipa: "/ˈdemənstreɪt/", meaning: "chứng minh", context: "Dùng dẫn chứng", example: "Statistics demonstrate a clear trend." },
            { word: "justify", type: "v", ipa: "/ˈdʒʌstɪfaɪ/", meaning: "biện minh, chứng minh là đúng", context: "Lý do", example: "The results justify the high cost." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết (vấn đề)", context: "Solution essay", example: "We must address the root causes." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm nhẹ (tác động xấu)", context: "Solution essay", example: "Measures to mitigate environmental damage." },
            { word: "exacerbate", type: "v", ipa: "/ɪɡˈzæsərbeɪt/", meaning: "làm trầm trọng hơn", context: "Problem essay", example: "This policy may exacerbate social inequality." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", context: "Giải pháp", example: "Governments should prioritize healthcare." },
            { word: "allocate", type: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", context: "Tài nguyên/Ngân sách", example: "Funds should be allocated efficiently." },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Kết quả/Tác động", example: "It is hard to evaluate the long-term effects." },
            { word: "acknowledge", type: "v", ipa: "/əkˈnɒlɪdʒ/", meaning: "thừa nhận (mặt đối lập)", context: "Concession (Tuy nhiên...)", example: "I acknowledge that there are drawbacks." },
            { word: "counter", type: "v", ipa: "/ˈkaʊntər/", meaning: "phản biện, chống lại", context: "Rebuttal", example: "Effective arguments to counter this view." },
            { word: "propose", type: "v", ipa: "/prəˈpəʊz/", meaning: "đề xuất", context: "Solution", example: "Several solutions have been proposed." },
            { word: "sustain", type: "v", ipa: "/səˈsteɪn/", meaning: "duy trì", context: "Phát triển bền vững", example: "We cannot sustain this level of spending." },

            // --- B. DANH TỪ (NOUNS) - LẬP LUẬN ---
            { word: "argument", type: "n", ipa: "/ˈɑːrɡjumənt/", meaning: "lập luận", context: "Bài viết", example: "This is a convincing argument." },
            { word: "perspective", type: "n", ipa: "/pərˈspektɪv/", meaning: "góc nhìn, quan điểm", context: "Discussion essay", example: "From an economic perspective, it is beneficial." },
            { word: "justification", type: "n", ipa: "/ˌdʒʌstɪfɪˈkeɪʃn/", meaning: "sự biện minh, lý do chính đáng", context: "Opinion essay", example: "There is no justification for this behavior." },
            { word: "evidence", type: "n", ipa: "/ˈevɪdəns/", meaning: "bằng chứng", context: "Hỗ trợ luận điểm", example: "There is ample evidence to support this." },
            { word: "implication", type: "n", ipa: "/ˌɪmplɪˈkeɪʃn/", meaning: "hệ quả, ẩn ý", context: "Kết quả (sâu xa)", example: "Consider the social implications of this law." },
            { word: "drawback", type: "n", ipa: "/ˈdrɔːbæk/", meaning: "hạn chế, mặt trái", context: "Adv/Disadv essay", example: "One major drawback is the cost." },
            { word: "benefit", type: "n", ipa: "/ˈbenɪfɪt/", meaning: "lợi ích", context: "Adv/Disadv essay", example: "The benefits outweigh the drawbacks." },
            { word: "priority", type: "n", ipa: "/praɪˈɔːrəti/", meaning: "sự ưu tiên", context: "Giải pháp", example: "Education needs to be a top priority." },
            { word: "allocation", type: "n", ipa: "/ˌæləˈkeɪʃn/", meaning: "sự phân bổ", context: "Tài nguyên", example: "The allocation of resources is unfair." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự ràng buộc, hạn chế", context: "Khó khăn", example: "Financial constraints limit our options." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả", context: "Kết thúc", example: "We hope for a positive outcome." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Bối cảnh", example: "This is a worrying trend." },
            { word: "feasibility", type: "n", ipa: "/ˌfiːzəˈbɪləti/", meaning: "tính khả thi", context: "Giải pháp", example: "We questioned the feasibility of the plan." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 7+ ---
            { word: "substantial", type: "adj", ipa: "/səbˈstænʃl/", meaning: "đáng kể, to lớn", context: "Mức độ", example: "A substantial amount of money." },
            { word: "plausible", type: "adj", ipa: "/ˈplɔːzəbl/", meaning: "hợp lý, có vẻ đúng", context: "Lý do, giải thích", example: "A plausible explanation for the decline." },
            { word: "counterproductive", type: "adj", ipa: "/ˌkaʊntərprəˈdʌktɪv/", meaning: "phản tác dụng", context: "Kết quả xấu", example: "Ideally, strict rules are counterproductive." },
            { word: "sustainable", type: "adj", ipa: "/səˈsteɪnəbl/", meaning: "bền vững", context: "Phát triển", example: "Sustainable energy sources are needed." },
            { word: "notably", type: "adv", ipa: "/ˈnoʊtəbli/", meaning: "đáng chú ý là", context: "Dẫn chứng", example: "Notably, crime rates have fallen." },
            { word: "arguably", type: "adv", ipa: "/ˈɑːrɡjuəbli/", meaning: "có thể cho rằng", context: "Nhận định (Hedging)", example: "He is arguably the best player." }
        ],
        grammar: {
            title: "IDEA GENERATION & ARGUMENT STRUCTURE (BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Điểm Task 2 không chỉ nằm ở ngữ pháp, mà còn ở <b>Tư duy (Idea)</b> và <b>Cách phát triển ý (Development)</b>.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. KHUNG TẠO Ý NHANH (90 Giây/Body)</h4>
                        <p>Đừng nghĩ lan man, hãy đi theo quy trình:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Claim (Luận điểm):</b> 1 câu khẳng định rõ ràng.</li>
                            <li><b>Why (Lý do):</b> Tại sao điều đó đúng?</li>
                            <li><b>Example (Ví dụ):</b> Cụ thể hóa (không cần số liệu thật).</li>
                            <li><b>Result (Hệ quả):</b> Điều này dẫn đến cái gì?</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. MÔ HÌNH PHÁT TRIỂN: C.E.I</h4>
                        <p>Để đoạn văn có chiều sâu (Depth), hãy dùng:</p>
                        <p><b>Cause (Nguyên nhân)</b> &#8594; <b>Evidence (Dẫn chứng)</b> &#8594; <b>Impact (Tác động)</b></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. CÂN BẰNG LẬP LUẬN (BAND 7+)</h4>
                        <p><b>Concession (Thừa nhận):</b> <i>"Admittedly, online learning has drawbacks..."</i> (Công nhận mặt trái)</p>
                        <p><b>Rebuttal (Phản biện):</b> <i>"...However, these can be mitigated by self-discipline."</i> (Bác bỏ để bảo vệ quan điểm chính)</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "Many scholars argue that funding for the arts is unnecessary.",
            "This policy has several drawbacks that must be considered.",
            "Strong evidence is required to support this claim.",
            "Governments should prioritize education spending over defense.",
            "These measures may exacerbate social inequality."
        ],
        quiz: [
            // --- BÀI 1: PHÂN LOẠI ĐỀ (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Đề bài 'Do the advantages outweigh the disadvantages?' thuộc loại nào?",
                type: "choice",
                options: ["Opinion", "Discussion", "Advantage/Disadvantage"],
                answer: 2
            },
            {
                question: "Bài 1 - Câu 2: Đề bài 'To what extent do you agree or disagree?' thuộc loại nào?",
                type: "choice",
                options: ["Opinion", "Problem/Solution", "Cause/Effect"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: Đề bài 'What are the causes and solutions?' thuộc loại nào?",
                type: "choice",
                options: ["Discussion", "Problem/Solution", "Two-part Question"],
                answer: 1
            },

            // --- BÀI 2: CHUYỂN HÓA SPEAKING -> WRITING (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: Chuyển câu 'I think it's good' sang văn viết (dùng 'beneficial').",
                type: "text",
                answer: "It is arguably beneficial" // Hoặc "This is considered beneficial"
            },
            {
                question: "Bài 2 - Câu 2: Chuyển câu 'A lot of people have trouble' sang văn viết (dùng 'face challenges').",
                type: "text",
                answer: "Many people face significant challenges"
            },
            {
                question: "Bài 2 - Câu 3: Chuyển câu 'It's getting worse' sang văn viết (dùng 'exacerbate').",
                type: "text",
                answer: "The situation is exacerbating" // hoặc "The problem is being exacerbated"
            },
            {
                question: "Bài 2 - Câu 4: Chuyển câu 'There are some bad points' sang văn viết (dùng 'drawbacks').",
                type: "text",
                answer: "There are several drawbacks"
            },

            // --- BÀI 3: NÂNG BAND (REWRITE) ---
            {
                question: "Bài 3 - Câu 1: Nâng cấp câu 'Education is important.' -> Education plays a...",
                type: "text",
                answer: "pivotal role in society" // hoặc "crucial role"
            },
            {
                question: "Bài 3 - Câu 2: Nâng cấp câu 'Governments should do more.' -> Governments should...",
                type: "text",
                answer: "take more action" // hoặc "implement stricter measures"
            },
            {
                question: "Bài 3 - Câu 3: Nâng cấp câu 'Technology affects students.' -> Technology has a...",
                type: "text",
                answer: "profound impact on students" // hoặc "significant influence"
            },

            // --- BÀI 4: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 4 - Câu 1: Many scholars ___ that funding should be increased. (argue / tell)",
                type: "choice",
                options: ["argue", "tell"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 2: The proposal lacks long-term ___. (feasibility / feasible)",
                type: "choice",
                options: ["feasibility", "feasible"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 3: Rising costs place ___ on students. (constraints / constraint)",
                type: "choice",
                options: ["constraints", "constraint"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 4: The ___ of this trend are serious. (implications / implies)",
                type: "choice",
                options: ["implications", "implies"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 5: Resources must be ___ efficiently. (allocated / allocation)",
                type: "choice",
                options: ["allocated", "allocation"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 6: Ideally, strict rules are ___. (counterproductive / productive)",
                type: "choice",
                options: ["counterproductive", "productive"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 7: This argument is ___ supported by data. (notably / note)",
                type: "choice",
                options: ["notably", "note"],
                answer: 0
            },
            {
                question: "Bài 4 - Câu 8: We must ___ the root causes. (address / talk)",
                type: "choice",
                options: ["address", "talk"],
                answer: 0
            },

            // --- BÀI 5: WRITING MINI (CÂU HỎI MỞ) ---
            {
                question: "Bài 5: Viết 1 câu Thesis Statement (Câu luận đề) cho đề bài: 'Online learning đang thay thế học truyền thống. Bạn đồng ý hay không?'",
                type: "open",
                answer: "I partly agree that while online learning is convenient, it cannot fully replace the interactive nature of traditional classrooms."
            },
            {
                question: "Bài 5: Viết 1 câu Concession (Thừa nhận mặt trái) về việc đi du học.",
                type: "open",
                answer: "Admittedly, studying abroad can be expensive and culturally challenging."
            }
        ]
    },
    {
        id: 29,
        title: "Ngày 29: Intro & Conclusion (Mở & Kết) - Chiến Lược Band 7+",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - DẪN DẮT & LẬP LUẬN ---
            { word: "introduce", type: "v", ipa: "/ˌɪntrəˈduːs/", meaning: "giới thiệu", context: "Mục đích bài viết", example: "This essay introduces the main arguments." },
            { word: "outline", type: "v", ipa: "/ˈaʊtlaɪn/", meaning: "phác thảo, nêu sơ lược", context: "Cấu trúc bài", example: "This essay will outline the causes and solutions." },
            { word: "examine", type: "v", ipa: "/ɪɡˈzæmɪn/", meaning: "xem xét, phân tích", context: "Nội dung bài", example: "The following paragraphs examine the drawbacks." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "đề cập, giải quyết", context: "Vấn đề", example: "This essay addresses the issue of pollution." },
            { word: "argue", type: "v", ipa: "/ˈɑːrɡjuː/", meaning: "lập luận", context: "Thesis Statement", example: "This essay argues that technology is beneficial." },
            { word: "assert", type: "v", ipa: "/əˈsɜːrt/", meaning: "khẳng định (mạnh mẽ)", context: "Quan điểm", example: "I firmly assert that education is free." },
            { word: "contend", type: "v", ipa: "/kənˈtend/", meaning: "cho rằng (trang trọng)", context: "Tranh luận", example: "Some critics contend that the law is unjust." },
            { word: "highlight", type: "v", ipa: "/ˈhaɪlaɪt/", meaning: "làm nổi bật", context: "Vấn đề chính", example: "This essay highlights the need for reform." },
            { word: "emphasize", type: "v", ipa: "/ˈemfəsaɪz/", meaning: "nhấn mạnh", context: "Tầm quan trọng", example: "I emphasize the importance of soft skills." },
            { word: "acknowledge", type: "v", ipa: "/əkˈnɒlɪdʒ/", meaning: "thừa nhận (mặt đối lập)", context: "Concession", example: "I acknowledge that there are downsides." },
            { word: "summarize", type: "v", ipa: "/ˈsʌməraɪz/", meaning: "tóm tắt", context: "Kết bài", example: "To summarize, the benefits outweigh the costs." },
            { word: "conclude", type: "v", ipa: "/kənˈkluːd/", meaning: "kết luận", context: "Kết bài", example: "To conclude, prompt action is required." },
            { word: "reinforce", type: "v", ipa: "/ˌriːɪnˈfɔːrs/", meaning: "củng cố (luận điểm)", context: "Kết bài", example: "This reinforces the idea that health is wealth." },
            { word: "underscore", type: "v", ipa: "/ˌʌndərˈskɔːr/", meaning: "nhấn mạnh (mạnh hơn emphasize)", context: "Kết bài", example: "The study underscores the need for change." },
            { word: "suggest", type: "v", ipa: "/səˈdʒest/", meaning: "gợi ý", context: "Giải pháp", example: "This essay suggests several measures." },
            { word: "recommend", type: "v", ipa: "/ˌrekəˈmend/", meaning: "khuyến nghị", context: "Giải pháp/Kết bài", example: "It is recommended that the government intervene." },

            // --- B. DANH TỪ (NOUNS) - CẤU TRÚC BÀI VIẾT ---
            { word: "issue", type: "n", ipa: "/ˈɪʃuː/", meaning: "vấn đề (đang tranh luận)", context: "Intro", example: "The issue of climate change is pressing." },
            { word: "topic", type: "n", ipa: "/ˈtɒpɪk/", meaning: "chủ đề", context: "Intro", example: "This essay explores the topic of remote work." },
            { word: "debate", type: "n", ipa: "/dɪˈbeɪt/", meaning: "cuộc tranh luận", context: "Bối cảnh", example: "There is a heated debate about AI." },
            { word: "viewpoint", type: "n", ipa: "/ˈvjuːpɔɪnt/", meaning: "quan điểm", context: "Discussion Essay", example: "This essay will discuss both viewpoints." },
            { word: "argument", type: "n", ipa: "/ˈɑːrɡjumənt/", meaning: "lập luận", context: "Thân bài", example: "My main argument is based on economics." },
            { word: "position", type: "n", ipa: "/pəˈzɪʃn/", meaning: "lập trường", context: "Thesis", example: "My position is that taxes should be raised." },
            { word: "perspective", type: "n", ipa: "/pərˈspektɪv/", meaning: "góc nhìn", context: "Mở rộng", example: "From a global perspective, this is positive." },
            { word: "overview", type: "n", ipa: "/ˈoʊvərvjuː/", meaning: "tổng quan", context: "Task 1 / Intro", example: "The introduction provides an overview." },
            { word: "implication", type: "n", ipa: "/ˌɪmplɪˈkeɪʃn/", meaning: "hệ quả, ẩn ý", context: "Kết bài", example: "The social implications are serious." },
            { word: "summary", type: "n", ipa: "/ˈsʌməri/", meaning: "bản tóm tắt", context: "Kết bài", example: "In summary, the plan is feasible." },
            { word: "stance", type: "n", ipa: "/stæns/", meaning: "lập trường (vững chắc)", context: "Opinion Essay", example: "The author takes a firm stance against war." },
            { word: "context", type: "n", ipa: "/ˈkɒntekst/", meaning: "bối cảnh", context: "Intro", example: "In the context of modern society..." },
            { word: "scope", type: "n", ipa: "/skoʊp/", meaning: "phạm vi", context: "Giới hạn bài viết", example: "The scope of this essay is limited to the UK." },
            { word: "conclusion", type: "n", ipa: "/kənˈkluːʒn/", meaning: "kết luận", context: "Phần cuối", example: "In conclusion, hard work pays off." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - TÍNH CHẤT BÀI VIẾT ---
            { word: "overall", type: "adj", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung, tổng thể", context: "Task 1 Overview", example: "Overall, sales increased." },
            { word: "central", type: "adj", ipa: "/ˈsentrəl/", meaning: "cốt lõi, trung tâm", context: "Ý chính", example: "The central argument is about cost." },
            { word: "key", type: "adj", ipa: "/kiː/", meaning: "then chốt", context: "Yếu tố", example: "A key factor is education." },
            { word: "balanced", type: "adj", ipa: "/ˈbælənst/", meaning: "cân bằng", context: "Quan điểm", example: "This essay presents a balanced view." },
            { word: "clear", type: "adj", ipa: "/klɪər/", meaning: "rõ ràng", context: "Lập trường", example: "My opinion is clear from the start." },
            { word: "concise", type: "adj", ipa: "/kənˈsaɪs/", meaning: "súc tích, ngắn gọn", context: "Văn phong", example: "The conclusion should be concise." }
        ],
        grammar: {
            title: "INTRODUCTIONS & CONCLUSIONS - CHIẾN LƯỢC BAND 7+",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Mở bài (Intro) và Kết bài (Conclusion) là ấn tượng đầu tiên và cuối cùng của giám khảo. Band 7+ yêu cầu sự ngắn gọn, trực diện và trả lời đúng trọng tâm.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. INTRODUCTION: CÔNG THỨC 2 CÂU</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Câu 1 (Paraphrase):</b> Viết lại đề bài bằng từ vựng/cấu trúc khác. Tránh sáo ngữ <i>(Example: "Nowadays...")</i>.</li>
                            <li><b>Câu 2 (Thesis Statement):</b> Trả lời trực tiếp câu hỏi của đề (Nêu lập trường hoặc Định hướng bài viết).</li>
                        </ul>
                        <p style="background:#e3f2fd; padding:10px; border-radius:5px;">
                            <i>Ex: (1) The expansion of online education has transformed learning methods. (2) This essay argues that while it increases access, it also challenges interaction.</i>
                        </p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. THESIS STATEMENT THEO DẠNG ĐỀ</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Opinion:</b> "I firmly believe that..." / "This essay argues that..."</li>
                            <li><b>Discussion:</b> "This essay will discuss both views before presenting..."</li>
                            <li><b>Problem-Solution:</b> "This essay identifies key problems and proposes feasible solutions."</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. CONCLUSION: TỔNG HỢP (KHÔNG MỞ RỘNG)</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Restate Thesis:</b> Nhắc lại quan điểm (Paraphrase lại Thesis).</li>
                            <li><b>Synthesize:</b> Tóm tắt lý do chính (Main points).</li>
                            <li><b>Implication (Optional):</b> Hệ quả hoặc lời khuyên chung (Không đưa luận điểm mới).</li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "This essay introduces the issue of global warming.",
            "I firmly believe that the advantages outweigh the disadvantages.",
            "The following discussion examines both perspectives.",
            "In conclusion, a balanced approach is essential.",
            "The introduction provides a clear overview of the topic."
        ],
        quiz: [
            // --- BÀI 1: PHÂN TÍCH INTRO (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Câu nào là 'Thesis Statement' tốt cho dạng Opinion?",
                type: "choice",
                options: ["I will talk about education.", "This essay argues that free education is essential."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Câu mở bài nào là 'Paraphrase' tốt cho đề 'Traffic is a problem'?",
                type: "choice",
                options: ["Traffic is very bad nowadays.", "Traffic congestion has become a pressing concern in urban areas."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Lỗi nào cần tránh trong Conclusion?",
                type: "choice",
                options: ["Nhắc lại Thesis.", "Đưa ra ví dụ hoặc ý mới."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: Dạng đề Discussion cần Thesis như thế nào?",
                type: "choice",
                options: ["Chỉ nêu 1 phía tôi thích.", "Thông báo sẽ bàn luận cả 2 phía."],
                answer: 1
            },

            // --- BÀI 2: SỬA INTRO SAI BAND (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: Sửa câu sáo ngữ: 'In today’s modern world, education is very important.' -> Paraphrase:",
                type: "text",
                answer: "Education plays a pivotal role in contemporary society" // Đáp án mẫu
            },
            {
                question: "Bài 2 - Câu 2: Sửa Thesis yếu: 'I totally agree because it is good.' -> (Dùng 'beneficial'): I firmly believe that...",
                type: "text",
                answer: "this trend is highly beneficial"
            },
            {
                question: "Bài 2 - Câu 3: Sửa câu: 'This essay will talk about advantages.' -> (Dùng 'examine'): This essay will...",
                type: "text",
                answer: "examine the main advantages"
            },

            // --- BÀI 4: CONCLUSION LOGIC CHECK (TRẮC NGHIỆM) ---
            {
                question: "Bài 4 - Câu 1: Kết bài có nên copy y nguyên Mở bài không?",
                type: "choice",
                options: ["Có, để nhấn mạnh.", "Không, phải Paraphrase lại."],
                answer: 1
            },
            {
                question: "Bài 4 - Câu 2: Câu 'The government should therefore invest more' thuộc phần nào của Kết bài?",
                type: "choice",
                options: ["Restate Thesis", "Implication/Recommendation"],
                answer: 1
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: This essay ___ the main arguments. (outlines / says)",
                type: "choice",
                options: ["outlines", "says"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: The following discussion ___ both perspectives. (examines / looks)",
                type: "choice",
                options: ["examines", "looks"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Education is a ___ issue worldwide. (key / lock)",
                type: "choice",
                options: ["key", "lock"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: This debate has important ___. (implications / implies)",
                type: "choice",
                options: ["implications", "implies"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: The introduction provides an ___ of the topic. (overview / view)",
                type: "choice",
                options: ["overview", "view"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: The author ___ the need for reform. (emphasizes / tells)",
                type: "choice",
                options: ["emphasizes", "tells"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: A ___ approach is required. (balanced / balance)",
                type: "choice",
                options: ["balanced", "balance"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: The scope of this essay is ___ defined. (clearly / clear)",
                type: "choice",
                options: ["clearly", "clear"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu Thesis cho đề: 'Some people say history is important. Others say it is useless.' (Dạng Discussion)",
                type: "open",
                answer: "This essay will discuss both views before arguing that history provides essential lessons for the future."
            },
            {
                question: "Bài 7: Viết 1 câu Conclusion tóm tắt cho bài viết về lợi ích của việc đọc sách.",
                type: "open",
                answer: "In conclusion, reading not only enhances knowledge but also reduces stress, making it a valuable habit."
            }
        ]
    },

    {
        id: 30,
        title: "Ngày 30: Writing Task 1 - Overview & Trend Language (Xu Hướng & Tổng Quan)",
        vocab: [
            // --- A. ĐỘNG TỪ XU HƯỚNG (VERBS) - BAND 7.0 ---
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng", context: "Trung tính", example: "Sales increased steadily over the period." },
            { word: "rise", type: "v", ipa: "/raɪz/", meaning: "tăng", context: "Nội động từ (V2: rose)", example: "The temperature rose significantly." },
            { word: "grow", type: "v", ipa: "/ɡroʊ/", meaning: "tăng trưởng, phát triển", context: "Kinh tế, dân số", example: "The economy grew by 5%." },
            { word: "climb", type: "v", ipa: "/klaɪm/", meaning: "leo thang (tăng dần)", context: "Số liệu", example: "Prices climbed to a new high." },
            { word: "surge", type: "v", ipa: "/sɜːrdʒ/", meaning: "tăng vọt", context: "Tăng mạnh, đột ngột", example: "Demand surged during the festival." },
            { word: "soar", type: "v", ipa: "/sɔːr/", meaning: "bay vút lên (tăng rất mạnh)", context: "Giá cả, mức độ", example: "House prices soared in 2020." },
            { word: "decrease", type: "v", ipa: "/dɪˈkriːs/", meaning: "giảm", context: "Trung tính", example: "Unemployment decreased slightly." },
            { word: "fall", type: "v", ipa: "/fɔːl/", meaning: "giảm, rơi xuống", context: "V2: fell", example: "The rate fell to its lowest point." },
            { word: "decline", type: "v", ipa: "/dɪˈklaɪn/", meaning: "suy giảm", context: "Trang trọng", example: "Profit declined for the third year." },
            { word: "drop", type: "v", ipa: "/drɒp/", meaning: "giảm, tụt", context: "Nhanh/ngắn", example: "Attendance dropped sharply." },
            { word: "plunge", type: "v", ipa: "/plʌndʒ/", meaning: "lao dốc (giảm mạnh)", context: "Đột ngột", example: "Stock markets plunged yesterday." },
            { word: "stabilize", type: "v", ipa: "/ˈsteɪbəlaɪz/", meaning: "ổn định lại", context: "Sau khi biến động", example: "Prices stabilized after the crisis." },
            { word: "level off", type: "v", ipa: "/ˈlevl ɔːf/", meaning: "chững lại, đi ngang", context: "Sau khi tăng/giảm", example: "Growth leveled off in the last quarter." },
            { word: "plateau", type: "v", ipa: "/plæˈtoʊ/", meaning: "đạt trạng thái bình ổn (thường ở mức cao)", context: "Biểu đồ", example: "Sales reached a plateau in 2019." },
            { word: "fluctuate", type: "v", ipa: "/ˈflʌktʃueɪt/", meaning: "dao động", context: "Lên xuống thất thường", example: "Temperatures fluctuated between 20 and 30 degrees." },
            { word: "peak", type: "v", ipa: "/piːk/", meaning: "đạt đỉnh", context: "Điểm cao nhất", example: "Traffic peaks at 8 AM." },

            // --- B. DANH TỪ XU HƯỚNG (NOUNS) - BAND 7.0 ---
            { word: "increase", type: "n", ipa: "/ˈɪnkriːs/", meaning: "sự gia tăng", context: "There was an increase in...", example: "There was a steady increase in sales." },
            { word: "growth", type: "n", ipa: "/ɡroʊθ/", meaning: "sự tăng trưởng", context: "Kinh tế", example: "The chart shows rapid economic growth." },
            { word: "rise", type: "n", ipa: "/raɪz/", meaning: "sự tăng lên", context: "Số lượng", example: "A sharp rise in crime rates." },
            { word: "decline", type: "n", ipa: "/dɪˈklaɪn/", meaning: "sự suy giảm", context: "Xu hướng giảm", example: "A gradual decline in popularity." },
            { word: "drop", type: "n", ipa: "/drɒp/", meaning: "sự sụt giảm", context: "Ngắn hạn", example: "A sudden drop in temperature." },
            { word: "fluctuation", type: "n", ipa: "/ˌflʌktʃuˈeɪʃn/", meaning: "sự dao động", context: "Biến động", example: "There were wild fluctuations in the currency." },
            { word: "peak", type: "n", ipa: "/piːk/", meaning: "đỉnh điểm", context: "Reach a peak", example: "Sales reached a peak of $1 million." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Upward/Downward", example: "The overall trend was upward." },
            { word: "pattern", type: "n", ipa: "/ˈpætərn/", meaning: "mô hình, kiểu diễn biến", context: "Overview", example: "A similar pattern was seen in Group B." },
            { word: "figure", type: "n", ipa: "/ˈfɪɡjər/", meaning: "số liệu", context: "Thay cho 'number'", example: "The figure for Japan was higher." },
            { word: "proportion", type: "n", ipa: "/prəˈpɔːrʃn/", meaning: "tỷ lệ", context: "Phần trăm", example: "The proportion of men increased." },
            { word: "percentage", type: "n", ipa: "/pərˈsentɪdʒ/", meaning: "tỷ lệ phần trăm", context: "Data", example: "The percentage of passes rose." },
            { word: "distribution", type: "n", ipa: "/ˌdɪstrɪˈbjuːʃn/", meaning: "sự phân bố", context: "Pie chart", example: "The distribution of wealth." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (DEGREE & SPEED) ---
            { word: "steady", type: "adj", ipa: "/ˈstedi/", meaning: "đều đặn", context: "Ổn định", example: "A steady increase over 10 years." },
            { word: "gradual", type: "adj", ipa: "/ˈɡrædʒuəl/", meaning: "dần dần", context: "Chậm", example: "A gradual decline." },
            { word: "sharp", type: "adj", ipa: "/ʃɑːrp/", meaning: "mạnh, sắc nét", context: "Đột ngột", example: "A sharp rise in prices." },
            { word: "dramatic", type: "adj", ipa: "/drəˈmætɪk/", meaning: "rất mạnh, ấn tượng", context: "Thay đổi lớn", example: "A dramatic fall in numbers." },
            { word: "slight", type: "adj", ipa: "/slaɪt/", meaning: "nhẹ, một chút", context: "Thay đổi nhỏ", example: "A slight difference." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Quan trọng", example: "A significant growth." },
            { word: "overall", type: "adj", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung, tổng thể", context: "Overview", example: "Overall, sales went up." },
            { word: "notably", type: "adv", ipa: "/ˈnoʊtəbli/", meaning: "đáng chú ý là", context: "Điểm nổi bật", example: "Notably, category A fell to zero." }
        ],
        grammar: {
            title: "TASK 1: OVERVIEW & TREND LANGUAGE (BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Overview là phần quan trọng nhất trong Task 1. Thiếu Overview = Max Band 5.0. Overview tốt = Vé vào Band 7.0.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. 4 DẠNG OVERVIEW CỐT LÕI</h4>
                        <p>Bạn cần nhận diện nhanh trong 10 giây:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Trend (Xu hướng):</b> Tăng, giảm, hay ổn định?</li>
                            <li><b>Comparison (So sánh):</b> Cái nào cao nhất? Thấp nhất?</li>
                            <li><b>Pattern (Quy luật):</b> Có sự đảo chiều hay dao động không?</li>
                            <li><b>Exception (Ngoại lệ):</b> Có cái nào đi ngược số đông không?</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. NGÔN NGỮ XU HƯỚNG (TREND LANGUAGE)</h4>
                        <table style="width:100%; font-size:14px; border-collapse:collapse;">
                            <tr>
                                <td style="border:1px solid #ccc; padding:5px;"><b>Tăng (Up)</b></td>
                                <td style="border:1px solid #ccc; padding:5px;">Rise, Increase, Grow, Climb<br><i>Mạnh: Surge, Soar</i></td>
                            </tr>
                            <tr>
                                <td style="border:1px solid #ccc; padding:5px;"><b>Giảm (Down)</b></td>
                                <td style="border:1px solid #ccc; padding:5px;">Fall, Decrease, Drop, Decline<br><i>Mạnh: Plunge</i></td>
                            </tr>
                            <tr>
                                <td style="border:1px solid #ccc; padding:5px;"><b>Khác</b></td>
                                <td style="border:1px solid #ccc; padding:5px;">Fluctuate (Dao động), Stabilize (Ổn định), Level off (Chững lại)</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. MỨC ĐỘ & TỐC ĐỘ (ADVERBS)</h4>
                        <p>Để mô tả chính xác, hãy dùng trạng từ:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Mạnh/Nhanh:</b> Dramatically, Sharply, Rapidly.</li>
                            <li><b>Vừa phải/Đều:</b> Steadily, Gradually, Moderately.</li>
                            <li><b>Nhẹ/Chậm:</b> Slightly, Marginally, Slowly.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "Overall, the number of visitors increased steadily over the period.",
            "Sales figures fluctuated wildly in the first quarter.",
            "There was a sharp decline in the percentage of smokers.",
            "The chart illustrates a significant growth in online shopping.",
            "Category A accounted for the largest proportion of the total."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN OVERVIEW (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Câu nào là Overview tốt?",
                type: "choice",
                options: ["Sales went from 10 to 50.", "Overall, there was an upward trend in sales."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Câu nào KHÔNG nên dùng trong Overview?",
                type: "choice",
                options: ["Overall, X increased while Y decreased.", "Overall, X was 30 and Y was 40."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Overview nên nằm ở đâu?",
                type: "choice",
                options: ["Sau phần mở bài (Introduction).", "Cuối thân bài 2."],
                answer: 0
            },

            // --- BÀI 2: CHỌN TỪ XU HƯỚNG (ĐIỀN TỪ) ---
            {
                question: "Bài 2 - Câu 1: Sales ___ steadily over the period. (Tăng - Quá khứ)",
                type: "choice",
                options: ["increased", "increase"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 2: The figure ___ sharply in 2015. (Giảm - Quá khứ)",
                type: "choice",
                options: ["fell", "fall"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 3: Prices ___ slightly before leveling off. (Tăng - Quá khứ)",
                type: "choice",
                options: ["rose", "risen"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 4: The trend ___ throughout the period. (Dao động)",
                type: "choice",
                options: ["fluctuated", "stabilized"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 5: Attendance ___ dramatically in one year. (Giảm mạnh)",
                type: "choice",
                options: ["dropped", "steady"],
                answer: 0
            },

            // --- BÀI 3: SỬA LỖI (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'The number was more higher than before.' -> Sửa lỗi:",
                type: "text",
                answer: "The number was higher than before"
            },
            {
                question: "Bài 3 - Câu 2: 'The trend was very dramaticly increase.' -> Sửa lỗi (Adj + Noun): There was a...",
                type: "text",
                answer: "dramatic increase" // hoặc very dramatic increase
            },
            {
                question: "Bài 3 - Câu 3: 'There was a rise of the figures.' -> Sửa lỗi (in): There was a rise...",
                type: "text",
                answer: "in the figures"
            },
            {
                question: "Bài 3 - Câu 4: 'The data shows a fluctuate trend.' -> Sửa lỗi (Adj): The data shows a...",
                type: "text",
                answer: "fluctuating trend"
            },
            {
                question: "Bài 3 - Câu 5: 'Sales rose sharply, therefore in 2018.' -> Sửa lỗi (Giới từ): Sales rose sharply...",
                type: "text",
                answer: "in 2018"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: There was a ___ increase in sales. (sharp / sharply)",
                type: "choice",
                options: ["sharp", "sharply"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Numbers ___ after 2015. (stabilized / stable)",
                type: "choice",
                options: ["stabilized", "stable"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Attendance reached a ___ in 2020. (peak / top)",
                type: "choice",
                options: ["peak", "top"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: A ___ trend can be observed. (noticeable / notice)",
                type: "choice",
                options: ["noticeable", "notice"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Costs remained ___ for several years. (stable / stabilize)",
                type: "choice",
                options: ["stable", "stabilize"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: The ___ for X was the highest. (figure / number)",
                type: "choice",
                options: ["figure", "number"], // Figure học thuật hơn cho Task 1
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Data shows noticeable ___. (fluctuations / fluctuates)",
                type: "choice",
                options: ["fluctuations", "fluctuates"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Overall, changes were ___. (significant / signify)",
                type: "choice",
                options: ["significant", "signify"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu Overview mô tả biểu đồ có xu hướng tăng chung.",
                type: "open",
                answer: "Overall, it is clear that the figures for both categories increased significantly over the period."
            },
            {
                question: "Bài 7: Viết 1 câu mô tả số liệu giảm mạnh dùng 'plunge' (lao dốc).",
                type: "open",
                answer: "The unemployment rate plunged to 3% in 2023."
            }
        ]
    },
    {
        id: 31,
        title: "Ngày 31: Task 1 - Comparisons & Data Grouping (So Sánh & Nhóm Dữ Liệu)",
        vocab: [
            // --- A. ĐỘNG TỪ SO SÁNH & XU HƯỚNG (VERBS) - BAND 7.0 ---
            { word: "compare", type: "v", ipa: "/kəmˈper/", meaning: "so sánh", context: "Intro", example: "The chart compares the sales of two companies." },
            { word: "contrast", type: "v", ipa: "/kənˈtræst/", meaning: "đối chiếu (làm rõ sự khác biệt)", context: "Body", example: "The trends contrast sharply." },
            { word: "exceed", type: "v", ipa: "/ɪkˈsiːd/", meaning: "vượt quá (con số)", context: "Số liệu", example: "Sales exceeded expectations." },
            { word: "outnumber", type: "v", ipa: "/ˌaʊtˈnʌmbər/", meaning: "đông hơn (về số lượng người/vật)", context: "Dân số", example: "Women outnumber men in this field." },
            { word: "surpass", type: "v", ipa: "/sərˈpæs/", meaning: "vượt qua (thành tích, mức độ)", context: "So sánh", example: "China surpassed the US in production." },
            { word: "match", type: "v", ipa: "/mætʃ/", meaning: "ngang bằng, tương đương", context: "So sánh bằng", example: "Imports matched exports in 2020." },
            { word: "dominate", type: "v", ipa: "/ˈdɑːmɪneɪt/", meaning: "chiếm ưu thế, áp đảo", context: "Pie chart", example: "Online sales dominated the market." },
            { word: "account for", type: "v", ipa: "/əˈkaʊnt fɔːr/", meaning: "chiếm (tỷ lệ)", context: "Pie chart", example: "Oil accounts for 60% of energy use." },
            { word: "remain", type: "v", ipa: "/rɪˈmeɪn/", meaning: "duy trì (trạng thái)", context: "Xu hướng", example: "The rate remained stable." },
            { word: "differ", type: "v", ipa: "/ˈdɪfər/", meaning: "khác nhau", context: "So sánh", example: "Opinions differ on this issue." },
            { word: "follow", type: "v", ipa: "/ˈfɑːloʊ/", meaning: "theo (xu hướng/mô hình)", context: "Trend", example: "Prices followed a similar pattern." },
            { word: "overtake", type: "v", ipa: "/ˌoʊvərˈteɪk/", meaning: "vượt lên (bắt kịp và vượt)", context: "Line graph", example: "Company A overtook Company B in 2015." },
            { word: "lag behind", type: "v", ipa: "/læɡ bɪˈhaɪnd/", meaning: "tụt lại phía sau", context: "So sánh thua", example: "Rural areas lag behind cities in development." },
            { word: "peak", type: "v", ipa: "/piːk/", meaning: "đạt đỉnh", context: "Trend", example: "Traffic peaked at 5 PM." },
            { word: "level off", type: "v", ipa: "/ˈlevl ɔːf/", meaning: "chững lại", context: "Trend", example: "Growth leveled off after a sharp rise." },
            { word: "stabilize", type: "v", ipa: "/ˈsteɪbəlaɪz/", meaning: "ổn định", context: "Trend", example: "Prices stabilized in the last quarter." },

            // --- B. DANH TỪ (NOUNS) - BAND 7.0 ---
            { word: "comparison", type: "n", ipa: "/kəmˈpærɪsn/", meaning: "sự so sánh", context: "In comparison with", example: "In comparison with 2010, figures doubled." },
            { word: "contrast", type: "n", ipa: "/ˈkɑːntræst/", meaning: "sự tương phản", context: "In contrast", example: "In contrast, the other group declined." },
            { word: "category", type: "n", ipa: "/ˈkætəɡɔːri/", meaning: "hạng mục", context: "Bar chart", example: "Spending was highest in this category." },
            { word: "group", type: "n", ipa: "/ɡruːp/", meaning: "nhóm", context: "Data grouping", example: "The first group includes students and teachers." },
            { word: "figure", type: "n", ipa: "/ˈfɪɡjər/", meaning: "số liệu", context: "Thay 'number'", example: "The figure for Japan was lower." },
            { word: "proportion", type: "n", ipa: "/prəˈpɔːrʃn/", meaning: "tỷ lệ", context: "Phần trăm", example: "A large proportion of the budget." },
            { word: "percentage", type: "n", ipa: "/pərˈsentɪdʒ/", meaning: "tỷ lệ phần trăm", context: "Data", example: "The percentage of passes rose." },
            { word: "majority", type: "n", ipa: "/məˈdʒɔːrəti/", meaning: "đa số", context: "So sánh", example: "The vast majority of people agreed." },
            { word: "minority", type: "n", ipa: "/maɪˈnɔːrəti/", meaning: "thiểu số", context: "So sánh", example: "Only a small minority disagreed." },
            { word: "gap", type: "n", ipa: "/ɡæp/", meaning: "khoảng cách (chênh lệch)", context: "So sánh", example: "The gap between rich and poor widened." },
            { word: "difference", type: "n", ipa: "/ˈdɪfrəns/", meaning: "sự khác biệt", context: "So sánh", example: "There is a significant difference." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "General trend", example: "The overall trend is upward." },
            { word: "pattern", type: "n", ipa: "/ˈpætərn/", meaning: "mô hình, kiểu diễn biến", context: "Overview", example: "A similar pattern was observed." },
            { word: "distribution", type: "n", ipa: "/ˌdɪstrɪˈbjuːʃn/", meaning: "sự phân bố", context: "Pie chart", example: "The distribution of resources." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - BAND 7.0 ---
            { word: "similar", type: "adj", ipa: "/ˈsɪmɪlər/", meaning: "tương tự", context: "So sánh bằng", example: "The results were very similar." },
            { word: "different", type: "adj", ipa: "/ˈdɪfrənt/", meaning: "khác biệt", context: "So sánh khác", example: "The outcomes were completely different." },
            { word: "higher", type: "adj", ipa: "/ˈhaɪər/", meaning: "cao hơn", context: "So sánh hơn", example: "Costs were higher in urban areas." },
            { word: "lower", type: "adj", ipa: "/ˈloʊər/", meaning: "thấp hơn", context: "So sánh hơn", example: "Temperatures were lower in winter." },
            { word: "dominant", type: "adj", ipa: "/ˈdɑːmɪnənt/", meaning: "chiếm ưu thế", context: "Cao nhất", example: "Coal remained the dominant fuel." },
            { word: "comparable", type: "adj", ipa: "/ˈkɑːmpərəbl/", meaning: "có thể so sánh được (tương đương)", context: "Mức độ", example: "The two figures are comparable." },
            { word: "respectively", type: "adv", ipa: "/rɪˈspektɪvli/", meaning: "tương ứng (theo thứ tự)", context: "Liệt kê số liệu", example: "A and B were 10% and 20%, respectively." },
            { word: "overall", type: "adv", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung", context: "Overview", example: "Overall, sales increased." }
        ],
        grammar: {
            title: "TASK 1: COMPARISONS & DATA GROUPING (BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Điểm Task 1 Band 7+ nằm ở khả năng <b>Nhóm dữ liệu (Grouping)</b> và <b>So sánh (Comparison)</b> chứ không phải liệt kê số liệu.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. KỸ THUẬT NHÓM DỮ LIỆU (GROUPING)</h4>
                        <p>Trước khi viết, hãy chia các hạng mục vào 2 nhóm chính:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Theo Xu Hướng:</b> Nhóm Tăng vs Nhóm Giảm/Ổn định.</li>
                            <li><b>Theo Mức Độ:</b> Nhóm Cao nhất vs Nhóm Thấp nhất.</li>
                            <li><b>Theo Giai Đoạn:</b> Giai đoạn đầu vs Giai đoạn sau (Line graph).</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. TIÊU CHÍ SO SÁNH HỢP LỆ</h4>
                        <p>Chỉ so sánh các đối tượng trên cùng một hệ quy chiếu:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Level (Mức độ):</b> Higher / Lower / The highest.</li>
                            <li><b>Trend (Xu hướng):</b> Increased more rapidly / Remained stable unlike...</li>
                            <li><b>Proportion (Tỷ trọng):</b> Accounted for the largest share.</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. NGÔN NGỮ SO SÁNH BAND 7</h4>
                        <p><b>Respectively (Tương ứng):</b><br>
                        <i>Ex: Figures for USA and UK were 30% and 40%, <b>respectively</b>.</i></p>
                        
                        <p><b>Implicit Comparison (So sánh ngầm):</b><br>
                        <i>Ex: Coal was the <b>dominant</b> source. (Hàm ý: Cao hơn tất cả cái khác).</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "The chart compares the expenditure of five different countries.",
            "Overall, the figures for renewable energy increased significantly.",
            "While coal declined, solar power followed an upward trend.",
            "The US and China accounted for the majority of global emissions.",
            "Sales in 2020 were considerably higher than in previous years."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN GROUPING (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Câu nào có Grouping tốt?",
                type: "choice",
                options: ["A increased, B increased, C increased.", "Overall, A and B rose, whereas C declined."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Câu nào chỉ liệt kê (Band 6)?",
                type: "choice",
                options: ["X was 20, Y was 30, Z was 40.", "X, Y and Z showed significant differences."],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: Cách nhóm nào hợp lý cho Line Graph có 5 đường?",
                type: "choice",
                options: ["Mô tả từng đường từ đầu đến cuối.", "Nhóm 3 đường tăng vào đoạn 1, 2 đường giảm vào đoạn 2."],
                answer: 1
            },

            // --- BÀI 2: CHỌN TIÊU CHÍ SO SÁNH (ĐIỀN TỪ) ---
            {
                question: "Bài 2 - Câu 1: Compare A and B by ___ (level/trend) when looking at their height.",
                type: "choice",
                options: ["level", "trend"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 2: Compare early and late periods by ___ (time/proportion).",
                type: "choice",
                options: ["time", "proportion"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 3: Compare categories by ___ (highest/lowest) figures.",
                type: "choice",
                options: ["highest", "lowest"], // Cả 2 đều đúng, chọn 1 đại diện
                answer: 0
            },

            // --- BÀI 3: SỬA LỖI KIỂU IELTS (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'The number was more higher than before.' -> Sửa lỗi:",
                type: "text",
                answer: "The number was higher than before"
            },
            {
                question: "Bài 3 - Câu 2: 'A increased, on the other hand B also increased.' (Sai từ nối đối lập) -> Sửa (Similarly/Likewise):",
                type: "text",
                answer: "A increased; similarly, B also increased"
            },
            {
                question: "Bài 3 - Câu 3: 'A was 30 and B was 40 and C was 50.' (Liệt kê tẻ nhạt) -> Sửa (Respectively): Figures for A, B, and C were...",
                type: "text",
                answer: "30, 40, and 50, respectively"
            },
            {
                question: "Bài 3 - Câu 4: 'A rose, therefore B was higher.' (Sai logic nhân quả) -> Sửa (Trong khi đó): A rose, ...",
                type: "text",
                answer: "while B was higher" // hoặc whereas
            },

            // --- BÀI 5: REWRITE NÂNG BAND (TEXT INPUT) ---
            {
                question: "Bài 5 - Câu 1: 'A increased. B increased.' -> Gộp câu (Both):",
                type: "text",
                answer: "Both A and B increased"
            },
            {
                question: "Bài 5 - Câu 2: 'X was the highest. Y was the lowest.' -> Gộp câu (While/Whereas): X was the highest,...",
                type: "text",
                answer: "while Y was the lowest"
            },
            {
                question: "Bài 5 - Câu 3: 'One category dominated.' -> Viết lại (Account for): One category...",
                type: "text",
                answer: "accounted for the largest proportion" // hoặc majority
            },

            // --- BÀI 7: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 7 - Câu 1: Category A ___ B in terms of value. (exceeded / fell)",
                type: "choice",
                options: ["exceeded", "fell"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 2: X and Y followed a ___ pattern. (similar / diffirent)",
                type: "choice",
                options: ["similar", "diffirent"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 3: A accounted for the ___ proportion. (largest / large)",
                type: "choice",
                options: ["largest", "large"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 4: There was a noticeable ___ between groups. (gap / trend)",
                type: "choice",
                options: ["gap", "trend"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 5: Figures for A and B were 20 and 30, ___. (respectively / respect)",
                type: "choice",
                options: ["respectively", "respect"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 6: C remained the ___ category throughout. (dominant / dominate)",
                type: "choice",
                options: ["dominant", "dominate"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 7: D ___ behind the others. (lagged / passed)",
                type: "choice",
                options: ["lagged", "passed"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 8: Overall, the ___ was clear. (trend / figure)",
                type: "choice",
                options: ["trend", "figure"],
                answer: 0
            },

            // --- BÀI 8: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 8: Viết 1 câu Overview có Grouping (Nhóm tăng và nhóm giảm).",
                type: "open",
                answer: "Overall, sales of cars and bikes increased, while train usage declined."
            },
            {
                question: "Bài 8: Viết 1 câu dùng 'respectively' để liệt kê số liệu của 2 đối tượng.",
                type: "open",
                answer: "The figures for France and Germany were 15% and 20%, respectively."
            }
        ]
    },
    {
        id: 32,
        title: "Ngày 32: Task 1 - Language Variation & Complex Sentences (Đa Dạng Hóa & Câu Phức)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - TASK 1 VARIATION ---
            { word: "vary", type: "v", ipa: "/ˈveri/", meaning: "thay đổi, biến động", context: "Xu hướng chung", example: "Figures varied considerably over the period." },
            { word: "change", type: "v", ipa: "/tʃeɪndʒ/", meaning: "thay đổi", context: "Chung", example: "Patterns changed significantly." },
            { word: "remain", type: "v", ipa: "/rɪˈmeɪn/", meaning: "duy trì", context: "Ổn định", example: "Sales remained steady." },
            { word: "reach", type: "v", ipa: "/riːtʃ/", meaning: "đạt tới (mức)", context: "Số liệu", example: "The rate reached 50% in 2010." },
            { word: "record", type: "v", ipa: "/rɪˈkɔːrd/", meaning: "ghi nhận", context: "Số liệu (Bị động: was recorded)", example: "A sharp rise was recorded." },
            { word: "experience", type: "v", ipa: "/ɪkˈspɪəriəns/", meaning: "trải qua", context: "Xu hướng", example: "The market experienced a downturn." },
            { word: "undergo", type: "v", ipa: "/ˌʌndərˈɡoʊ/", meaning: "trải qua (thay đổi lớn)", context: "Trang trọng", example: "The system underwent significant changes." },
            { word: "show", type: "v", ipa: "/ʃoʊ/", meaning: "cho thấy", context: "Biểu đồ", example: "The graph shows a clear trend." },
            { word: "display", type: "v", ipa: "/dɪˈspleɪ/", meaning: "thể hiện", context: "Biểu đồ", example: "The data displays a similar pattern." },
            { word: "reflect", type: "v", ipa: "/rɪˈflekt/", meaning: "phản ánh", context: "Xu hướng", example: "These figures reflect the economic crisis." },
            { word: "follow", type: "v", ipa: "/ˈfɑːloʊ/", meaning: "theo (xu hướng)", context: "Trend", example: "Prices followed an upward trend." },
            { word: "exhibit", type: "v", ipa: "/ɪɡˈzɪbɪt/", meaning: "thể hiện (trang trọng)", context: "Xu hướng", example: "Both groups exhibited similar behavior." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Mức độ", example: "She maintained a high level of performance." },
            { word: "shift", type: "v", ipa: "/ʃɪft/", meaning: "dịch chuyển", context: "Thay đổi hướng", example: "The focus shifted to online sales." },
            { word: "recover", type: "v", ipa: "/rɪˈkʌvər/", meaning: "phục hồi", context: "Sau khi giảm", example: "Sales recovered quickly." },
            { word: "stabilize", type: "v", ipa: "/ˈsteɪbəlaɪz/", meaning: "ổn định lại", context: "Sau biến động", example: "The market stabilized in 2021." },
            { word: "peak", type: "v", ipa: "/piːk/", meaning: "đạt đỉnh", context: "Cao nhất", example: "Traffic peaks at 8 AM." },

            // --- B. DANH TỪ (NOUNS) - TASK 1 VARIATION ---
            { word: "variation", type: "n", ipa: "/ˌveriˈeɪʃn/", meaning: "sự biến động", context: "Trend", example: "There were slight variations in the data." },
            { word: "change", type: "n", ipa: "/tʃeɪndʒ/", meaning: "sự thay đổi", context: "Chung", example: "A sudden change in temperature." },
            { word: "level", type: "n", ipa: "/ˈlevl/", meaning: "mức độ", context: "Số liệu", example: "Production returned to pre-war levels." },
            { word: "period", type: "n", ipa: "/ˈpɪriəd/", meaning: "giai đoạn (thời gian)", context: "Time", example: "Over a 10-year period." },
            { word: "stage", type: "n", ipa: "/steɪdʒ/", meaning: "giai đoạn (quy trình)", context: "Process", example: "The final stage of manufacturing." },
            { word: "peak", type: "n", ipa: "/piːk/", meaning: "đỉnh", context: "Reach a peak", example: "Sales reached a peak of $1M." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Chung", example: "The trend was downward." },
            { word: "pattern", type: "n", ipa: "/ˈpætərn/", meaning: "mô hình, kiểu diễn biến", context: "Overview", example: "A similar pattern emerged." },
            { word: "range", type: "n", ipa: "/reɪndʒ/", meaning: "phạm vi", context: "Age range", example: "The age range is 20-30." },
            { word: "figure", type: "n", ipa: "/ˈfɪɡjər/", meaning: "số liệu", context: "Thay 'number'", example: "The figure for 2010 was lower." },
            { word: "difference", type: "n", ipa: "/ˈdɪfrəns/", meaning: "sự khác biệt", context: "So sánh", example: "The difference was negligible." },
            { word: "comparison", type: "n", ipa: "/kəmˈpærɪsn/", meaning: "sự so sánh", context: "In comparison", example: "In comparison with the UK..." },
            { word: "movement", type: "n", ipa: "/ˈmuːvmənt/", meaning: "sự chuyển động/biến động", context: "Trend", example: "There was little movement in prices." },
            { word: "fluctuation", type: "n", ipa: "/ˌflʌktʃuˈeɪʃn/", meaning: "sự dao động", context: "Biến động", example: "Fluctuations in exchange rates." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ/ADV) - TASK 1 ---
            { word: "steady", type: "adj", ipa: "/ˈstedi/", meaning: "đều đặn", context: "Trend", example: "A steady increase." },
            { word: "gradual", type: "adj", ipa: "/ˈɡrædʒuəl/", meaning: "dần dần", context: "Trend", example: "A gradual decline." },
            { word: "sharp", type: "adj", ipa: "/ʃɑːrp/", meaning: "mạnh, sắc nét", context: "Trend", example: "A sharp rise." },
            { word: "noticeable", type: "adj", ipa: "/ˈnoʊtɪsəbl/", meaning: "đáng chú ý", context: "Thay đổi", example: "A noticeable difference." },
            { word: "slight", type: "adj", ipa: "/slaɪt/", meaning: "nhẹ, một chút", context: "Thay đổi", example: "A slight increase." },
            { word: "overall", type: "adj", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung", context: "Overview", example: "The overall trend." },
            { word: "simultaneously", type: "adv", ipa: "/ˌsaɪmlˈteɪniəsli/", meaning: "đồng thời", context: "2 hành động", example: "Sales rose, and costs fell simultaneously." },
            { word: "subsequently", type: "adv", ipa: "/ˈsʌbsɪkwəntli/", meaning: "sau đó", context: "Trình tự", example: "Prices fell and subsequently recovered." }
        ],
        grammar: {
            title: "TASK 1: LANGUAGE VARIATION & COMPLEX SENTENCES (BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Để đạt Band 7+, bạn không được lặp từ (Variation) và phải dùng câu phức (Complex Sentences) để nhóm thông tin một cách logic.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. ĐA DẠNG HÓA NGÔN NGỮ (VARIATION)</h4>
                        <p><b>A. Động từ ↔ Danh từ:</b><br>
                        <i>Sales <b>increased</b> sharply.</i> (Verb)<br>
                        <i>There was a <b>sharp increase</b> in sales.</i> (Noun Phrase)</p>
                        
                        <p><b>B. Chủ ngữ giả (Passive/Time):</b><br>
                        <i>2010 <b>saw/witnessed</b> a rise in sales.</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. CÂU PHỨC (COMPLEX SENTENCES)</h4>
                        
                        <p><b>A. Time Clauses (Mệnh đề thời gian - While/As):</b><br>
                        <i><b>While</b> sales increased, costs declined.</i></p>
                        
                        <p><b>B. Relative Clauses (Mệnh đề quan hệ - Which):</b><br>
                        <i>Sales reached 50%, <b>which was the highest figure</b>.</i></p>
                        
                        <p><b>C. Reduced Clauses (Rút gọn mệnh đề - V-ing):</b><br>
                        <i>Sales increased significantly, <b>reaching a peak</b> of 50%.</i><br>
                        (Thay vì: Sales increased significantly and they reached...)</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "While sales of coffee increased, tea consumption remained stable.",
            "The figure for 2020 was significantly higher than that of 2010.",
            "Production witnessed a steady growth throughout the period.",
            "Starting at a low point, the numbers rose sharply, reaching a peak in May.",
            "There was a noticeable difference in the spending patterns of the two groups."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN CẤU TRÚC (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: 'While sales increased, costs declined.' là loại câu gì?",
                type: "choice",
                options: ["Complex Sentence (Time/Contrast)", "Simple Sentence"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: 'Sales increased steadily.' là loại câu gì?",
                type: "choice",
                options: ["Complex Sentence", "Simple Sentence"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: 'Sales increased, which was significant.' sử dụng ngữ pháp gì?",
                type: "choice",
                options: ["Relative Clause (Mệnh đề quan hệ)", "Passive Voice"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: 'After rising sharply, figures leveled off.' sử dụng ngữ pháp gì?",
                type: "choice",
                options: ["Reduced Clause (Rút gọn mệnh đề)", "Conditional"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI CÂU PHỨC (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Sales increased when 2010.' (Sai giới từ/cấu trúc) -> Sửa:",
                type: "text",
                answer: "Sales increased in 2010"
            },
            {
                question: "Bài 2 - Câu 2: 'A increased, which B decreased.' (Sai đại từ quan hệ - Dùng While/Whereas):",
                type: "text",
                answer: "A increased, whereas B decreased" // Hoặc While A increased, B decreased
            },
            {
                question: "Bài 2 - Câu 3: 'Sales increased reaching a peak and decline.' (Sai song song V-ing) -> ...reaching a peak and...",
                type: "text",
                answer: "declining"
            },
            {
                question: "Bài 2 - Câu 4: 'Figures rose, that was significant.' (Dấu phẩy không dùng That) -> Figures rose, ...",
                type: "text",
                answer: "which was significant"
            },
            {
                question: "Bài 2 - Câu 5: 'When sales increased, therefore costs fell.' (Thừa từ nối) -> When sales increased, ...",
                type: "text",
                answer: "costs fell"
            },

            // --- BÀI 3: KẾT HỢP CÂU (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'Costs fell. Sales rose.' -> Gộp dùng 'While':",
                type: "text",
                answer: "While costs fell, sales rose"
            },
            {
                question: "Bài 3 - Câu 2: 'Figures peaked in 2020. It was the highest level.' -> Gộp dùng 'which': Figures peaked in 2020, ...",
                type: "text",
                answer: "which was the highest level"
            },
            {
                question: "Bài 3 - Câu 3: 'Numbers declined initially. Numbers stabilized later.' -> Gộp dùng 'After V-ing': After...",
                type: "text",
                answer: "declining initially, numbers stabilized later"
            },
            {
                question: "Bài 3 - Câu 4: 'X was the highest. Y was the lowest.' -> Gộp dùng 'whereas': X was the highest, ...",
                type: "text",
                answer: "whereas Y was the lowest"
            },

            // --- BÀI 4: ĐA DẠNG HÓA NGÔN NGỮ (TEXT INPUT) ---
            {
                question: "Bài 4 - Câu 1: 'Sales increased steadily.' -> Chuyển sang Noun Phrase: There was a...",
                type: "text",
                answer: "steady increase in sales"
            },
            {
                question: "Bài 4 - Câu 2: 'There was a sharp decrease in costs.' -> Chuyển sang Verb: Costs...",
                type: "text",
                answer: "decreased sharply" // hoặc fell sharply
            },
            {
                question: "Bài 4 - Câu 3: 'Numbers remained stable.' -> Dùng 'stability': Numbers showed...",
                type: "text",
                answer: "stability"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Figures ___ considerably during the period. (varied / vary)",
                type: "choice",
                options: ["varied", "vary"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Sales ___ a peak in 2020. (reached / got)",
                type: "choice",
                options: ["reached", "got"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Values ___ stable after 2015. (remained / kept)",
                type: "choice",
                options: ["remained", "kept"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: The chart ___ changes over time. (illustrates / says)",
                type: "choice",
                options: ["illustrates", "says"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: There was a wide ___ in figures. (variation / vary)",
                type: "choice",
                options: ["variation", "vary"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Numbers changed ___ before stabilizing. (slightly / slight)",
                type: "choice",
                options: ["slightly", "slight"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: This trend ___ a clear pattern. (followed / went)",
                type: "choice",
                options: ["followed", "went"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Costs declined and ___ recovered. (subsequently / subsequent)",
                type: "choice",
                options: ["subsequently", "subsequent"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu phức dùng 'Although' để mô tả xu hướng trái ngược.",
                type: "open",
                answer: "Although the price increased, the demand remained high."
            },
            {
                question: "Bài 7: Viết 1 câu dùng Mệnh đề quan hệ rút gọn (V-ing) để mô tả số liệu đạt đỉnh.",
                type: "open",
                answer: "The temperature rose quickly, reaching a peak of 40 degrees in July."
            }
        ]
    },
    {
        id: 33,
        title: "Ngày 33: Task 1 - Maps & Processes (Bản Đồ & Quy Trình) - Band 7+",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - MAPS & PROCESSES ---
            { word: "construct", type: "v", ipa: "/kənˈstrʌkt/", meaning: "xây dựng (cơ sở hạ tầng)", context: "Maps (Passive)", example: "A new bridge was constructed across the river to improve traffic flow." },
            { word: "demolish", type: "v", ipa: "/dɪˈmɒlɪʃ/", meaning: "phá bỏ, dỡ bỏ (nhà cửa)", context: "Maps (Passive)", example: "The old warehouse was demolished to make way for a car park." },
            { word: "convert", type: "v", ipa: "/kənˈvɜːrt/", meaning: "chuyển đổi công năng", context: "Maps (Change of use)", example: "The original factory was converted into modern apartments." },
            { word: "replace", type: "v", ipa: "/rɪˈpleɪs/", meaning: "thay thế", context: "Maps", example: "The trees in the park were replaced by a new sports center." },
            { word: "expand", type: "v", ipa: "/ɪkˈspænd/", meaning: "mở rộng (diện tích)", context: "Maps", example: "The residential area was expanded significantly to the east." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "thu hẹp (kích thước)", context: "Maps", example: "The size of the forest was reduced to accommodate the new road." },
            { word: "relocate", type: "v", ipa: "/ˌriːloʊˈkeɪt/", meaning: "di dời (vị trí)", context: "Maps", example: "The bus station was relocated to the city centre for better access." },
            { word: "develop", type: "v", ipa: "/dɪˈveləp/", meaning: "phát triển, quy hoạch mới", context: "Maps", example: "The coastal area was developed into a tourist resort." },
            { word: "install", type: "v", ipa: "/ɪnˈstɔːl/", meaning: "lắp đặt (trang thiết bị)", context: "Maps/Process", example: "New street lights were installed along the main road." },
            { word: "remove", type: "v", ipa: "/rɪˈmuːv/", meaning: "loại bỏ", context: "Process/Maps", example: "Impurities are removed from the water using a filter." },
            { word: "process", type: "v", ipa: "/ˈprəʊses/", meaning: "xử lý (nguyên liệu)", context: "Process", example: "The raw materials are processed in the plant before export." },
            { word: "purify", type: "v", ipa: "/ˈpjʊrɪfaɪ/", meaning: "làm sạch, tinh chế", context: "Process (Nước/Khí)", example: "The water is purified through a multi-stage filtration system." },
            { word: "heat", type: "v", ipa: "/hiːt/", meaning: "đun nóng, gia nhiệt", context: "Process", example: "The mixture is heated to a temperature of 200 degrees." },
            { word: "cool", type: "v", ipa: "/kuːl/", meaning: "làm nguội", context: "Process", example: "After melting, the substance is cooled to harden." },
            { word: "package", type: "v", ipa: "/ˈpækɪdʒ/", meaning: "đóng gói", context: "Process", example: "Finally, the finished goods are packaged into boxes." },
            { word: "transport", type: "v", ipa: "/trænˈspɔːrt/", meaning: "vận chuyển", context: "Process", example: "The products are transported to retailers by truck." },
            { word: "distribute", type: "v", ipa: "/dɪˈstrɪbjuːt/", meaning: "phân phối", context: "Process", example: "The items are distributed to shops nationwide." },
            { word: "recycle", type: "v", ipa: "/ˌriːˈsaɪkl/", meaning: "tái chế", context: "Process", example: "Paper waste is collected and recycled into new cardboard." },

            // --- B. DANH TỪ (NOUNS) - MAPS & PROCESSES ---
            { word: "facility", type: "n", ipa: "/fəˈsɪləti/", meaning: "cơ sở vật chất (tiện ích)", context: "Maps", example: "New leisure facilities, including a gym, were built." },
            { word: "infrastructure", type: "n", ipa: "/ˈɪnfrəstrʌktʃər/", meaning: "cơ sở hạ tầng", context: "Maps", example: "The transport infrastructure was upgraded with a new railway line." },
            { word: "residential area", type: "n", ipa: "/ˌrezɪˈdenʃl ˈeriə/", meaning: "khu dân cư", context: "Maps", example: "A large residential area was constructed in the suburbs." },
            { word: "industrial zone", type: "n", ipa: "/ɪnˈdʌstriəl zoʊn/", meaning: "khu công nghiệp", context: "Maps", example: "The industrial zone was moved away from the city center." },
            { word: "green space", type: "n", ipa: "/ɡriːn speɪs/", meaning: "không gian xanh (công viên)", context: "Maps", example: "Green spaces were cleared to build more houses." },
            { word: "layout", type: "n", ipa: "/ˈleɪaʊt/", meaning: "bố cục, sơ đồ", context: "Maps (Trong nhà)", example: "The layout of the library was changed to add more seats." },
            { word: "stage", type: "n", ipa: "/steɪdʒ/", meaning: "giai đoạn", context: "Process", example: "There are three main stages in the manufacturing process." },
            { word: "step", type: "n", ipa: "/step/", meaning: "bước đi", context: "Process", example: "The first step involves gathering raw materials." },
            { word: "process", type: "n", ipa: "/ˈprəʊses/", meaning: "quy trình", context: "Process Overview", example: "The diagram illustrates the process of making cement." },
            { word: "raw material", type: "n", ipa: "/rɔː məˈtɪriəl/", meaning: "nguyên liệu thô", context: "Process", example: "Raw materials are delivered to the factory." },
            { word: "product", type: "n", ipa: "/ˈprɒdʌkt/", meaning: "sản phẩm hoàn thiện", context: "Process", example: "The final product is checked for quality." },
            { word: "waste", type: "n", ipa: "/weɪst/", meaning: "chất thải", context: "Process", example: "Any waste produced is disposed of safely." },
            { word: "pipeline", type: "n", ipa: "/ˈpaɪplaɪn/", meaning: "đường ống dẫn", context: "Process", example: "Gas is sent through a pipeline to the power plant." },
            { word: "cycle", type: "n", ipa: "/ˈsaɪkl/", meaning: "chu trình, vòng đời", context: "Process (Tự nhiên)", example: "The diagram shows the life cycle of a butterfly." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (MÔ TẢ THAY ĐỔI) ---
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Change", example: "The town underwent significant changes over the period." },
            { word: "substantial", type: "adj", ipa: "/səbˈstænʃl/", meaning: "lớn, nhiều", context: "Change", example: "A substantial part of the park was removed." },
            { word: "minor", type: "adj", ipa: "/ˈmaɪnər/", meaning: "nhỏ, không đáng kể", context: "Change", example: "Only minor changes were made to the layout." },
            { word: "gradual", type: "adj", ipa: "/ˈɡrædʒuəl/", meaning: "dần dần", context: "Change/Process", example: "There was a gradual development of the coastline." },
            { word: "adjacent", type: "adj", ipa: "/əˈdʒeɪsnt/", meaning: "liền kề, sát bên", context: "Location", example: "The new car park is adjacent to the hotel." },
            { word: "central", type: "adj", ipa: "/ˈsentrəl/", meaning: "trung tâm", context: "Location", example: "The fountain is located in the central square." },
            { word: "overall", type: "adv", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung", context: "Overview", example: "Overall, the map shows the expansion of the village." },
            { word: "subsequently", type: "adv", ipa: "/ˈsʌbsɪkwəntli/", meaning: "sau đó, tiếp theo", context: "Sequence", example: "The clay is dug up and subsequently shaped into bricks." }
        ],
        grammar: {
            title: "TASK 1: MAPS & PROCESSES (CHIẾN LƯỢC BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Dạng bài không số liệu này yêu cầu tư duy ngôn ngữ khác biệt: <b>Bị động</b> cho Process và <b>Ngôn ngữ Không gian/Biến đổi</b> cho Maps.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. MAPS (BẢN ĐỒ - SỰ THAY ĐỔI)</h4>
                        <p><b>Thì & Bị động:</b><br>
                        - Quá khứ: <i>The park <b>was replaced</b> by a shopping mall.</i><br>
                        - Tương lai (Dự án): <i>A new road <b>is expected to be built</b>.</i></p>
                        
                        <p><b>Từ chỉ vị trí (Spatial Language):</b><br>
                        - <i>To the north of...</i> (Về phía Bắc của)<br>
                        - <i>Adjacent to... / Next to...</i> (Sát bên)<br>
                        - <i>In the centre of...</i> (Ở trung tâm)</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. PROCESSES (QUY TRÌNH)</h4>
                        <p><b>Cấu trúc bắt buộc:</b> Present Simple + Passive Voice (Hiện tại đơn bị động).<br>
                        <i>Ex: The water <b>is filtered</b> and then <b>pumped</b> into a tank.</i></p>
                        
                        <p><b>Từ nối trình tự (Sequencers):</b><br>
                        - <i>First / Initially / To begin with...</i><br>
                        - <i>Subsequently / Then / Following this...</i><br>
                        - <i>Finally / In the final stage...</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. CÁCH VIẾT OVERVIEW</h4>
                        <p><b>Maps:</b> Nêu sự biến đổi chính (Mở rộng, hiện đại hóa, hay thêm cây xanh?).<br>
                        <i>Ex: Overall, the town underwent significant urbanization with the removal of green spaces.</i></p>
                        <p><b>Process:</b> Số bước tổng quan + Điểm đầu & Điểm cuối.<br>
                        <i>Ex: The process consists of 5 stages, commencing with digging clay and culminating in delivery.</i></p>
                    </div>
                </div>
            `
        },
        speaking: [
            "The map illustrates the development of the village over a ten-year period.",
            "Overall, the residential area was expanded significantly to the east.",
            "The process consists of several stages, beginning with collection and ending with recycling.",
            "Raw materials are processed in the factory before being transported.",
            "A new bridge was constructed to connect the two islands."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN LOẠI BÀI (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: 'The diagram shows the life cycle of a frog.' là dạng bài gì?",
                type: "choice",
                options: ["Process (Quy trình tự nhiên)", "Map", "Chart"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: 'Two maps show the layout of a school in 2000 and 2020.' là dạng bài gì?",
                type: "choice",
                options: ["Map (Before/After)", "Process", "Graph"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: 'The plan shows proposed changes to the city centre.' là dạng bài gì?",
                type: "choice",
                options: ["Map (Future Plan)", "Process", "Table"],
                answer: 0
            },

            // --- BÀI 2: VIẾT OVERVIEW (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: Viết Overview cho Process làm gạch (Brick making): 7 bước, từ đào đất sét đến giao hàng.",
                type: "text",
                answer: "The process consists of seven stages, beginning with digging clay and ending with delivery"
            },
            {
                question: "Bài 2 - Câu 2: Viết Overview cho Map (Before/After): Cây cối bị chặt, nhiều nhà cửa mọc lên (urbanization).",
                type: "text",
                answer: "Overall, the area underwent significant urbanization, with trees being replaced by housing"
            },

            // --- BÀI 3: SỬA LỖI KIỂU IELTS (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'The factory build a new warehouse.' -> Sửa lỗi (Map - Quá khứ bị động):",
                type: "text",
                answer: "A new warehouse was built by the factory"
            },
            {
                question: "Bài 3 - Câu 2: 'After heat, the mixture is cooled.' -> Sửa lỗi (Rút gọn V-ing/V3): After...",
                type: "text",
                answer: "being heated, the mixture is cooled"
            },
            {
                question: "Bài 3 - Câu 3: 'Buildings will build in the east.' -> Sửa lỗi (Tương lai bị động): Buildings...",
                type: "text",
                answer: "will be built in the east"
            },
            {
                question: "Bài 3 - Câu 4: 'The product finished then package.' -> Sửa lỗi (Passive): The product is finished and then...",
                type: "text",
                answer: "packaged"
            },

            // --- BÀI 4: KẾT HỢP CÂU (TEXT INPUT) ---
            {
                question: "Bài 4 - Câu 1: 'A park was removed. A car park was built.' -> Gộp câu (Replaced): The park...",
                type: "text",
                answer: "was replaced by a car park"
            },
            {
                question: "Bài 4 - Câu 2: 'Raw materials are collected. They are processed.' -> Gộp câu (Before): Raw materials are collected...",
                type: "text",
                answer: "before being processed"
            },
            {
                question: "Bài 4 - Câu 3: 'The mixture is heated. The mixture is cooled.' -> Gộp câu (Then): The mixture is heated...",
                type: "text",
                answer: "and then cooled"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: A new road was ___ to improve access. (constructed / done)",
                type: "choice",
                options: ["constructed", "done"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: The park was ___ by a car park. (replaced / place)",
                type: "choice",
                options: ["replaced", "place"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: The area saw ___ development over time. (significant / sign)",
                type: "choice",
                options: ["significant", "sign"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Raw materials are ___ before use. (processed / process)",
                type: "choice",
                options: ["processed", "process"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: The mixture is ___ and then cooled. (heated / hot)",
                type: "choice",
                options: ["heated", "hot"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Waste is ___ into different categories. (sorted / sort)",
                type: "choice",
                options: ["sorted", "sort"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Residential areas expanded into former ___. (green spaces / green place)",
                type: "choice",
                options: ["green spaces", "green place"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: The product is ___ to retailers. (distributed / given)",
                type: "choice",
                options: ["distributed", "given"],
                answer: 0
            },

            // --- BÀI 7: WRITING MINI (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'adjacent to' để mô tả vị trí.",
                type: "open",
                answer: "The new library was built adjacent to the school."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'Once...' để nối 2 bước: Thu gom (collected) -> Phân loại (sorted).",
                type: "open",
                answer: "Once collected, the waste is sorted into different categories."
            }
        ]
    },
    {
        id: 34,
        title: "Ngày 34: Advanced Sentence Structures (Cấu Trúc Câu Nâng Cao) - Band 7+",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - LẬP LUẬN & TRANH BIỆN ---
            { word: "acknowledge", type: "v", ipa: "/əkˈnɒlɪdʒ/", meaning: "thừa nhận (một thực tế/quan điểm)", context: "Concession", example: "It is widely acknowledged that education is vital for development." },
            { word: "concede", type: "v", ipa: "/kənˈsiːd/", meaning: "thừa nhận (điểm yếu/đối lập)", context: "Concession (Formal)", example: "Critics concede that the new policy has some merits." },
            { word: "emphasize", type: "v", ipa: "/ˈemfəsaɪz/", meaning: "nhấn mạnh", context: "Emphasis", example: "The report emphasizes the need for immediate action." },
            { word: "underscore", type: "v", ipa: "/ˌʌndərˈskɔːr/", meaning: "nhấn mạnh (mạnh mẽ)", context: "Conclusion/Emphasis", example: "This study underscores the importance of early childhood education." },
            { word: "assert", type: "v", ipa: "/əˈsɜːrt/", meaning: "khẳng định (quả quyết)", context: "Opinion", example: "Proponents assert that technology improves efficiency." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "giữ quan điểm (kiên định)", context: "Reporting Verb", example: "Opponents maintain that the costs outweigh the benefits." },
            { word: "contend", type: "v", ipa: "/kənˈtend/", meaning: "cho rằng, dám chắc rằng", context: "Argument", example: "Some scholars contend that globalization increases inequality." },
            { word: "justify", type: "v", ipa: "/ˈdʒʌstɪfaɪ/", meaning: "biện minh, chứng minh là đúng", context: "Argument", example: "The benefits do not justify the environmental damage." },
            { word: "counter", type: "v", ipa: "/ˈkaʊntər/", meaning: "phản biện, chống lại", context: "Rebuttal", example: "The government must act to counter the effects of inflation." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm nhẹ (tác hại)", context: "Solution", example: "Measures should be taken to mitigate the risks." },
            { word: "exacerbate", type: "v", ipa: "/ɪɡˈzæsərbeɪt/", meaning: "làm trầm trọng hơn", context: "Problem", example: "Poor management can exacerbate the crisis." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", context: "Solution", example: "Schools should prioritize student well-being." },
            { word: "reinforce", type: "v", ipa: "/ˌriːɪnˈfɔːrs/", meaning: "củng cố (luận điểm/niềm tin)", context: "Support", example: "These findings reinforce the idea that diet affects health." },
            { word: "facilitate", type: "v", ipa: "/fəˈsɪlɪteɪt/", meaning: "tạo điều kiện thuận lợi", context: "Support", example: "Technology facilitates international communication." },
            { word: "hinder", type: "v", ipa: "/ˈhɪndər/", meaning: "cản trở", context: "Problem", example: "Lack of funding may hinder progress." },
            { word: "promote", type: "v", ipa: "/prəˈmoʊt/", meaning: "thúc đẩy", context: "Benefit", example: "A healthy diet promotes physical well-being." },
            { word: "sustain", type: "v", ipa: "/səˈsteɪn/", meaning: "duy trì (lâu dài)", context: "Solution", example: "We need to sustain economic growth." },
            { word: "challenge", type: "v", ipa: "/ˈtʃælɪndʒ/", meaning: "thách thức (quan điểm)", context: "Rebuttal", example: "New evidence challenges the traditional view." },

            // --- B. DANH TỪ (NOUNS) - CẤU TRÚC & LẬP LUẬN ---
            { word: "concession", type: "n", ipa: "/kənˈseʃn/", meaning: "sự nhượng bộ", context: "Logic", example: "Making a concession can strengthen an argument." },
            { word: "emphasis", type: "n", ipa: "/ˈemfəsɪs/", meaning: "sự nhấn mạnh", context: "Logic", example: "The emphasis should be on quality, not quantity." },
            { word: "inversion", type: "n", ipa: "/ɪnˈvɜːrʒn/", meaning: "đảo ngữ", context: "Grammar", example: "Inversion is used for formal emphasis." },
            { word: "argument", type: "n", ipa: "/ˈɑːrɡjumənt/", meaning: "lập luận", context: "Essay", example: "This is a convincing argument against the proposal." },
            { word: "claim", type: "n", ipa: "/kleɪm/", meaning: "luận điểm, khẳng định", context: "Essay", example: "The author makes a strong claim about education." },
            { word: "counterargument", type: "n", ipa: "/ˈkaʊntərɑːrɡjumənt/", meaning: "lý lẽ phản biện", context: "Essay", example: "One common counterargument is that costs are too high." },
            { word: "justification", type: "n", ipa: "/ˌdʒʌstɪfɪˈkeɪʃn/", meaning: "sự biện minh, lý do", context: "Support", example: "There is no justification for such behavior." },
            { word: "priority", type: "n", ipa: "/praɪˈɔːrəti/", meaning: "sự ưu tiên", context: "Solution", example: "Education should be a top priority." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự ràng buộc, hạn chế", context: "Problem", example: "Financial constraints limit our options." },
            { word: "implication", type: "n", ipa: "/ˌɪmplɪˈkeɪʃn/", meaning: "hệ quả, ẩn ý", context: "Result", example: "We must consider the long-term implications." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "khả năng tiếp cận", context: "Topic", example: "Equal access to education is essential." },
            { word: "equity", type: "n", ipa: "/ˈekwəti/", meaning: "sự công bằng", context: "Topic", example: "Social equity is a goal of this policy." },
            { word: "burden", type: "n", ipa: "/ˈbɜːrdn/", meaning: "gánh nặng", context: "Problem", example: "The tax burden falls on the middle class." },
            { word: "benefit", type: "n", ipa: "/ˈbenɪfɪt/", meaning: "lợi ích", context: "Topic", example: "The benefits of exercise are well known." },
            { word: "drawback", type: "n", ipa: "/ˈdrɔːbæk/", meaning: "hạn chế, mặt trái", context: "Topic", example: "One drawback of city life is pollution." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - MỨC ĐỘ & ĐÁNH GIÁ ---
            { word: "crucial", type: "adj", ipa: "/ˈkruːʃl/", meaning: "then chốt, cốt yếu", context: "Importance", example: "Parental involvement is crucial for a child's success." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Impact", example: "There has been a significant shift in opinion." },
            { word: "notable", type: "adj", ipa: "/ˈnoʊtəbl/", meaning: "đáng chú ý", context: "Example", example: "A notable example is the rise of the internet." },
            { word: "considerable", type: "adj", ipa: "/kənˈsɪdərəbl/", meaning: "đáng kể, to lớn", context: "Amount", example: "A considerable amount of time was wasted." },
            { word: "inevitable", type: "adj", ipa: "/ɪnˈevɪtəbl/", meaning: "không thể tránh khỏi", context: "Result", example: "Change is often inevitable in modern society." },
            { word: "arguably", type: "adv", ipa: "/ˈɑːrɡjuəbli/", meaning: "có thể cho rằng (người ta tranh luận rằng)", context: "Hedging", example: "He is arguably the most influential writer." },
            { word: "particularly", type: "adv", ipa: "/pərˈtɪkjələrli/", meaning: "đặc biệt là", context: "Emphasis", example: "The issue is particularly serious in rural areas." },
            { word: "ultimately", type: "adv", ipa: "/ˈʌltɪmətli/", meaning: "cuối cùng, rốt cuộc", context: "Conclusion", example: "Ultimately, the decision lies with the government." }
        ],
        grammar: {
            title: "ADVANCED SENTENCE STRUCTURES (CẤU TRÚC BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Để vượt qua Band 6.5, bạn cần sử dụng các cấu trúc câu phức tạp hơn để thể hiện khả năng kiểm soát ngữ pháp và logic chặt chẽ.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. CONCESSION (NHƯỢNG BỘ CÓ KIỂM SOÁT)</h4>
                        <p>Thừa nhận mặt trái rồi quay lại bảo vệ quan điểm chính.</p>
                        <p><b>Basic:</b> Although + Clause.<br>
                        <b>Advanced:</b><br>
                        - <i><b>Granted that</b> online learning is flexible, it lacks interaction.</i><br>
                        - <i><b>Admittedly</b>, costs are high; <b>however</b>, the benefits are worth it.</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. EMPHASIS (CÂU NHẤN MẠNH - CLEFT SENTENCES)</h4>
                        <p>Dùng để làm nổi bật chủ ngữ hoặc sự việc.</p>
                        <ul style="padding-left:20px;">
                            <li><b>It-cleft:</b> <i>It is <b>education</b> that plays a crucial role.</i></li>
                            <li><b>What-cleft:</b> <i><b>What matters most</b> is equal access to healthcare.</i></li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. INVERSION (ĐẢO NGỮ)</h4>
                        <p>Trang trọng và nhấn mạnh.</p>
                        <ul style="padding-left:20px;">
                            <li><b>Not only:</b> <i>Not only <b>does</b> education improve skills, but it also promotes equality.</i></li>
                            <li><b>Conditionals (Rút gọn If):</b> <i><b>Should</b> the government invest more, the economy would grow.</i></li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "Although technology has drawbacks, it is undeniably useful.",
            "It is the government that must take responsibility for pollution.",
            "Not only does reading improve vocabulary, but it also reduces stress.",
            "Admittedly, the plan is expensive; however, it is necessary.",
            "What matters most is the quality of education, not the cost."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN CẤU TRÚC (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: 'It is technology that has transformed learning.' là cấu trúc gì?",
                type: "choice",
                options: ["Emphasis (It-cleft)", "Inversion", "Concession"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: 'Granted that online learning is flexible, it lacks interaction.' là cấu trúc gì?",
                type: "choice",
                options: ["Concession (Nhượng bộ)", "Inversion", "Simple Sentence"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: 'Not only does education improve skills, but also...' là cấu trúc gì?",
                type: "choice",
                options: ["Inversion (Đảo ngữ)", "Passive Voice", "Relative Clause"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: 'What matters most is equal access.' là cấu trúc gì?",
                type: "choice",
                options: ["Emphasis (What-cleft)", "Question", "Inversion"],
                answer: 0
            },

            // --- BÀI 2: SỬA LỖI (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Although education is important. It is expensive.' (Lỗi câu chưa hoàn chỉnh) -> Sửa:",
                type: "text",
                answer: "Although education is important, it is expensive"
            },
            {
                question: "Bài 2 - Câu 2: 'Not only education improves skills but also promotes equality.' (Thiếu trợ động từ đảo ngữ) -> Sửa:",
                type: "text",
                answer: "Not only does education improve skills, but it also promotes equality"
            },
            {
                question: "Bài 2 - Câu 3: 'It is important education that matters.' (Sai cấu trúc It-cleft) -> It is...",
                type: "text",
                answer: "education that is important" // Hoặc It is education that matters
            },
            {
                question: "Bài 2 - Câu 4: 'Despite the costs are high, people study abroad.' (Despite + Noun/Ving) -> Sửa:",
                type: "text",
                answer: "Despite the high costs, people study abroad"
            },
            {
                question: "Bài 2 - Câu 5: 'Should governments invests more, access improves.' (Sai động từ sau Should - V nguyên thể) -> Sửa:",
                type: "text",
                answer: "Should governments invest more, access would improve"
            },

            // --- BÀI 3: BIẾN ĐỔI CÂU (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'Technology has changed education.' -> Dùng It-cleft: It is...",
                type: "text",
                answer: "technology that has changed education"
            },
            {
                question: "Bài 3 - Câu 2: 'Skills matter more than certificates.' -> Dùng What-cleft: What...",
                type: "text",
                answer: "matters more than certificates is skills" // Hoặc What matters is skills...
            },
            {
                question: "Bài 3 - Câu 3: 'Education improves skills and promotes equality.' -> Dùng Not only: Not only...",
                type: "text",
                answer: "does education improve skills, but it also promotes equality"
            },
            {
                question: "Bài 3 - Câu 4: 'If governments invest more, access will improve.' -> Dùng Inversion (Should): Should...",
                type: "text",
                answer: "governments invest more, access will improve"
            },
            {
                question: "Bài 3 - Câu 5: 'Online learning is flexible, but it reduces interaction.' -> Dùng Granted that: Granted that...",
                type: "text",
                answer: "online learning is flexible, it reduces interaction"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: It is widely ___ that education is vital. (acknowledged / known)",
                type: "choice",
                options: ["acknowledged", "known"], // acknowledged formal hơn
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: This policy may ___ inequality. (exacerbate / help)",
                type: "choice",
                options: ["exacerbate", "help"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Governments should ___ long-term benefits. (prioritize / do)",
                type: "choice",
                options: ["prioritize", "do"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: This argument lacks strong ___. (justification / justify)",
                type: "choice",
                options: ["justification", "justify"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Technology can ___ access to learning. (facilitate / make)",
                type: "choice",
                options: ["facilitate", "make"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: Several ___ must be considered. (constraints / constrain)",
                type: "choice",
                options: ["constraints", "constrain"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Ultimately, a ___ approach is required. (balanced / balance)",
                type: "choice",
                options: ["balanced", "balance"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: The author ___ the importance of equity. (underscores / says)",
                type: "choice",
                options: ["underscores", "says"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'Admittedly' để nhượng bộ một điểm yếu của việc sống ở thành phố.",
                type: "open",
                answer: "Admittedly, living in the city is expensive, but it offers more job opportunities."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'It is... that...' để nhấn mạnh tầm quan trọng của sức khỏe.",
                type: "open",
                answer: "It is health that forms the foundation of a happy life."
            }
        ]
    },
    {
        id: 35,
        title: "Ngày 35: Task 2 - Logic & Paragraph Depth (Phát Triển Ý Sâu) - Band 7.5",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - CƠ CHẾ & TÁC ĐỘNG ---
            { word: "facilitate", type: "v", ipa: "/fəˈsɪlɪteɪt/", meaning: "tạo điều kiện thuận lợi", context: "Hỗ trợ cơ chế", example: "Technology facilitates access to education." },
            { word: "mitigate", type: "v", ipa: "/ˈmɪtɪɡeɪt/", meaning: "giảm nhẹ (tác động xấu)", context: "Giải pháp", example: "Scholarships mitigate financial pressure." },
            { word: "exacerbate", type: "v", ipa: "/ɪɡˈzæsərbeɪt/", meaning: "làm trầm trọng hơn", context: "Vấn đề", example: "High costs exacerbate inequality." },
            { word: "constrain", type: "v", ipa: "/kənˈstreɪn/", meaning: "hạn chế, kìm hãm", context: "Rào cản", example: "Limited funding constrains expansion." },
            { word: "enable", type: "v", ipa: "/ɪˈneɪbl/", meaning: "cho phép, làm cho có thể", context: "Cơ hội", example: "Policies enable broader participation." },
            { word: "undermine", type: "v", ipa: "/ˌʌndərˈmaɪn/", meaning: "làm suy yếu", context: "Tác động tiêu cực", example: "Corruption undermines trust." },
            { word: "justify", type: "v", ipa: "/ˈdʒʌstɪfaɪ/", meaning: "biện minh, chứng minh là đúng", context: "Lý do", example: "The cost is justified by benefits." },
            { word: "sustain", type: "v", ipa: "/səˈsteɪn/", meaning: "duy trì (bền vững)", context: "Phát triển", example: "Investment sustains quality." },
            { word: "prioritize", type: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", context: "Hành động", example: "Governments prioritise education." },
            { word: "reinforce", type: "v", ipa: "/ˌriːɪnˈfɔːrs/", meaning: "củng cố", context: "Lập luận/Niềm tin", example: "Evidence reinforces the claim." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "giải quyết (vấn đề)", context: "Giải pháp", example: "Policies address access gaps." },
            { word: "counter", type: "v", ipa: "/ˈkaʊntər/", meaning: "phản biện, chống lại", context: "Rebuttal", example: "Measures counter rising costs." },
            { word: "hinder", type: "v", ipa: "/ˈhɪndər/", meaning: "cản trở", context: "Khó khăn", example: "Poor infrastructure hinders learning." },
            { word: "promote", type: "v", ipa: "/prəˈməʊt/", meaning: "thúc đẩy", context: "Lợi ích", example: "Education promotes mobility." },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Kết quả", example: "Outcomes are evaluated." },
            { word: "allocate", type: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", context: "Tài nguyên", example: "Funds are allocated efficiently." },
            { word: "acknowledge", type: "v", ipa: "/əkˈnɒlɪdʒ/", meaning: "thừa nhận", context: "Concession", example: "The drawback is acknowledged." },
            { word: "stabilize", type: "v", ipa: "/ˈsteɪbəlaɪz/", meaning: "ổn định", context: "Tình hình", example: "Policies stabilise enrolment." },

            // --- B. DANH TỪ (NOUNS) - YẾU TỐ LOGIC ---
            { word: "mechanism", type: "n", ipa: "/ˈmekənɪzəm/", meaning: "cơ chế", context: "Explanation", example: "The mechanism behind access involves funding." },
            { word: "implication", type: "n", ipa: "/ˌɪmplɪˈkeɪʃn/", meaning: "hệ quả, ẩn ý", context: "Impact", example: "Policy implications are significant." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự ràng buộc", context: "Constraint", example: "Budget constraints exist." },
            { word: "equity", type: "n", ipa: "/ˈekwəti/", meaning: "sự công bằng", context: "Goal", example: "Educational equity matters." },
            { word: "burden", type: "n", ipa: "/ˈbɜːrdn/", meaning: "gánh nặng", context: "Impact", example: "Financial burden increases." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "khả năng tiếp cận", context: "Topic", example: "Access remains uneven." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả đầu ra", context: "Result", example: "Learning outcomes improve." },
            { word: "driver", type: "n", ipa: "/ˈdraɪvər/", meaning: "động lực thúc đẩy", context: "Cause", example: "Education is a key driver." },
            { word: "barrier", type: "n", ipa: "/ˈbærɪər/", meaning: "rào cản", context: "Problem", example: "Cost is a barrier." },
            { word: "incentive", type: "n", ipa: "/ɪnˈsentɪv/", meaning: "sự khích lệ, động lực", context: "Solution", example: "Tax incentives help." },
            { word: "feasibility", type: "n", ipa: "/ˌfiːzəˈbɪləti/", meaning: "tính khả thi", context: "Evaluation", example: "Policy feasibility varies." },
            { word: "sustainability", type: "n", ipa: "/səˌsteɪnəˈbɪləti/", meaning: "tính bền vững", context: "Goal", example: "Long-term sustainability is crucial." },
            { word: "inequality", type: "n", ipa: "/ˌɪnɪˈkwɒlɪti/", meaning: "sự bất bình đẳng", context: "Problem", example: "Inequality may widen." },
            { word: "productivity", type: "n", ipa: "/ˌprɒdʌkˈtɪvɪti/", meaning: "năng suất", context: "Benefit", example: "Productivity increases." },
            { word: "allocation", type: "n", ipa: "/ˌæləˈkeɪʃn/", meaning: "sự phân bổ", context: "Action", example: "Resource allocation matters." },

            // --- C. TÍNH TỪ / TRẠNG TỪ - MỨC ĐỘ & ĐÁNH GIÁ ---
            { word: "substantial", type: "adj", ipa: "/səbˈstænʃl/", meaning: "đáng kể, to lớn", context: "Impact", example: "Substantial benefits arise." },
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể, quan trọng", context: "Impact", example: "A significant impact." },
            { word: "long-term", type: "adj", ipa: "/ˌlɔːŋ ˈtɜːrm/", meaning: "dài hạn", context: "Timeframe", example: "Long-term effects matter." },
            { word: "arguably", type: "adv", ipa: "/ˈɑːrɡjuəbli/", meaning: "có thể cho rằng", context: "Hedging", example: "Arguably, education matters most." },
            { word: "particularly", type: "adv", ipa: "/pərˈtɪkjələrli/", meaning: "đặc biệt là", context: "Focus", example: "Particularly among youths." },
            { word: "ultimately", type: "adv", ipa: "/ˈʌltɪmətli/", meaning: "cuối cùng, rốt cuộc", context: "Conclusion", example: "Ultimately, access improves." },
            { word: "feasible", type: "adj", ipa: "/ˈfiːzəbl/", meaning: "khả thi", context: "Solution", example: "A feasible solution." },
            { word: "robust", type: "adj", ipa: "/roʊˈbʌst/", meaning: "vững chắc, mạnh mẽ", context: "Argument", example: "Robust evidence supports this." },
            { word: "viable", type: "adj", ipa: "/ˈvaɪəbl/", meaning: "khả thi, có thể tồn tại", context: "Alternative", example: "A viable alternative." }
        ],
        grammar: {
            title: "TASK 2: PARAGRAPH DEPTH (PHÁT TRIỂN Ý SÂU - BAND 7.5)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Để đạt Band 7.5+, bạn cần "Depth" (Chiều sâu) chứ không phải "Length" (Độ dài). Hãy dùng mô hình CEEI+ để đào sâu một ý tưởng.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. MÔ HÌNH CEEI+ (NÂNG CẤP)</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Claim (Luận điểm):</b> Rõ ràng, có phạm vi.</li>
                            <li><b>Explanation (Giải thích):</b> Tại sao? (Cơ chế - Mechanism).</li>
                            <li><b>Example/Evidence (Dẫn chứng):</b> Cụ thể hóa (Không bịa số).</li>
                            <li><b>Impact (Hệ quả):</b> Điều này dẫn đến cái gì? (Ý nghĩa sâu xa).</li>
                            <li><b>+ Constraint (Điều kiện):</b> Giới hạn của ý (Tăng tính học thuật).</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. VÍ DỤ PHÂN TÍCH</h4>
                        <p><b>Claim:</b> Tuition fees limit access.<br>
                        <b>Explanation:</b> Higher costs deter low-income families.<br>
                        <b>Example:</b> Students may delay enrolment.<br>
                        <b>Impact:</b> Social mobility declines.<br>
                        <b>Constraint:</b> This effect varies by region.</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. KỸ THUẬT "WHY-CHAIN"</h4>
                        <p>Hỏi "Tại sao?" tối đa 2 lần để tìm ra cơ chế gốc rễ (Mechanism), tránh giải thích vòng vo.</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "Scholarships help mitigate financial barriers for students.",
            "Education is arguably the most important driver of economic growth.",
            "High tuition fees exacerbate inequality in society.",
            "Ultimately, a balanced approach is needed to solve this issue.",
            "Robust evidence supports the claim that technology facilitates learning."
        ],
        quiz: [
            // --- BÀI 1: PHÂN TÍCH ĐỘ SÂU (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Câu nào có 'Depth' (Độ sâu) tốt hơn?",
                type: "choice",
                options: ["Education is important because it helps people.", "Education improves employability by equipping learners with skills."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Câu nào là 'Constraint' (Điều kiện/Giới hạn)?",
                type: "choice",
                options: ["This effect varies by region.", "Therefore, students study harder."],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: 'High tuition fees reduce access, particularly among disadvantaged groups.' - Phần sau dấu phẩy là gì?",
                type: "choice",
                options: ["Impact (Hệ quả)", "Explanation (Giải thích cụ thể)"],
                answer: 1
            },

            // --- BÀI 2: MỞ RỘNG CÓ KIỂM SOÁT (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Tuition fees are rising.' -> Thêm Explanation (Why?): This is because universities need to...",
                type: "text",
                answer: "cover increasing operational costs" // Đáp án mẫu
            },
            {
                question: "Bài 2 - Câu 2: 'Online learning increases access.' -> Thêm Impact (So what?): Consequently, more people can...",
                type: "text",
                answer: "pursue higher education regardless of location"
            },
            {
                question: "Bài 2 - Câu 3: 'Public transport reduces congestion.' -> Thêm Mechanism (How?): By encouraging people to...",
                type: "text",
                answer: "leave their cars at home"
            },

            // --- BÀI 3: SỬA LỖI LOGIC (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'Education is expensive. It is important.' (Thiếu liên kết logic) -> Sửa: Although education is expensive, it...",
                type: "text",
                answer: "remains important for personal development"
            },
            {
                question: "Bài 3 - Câu 2: 'Online learning is good. Many people use it.' (Quá sơ sài) -> Sửa: Online learning is beneficial as it...",
                type: "text",
                answer: "offers flexibility for busy professionals"
            },
            {
                question: "Bài 3 - Câu 3: 'Traffic causes problems.' (Chung chung) -> Sửa: Traffic congestion leads to...",
                type: "text",
                answer: "economic losses and environmental pollution"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Scholarships ___ financial barriers. (mitigate / cause)",
                type: "choice",
                options: ["mitigate", "cause"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: This policy has long-term ___. (implications / implies)",
                type: "choice",
                options: ["implications", "implies"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Limited funding acts as a ___. (barrier / driver)",
                type: "choice",
                options: ["barrier", "driver"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Education is a key ___ of growth. (driver / barrier)",
                type: "choice",
                options: ["driver", "barrier"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Evidence ___ the argument. (reinforces / forces)",
                type: "choice",
                options: ["reinforces", "forces"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: These measures are ___ in urban areas. (feasible / feasibility)",
                type: "choice",
                options: ["feasible", "feasibility"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: Rising costs place a heavy ___. (burden / weight)",
                type: "choice",
                options: ["burden", "weight"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Access remains ___ across regions. (uneven / even)",
                type: "choice",
                options: ["uneven", "even"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: Investment improves learning ___. (outcomes / incomes)",
                type: "choice",
                options: ["outcomes", "incomes"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: Ultimately, a ___ approach is needed. (balanced / balance)",
                type: "choice",
                options: ["balanced", "balance"],
                answer: 0
            },

            // --- BÀI 7: WRITING (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Viết 1 câu dùng 'facilitate' để giải thích cơ chế (Mechanism).",
                type: "open",
                answer: "Modern technology facilitates communication across borders."
            },
            {
                question: "Bài 7: Viết 1 câu dùng 'exacerbate' để nêu hệ quả tiêu cực (Impact).",
                type: "open",
                answer: "Ignoring climate change will exacerbate extreme weather events."
            }
        ]
    },
    {
        id: 36,
        title: "Ngày 36: Speaking Part 2-3 - Idea Depth & Band 7+ Delivery (Ý Sâu & Diễn Đạt)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - SPEAKING SKILLS ---
            { word: "acquire", type: "v", ipa: "/əˈkwaɪər/", meaning: "tiếp thu, học được (kỹ năng/kiến thức)", context: "Learning", example: "I acquired basic coding skills in just two months." },
            { word: "develop", type: "v", ipa: "/dɪˈveləp/", meaning: "phát triển", context: "Skills", example: "She developed strong communication skills through practice." },
            { word: "enhance", type: "v", ipa: "/ɪnˈhæns/", meaning: "nâng cao, tăng cường", context: "Improvement", example: "Regular practice enhances confidence significantly." },
            { word: "apply", type: "v", ipa: "/əˈplaɪ/", meaning: "áp dụng", context: "Knowledge", example: "I apply this skill at work every day." },
            { word: "struggle", type: "v", ipa: "/ˈstrʌɡl/", meaning: "gặp khó khăn, vật lộn", context: "Difficulty", example: "Many learners struggle with pronunciation at first." },
            { word: "adapt", type: "v", ipa: "/əˈdæpt/", meaning: "thích nghi", context: "Change", example: "People adapt quickly to new tools and software." },
            { word: "improve", type: "v", ipa: "/ɪmˈpruːv/", meaning: "cải thiện", context: "General", example: "Feedback improves performance over time." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Habit/State", example: "It's hard to maintain motivation without a goal." },
            { word: "master", type: "v", ipa: "/ˈmæstər/", meaning: "làm chủ, thành thạo", context: "Skill", example: "It takes time and effort to master a new language." },
            { word: "practice", type: "v", ipa: "/ˈpræktɪs/", meaning: "luyện tập", context: "Action", example: "Daily practice matters more than talent." },
            { word: "evaluate", type: "v", ipa: "/ɪˈvæljueɪt/", meaning: "đánh giá", context: "Progress", example: "We evaluate progress regularly to adjust the plan." },
            { word: "recognize", type: "v", ipa: "/ˈrekəɡnaɪz/", meaning: "nhận ra", context: "Awareness", example: "I recognized my weakness after the test." },
            { word: "overcome", type: "v", ipa: "/ˌoʊvərˈkʌm/", meaning: "vượt qua", context: "Challenge", example: "I overcame my initial fear of public speaking." },
            { word: "support", type: "v", ipa: "/səˈpɔːrt/", meaning: "hỗ trợ", context: "Help", example: "Teachers support learners throughout the process." },
            { word: "motivate", type: "v", ipa: "/ˈmoʊtɪveɪt/", meaning: "thúc đẩy, tạo động lực", context: "Feeling", example: "Clear goals motivate me to work harder." },
            { word: "engage", type: "v", ipa: "/ɪnˈɡeɪdʒ/", meaning: "tham gia tích cực, thu hút", context: "Activity", example: "Interactive tasks engage students more effectively." },
            { word: "benefit", type: "v", ipa: "/ˈbenɪfɪt/", meaning: "được lợi, có lợi", context: "Result", example: "Learners benefit greatly from constructive feedback." },
            { word: "reflect", type: "v", ipa: "/rɪˈflekt/", meaning: "suy ngẫm, phản ánh", context: "Thinking", example: "I often reflect on my progress at the end of the week." },

            // --- B. DANH TỪ (NOUNS) - SPEAKING TOPICS ---
            { word: "skill", type: "n", ipa: "/skɪl/", meaning: "kỹ năng", context: "General", example: "Problem-solving is a key soft skill." },
            { word: "experience", type: "n", ipa: "/ɪkˈspɪriəns/", meaning: "trải nghiệm, kinh nghiệm", context: "Life", example: "It was a valuable experience for me." },
            { word: "confidence", type: "n", ipa: "/ˈkɑːnfɪdəns/", meaning: "sự tự tin", context: "Feeling", example: "Confidence grows with consistent practice." },
            { word: "feedback", type: "n", ipa: "/ˈfiːdbæk/", meaning: "phản hồi", context: "Improvement", example: "Constructive feedback is essential for growth." },
            { word: "motivation", type: "n", ipa: "/ˌmoʊtɪˈveɪʃn/", meaning: "động lực", context: "Feeling", example: "Motivation fluctuates from day to day." },
            { word: "discipline", type: "n", ipa: "/ˈdɪsəplɪn/", meaning: "kỷ luật", context: "Habit", example: "Self-discipline ensures consistency in learning." },
            { word: "habit", type: "n", ipa: "/ˈhæbɪt/", meaning: "thói quen", context: "Routine", example: "Good habits matter for long-term success." },
            { word: "challenge", type: "n", ipa: "/ˈtʃælɪndʒ/", meaning: "thách thức", context: "Difficulty", example: "Time management is a big challenge." },
            { word: "opportunity", type: "n", ipa: "/ˌɑːpərˈtuːnəti/", meaning: "cơ hội", context: "Chance", example: "Online courses create opportunities for everyone." },
            { word: "progress", type: "n", ipa: "/ˈprɑːɡres/", meaning: "sự tiến bộ", context: "Improvement", example: "I've made significant progress this month." },
            { word: "balance", type: "n", ipa: "/ˈbæləns/", meaning: "sự cân bằng", context: "Lifestyle", example: "Work-life balance prevents burnout." },
            { word: "context", type: "n", ipa: "/ˈkɒntekst/", meaning: "bối cảnh, ngữ cảnh", context: "Situation", example: "Skills vary depending on the context." },
            { word: "approach", type: "n", ipa: "/əˈproʊtʃ/", meaning: "cách tiếp cận", context: "Method", example: "A practical approach helps in learning faster." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả", context: "Result", example: "The outcome was positive despite the difficulties." },
            { word: "constraint", type: "n", ipa: "/kənˈstreɪnt/", meaning: "sự ràng buộc, hạn chế", context: "Limitation", example: "Time constraints exist in every project." },
            { word: "consistency", type: "n", ipa: "/kənˈsɪstənsi/", meaning: "tính nhất quán", context: "Quality", example: "Consistency is key to mastering any skill." },
            { word: "effort", type: "n", ipa: "/ˈefərt/", meaning: "nỗ lực", context: "Action", example: "Effort pays off in the long run." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ/ADV) - DIỄN ĐẠT ---
            { word: "practical", type: "adj", ipa: "/ˈpræktɪkl/", meaning: "thực tế", context: "Skill", example: "Cooking is a very practical skill." },
            { word: "useful", type: "adj", ipa: "/ˈjuːsfl/", meaning: "hữu ích", context: "Benefit", example: "This tool is useful in daily life." },
            { word: "challenging", type: "adj", ipa: "/ˈtʃælɪndʒɪŋ/", meaning: "đầy thách thức", context: "Difficulty", example: "It was challenging at first, but I got used to it." },
            { word: "effective", type: "adj", ipa: "/ɪˈfektɪv/", meaning: "hiệu quả", context: "Method", example: "This is an effective method for memorization." },
            { word: "initially", type: "adv", ipa: "/ɪˈnɪʃəli/", meaning: "ban đầu", context: "Time", example: "Initially, I struggled to understand the concept." },
            { word: "gradually", type: "adv", ipa: "/ˈɡrædʒuəli/", meaning: "dần dần", context: "Process", example: "I gradually improved my speaking speed." },
            { word: "arguably", type: "adv", ipa: "/ˈɑːrɡjuəbli/", meaning: "có thể cho rằng", context: "Opinion", example: "Arguably, practice matters most." },
            { word: "ultimately", type: "adv", ipa: "/ˈʌltɪmətli/", meaning: "cuối cùng, rốt cuộc", context: "Conclusion", example: "Ultimately, confidence grew with experience." }
        ],
        grammar: {
            title: "SPEAKING PART 2-3: IDEA DEPTH & DELIVERY (CHIẾN LƯỢC BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Speaking Band 7+ không cần nói quá dài, mà cần nói sâu (Depth), có logic (Coherence) và từ vựng chính xác (Precision).</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. KHUNG TRẢ LỜI PART 2 (SCAR+)</h4>
                        <p>Giúp bài nói có cấu trúc rõ ràng trong 2 phút:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Situation:</b> Bối cảnh ngắn gọn.</li>
                            <li><b>Claim:</b> Ý chính muốn nói.</li>
                            <li><b>Action/Detail:</b> Hành động cụ thể/Chi tiết.</li>
                            <li><b>Result:</b> Kết quả đạt được.</li>
                            <li><b>+ Reflection:</b> Cảm nhận/Bài học rút ra.</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. KHUNG TRANH BIỆN PART 3 (CEI+)</h4>
                        <p>Trả lời sâu sắc cho các câu hỏi trừu tượng:</p>
                        <p><b>Claim (Luận điểm)</b> &#8594; <b>Explanation (Giải thích)</b> &#8594; <b>Impact (Tác động/Hệ quả)</b></p>
                        <p><i>Ví dụ:</i> "I think this trend exists (Claim) because... (Explanation). This means that... (Impact)."</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. KỸ THUẬT DIỄN ĐẠT (DELIVERY)</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Paraphrasing:</b> Đổi động từ/cấu trúc thay vì dùng từ quá khó.</li>
                            <li><b>Signposting:</b> Dùng từ nối nhẹ nhàng (To begin with, That said...).</li>
                            <li><b>Softeners:</b> Dùng "tend to", "seem to" để tránh khẳng định tuyệt đối.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "One experience that stands out is when I learned to swim.",
            "Initially, I struggled a lot, but I gradually improved.",
            "Ultimately, consistency is the key to mastering any skill.",
            "I tend to believe that practical skills are more useful.",
            "That said, academic knowledge also plays a crucial role."
        ],
        quiz: [
            // --- BÀI 1: XÂY KHUNG PART 2 (CÂU HỎI MỞ) ---
            {
                question: "Bài 1: Lập dàn ý SCAR+ cho đề 'Describe a skill you learned recently'. (Viết ngắn gọn các ý)",
                type: "open",
                answer: "S: Learned coding last year. C: Very challenging but useful. A: Took online courses, practiced daily. R: Built my own website. Ref: Proud and motivated."
            },

            // --- BÀI 2: MỞ RỘNG CÓ KIỂM SOÁT (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'Learning a skill is useful.' -> Thêm Explanation (Because...): This is because...",
                type: "text",
                answer: "it opens up new career opportunities" // Đáp án mẫu
            },
            {
                question: "Bài 2 - Câu 2: 'Practice is important.' -> Thêm Impact (Therefore...): Therefore, regular practice...",
                type: "text",
                answer: "helps build muscle memory and confidence"
            },
            {
                question: "Bài 2 - Câu 3: 'Online courses are popular.' -> Thêm Explanation (Due to...): This is largely due to...",
                type: "text",
                answer: "their flexibility and affordability"
            },

            // --- BÀI 3: PARAPHRASE NÓI (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: 'It is important.' -> Paraphrase (crucial/vital): It plays a...",
                type: "text",
                answer: "crucial role in our lives"
            },
            {
                question: "Bài 3 - Câu 2: 'It helps people a lot.' -> Paraphrase (benefit): People...",
                type: "text",
                answer: "benefit greatly from it"
            },
            {
                question: "Bài 3 - Câu 3: 'Many people like it.' -> Paraphrase (popular): It has become...",
                type: "text",
                answer: "increasingly popular among people"
            },

            // --- BÀI 5: SỬA LỖI THƯỜNG GẶP (TEXT INPUT) ---
            {
                question: "Bài 5 - Câu 1: 'I very agree with this idea.' (Sai ngữ pháp) -> Sửa:",
                type: "text",
                answer: "I totally agree with this idea" // Hoặc strongly agree
            },
            {
                question: "Bài 5 - Câu 2: 'People must learn many skills nowadays.' (Quá tuyệt đối) -> Dùng Softener (Should/Tend to): People...",
                type: "text",
                answer: "should try to learn various skills"
            },
            {
                question: "Bài 5 - Câu 3: 'This is very very important.' (Lặp từ) -> Dùng từ mạnh hơn (Extremely/Crucial): This is...",
                type: "text",
                answer: "extremely important"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: Regular practice ___ confidence. (enhances / makes)",
                type: "choice",
                options: ["enhances", "makes"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: Feedback helps learners ___ weaknesses. (recognize / see)",
                type: "choice",
                options: ["recognize", "see"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Many people ___ new skills online. (acquire / buy)",
                type: "choice",
                options: ["acquire", "buy"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: Time ___ often affect motivation. (constraints / limits)",
                type: "choice",
                options: ["constraints", "limits"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: A balanced ___ prevents burnout. (approach / way)",
                type: "choice",
                options: ["approach", "way"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: This approach proved ___ in my case. (effective / good)",
                type: "choice",
                options: ["effective", "good"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: I ___ initial difficulties. (overcame / passed)",
                type: "choice",
                options: ["overcame", "passed"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: Motivation tends to ___ over time. (fluctuate / change)",
                type: "choice",
                options: ["fluctuate", "change"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 9: Learners benefit from ___ feedback. (constructive / good)",
                type: "choice",
                
                options: ["constructive", "good"], // Thêm từ constructive cho hay hơn dù đề bài gốc chỉ là benefit from feedback
                answer: 0
            },
            {
                question: "Bài 6 - Câu 10: Ultimately, consistent ___ leads to progress. (effort / try)",
                type: "choice",
                options: ["effort", "try"],
                answer: 0
            }
        ]
    },
    {
        id: 37,
        title: "Ngày 37: Speaking Part 1 - Naturalness & Collocation (Tự Nhiên & Mạch Lạc)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - DIỄN ĐẠT TỰ NHIÊN ---
            { word: "enjoy", type: "v", ipa: "/ɪnˈdʒɔɪ/", meaning: "thích, tận hưởng (thay cho 'like')", context: "Preference", example: "I particularly enjoy listening to podcasts while commuting." },
            { word: "prefer", type: "v", ipa: "/prɪˈfɜːr/", meaning: "thích hơn", context: "Choice", example: "I generally prefer quiet places to crowded ones." },
            { word: "spend", type: "v", ipa: "/spend/", meaning: "dành (thời gian/tiền)", context: "Habit", example: "I spend a significant amount of time reading news online." },
            { word: "tend", type: "v", ipa: "/tend/", meaning: "có xu hướng (thường làm gì)", context: "Habit (Softener)", example: "I tend to wake up early on weekdays." },
            { word: "relax", type: "v", ipa: "/rɪˈlæks/", meaning: "thư giãn", context: "Leisure", example: "Listening to music helps me relax after a long day." },
            { word: "commute", type: "v", ipa: "/kəˈmjuːt/", meaning: "đi lại (giữa nhà và nơi làm/học)", context: "Routine", example: "I commute to work by bus, which takes about 30 minutes." },
            { word: "participate", type: "v", ipa: "/pɑːrˈtɪsɪpeɪt/", meaning: "tham gia", context: "Activity", example: "I actively participate in local sports events." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "Habit", example: "It is important to maintain a healthy work-life balance." },
            { word: "manage", type: "v", ipa: "/ˈmænɪdʒ/", meaning: "quản lý, xoay xở", context: "Time/Work", example: "I try to manage my schedule efficiently." },
            { word: "explore", type: "v", ipa: "/ɪkˈsplɔːr/", meaning: "khám phá", context: "Travel/Hobby", example: "I love to explore new cuisines when I travel." },
            { word: "avoid", type: "v", ipa: "/əˈvɔɪd/", meaning: "tránh", context: "Dislike", example: "I try to avoid driving during rush hour." },
            { word: "appreciate", type: "v", ipa: "/əˈpriːʃieɪt/", meaning: "trân trọng, đánh giá cao", context: "Opinion", example: "I really appreciate the quiet atmosphere of the library." },
            { word: "balance", type: "v", ipa: "/ˈbæləns/", meaning: "cân bằng", context: "Life", example: "It can be hard to balance studies and part-time work." },
            { word: "socialize", type: "v", ipa: "/ˈsoʊʃəlaɪz/", meaning: "giao lưu, kết bạn", context: "Leisure", example: "I tend to socialize with friends at weekends." },
            { word: "concentrate", type: "v", ipa: "/ˈkɑːnsntreɪt/", meaning: "tập trung", context: "Work/Study", example: "I find it difficult to concentrate in noisy environments." },
            { word: "refresh", type: "v", ipa: "/rɪˈfreʃ/", meaning: "làm mới, nạp lại năng lượng", context: "Health", example: "A short nap helps to refresh my mind." },
            { word: "organize", type: "v", ipa: "/ˈɔːrɡənaɪz/", meaning: "sắp xếp, tổ chức", context: "Life", example: "I organize my tasks using a digital calendar." },
            { word: "follow", type: "v", ipa: "/ˈfɑːloʊ/", meaning: "tuân theo, theo dõi", context: "Routine/Trend", example: "I try to follow a strict fitness routine." },

            // --- B. DANH TỪ (NOUNS) - CHỦ ĐỀ THƯỜNG GẶP ---
            { word: "routine", type: "n", ipa: "/ruːˈtiːn/", meaning: "thói quen sinh hoạt", context: "Daily life", example: "My morning routine consists of yoga and coffee." },
            { word: "interest", type: "n", ipa: "/ˈɪntrəst/", meaning: "sở thích, sự quan tâm", context: "Hobby", example: "I have a keen interest in photography." },
            { word: "habit", type: "n", ipa: "/ˈhæbɪt/", meaning: "thói quen", context: "Lifestyle", example: "Reading before bed has become a habit." },
            { word: "leisure", type: "n", ipa: "/ˈliːʒər/", meaning: "thời gian rảnh rỗi", context: "Free time", example: "I spend my leisure time playing the guitar." },
            { word: "environment", type: "n", ipa: "/ɪnˈvaɪrənmənt/", meaning: "môi trường", context: "Surroundings", example: "A quiet environment is essential for studying." },
            { word: "convenience", type: "n", ipa: "/kənˈviːniəns/", meaning: "sự tiện lợi", context: "Benefit", example: "I love the convenience of online shopping." },
            { word: "atmosphere", type: "n", ipa: "/ˈætməsfɪr/", meaning: "bầu không khí", context: "Place", example: "The cafe has a very cozy atmosphere." },
            { word: "preference", type: "n", ipa: "/ˈprefrəns/", meaning: "sự ưu tiên, sở thích", context: "Choice", example: "My personal preference is for spicy food." },
            { word: "schedule", type: "n", ipa: "/ˈskedʒuːl/", meaning: "lịch trình", context: "Time", example: "I have a very hectic schedule this week." },
            { word: "commitment", type: "n", ipa: "/kəˈmɪtmənt/", meaning: "sự cam kết, trách nhiệm", context: "Work/Life", example: "I have too many work commitments right now." },
            { word: "energy", type: "n", ipa: "/ˈenərdʒi/", meaning: "năng lượng", context: "Health", example: "I usually have more energy in the mornings." },
            { word: "stress", type: "n", ipa: "/stres/", meaning: "sự căng thẳng", context: "Health", example: "Exercise is a great way to relieve stress." },
            { word: "choice", type: "n", ipa: "/tʃɔɪs/", meaning: "sự lựa chọn", context: "Decision", example: "It was a difficult choice to make." },
            { word: "quality", type: "n", ipa: "/ˈkwɑːləti/", meaning: "chất lượng", context: "Standard", example: "I value quality over quantity." },
            { word: "experience", type: "n", ipa: "/ɪkˈspɪriəns/", meaning: "trải nghiệm", context: "Life", example: "Traveling solo was a unique experience." },
            { word: "access", type: "n", ipa: "/ˈækses/", meaning: "quyền/khả năng tiếp cận", context: "Facility", example: "I have easy access to public transport." },
            { word: "interaction", type: "n", ipa: "/ˌɪntərˈækʃn/", meaning: "sự tương tác", context: "Social", example: "I enjoy face-to-face interaction with colleagues." },
            { word: "opportunity", type: "n", ipa: "/ˌɑːpərˈtuːnəti/", meaning: "cơ hội", context: "Chance", example: "It was a great opportunity to learn new skills." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ/ADV) - MÔ TẢ ---
            { word: "comfortable", type: "adj", ipa: "/ˈkʌmftəbl/", meaning: "thoải mái", context: "Feeling/Place", example: "I feel very comfortable living in this city." },
            { word: "convenient", type: "adj", ipa: "/kənˈviːniənt/", meaning: "thuận tiện", context: "Benefit", example: "Living near the subway is very convenient." },
            { word: "crowded", type: "adj", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc", context: "Place", example: "I try to avoid crowded places on weekends." },
            { word: "flexible", type: "adj", ipa: "/ˈfleksəbl/", meaning: "linh hoạt", context: "Schedule", example: "My job offers flexible working hours." },
            { word: "generally", type: "adv", ipa: "/ˈdʒenrəli/", meaning: "nhìn chung, thường thì", context: "Habit", example: "I generally prefer tea over coffee." },
            { word: "occasionally", type: "adv", ipa: "/əˈkeɪʒnəli/", meaning: "thỉnh thoảng", context: "Frequency", example: "I occasionally go to the cinema." },
            { word: "particularly", type: "adv", ipa: "/pərˈtɪkjələrli/", meaning: "đặc biệt là", context: "Emphasis", example: "I am particularly fond of classical music." },
            { word: "naturally", type: "adv", ipa: "/ˈnætʃrəli/", meaning: "một cách tự nhiên", context: "Skill", example: "Speaking naturally takes practice." }
        ],
        grammar: {
            title: "SPEAKING PART 1: NATURALNESS & FLOW (BAND 7+)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Part 1 là lúc tạo ấn tượng đầu tiên. Đừng trả lời cụt lủn, hãy dùng Collocations và Softeners để nghe tự nhiên như người bản xứ.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. ĐỘ DÀI & CẤU TRÚC (2-3 CÂU)</h4>
                        <p><b>Công thức:</b> Direct Answer (Trả lời thẳng) &#8594; Detail (Chi tiết/Lý do) &#8594; Mini-impact (Cảm nhận/Kết quả).</p>
                        <p><i>Ex: "Do you like reading?"<br>
                        &#8594; "Yes, definitely (Answer). I usually read before bed because it helps me unwind (Detail), which improves my sleep quality (Impact)."</i></p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. COLLOCATIONS (CẶP TỪ TỰ NHIÊN)</h4>
                        <p>Tránh dùng từ đơn lẻ, hãy dùng cụm:</p>
                        <ul style="padding-left:20px;">
                            <li><s>Do a decision</s> &#8594; <b>Make a decision</b></li>
                            <li><s>Have a habit</s> &#8594; <b>Develop/Maintain a habit</b></li>
                            <li><s>Very like</s> &#8594; <b>Have a keen interest in / Be fond of</b></li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. SOFTENING (LÀM MỀM CÂU)</h4>
                        <p>Tránh khẳng định tuyệt đối (Always/Never) để nghe khách quan hơn:</p>
                        <ul style="padding-left:20px;">
                            <li>Use: <b>Tend to, Generally, Usually, In most cases...</b></li>
                            <li><i>Ex: "I <b>tend to</b> avoid crowded places."</i></li>
                        </ul>
                    </div>
                </div>
            `
        },
        speaking: [
            "I tend to prefer home-cooked meals as they are healthier.",
            "I generally spend my weekends catching up on sleep.",
            "Listening to music is a great way to relieve stress.",
            "I have a keen interest in learning foreign languages.",
            "It depends, but I usually go for a walk in the evening."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN TỰ NHIÊN (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Câu nào nghe tự nhiên hơn?",
                type: "choice",
                options: ["I very like music.", "I am really into music."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Câu nào dùng Collocation đúng?",
                type: "choice",
                options: ["I make sports every day.", "I do sports every day."],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Câu nào có độ dài và cấu trúc tốt cho Part 1?",
                type: "choice",
                options: ["Yes, I do.", "Yes, I do. It helps me relax after work."],
                answer: 1
            },

            // --- BÀI 2: THAY THẾ COLLOCATION (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: Thay thế 'do a decision' bằng cụm đúng:",
                type: "text",
                answer: "make a decision"
            },
            {
                question: "Bài 2 - Câu 2: Thay thế 'very big problem' bằng cụm hay hơn (VD: major...):",
                type: "text",
                answer: "major problem" // hoặc significant issue
            },
            {
                question: "Bài 2 - Câu 3: Thay thế 'do an effort' bằng cụm đúng:",
                type: "text",
                answer: "make an effort"
            },
            {
                question: "Bài 2 - Câu 4: Thay thế 'very tired' bằng tính từ mạnh (VD: ex...):",
                type: "text",
                answer: "exhausted"
            },

            // --- BÀI 4: PARAPHRASE (TEXT INPUT) ---
            {
                question: "Bài 4 - Câu 1: Paraphrase 'I like it very much' (Dùng 'fan'): I am a...",
                type: "text",
                answer: "big fan of it"
            },
            {
                question: "Bài 4 - Câu 2: Paraphrase 'I have no time' (Dùng 'schedule'): I have a...",
                type: "text",
                answer: "busy schedule" // hoặc tight schedule
            },
            {
                question: "Bài 4 - Câu 3: Paraphrase 'It helps me relax' (Dùng 'unwind'): It helps me...",
                type: "text",
                answer: "unwind"
            },

            // --- BÀI 6: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 6 - Câu 1: I ___ spending time outdoors. (enjoy / want)",
                type: "choice",
                options: ["enjoy", "want"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 2: My daily ___ keeps me organized. (routine / habit)",
                type: "choice",
                options: ["routine", "habit"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 3: Online shopping offers great ___. (convenience / comfort)",
                type: "choice",
                options: ["convenience", "comfort"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 4: I ___ to wake up early. (tend / go)",
                type: "choice",
                options: ["tend", "go"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 5: Reading helps me ___ after work. (relax / sleep)",
                type: "choice",
                options: ["relax", "sleep"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 6: I ___ crowded places when possible. (avoid / stop)",
                type: "choice",
                options: ["avoid", "stop"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 7: I ___ my time carefully. (manage / do)",
                type: "choice",
                options: ["manage", "do"],
                answer: 0
            },
            {
                question: "Bài 6 - Câu 8: A quiet ___ helps me concentrate. (environment / place)",
                type: "choice",
                options: ["environment", "place"],
                answer: 0
            },

            // --- BÀI 7: SPEAKING REFLEX (CÂU HỎI MỞ) ---
            {
                question: "Bài 7: Trả lời câu hỏi: 'Do you prefer mornings or evenings?' (Dùng 'tend to' và lý do).",
                type: "open",
                answer: "I tend to prefer evenings because I feel more relaxed and creative after finishing my work."
            }
        ]
    },
    {
        id: 38,
        title: "Ngày 38: Listening Band 7+ - Traps, Signal Words & Note-taking (Bẫy & Chiến Thuật)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - SIGNAL & ACTION ---
            { word: "clarify", type: "v", ipa: "/ˈklærəfaɪ/", meaning: "làm rõ (thông tin)", context: "Self-correction", example: "Let me clarify the exact date for you." },
            { word: "confirm", type: "v", ipa: "/kənˈfɜːrm/", meaning: "xác nhận", context: "Booking", example: "Please confirm your booking by email." },
            { word: "mention", type: "v", ipa: "/ˈmenʃn/", meaning: "đề cập", context: "Information", example: "The speaker mentioned a discount for students." },
            { word: "specify", type: "v", ipa: "/ˈspesɪfaɪ/", meaning: "nêu rõ, chỉ rõ", context: "Requirement", example: "The form specifies the word limit." },
            { word: "indicate", type: "v", ipa: "/ˈɪndɪkeɪt/", meaning: "cho thấy, chỉ ra", context: "Map/Sign", example: "The sign indicates the direction to the exit." },
            { word: "estimate", type: "v", ipa: "/ˈestɪmeɪt/", meaning: "ước tính", context: "Number", example: "They estimated the crowd at 500 people." },
            { word: "adjust", type: "v", ipa: "/əˈdʒʌst/", meaning: "điều chỉnh", context: "Change", example: "Prices were adjusted due to inflation." },
            { word: "replace", type: "v", ipa: "/rɪˈpleɪs/", meaning: "thay thế", context: "Change", example: "Option A was replaced by Option B." },
            { word: "schedule", type: "v", ipa: "/ˈskedʒuːl/", meaning: "lên lịch", context: "Plan", example: "The meeting is scheduled for next Monday." },
            { word: "postpone", type: "v", ipa: "/poʊˈspoʊn/", meaning: "trì hoãn", context: "Change", example: "The event was postponed until further notice." },
            { word: "cancel", type: "v", ipa: "/ˈkænsl/", meaning: "hủy bỏ", context: "Change", example: "The class was cancelled because of the storm." },
            { word: "provide", type: "v", ipa: "/prəˈvaɪd/", meaning: "cung cấp", context: "Service", example: "They provide all necessary materials." },
            { word: "require", type: "v", ipa: "/rɪˈkwaɪər/", meaning: "yêu cầu", context: "Rule", example: "Valid ID is required for entry." },
            { word: "include", type: "v", ipa: "/ɪnˈkluːd/", meaning: "bao gồm", context: "List", example: "The fee includes lunch and drinks." },
            { word: "exclude", type: "v", ipa: "/ɪkˈskluːd/", meaning: "loại trừ, không bao gồm", context: "List", example: "Taxes are excluded from the price." },
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng lên", context: "Trend", example: "Ticket prices increased last month." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm bớt", context: "Trend", example: "Costs were reduced by 10%." },
            { word: "deliver", type: "v", ipa: "/dɪˈlɪvər/", meaning: "phân phát, giao hàng", context: "Service", example: "The course is delivered online via Zoom." },

            // --- B. DANH TỪ (NOUNS) - KEYWORDS ---
            { word: "schedule", type: "n", ipa: "/ˈskedʒuːl/", meaning: "lịch trình", context: "Plan", example: "Check the schedule for details." },
            { word: "deadline", type: "n", ipa: "/ˈdedlaɪn/", meaning: "hạn chót", context: "Time", example: "You must meet the deadline." },
            { word: "fee", type: "n", ipa: "/fiː/", meaning: "lệ phí", context: "Money", example: "There is a small registration fee." },
            { word: "discount", type: "n", ipa: "/ˈdɪskaʊnt/", meaning: "giảm giá", context: "Money", example: "Students get a 20% discount." },
            { word: "option", type: "n", ipa: "/ˈɑːpʃn/", meaning: "sự lựa chọn", context: "Choice", example: "You have the option to pay online." },
            { word: "requirement", type: "n", ipa: "/rɪˈkwaɪərmənt/", meaning: "yêu cầu", context: "Rule", example: "Meet the entry requirements." },
            { word: "location", type: "n", ipa: "/loʊˈkeɪʃn/", meaning: "địa điểm", context: "Place", example: "The location is central and convenient." },
            { word: "direction", type: "n", ipa: "/dəˈrekʃn/", meaning: "hướng đi", context: "Map", example: "Follow the direction of the arrow." },
            { word: "facility", type: "n", ipa: "/fəˈsɪləti/", meaning: "cơ sở vật chất", context: "Place", example: "The gym has excellent facilities." },
            { word: "transport", type: "n", ipa: "/ˈtrænspɔːrt/", meaning: "giao thông, vận tải", context: "Travel", example: "Public transport is reliable here." },
            { word: "availability", type: "n", ipa: "/əˌveɪləˈbɪləti/", meaning: "sự có sẵn", context: "Booking", example: "Check availability before booking." },
            { word: "quantity", type: "n", ipa: "/ˈkwɑːntəti/", meaning: "số lượng", context: "Number", example: "Only a limited quantity is available." },
            { word: "measurement", type: "n", ipa: "/ˈmeʒərmənt/", meaning: "phép đo, kích thước", context: "Detail", example: "Take accurate measurements of the room." },
            { word: "percentage", type: "n", ipa: "/pərˈsentɪdʒ/", meaning: "tỷ lệ phần trăm", context: "Number", example: "A ten percent increase was noted." },
            { word: "figure", type: "n", ipa: "/ˈfɪɡjər/", meaning: "số liệu", context: "Data", example: "Key figures were presented." },
            { word: "detail", type: "n", ipa: "/ˈdiːteɪl/", meaning: "chi tiết", context: "Info", example: "Pay attention to important details." },
            { word: "instruction", type: "n", ipa: "/ɪnˈstrʌkʃn/", meaning: "hướng dẫn", context: "Rule", example: "Follow the instructions carefully." },
            { word: "exception", type: "n", ipa: "/ɪkˈsepʃn/", meaning: "ngoại lệ", context: "Rule", example: "There are no exceptions to the rule." },
            { word: "issue", type: "n", ipa: "/ˈɪʃuː/", meaning: "vấn đề", context: "Problem", example: "A minor technical issue occurred." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ/ADV) - SIGNAL WORDS ---
            { word: "initially", type: "adv", ipa: "/ɪˈnɪʃəli/", meaning: "ban đầu", context: "Sequence", example: "It was initially planned for May." },
            { word: "subsequently", type: "adv", ipa: "/ˈsʌbsɪkwəntli/", meaning: "sau đó", context: "Sequence", example: "The plan was subsequently changed." },
            { word: "approximately", type: "adv", ipa: "/əˈprɑːksɪmətli/", meaning: "xấp xỉ, khoảng", context: "Number", example: "The trip takes approximately two hours." },
            { word: "exactly", type: "adv", ipa: "/ɪɡˈzæktli/", meaning: "chính xác", context: "Number", example: "It costs exactly $50." },
            { word: "mainly", type: "adv", ipa: "/ˈmeɪnli/", meaning: "chủ yếu", context: "Emphasis", example: "The course is mainly online." },
            { word: "especially", type: "adv", ipa: "/ɪˈspeʃəli/", meaning: "đặc biệt là", context: "Emphasis", example: "This tool is especially useful for beginners." },
            { word: "available", type: "adj", ipa: "/əˈveɪləbl/", meaning: "có sẵn", context: "Status", example: "Rooms are available for booking." },
            { word: "mandatory", type: "adj", ipa: "/ˈmændətɔːri/", meaning: "bắt buộc", context: "Rule", example: "Attendance is mandatory for all students." }
        ],
        grammar: {
            title: "LISTENING BAND 7+: TRAPS & NOTE-TAKING (CHIẾN THUẬT)",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Nghe Band 7+ không phải nghe từng từ, mà là nghe ý định (Intent) và tránh bẫy (Traps). Hãy làm chủ kỹ năng Note-taking và nhận diện Signal words.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. 7 LOẠI BẪY KINH ĐIỂN (TRAPS)</h4>
                        <ul style="padding-left:20px;">
                            <li><b>Self-correction:</b> "...Monday, sorry, Tuesday." (Chọn cái sau).</li>
                            <li><b>Paraphrase:</b> Đề: "Cheap" -> Audio: "Affordable".</li>
                            <li><b>Distractor:</b> Đáp án sai nói trước/sau để gây nhiễu.</li>
                            <li><b>Number Trap:</b> 15 (fifteen) vs 50 (fifty).</li>
                            <li><b>List Trap:</b> Liệt kê nhiều, chỉ 1 cái đúng yêu cầu.</li>
                            <li><b>Negative Logic:</b> Not / Except / Unless.</li>
                            <li><b>Opinion vs Fact:</b> Ý kiến cá nhân khác sự thật.</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. SIGNAL WORDS ("ĐÈN XI-NHAN")</h4>
                        <p>Nghe từ này là biết sắp có đáp án hoặc bẫy:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Correction:</b> Actually, In fact, To be honest...</li>
                            <li><b>Contrast:</b> However, But, Whereas...</li>
                            <li><b>Sequence:</b> First, Then, Finally...</li>
                            <li><b>Emphasis:</b> Especially, Particularly, Crucially...</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. NOTE-TAKING THÔNG MINH</h4>
                        <p>Không viết cả câu. Chỉ ghi <b>Content Words</b> (Noun, Verb, Number).</p>
                        <p><b>Ký hiệu:</b> &#8593; (tăng), &#8595; (giảm), = (giống), &#8800; (khác), &#8594; (dẫn đến).</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "The library is located next to the bank.",
            "You need to pay a deposit of $50.",
            "The train leaves at 10:30 am sharp.",
            "Actually, the meeting has been rescheduled to Friday.",
            "This option is available only on weekends."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN BẪY (TRẮC NGHIỆM) ---
            {
                question: "Bài 1 - Câu 1: Audio nói: 'It's on Monday—sorry—Wednesday.' Đáp án là gì?",
                type: "choice",
                options: ["Monday", "Wednesday"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 2: Audio nói: 'We have affordable options.' Đề bài ghi: '... options.' Từ cần điền?",
                type: "choice",
                options: ["Cheap", "Affordable"], // Điền đúng từ nghe được
                answer: 1
            },
            {
                question: "Bài 1 - Câu 3: Audio nói: 'It costs 15 dollars, no wait, 50.' Đáp án là?",
                type: "choice",
                options: ["15", "50"],
                answer: 1
            },
            {
                question: "Bài 1 - Câu 4: Audio nói: 'It's not available on weekends.' Đề bài: 'Available on ...'",
                type: "choice",
                options: ["Weekends", "Weekdays"], // Suy luận logic phủ định
                answer: 1
            },

            // --- BÀI 2: DỰ ĐOÁN TRƯỚC KHI NGHE (TEXT INPUT) ---
            {
                question: "Bài 2 - Câu 1: 'The course lasts ___.' (Dự đoán loại từ: Time/Duration)",
                type: "text",
                answer: "Duration"
            },
            {
                question: "Bài 2 - Câu 2: 'The fee includes ___.' (Dự đoán loại từ: Noun - Vật chất/Dịch vụ)",
                type: "text",
                answer: "Noun"
            },
            {
                question: "Bài 2 - Câu 3: 'The meeting will be held in ___.' (Dự đoán loại từ: Place/Room)",
                type: "text",
                answer: "Place"
            },

            // --- BÀI 3: PARAPHRASE MAPPING (TEXT INPUT) ---
            {
                question: "Bài 3 - Câu 1: Đề: 'Cheap' -> Audio có thể dùng từ gì? (Affordable/Low-cost)",
                type: "text",
                answer: "Affordable"
            },
            {
                question: "Bài 3 - Câu 2: Đề: 'Start' -> Audio có thể dùng từ gì? (Begin/Commence)",
                type: "text",
                answer: "Begin"
            },
            {
                question: "Bài 3 - Câu 3: Đề: 'Reduce' -> Audio có thể dùng từ gì? (Decrease/Cut)",
                type: "text",
                answer: "Decrease"
            },

            // --- BÀI 7: ĐIỀN TỪ VỰNG ---
            {
                question: "Bài 7 - Câu 1: Please ___ the date with the office. (confirm / say)",
                type: "choice",
                options: ["confirm", "say"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 2: The fee ___ materials and lunch. (includes / has)",
                type: "choice",
                options: ["includes", "has"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 3: The event was ___ due to weather. (postponed / stopped)",
                type: "choice",
                options: ["postponed", "stopped"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 4: Check room ___ before booking. (availability / open)",
                type: "choice",
                options: ["availability", "open"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 5: The deadline is ___ Friday. (strictly / exactly)",
                type: "choice",
                options: ["strictly", "exactly"], // Ngữ cảnh hạn chót
                answer: 0
            },
            {
                question: "Bài 7 - Câu 6: Prices were ___ to reflect demand. (adjusted / changed)",
                type: "choice",
                options: ["adjusted", "changed"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 7: Follow the ___ carefully. (instructions / words)",
                type: "choice",
                options: ["instructions", "words"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 8: The course is ___ online. (delivered / given)",
                type: "choice",
                options: ["delivered", "given"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 9: There is no ___ to the rule. (exception / way)",
                type: "choice",
                options: ["exception", "way"],
                answer: 0
            },
            {
                question: "Bài 7 - Câu 10: ___, the plan changed. (Subsequently / Then)",
                type: "choice",
                options: ["Subsequently", "Then"],
                answer: 0
            }
        ]
    },
    {
        id: 39,
        title: "Ngày 39: Reading Band 7+ - Question Types & Time Management (Chiến Lược Đọc Hiểu)",
        vocab: [
            // --- A. ĐỘNG TỪ (VERBS) - ACADEMIC READING ---
            { word: "indicate", type: "v", ipa: "/ˈɪndɪkeɪt/", meaning: "cho thấy, chỉ ra", context: "Data/Graph", example: "The data indicates a clear upward trend." },
            { word: "suggest", type: "v", ipa: "/səˈdʒest/", meaning: "gợi ý, đề xuất (khả năng)", context: "Conclusion", example: "The author suggests a possible link between diet and health." },
            { word: "demonstrate", type: "v", ipa: "/ˈdemənstreɪt/", meaning: "chứng minh, thể hiện rõ", context: "Proof", example: "Results demonstrate the effectiveness of the new drug." },
            { word: "imply", type: "v", ipa: "/ɪmˈplaɪ/", meaning: "hàm ý, ngụ ý", context: "Inference", example: "The text implies significant changes in the industry." },
            { word: "confirm", type: "v", ipa: "/kənˈfɜːrm/", meaning: "xác nhận", context: "Verification", example: "Recent findings confirm the initial theory." },
            { word: "challenge", type: "v", ipa: "/ˈtʃælɪndʒ/", meaning: "thách thức, nghi ngờ", context: "Argument", example: "The study challenges common assumptions about sleep." },
            { word: "highlight", type: "v", ipa: "/ˈhaɪlaɪt/", meaning: "nhấn mạnh, làm nổi bật", context: "Emphasis", example: "The article highlights the risks associated with smoking." },
            { word: "address", type: "v", ipa: "/əˈdres/", meaning: "đề cập, giải quyết", context: "Issue", example: "The paper addresses gaps in current research." },
            { word: "compare", type: "v", ipa: "/kəmˈper/", meaning: "so sánh", context: "Analysis", example: "Two different methods are compared in this section." },
            { word: "contrast", type: "v", ipa: "/kənˈtræst/", meaning: "đối chiếu (làm rõ sự khác biệt)", context: "Analysis", example: "The results contrast sharply with previous studies." },
            { word: "attribute", type: "v", ipa: "/əˈtrɪbjuːt/", meaning: "quy cho, cho là do", context: "Cause", example: "Changes are attributed to the new government policy." },
            { word: "lead to", type: "v", ipa: "/liːd tuː/", meaning: "dẫn đến", context: "Result", example: "This lack of funding leads to slower growth." },
            { word: "result in", type: "v", ipa: "/rɪˈzʌlt ɪn/", meaning: "dẫn tới, gây ra", context: "Result", example: "New policies result in substantial savings." },
            { word: "affect", type: "v", ipa: "/əˈfekt/", meaning: "ảnh hưởng", context: "Impact", example: "Rising costs affect access to education." },
            { word: "influence", type: "v", ipa: "/ˈɪnfluəns/", meaning: "tác động, chi phối", context: "Impact", example: "Media heavily influences public opinion." },
            { word: "reduce", type: "v", ipa: "/rɪˈduːs/", meaning: "giảm", context: "Trend", example: "Safety measures significantly reduce risk." },
            { word: "increase", type: "v", ipa: "/ɪnˈkriːs/", meaning: "tăng", context: "Trend", example: "Demand increased rapidly over the decade." },
            { word: "maintain", type: "v", ipa: "/meɪnˈteɪn/", meaning: "duy trì", context: "State", example: "High standards are maintained throughout the process." },

            // --- B. DANH TỪ (NOUNS) - READING KEYWORDS ---
            { word: "evidence", type: "n", ipa: "/ˈevɪdəns/", meaning: "bằng chứng", context: "Support", example: "Strong evidence supports this hypothesis." },
            { word: "assumption", type: "n", ipa: "/əˈsʌmpʃn/", meaning: "giả định", context: "Theory", example: "Common assumptions often fail under scrutiny." },
            { word: "finding", type: "n", ipa: "/ˈfaɪndɪŋ/", meaning: "phát hiện (từ nghiên cứu)", context: "Research", example: "Key findings emerge from the data analysis." },
            { word: "outcome", type: "n", ipa: "/ˈaʊtkʌm/", meaning: "kết quả", context: "Result", example: "Positive outcomes occur when procedures are followed." },
            { word: "factor", type: "n", ipa: "/ˈfæktər/", meaning: "yếu tố", context: "Cause", example: "A major factor in the decline is cost." },
            { word: "impact", type: "n", ipa: "/ˈɪmpækt/", meaning: "tác động", context: "Effect", example: "The social impact matters greatly." },
            { word: "trend", type: "n", ipa: "/trend/", meaning: "xu hướng", context: "Pattern", example: "There is a growing trend towards remote work." },
            { word: "pattern", type: "n", ipa: "/ˈpætərn/", meaning: "mô hình, quy luật", context: "Data", example: "A consistent pattern was observed across all groups." },
            { word: "issue", type: "n", ipa: "/ˈɪʃuː/", meaning: "vấn đề", context: "Topic", example: "Pollution is a pressing issue globally." },
            { word: "approach", type: "n", ipa: "/əˈproʊtʃ/", meaning: "cách tiếp cận", context: "Method", example: "An alternative approach yielded better results." },
            { word: "comparison", type: "n", ipa: "/kəmˈpærɪsn/", meaning: "sự so sánh", context: "Analysis", example: "A fair comparison requires equal conditions." },
            { word: "contrast", type: "n", ipa: "/ˈkɒntrɑːst/", meaning: "sự đối lập", context: "Difference", example: "In contrast to 2010, the results differ." },
            { word: "proportion", type: "n", ipa: "/prəˈpɔːrʃn/", meaning: "tỷ lệ", context: "Data", example: "A large proportion of the budget was spent." },
            { word: "distribution", type: "n", ipa: "/ˌdɪstrɪˈbjuːʃn/", meaning: "sự phân bố", context: "Data", example: "The map shows income distribution across the region." },
            { word: "reference", type: "n", ipa: "/ˈrefərəns/", meaning: "sự tham chiếu", context: "Grammar", example: "Pronoun reference can be tricky in Reading." },
            { word: "statement", type: "n", ipa: "/ˈsteɪtmənt/", meaning: "mệnh đề, lời tuyên bố", context: "Question Type", example: "Decide if the statement matches the text." },
            { word: "claim", type: "n", ipa: "/kleɪm/", meaning: "luận điểm, lời khẳng định", context: "Argument", example: "The central claim of the article is controversial." },
            { word: "limitation", type: "n", ipa: "/ˌlɪmɪˈteɪʃn/", meaning: "hạn chế", context: "Research", example: "Study limitations exist due to sample size." },
            { word: "context", type: "n", ipa: "/ˈkɒntekst/", meaning: "bối cảnh", context: "Understanding", example: "Historical context helps explain the event." },
            { word: "scope", type: "n", ipa: "/skoʊp/", meaning: "phạm vi", context: "Research", example: "The scope of the study is limited to Europe." },

            // --- C. TÍNH TỪ / TRẠNG TỪ (ADJ/ADV) - MỨC ĐỘ & TÍNH CHẤT ---
            { word: "significant", type: "adj", ipa: "/sɪɡˈnɪfɪkənt/", meaning: "đáng kể", context: "Change", example: "There was a significant increase in sales." },
            { word: "considerable", type: "adj", ipa: "/kənˈsɪdərəbl/", meaning: "lớn, đáng kể", context: "Amount", example: "Considerable effort was put into the project." },
            { word: "overall", type: "adv", ipa: "/ˌoʊvərˈɔːl/", meaning: "nhìn chung", context: "Summary", example: "Overall, trends rise in the tech sector." },
            { word: "primarily", type: "adv", ipa: "/praɪˈmerəli/", meaning: "chủ yếu", context: "Reason", example: "The delay was primarily due to cost." },
            { word: "largely", type: "adv", ipa: "/ˈlɑːrdʒli/", meaning: "phần lớn", context: "Extent", example: "The system remained largely unchanged." },
            { word: "particularly", type: "adv", ipa: "/pərˈtɪkjələrli/", meaning: "đặc biệt là", context: "Emphasis", example: "This point is particularly relevant to the discussion." },
            { word: "unlikely", type: "adj", ipa: "/ʌnˈlaɪkli/", meaning: "khó xảy ra", context: "Probability", example: "It is unlikely that prices will drop soon." },
            { word: "relevant", type: "adj", ipa: "/ˈreləvənt/", meaning: "liên quan, thích hợp", context: "Information", example: "Provide relevant evidence to support your answer." }
        ],
        grammar: {
            title: "READING BAND 7+: QUESTION TYPES & TIME MANAGEMENT",
            content: `
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                    <p style="font-style:italic; color:#666;">Reading Band 7+ không phải là đọc hết từng chữ, mà là kỹ năng <b>Paraphrase</b> và <b>Quản lý thời gian</b> thông minh.</p>

                    <div style="margin-top:20px; border-left: 5px solid #2b70c9; padding-left: 15px;">
                        <h4 style="color: #2b70c9; margin: 0;">1. CHIẾN LƯỢC TỔNG QUÁT</h4>
                        <p><b>Quy trình:</b> Xác định câu hỏi &#8594; Dự đoán Paraphrase &#8594; Quét (Scan) đúng đoạn.</p>
                        <p><b>Thứ tự làm bài tối ưu:</b><br>
                        1. Matching Headings (Làm khi đầu óc tỉnh táo nhất).<br>
                        2. T/F/NG hoặc Y/N/NG.<br>
                        3. MCQ (Trắc nghiệm).<br>
                        4. Summary/Flow-chart.<br>
                        5. Matching Information (Khó nhất, để cuối).</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #58cc02; padding-left: 15px;">
                        <h4 style="color: #58cc02; margin: 0;">2. PARAPHRASE CHAINS (CHUỖI ĐỒNG NGHĨA)</h4>
                        <p>Đề bài không bao giờ dùng từ y hệt trong bài đọc. Hãy học theo chuỗi:</p>
                        <ul style="padding-left:20px;">
                            <li><b>Reduce</b> &#8594; cut down &#8594; lower &#8594; decrease.</li>
                            <li><b>Cause</b> &#8594; lead to &#8594; result in &#8594; bring about.</li>
                        </ul>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #ff9800; padding-left: 15px;">
                        <h4 style="color: #ff9800; margin: 0;">3. CHIẾN THUẬT TỪNG DẠNG</h4>
                        <p><b>True/False/Not Given:</b><br>
                        - True: Khớp 100%.<br>
                        - False: Ngược lại hoàn toàn.<br>
                        - Not Given: Không tìm thấy thông tin (Cấm suy luận).</p>
                        <p><b>Matching Headings:</b> Đọc câu đầu + câu cuối đoạn. Bỏ qua ví dụ.</p>
                        <p><b>Summary Completion:</b> Dự đoán loại từ (Noun/Verb/Adj) trước khi tìm.</p>
                    </div>

                    <div style="margin-top:20px; border-left: 5px solid #e91e63; padding-left: 15px;">
                        <h4 style="color: #e91e63; margin: 0;">4. QUẢN LÝ THỜI GIAN</h4>
                        <p>- Mục tiêu: 18-19 phút/Passage.<br>
                        - Không quá 60-90 giây/câu.<br>
                        - Gặp câu khó: Đánh dấu ❓ và quay lại sau.</p>
                    </div>
                </div>
            `
        },
        speaking: [
            "The data clearly indicates a downward trend.",
            "Strong evidence suggests a link between stress and illness.",
            "This finding challenges previous assumptions about the topic.",
            "Results demonstrate the effectiveness of the new method.",
            "Overall, the study highlights the need for further research."
        ],
        quiz: [
            // --- BÀI 1: NHẬN DIỆN PARAPHRASE (NỐI TỪ) ---
            {
                question: "Bài 1 - Câu 1: Tìm từ đồng nghĩa trong bài đọc cho 'increase' (đề bài).",
                type: "choice",
                options: ["rise / grow", "cut / lower"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 2: Tìm từ đồng nghĩa cho 'reduce'.",
                type: "choice",
                options: ["decrease / decline", "expand / develop"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 3: Tìm từ đồng nghĩa cho 'cause'.",
                type: "choice",
                options: ["lead to / result in", "stop / prevent"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 4: Tìm từ đồng nghĩa cho 'important'.",
                type: "choice",
                options: ["crucial / significant", "minor / trivial"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 5: Tìm từ đồng nghĩa cho 'problem'.",
                type: "choice",
                options: ["issue / challenge", "solution / benefit"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 6: Tìm từ đồng nghĩa cho 'improve'.",
                type: "choice",
                options: ["enhance / develop", "worsen / decline"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 7: Tìm từ đồng nghĩa cho 'begin'.",
                type: "choice",
                options: ["start / commence", "end / finish"],
                answer: 0
            },
            {
                question: "Bài 1 - Câu 8: Tìm từ đồng nghĩa cho 'end'.",
                type: "choice",
                options: ["conclude / finish", "initiate / launch"],
                answer: 0
            },

            // --- BÀI 2: T/F/NG LOGIC (XÁC ĐỊNH LOGIC) ---
            {
                question: "Bài 2 - Câu 9: 'The study proves that exercise ALWAYS improves memory.' (Bài đọc nói: 'exercise CAN improve...').",
                type: "choice",
                options: ["False", "True", "Not Given"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 10: 'The author suggests a possible link between diet and health.' (Bài đọc: 'Evidence indicates a connection...').",
                type: "choice",
                options: ["True", "False", "Not Given"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 11: 'The research was conducted in three countries.' (Bài đọc không nhắc đến địa điểm).",
                type: "choice",
                options: ["Not Given", "False", "True"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 12: 'Technology reduced costs in ALL cases.' (Bài đọc: 'Technology reduced costs in MOST cases').",
                type: "choice",
                options: ["False", "True", "Not Given"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 13: 'The article compares two methods.' (Bài đọc bàn về method A và method B).",
                type: "choice",
                options: ["True", "False", "Not Given"],
                answer: 0
            },
            {
                question: "Bài 2 - Câu 14: 'Experts disagree on the outcome.' (Bài đọc nói experts đồng ý).",
                type: "choice",
                options: ["False", "True", "Not Given"],
                answer: 0
            },

            // --- BÀI 5: SUMMARY COMPLETION (DỰ ĐOÁN TỪ) ---
            {
                question: "Bài 5 - Câu 25: 'The study focused on the ___ of climate change.' (Dự đoán loại từ: Noun)",
                type: "text",
                answer: "impact" // hoặc effects/causes
            },
            {
                question: "Bài 5 - Câu 26: 'Researchers ___ data from 500 participants.' (Dự đoán loại từ: Verb - quá khứ)",
                type: "text",
                answer: "collected" // hoặc gathered
            },
            {
                question: "Bài 5 - Câu 27: 'The results were ___ significant.' (Dự đoán loại từ: Adverb)",
                type: "text",
                answer: "statistically" // hoặc highly
            },
            {
                question: "Bài 5 - Câu 28: 'A common ___ is that sugar causes hyperactivity.' (Dự đoán loại từ: Noun)",
                type: "text",
                answer: "misconception" // hoặc belief
            },
            {
                question: "Bài 5 - Câu 29: 'The new system is more ___ than the old one.' (Dự đoán loại từ: Adjective)",
                type: "text",
                answer: "efficient" // hoặc effective
            },
            {
                question: "Bài 5 - Câu 30: 'Participants were asked to ___ a survey.' (Dự đoán loại từ: Verb)",
                type: "text",
                answer: "complete" // hoặc fill out
            },

            // --- BÀI 6: SỬA LỖI ĐỌC HIỂU (TEXT INPUT) ---
            {
                question: "Bài 6 - Câu 31: 'The text implies this happens everywhere.' (Lỗi: Over-generalization) -> Sửa: The text implies this happens...",
                type: "text",
                answer: "in specific contexts"
            },
            {
                question: "Bài 6 - Câu 32: 'This must be the main cause.' (Lỗi: Quá khẳng định) -> Sửa: This...",
                type: "text",
                answer: "might be a major cause"
            },
            {
                question: "Bài 6 - Câu 33: 'The author clearly supports this view.' (Lỗi: Assumption) -> Sửa: The author...",
                type: "text",
                answer: "presents arguments for this view"
            },
            {
                question: "Bài 6 - Câu 34: 'This example represents the whole trend.' (Lỗi: Generalization) -> Sửa: This example...",
                type: "text",
                answer: "illustrates one aspect of the trend"
            },
            {
                question: "Bài 6 - Câu 35: 'The result applies to all groups.' (Lỗi: Extreme word 'all') -> Sửa: The result applies to...",
                type: "text",
                answer: "most groups" // hoặc specific groups
            },

            // --- BÀI 8: ĐIỀN TỪ VỰNG (TRẮC NGHIỆM/ĐIỀN TỪ) ---
            {
                question: "Bài 8 - Câu 1: The article ___ a clear pattern. (indicates / says)",
                type: "choice",
                options: ["indicates", "says"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 2: There is strong ___ to support the claim. (evidence / thing)",
                type: "choice",
                options: ["evidence", "thing"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 3: This factor ___ outcomes significantly. (influences / makes)",
                type: "choice",
                options: ["influences", "makes"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 4: The study ___ two approaches. (compares / looks)",
                type: "choice",
                options: ["compares", "looks"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 5: Results should be interpreted in ___. (context / place)",
                type: "choice",
                options: ["context", "place"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 6: A large ___ of participants agreed. (proportion / part)",
                type: "choice",
                options: ["proportion", "part"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 7: The author ___ a possible explanation. (suggests / tells)",
                type: "choice",
                options: ["suggests", "tells"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 8: Findings ___ earlier research. (confirm / say yes)",
                type: "choice",
                options: ["confirm", "say yes"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 9: This statement is ___ to the argument. (relevant / good)",
                type: "choice",
                options: ["relevant", "good"],
                answer: 0
            },
            {
                question: "Bài 8 - Câu 10: ___, the impact was positive. (Overall / In all)",
                type: "choice",
                options: ["Overall", "In all"],
                answer: 0
            }
        ]
    },    
];
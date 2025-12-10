// Quiz Data grouped by topic
const allQuizData = {
    'fiilimsiler': [
        {
            question: "'Sınavı kazanmak için çok çalıştı.' cümlesindeki fiilimsinin türü nedir?",
            options: ["Sıfat-Fiil", "Zarf-Fiil", "İsim-Fiil", "Çekimli Fiil"],
            correct: 2,
            explanation: "'kazanmak' kelimesi -mak ekini almıştır. Kodlama: MAYIŞMAK -> İsim-Fiil."
        },
        {
            question: "Aşağıdakilerin hangisinde Sıfat-Fiil kullanılmıştır?",
            options: ["Koşarak eve gitti.", "Güler yüzlü bir insandı.", "Bakışları beni korkuttu.", "Gelip hemen gitti."],
            correct: 1,
            explanation: "'Güler' kelimesindeki -er eki sıfat-fiildir. (Anası MEZAR dikecekmiş)."
        },
        {
            question: "'Dönülmez akşamın ufkundayız.' cümlesindeki 'dönülmez' sözcüğü hangi fiilimsidir?",
            options: ["Sıfat-Fiil (-mez)", "İsim-Fiil", "Zarf-Fiil", "Fiilimsi değildir"],
            correct: 0,
            explanation: "-mez eki sıfat-fiil ekidir ve 'akşam' ismini nitelemiştir."
        },
        {
            question: "'Gidip de gelmemek var.' cümlesinde kaç tane fiilimsi vardır?",
            options: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "'Gidip' (Zarf-fiil) ve 'gelmemek' (İsim-fiil) olmak üzere 2 tane fiilimsi vardır."
        },
        {
            question: "Zarf-fiil ekleri için kullanılan kodlama hangisidir?",
            options: ["MAYIŞMAK", "ANASI MEZAR DİKECEKMİŞ", "KENYALI ASİYE...", "FISTIKÇI ŞAHAP"],
            correct: 2,
            explanation: "Zarf-fiiller 'Kenyalı Asiye...' kodlamasıyla akılda tutulur."
        }
    ],
    'cumle-ogeleri': [
        {
            question: "'Babam bahçedeki ağaçları suladı.' cümlesinin Yüklemi hangisidir?",
            options: ["Babam", "Bahçedeki", "Ağaçları", "Suladı"],
            correct: 3,
            explanation: "Yüklem iş, oluş, hareket bildirir. Burada yapılan iş 'suladı'dır."
        },
        {
            question: "'Öğrenciler sessizce öğretmeni dinliyordu.' cümlesinde 'sessizce' sözcüğü hangi ögedir?",
            options: ["Özne", "Belirtili Nesne", "Zarf Tamlayıcısı", "Yer Tamlayıcısı"],
            correct: 2,
            explanation: "'Nasıl dinliyordu?' sorusuna cevap verdiği için Zarf Tamlayıcısıdır."
        },
        {
            question: "Hangi cümlede Gizli Özne vardır?",
            options: ["Ahmet okula geldi.", "Yarın sinemaya gideceğiz.", "Kediler sütü sever.", "Hava çok güzel."],
            correct: 1,
            explanation: "'Gideceğiz' yükleminin öznesi 'Biz'dir ancak cümlede yazılmamıştır (Gizli Özne)."
        },
        {
            question: "Yer Tamlayıcısı (Dolaylı Tümleç) hangi sorulara cevap verir?",
            options: ["Ne, Neyi", "Nasıl, Ne zaman", "Kime, Nerede, Nereden", "Kim, Ne"],
            correct: 2,
            explanation: "-e, -de, -den eklerini alan sorular Yer Tamlayıcısını buldurur."
        },
        {
            question: "'Kitabı masaya bıraktım.' cümlesinde 'masaya' hangi ögedir?",
            options: ["Nesne", "Yer Tamlayıcısı", "Zarf Tamlayıcısı", "Özne"],
            correct: 1,
            explanation: "'Nereye bıraktım?' -> 'Masaya'. Yönelme bildirdiği için Yer Tamlayıcısıdır."
        }
    ],
    'yazim-kurallari': [
        {
            question: "Aşağıdaki cümlelerin hangisinde 'de/da' yazımı yanlıştır?",
            options: ["Sen de bizimle gel.", "Ev de kimse yoktu.", "Kitabım okulda kalmış.", "Bu soruyu Ahmet de bildi."],
            correct: 1,
            explanation: "Burada bulunma anlamı vardır, 'Evde' şeklinde bitişik yazılmalıydı. Bağlaç değildir."
        },
        {
            question: "'Ki' ekinin yazımı hangisinde doğrudur?",
            options: ["Duydumki unutmuşsun.", "Oysaki seni çok sevmiştim.", "Ev deki hesap çarşıya uymaz.", "Sen ki dünyalara değersin (Bitişik)"],
            correct: 1,
            explanation: "SOMBAHÇEM kodlamasındaki kelimelerden biri olduğu için 'Oysaki' bitişik yazılır."
        },
        {
            question: "Hangisinde büyük harf hatası yapılmıştır?",
            options: ["Kedimiz Pamuk çok tatlı.", "Yarın Ankara'ya gideceğiz.", "İngilizce dersini seviyorum.", "Kuzey anadolu fay hattı aktiftir."],
            correct: 3,
            explanation: "Kuzey Anadolu özel isimdir, her iki kelime de büyük harfle başlamalıdır."
        },
        {
            question: "Bağlaç olan 'de/da' cümleden çıkarıldığında ne olur?",
            options: ["Anlam tamamen bozulur.", "Anlam daralabilir ama bozulmaz.", "Kelime anlamı değişir.", "Cümle anlamsızlaşır."],
            correct: 1,
            explanation: "Bağlaç olan de/da cümleden çıkarılabilir, anlam bozulmaz."
        },
        {
            question: "Hangisi SOMBAHÇEM kodlamasında (bitişik yazılan ki'ler) yer ALMAZ?",
            options: ["Sanki", "Mademki", "Belki", "Çünküki"],
            correct: 3,
            explanation: "Sanki, Oysaki, Mademki, Belki, Halbuki, Çünkü, Eğerki, Meğerki (SOMBAHÇEM)."
        }
    ]
};

let currentTopic = 'fiilimsiler';
let currentQuizData = allQuizData['fiilimsiler'];
let currentQuestion = 0;
let score = 0;

// DOM Elements
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackDetail = document.getElementById('feedback-detail');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const currentQuestionNum = document.getElementById('current-question');
const scoreDisplay = document.getElementById('score-display');
const quizContainer = document.getElementById('quiz-container');
const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');

// Navigation Logic
const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
const topicSections = document.querySelectorAll('.topic-section');
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

function switchTopic(topicId) {
    // 1. Update Active Nav State
    navItems.forEach(item => {
        if (item.getAttribute('data-target') === topicId) {
            item.classList.add('active');
            // Also styling for mobile
            if (item.classList.contains('mobile-nav-item')) {
                item.classList.add('bg-indigo-50', 'text-indigo-600', 'pl-6');
            }
        } else {
            item.classList.remove('active');
            if (item.classList.contains('mobile-nav-item')) {
                item.classList.remove('bg-indigo-50', 'text-indigo-600', 'pl-6');
            }
        }
    });

    // 2. Show/Hide Content Sections
    const targetSection = document.getElementById(`content-${topicId}`);
    if (targetSection) {
        topicSections.forEach(sec => sec.classList.add('hidden'));
        targetSection.classList.remove('hidden');

        // Update Current Topic & Quiz Data
        currentTopic = topicId;
        currentQuizData = allQuizData[topicId];

        // Reset Quiz
        resetQuiz();

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Fallback for "Ses Bilgisi" which has no content yet
        showToast('🚧 Bu konu henüz hazırlanıyor öğretmenim!');
    }
}

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        switchTopic(target);

        // Close mobile menu
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// Quiz Logic
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultScreen.classList.add('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (!currentQuizData || currentQuizData.length === 0) return;

    const data = currentQuizData[currentQuestion];

    // Update UI
    currentQuestionNum.textContent = `${currentQuestion + 1}/${currentQuizData.length}`;
    scoreDisplay.textContent = `PUAN: ${score}`;
    questionText.textContent = data.question;
    optionsContainer.innerHTML = '';

    // Reset Feedback
    feedbackArea.className = "hidden mt-6 p-4 rounded-xl text-center transform transition-all duration-300 scale-95 opacity-0";

    // Create Options
    data.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.className = "quiz-option bg-white p-4 rounded-xl border-2 border-gray-100 shadow-sm font-semibold text-gray-700 flex items-center";
        btn.innerHTML = `
            <span class="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center mr-3 font-bold text-sm border border-gray-200">${String.fromCharCode(65 + index)}</span>
            ${option}
        `;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, selectedBtn) {
    const data = currentQuizData[currentQuestion];
    const options = optionsContainer.children;

    // Disable all options
    for (let btn of options) {
        btn.classList.add('disabled');
        btn.onclick = null;
    }

    if (selectedIndex === data.correct) {
        // CORRECT
        selectedBtn.classList.add('correct');
        selectedBtn.querySelector('span').classList.add('bg-green-200', 'text-green-700', 'border-green-300');
        score += 20; // Assuming 5 questions per topic approx (100 total) or can adjust. 
        // Or if varying number of questions: score += Math.floor(100 / currentQuizData.length);

        scoreDisplay.textContent = `PUAN: ${score}`;

        feedbackMessage.textContent = "Harikasın! Doğru Cevap 🎉";
        feedbackMessage.className = "font-bold text-lg text-green-600";

        // Small confetti
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
        });

    } else {
        // WRONG
        selectedBtn.classList.add('wrong');
        selectedBtn.querySelector('span').classList.add('bg-red-200', 'text-red-700', 'border-red-300');

        // Highlight correct answer
        options[data.correct].classList.add('correct');
        options[data.correct].querySelector('span').classList.add('bg-green-200', 'text-green-700', 'border-green-300');

        feedbackMessage.textContent = "Üzgünüm, Yanlış Cevap 😔";
        feedbackMessage.className = "font-bold text-lg text-red-600";
    }

    // Show Explanation
    feedbackDetail.textContent = data.explanation;

    // Show Feedback Area
    feedbackArea.classList.remove('hidden');
    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        feedbackArea.classList.remove('scale-95', 'opacity-0');
        feedbackArea.classList.add('scale-100', 'opacity-100');
        if (selectedIndex === data.correct) {
            feedbackArea.classList.add('bg-green-50', 'border', 'border-green-100');
            feedbackArea.classList.remove('bg-red-50', 'border-red-100');
        } else {
            feedbackArea.classList.add('bg-red-50', 'border', 'border-red-100');
            feedbackArea.classList.remove('bg-green-50', 'border-green-100');
        }
    }, 10);
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentQuizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

if (restartBtn) {
    restartBtn.onclick = () => {
        resetQuiz();
    };
}

function showResults() {
    quizContainer.style.display = 'none';
    resultScreen.classList.remove('hidden');
    finalScore.textContent = score;

    // Celebration
    if (score > (currentQuizData.length * 20 * 0.5)) { // Passed > 50%
        var duration = 3 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            var left = Date.now() < end;
            if (left) {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#4FACFE', '#A18CD1', '#FFD200']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#4FACFE', '#A18CD1', '#FFD200']
                });
                requestAnimationFrame(frame);
            }
        }());
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-fade-in-down border-l-4 border-fun-yellow';
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Start with Fiilimsiler
resetQuiz();

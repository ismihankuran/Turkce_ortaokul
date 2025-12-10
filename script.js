// Quiz Data
const quizData = [
    {
        question: "Aşağıdaki cümlelerin hangisinde 'isim-fiil' kullanılmıştır?",
        options: [
            "Koşarak eve gitti.",
            "Gelen gideni aratır.",
            "Kitap okumayı çok severim.",
            "Güle güle kullanın."
        ],
        correct: 2, // Index of correct option (0-based)
        explanation: "C şıkkındaki 'okumayı' kelimesi -ma/-me isim-fiil ekini almıştır. A: Zarf-fiil, B: Sıfat-fiil, D: Zarf-fiil."
    },
    {
        question: "'Tanıdık yüzler görmek insanı mutlu ediyor.' cümlesindeki 'tanıdık' sözcüğü hangi tür fiilimsidir?",
        options: [
            "İsim-Fiil",
            "Sıfat-Fiil",
            "Zarf-Fiil",
            "Çekimli Fiil"
        ],
        correct: 1,
        explanation: "'Tanıdık' kelimesi -dık/-dik sıfat-fiil ekini alarak 'yüzler' ismini nitelemiştir."
    },
    {
        question: "Hangisinde zarf-fiil (bağ-fiil) YOKTUR?",
        options: [
            "Gelir gelmez seni sordu.",
            "Ders çalışıp uyudu.",
            "Okula giderken arkadaşını gördü.",
            "Sararmış yapraklar döküldü."
        ],
        correct: 3,
        explanation: "D şıkkındaki 'sararmış' kelimesi sıfat-fiildir (-mış). Diğer şıklarda: A (gelir gelmez -remz), B (-ıp), C (-ken) zarf-fiildir."
    },
    {
        question: "Aşağıdaki eklerden hangisi 'Sıfat-Fiil' eklerinden biri DEĞİLDİR?",
        options: [
            "-an",
            "-ası",
            "-mak",
            "-mez"
        ],
        correct: 2,
        explanation: "-mak eki Mayışmak şifresinden hatırlayacağımız üzere İsim-Fiil ekidir."
    },
    {
        question: "'Durmaksızın konuşuyordu.' cümlesindeki fiilimsinin türü nedir?",
        options: [
            "Zarf-Fiil",
            "Sıfat-Fiil",
            "İsim-Fiil",
            "Hiçbiri"
        ],
        correct: 0,
        explanation: "'-maksızın' eki durum bildiren bir zarf-fiil ekidir."
    }
];

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
const currentQuestionNum = document.getElementById('current-question');
const scoreDisplay = document.getElementById('score-display');
const quizContainer = document.getElementById('quiz-container');
const resultScreen = document.getElementById('result-screen');
const finalScore = document.getElementById('final-score');

// Init Quiz
function loadQuestion() {
    const data = quizData[currentQuestion];

    // Update UI
    currentQuestionNum.textContent = currentQuestion + 1;
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
    const data = quizData[currentQuestion];
    const options = optionsContainer.children;

    // Disable all options
    for (let btn of options) {
        btn.classList.add('disabled'); // Add custom disabled style
        btn.onclick = null;
    }

    if (selectedIndex === data.correct) {
        // CORRECT
        selectedBtn.classList.add('correct');
        selectedBtn.querySelector('span').classList.add('bg-green-200', 'text-green-700', 'border-green-300');
        score += 20;
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
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    quizContainer.style.display = 'none';
    resultScreen.classList.remove('hidden');
    finalScore.textContent = score;

    // Big Celebration Confetti
    if (score > 60) {
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

// Mobile Menu Toggle
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
}

// Navigation Logic
document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Remove active class from all
        document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(nav => nav.classList.remove('active'));
        // Add to clicked
        e.target.classList.add('active');

        const target = e.target.getAttribute('data-target');
        if (target === 'fiilimsiler') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Toast notification for upcoming content
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-fade-in-down';
            // toast.style.animation = 'fadeInDown 0.5s ease-out reverse'; // Removed incorrect manual animation
            toast.innerHTML = '🚧 Bu konu henüz hazırlanıyor öğretmenim!';
            document.body.appendChild(toast);

            // Remove after 3s
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // Close mobile menu if open
        if (menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
});

// Start
loadQuestion();

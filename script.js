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
    ],
    'sozcukte-anlam': [
        {
            question: "Aşağıdakilerden hangisinde 'Ağır' sözcüğü MECAZ anlamda kullanılmıştır?",
            options: ["Çuval çok ağır.", "Ağır adımlarla yürüdü.", "Bize çok ağır sözler söyledi.", "Masanın ağır bir kokusu var."],
            correct: 2,
            explanation: "'Ağır söz' kırıcı anlamında kullanıldığı için mecazdır."
        },
        {
            question: "'Yaşlı' kelimesinin eş anlamlısı aşağıdakilerden hangisidir?",
            options: ["Genç", "İhtiyar", "Büyük", "Dede"],
            correct: 1,
            explanation: "Yaşlı - İhtiyar eş anlamlıdır."
        },
        {
            question: "Hangi seçenekte TERİM anlamlı bir sözcük vardır?",
            options: ["Futbolcu penaltı kaçırdı.", "Akşam yemeği yedik.", "Hava çok güzel.", "Kitap okuyorum."],
            correct: 0,
            explanation: "Penaltı, futbol terimidir."
        },
        {
            question: "'Gül' sözcüğü eş seslidir. Hangisinde çiçek anlamı DIŞINDA kullanılmıştır?",
            options: ["Bahçedeki güller solmuş.", "Kırmızı gül aldım.", "Fıkraya çok güldük.", "Gül kokusu geliyor."],
            correct: 2,
            explanation: "Burada gülmek eylemi olarak kullanılmıştır."
        },
        {
            question: "Aşağıdaki kelime çiftlerinden hangisi ZIT anlamlıdır?",
            options: ["Siyah - Kara", "Okul - Mektep", "Acı - Tatlı", "Ses - Seda"],
            correct: 2,
            explanation: "Acı ve Tatlı zıt anlamlıdır. Diğerleri eş anlamlıdır."
        }
    ],
    'cumlede-anlam': [
        {
            question: "Hangisinde AMAÇ-SONUÇ ilişkisi vardır?",
            options: ["Yağmur yağdığı için ıslandım.", "Ders çalışmak için odasına gitti.", "Çok yediğinden midesi ağrıdı.", "Güneş açarsa ısınırız."],
            correct: 1,
            explanation: "Ders çalışmak bir amaçtır. 'Amacıyla' getirebiliyoruz."
        },
        {
            question: "Hangisi NESNEL bir yargıdır?",
            options: ["En güzel renk mavidir.", "Bu film çok sıkıcı.", "Türkiye'nin başkenti Ankara'dır.", "Yaz mevsimi çok eğlencelidir."],
            correct: 2,
            explanation: "Kanıtlanabilir bir bilgidir, kişiden kişiye değişmez."
        },
        {
            question: "'Düzenli çalışırsan kazanırsın.' cümlesi ne bildirir?",
            options: ["Neden-Sonuç", "Amaç-Sonuç", "Koşul-Sonuç", "Karşılaştırma"],
            correct: 2,
            explanation: "-sa/-se eki ile koşul (şart) anlamı vardır."
        },
        {
            question: "Hangisinde 'Karşılaştırma' yapılmıştır?",
            options: ["Ahmet bugün okula gelmedi.", "Bu kitap diğerinden daha kalın.", "Seni görmek istiyorum.", "Eve gidiyorum."],
            correct: 1,
            explanation: "Kitabın kalınlığı diğerine göre karşılaştırılmış."
        },
        {
            question: "'Ama, fakat, lakin' gibi ifadeler ne işe yarar?",
            options: ["Düşüncenin yönünü değiştirir.", "Abartma yapar.", "Benzetme yapar.", "Koşul bildirir."],
            correct: 0,
            explanation: "Bu bağlaçlar olumlu düşünceden olumsuza (veya tam tersi) geçişi sağlar."
        }
    ],
    'parcada-anlam': [
        {
            question: "Yazarın okuyucunun zihninde resim çizdiği anlatım biçimi hangisidir?",
            options: ["Öyküleme", "Betimleme", "Açıklama", "Tartışma"],
            correct: 1,
            explanation: "Sözcüklerle resim çizme sanatına betimleme (tasvir etme) denir."
        },
        {
            question: "'Gözleri deniz mavisi, saçları altın sarısıydı.' cümlesinde hangi anlatım ağır basar?",
            options: ["Betimleme", "Öyküleme", "Tanık Gösterme", "Tartışma"],
            correct: 0,
            explanation: "Fiziksel özellikler anlatılarak gözde canlandırma yapılmış."
        },
        {
            question: "'Sabah erkenden kalktı, çantasını alıp yola çıktı.' anlatıcısı kimdir?",
            options: ["1. Kişi (Ben)", "2. Kişi (Sen)", "3. Kişi (O)", "Hiçbiri"],
            correct: 2,
            explanation: "Eylemi yapan 'O'dur. 3. tekil şahıs anlatımı vardır."
        },
        {
            question: "Bir metinde asıl anlatılmak istenen mesaja ne denir?",
            options: ["Konu", "Ana Düşünce", "Başlık", "Yardımcı Düşünce"],
            correct: 1,
            explanation: "Yazarın vermek istediği mesaj ana düşüncedir."
        },
        {
            question: "'Aslan gibi güçlüydü.' cümlesinde hangi düşünceyi geliştirme yolu vardır?",
            options: ["Tanımlama", "Örnekleme", "Benzetme", "Tanık Gösterme"],
            correct: 2,
            explanation: "'Gibi' edatı ile benzetme yapılmıştır."
        }
    ],
    'soz-sanatlari': [
        {
            question: "Hayvanların veya cansız varlıkların konuşturulması sanatına ne denir?",
            options: ["Benzetme", "Abartma", "Kişileştirme", "Konuşturma (İntak)"],
            correct: 3,
            explanation: "İnsan dışı varlıkların konuşturulmasına intak denir."
        },
        {
            question: "'Gece ile gündüz gibiydik.' cümlesinde hangi sanatın ipucu (zıtlık) vardır?",
            options: ["Karşıtlık (Tezat)", "Konuşturma", "Kişileştirme", "Abartma"],
            correct: 0,
            explanation: "Gece ve gündüz zıt kavramlardır."
        },
        {
            question: "Konuşturma sanatının olduğu her yerde doğal olarak hangi sanat da vardır?",
            options: ["Tezat", "Kişileştirme", "Abartma", "Benzetme"],
            correct: 1,
            explanation: "Konuşmak insana ait bir özellik olduğu için, konuşan her varlık kişileştirilmiş olur."
        },
        {
            question: "'Uzun ince bir yoldayım / Gidiyorum gündüz gece' dizelerinde hangi sanat vardır?",
            options: ["Konuşturma", "Karşıtlık (Gündüz-Gece)", "Abartma", "Benzetme"],
            correct: 1,
            explanation: "Gündüz ve gece zıt anlamlıdır (Tezat)."
        },
        {
            question: "Aşağıdakilerden hangisi bir söz sanatı DEĞİLDİR?",
            options: ["Konuşturma", "Karşıtlık", "Öyküleme", "Benzetme"],
            correct: 2,
            explanation: "Öyküleme bir anlatım biçimidir, söz sanatı değildir."
        }
    ],
    'ek-kok-yapi': [
        {
            question: "Aşağıdakilerden hangisi TÜREMİŞ bir sözcüktür?",
            options: ["Kitaplar", "Yolcu", "Masa", "Okulda"],
            correct: 1,
            explanation: "Yol + cu (Yapım eki) = Yolcu. Anlam değişmiş."
        },
        {
            question: "'Gözlükçü' sözcüğünde kaç tane yapım eki vardır?",
            options: ["1 (lük)", "2 (lük, çü)", "Yoktur", "3"],
            correct: 1,
            explanation: "Göz-lük-çü. İki tane yapım eki vardır."
        },
        {
            question: "Hangisi BİRLEŞİK sözcüktür?",
            options: ["Sivrisinek", "Kelebek", "Öğrenci", "Balıkçı"],
            correct: 0,
            explanation: "Sivri + Sinek kelimelerinin birleşmesiyle oluşmuştur."
        },
        {
            question: "'-lar / -ler' eki aşağıdakilerden hangisidir?",
            options: ["Yapım Eki", "Çekim Eki (Çoğul)", "Sıfat", "Zamir"],
            correct: 1,
            explanation: "Çoğul eki bir çekim ekidir, kelimenin anlamını değiştirmez."
        },
        {
            question: "'Odada' sözcüğünün yapısı nedir?",
            options: ["Basit (Sadece çekim eki almış)", "Türemiş", "Birleşik", "Mecaz"],
            correct: 0,
            explanation: "Oda-da (Bulunma eki). Yapım eki almamıştır."
        }
    ],
    'sozcuk-turleri': [
        {
            question: "'Yaşlı adam' tamlamasının türü nedir?",
            options: ["Belirtili İsim Tamlaması", "Belirtisiz İsim Tamlaması", "Sıfat Tamlaması", "Zincirleme İsim Tamlaması"],
            correct: 2,
            explanation: "Nasıl adam? Yaşlı adam. Sıfat tamlamasıdır."
        },
        {
            question: "Aşağıdakilerden hangisi ZAMİR'dir?",
            options: ["Masa", "Güzel", "O", "Koşmak"],
            correct: 2,
            explanation: "'O' kelimesi ismin yerini tutan bir kişi zamiridir."
        },
        {
            question: "Hangisi EDAT'tır?",
            options: ["Gibi", "Ve", "Kitap", "Geldi"],
            correct: 0,
            explanation: "'Gibi' tek başına anlamı olmayan, benzetme kuran bir edattır."
        },
        {
            question: "'Okulun kapısı' nasıl bir tamlamadır?",
            options: ["Sıfat Tamlaması", "Belirtili İsim Tamlaması", "Belirtisiz İsim Tamlaması", "Zamir"],
            correct: 1,
            explanation: "Tamlayan (-un) ve tamlanan (-ı) ek aldığı için belirtili isim tamlamasıdır."
        },
        {
            question: "Hangisi Özel İsimdir?",
            options: ["Şehir", "Ankara", "Ülke", "Kedi"],
            correct: 1,
            explanation: "Ankara tekil ve özel bir yer adıdır."
        }
    ],
    'soz-gruplari': [
        {
            question: "'Ağzı kulaklarına varmak' deyiminin anlamı nedir?",
            options: ["Çok şaşırmak", "Çok sevinmek", "Çok üzülmek", "Çok konuşmak"],
            correct: 1,
            explanation: "Çok sevinmek anlamında kullanılır."
        },
        {
            question: "Hangisi Atasözüdür?",
            options: ["Gözden düşmek", "Küplere binmek", "Sakla samanı gelir zamanı", "Çam devirmek"],
            correct: 2,
            explanation: "Öğüt verdiği ve bir yargı bildirdiği için atasözüdür. Diğerleri deyimdir."
        },
        {
            question: "Atasözleri ile Deyimler arasındaki en büyük fark nedir?",
            options: ["Deyimler uzundur.", "Atasözleri öğüt verir, deyimler durumu anlatır.", "Atasözlerinin yazarı bellidir.", "Farkları yoktur."],
            correct: 1,
            explanation: "Atasözleri ders verir, deyimler o anki durumu ifade eder."
        },
        {
            question: "Söyleyeni belli olan özlü sözlere ne denir?",
            options: ["Deyim", "Atasözü", "Özdeyiş (Vecize)", "Tekerleme"],
            correct: 2,
            explanation: "Atatürk'ün sözleri gibi söyleyeni belli olanlara özdeyiş denir."
        },
        {
            question: "Hangisi bir deyimdir?",
            options: ["Ağaç yaşken eğilir.", "Göze girmek.", "Dost kara günde belli olur.", "İşleyen demir ışıldar."],
            correct: 1,
            explanation: "Göze girmek (beğenilmek) bir deyimdir."
        }
    ],
    'metin-bilgisi': [
        {
            question: "'Bir varmış bir yokmuş' diye başlayan metin türü hangisidir?",
            options: ["Hikaye", "Anı", "Masal", "Haber Yazısı"],
            correct: 2,
            explanation: "Tekerleme ile başlayan ve olağanüstü olayları anlatan tür masaldır."
        },
        {
            question: "Yazarın gezdiği yerleri anlattığı yazı türü nedir?",
            options: ["Gezi Yazısı", "Mektup", "Günlük", "Tiyatro"],
            correct: 0,
            explanation: "Gezilip görülen yerlerin anlatıldığı türe gezi yazısi denir."
        },
        {
            question: "Şiirde dize sonlarındaki ses benzerliklerine (yazılışı ve görevi aynı olanlar hariç) ne denir?",
            options: ["Redif", "Uyak (Kafiye)", "Ölçü", "Dize"],
            correct: 1,
            explanation: "Köklerdeki ses benzerliğine uyak denir. Ekler aynıysa rediftir."
        },
        {
            question: "Perde, sahne, dekor gibi terimler hangi türe aittir?",
            options: ["Roman", "Hikaye", "Tiyatro", "Masal"],
            correct: 2,
            explanation: "Bunlar tiyatro terimleridir."
        },
        {
            question: "Geçmişte yaşanmış bir olayın sonradan yazılmasına ne denir?",
            options: ["Günlük", "Anı", "Masal", "Fab"],
            correct: 1,
            explanation: "Üzerinden zaman geçtikten sonra yazılanlara anı (hatıra) denir."
        }
    ],
    'yazim-noktalama': [
        {
            question: "Eş görevli sözcükleri ayırmak için hangisi kullanılır?",
            options: ["Nokta", "Virgül", "Ünlem", "Kısa Çizgi"],
            correct: 1,
            explanation: "Pazardan elma, armut, muz aldım. (Virgül)"
        },
        {
            question: "Aşağıdaki cümlelerin hangisinde 'de/da' YANLIŞ yazılmıştır?",
            options: ["Sen de gel.", "Evde kimse yok.", "Kalemim okul da kaldı.", "Ahmet de biliyor."],
            correct: 2,
            explanation: "Bulunma hal eki olan -da bitişik yazılmalıdır: Okulda."
        },
        {
            question: "Özel isimlere gelen ekler ne ile ayrılır?",
            options: ["Virgül", "Kısa Çizgi", "Kesme İşareti", "Yay Ayraç"],
            correct: 2,
            explanation: "Ahmet'e, Ankara'ya derken kesme işareti kullanılır."
        },
        {
            question: "Sevinç, korku, şaşma bildiren cümlelerin sonuna ne konur?",
            options: ["Soru İşareti", "Ünlem", "Nokta", "Üç Nokta"],
            correct: 1,
            explanation: "Duygu bildiren cümlelerin sonuna ünlem (!) konur."
        },
        {
            question: "Hangisinin yazımı YANLIŞTIR?",
            options: ["Türk Dil Kurumu", "Pammukkale üniversitesi", "Ankara", "Mehmet Bey"],
            correct: 1,
            explanation: "Pamukkale Üniversitesi (Büyük harfle başlamalı)."
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
    // For new topics that might not have HTML sections yet, we will just load the quiz
    // But ideally we should have sections. 
    // Since the user provided content in JS structure, we might need to dynamically generate HTML content?
    // For now, let's assume we are mostly focused on the quiz if the section doesn't exist.

    // However, the previous code hid all sections. Let's try to find if a section exists.
    const targetSection = document.getElementById(`content-${topicId}`);

    topicSections.forEach(sec => sec.classList.add('hidden'));

    // If section exists, show it. If not, maybe show a generic "Quiz Mode" title?
    if (targetSection) {
        targetSection.classList.remove('hidden');
    } else {
        // Fallback or Dynamic generation could happen here. 
        // For this specific request, I should probably have updated the HTML too.
        // But let's at least load the quiz data.
    }

    // Update Current Topic & Quiz Data
    if (allQuizData[topicId]) {
        currentTopic = topicId;
        currentQuizData = allQuizData[topicId];
        resetQuiz();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showToast('🚧 Bu macera yakında başlıyor!');
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

// Start with Fiilimsiler (or first available)
resetQuiz();

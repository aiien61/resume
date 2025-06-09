// Smooth scrolling for navigation
document.querySelectorAll('.nav-pill').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });

            // Update active nav pill
            document.querySelectorAll('.nav-pill').forEach(pill => pill.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang, event) {
    currentLanguage = lang;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update all elements with language attributes
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
        if (lang == 'en') {
            element.innerHTML = element.getAttribute('data-en');
        } else if (lang == 'zh') {
            element.innerHTML = element.getAttribute('data-zh');
        }
    });
}

// Project details toggle
function showProjectDetails() {
    const details = document.getElementById('project-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

function showBenchmarks() {
    if (currentLanguage === 'en') {
        alert(`Benchmark Results:\n\n
            • Processing Speed: 20,000+ jobs/10min\n
            • Memory Usage: Optimised for large datasets\n
            • Scalability: Linear performance scaling\n
            • Accuracy: 99.9% constraint satisfaction\n
            • Adaptability: 100% success rate across test scenarios`);
    } else if (currentLanguage === 'zh') {
        alert(`評測結果：\n\n
            • 處理速度：每 10 分鐘超過 20,000 筆工序作業\n
            • 記憶體使用：針對大型資料集最佳化\n
            • 可擴展性：效能呈線性成長\n
            • 規則達成率：99.9% 限制條件滿足率\n
            • 場域適配能力：測試情境中達成 100% 成功率`);
    }
}

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang, e);
        });
    });
});
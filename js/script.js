let currentLanguage = 'en';
        
const translations = {
    en: {
        name: "Will Kuan",
        title: "Algorithm Developer",
        location: "Taiwan",
        skillsTitle: "Technical Skills",
        languagesTitle: "Languages",
        achievementsTitle: "Key Achievements",
        interestsTitle: "Interests",
        summaryTitle: "Professional Summary",
        summary: `AI Engineer with extensive experience in algorithm development, demand forecasting, 
                  and data analysis. Proven track record in optimising manufacturing operations and 
                  delivering data-driven solutions across industries such as semiconductors, machine 
                  tools, pharmaceuticals, and retail. Passionate about creating efficient, maintainable 
                  code and driving technical innovation in fast-paced environments.`,
        experienceTitle: "Work Experience",
        educationTitle: "Education",
        certificationsTitle: "Awards & Certifications",
        skills: [
            "Scheduling",
            "Time Series",
            "ERP / MES / APS",
            "AI Frameworks",
            "Python",
            "JavaScript",
            "PostgreSQL"
        ],
        languages: ["Chinese / Mandarin (Native)", "English (Conversational)"],
        achievements: [
            `Achieved 10x faster runtime scheduling 20,000 jobs within 10 minutes<br/>(bottleneck: 
            > 1 hour to process 1,000 jobs)`,
            
            "Improved shipment demand forecasting model performance by 20%",
            
            "Achieved 75% accuracy sales forecasting solution",
            
            "Published multiple technical articles"
        ],
        interests: [
            "Travelling in the middle of nowhere", 
            "Sports (baseball, basketball, tennis, football)", 
            "Films, anime, TV series (Korean, UK, and US)", 
            "Cooking", 
            "Searching all the streets for tucked-away vegetarian food"
        ],
        jobs: [
            {
                title: "AI Engineer (Algorithm Engineer)",
                company: "InterAgent.io, New Taipei, Taiwan",
                date: "2020/10 - 2022/08",
                description: [
                    `Developed a high-speed scheduling algorithm from the ground up using
                    parallel processing and an AI-based multi-agent system
                    (<a href="https://www.wikiwand.com/en/Multi-agent%20system">MAS</a>)
                    architecture, optimising job and resource allocation across diverse
                    manufacturing domains (semiconductor, machine tools, PCB, etc.)`,
                    
                    `Designed and deployed scalable APIs to embed AI-driven scheduling capabilities
                    into partner ecosystems, enhancing manufacturing system interoperability
                    and supporting rapid digital transformation across client operations`,

                    `Led a demand forecasting project by developing and improving machine learning,
                    deep learning, and statistical models, resulting in at least a 20% increase
                    in product line accuracy and enabling clients to better respond to market changes
                    through improved procurement andproduction planning`
                ]
            },
            {
                title: "Data Analyst @ Digital Commerce Dept.",
                company: "Taiwan External Trade Development Council, Taipei, Taiwan",
                date: "2019/06 - 2019/09",
                description: [
                    `Refactored ongoing web scraping program to 
                    enhance trading data collection processes`
                ]
            },
            {
                title: "Data Analyst @ Core Algorithm Dev. Dept.",
                company: "eBizprise Technology (TJ), Shanghai, China",
                date: "2016/05 - 2019/01",
                description: [
                    `Developed medicine matching models with over 80% accuracy, along with
                    forecasting solutions achieving over 75% accuracy across various sectors
                    including FMCG, retail, pharmaceuticals, and supply chain`,
                    
                    `Regularly maintained and ehanced models using innovative techniques to improve 
                    robustness and reliability`,
                    
                    `Created BI report prototypes and regularly published technical articles in 
                    industry e-newsletters`
                ]
            },
            {
                title: "Programmer @ Product Dev. & Service Dept.",
                company: "eBizprise, Taipei, Taiwan",
                date: "2015/06 - 2016/04",
                description: [
                    "CTBC Bank Overseas Branch BI Report Upgrade Project",
                    "Assisted in testing the Internet Banking system at CTBC Bank Shanghai Branch"
                ]
            }
        ],
        education: [
            {
                degree: "Master's Degree in Service Science (Business-Oriented Data Analysis)",
                school: "National Tsing Hua University, Taiwan",
                date: "2018/09 - 2020/06",
                details: [
                    "Master Thesis: Evaluating Peak-Capturing Performance of Time Series Forecasting Algorithms", 
                    
                    `IEEE DataCom 2019 speaker & Paper: Forecasting Daily Accommodation Occupancy for 
                    Supply Preparation by a Sharing Economy Platform`
                ]
            },
            {
                degree: "Bachelor's Degree in Applied Mathematics",
                school: "National Sun Yat-Sen University, Taiwan",
                date: "2007/09 - 2011/06",
                details: []
            }
        ],
        certifications: [
            { name: "Conference Speaker", company: "IEEE DataCom", date: "2019" },
            { name: "Taiwan's Top 5 & Taiwan Delegation", company: "Asia Open Data Hackathon", date: "2016" }
        ]
    },
    zh: {
        name: "官大鈞",
        title: "演算法工程師",
        location: "台灣",
        skillsTitle: "技能",
        languagesTitle: "語言",
        achievementsTitle: "主要成就",
        interestsTitle: "興趣",
        summaryTitle: "專業簡介",
        summary: `具備豐富排程演算法開發、需求預測與資料分析經驗的 AI 工程師，專長於提升製造排程效率，並為半導體、
                  精密機械零組件、製藥與零售等多元產業提供資料驅動的解決方案。致力於撰寫高效、可維護的程式碼，
                  持續在快速變動的環境中推動技術創新與實務應用。`,
        experienceTitle: "工作經歷",
        educationTitle: "學歷與專業訓練",
        certificationsTitle: "獎項與證照",
        skills: [
            "排程演算法開發",
            "時間序列分析",
            "ERP / MES / APS",
            "AI 框架開發",
            "Python",
            "JavaScript",
            "PostgreSQL"
        ],
        languages: ["中文（母語）", "英文"],
        achievements: [
            "排程運算速度提升10倍，10分鐘內完成2萬筆作業排程<br/>（瓶頸：1,000筆需超過1小時）",
            "出貨需求預測模型準確度提升20%",
            "銷售預測解決方案提升至75%準確率",
            "發表多篇技術文章"
        ],
        interests: [
            "旅遊，喜歡探索偏遠秘境", 
            "體育賽事（棒球、籃球、網球、足球）", 
            "看電影、影集、動畫",
            "尋找隱藏版素食小吃",
            "烹飪"

        ],
        jobs: [
            {
                title: "AI工程師",
                company: "塔台智能網絡",
                date: "2020/10 - 2022/08",
                description: [
                    `以多智能體系統（<a href="https://www.wikiwand.com/zh-hant/%E5%A4%9A%E6%99%BA%E8%83%BD%E4%BD%93%E7%B3%BB%E7%BB%9F">MAS</a>）
                    為基礎，設計並開發自主工業排程軟體 SARA，突破傳統 APS 的侷限。SARA 排程演算法能於 10 分鐘內完成 2 萬筆以上
                    製程工序之最佳化排程，有效克服 Python 執行效能瓶頸，協助製造業客戶提升產線自動化與數位化程度，並強化 MES 整合效率。
                    主要技術使用 Python，應用領域涵蓋 PCB、精密零組件及半導體產業。`,

                    "開發可擴展的 API，使 AI 排程引擎可支援外部系統與整合商快速串接，加速智慧製造場域的系統整合效率。",

                    `負責需求預測專案，構建並持續改善機器學習、深度學習及統計模型，成功提升半導體客戶各產品線預測準確度至少20%。
                    該解決方案有效協助客戶提前因應市場變動，完善採購與生產規劃流程。`
                ]
            },
            {
                title: "數據分析師 @ 數位商務部",
                company: "外貿協會（TAITRA）",
                date: "2019/06 - 2019/09",
                description: [
                    "重構現有網路爬蟲程式，強化國際貿易數據蒐集流程"
                ]
            },
            {
                title: "數據分析師 @ 核心演算發展部",
                company: "联合通商科技（天津）",
                date: "2017 - 2019",
                description: [
                    "開發藥品比對模型，準確率超過 80%；預測模型應用於快消、零售、製藥與供應鏈等產業，準確率超過 75%",
                    "定期維護並維持模型的最佳化狀態，透過創新技術提升穩定性與可靠性",
                    "製作 BI 報表原型，並定期於電子報專欄發表技術文章"
                    
                ]
            },
            {
                title: "程式設計師 @ 產品發展服務部",
                company: "聯合通商電子商務",
                date: "2015/06 - 2016/04",
                description: [
                    "中國信託銀行海外分行 BI 報表升級案",
                    "協助測試中國信託銀行上海分行網銀系統"
                ]
            }
        ],
        education: [
            {
                degree: "服務科學碩士學位（商業導向資料分析）",
                school: "國立清華大學",
                date: "2018/09 - 2020/06",
                details: [
                    "碩士論文: 《針對時間序列模型的峰點預測成效評估方法》", 
                    "IEEE DataCom 2019 講者及論文作者: 《共享經濟平台的每日住宿率預測研究：協助供應調度之應用》"
                ]
            },
            {
                degree: "應用數學學士學位",
                school: "國立中山大學",
                date: "2007/09 - 2011/06",
                details: []
            }
        ],
        certifications: [
            { name: "研討會講者", company: "IEEE DataCom", date: "2019" },
            { name: "台灣前五名 暨 台灣代表", company: "第二屆亞洲跨國黑客競賽", date: "2016" }
        ]
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    updateContent();
    
    // Update button text
    const btn = document.querySelector('.language-switcher');
    btn.innerHTML = currentLanguage === 'en' ? '🌐 中文' : '🌐 EN';
}

function updateContent() {
    const content = translations[currentLanguage];
    
    // Update header
    document.querySelector('.header h1').textContent = content.name;
    document.querySelector('.header p').textContent = content.title;
    
    // Update contact info
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems[2].innerHTML = `<span>📍</span> ${content.location}`;
    
    // Update section titles
    const sectionTitles = document.querySelectorAll('.section h2');
    const titleMap = [
        content.skillsTitle,
        content.languagesTitle,
        content.achievementsTitle,
        content.interestsTitle,
        content.summaryTitle,
        content.experienceTitle,
        content.educationTitle,
        content.certificationsTitle
    ];
    
    sectionTitles.forEach((title, index) => {
        if (titleMap[index]) {
            title.textContent = titleMap[index];
        }
    });
    
    // Update professional summary
    document.querySelector('.content .section p').textContent = content.summary;

    // Update skills
    const skillsList = document.querySelector('.skills-grid');
    skillsList.innerHTML = content.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('');

    
    // Update languages
    const languagesList = document.querySelector('.languages');
    languagesList.innerHTML = content.languages.map(lang => `<li>${lang}</li>`).join('');
    
    // Update achievements
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item, index) => {
        item.innerHTML = content.achievements[index];
    });
    
    // Update interests
    const interestsList = document.querySelector('.interests');
    interestsList.innerHTML = content.interests.map(interest => `<li>${interest}</li>`).join('');
    
    // Update work experience
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        if (content.jobs[index]) {
            const job = content.jobs[index];
            item.querySelector('.job-title').textContent = job.title;
            item.querySelector('.company').textContent = job.company;
            item.querySelector('.date').textContent = job.date;

            const listItem = item.querySelectorAll('li');
            listItem.forEach((li, i) => {
                li.innerHTML = job.description[i];
            });
        }
    });
    
    // Update education
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        if (content.education[index]) {
            const edu = content.education[index];
            item.querySelector('.job-title').textContent = edu.degree;
            item.querySelector('.company').textContent = edu.school;
            item.querySelector('.date').textContent = edu.date;

            const eduPs = item.querySelectorAll('p');
            eduPs.forEach((p, i) => {
                p.innerHTML = edu.details[i];
            });
        }
    });
    
    // Update certifications
    const certificationItems = document.querySelectorAll('.section:last-child .education-item');
    content.certifications.forEach((cert, index) => {
        if (certificationItems[index]) {
            certificationItems[index].querySelector('.job-title').textContent = cert.name;
            certificationItems[index].querySelector('.company').textContent = cert.company;
            certificationItems[index].querySelector('.date').textContent = cert.date;
        }
    });
}
// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animation
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to experience items
    const experienceItems = document.querySelectorAll('.experience-item, .education-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f1f2f6, #ddd)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });
});
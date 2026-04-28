lucide.createIcons();

const app = {
    pages: {
        home: `
            <div class="view-section">
                <h1 class="hero-h">МЕТАЛЛ.<br>ДЕРЕВО.<br><span class="italic">ЭСТЕТИКА.</span></h1>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 80px;">
                    <div>
                        <h3>Натуральные материалы</h3>
                        <p>Используем только массив дуба, ясеня и карагача. Никакого ДСП и дешевого пластика.</p>
                    </div>
                    <div>
                        <h3>Пожизненная гарантия</h3>
                        <p>Наши каркасы из стали выдерживают до 500 кг. Это мебель, которая останется вашим внукам.</p>
                    </div>
                    <div>
                        <h3>Индивидуальный подход</h3>
                        <p>Сделаем стол или стеллаж по вашим размерам с точностью до миллиметра.</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1200" style="width:100%; height:600px; object-fit:cover; border-radius:40px; margin-top:80px;">
            </div>
        `,
        catalog: `
            <div class="view-section">
                <h2 style="font-size: 4rem;">КАТАЛОГ ИЗДЕЛИЙ</h2>
                <div class="bento-grid">
                    <div class="bento-card" style="grid-column: span 2; background-image: url('https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800')">
                        <div><h3>Обеденные группы</h3><p>Для больших семей</p></div>
                    </div>
                    <div class="bento-card" style="background-image: url('https://images.unsplash.com/photo-1544450173-8c879791368a?w=600')">
                        <div><h3>Консоли</h3></div>
                    </div>
                    <div class="bento-card" style="background-image: url('https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=600')">
                        <div><h3>Стеллажи</h3></div>
                    </div>
                    <div class="bento-card" style="background-image: url('https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=600')">
                        <div><h3>Рабочие места</h3></div>
                    </div>
                    <div class="bento-card" style="grid-column: span 3; background-image: url('https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1000')">
                        <div><h3>Мебель для баров и ресторанов</h3></div>
                    </div>
                </div>
            </div>
        `,
        process: `
            <div class="view-section">
                <h2 style="font-size: 4rem;">КАК МЫ РАБОТАЕМ</h2>
                <div style="margin-top: 60px;">
                    <div style="margin-bottom: 80px;">
                        <span style="font-size: 5rem; font-weight: 800; color: var(--accent);">01.</span>
                        <h3 style="font-size: 2.5rem;">Выбор дерева</h3>
                        <p style="max-width: 600px;">Вы сами можете приехать к нам в цех и выбрать конкретный слэб дуба или карагача, из которого будет сделан ваш стол.</p>
                    </div>
                    <div style="margin-bottom: 80px;">
                        <span style="font-size: 5rem; font-weight: 800; color: var(--accent);">02.</span>
                        <h3 style="font-size: 2.5rem;">Сварка каркаса</h3>
                        <p style="max-width: 600px;">Мы используем аргонную сварку. Это значит, что швы будут идеально гладкими и почти незаметными.</p>
                    </div>
                    <div style="margin-bottom: 80px;">
                        <span style="font-size: 5rem; font-weight: 800; color: var(--accent);">03.</span>
                        <h3 style="font-size: 2.5rem;">Покрытие маслом</h3>
                        <p style="max-width: 600px;">Покрываем дерево немецким маслом OSMO в 3 слоя. Оно защищает от воды, кофе и даже вина.</p>
                    </div>
                </div>
            </div>
        `,
        price: `
            <div class="view-section">
                <h2 style="font-size: 4rem;">Прайс-лист</h2>
                <div class="price-container">
                    <div class="price-row">
                        <div><h4>Стол "Classic Loft"</h4><p>160х80 см, дуб 40мм</p></div>
                        <div class="price-tag">185 000 ₸</div>
                    </div>
                    <div class="price-row">
                        <div><h4>Рабочий стол "Hacker"</h4><p>120х60 см, ясень 20мм</p></div>
                        <div class="price-tag">95 000 ₸</div>
                    </div>
                    <div class="price-row">
                        <div><h4>Стеллаж "Bento"</h4><p>5 полок, высота 190 см</p></div>
                        <div class="price-tag">78 000 ₸</div>
                    </div>
                    <div class="price-row">
                        <div><h4>Барный стул</h4><p>Массив, стальной профиль</p></div>
                        <div class="price-tag">28 000 ₸</div>
                    </div>
                </div>
            </div>
        `,
        contact: `
            <div class="view-section" style="text-align: center;">
                <h2 style="font-size: 8vw;">ЕСТЬ ПРОЕКТ?</h2>
                <p style="font-size: 2rem; margin-top: 40px; color: var(--accent);">Пишите нам, и мы рассчитаем стоимость за 15 минут.</p>
                <div style="margin-top: 60px;">
                    <button class="nav-cta" style="padding: 30px 80px; font-size: 1.5rem;">НАПИСАТЬ В WHATSAPP</button>
                    <p style="margin-top: 30px;">Или заходите в гости: Алматы, Райымбека 212</p>
                </div>
            </div>
        `
    },

    nav(pageKey) {
        const root = document.getElementById('app-root');
        gsap.to(root, { opacity: 0, y: 20, duration: 0.3, onComplete: () => {
            root.innerHTML = this.pages[pageKey];
            gsap.to(root, { opacity: 1, y: 0, duration: 0.5 });
            window.scrollTo(0, 0);
        }});
    }
};

window.onload = () => {
    app.nav('home');
    const cursor = document.querySelector('.cursor');
    // Включаем курсор ТОЛЬКО на устройствах с мышью
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        });
    } else {
        cursor.style.display = 'none';
    }
};
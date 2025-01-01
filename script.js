document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('openButton');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const letterContent = document.getElementById('letterContent');
    const pages = document.querySelectorAll('.page');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pagination = document.querySelector('.pagination');
    let currentPage = 0;

    // 点击打开信封
    openButton.addEventListener('click', () => {
        // 信封开启动画
        envelope.style.transform = 'rotateX(-180deg)';
        // 显示信纸
        setTimeout(() => {
            envelope.style.display = 'none';
            letter.style.display = 'flex';
            pagination.style.display = 'flex';
            showPage(currentPage);
        }, 1000); // 与CSS transition时间一致
    });

    // 显示指定页
    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            if(index === pageIndex) {
                page.style.display = 'block';
                animateText(page);
            } else {
                page.style.display = 'none';
            }
        });
    }

    // 逐字显示文本
    function animateText(page) {
        const text = page.textContent;
        page.innerHTML = '';
        for(let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.transition = `opacity 0.3s ease ${i * 0.05}s`;
            page.appendChild(span);
            setTimeout(() => {
                span.style.opacity = '1';
            }, i * 50);
        }
    }

    // 翻到上一页
    prevPageBtn.addEventListener('click', () => {
        if(currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // 翻到下一页
    nextPageBtn.addEventListener('click', () => {
        if(currentPage < pages.length -1) {
            currentPage++;
            showPage(currentPage);
        }
    });
});

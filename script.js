document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');
    const letterContainer = document.getElementById('letterContainer');
    const letterContent = document.getElementById('letterContent');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');

    // 示例信件内容，分为多页
    const pages = [
        "亲爱的朋友，\n\n希望这封信能找到你一切安好。",
        "最近的天气变化无常，但我们的友谊却如同磐石般坚定。",
        "期待与你再次相聚，共享美好时光。",
        "祝你生活愉快，工作顺利。\n\n此致，\n敬礼！"
    ];

    let currentPage = 0;

    // 打开信封动画
    openButton.addEventListener('click', () => {
        envelope.style.transform = 'rotateY( -180deg )';
        setTimeout(() => {
            envelope.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            displayPage(currentPage);
        }, 1000); // 动画时间同步
    });

    // 显示当前页内容，逐字显示
    function displayPage(pageIndex) {
        letterContent.innerHTML = '';
        const text = pages[pageIndex];
        let index = 0;

        function typeChar() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === '\n') {
                    letterContent.innerHTML += '<br>';
                } else {
                    letterContent.innerHTML += char;
                }
                index++;
                setTimeout(typeChar, 50); // 每个字出现的间隔时间
            }
        }

        typeChar();
    }

    // 翻到上一页
    prevPage.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    // 翻到下一页
    nextPage.addEventListener('click', () => {
        if (currentPage < pages.length -1) {
            currentPage++;
            displayPage(currentPage);
        }
    });
});

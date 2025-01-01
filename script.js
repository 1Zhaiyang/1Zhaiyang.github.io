document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');
    const letterContainer = document.getElementById('letterContainer');
    const letterContent = document.getElementById('letterContent');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');

    // 示例信件内容，分为多页
    const pages = [
        "今年太忙了，尤其是期末，都忘了给你写日志了，1.1号才想起来，给你补上。如果腾讯如我所料没坚持到你看信的那个时候的话，那么空间日志里从18年开始的六封信你都见不到了，这应该是你看到的第一封。牛逼不，正好跟你炫耀一下，用你的名字申请的域名，然后瞎设计的网页，但是至少能坚持六七十年到你看信那会。本来今早想起来今年还没给你汇报，我都不想写了，但想想你想在走也走不利索，听也听不清，人谁愿搭理你，所以还是有点可怜你。快泡好茶坐下，废话不多说，我要开始了。",
        "",
        "",
        "\n敬礼！"
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

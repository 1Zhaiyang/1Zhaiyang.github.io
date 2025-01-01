// JavaScript部分
document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('openButton');
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const letterContent = document.getElementById('letterContent');
    const navigation = document.getElementById('navigation');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');

    // 信纸内容数组（多个页面）
    const pages = [
        "亲爱的朋友，\n\n感谢你一直以来的支持与陪伴。今天，我想与你分享一些美好的时光。",
        "希望我们未来的日子里，能继续携手共进，创造更多美好的回忆。",
        "祝你生活愉快，万事如意！期待我们的下一次见面。\n\n此致，\n敬礼！"
    ];

    let currentPage = 0;

    // 打开信封
    openButton.addEventListener('click', function() {
        envelope.classList.add('hidden');
        setTimeout(() => {
            letter.style.display = 'block';
            displayPage(currentPage);
        }, 1000); // 等待信封动画完成
    });

    // 显示当前页内容
    function displayPage(pageIndex) {
        letterContent.innerHTML = ''; // 清空之前内容
        if(pageIndex < 0 || pageIndex >= pages.length) return;

        const text = pages[pageIndex];
        const lines = text.split('\n');
        let delay = 0;

        lines.forEach(line => {
            const p = document.createElement('p');
            letterContent.appendChild(p);
            for(let char of line) {
                const span = document.createElement('span');
                span.textContent = char;
                p.appendChild(span);
                span.style.animationDelay = `${delay}s`;
                delay += 0.05; // 每个字弹出间隔
            }
            p.appendChild(document.createElement('br'));
        });

        // 显示翻页按钮
        if(pages.length > 1){
            navigation.style.display = 'flex';
        } else {
            navigation.style.display = 'none';
        }
    }

    // 上一页
    prevPage.addEventListener('click', function() {
        if(currentPage > 0){
            currentPage--;
            displayPage(currentPage);
        }
    });

    // 下一页
    nextPage.addEventListener('click', function() {
        if(currentPage < pages.length -1){
            currentPage++;
            displayPage(currentPage);
        }
    });
});

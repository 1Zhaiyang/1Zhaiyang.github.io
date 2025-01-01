const openEnvelopeBtn = document.getElementById('openEnvelopeBtn');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const letterContent = document.getElementById('letterContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;
const pages = [
    "这是第一页的内容，信纸上的文字会逐字显示。\n每个字会有动画效果。",
    "这是第二页的内容，继续展示逐字效果。\n每一页的内容可以自由编辑。",
    "这是第三页的内容，逐字显示。\n最后一页展示完成后，页面结束。"
];

openEnvelopeBtn.addEventListener('click', () => {
    envelope.style.display = 'none';
    letter.style.display = 'block';
    showPage(currentPage);
});

function showPage(pageIndex) {
    letterContent.innerHTML = '';
    const content = pages[pageIndex];
    let i = 0;
    const interval = setInterval(() => {
        letterContent.innerHTML += content.charAt(i);
        i++;
        if (i === content.length) {
            clearInterval(interval);
        }
    }, 100);
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

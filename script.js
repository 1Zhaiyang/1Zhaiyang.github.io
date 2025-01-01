// script.js

const openEnvelopeBtn = document.getElementById("open-envelope");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letter-text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const pages = [
    "这是第一页的内容，逐字显示效果。请仔细阅读。",
    "这是第二页的内容，逐字显示效果。继续前进。",
    "这是第三页的内容，逐字显示效果，最后一页了！"
];

let currentPage = 0;

openEnvelopeBtn.addEventListener("click", () => {
    envelope.classList.add("hidden");
    letter.classList.remove("hidden");
    displayLetter(pages[currentPage]);
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        displayLetter(pages[currentPage]);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        displayLetter(pages[currentPage]);
    }
});

function displayLetter(content) {
    letterText.innerHTML = "";
    let index = 0;

    const interval = setInterval(() => {
        letterText.innerHTML += content.charAt(index);
        index++;
        if (index === content.length) {
            clearInterval(interval);
        }
    }, 100);  // 每个字弹出的间隔时间，单位是毫秒
}

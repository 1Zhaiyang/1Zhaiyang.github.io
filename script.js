// script.js
const letter = document.getElementById('letter');
const pages = document.querySelectorAll('.page');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');
let currentPage = 0;

letter.addEventListener('click', () => {
    if (letter.classList.contains('closed')) {
        letter.classList.remove('closed');
    }
});

arrowUp.addEventListener('click', () => {
    if (currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        pages[currentPage].style.display = 'block';
    }
});

arrowDown.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        pages[currentPage].style.display = 'block';
    } else if (event.key === 'ArrowDown' && currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
    }
});

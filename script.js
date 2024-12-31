const letter = document.getElementById('letter');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

letter.addEventListener('click', () => {
    if (letter.classList.contains('closed')) {
        letter.classList.remove('closed');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && currentPage < pages.length - 1) {
        pages[currentPage].style.display = 'none';
        currentPage++;
        pages[currentPage].style.display = 'block';
    } else if (event.key === 'ArrowUp' && currentPage > 0) {
        pages[currentPage].style.display = 'none';
        currentPage--;
        pages[currentPage].style.display = 'block';
    }
});

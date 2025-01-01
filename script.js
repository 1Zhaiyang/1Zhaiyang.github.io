document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const openEnvelope = document.getElementById('open - envelope');
    const letterPaper = document.getElementById('letter - paper');
    const pages = document.querySelectorAll('.page');
    const prevPage = document.getElementById('prev - page');
    const nextPage = document.getElementById('next - page');
    let currentPageIndex = 0;

    openEnvelope.addEventListener('click', () => {
        envelope.classList.add('hidden');
        letterPaper.classList.remove('hidden');
        displayPageContent(currentPageIndex);
    });

    prevPage.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            displayPageContent(currentPageIndex);
        }
    });

    nextPage.addEventListener('click', () => {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            displayPageContent(currentPageIndex);
        }
    });

    function displayPageContent(index) {
        pages.forEach(page => page.classList.remove('current'));
        pages[index].classList.add('current');
        const content = pages[index].querySelector('.letter - content');
        content.textContent = '';
        const fullText = content.dataset.content;
        let charIndex = 0;
        const interval = setInterval(() => {
            content.textContent += fullText[charIndex];
            charIndex++;
            if (charIndex >= fullText.length) {
                clearInterval(interval);
            }
        }, 50);
    }
});

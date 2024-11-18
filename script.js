document.addEventListener('DOMContentLoaded', function () {
    const letterContent = document.getElementById('letter-content');
    const nextPageButton = document.getElementById('next-page');
    const typeSound = document.getElementById('type-sound');
    const messages = [
        "翟阳学习制作的第一个网页",
        "Q1：Envolope的倾角在code中的具体作用方式",
        "Q2：Javascript中的rose代码没有在网页中呈现",
        "Q3：Css中插入的music.wav在web中的播放问题",
        "Q4：Index html中域名的炫彩特效",
        "Q5：Trans？",
        "",
        "",
        "",
        // 可以根据需要添加更多段落
    ];
    let pageIndex = 0;
    let charIndex = 0;

    function typeLetter() {
        if (charIndex < messages[pageIndex].length) {
            letterContent.innerHTML += messages[pageIndex].charAt(charIndex);
            typeSound.play();
            charIndex++;
            setTimeout(typeLetter, 135); // 调整打字速度
        } else if (pageIndex < messages.length - 1) {
            nextPageButton.style.display = 'block'; // 显示下一页按钮
        }
    }

    nextPageButton.addEventListener('click', function () {
        pageIndex++;
        charIndex = 0;
        letterContent.innerHTML = ''; // 清空当前内容，为显示下一段做准备
        typeLetter(); // 开始打字下一段
        this.style.display = 'none'; // 隐藏按钮
    });

    // 开始动画和打字效果
    setTimeout(() => {
        document.querySelector('.letter').style.opacity = '1'; // 模拟信封打开
        typeLetter(); // 开始打字
    }, 2500); // 调整信封动画时间

    // 在现有的DOMContentLoaded事件监听器中添加以下代码，或创建新的监听器

    function createRose() {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        // 随机选择动画时长类，使飘落速度不同
        rose.classList.add(`rose${Math.ceil(Math.random() * 3)}`);
        // 设置玫瑰花的初始位置
        rose.style.left = `${Math.random() * 100}vw`;
        rose.style.animationDelay = `${Math.random() * 5}s`;
        // 设置玫瑰花的背景图片
        rose.style.backgroundImage = url('rose.png'); // 更换为实际的图片路径
        document.body.appendChild(rose);

        // 设置动画持续时间后删除玫瑰花，防止DOM元素过多
        setTimeout(() => {
            rose.remove();
        }, 20000); // 应与CSS中最长的动画时长一致
    }

    // 创建多个玫瑰花
    setInterval(createRose, 300); // 每300毫秒创建一个玫瑰花

});

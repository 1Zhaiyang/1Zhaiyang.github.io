document.addEventListener('DOMContentLoaded', function () {
    const letterContent = document.getElementById('letter-content');
    const nextPageButton = document.getElementById('next-page');
    const typeSound = document.getElementById('type-sound');
    const messages = [
        "这是周六日我准备的礼物，本想下次海底捞用pad当面给你播放，但是没机会啦。信的内容我做了修改刚刚，改成了最后想跟你说的话。其他的图片炫彩我都没有时间改啦，明早要投入工作了，这个就当作是我们临别的礼物送给你！",
        "当时周六，我承认当时认真考虑了你刚刚说到的学历问题。我们相处了一个月，因为我们聊的投缘，所以我的心里一直认为你是个很棒的姑娘。知道这个消息后，",
        "在爱河中，我们学会了适应这全新的体验。这几年，我的世界纯粹又单一，科研之路上的探索与发现充斥我的每一天。我曾以为，在追求学术的这几年，我的生活中不可能再有时间与空间容纳另一个人。自从握住你的手那刻起，我的生命中就多了一份责任，一份期待。即使面对更大的科研压力，我也愿意为与你相伴而腾出时间。以前的我工作至深夜，而现在，饭后我便迫不及待想要回家，因为在我心中，除了科研，你也至关重要。",
        "随着时间的流逝，我们从最初对彼此的好奇而变得越来越熟悉。尽管世界上没有两个完全契合的灵魂，我们之间的争吵也难以避免。回忆当天，我深知，无论是对是错，我都不应该与你争吵。在你面前，我只想和你谈论风花雪月，共谋我们的未来。这个世界对你的温柔不够，我来补偿；不是与你争执，而是给予你支持。",
        "展望未来，我将在努力经营我们的感情的同时，亦不忘科研上的追求。只有努力，我们才能有足够的资本在离我们双方家庭都近的城市落脚安家。这段路不易，但几年的辛苦换来一生的幸福，我认为值得。而你，也请追寻自己的梦想。即使理想有憾，你身后总有我，为你守护，希望你可以自由翱翔，追求属于自己的人生价值。",
        "行文至此，有个可爱的女孩告诉我，她刚刚剁完手，要安然入眠啦。愿她的梦境像星辰一般璀璨！我也暂且辍笔，与她一同奔赴至下一场山海。在这宁静的午夜之中，我们要穿越时空的界限，相遇在最美的瞬间！",
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

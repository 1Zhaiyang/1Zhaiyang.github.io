document.addEventListener('DOMContentLoaded', function () {
    const letterContent = document.getElementById('letter-content');
    const nextPageButton = document.getElementById('next-page');
    const typeSound = document.getElementById('type-sound');
    const messages = [
        "这是周六日两天我准备的礼物，还没把页面优化到最好，本想慢慢完善下，时机成熟了用pad当面给你播放，但是没机会啦。信的内容在我们聊天结束后做了更改，改成了最后想跟你说的话。其他的图片炫彩我都没有时间改啦，明早要投入工作了，这个就当作是我们临别的礼物送给你！这个礼物本来是表白的话，毕竟吸收了上次牵你手不会说话的经验，这次我就提前准备啦，不过内容我就改了，说一些最后想说的话，关于你说的自己的平凡",
        "周六那天，我确实想过你刚刚说到的学历问题。我们相处了一个月，因为我们聊的投缘，我的心里一直认为你是个很棒的姑娘。我没有有色眼睛，我只在乎我的亲眼所见和真实感受。当时想到这里，我觉得你是不是也应该了解我的另一面看你能不能像我一样接纳，所以我想跟你慢慢来，让我们都能试着接纳彼此的不那么优秀的地方。但是，自从牵完你的手后再和你聊就开始畏首畏尾，学生当久了总感觉你像监考老师一样给我接下来的一言一行打分。",
        "从周五晚学到早上六点开始，我的生物钟就成伦敦时区了。周六傍晚起来没看到你的消息，加上最近两次见面你都回家的很匆忙，我想是不是你的世界真的不需要我。我想着主动点吧，就想着要不给你准备个礼物，就开始做了这个网页。然后看比赛，然后就又睡到了礼拜天傍晚。还是没有你的消息，可能你真的是想和我单纯做朋友。想到这灵感就来了，我们以朋友的方式相处我们岂不是更能全方位的了解彼此，而且我也不再束手束脚的",
        "于是就有了今晚我跟你发的消息，我把我所有的缺点都告诉你，就是不给自己未来的遮掩畏缩留退路，我已经把我所有的不想告诉你的都告诉你了，未来我要麻痹自己，大大方方给你展示我的每一面，如果你像当时周六的我一样能够接受我的可能不是很优秀的一面，那我们一定会有未来。hhh我还反思了十分钟，现在想想我也觉得没错，但结果证明确实搞砸了，不过还是让我提早明白了你的想法，得以死心。",
        "最后说的这些，希望你能理解，你的学历工作能力什么的都不值得你焦虑，这些都是很无关紧要的东西，你有你的光芒，你能够发现书呆子发现不了的美丽世界，你拥有大部分人没有的共情能力和给人带来的温暖舒适感。未来肯定有人能够发现你的这些闪光点，在这些闪光点面前，你所吐槽的你的那些缺点根本无关紧要。困了，语无伦次了。这些背景都是周六日抽空做的，困得我也不改啦，代码很繁琐，但都是曾经的心意，交给你了，我也准备轻装上路",
        "不写啦，12：37了，要早点睡觉了。谢谢你出现在我的旅途里，虽然没能实现带你逛遍祖国大好河山的目标，但我相信平行时空里的我一定能够做到！虽然今日之后我们的世界再无交集，但我相信你我的人生都会很灿烂。最后，还是希望你能告诉我我这段经历的缺点和不足，请给我留言，我会很开心的，因为我也从失败里得到了成长，未来我会慢慢消化，再见啦！",
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

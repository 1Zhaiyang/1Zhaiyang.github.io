document.addEventListener('DOMContentLoaded', function () {
    const letterContent = document.getElementById('letter-content');
    const nextPageButton = document.getElementById('next-page');
    const typeSound = document.getElementById('type-sound');
    const messages = [
        "这是周六日两天我准备的礼物，本想下次海底捞用pad当面给你播放，但是没机会啦。信的内容我做了修改刚刚，改成了最后想跟你说的话。其他的图片炫彩我都没有时间改啦，明早要投入工作了，这个就当作是我们临别的礼物送给你！",
        "当时周六，我承认当时认真考虑了你刚刚说到的学历问题。我们相处了一个月，因为我们聊的投缘，所以我的心里一直认为你是个很棒的姑娘。我也不是找工作应聘，我只在乎我对你的感觉。其实当时想到这里，我就想到你是不是也应该了解我的另一面，所以我想跟你慢慢来，再多熟悉熟悉彼此。但是，我自从牵完你的手后再和你聊就开始畏首畏尾，我不知道我们之后慢慢进一步熟悉彼此另一面的过程我还要遮遮掩掩到多会。",
        "从周五晚上学到早上六点开始，我的生物钟就成伦敦时区了。我周六傍晚起来没看到你的消息，我在想是不是你真的对我没感觉，因为最近两次见面你都回家的很匆忙。我没想太多，就想着要不给你准备个礼物吧，就开始做了这个网页。然后看比赛，然后就又睡到了礼拜天傍晚。还是没有你的消息，可能你真的是想和我单纯做朋友。到这里我突然想到，我们以朋友的心态相处那上一页我说的我那个遮遮掩掩畏畏缩缩的心态不就没有了",
        "我们能够以轻松的相处方式完全熟悉彼此的所有。于是就有了今晚我跟你发的消息，我把我所有的缺点都告诉你，就是不给自己未来的遮掩留退路，我已经把我所有的不想告诉你的都告诉你了，未来我要麻痹自己，大大方方给你展示我的每一面，如果你像当时周六的我一样能够接受我的可能不是很优秀的一面，那我们一定会有未来。哈哈哈哈哈哈哈，现在想想我也觉得没错，但结果证明确实搞砸了。",
        "最后说的这些，希望你能理解，你的学历工作能力什么的都不值得你焦虑，这些都是很无关紧要的东西，你有你的光芒，你能够发现书呆子发现不了的美丽世界，你拥有大部分人没有的共情能力和给人带来的温暖舒适感。未来肯定有人能够发现你的这些闪光点，在这些闪光点面前，你所吐槽的你的那些缺点根本无关紧要。",
        "不写啦，1：23了，要早点睡觉了。谢谢你出现在我的旅途里，虽然没能实现带你逛遍祖国大好河山的目标，但我相信平行时空里的我一定能够做到！虽然今日之后我们的世界再无交集，但我相信你我的人生都会很灿烂。最后，如果你真的愿意告诉我这段时间我的不足，请给我留言，我会很开心的，因为我也从失败里得到了成长，我一定会接纳，再见啦！",
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

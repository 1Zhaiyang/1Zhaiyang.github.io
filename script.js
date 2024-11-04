document.addEventListener('DOMContentLoaded', function () {
    const letterContent = document.getElementById('letter-content');
    const nextPageButton = document.getElementById('next-page');
    const typeSound = document.getElementById('type-sound');
    const messages = [
        "这是周六日两天我准备的礼物，还没把页面优化到最好，本想慢慢完善下，时机成熟了用pad当面给你播放，但是没机会啦。信的内容在我们聊天结束后做了更改，改成了最后想跟你说的话。其他的图片炫彩我都没有时间改啦，明早要投入工作了，这个就当作是我们临别的礼物送给你！这个礼物本来是表白的话，毕竟吸收了上次牵你手不会说话的经验，这次我就提前准备啦，不过内容我就改了，说一些最后想说的话，关于你说的自己的各种平凡",
        "自从我创业以来，我第一关注的都是人的优点。我们认识后的第一个下午线上聊天，我就说过每个人的天赋技能加点不同，没有好坏，反而异性相吸。我们认识一个月了，你肯定知道我很爱玩，我喜欢享受生活。我羡慕你享受美食的能力，是能力没写错，你带我吃的无论甜点栀子奶茶还是正餐，我都觉得很赞。这种能力可能很多人有，但在我眼里，你还有对我而言更重要的一项能力",
        "搞科研的有个大众都知道的喜好，就是他希望自己研究的东西其他人也感兴趣。刨除我很爱跟你分享我每天沉迷的内容之外，我眼里你的捧场程度一言以蔽之，我脑海中第一个场景就是，那晚在欢乐港湾奶茶店，我半开玩笑但一本正经的问你是不是JianD，来我们这我专门叮嘱你不要拍照，这些我都记得，就是因为你平日里对我研究表现出的兴趣(至少我这么认为)很高，高到我曾经产生你身份有问题的那种荒谬想法",
        "周六那天，我想过你刚刚说到的学历问题。我们相处了一个月，因为我们聊的投缘，我的心里一直认为你是个对新生物充满学习欲望的姑娘。我从来没有有色眼镜，我只在乎我的亲眼所见和真实感受。当时想到这里，我觉得你是不是也应该了解我的另一面看看你能不能像我一样接纳彼此的不足，所以我决定跟你拉长战线慢慢来，让我们都能试着接纳彼此的不那么优秀的地方。但是，自从牵完你的手后再和你聊就开始畏首畏尾，学生当久了总感觉你像监考老师一样给我接下来的一言一行打分。",
        "从周五晚学到早上六点开始，我的生物钟就成伦敦时区了。周六傍晚这个时间点起床本就很丧，加上最近两次见面你都回家的很匆忙，我想是不是你的世界真的不需要我。我决定主动点，就开始给你准备这个礼物，也就是这个网页的外观设计。然后看比赛，之后又睡到了礼拜天傍晚，还是没有你的消息，可能你真的是想和我单纯做朋友。想到这灵感就来了，我们以好朋友的方式相处岂不是更能全方位的了解彼此，而且我再也不怕束手束脚的了",
        "于是就有了今晚我跟你发的消息，我把我所有的缺点都告诉你，就是不给自己未来的遮掩畏缩留退路，缺点我都抖出来了再也没有什么可顾虑的。我已经把我所有的不想告诉你的都告诉你了，未来我要麻痹自己，大大方方给你展示我的每一面，如果你像当时周六的我一样能够接受我的可能不是很优秀的一面，那我们一定会有未来。没想到这个错误的举动反而让我提早明白了你的想法，得以死心(其实你不用考虑我的感受，可以早点告诉我，我心理挺强大的)",
        "最后说的这些，希望你能理解，你的学历工作能力什么的都不值得你焦虑，这些都是很无关紧要的东西，你有你的光芒，你能够发现书呆子发现不了的美丽世界，你拥有大部分人没有的共情能力，你也能给人带来无与伦比的温暖舒适感。未来肯定还有其他人能够发现你的这些闪光点，在这些闪光点面前，你所吐槽的你的那些缺点根本无关紧要。困了，语无伦次了。这些背景都是周六日抽空做的，困得我也不改啦，代码很繁琐，但都是曾经的心意，交给你了，我也准备轻装上路",
        "不写啦，12：37了，要早点睡觉了。谢谢你出现在我的旅途里，没能实现带你游历祖国的愿望，平行时空里的我说不定做到了。虽然今日之后我们的世界再无交集，但我相信你我的人生都会很灿烂。最后，如果可以，你可以提出我的问题，我不会纠缠，我会认真读完从这段失败的经历中吸取教训。再见啦！",
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

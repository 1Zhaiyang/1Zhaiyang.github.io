document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');
    const letterContainer = document.getElementById('letterContainer');
    const letterContent = document.getElementById('letterContent');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');

    // 示例信件内容，分为多页
    const pages = [
        "今年太忙了，尤其是期末，都忘了给你写日志了，1.1号才想起来，给你补上。如果腾讯如我所料没坚持到你看信的那个时候的话，那么空间日志里从18年开始的六封信你都见不到了，这应该是你看到的第一封。写这封信时，我在北京市海淀区后厂村路航天人才房内，你还能想起来我来干嘛来了吗？牛逼不，正好跟你炫耀一下，用你的名字申请的域名，然后瞎设计的网页，但是至少能坚持六七十年到你看信那会。本来今早想起来今年还没给你汇报，我都不想写了，但想想你现在走也走不利索，听也听不清，人谁愿搭理你，还是有点可怜。快泡好茶坐下，老花镜戴好，废话不多说，我要开始了。",
        "老规矩，先谈学业，也没几年可谈了，再跟你谈两三回就毕业了。如果你是看完空间日志里去年的信紧接着看的话，你肯定能理解今年年初我有多纠结。但是，纠结的最后，今年3月份，我还是告别了杨女士和李老师，来到了深圳。最后是因为什么呢，我觉得主要还是因为实验室这边搞人工智能前沿领域，这一行我喜欢而且未来混得开，这是主要原因，次要原因是这边给的太多了呀，可能你现在看这封信觉得不屑一顾，但对一个学生来说，这放在国内妥妥天花板呀，比西欧读博待遇还好。就这两点原因，我得强调一下，第一点是主要的，虽然我年纪小，但我不肤浅，你要为我骄傲。",
        "去年信里的徐老师，又跑去新加坡国立了，还好临走前给我推了翼老师，所以上半年我都跟他。这段日子没啥总结的，因为太快乐了，真的堕落。翼老师不管，我每天九点去，中午回来睡午觉睡到四点甚至不去。所以没什么好写的。也因为这样，跟杨女士的异地恋在战役的初期还好，虽然相距两千公里，但还能保证我们两周见一次。刚开始我去西安，后来她来深圳，再后来我们去哪我也不写了，太刻骨铭心了那次，你一定能想起来。所以自从5.1号回来后，我就开始一扫这学期摆烂的节奏，疯狂读论文跑代码。努力两个月，七月份交了一份满分答卷！",
        "然后，就是因为答的太好，被吴老师看中了。所以命运迎来了巨变，现在吴老师怎么样？看完这封信一定要去看看她呀。7月份跟杨女士分手了，事后看来我当时做的是有点绝情，而且误会人家了，但是事情已经到这样了，我也不考虑挽回了，你知道最主要的原因是啥吗？上个月她还找我，说是喝醉了，然后要合好。当时我正在百度产业园出差，她说完我就去那个自闭室，冷静了一段时间我发现了一个很恐怖的事情：我已经习惯了我俩分手我一个人生活的状态，她说复合的时候我没有任何欣喜感。我不知道你现在怎么想，但我不后悔，因为这就是基于我现阶段认知判断情感做出的选择，再来一百回也是这样。",
        "你也知道你啥样，谈恋爱就不跟所有女生联系了，所以我也要求她这样。其实想想确实有点过了，她找复合那会也说了这事，我觉得她不用道歉和解释，其实问题有一部分在我，但最主要的问题是我们分手到打电话那天，我已经习惯了没有她的日子，或许跟期末有关吧，现在忙成狗，回到正题。七月之后，正式回到了一个博士应有的牛马生活",
        "新的课题组很好，吴老师对我也很好，课题组的四个北航，1个华工，一个中大的小伙伴们也特别好，氛围超级舒服！从七月开始，到写这封信的时候，五个月时间我数了下，去了14座城市，你想想我的项目任务有多大。其实刚开始还好，就是摆烂中学习，学习中摆烂。但是到了年底，所有的事情全来了。我现在坐飞机高铁都没精力看课外书了，全是论文。最离谱的一次，就是那个高额奖学金的什么长奖章，整个实验室才三个人，吴老师非让我去答辩，现在想想当时都尴尬的扣脚，尤其是我前面一个答辩的还是隔壁部门那个跟我一级的清华本硕博的哥们，人一年成果都够我博士毕业两回了，真的人和人的差别比人和猪的还大。",
        "12月6号终于解决了困扰我这一整年的方向问题，西安的老师终于放手了，我跟吴老师正好去西安出差，然后当面见了李老师，还得是会说话呀，你肯定没忘了那天长达三小时的答辩吧，我就不写了。总之，以后少了一份西安的活，专专心心忙我在深圳的学业和项目，真的如释重负。",
        ""
    ];

    let currentPage = 0;

    // 打开信封动画
    openButton.addEventListener('click', () => {
        envelope.style.transform = 'rotateY( -180deg )';
        setTimeout(() => {
            envelope.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            displayPage(currentPage);
        }, 1000); // 动画时间同步
    });

    // 显示当前页内容，逐字显示
    function displayPage(pageIndex) {
        letterContent.innerHTML = '';
        const text = pages[pageIndex];
        let index = 0;

        function typeChar() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === '\n') {
                    letterContent.innerHTML += '<br>';
                } else {
                    letterContent.innerHTML += char;
                }
                index++;
                setTimeout(typeChar, 50); // 每个字出现的间隔时间
            }
        }

        typeChar();
    }

    // 翻到上一页
    prevPage.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayPage(currentPage);
        }
    });

    // 翻到下一页
    nextPage.addEventListener('click', () => {
        if (currentPage < pages.length -1) {
            currentPage++;
            displayPage(currentPage);
        }
    });
});

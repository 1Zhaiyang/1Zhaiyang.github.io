document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openButton = document.getElementById('openButton');
    const letterContainer = document.getElementById('letterContainer');
    const letterContent = document.getElementById('letterContent');
    const prevPage = document.getElementById('prevPage');
    const nextPage = document.getElementById('nextPage');

    // 示例信件内容，分为多页
    const pages = [
        "今年忙得不可开交，尤其是期末，一时竟忘了给你写日志。直到1月1日才想起来要补上。如果腾讯如我所料没坚持到你看信的那一天，那么空间日志里从2018年开始的那六封信你都见不到了。这应该是你读到的第一封。我写这封信时，坐在北京市海淀区后厂村路的航天人才房内。还记得我来这里是为了什么吗？是不是有点佩服我了？对了，用你的名字申请了个域名，还瞎捣鼓了个网页，虽然设计得不咋地，但起码能坚持个六七十年，到你看到这封信时应该还在。本来今早想起没写日志的时候还想偷个懒，但想到你现在可能步履蹒跚、耳背眼花、孤零零地喝着茶，我觉得还是得写点什么。快泡好茶，戴上老花镜，听我唠一唠吧。",
        "按老规矩，先聊聊学业。也没几年可谈了，再跟你谈两三回，估计就毕业了。如果你是从空间日志里去年那封信接着看的话，你一定能理解今年年初我的纠结。但最后，在今年3月，我还是和杨女士、李老师挥手作别，南下深圳。原因很简单：实验室搞的是人工智能的前沿方向，这不仅是我的兴趣所在，更是未来的通行证。而次要原因嘛，实在是这里的条件太好了，国内妥妥的天花板，比西欧读博的待遇还优厚。虽然你可能现在看这封信时不屑一顾，但对当时的我来说，简直天降福音。当然，我得强调一下，主要还是因为第一点，我喜欢这个方向。别看我年纪小，我可不肤浅，你得为我骄傲！",
        "去年信里的徐老师跑去新加坡国立了，临走前给我推了翼老师。所以上半年，我基本跟着翼老师混日子。真的太快乐了，快乐到堕落。他不怎么管人，我每天九点晃到实验室，中午回来睡个午觉，甚至有时直接不去。因为这种摆烂的节奏，我和杨女士的异地恋也在起初阶段还能两周见一次，但后来次数渐渐减少。到5月1日后，我猛然意识到这种状态不能再继续，于是开始疯狂读论文、跑代码，用两个月的努力换来了7月一份满分答卷！",
        "答得太好，引来吴老师的青睐，从此命运迎来了巨变。7月和杨女士分手，事后回想我确实有点绝情，也误会了她。但已经这样了，我没有回头挽留的打算。最主要的原因是什么呢？上个月她打电话来，说喝醉了，想复合。当时我正在百度产业园出差，她的话让我冷静下来反思了一阵：我发现自己已经习惯了一个人的状态。她提出复合时，我竟毫无欣喜之情。这让我意识到，情感是当下的选择，而非沉溺于过去的感性冲动。",
        "其实她打来电话我有点动摇了，想起了她的各种好。如果我还是上半年在翼老师那边，我一定是跟她也讲讲我当时做错的地方然后跟她复合。只不过，没有如果，我一想到我现在的学习压力以及即将到来的期末，我觉得我无法再向上学期一样千里迢迢跟她相见，因为上半年我经历了这样的苦，所以之前所谓所爱隔山海，山海皆可平的口号我不再挂在嘴边，真正经历后我被打败了。我不希望她需要我陪她的时候我不能第一时间出现在她身边这类事情再次发生，我觉得应该即时止损，为我也为她。",
        "第二次通话时，我坦诚告诉她我的想法。她听后说自己没有想太远，只是想在当下和我聊聊天。那天我们聊了两个多小时，结束后我一个人跑去我们曾去过的德国餐厅，吃饭间我终于下定决心，不能再耗下去了。我知道自己很自私甚至冷血，但我无法放弃自己的理想，也无法辜负吴老师的栽培。于是，我第一次拉黑了一个人。这不是孩子气的赌气，而是为了避免每次看到她时，那种难以承受的情绪波动。",
        "我以为自己足够强大，但每次看到她发朋友圈，内心依旧被无尽的遗憾笼罩。我希望自己能云淡风轻地面对，但显然做不到。于是，我选择彻底断开所有联系。回想起我们在一起的那些日子，我感到无比幸福，但我更知道，我们的未来无法继续。也许你现在会感慨万千，但请记住，这只是我当时认知下的最优解，毫无遗憾。",
        "不知道你心里怎么想，但有一点，不要有任何后悔的情绪。我不希望你带着遗憾去读我每年给你写的信，我只是在向你讲述来时的路，以及旅途中遇到的人和风景。没必要回头遗憾，相信我，你的旅途足够精彩。所有的选择都是基于我当前认知的最优解，没什么可后悔的。不知道她现在怎么样，跟她的这一路真的很快乐，这几百多天我的生活里只有学业父母和她，想起来我们这么久好像只吵了几次架，次次到凌晨，当天的问题当天解决，真的好可爱我们俩。唯一的遗憾就是没有陪她重游硕士校园，她可是跟我提了无数回啊，她一定很想让我陪她再去一次。希望她一切安好，她这么优秀漂亮的姑娘一定会幸福的。",
        "分手后的第二天，我飞去了重庆出差。站在嘉陵江边，回忆如电影般在脑海中闪过，(如果QQ没倒闭，之前的信里你应该也能复习到，真离谱)。但我知道，所有的故事终将翻篇。科研的路还长，得继续努力了。",
        "新的课题组很好，吴老师对我也很好，课题组的四个北航，一个华工，一个中大的小伙伴们也特别好，氛围超级舒服！从7月到现在，我去了14座城市，项目任务多得不可思议。年末时事情更是蜂拥而至，忙到高铁飞机上全看论文。年内最难忘的一次，就是为那什么长奖章去答辩，前面的选手是清华本硕博连读的大佬，一年成果顶我博士毕业两次，人比人，真能气死人。",
        "12月终于解决了困扰我一年的方向问题，西安的老师终于放手了。我和吴老师去西安出差，当面和李老师谈了三小时，算是给这段纠葛画上了句号。现在，我可以全心全意投入深圳的学业和项目了。工作量之间减少了一半，这感觉真好！而且终于确定了我的论文方向，不知道你这会儿怎么看这一行，但从我现在的角度看来，真的是一个非常值得研究并且有发展前景的方向。不管怎么说，方向确定了就好办了，以后终于不用牵扯进一些跟我方向无关的项目里了。但是期末还是如我所料，特别忙。最近两三周出差了六七次，其实出来挺好玩的，但是从四天前开始，也就是自从来到北京，现在天天早上七点起晚上十一点睡，真的有点顶。",
        "忙碌之中，你在忙些什么呢？我也不禁自问。有三件大事缠身：首先，为了即将在十天后举行的论文开题答辩，必须疯狂阅读文献，深入了解研究现状，并挥洒代码，奠定坚实的研究基础；其次，自七月以来一直参与的脑项目，近期那款AI算法表现欠佳，听从导师建议，暂时转向传统的物理层算法，逐步排查是否某个子函数出了纰漏；第三，归纳为一项，那就是频繁的出差，不同的城市有不同的任务。唉，真是劳累不堪，不过博士三年的艰辛已经证明，我不能轻言放弃。",
        "十月里发生了一件颇为离奇的事情，遇见了一个人，你还能忆起吗？剧情如此：突如其来的相遇，始料未及的喜欢，猝不及防的再见。还记得吗？一切都太过迅速与短暂。十一小长假的最后一天，那晚哥哥打来电话，询问我和杨的事情，我倾诉了我的犹豫与最终的决断，哥哥也表示支持。谈及异地恋时，哥哥想起了他在深圳的学生，便打算为我牵线搭桥。当时我想着这种事情至少得一年半载才能找到合适的人选。为了让媒婆周详细了解我的情况，哥把我推了过去。如今看来，真神奇，原本是哥哥让她做媒婆，三个月后却成了我为她做媒婆，命运果然妙不可言。",
        "不过，正是因为哥给我介绍对象这事，让我俩的联系突然热了起来，原本因为从小就不怎么见面，俩人都害羞，现在反而经常打起电话了，真好，我喜欢这种关系。回到当时的时间节点，由于哥哥说的是为我介绍对象，自然而然我便将她备注为媒婆，哈哈哈，实在是有些不太礼貌。因为哥要让她介绍其他人，而非她，我以为她已经有了对象，于是匆匆结束了我们的交流。",
        "然而，次日开始，她便每天早晨给我发送硕博生活类的微信短视频，我的媒婆定位也随之发生了变化。或许正如哥所言，即便最终她未能帮我找到理想的伴侣，至少我多了一个朋友。哥哥打来电话，说让我请她吃饭，尽管事情尚未落实，但饭先请了，正好这位媒婆居然就在我隔了两站地铁的地方。猝不及防的是，她的效率实在太高了，原本预期的一年半载，竟在一周内便为我介绍了人选，还细心地提供了相关信息。一切来得如此突然，前两小时她临时决定，两小时后我们便见面了。至今我依然觉得，我的择偶标准一直偏向于像杨姑娘那样身高腿长并且漂亮的类型，哈哈哈真虾头",
        "但遇上像徐姑娘这样俏皮可爱的女孩，我还是沦陷了。回想起来，或许是因为她第一次见面时展现出的高情商，正如那句老话所说，如果你与某人相处得十分舒适，往往是她在向下兼容你。人们都说，第一次见面有感觉就是有感觉，也正是这次良好的第一印象，让我渴望进一步了解她。我从媒婆那儿要了她的微信，她还说她的任务完成了，让我们俩好好聊聊。后来就离谱，她竟然赖账说她并不是来介绍对象的！可是，她当时还发来了她与徐姑娘的聊天截图，显示她们讨论徐姑娘的现任不佳，打算为她介绍新的人选，而徐姑娘也提到了分手的事。总而言之，当我看到这些片面的信息时，感觉她明明是在为我介绍对象，事后却不承认",
        "回归正题，自从决定深入了解徐姑娘后，我不得不夸夸自己二十出头的认知能力。每日与复杂公式和论文为伍，使得我的理解力如今恐怖异常。仅用三四天，我觉得已将徐姑娘看透。她对外展现出阳光活力的一面，但是当她提到自己有入睡困难时，我就知道她私下里是个多愁善感的姑娘。换言之，积极的一面留给外人，消极的一面则藏于心底。没跟你吹牛，她后来告诉我，她的手机壳是一个发疯真性情的台湾人，这更佐证了我的判断。人缺乏什么，就会倾向于爱上什么，她无法将自己的消极面展现给外人，因而倾心于那些能够随时发泄情绪的偶像。",
        "这就是我当时的判断，虽不一定正确，却深信不疑，甚至有些自得。想起《教父》里的台词：“三秒看透事物本质的人，与三年才看清本质的人，命运迥异。”我真自恋，别笑话我，人不轻狂枉少年，哈哈哈。真希望心里有个档案，能让你看看她那天来实验室，担心被警察抓的可爱模样。坐在一楼沙发的那一刻，或许是我觉得自己了解她之后，第一次真正喜欢上她。那晚，我忍不住拉起了她的手，她的手好小呀，脸圆嘟嘟的，特别可爱。然而，她却反悔了，或许当时就应该戛然而止，因为自此之后，我们的关系便变得不再正常和健康。",
        "起初我以为，是她不像我这么自恋，觉得自己聪明到几天就能了解一个人，后来才明白，人之初，情难自控。尽管这一切发展得如此离谱，但我依然为那晚牵起她手，渴望保护这位可爱姑娘一生的想法感到欣慰。我太喜欢当时的自己了，如今每当想起她，脑海中总会浮现出那个充满理想与责任感的少年模样。为什么我会喜欢那晚的自己，因为我一直自认为是个自私的人。现阶段的我，努力学习一方面源于心中的星辰大海，热爱这一行；但理想，谁没有呢？我深知，克服懒惰的利器，正是那超乎常人的虚荣心。虚荣的人最怕让他人失望。",
        "至今，我仍不明白为何父母和老师如此喜欢这个堕落的我，一方面我享受着这种被宠爱的感觉，另一方面却觉得自己配不上这份期望。因此，我的努力，更多是为了自己，渴望持续享受这份被期待的满足感。然而，那晚的我却有所不同。为了见她，我在面对各种代码调试的压力时，毅然决定放下所有任务，下午四点便溜出实验室。我不是杨姑娘口中那个为了理想可以抛弃亲人的冷血动物。虽知道她说的是气话不一定对，却依然被她影响。难道你还不了解自己吗？即便再忙，也要请假回家看看父母；研一时，顶着课题组的压力，请了50天假，只为多在家待几天的，正是我。我明白，自己一直是个恋家的人，远没有她说的那么自私。我喜欢那晚的自己。",
        "这段经历在一个月后画上了句号。实际上，除了牵手被反悔前的那段时光十分快乐，其他的回忆都不那么值得我铭记，仿佛那段时光并非真正的我。奇怪的是，如今回想起来，那段时光依然充满快乐，果然自我认同的快乐是最纯粹的，能够持久存在。或许真的如那句，我爱上了当时那个喜欢她的自己。既钟情于那份年少轻狂，觉得自己聪明到可以在三天内全面了解一个人，又倾心于那份为了一个人能够放下所有重担的激情冲动。我喜欢这样的自己，这样的自己也回答了去年信中的疑问。我终于为自己的天下情怀找到了坚实的基础，我并不是一个不珍惜眼前人却空谈理想的弱智，而是一个充满温情与激情的有志青年。",
        "这也是思想的一次转变，不再是过去那个只看重身材与容貌的老色批，而是更注重自我体验与情绪共鸣。果然，经历的事情和阅读过的书籍都是有益的，感觉我的思想又提升了一个层次。明年信里应该还会出现的人物，周媒婆，说来离谱，明明她的所言所行展示给我的包括哥给她说的都是未来给我介绍对象，她还不承认，还说我的问题。确实是误会，我也确实有问题，总会因为信息和知识的不全面对人和事物的认知产生偏见，也确实因为这种判断误差有点对不住周老师。",
        "本来我不知道怎么面对她，想着躲起来，结果她说我一点也不像朋友，既不主动聊天，也不出来吃饭。所以11月的一个周五请她吃了一顿，她还事后诸葛亮说我们本来就不合适blabla。说我每次见了徐姑娘体验都很开心是因为我把人当成了情绪宣泄桶，但是人家本来也有很多负面情绪。嘿，我以为人是要把我当朋友，我还说每周有空了周五请人吃一顿也好，朋友关系也需要维持么，结果，吃饭结束了让我给他介绍我周围朋友。哈哈哈哈哈哈哈哈哈哈，太离谱了这事情，兜兜转转我给她介绍起来了。不过还真有人选，山本不是正愁找对象呢么",
        "在布吉万象汇吃那家东北菜，我说介绍对象他还笑嘻嘻的，结果我说完人学历性格各方面后这二逼不愿意了。他一个硕士凭什么看不起本科生啊，还有理有据跟我讲让我想想自己上学那会班里学特长没上正经好大学的人是什么样。其实这一瞬间我被说服了，但是他和人还没见面相处就对人下定论太离谱了，果然人的无能会带来傲慢与偏见，自卑会带来各种怪脾气，这二逼，单着吧你。山本咋样了现在，有空了带瓶茅台去看看这老壁灯，没别的，就当是宴请少年的我们。再叫上虎哥和杰克，研一那会我们四个是真的海皮。",
        "说到这里，我不禁想起今年的另一件事。老师让我招一个助理，辅助我，工资也很高，而且四年后还能拿到科大学位。虽然这所学校是双非，但听说实力不俗。我先去找了山本，结果人都当老师了，还来我这干嘛；又去找了浩杰，一切似乎都很顺利。然而，当我和哥哥打电话讨论此事时，哥哥一针见血地指出，我们做同学很好，但一旦他来辅佐我，成为上下级关系，我们的友情可能会变质。那段时间我头疼不已，因为我已经答应了他，又经过哥哥的点拨，实在是不知所措。所幸，虽然最终是我面试，但他的简历在第一关就被淘汰，因为本科只是普通一本，硕士也没什么成果。算是万幸，保住了友谊。然而，今年的助理名额也就此浪费，我为了不给他竞争压力，只招了一人，本来可以轻松许多，现在还是一个人忙得不可开交，只能等来年再说。",
        "来说说你应该最关心的，今年我回了四次家。还是老样子，爸爸不愿意我回去，怕耽误学业；妈妈却偷偷打电话让我回家。深圳回家真方便，每周有一次直达班机。中秋那次，早上七点还在实验室，中午十一点就到家了。回西安汇报工作后又回家了一次，去西安出差又回来一次，然后还带杨姑娘回去了一次，不过没敢告诉爸妈，毕竟那是翘课回家，哈哈哈哈哈。虽然爸妈有钱，我不需要给钱，但没有什么问题能难倒我。隔三差五给妈妈买了很多好吃的，还买了她爱用的兰蔻或雅诗兰黛护肤品（忘了牌子了），给爸爸买了羽绒服和小米新出的剃须刀。对了，以往出去吃饭都是他们掏钱，这次去西安出差顺道回家时，我请他们吃了一顿饭，就在小区旁边的生龙国际商场。其实很想家，想念爸妈，现在保持每两天视频一次，不过也经常因为学习任务没完成而有所调整。",
        "妈真是太可爱了，今年九月份有次爸问我啥我忘了，我忙完回过电话爸说他在下棋，我就给妈打，妈街上就说找我爸我爸没空才来找她。哈哈哈哈哈哈哈哈哈，太可爱啦。其实想想找妈的话爸也有这个问题，所以干脆在群里发起微信通话，一碗水端平。年底了，等出差回来去水贝给妈买个金镯子去，说到还是得做到。刚刚4s店来电，说起来真的忙年底。上上周四联系4s店说周六去看车，结果周五就飞去了上海，回来又跟4s店说下周六去，结果上周三又坐高铁去了南京，然后现在又在北京。我感觉人4s店可能都不信我说的话了，hhhhh，哪有人能这么忙啊。话说回来，其实感觉今年很舒服，主要是没有打卡要求，想去去想溜溜，但是任务确实很多，学习压力科研压力毕业压力blablabla，但是也遇见了很多大佬，学到了很多知识，走过了很多城市，还是很幸福的一年。最近在学习德语，明年要去那边出差一个月，虽然英语够用，还是学一学这样能更快拉近距离。",
        "最后，又到了最期待的环节了！今年我终于明白了，为什么前六年我最喜欢写这一部分。年少时的我，站在人生的十字路口，觉得自己前途无量，人生有一万种可能；但在读信的你看来，我的人生只有一条命定之路。不了解命运，才真正明白什么是命运。生命本无意义，是我的存在，赋予了生命意义。牛逼不？哈哈哈哈，其实这是我在去重庆出差的高铁上读到的史铁生书中的一段。四十年前的你，哪有这样的水平写出这种话呀，你也不想想。当我读到这句话时，才明白为什么每年给你写信写到这部分时总是特别开心。前几天我在高铁上偷偷打开了2021年给你写的信，真的好有意思，感觉那个三年前的小孩太幼稚又有趣了。",
        "看着信中透露出的风华正茂和年少热诚，真的感慨万千。我欣赏他的自大和无礼，也羡慕他的勇气和胆识。或许你现在看我也是如此，其实在读那封信之前，我回忆起2021年的点滴，已经想不起来细节了，只有那些重大事件的模糊记忆，总感觉人生虚度；但读到那封信时，才发现那一年我过得如此精彩。我想，其他几年也应该如此，等到六十岁再回看时不会觉得枉活一生。希望你读到这些信的时候，不会觉得自己枉活一甲子，每一件事、每一个人都让你有所收获。我猜你现在还在深圳吧，父母康健否，夫妻恩爱否，子女快乐否？我知道，今年决定留在深圳可能会改变我的一生，这是我经过谨慎周密考虑后的决定，也参考了身边同学老师的案例。",
        "第一点在于上面提到的研究方向，我就不赘述了；第二点很重要，我在这边遇到了好老师，愿意相信我并对我帮助很大。我知道自己并非人中龙凤，也没比别人强多少，很有幸也很难得老师能够欣赏我，人的一生很短，遇到一个能看到我闪光点的老师我很珍惜(哈哈哈哈哈，是不是前年写杭州的张老师也是这样写的)，无论如何，我不能浪费每一个来之不易的机会，遇到伯乐那我就要努力证明自己配得上千里马的称号，不仅是为了不让老师的期望落空，也为了自己的未来。作为一个学生，我现在最大的问题就是不想学习。哈哈哈哈哈哈哈哈哈，笑死我了，对于一个学生来说这个问题太致命了。所以我用道德绑架自己，克服自己骨子里的懒惰。原因之三，科研都有可行性分析，留在深圳的可行性就在于生活成本的分析，吃穿行都被包养，住的话周围很多老师没靠家里任何支持在这里申请了人才房买了大house，所以可行性分析也顺利通过。",
        "上述三点是我主要考虑的方面，早已分析明白。唯一阻碍我最终决定的是适应广东的饮食，不过现在看来还好，毕竟在苏杭也呆了很久，我的口味并没有那么挑剔，而且我还经常能去各地体验当地美食，所以最后一关也轻松过关。说实话，我还是很喜欢这种专心致志钻研的生活节奏，既自由又有成就感。今年就写到这里吧，我还在出差呢，而且期末异常忙碌，明年年底再见。你要注意身体，工作这么久就该歇一歇，陪陪家人，逗逗孙子，快休息吧。你可以躺平，我不能躺平，我要躺平了，你就不能躺平了，是不是？明年这个时候再见！",
        "愿眉目舒展，顺问冬安！/n/n写于2025年1.1日/n/n北京市海淀区"
    ];

    let currentPage = 0;
    let typingTimeout = null; // To track the current typing timeout
    let isTyping = false; // To track if typing is in progress

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
        // Clear any ongoing typing
        if (typingTimeout) {
            clearTimeout(typingTimeout);
            typingTimeout = null;
        }

        // Reset the content
        letterContent.innerHTML = '';
        const text = pages[pageIndex];
        let index = 0;
        isTyping = true;

        // Disable navigation buttons during typing
        prevPage.disabled = true;
        nextPage.disabled = true;

        function typeChar() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === '\n') {
                    letterContent.innerHTML += '<br>';
                } else {
                    letterContent.innerHTML += char;
                }
                index++;
                // Continue typing
                typingTimeout = setTimeout(typeChar, 50); // 每个字出现的间隔时间
            } else {
                // Typing finished
                isTyping = false;
                prevPage.disabled = false;
                nextPage.disabled = false;
                typingTimeout = null;
            }
        }

        typeChar();
    }

    // 翻到上一页
    prevPage.addEventListener('click', () => {
        if (currentPage > 0) {
            // If typing is in progress, cancel it and display the new page
            if (isTyping) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
                isTyping = false;
            }
            currentPage--;
            displayPage(currentPage);
        }
    });

    // 翻到下一页
    nextPage.addEventListener('click', () => {
        if (currentPage < pages.length -1) {
            // If typing is in progress, cancel it and display the new page
            if (isTyping) {
                clearTimeout(typingTimeout);
                typingTimeout = null;
                isTyping = false;
            }
            currentPage++;
            displayPage(currentPage);
        }
    });
});

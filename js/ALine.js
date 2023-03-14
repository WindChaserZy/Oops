// All stories of A story line

monogatari.script({

    'A1':[
        'stop music',
        'play music Front with loop',
        'm 同学你好，我没事，谢谢你的关心。',
        'show character lbl normal with MtoR',
        'show character m normal with Left',
        '陌生人将你扶起来，来到一旁的长椅上坐下。你注意到这里很像主楼前面的草坪，你又偷偷打量了一下这位同学/老师/学长，发现他的身上醒目地写着“681”。',
        '空气一片沉默，你觉得自己应该说些什么打破僵局。',
        'm 同学，呃，请问你怎么称呼？',
        '对方听了你的话却突然长叹了一口气，一副泫然欲泣的模样。',
        'm （惶恐）同学你你你你怎么了？我说错什么了吗？对不起对不起对不起！',
        '陌生人皱着眉大喊，看起来非常失望和难过。',
        'u 为什么你们都不能念对我的名字？我的名字不是就写在身上吗？大家甚至都不愿记住我的名字？不是叫不出我的名字就是直接喊我681？我知道在这里我只是最平凡不过的一个，没有了以前的光芒，但是我始终有我自己的名字啊！',
        '哦，原来是这样，原来身上的数字是名字啊，你想。',
        '你仔细回想了一下，想起来在原来的盒子里似乎见过这位仁兄，黄色的皮肤，长长的两条腿，圆圆的脑袋，似乎是个···电容？',
        {
            'Choice':{
                'Dialog':'你尝试叫了他的名字:',
                'wrong':{
                    'Text':'681pF',
                    'Do':'jump A2'
                },
                'right':{
                    'Text':'680pF',
                    'Do':'jump B2'
                }
            }
        }
    ],

    'A2':[
        'hide character lbl with RfadeOut',
        '对方显得很伤心，确认你没有受伤后便匆匆离开了，你想叫住他，又不知道怎么称呼他，只能尴尬地挠了挠头。',
        'hide character m with LfadeOut',
        {
            'Choice':{
                'Dialog':'你想着电路还没有搭完，于是决定找个安静的地方仔细回忆下，把电路设计完成。你决定去:',
                'lib':{
                    'Text':'图书馆',
                    'Do':'jump Aa'
                },
                'building':{
                    'Text':'教学楼',
                    'Do':'jump Ba'
                }
            }
        }
    ],

    'Aa':[
        'show background Lib with fadeIn',
        '你凭着记忆来到了图书馆，你惊讶地发现图书馆一片喧闹，你以为发生了什么事情，走近一看才发现是大家在联机打游戏。',
        '身后突然传来一声尖叫，你吓得猛地扭头，原来是有人在练声。',
        '你非常震惊，不理解为什么大家会在图书馆打游戏练声，只当大家精神错乱了或者图书馆在搞什么活动或者改革试验。',
        'show character m normal with fadeIn',
        'm （喃喃自语）在图书馆这样大声喧哗不会被赶出去吗？',
        '有位同学踩着踢踏舞步走过，似乎是听到了你的话，他像看到了外星人一样看着你。',
        'pb 当然不会啊，图书馆是不允许安静的，你要是在这里安静地摸鱼是会被同学挂到树洞上骂死的。',
        '哦，这个世界原来还有树洞。你感到很欣慰。',
        'hide character m with fadeOut',
        'show background Shelf with fadeIn',
        '眼看着图书馆是没法搭电路了，你想试着在图书馆借一些参考书去研究一下。可是这里的书籍分类你都不太能看得懂，你随便从书架上拿起了一本书：《一本书教你学会AUP》。。',
        'show image Aup with fadeIn',
        'm （什么是AUP？）',
        '“‘AUP’是指人们不断肯定彼此，夸赞彼此，鼓励彼此成为更好的自己。”翻开封面，前言的第一句话这样写着。',
        'm （那PUA呢？996呢？社畜呢？都不存在吗？）',
        {
            'Choice':{
                'Dialog':'你看了看手中这本书，你决定:',
                'borrow':{
                    'Text':'借书',
                    'Do':'jump Ab'
                },
                'giveBack':{
                    'Text':'把书放回去',
                    'Do':'jump Bb'
                }
            }
        }
    ],

    'Ab':[
        '你把这本《一本书教你学会AUP》从图书馆借了出来，随便翻了翻。',
        'show message GetAup',
        'gallery unlock Aup',
        'hide image Aup with fadeOut',
        '你又想起还没搭完的电路，你开始觉得是不是因为自己有问题所以电路一直搭不对，于是你决定去校医院看下医生。',
        'show background Hospital with fadeIn',
        '走进校医院，你看到了很多人在门诊排队，还有一部分人拿着处方和医生聊着转诊，似乎打算转院到北医六院。',
        '你走到导诊台前面，看到墙上滚动的挂号屏，发现好多人挂的是“摆烂心理科”。',
        '你挂了号，准备做个全身检查。',
        'show background HosOffice with fadeIn',
        '诊室里只有你和医生两个人，你勉强克服社恐，开口询问正在拿着仪器给你做检查的医生。',
        'show character m normal with fadeIn',
        'm 医生，摆烂心理科治疗的是什么呀？',
        'show character m normal with MtoL',
        'show character doc normal with Right',
        'doc 哦，就是摆烂病，放松太久了，难免产生一些心理问题。',
        '你注意到通正向电压时，你不亮了，通反向电压时，你却发光了。',
        'm （害怕）我不会是被击穿了吧，我想。',
        'doc （微笑）没什么大碍，发光正常，就是光有点微弱，能量不太足，回去给自己多充充电，多休息休息就好了。',
        '你哑然，人们总喜欢把正常的事情评价为反常，把反常的事情认为是平常。',
        '不过这是在AD世界，这样发光应该是没有问题的，你想。',
        'hide character doc with fadeOut',
        'hide character m with fadeOut',
        'jump e8'
    ],

    'A3':[
        '你想起了你还没搭完的电路，于是决定悄悄离开东操，换一个安静的地方研究一下你的电路。',
        'show image Circuit with fadeIn',
        'gallery unlock Circuit',
        'show message GetCircuit',
        'hide image Circuit with fadeOut',
        {
            'Choice':{
                'Dialog':'你决定去',
                'lib':{
                    'Text':'图书馆',
                    'Do':'jump Aa'
                },
                'building':{
                    'Text':'教学楼',
                    'Do':'jump Ba'
                }
            }
        }
    ],

    'A4':[
        'show character m normal with fadeIn',
        '你硬着头皮接着唱了起来，周围人群开始爆发出尖叫和欢呼声。你一边唱一边被主唱拉着来到了台上，聚光灯亮的你有些睁不开眼——电路板上可从来没有这么多灯',
        '主唱跑到贝斯手旁边，和贝斯手共用同一个麦克，和你合唱起来。你渐渐感觉到了快乐与肆意，感觉多巴胺在持续分泌。你开始在台上跳了起来，和台下的观众互动，你看到680pF站在人群中把手做成喇叭状放在嘴边为你欢呼。',
        '你跳的更加起劲，一曲终了，你感受到了酣畅淋漓的快乐',
        '低头的时候，你发现，自己开始发光了。',
        'hide character m with fadeOut',
        'show image Dio with fadeIn',
        'gallery unlock Dio',
        'show message GetDiode',
        'hide image Dio with fadeOut',
        'show character m normal with fadeIn',
        'm （原来我也是可以产生能量的）',
        '你下了台，680pF在台下等着和你击掌。你有点不好意思，但是还是伸出手跳起来和他击掌（不然够不到）',
        'show character m normal with MtoL',
        'show character lbl normal with Right',
        'lbl （神秘兮兮）我来不及啦，我们快点走，我有一场足球赛要踢。',
        '680pF的话好像被旁边的一位同学听到了，他略带不解地皱眉看了一眼680pF，然后摇摇头，接着跟着音乐跳动。那位同学有些厌恶的目光让你感到奇怪。',
        'm 不是应该始终保持健康才能好好工作吗，踢足球不是很正常？',
        'lbl （不解）你在说什么？咱们的宗旨不是一直是‘我们为自己，快乐至上’吗？',
        'hide character m with LfadeOut',
        'hide character lbl with RfadeOut',
        'show background Football with fadeIn',
        '你坐着680pF的电动车，跟着他来到了足球场，只有零零星星几个人在做热身活动，和东操的盛况形成了鲜明的对比。',
        '你不会踢球，只好坐在一旁看着680pF做准备活动，准备上场。你看了看场上的人，除了像680pF这样腿很长看起来似乎不那么适合踢足球的，其余的人也看起来并不像受过专业训练的',
        {
            'Choice':{
                'Dialog':'你扭头看到不远处有个同学抱着电脑坐在一边，你决定:',
                'talk':{
                    'Text':'和他攀谈',
                    'Do':'jump A5'
                },
                'alone':{
                    'Text':'太社死了还是自己一个人坐着吧',
                    'Do':'jump B5'
                }
            }
        }
    ],

    'A5':[
        'stop music',
        'play music BackPart with loop',
        '你挪过去，准备和他攀谈。靠近他的时候，你发现，他好像在打代码。定睛一看，有点像数据结构的大作业，你有一种他乡遇故知的感觉。酝酿了一下措辞，你开口:',
        'show character m normal with fadeIn',
        'm 同学你好，咱们不是都做什么快乐就去做什么吗？你怎么在这儿打代码呀？',
        '同学推了下眼镜，目光依然没有离开电脑。',
        'show character m normal with MtoL',
        'show character cd normal with Right',
        'cd 可是我喜欢这个，尽管因为只学习不摸鱼我受到了排挤，大家都不理解我，我的成绩也不如大家每天摸鱼好。',
        'm （说话条理性一般，这样不太能写得好代码逻辑的，我忍不住想。）',
        'm 那你在这儿是干什么呢？踢足球吗？',
        'cd 不是，我在等我朋友。',
        'm 你看你朋友不是理解你嘛。',
        'cd （点头）是的，只有我朋友最能理解我，最爱我。你看，他过来了。',
        '你抬头顺着他手指的方向看过去，并没有看见人。然而他却已经自顾自和空气交谈起来了。',
        '“今天踢得怎么样啊”“嗯嗯，我看到了踢得好不错。”···',
        'hide character m with LfadeOut',
        'hide character cd with RfadeOut',
        {
            'Choice':{
                'Dialog':'你有点错愕，你决定:',
                'self':{
                    'Text':'劝他做自己，每个人有每个人的选择',
                    'Do':'jump A6'
                },
                'others':{
                    'Text':'劝他随波逐流，重回人群，解开心结',
                    'Do':'jump B6'
                }
            }
        }
    ],

    'A6':[
        'stop music',
        'play music Front with loop',
        '你简单地和他聊了两句，劝他坚持做自己喜欢的事情，同时建议他关注下自己的心理健康。你看到680pF才刚刚踢完上半场，于是决定离开球场到处逛一逛。',
        '你凭着记忆来到了教学楼，走进去一看发现教学楼已经不是你想象的样子。',
        'show background BuInside with fadeIn',
        '教学楼更像是social的酒会，不对，已经不能叫教学楼了。大家在各层之间穿梭，每层有着不同的活动主题。',
        '你来到了二层，发现这里正在进行桌游局。牌桌一张挨着一张，桌边还设有桌游更新接口，只要将游戏本接口插入，便可将游戏更新。',
        '你有点恍惚，不远处你看见有个牌子写着“答疑坊”三个字，你便急切地奔了过去。',
        '进去之后，你发现里面有一群人围着一个学生，正在全神贯注听他讲些什么。',
        '你找了个不引人注目的角落悄悄坐下，想听听答疑坊的学长在讲什么。',
        'show character xz normal with fadeIn',
        'xz 我先问下老师在课上有讲这个吗？',
        'xz 居然没讲？怎么这么基础的游戏操作都不讲？？让你们自己摸索吗？',
        'xz 这样的话我就给你们从头讲一下吧。',
        '你听了会儿，不是很能听得懂，只是隐约听到“艾尔登法环”什么的。人群渐渐散去后，你来到学长的身边:',
        'show character xz normal with MtoR',
        'show character m normal with Left',
        'm 学长是在答疑哪一门学科？',
        'xz 游戏升级。',
        'm 这门课是培养方案的必修吗？所以刚才是课程作业？这不还是挺卷的？',
        'xz 是培养方案里的呀，但是课程作业不是一向是爱做不做的嘛，反正大家都能拿4.0的。本来有趣的事情如果变得compulsory也会没劲的。',
        '你有点恍惚，这个世界和你之前的世界太不一样了。',
        'hide character xz with RfadeOut',
        'hide character m with LfadeOut',
        '你走出答疑坊，看到门口新开了一桌桌游局，似乎是经典的狼人杀。',
        '坐在边上的同学看到你，热情地招呼你一起来玩。',
        {
            'Choice':{
                'Dialog':'你决定:',
                'join':{
                    'Text':'加入他们，一起玩一下',
                    'Do':'jump A7'
                },
                'leave':{
                    'Text':'不了，离开六教',
                    'Do':'jump B7'
                }
            }
        }
    ],

    'A7':[
        '你有点好奇，于是努力克服内心的恐惧，决定加入他们玩一下试试。',
        'show image Lrs with fadeIn',
        'gallery unlock Lrs',
        'show message GetLrs',
        'hide image Lrs with fadeOut',
        '他们对你的加入非常高兴，挨个自我介绍，知道你不会玩，还特别耐心地和你讲了一遍游戏规则。',
        '但是仍然缺一个人，你和他们一起扫视四周，看看有没有熟悉的人可以加入。',
        {
            'Choice':{
                'Dialog':'你突然看到你在足球场遇到的那个同学，你决定:',
                'invite':{
                    'Text':'尽管考虑到他的情况，犹豫了一下还是招手喊他过来。',
                    'Do':'jump A15'
                },
                'avoid':{
                    'Text':'考虑到他的情况，没有说话，迅速低下头。',
                    'Do':'jump B15'
                }
            }
        }
    ],

    'A8':[
        '你用680pF的学生卡把这本《一本书教你学会AUP》从图书馆借了出来，随便翻了翻。',
        '你又想起还没搭完的电路，你开始觉得是不是因为自己有问题所以电路一直搭不对，于是你请求680pF载你去校医院看下医生。',
        'show background Hospital with fadeIn',
        '走进校医院，你看到了很多人在门诊排队，还有一部分人拿着处方和医生聊着转诊，似乎打算转院到北医六院。',
        'show character m normal with fadeIn',
        'm 这么多人都得了什么病？',
        'show character m normal with MtoL',
        'show character lbl normal with Right',
        'lbl （抬眼看了下）哦，就是摆烂病，放松太久了，难免产生一些心理问题。',
        'm 这么多人不怕聚集产生疫情吗？',
        'lbl 什么疫情？非典不是早就结束了吗？',
        'hide character lbl with RfadeOut',
        'show background HosOffice with fadeIn',
        'show character doc normal with Right',
        '医生拿着仪器，给你做了个检查。你注意到通正向电压时，你不亮了，通反向电压时，你却发光了。',
        'm 我不会是被击穿了吧，我害怕地想。',
        'doc （微笑）没什么大碍，发光正常，就是光有点微弱，能量不太足，回去给自己多充充电，多休息休息就好了。',
        '你哑然，人们总喜欢把正常的事情评价为反常，把反常的事情认为是平常。',
        '不过这是在AD世界，这样发光应该是没有问题的，你想。',
        'show image Ill with fadeIn',
        'gallery unlock Ill',
        'show message GetIll',
        'hide image Ill with fadeOut',
        'hide character m with LfadeOut',
        'hide character doc with RfadeOut',
        'show background Purple with fadeIn',
        '你觉得还是需要休息一下看看发光会不会变得正常，于是680pF载着你回到了宿舍区。',
        '路过紫操，不出你所料看到了操场上乌泱泱的人群。',
        '你定睛一看，看到大家都在操场上爬。似乎还是竞速赛。大家会把最先爬过终点的冠军高高举起，为他真诚地欢呼，大家激动地流泪。',
        'lbl 这是大家唯一的专业必修课，要考试的。',
        '这时身边人突然传来惊呼，你们顺着惊呼声方向看去，发现一个学生正站在宿舍楼楼顶。',
        'pb “这不是咱们系的那个怪胎吗，每天也不摸鱼也不摆烂，整天打代码，都被辅导员约谈多少次了，再不改就要被退学了吧。”“唉，真是个可怜人。”',
        '你听到身边同学七嘴八舌的议论。',
        'show background Roof with fadeIn',
        'show character cd sad with fadeIn',
        '你在楼下看着楼顶的他，意识到这是你刚才在足球场遇到的那个同学。',
        '你下意识张了张嘴，想喊他下来。',
        '680pF注意到了你的异常，“你朋友？你们认识？”',
        {
            'Choice':{
                'Dialog':'你决定:',
                'no':{
                    'Text':'不想承认认识他，会被大家一起排挤的',
                    'Do':'jump A10'
                },
                'yes':{
                    'Text':'点头承认',
                    'Do':'jump B10'
                }
            }
        }
    ],

    'A10':[
        '你摇摇头否认了，其他同学了然地点点头。只有680pF奇怪地看了你一眼。',
        '你抬头看到那个同学站在楼顶，秋天的晚风吹得他整个人发抖起来，像是风中颤颤巍巍，将落未落的枯叶。',
        '果然，无论在哪里，不一样就是会被排斥，会被嫌弃。',
        '消防车不知道什么原因过了很久还没来，通向楼顶的大门被他从楼顶锁上了，其他通向楼顶的小门始终常闭。这时。他缓缓开口:',
        'cd 我想和大家最后分享一下我的故事。',
        'cd 我和你们中大多数人不一样，我没有任何的摸鱼竞赛的经验，是纯靠摸鱼裸分高考来到园子里的。这就决定了我高中甚至初中都必须要为了单纯的摸鱼高考更努力。',
        'cd 最终，我来到了这座园子。我不知道我是不是如愿了。也不知道这个选择是否正确。',
        '他似乎犹豫了，可能是在整理思路，声音有些颤抖。',
        'cd 来到园子里后，我发现大家都很优秀，都在摸鱼的某些领域能够做的很好。只有我，做每件事都做的一般般，不是太好也不是太坏。',
        'cd 我尝试过很多事情，想找到我喜欢的或者我能做好的事情，但是都失败了。有人拿到了特奖，有人拿到了特普通奖。只有我不上不下地挣扎着，不能彻底放弃摸鱼又学不好摸鱼，每天挣扎着活着。',
        'cd 我觉得我已经考上了华清大学，就说明我摸鱼的能力还是可以的。但是可能考上华清大学已经是我人生的巅峰了。',
        'cd 我们这些管子，二极管也好，三极管也好，都是经过摸鱼高考检测机制筛选出来来到这里的。可是有些管子在检测的时候被加了过高的电压，测试当时的结果是正常的，优秀的，但是测试结束后它就已经被烧坏了。',
        'cd 但是大家不知道，或者知道也不愿承认，可能生活就是这样。',
        'cd 我的全部都在我的电脑里，在我的代码里，希望大家能帮我让我能和我的电脑永远在一起。我的电脑就在2单元门口树下的电脑包里。',
        'show image Bag with fadeIn',
        'gallery unlock Bag',
        'show message GetBag',
        'hide image Bag with fadeOut',
        '然后你看见他从楼顶跳下，带起一阵剧烈的风。',
        'hide character cd with fadeOut',
        '其实你有很多次机会可以劝劝他，但是你没敢和他说话，怕和他一样被定义为怪人。',
        'jump e5'
    ],

    'A11':[
        '你不忍心再听下去，拉着680pF转身离开。',
        'show background Library with fadeIn',
        '走出了一段距离，680pF问你:',
        'show character lbl normal with fadeIn',
        'lbl 你害怕了？',
        'show character lbl normal with MtoR',
        'show character m normal with Left',
        'm （错愕）我怕什么？',
        'lbl 怕遇见死亡和别离，怕遇见死亡时看到他人的冷漠和毫不关心。',
        'lbl 怕他的故事里有你，怕下一个故事的主角是你。',
        'hide character lbl with RfadeOut',
        'hide character m with LfadeOut',
        'jump e5'
    ],

    'A12':[
        'stop music',
        'play music BackPart with loop',
        '你把手拢成喇叭状，对着楼顶大喊:',
        'show character cd sad with MtoR',
        'show character m normal with Left',
        'm 你很好啊！你在这个园子里做的很好！你的代码写的也很好！',
        '他低头看到了你，居然笑了一下。',
        'cd 是你啊，谢谢你之前劝我好好做自己。',
        'cd 但是你对我一点都不了解，你们这些人都是站着说话不腰疼，从来没了解过我也没想过了解我，到头来假惺惺地说一些人人都会说的冠冕堂皇的套话来劝我，你们不知道我经历了什么，没法和我感同身受，也不想设身处地考虑一下，那你们有什么立场来劝我？',
        '他越说越激动，脸涨的通红，离得太远你看不到他的表情。',
        '你一时怔住了，不知道该说什么好。他说的对，你的确不了解他，没法好好地劝他。',
        'hide character cd with RfadeOut',
        'hide character m with LfadeOut',
        'jump e4'
    ],

    'A13':[
        'show character cd sad with MtoR',
        'show character m normal with Left',
        'm 你很好啊，我看到了你打的代码，很优雅很简洁，功能实现也很好，也没有任何bug。',
        '话还没说出口，你感觉像是被什么噎住了一样，说不出话，你抹了把脸，把不知道什么时候滚下的泪花擦掉，大声把上面的话喊了出去。',
        '他低头看了你一眼，认出了你。',
        'cd 是你啊，你刚才劝我要好好做自己的。',
        'm （又抹了把脸）是啊，因为你真的很好，所以要坚持做自己，我，还有你朋友，还有好多人都是理解你的，爱你的。',
        'cd 我没有朋友',
        'm 怎么没有啊，我刚刚还在足球场看见你和他一起啊。',
        'cd 那是我自己想象出来的，我一直知道。我只是在骗自己，自己有人陪而已。',
        '你突然怔住了，一个已经明确知道自己得了什么病的人，你不知道应该怎么劝下去了。',
        {
            'Choice':{
                'Dialog':'于是，你决定:',
                'think':{
                    'Text':'继续想想办法',
                    'Do':'jump A14'
                },
                'giveup':{
                    'Text':'感到无能为力，不知道还能说些什么',
                    'Do':'jump B14'
                }
            }
        }
    ],

    'A14':[
        'stop music',
        'play music Middle with loop',
        '你突然想起自己手上还拿着从图书馆借来的AUP秘籍，于是赶紧翻开来希望能够找到一些话能够帮到他。',
        '翻开书的时候，你感到一种强烈的共鸣。书中的句子给你一种很熟悉的感觉，似乎都是原来世界的管子朋友们曾经鼓励过你的话。你决定无论如何一定要帮他。',
        '你突然想到了什么，疯狂地跑到2单元楼下找到他的电脑，桌面上是空白的，只有一个代码文件。',
        '你顾不得思考，点开代码文件，运行起来。',
        '你看到了他的过往，那些美好的过往。代码最后写着：请把这个代码发给我的家人。',
        'm 你没有平庸啊，你很优秀！',
        '你突然大喊。',
        'm 幼儿园的时候，老师要画一支向日葵，你画成了彩色的，你信誓旦旦地和老师说，你以后一定会找到五彩的向日葵。你在大一的时候用代码已经把它实现了。',
        'show image Xrk with fadeIn',
        'show message GetXrk',
        'gallery unlock Xrk',
        'hide image Xrk with fadeOut',
        'm 小学六年级的时候，你被临时叫上台担任晚会主持人，一点都不怯场，圆满地完成了主持任务，大家都夸你以后一定是个优秀的播音员。你在大二的时候创立过一个个人电台，只发过几段配音就放弃了经营。现在已经被网友找到，成为大家的宝藏电台了。',
        'm 中学的时候，你开始学习编程。你说想做一个游戏，做成你想要的样子。你在大二的时候做过一个demo去参赛了，但是只走到了初赛就被淘汰了。现在你的demo被学弟学妹们继承了下来，他们继续写了下去，在结尾用大大的字体署了你的名字，向你表达感谢。',
        '你疯狂地喊完这一串，楼顶的同学呼了一口气，抹了把眼泪，抓着屋檐坐下了。',
        'hide character cd with RfadeOut',
        'show character lbl with Right',
        '680见状，接着喊:',
        'lbl 当然你还有很多事情做不好呀，你体育很差，摸鱼学导论学的也不好，也不会打游戏，不会像其他人一样摸的一手好鱼。',
        'lbl 但是你一点也不平庸，我们只是在各自的领域闪闪发光。没有人说和大家不一样就是错误的，不应该存在的。有满是摸鱼的世界，也就有满是学习的世界。这个世界错就错在太极端了，它不肯那些不极端的、好好地活在两个极端中间的人活下去。',
        'lbl 所以，是世界生病了，不是你。',
        'hide character lbl with RfadeOut',
        'hide character m with LfadeOut',
        'jump e1'
    ],

    'A15':[
        'stop music',
        'play music Middle with loop',
        '他有点惊诧，但还是走了过来。据他自己说是闲来无事，在学校里面四处逛逛。',
        '面对你的邀请，他明显有点犹豫，打量着其他同学的表情。',
        '你知道他应该是害怕被其他同学排挤，于是顺着他的目光也看过去。',
        '其他玩家同学只是互相看了一眼，似乎只是没太想到他也会来玩，并没有表现出嫌恶或者不快的样子，甚至还又热情地和他讲了一遍游戏规则。',
        '你看见他笑了一下，然后认认真真开始听规则，松了口气。',
        '游戏结束之后，你和大家挥手告别，这次游戏大家玩的都很尽兴，包括那个同学。',
        'show background Building with fadeIn',
        '你走出教学楼，正好遇到了680pF，你又惊又喜:',
        'show character m normal with Left',
        'm 这么巧？你怎么也在这儿？',
        'show character lbl normal with Right',
        'lbl 找了一圈没找到你，突然福至心灵觉得你在这儿。',
        '680pF示意你坐上他的电动车，你坐上680pF的后座，接过他递过来的头盔戴好',
        'm 我们去哪儿？',
        'lbl 去图书馆吧，我有本书要还。',
        'hide character m with LfadeOut',
        'hide character lbl with RfadeOut',
        'show background Lib with fadeIn',
        '680pF带你来到了图书馆，你惊讶地发现图书馆一片喧闹，你以为发生了什么事情，走近一看才发现是大家在联机打游戏。',
        '身后突然传来一声尖叫，你吓得猛地抓住了680pF的胳膊，扭头一看原来是有人在练声。回想刚才在六教的经历，你已经能迅速适应了，只是有些震惊:',
        'm 在图书馆这样大声喧哗不会被赶出去吗？',
        'lbl 当然不会啊，图书馆是不允许安静的，你要是在这里安静地摸鱼是会被同学挂到树洞上骂死的。',
        '680pF也似乎习惯了你奇奇怪怪的问题，漫不经心地回答。',
        '哦，这个世界原来还有树洞。你感到很欣慰。',
        'show background Shelf with fadeIn',
        '趁着680pF去还书的间隙，你随便从书架上拿起了一本书：《一本书教你学会AUP》',
        'show image Aup with fadeIn',
        'show message GetAup ',
        'gallery unlock Aup',
        'hide image Aup with fadeOut',
        'show character m normal with Left',
        'm （什么是AUP?）',
        'show character lbl normal with Right',
        'lbl ‘AUP’是指人们不断肯定彼此，夸赞彼此，鼓励彼此成为更好的自己。',
        '680pF不知道什么时候已经回来了，似乎看穿了你的疑惑，如此说道。',
        'm 那你知道什么是PUA吗？',
        '你小心翼翼地试探，生怕污染了这片AUP的净土。',
        'lbl PUA？不存在的。',
        'm 996呢？社畜呢？',
        'lbl 什么和什么啊，你在说什么。',
        'hide character m with LfadeOut',
        'hide character lbl with RfadeOut',
        {
            'Choice':{
                'Dialog':'你看了看手中这本书，你决定:',
                'borrow':{
                    'Text':'借书',
                    'Do':'jump A16'
                },
                'giveback':{
                    'Text':'把书放回去',
                    'Do':'jump B16'
                }
            }
        }
    ],

    'A16':[
        '你用680pF的学生卡把这本《一本书教你学会AUP》从图书馆借了出来，随便翻了翻。',
        '你又想起还没搭完的电路，你开始觉得是不是因为自己有问题所以电路一直搭不对，于是你请求680pF载你去校医院看下医生。',
        'show background Hospital with fadeIn',
        '走进校医院，你看到了很多人在门诊排队，还有一部分人拿着处方和医生聊着转诊，似乎打算转院到北医六院。',
        'show character m normal with fadeIn',
        'm 这么多人都得了什么病？',
        'show character m normal with MtoL',
        'show character lbl normal with Right',
        'lbl （抬眼看了下）哦，就是摆烂病，放松太久了，难免产生一些心理问题。',
        'm 这么多人不怕聚集产生疫情吗？',
        'lbl 什么疫情？非典不是早就结束了吗？',
        'hide character lbl with RfadeOut',
        'show background HosOffice with fadeIn',
        'show character doc normal with Right',
        '医生拿着仪器，给你做了个检查。你注意到通正向电压时，你不亮了，通反向电压时，你却发光了。',
        'm 我不会是被击穿了吧，我害怕地想。',
        'doc （微笑）没什么大碍，发光正常，就是光有点微弱，能量不太足，回去给自己多充充电，多休息休息就好了。',
        '你哑然，人们总喜欢把正常的事情评价为反常，把反常的事情认为是平常。',
        '不过这是在AD世界，这样发光应该是没有问题的，你想。',
        'show image Ill with fadeIn',
        'gallery unlock Ill',
        'show message GetIll',
        'hide image Ill with fadeOut',
        'hide character m with LfadeOut',
        'hide character doc with RfadeOut',
        'show background Purple with fadeIn',
        '你觉得还是需要休息一下看看发光会不会变得正常，于是680pF载着你回到了宿舍区。',
        '路过紫操，不出你所料看到了操场上乌泱泱的人群。',
        '你定睛一看，看到大家都在操场上爬。似乎还是竞速赛。大家会把最先爬过终点的冠军高高举起，为他真诚地欢呼，大家激动地流泪。',
        'lbl 这是大家唯一的专业必修课，要考试的。',
        '这时身边人突然传来惊呼，你们顺着惊呼声方向看去，发现一个学生正站在宿舍楼楼顶。',
        'pb “这不是咱们系的那个怪胎吗，每天也不摸鱼也不摆烂，整天打代码，都被辅导员约谈多少次了，再不改就要被退学了吧。”“唉，真是个可怜人。”',
        '你听到身边同学七嘴八舌的议论。',
        'show background Roof with fadeIn',
        'show character cd sad with fadeIn',
        '你在楼下看着楼顶的他，意识到这是你刚才在足球场遇到的那个同学。',
        '你下意识张了张嘴，想喊他下来。',
        '680pF注意到了你的异常，“你朋友？你们认识？”',
        {
            'Choice':{
                'Dialog':'你决定:',
                'no':{
                    'Text':'不想承认认识他，会被大家一起排挤的',
                    'Do':'jump A17'
                },
                'yes':{
                    'Text':'点头承认',
                    'Do':'jump B17'
                }
            }
        }
    ],

    'A17':[
        '你摇摇头否认了，其他同学了然地点点头。只有680pF奇怪地看了你一眼。',
        '你抬头看到那个同学站在楼顶，秋天的晚风吹得他整个人发抖起来，像是风中颤颤巍巍，将落未落的枯叶。',
        '果然，无论在哪里，不一样就是会被排斥，会被嫌弃。',
        '消防车不知道什么原因过了很久还没来，通向楼顶的大门被他自己从楼顶反锁上了，其他通向楼顶的小门始终常闭。这时，他缓缓开口:',
        'cd 我想和大家最后分享一下我的故事。',
        'cd 我和你们中大多数人不一样，我没有任何的摸鱼竞赛的经验，是纯靠摸鱼裸分高考来到园子里的。这就决定了我高中甚至初中都必须要为了单纯的摸鱼高考更努力。',
        'cd 最终，我来到了这座园子。我不知道我是不是如愿了。也不知道这个选择是否正确。',
        '他似乎犹豫了，可能是在整理思路，声音有些颤抖。',
        'cd 来到园子里后，我发现大家都很优秀，都在摸鱼的某些领域能够做的很好。只有我，做每件事都做的一般般，不是太好也不是太坏。',
        'cd 我尝试过很多事情，想找到我喜欢的或者我能做好的事情，但是都失败了。有人拿到了特奖，有人拿到了特普通奖。只有我不上不下地挣扎着，不能彻底放弃摸鱼又学不好摸鱼，每天挣扎着活着。',
        'cd 我觉得我已经考上了华清大学，就说明我摸鱼的能力还是可以的。但是可能考上华清大学已经是我人生的巅峰了。',
        'cd 我们这些管子，二极管也好，三极管也好，都是经过摸鱼高考检测机制筛选出来来到这里的。可是有些管子在检测的时候被加了过高的电压，测试当时的结果是正常的，优秀的，但是测试结束后它就已经被烧坏了。',
        'cd 但是大家不知道，或者知道也不愿承认，可能生活就是这样。',
        'cd 我的全部都在我的电脑里，在我的代码里，希望大家能帮我让我能和我的电脑永远在一起。我的电脑就在2单元门口树下的电脑包里。',
        'show image Bag with fadeIn',
        'gallery unlock Bag',
        'show message GetBag',
        'hide image Bag with fadeOut',
        '然后你看见他从楼顶跳下，带起一阵剧烈的风。',
        '其实你有很多次机会可以劝劝他，但是你没敢和他说话，怕和他一样被定义为怪人。',
        'hide character cd with fadeOut',
        'jump e5'
    ],

    'A18':[
        '你不忍心再听下去，拉着680pF转身离开。',
        'show background Library with fadeIn',
        '走出了一段距离，680pF问你:',
        'show character lbl normal with fadeIn',
        'lbl 你害怕了？',
        'show character lbl normal with MtoR',
        'show character m normal with Left',
        'm （错愕）我怕什么？',
        'lbl 怕遇见死亡和别离，怕遇见死亡时看到他人的冷漠和毫不关心。',
        'lbl 怕他的故事里有你，怕下一个故事的主角是你。',
        'hide character lbl with RfadeOut',
        'hide character m with LfadeOut',
        'jump e5'
    ],

    'A19':[
        '你把手拢成喇叭状，对着楼顶大喊。',
        'show character cd sad with MtoR',
        'show character m normal with Left',
        'm 你很好啊！你在这个园子里做的很好！你的代码写的也很好！',
        '他低头看了你一眼，认出了你。',
        'cd 是你啊，你刚才劝我要好好做自己的。',
        'm 你的狼人杀玩的也很好，大家都很喜欢和你玩，不是每个人都排挤你，排挤你的人接受不了你的与众不同，那是他们的浅薄，这个世界就应该是包容的！',
        '你身边的同学有做出恍然大悟的表情，似乎是刚刚意识到和他一起玩过狼人杀。你才注意到他们是刚才和你们一起在教学楼玩游戏的那群同学。',
        '于是那群同学开始七嘴八舌地称赞他，这种气氛似乎带动了更多人，越来越多和他有过接触的同学开始细数他的优点，没有接触过他的同学开始懊悔没有更早地和他认识。',
        '你看到他有点微微颤抖。',
        'hide character cd with RfadeOut',
        'hide character m with LfadeOut',
        'jump e6'
    ],

    'A20':[
        'stop music',
        'play music Middle with loop',
        'show character cd sad with MtoR',
        'show character m normal with Left',
        'm 你很好啊，我看到了你打的代码，很优雅很简洁，功能实现也很好，也没有任何bug。',
        '话还没说出口，你感觉像是被什么噎住了一样，说不出话，你抹了把脸，把不知道什么时候滚下的泪花擦掉，大声把上面的话喊了出去。',
        '他低头看了你一眼，认出了你。',
        'cd 是你啊，你刚才劝我要好好做自己的。',
        'm （又抹了把脸）是啊，因为你真的很好，所以要坚持做自己，我，还有你朋友，还有好多人都是理解你的，爱你的。',
        'cd 我没有朋友',
        'm 怎么没有啊，我刚刚还在足球场看见你和他一起啊。',
        'cd 那是我自己想象出来的，我一直知道。我只是在骗自己，自己有人陪而已。',
        '你突然怔住了，一个已经明确知道自己得了什么病的人，你不知道应该怎么劝下去了。',
        'play music Front with loop',
        '你感到无能为力，不知道自己还能说些什么。对方明确知道自己的问题却依然选择这条路，应该是真的没有办法了。',
        '你不是他，你无法替他判断生活够不够精彩，未来会不会有希望，值不值得活下去。',
        '你沉默了，旁边的680pF也沉默地看了你一眼。',
        'hide character m with LfadeOut',
        'show character cd sad with RtoM',
        '你抬头看见楼顶上的他笑了，笑得很脆弱，仿佛随时都能被风吹掉。',
        '人群中开始传来叹息声，你觉得有点可笑，他好好的时候备受排挤，没有人愿意靠近他分给他一点点温暖，现在他站在楼顶上了，这些人又开始假惺惺地表示自己的善良与同情心。',
        '只是因为现在站在楼顶的不是自己，而他们又开始担心下一个又会不会轮到自己。',
        'cd 谢谢你。',
        '你听到楼顶传来的声音，伴随着风声，你听到声音里的真诚与叹息。',
        'cd 其实很早我就被确诊为了玉玉症，但是每次我尝试说出口，都会被人觉得是矫情。大家觉得我只是情绪低落，这在学校里是很常见的、人人都会出现的问题。',
        'cd 后来我就不去讲了，也不去期待会有人来听我讲完，好好地和我聊一聊。',
        'cd 谢谢你今天来到足球场和我聊一聊。',
        '你听见呼啸的警笛声，心里暗暗松了口气。',
        '他站在楼顶失声痛哭起来。',
        'hide character cd with fadeOut',
        'jump e2'
    ],
});
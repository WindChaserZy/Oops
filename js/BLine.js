// All stories of B story line

monogatari.script({

    'B1':[
        '你非常紧张，不知道该称呼对方为同学还是学长还是老师，纠结之后你尴尬地落荒而逃，不顾身后陌生人的呼喊。',
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

    'Bb':[
        '你觉得这本书也就像DA世界里那些乱七八糟的专家说的乱七八糟的毒鸡汤，于是决定把书放回去。',
        'jump e8'
    ],

    'Ba':[
        '你简单地和他聊了两句，劝他坚持做自己喜欢的事情，同时建议他关注下自己的心理健康。你看到680pF才刚刚踢完上半场，于是决定离开球场到处逛一逛。',
        '这时你的眼前又突然浮现一串字符：五月我们对面坐着 犹如梦中',
        '你凭着记忆来到了六教，走进去一看发现六教不是你想象的样子。',
        '教学楼更像是social的酒会，不对，已经不能叫教学楼了。大家在各层之间穿梭，每层有着不同的活动主题。',
        '你来到了二层，发现这里正在进行桌游局。牌桌一张挨着一张，桌边还设有桌游更新接口，只要将游戏本接口插入，便可将游戏更新。',
        '你有点恍惚，不远处你看见有个牌子写着“答疑坊”三个字，你便急切地奔了过去。',
        '进去之后，你发现里面有一群人围着一个学生，正在全神贯注听他讲些什么。',
        '你找了个不引人注目的角落悄悄坐下，想听听答疑坊的学长在讲什么。',
        'xz 我先问下老师在课上有讲这个吗？',
        'xz 居然没讲？怎么这么基础的游戏操作都不讲？？让你们自己摸索吗？',
        'xz 这样的话我就给你们从头讲一下吧。',
        '你听了会儿，不是很能听得懂，只是隐约听到“艾尔登法环”什么的。人群渐渐散去后，你来到学长的身边:',
        'm 学长是在答疑哪一门学科？',
        'xz 游戏升级。',
        'm 这门课是培养方案的必修吗？所以刚才是课程作业？这不还是挺卷的？',
        'xz 是培养方案里的呀，但是课程作业不是一向是爱做不做的嘛，反正大家都能拿4.0的。本来有趣的事情如果变得compulsory也会没劲的。',
        '你有点恍惚，这个世界和你之前的世界太不一样了。',
        '你走出答疑坊，看到门口新开了一桌桌游局，似乎是经典的狼人杀。',
        '坐在边上的同学看到你，热情地招呼你一起来玩。',
        '你觉得非常惶恐，对他们这种在陌生人面前收放自如的性格非常钦佩又十分不理解。于是你再次落荒而逃。',
        '这时你的眼前又突然浮现一串字符：就这样六月到了 六月里青草盛开 处处芬芳',
        'jump e8'
    ],

    'B2':[
        '680pF显得非常兴奋，激动地好像两条长腿已经支撑不了身体一样。他激动地握住你的手。',
        'lbl 太好了，终于有人能念对我的名字了！',
        '你被摇晃的天旋地转，旋转的过程中你看到了主楼，你突然意识到，现在680同志不是应该正在电路板上吗？',
        '堪堪站定，你一边扶额一边好奇地问:',
        'm 那同学你怎么不去电路板上做好本职工作呢？不然会被卷淘汰的。',
        '680pF给了你一个看外星人般的眼神',
        'lbl 为什么要去工作？大家都是这样啊，想干嘛就干嘛，什么快乐就干嘛啊。什么叫卷啊？',
        '你觉得很奇怪，来不及细问，就被兴奋的680pF同学拉走了。',
        'lbl 走走走，我骑电动车载你，今天东操有歌会，我们去看乐队演出！',
        '这时你的眼前又突然浮现一串字符：二月你睡在隔壁',
        '来到东操，你果然看到聚集了一大群人在看乐队表演。虽然才刚刚是傍晚时分，但是大家的热情已经达到了高潮。',
        '乐队主唱抱着电吉他一跃跳下舞台来到观众中央，不断把麦克递给观众让大家接唱，场面迅速达到了另一个高潮。',
        '你感到有些不适应，在原来的世界里你最多听到的只是蜂鸣器的声音，像这样的人群、乐器、印象、尖叫，是你从未感受过的。你有些想躲避，但是看到旁边的680pF正跟着音乐蹦个不停。',
        {
            'Choice':{
                'Dialog':'这时，你:',
                'leave':{
                    'Text':'悄悄离开东操，换一个安静的地方',
                    'Do':'jump A3'
                },
                'stay':{
                    'Text':'继续留在东操，看看之后会有什么表演',
                    'Do':'jump B3'
                }
            }
        }
    ],

    'B3':[
        '你继续和680pF留在了东操，渐渐有些被气氛感染，不自觉地跟着节奏律动。',
        '在歌曲的间隙，你突然想起自己的工作——电路还没搭完。心情不自觉地沉重起来，为自己当前的摸鱼和放纵十分愧疚。',
        '这时你的眼前又突然浮现一串字符：三月下起了大雨',
        '在你分神的时候，歌曲已经切换到了下一首，你也惊讶地发现主唱已经来到了你面前准备把麦克风递到你嘴边',
        {
            'Choice':{
                'Dialog':'这时，你:',
                'sing':{
                    'Text':'硬着头皮接唱',
                    'Do':'jump A4'
                },
                'runaway':{
                    'Text':'落荒而逃',
                    'Do':'jump B4'
                }
            }
        }
    ],

    'B4':[
        '你感觉到很尴尬，在大庭广众之下唱歌让你感到有点难堪，于是你落荒而逃。',
        '你凭着记忆来到了六教，走进去一看发现六教不是你想象的样子。',
        '教学楼更像是social的酒会，不对，已经不能叫教学楼了。大家在各层之间穿梭，每层有着不同的活动主题。',
        '你来到了二层，发现这里正在进行桌游局。牌桌一张挨着一张，桌边还设有桌游更新接口，只要将游戏本接口插入，便可将游戏更新。',
        '你有点恍惚，不远处你看见有个牌子写着“答疑坊”三个字，你便急切地奔了过去。',
        '进去之后，你发现里面有一群人围着一个学生，正在全神贯注听他讲些什么。',
        '你找了个不引人注目的角落悄悄坐下，想听听答疑坊的学长在讲什么。',
        'xz 我先问下老师在课上有讲这个吗？',
        'xz 居然没讲？怎么这么基础的游戏操作都不讲？？让你们自己摸索吗？',
        'xz 这样的话我就给你们从头讲一下吧。',
        '你听了会儿，不是很能听得懂，只是隐约听到“艾尔登法环”什么的。人群渐渐散去后，你来到学长的身边:',
        'm 学长是在答疑哪一门学科？',
        'xz 游戏升级。',
        'm 这门课是培养方案的必修吗？所以刚才是课程作业？这不还是挺卷的？',
        'xz 是培养方案里的呀，但是课程作业不是一向是爱做不做的嘛，反正大家都能拿4.0的。本来有趣的事情如果变得compulsory也会没劲的。',
        '你有点恍惚，这个世界和你之前的世界太不一样了。',
        '你走出答疑坊，看到门口新开了一桌桌游局，似乎是经典的狼人杀。',
        '坐在边上的同学看到你，热情地招呼你一起来玩。',
        '你决定不玩了，还是离开教学楼吧。',
        'jump e8'
    ],

    'B5':[
        '你觉得贸然和陌生人交流太社死了，于是坐在原地没有动。',
        '这时680pF踢完了上半场，跑到你身边，看到这位同学，于是和他攀谈起来。没说几句，680pF就回去踢下半场了。',
        '于是你只好硬着头皮接着和他聊下去。',
        '靠近他的时候，你发现，他好像在打代码。定睛一看，有点像数据结构的大作业，你有一种他乡遇故知的感觉。酝酿了一下措辞，你开口:',
        'm 同学你好，咱们不是都做什么快乐就去做什么吗？你怎么在这儿打代码呀？',
        '同学推了下眼镜，目光依然没有离开电脑。',
        'cd 可是我喜欢这个，尽管因为只学习不摸鱼我受到了排挤，大家都不理解我，我的成绩也不如大家每天摸鱼好。',
        'm （说话条理性一般，这样不太能写得好代码逻辑的，我忍不住想。）',
        'm 那你在这儿是干什么呢？踢足球吗？',
        'cd 不是，我在等我朋友。',
        'm 你看你朋友不是理解你嘛。',
        'cd （点头）是的，只有我朋友最能理解我，最爱我。你看，他过来了。',
        '你抬头顺着他手指的方向看过去，并没有看见人。然而他却已经自顾自和空气交谈起来了。',
        '“今天踢得怎么样啊”“嗯嗯，我看到了踢得好不错。”···',
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

    'B6':[
        '你觉得目前最好的方法是让他先被人群接纳，然后再慢慢接纳自己，于是你劝他先随波逐流，重回人群后再解开心结。',
        '他什么也没说，只是木然地点点头，然后起身和你道别。',
        '680pF不知道什么时候出现在你身后，皱着眉毛，表情略有不快。',
        'm 怎么了吗？',
        'lbl 你不觉得这样不好吗？',
        '你有点愣住了。',
        'lbl 回到人群后，被接纳的是他真正的自己吗？他会不会更痛苦？',
        'lbl 类似的话他是不是已经听过很多次了?',
        '你觉得680说的有道理，但是事已至此，无法挽回。',
        'jump e7'
    ],

    'B7':[
        '你走出六教，正好遇到了680pF，你又惊又喜:',
        'm 这么巧？你怎么也在这儿？',
        'lbl 找了一圈没找到你，突然福至心灵觉得你在这儿。',
        '680pF示意你坐上他的电动车，你坐上680pF的后座，接过他递过来的头盔戴好',
        'm 我们去哪儿？',
        'lbl 去图书馆吧，我有本书要还。',
        '这时你的眼前又突然浮现一串字符：就这样六月到了 六月里青草盛开 处处芬芳',
        '680pF带你来到了图书馆，你惊讶地发现图书馆一片喧闹，你以为发生了什么事情，走近一看才发现是大家在联机打游戏。',
        '身后突然传来一声尖叫，你吓得猛地抓住了680pF的胳膊，扭头一看原来是有人在练声。回想刚才在六教的经历，你已经能迅速适应了，只是有些震惊:',
        'm 在图书馆这样大声喧哗不会被赶出去吗？',
        'lbl 当然不会啊，图书馆是不允许安静的，你要是在这里安静地摸鱼是会被同学挂到树洞上骂死的。',
        '680pF也似乎习惯了你奇奇怪怪的问题，漫不经心地回答。',
        '哦，这个世界原来还有树洞。你感到很欣慰。',
        '趁着680pF去还书的间隙，你随便从书架上拿起了一本书：《一本书教你学会AUP》',
        'm （什么是AUP?）',
        'lbl ‘AUP’是指人们不断肯定彼此，夸赞彼此，鼓励彼此成为更好的自己。',
        '680pF不知道什么时候已经回来了，似乎看穿了你的疑惑，如此说道。',
        'm 那你知道什么是PUA吗？',
        '你小心翼翼地试探，生怕污染了这片AUP的净土。',
        'lbl PUA？不存在的。',
        'm 996呢？社畜呢？',
        'lbl 什么和什么啊，你在说什么。',
        {
            'Choice':{
                'Dialog':'你看了看手中这本书，你决定:',
                'borrow':{
                    'Text':'借书',
                    'Do':'jump A8'
                },
                'giveback':{
                    'Text':'把书放回去',
                    'Do':'jump B8'
                }
            }
        }
    ],

    'B8':[
        '你觉得这本书也就像DA世界里那些乱七八糟的专家说的乱七八糟的毒鸡汤，于是决定把书放回去。',
        '你又想起还没搭完的电路，你开始觉得是不是因为自己有问题所以电路一直搭不对，于是你请求680pF载你去校医院看下医生。',
        '走进校医院，你看到了很多人在门诊排队，还有一部分人拿着处方和医生聊着转诊，似乎打算转院到北医六院。',
        'm 这么多人都得了什么病？',
        'lbl （抬眼看了下）哦，就是摆烂病，放松太久了，难免产生一些心理问题。',
        'm 这么多人不怕聚集产生疫情吗？',
        'lbl 什么疫情？非典不是早就结束了吗？',
        '医生拿着仪器，给你做了个检查。你注意到通正向电压时，你不亮了，通反向电压时，你却发光了。',
        'm 我不会是被击穿了吧，我害怕地想。',
        'doc （微笑）没什么大碍，发光正常，就是光有点微弱，能量不太足，回去给自己多充充电，多休息休息就好了。',
        '你没有和680pF说你的病情，只是潦草地说了下没什么，没理会他关切的眼神。',
        '这时你的眼前又突然浮现一串字符：八月就是八月 八月我守口如瓶 八月里我是瓶中的水 你是青天的云',
        '你觉得还是需要休息一下看看发光会不会变得正常，于是680pF载着你回到了宿舍区。',
        '路过紫操，不出你所料看到了操场上乌泱泱的人群。',
        '你定睛一看，看到大家都在操场上爬。似乎还是竞速赛。大家会把最先爬过终点的冠军高高举起，为他真诚地欢呼，大家激动地流泪。',
        'lbl 这是大家唯一的专业必修课，要考试的。',
        '这时身边人突然传来惊呼，你们顺着惊呼声方向看去，发现一个学生正站在宿舍楼楼顶。',
        'pb “这不是咱们系的那个怪胎吗，每天也不摸鱼也不摆烂，整天打代码，都被辅导员约谈多少次了，再不改就要被退学了吧。”“唉，真是个可怜人。”',
        '你听到身边同学七嘴八舌的议论。你在楼下看着楼顶的他，意识到这是你刚才在足球场遇到的那个同学。',
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

    'B10':[
        '你点头承认，680pF也只是点点头，其他同学听到了也没有太大的反应。',
        '你抬头看到那个同学站在楼顶，秋天的晚风吹得他整个人发抖起来，像是风中颤颤巍巍，将落未落的枯叶。',
        '果然，无论在哪里，不一样就是会被排斥，会被嫌弃。',
        '消防车不知道什么原因过了很久还没来，通向楼顶的大门被他从楼顶锁上了，其他通向楼顶的小门始终常闭。这时，他缓缓开口:',
        'cd 我想和大家最后分享一下我的故事。',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'leave':{
                    'Text':'不忍心听下去，扭头离开',
                    'Do':'jump A11'
                },
                'listen':{
                    'Text':'听下去',
                    'Do':'jump B11'
                }
            }
        }
    ],

    'B11':[
        '你决定听下去，毕竟你还和他短暂地交谈过。',
        'cd 我和你们中大多数人不一样，我没有任何的摸鱼竞赛的经验，是纯靠摸鱼裸分高考来到园子里的。这就决定了我高中甚至初中都必须要为了单纯的摸鱼高考更努力。',
        'cd 最终，我来到了这座园子。我不知道我是不是如愿了。也不知道这个选择是否正确。',
        '他似乎犹豫了，可能是在整理思路，声音有些颤抖。',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'interrupt':{
                    'Text':'决定向他喊话',
                    'Do':'jump A12'
                },
                'listen':{
                    'Text':'决定先听他继续分享',
                    'Do':'jump B12'
                }
            }
        }
    ],

    'B12':[
        '你决定听下去，等他将心中的委屈和苦闷倾诉一些后再做决定。',
        'cd 来到园子里后，我发现大家都很优秀，都在摸鱼的某些领域能够做的很好。只有我，做每件事都做的一般般，不是太好也不是太坏。',
        'cd 我尝试过很多事情，想找到我喜欢的或者我能做好的事情，但是都失败了。有人拿到了特奖，有人拿到了特普通奖。只有我不上不下地挣扎着，不能彻底放弃摸鱼又学不好摸鱼，每天挣扎着活着。',
        'cd 我觉得我已经考上了华清大学，就说明我摸鱼的能力还是可以的。但是可能考上华清大学已经是我人生的巅峰了。',
        'cd 我们这些管子，二极管也好，三极管也好，都是经过摸鱼高考检测机制筛选出来来到这里的。可是有些管子在检测的时候被加了过高的电压，测试当时的结果是正常的，优秀的，但是测试结束后它就已经被烧坏了。',
        'cd 但是大家不知道，或者知道也不愿承认，可能生活就是这样。',
        'cd 我的全部都在我的电脑里，在我的代码里，希望大家能帮我让我能和我的电脑永远在一起。我的电脑就在2单元门口树下的电脑包里。',
        '这时你的眼前又突然浮现一串字符：九月和十月 是两只眼睛 装满了大海 你在海上 我在海下',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'interrupt':{
                    'Text':'向他喊话',
                    'Do':'jump A13'
                },
                'listen':{
                    'Text':'再听一会儿',
                    'Do':'jump B13'
                }
            }
        }
    ],

    'B13':[
        '你决定再听一会儿，你现在茫然没有头绪，不知道该怎么劝他。',
        '然后你看见他从楼顶跳下，带起一阵剧烈的风。',
        'jump e3'
    ],

    'B14':[
        '你感到无能为力，不知道自己还能说些什么。对方明确知道自己的问题却依然选择这条路，应该是真的没有办法了。',
        '你不是他，你无法替他判断生活够不够精彩，未来会不会有希望，值不值得活下去。',
        '你沉默了，旁边的680pF也沉默地看了你一眼。',
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
        'jump e2'
    ],

    'B15':[
        '你考虑到他的情况，怕他被排挤，也怕自己被拒绝，决定不喊他过来。为了不被他注意到，你迅速低下头。',
        '结果过了好一会儿也没有凑够人，这场游戏局不得不结束。',
        'jump B7'
    ],

    'B16':[
        '你觉得这本书也就像DA世界里那些乱七八糟的专家说的乱七八糟的毒鸡汤，于是决定把书放回去。',
        '你又想起还没搭完的电路，你开始觉得是不是因为自己有问题所以电路一直搭不对，于是你请求680pF载你去校医院看下医生。',
        '走进校医院，你看到了很多人在门诊排队，还有一部分人拿着处方和医生聊着转诊，似乎打算转院到北医六院。',
        'm 这么多人都得了什么病？',
        'lbl （抬眼看了下）哦，就是摆烂病，放松太久了，难免产生一些心理问题。',
        'm 这么多人不怕聚集产生疫情吗？',
        'lbl 什么疫情？非典不是早就结束了吗？',
        '医生拿着仪器，给你做了个检查。你注意到通正向电压时，你不亮了，通反向电压时，你却发光了。',
        'm 我不会是被击穿了吧，我害怕地想。',
        'doc （微笑）没什么大碍，发光正常，就是光有点微弱，能量不太足，回去给自己多充充电，多休息休息就好了。',
        '你没有和680pF说你的病情，只是潦草地说了下没什么，没理会他关切的眼神。',
        '这时你的眼前又突然浮现一串字符：八月就是八月 八月我守口如瓶 八月里我是瓶中的水 你是青天的云',
        '你觉得还是需要休息一下看看发光会不会变得正常，于是680pF载着你回到了宿舍区。',
        '路过紫操，不出你所料看到了操场上乌泱泱的人群。',
        '你定睛一看，看到大家都在操场上爬。似乎还是竞速赛。大家会把最先爬过终点的冠军高高举起，为他真诚地欢呼，大家激动地流泪。',
        'lbl 这是大家唯一的专业必修课，要考试的。',
        '这时身边人突然传来惊呼，你们顺着惊呼声方向看去，发现一个学生正站在宿舍楼楼顶。',
        'pb “这不是咱们系的那个怪胎吗，每天也不摸鱼也不摆烂，整天打代码，都被辅导员约谈多少次了，再不改就要被退学了吧。”“唉，真是个可怜人。”',
        '你听到身边同学七嘴八舌的议论。你在楼下看着楼顶的他，意识到这是你刚才在足球场遇到的那个同学。',
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

    'B17':[
        '你点头承认，680pF也只是点点头，其他同学听到了也没有太大的反应。',
        '你抬头看到那个同学站在楼顶，秋天的晚风吹得他整个人发抖起来，像是风中颤颤巍巍，将落未落的枯叶。',
        '果然，无论在哪里，不一样就是会被排斥，会被嫌弃。',
        '消防车不知道什么原因过了很久还没来，通向楼顶的大门被他从楼顶锁上了，其他通向楼顶的小门始终常闭。这时，他缓缓开口:',
        'cd 我想和大家最后分享一下我的故事。',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'leave':{
                    'Text':'不忍心听下去，扭头离开',
                    'Do':'jump A18'
                },
                'listen':{
                    'Text':'听下去',
                    'Do':'jump B18'
                }
            }
        }
    ],

    'B18':[
        '你决定听下去，毕竟你还和他短暂地交谈过。',
        'cd 我和你们中大多数人不一样，我没有任何的摸鱼竞赛的经验，是纯靠摸鱼裸分高考来到园子里的。这就决定了我高中甚至初中都必须要为了单纯的摸鱼高考更努力。',
        'cd 最终，我来到了这座园子。我不知道我是不是如愿了。也不知道这个选择是否正确。',
        '他似乎犹豫了，可能是在整理思路，声音有些颤抖。',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'interrupt':{
                    'Text':'决定向他喊话',
                    'Do':'jump A19'
                },
                'listen':{
                    'Text':'决定先听他继续分享',
                    'Do':'jump B19'
                }
            }
        }
    ],

    'B19':[
        '你决定听下去，等他将心中的委屈和苦闷倾诉一些后再做决定。',
        'cd 来到园子里后，我发现大家都很优秀，都在摸鱼的某些领域能够做的很好。只有我，做每件事都做的一般般，不是太好也不是太坏。',
        'cd 我尝试过很多事情，想找到我喜欢的或者我能做好的事情，但是都失败了。有人拿到了特奖，有人拿到了特普通奖。只有我不上不下地挣扎着，不能彻底放弃摸鱼又学不好摸鱼，每天挣扎着活着。',
        'cd 我觉得我已经考上了华清大学，就说明我摸鱼的能力还是可以的。但是可能考上华清大学已经是我人生的巅峰了。',
        'cd 我们这些管子，二极管也好，三极管也好，都是经过摸鱼高考检测机制筛选出来来到这里的。可是有些管子在检测的时候被加了过高的电压，测试当时的结果是正常的，优秀的，但是测试结束后它就已经被烧坏了。',
        'cd 但是大家不知道，或者知道也不愿承认，可能生活就是这样。',
        'cd 我的全部都在我的电脑里，在我的代码里，希望大家能帮我让我能和我的电脑永远在一起。我的电脑就在2单元门口树下的电脑包里。',
        '这时你的眼前又突然浮现一串字符：九月和十月 是两只眼睛 装满了大海 你在海上 我在海下',
        {
            'Choice':{
                'Dialog':'这时，你决定:',
                'interrupt':{
                    'Text':'向他喊话',
                    'Do':'jump A20'
                },
                'listen':{
                    'Text':'再听一会儿',
                    'Do':'jump B20'
                }
            }
        }
    ],

    'B20':[
        '你决定再听一会儿，你现在茫然没有头绪，不知道该怎么劝他。',
        '然后你看见他从楼顶跳下，带起一阵剧烈的风。',
        'jump e3'
    ],   
});
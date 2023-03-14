/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'FirstMail':{
		body:`
		<p>你要写这个世界</p>
		<p>就不能只写春日里雨后泥土里好闻的香味和刚刚萌芽的爱恋</p>
		<p>不能只写夏日里的爽口的橘子汽水和在期刊酝酿的paper</p>
		<p>不能只写秋日里热乎乎的板栗和在风中摇曳的落叶</p>
		<p>不能只写冬日里的十二月大雪弥漫和滚烫的烧酒和理想</p>
		<p>还要写南极的北极熊和白天蓝云</p>
		<p>要写落到天上砸不到牛顿的苹果</p>
		<p>要写随时随地无需任何条件就发生干涉的自然光</p>
		<p>要写随手可得的星星和月亮</p>
		<p>要写每天都快快乐乐感到充实的园子里的你我</p>
		`
	},
	'Information':{
		title:'系统提示',
		body:`
		<p>您已进入AD世界</p>
		`
	},
	'End':{
		title:'The End',
		body:`
		<p>游戏结束，您回到了真实世界。</p>
		`
	},
	'GetIll':{
		title:'系统提示',
		body:`
		<p>你解锁了一本病历。</p>
		`
	},
	'GetCircuit':{
		title:'系统提示',
		body:`
		<p>你解锁了一块面包板。</p>
		`
	},
	'GetMicro':{
		title:'系统提示',
		body:`
		<p>你解锁了一个麦克风。</p>
		`
	},
	'GetDiode':{
		title:'系统提示',
		body:`
		<p>你解锁了发光的二极管</p>
		`
	},
	'GetBag':{
		title:'系统提示',
		body:`
		<p>你解锁了同学的电脑包</p>
		`
	},
	'GetLrs':{
		title:'系统提示',
		body:`
		<p>你解锁了一盒狼人杀</p>
		`
	},
	'GetAup':{
		title:'系统提示',
		body:`
		<p>你解锁了《一本书教你学会AUP》。</p>
		`
	},
	'GetXrk':{
		title:'系统提示',
		body:`
		<p>你解锁了一朵彩色的向日葵。</p>
		`
	},

});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {
	'Aup':'AUP.png',
	'Micro':'Microphone.png',
	'Bag':'bag.png',
	'Circuit':'circuit.png',
	'Dio':'dio.png',
	'Ill':'ill.png',
	'Lrs':'lrs.png',
	'Xrk':'xrk.png',
});

// Define the music used in the game.
monogatari.assets ('music', {
	'Front':'Front.mp3',
	'Middle':'Middle.mp3',
	'BackPart':'Back.mp3',
	'Evening':'Evening.mp3',
	'Cure':'Cure.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	'Aup':'AUP.png',
	'Micro':'Microphone.png',
	'Bag':'bag.png',
	'Circuit':'circuit.png',
	'Dio':'dio.png',
	'Ill':'ill.png',
	'Lrs':'lrs.png',
	'Xrk':'xrk.png',
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'Poem':'2.png',
	'snow':'1.jpg',
	'tree':'2.jpeg',
	'school':'3.jpg',
	'chair':'Chair.jpg',
	'main':'Main.jpg',
	'Library':'Library.jpg',
	'Lib':'Lib.jpg',
	'Shelf':'Shelf.jpg',
	'Hospital':'Hospital.jpg',
	'HosOffice':'HosOffice.jpg',
	'BuInside':'BuInside.jpg',
	'EPlayground':'EPlayground.jpg',
	'Football':'Football.jpg',
	'Building':'Building.jpg',
	'Purple':'Purple.jpg',
	'Roof':'Roof.jpg',
	'Palace':'Palace.jpg'
});


// Define the Characters
monogatari.characters ({
	'm': {
		name: '我',
		color: '#5bcaff',
		sprites:{
			normal:'diode.png'
		}
	},
	'system':{
		name: '未知的声音',
		color: '#5bcaff'
	},
	'u':{
		name:'不知名的同学',
		color:'#5bcaff'
	},
	'lbl':{
		name:'680pF',
		color:'#5bcaff',
		sprites:{
			normal:'681.png'
		}
	},
	'cd':{
		name:'写代码的同学',
		color:'#5bcaff',
		sprites:{
			normal:'coder.png',
			sad:'coder1.png'
		}
	},
	'pb':{
        name:'路过的同学',
        color:'#5bcaff'
    },
    'doc':{
        name:'医生',
        color:'#5bcaff',
		sprites:{
			normal:'Doctor.png'
		}
    },
	'xz':{
		name:'学长',
		color:'#5bcaff',
		sprites:{
			normal:'xz.png'
		}
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show background Poem with fadeIn',
		'play music Evening with loop',
		'nvl “你要写这个世界',
		'nvl 就不能只写春日里雨后泥土里好闻的香味和刚刚萌芽的爱恋',
		'nvl 不能只写夏日里的爽口的橘子汽水和在期刊酝酿的paper',
		'nvl 不能只写秋日里热乎乎的板栗和在风中摇曳的落叶',
		'nvl 不能只写冬日里的十二月大雪弥漫和滚烫的烧酒和理想',
		'nvl 还要写南极的北极熊和白天蓝云',
		'nvl 要写落到天上砸不到牛顿的苹果',
		'nvl 要写随时随地无需任何条件就发生干涉的自然光',
		'nvl 要写随手可得的星星和月亮',
		'nvl 要写每天都快快乐乐感到充实的园子里的你我”',
		'jump beginning'
	],

	'beginning':[
		'show background main with fadeIn',
		'm （睁眼）',
		'm 这是哪儿？我不是在睡觉吗？',
		'show message Information',
		'm AD世界...？我不是在板子上工作吗？',
		'm 我记得有个很赶的ddl···不眠不休地肝了几个通宵，一会正向导通一会儿反向截止，一会儿被人拔出来一会儿被人插到板子上，累的腿都快断了。还剩一点电路就搭完了，但是实在太困了就睡着了，怎么一觉醒来就到这里来了？',
		'（挣扎着爬起身）这里的天是白色的···云是蓝色的。好奇怪啊',
		'（前方有个身影奔跑着出现了）',
		'show character lbl normal with fadeIn',
		'u 你没事吧？',
		'show background chair with fadeIn',
		'm （好像是一个腿很长、个子很高的同学。我有点犹豫，作为一只重度社恐二极管，我不知道怎么回应来自陌生人的好意，但是这是在AD世界···）',
		{
			'Choice':{
				'reply':{
					'Text':'你酝酿了一下措辞：“同学你好，我没事，谢谢你的关心',
					'Do':'jump A1'
				},
				'runaway':{
					'Text':'你非常紧张，不知道该称呼对方为同学还是学长还是老师，纠结之后你尴尬地落荒而逃',
					'Do':'jump B1'
				}
			}
		}
	]
	

});
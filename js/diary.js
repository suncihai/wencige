$(document).ready(function () {
  var step = 0;

  var content = [{
      "content": "今天约好了和娇娇去某个drive through的动物园玩",
      "image": "assets/images/diary/pic1.JPG",
      "actor": "",
    },
    {
      "content": "之前和娇娇逛自然博物馆时，娇娇就说过很喜欢动物",
      "image": "assets/images/diary/pic1.JPG",
      "actor": ""
    },
    {
      "content": "所以这次我就规划了这次动物园之行",
      "image": "assets/images/diary/pic1.JPG",
      "actor": ""
    },
    {
      "content": "可能，在动物面前，娇娇才能放飞自我吧=。=",
      "image": "assets/images/diary/pic1.JPG",
      "actor": ""
    },
    {
      "content": "在动森里玩的娇娇也是，看到喜欢的小动物都会扑上去。",
      "image": "assets/images/diary/pic1.JPG",
      "actor": ""
    },
    {
      "content": "路上虽然有点堵，不过唠唠嗑时间过得很快，还是到了",
      "image": "assets/images/diary/pic2.JPG",
      "actor": ""
    },
    {
      "content": "【到啦～】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/cihai_1.png",
    },
    {
      "content": "【哇，到啦到啦~~】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
    },
    {
      "content": "【看把你高兴的，这都还没看到动物呢】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/cihai_1.png"
    },
    {
      "content": "【一想到能看到真实的吴紫眉我就超兴奋啊啊啊啊~】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/wenhui_1.png"
    },
    {
      "content": "【我查一下手机📱哈】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/cihai_3.png"
    },
    {
      "content": "【没查到，不过还是进去看看吧，说不定能碰到呢】",
      "image": "assets/images/diary/pic2.JPG",
      "actor": "assets/images/diary/cihai_3.png"
    },
    {
      "content": "于是我们缓缓地往园区里面开了进去",
      "image": "assets/images/diary/pic2.JPG",
      "actor": ""
    },
    {
      "content": "刚进了大门，好多长颈鹿🦒就映入了眼帘。",
      "image": "assets/images/diary/pic3.JPG",
      "actor": ""
    },
    {
      "content": "难道还是因为疫情关系，来投喂的游客少所以，所以看到一辆车就来堵吗。。",
      "image": "assets/images/diary/pic3.JPG",
      "actor": ""
    },
    {
      "content": "后面又来了一波长颈鹿，个个都眼巴巴地看着你",
      "image": "assets/images/diary/pic4.JPG",
      "actor": ""
    },
    {
      "content": "【好想送它们礼物🎁啊！】",
      "image": "assets/images/diary/pic4.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【你当成动森啦】",
      "image": "assets/images/diary/pic4.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【我想增加它们的好感度嘛，不可以啊？】",
      "image": "assets/images/diary/pic4.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "看着娇娇炽热的眼神，我下午去不远处的公园管理车那儿买了点胡萝卜🥕",
      "image": "assets/images/diary/pic5.JPG",
      "actor": ""
    },
    {
      "content": "【你看嘛，长颈鹿🦒都围过来了诺，它们最爱吃胡萝卜🥕了！】",
      "image": "assets/images/diary/pic5.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "【可能，它们不是冲着胡萝卜🥕来的，而是冲着好看的娇娇来的😊】",
      "image": "assets/images/diary/pic5.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "娇娇听到后害羞地打了我一下。",
      "image": "assets/images/diary/pic5.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "我注意到就在一旁的一只鸵鸟看着我们",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "【我以前学过鸟语的，你知道鸵鸟在说啥嘛？】",
      "image": "assets/images/diary/pic6.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【它在说：“我从来没见过这么厚脸皮的人”】",
      "image": "assets/images/diary/pic6.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【哪有，它是在说：“你旁边的妹子真好看”】",
      "image": "assets/images/diary/pic6.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "鸵鸟好像很通人性，配合着我的解释，拍打着翅膀，咕咕咕叫了好几声",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "看到它这么给我面子，俗话说：投之以桃，报之以李。我给它扔了根玉米🌽",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "没想到，鸵鸟张口说话了：“那个，只拿你礼物🎁也是不好的，这487块铃钱💰你拿去吧”",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "我惊呆了，难道我真的会鸟语了？😱",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "【娇娇！你刚才听到鸵鸟说话了嘛？？？】",
      "image": "assets/images/diary/pic6.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【没啊，它就咕咕叫了几声啊】",
      "image": "assets/images/diary/pic6.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "哎？我真的会鸟语了吗？",
      "image": "assets/images/diary/pic6.JPG",
      "actor": ""
    },
    {
      "content": "再往前一点，我们看到了一群大象🐘",
      "image": "assets/images/diary/pic7.JPG",
      "actor": ""
    },
    {
      "content": "可能是太热了，大象们都不怎么动，吹口哨也没啥反应",
      "image": "assets/images/diary/pic7.JPG",
      "actor": ""
    },
    {
      "content": "来到了一片小池塘",
      "image": "assets/images/diary/pic8.JPG",
      "actor": ""
    },
    {
      "content": "好多麋鹿🦌在池塘里洗澡🛀",
      "image": "assets/images/diary/pic8.JPG",
      "actor": ""
    },
    {
      "content": "【娇娇你觉得鹿🦌一天要洗几次澡🛀啊？】",
      "image": "assets/images/diary/pic8.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【三次吧】",
      "image": "assets/images/diary/pic8.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【为啥啊？】没想到我随口乱问的，娇娇不假思索地回答了",
      "image": "assets/images/diary/pic8.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【因为我只知道三鹿啊】",
      "image": "assets/images/diary/pic8.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "这个理由我无法反驳😂",
      "image": "assets/images/diary/pic8.JPG",
      "actor": ""
    },
    {
      "content": "在树林的深处，看到了一头会吐舌头的熊🐻",
      "image": "assets/images/diary/pic9.JPG",
      "actor": ""
    },
    {
      "content": "在给它拍照的时候，它居然还主动朝相机做了个鬼脸😜",
      "image": "assets/images/diary/pic9.JPG",
      "actor": ""
    },
    {
      "content": "现在的动物们真的是越来越聪明了，都快成精了",
      "image": "assets/images/diary/pic9.JPG",
      "actor": ""
    },
    {
      "content": "经过山羊🐐领地的时候，娇娇吵着要摸摸山羊",
      "image": "assets/images/diary/pic10.JPG",
      "actor": ""
    },
    {
      "content": "本来想找找看有没有羊驼🦙的，娇娇最爱羊驼了，以前说想养一只羊驼来着",
      "image": "assets/images/diary/pic10.JPG",
      "actor": ""
    },
    {
      "content": "没找到羊驼，就只能委屈山羊冒充一下了，于是留下了这张照片",
      "image": "assets/images/diary/pic10.JPG",
      "actor": ""
    },
    {
      "content": "和山羊大哥告别后，差不多也到了吃午饭的时间",
      "image": "assets/images/diary/pic11.JPG",
      "actor": ""
    },
    {
      "content": "动物园里可以吃的店不多，所以我们就去了Domino披萨🍕。",
      "image": "assets/images/diary/pic11.JPG",
      "actor": ""
    },
    {
      "content": "我让娇娇先去找位子，我去点了几张披萨🍕。",
      "image": "assets/images/diary/pic11.JPG",
      "actor": ""
    },
    {
      "content": "顺便点了一张巧克力松饼",
      "image": "assets/images/diary/pic11.JPG",
      "actor": ""
    },
    {
      "content": "【哇，巧克力松饼哎，我最爱吃了！】",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "【那我们互喂吃吧】",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "【你好讨厌！】",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "【打是亲，骂--是爱！】",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "我故意把“骂”字拖得老长老长",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "然后等待我的是，如同娇娇一直发的“打你”表情包里挥向可爱小猪头的雨点般似的拳头👊",
      "image": "assets/images/diary/pic12.JPG",
      "actor": ""
    },
    {
      "content": "吃完后，接着我们又去了不少其他动物园区",
      "image": "assets/images/diary/pic13.JPG",
      "actor": ""
    },
    {
      "content": "比如火烈鸟🦩挺好看的",
      "image": "assets/images/diary/pic13.JPG",
      "actor": ""
    },
    {
      "content": "【你动森里的雌雄火烈鸟像凑齐了吗？】",
      "image": "assets/images/diary/pic13.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "【你又没送我咯，我哪凑得齐勒】",
      "image": "assets/images/diary/pic13.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "【我记得送过你的啊😳】",
      "image": "assets/images/diary/pic13.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "【那你回去再邮寄新的给我😊】",
      "image": "assets/images/diary/pic13.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-180"
    },
    {
      "content": "一旁，我们看到了老虎🐯",
      "image": "assets/images/diary/pic14.JPG",
      "actor": ""
    },
    {
      "content": "【啊啊啊啊啊啊！小虎！！！】",
      "image": "assets/images/diary/pic14.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-200"
    },
    {
      "content": "娇娇现在看到老虎就会把它当作小虎",
      "image": "assets/images/diary/pic14.JPG",
      "actor": ""
    },
    {
      "content": "虽然小虎其实是一只猫，但在娇娇心中的位置还是挺高的",
      "image": "assets/images/diary/pic14.JPG",
      "actor": ""
    },
    {
      "content": "到了休息区，我看到一条狗🐶正看着我",
      "image": "assets/images/diary/pic15.JPG",
      "actor": ""
    },
    {
      "content": "狗居然说话了：【伙计，你要我帮你忙吗？】",
      "image": "assets/images/diary/pic15.JPG",
      "actor": ""
    },
    {
      "content": "刚才鸵鸟的事情已经让我震惊了，现在狗又说话了，我不可思议地张打了嘴巴。",
      "image": "assets/images/diary/pic15.JPG",
      "actor": ""
    },
    {
      "content": "狗又说：【我和你妹子说几句好话，你给我买个肉包子，deal？】",
      "image": "assets/images/diary/pic15.JPG",
      "actor": ""
    },
    {
      "content": "虽然我还没摸清狗为啥也会说话的情况，但这个交易对我不坏，哈哈哈。我二话不说就去买了个肉包子给了狗吃",
      "image": "assets/images/diary/pic15.JPG",
      "actor": ""
    },
    {
      "content": "后来，狗实现了它的诺言",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "俗话说，拿人的手短，吃人的嘴软",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "狗作为动物里忠良诚信的代表，我一向很喜欢，这也是为啥我给它买肉包子",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "狗对娇娇说了一些悄悄话",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "本来我也不抱期望的，娇娇不一定能听得懂，但娇娇居然脸一红，害羞😳了，听完就溜溜溜跑开了",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "难道我遇到狗仙了？那种专门变成狗其实是仙人的？",
      "image": "assets/images/diary/pic16.JPG",
      "actor": ""
    },
    {
      "content": "告别了“狗仙”，我们来到了休息区，我想上个洗手间🚻，然后让娇娇等我一下",
      "image": "assets/images/diary/pic17.JPG",
      "actor": ""
    },
    {
      "content": "娇娇就跑到旁边的草坪上去和脾气好的鹿🦌啊羊🐑啊去玩了",
      "image": "assets/images/diary/pic17.JPG",
      "actor": ""
    },
    {
      "content": "在我上洗手间的时候，突然不知道哪儿窜出来一条恶狗！",
      "image": "assets/images/diary/pic18.JPG",
      "actor": ""
    },
    {
      "content": "恶狗不知道是着了什么魔，飞快地向娇娇跑去！",
      "image": "assets/images/diary/pic18.JPG",
      "actor": ""
    },
    {
      "content": "娇娇傻眼了，呆站在原地",
      "image": "assets/images/diary/pic18.JPG",
      "actor": ""
    },
    {
      "content": "说时迟，那时快，我在兜里随手一抓，居然抽出了打狗棒😳",
      "image": "assets/images/diary/pic19.JPG",
      "actor": ""
    },
    {
      "content": "感觉天助我也，我立马提着打狗棒向恶狗冲过去",
      "image": "assets/images/diary/pic19.JPG",
      "actor": ""
    },
    {
      "content": "果然应证了那句话：工欲善其事，必先利其器",
      "image": "assets/images/diary/pic20.JPG",
      "actor": ""
    },
    {
      "content": "恶狗惨叫一声，飞向了天空，变成了一颗星星",
      "image": "assets/images/diary/pic20.JPG",
      "actor": ""
    },
    {
      "content": "【没事啦，恶狗打飞了】",
      "image": "assets/images/diary/pic20.JPG",
      "actor": "assets/images/diary/cihai_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "【呜哇啊哇，吓死了啊】",
      "image": "assets/images/diary/pic20.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-250"
    },
    {
      "content": "娇娇扑到了我的怀里，显然是受了不小的惊吓",
      "image": "assets/images/diary/pic20.JPG",
      "actor": ""
    },
    {
      "content": "为了减轻娇娇的惊吓，解铃还须系铃人，我们去了可爱狗狗的区域，找了条温顺的狗狗，陪娇娇玩了会儿",
      "image": "assets/images/diary/pic21.JPG",
      "actor": ""
    },
    {
      "content": "温顺的狗还是挺治愈的，笑容又浮现在了娇娇脸上",
      "image": "assets/images/diary/pic21.JPG",
      "actor": ""
    },
    {
      "content": "差不多逛完了，也接近了日落时分🌄",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "不知不觉来到了海边",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "这可能是今年看到的第一个完整的夕阳吧",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "我看看一旁的娇娇，人美如画",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "江山如此多“娇”，引无数英雄竟折腰",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "我在兜里摸了摸，居然摸到了玫瑰🌹",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "【娇娇啊】",
      "image": "assets/images/diary/pic22.JPG",
      "actor": "assets/images/diary/cihai_2.png",
      "actor-height": "h-220"
    },
    {
      "content": "【嗯？啊，你哪儿来的玫瑰🌹啊，还叼着】",
      "image": "assets/images/diary/pic22.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-220"
    },
    {
      "content": "看到我叼着玫瑰花，娇娇脸又羞红了，比夕阳🌇还要红",
      "image": "assets/images/diary/pic22.JPG",
      "actor": "assets/images/diary/cihai_2.png",
      "actor-height": "h-220"
    },
    {
      "content": "【这么好的氛围，我们比个心吧】",
      "image": "assets/images/diary/pic22.JPG",
      "actor": "assets/images/diary/cihai_2.png",
      "actor-height": "h-220"
    },
    {
      "content": "【噢😯】",
      "image": "assets/images/diary/pic22.JPG",
      "actor": "assets/images/diary/wenhui_1.png",
      "actor-height": "h-220"
    },
    {
      "content": "娇娇害羞😳地蚊子叫似地噢了一声",
      "image": "assets/images/diary/pic22.JPG",
      "actor": ""
    },
    {
      "content": "走向了海边，我们手牵着手",
      "image": "assets/images/diary/pic23.JPG",
      "actor": ""
    },
    {
      "content": "比了大大的一个爱心💗",
      "image": "assets/images/diary/pic23.JPG",
      "actor": ""
    },
    {
      "content": "【娇娇，我。。。】",
      "image": "assets/images/diary/pic23.JPG",
      "actor": "assets/images/diary/cihai_2.png",
      "actor-height": "h-220"
    },
    {
      "content": "【那个。。。】",
      "image": "assets/images/diary/pic24.JPG",
      "actor": "assets/images/diary/cihai_2.png",
      "actor-height": "h-220"
    },
    {
      "content": "滴滴滴滴",
      "image": "assets/images/diary/pic25.JPG",
      "actor": ""
    },
    {
      "content": "闹钟声把我吵醒了",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
    {
      "content": "原来我睡着了，刚才是梦吗。。。",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
    {
      "content": "难怪我能听懂鸵鸟的话，还能和狗说话，还有打狗棒",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
    {
      "content": "看着消息，原来我是做梦做到娇娇的梦里去了啊，所以遇到恶狗了呢",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
    {
      "content": "哈哈，还是挺回味的一个梦呢，就是最后那段我想说啥来着？",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
    {
      "content": "可能是一个留白吧",
      "image": "assets/images/diary/pic26.JPG",
      "actor": ""
    },
  ];

  $("#next-step").click(function () {
    step += 1;
    if (step < content.length) {
      loadcontent(step);
    }
  });

  $("#previous-step").click(function () {
    step -= 1;
    if (step >= 0) {
      loadcontent(step);
    }
  });

  var titanic = document.getElementById('titanic');
  var iphone_alarm = document.getElementById('iphone_alarm')


  function loadcontent(currentstep) {
    if (content[currentstep]["actor"] === "") {
      $("#person_image").hide();
    } else {
      $("#person_image").show();
    }
    if ((content[currentstep]["image"] == "assets/images/diary/pic22.JPG")) {
      titanic.play();
    }
    if ((content[currentstep]["image"] == "assets/images/diary/pic25.JPG")) {
      titanic.pause();
      iphone_alarm.play();
    }
    if (step == (content.length - 1)) {
      iphone_alarm.pause();
      titanic.load();
      titanic.play();
    }
    $("#detail_text").fadeOut(500, function () {
      $("#detail_text").html(content[currentstep]["content"]);
      $("#person_image").removeClass();
      $(".example-image").prop("src", content[currentstep]["image"]);
      $(".example-image-link").prop("href", content[currentstep]["image"]);

      if (step == (content.length - 1)) {
        $("#board_inner").css("opacity", 0);
        setTimeout(function () {
          var uagent = navigator.userAgent.toLowerCase();

          if (uagent.search("iphone") > -1 || uagent.search("android") > -1 || uagent.search("blackberry") > -1 ||
            uagent.search("webos") > -1) {
            $("#board").append($('<div id="wording" style="position:absolute;width:80%;font-size:20px;font-weight:bold;left:50%;top:10%;transform:translateX(-50%);translateY(-90%);"></div>'));
          } else {
            $("#board").append($('<div id="wording" style="position:absolute;width:80%;font-size:24px;font-weight:bold;left:50%;top:30%;transform:translateX(-50%);translateY(-70%);"></div>'));
          }
          var theater = new TheaterJS();
          theater.describe("wording", 0.5, "#wording");
          theater
            .write("wording:" + "谢谢娇娇耐心地看到这里呢，花了不少时间写剧本，结合之前娇娇提到的梦境，便完成了这次精彩的“虚拟约会”。我说精彩不过分吧？哈哈哈。娇娇喜欢就好了。<br><br>怎么说呢，内心有点无奈，毕竟疫情这么严重。坐飞机是肯定不可能的。所以之前就想着趁还能work from home的时候开车来找娇娇。现在是也在考虑这个办法，因为美国的疫情控制不住已成定局，如果等到美国疫情控制住，至少不会是现在，而是很遥远的未来，然而生活还得继续。暂停键不能一直摁着，毛毛的年纪也大了，压力也是很大的呢。所以，娇娇再一起想想看？之后的事情也不会容易的呢，要一起努力克服才行的呢。<br><br>毛毛亲笔")
            .write(function () {
              theater.play();
            });
        }, 10000);
      }
      $("#person_image").prop("src", content[currentstep]["actor"]).addClass(content[currentstep]["actor-height"]);
      $("#detail_text").fadeIn(500);
    });

  }
});
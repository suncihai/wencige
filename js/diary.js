$(document).ready(function(){
     var step = 0;

     var content=[
        {
          "content":"今天约好了和娇娇去某个drive through的动物园玩",
          "image":"images/diary/pic1.JPG",
          "actor":""
        },
        {
          "content":"之前和娇娇逛自然博物馆时，娇娇就说过很喜欢动物",
          "image":"images/diary/pic1.JPG",
          "actor":""
        },
        {
          "content":"所以这次我就规划了这次动物园之行",
          "image":"images/diary/pic1.JPG",
          "actor":""
        },
        {
          "content":"可能，在动物面前，娇娇才能放飞自我吧=。=",
          "image":"images/diary/pic1.JPG",
          "actor":""
        },
        {
          "content":"在动森里玩的娇娇也是，看到喜欢的小动物都会扑上去。",
          "image":"images/diary/pic1.JPG",
          "actor":""
        },
        {
          "content":"路上虽然有点堵，不过唠唠嗑时间过得很快，还是到了",
          "image":"images/diary/pic2.JPG",
          "actor":""
        },
        {
          "content":"【到啦～】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"【哇，到啦到啦~~】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/wenhui_1.png"
        },
        {
          "content":"【看把你高兴的，这都还没看到动物呢】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"【一想到能看到真实的吴紫眉我就超兴奋啊啊啊啊~】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/wenhui_1.png"
        },
        {
          "content":"【我查一下手机📱哈】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/cihai_3.png"
        },
        {
          "content":"【没查到，不过还是进去看看吧，说不定能碰到呢】",
          "image":"images/diary/pic2.JPG",
          "actor":"images/diary/cihai_3.png"
        },
        {
          "content":"于是我们缓缓地往园区里面开了进去",
          "image":"images/diary/pic2.JPG",
          "actor":""
        },
        {
          "content":"刚进了大门，好多长颈鹿🦒就映入了眼帘。",
          "image":"images/diary/pic3.JPG",
          "actor":""
        },
        {
          "content":"难道还是因为疫情关系，来投喂的游客少所以，所以看到一辆车就来堵吗。。",
          "image":"images/diary/pic3.JPG",
          "actor":""
        },
        {
          "content":"后面又来了一波长颈鹿，个个都眼巴巴地看着你",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"【好想送它们礼物🎁啊！】",
          "image":"images/diary/pic4.JPG",
          "actor":"images/diary/wenhui_1.png"
        },
        {
          "content":"【你当成动森啦】",
          "image":"images/diary/pic4.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"【我想增加它们的好感度嘛，不可以啊？】",
          "image":"images/diary/pic4.JPG",
          "actor":"images/diary/wenhui_1.png"
        },
        {
          "content":"看着娇娇炽热的眼神，我下午去不远处的公园管理车那儿买了点胡萝卜🥕",
          "image":"images/diary/pic5.JPG",
          "actor":""
        },
        {
          "content":"【你看嘛，长颈鹿🦒都围过来了诺，它们最爱吃胡萝卜🥕了！】",
          "image":"images/diary/pic5.JPG",
          "actor":"images/diary/wenhui_1.png"
        },
        {
          "content":"【可能，它们不是冲着胡萝卜🥕来的，而是冲着好看的娇娇来的😊】",
          "image":"images/diary/pic5.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"娇娇听到后害羞地打了我一下。",
          "image":"images/diary/pic5.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"我注意到就在一旁的一只鸵鸟看着我们",
          "image":"images/diary/pic6.JPG",
          "actor":""
        },
        {
          "content":"【我以前学过鸟语的，你知道鸵鸟在说啥嘛？】",
          "image":"images/diary/pic6.JPG",
          "actor":"images/diary/cihai_1.png"
        },
        {
          "content":"也是每次看到世贸大楼的时候，我就知道可以再掏出手机给宝宝发消息了~~",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"于是我又掏出了手机，开始给宝宝发消息",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"--刚出地铁站（笑脸）--",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"过了一小会儿，宝宝还没回复，应该是在忙吧，因为这个点是宝宝那里的9点左右，手机不在身边的概率也是挺高的",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"于是我继续往地下通道走去",
          "image":"images/diary/pic4.JPG",
          "actor":""
        },
        {
          "content":"这里的地铁站是刚建成的，所以特别新，地上的建筑是著名的设计大师的作品，从外面看仿佛就是眼睫毛",
          "image":"images/diary/pic5.JPG",
          "actor":""
        },
        {
          "content":"每次经过这里都会不觉得抬头看两眼天窗",
          "image":"images/diary/pic5.JPG",
          "actor":""
        },
        {
          "content":"这个地铁站是个大站，每天上下班人流量特别大，让宝宝感受一下吧~~",
          "image":"",
          "actor":""
        },
        {
          "content":"穿过人流，乘着电梯进入办公大楼，就来到了中庭",
          "image":"images/diary/pic6.JPG",
          "actor":""
        },
        {
          "content":"【希望啥时可以带宝宝来这里看一下呢】",
          "image":"images/diary/pic6.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"【真的好想宝宝呢】",
          "image":"images/diary/pic6.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"我看着远处一对有说有笑的情侣，喃喃自语道。",
          "image":"images/diary/pic6.JPG",
          "actor":""
        },
        {
          "content":"上了电梯，就来到了办公室",
          "image":"images/diary/pic7.JPG",
          "actor":""
        },
        {
          "content":"今天看来我第二个到啊，第一个开门的估计去倒水去了",
          "image":"images/diary/pic7.JPG",
          "actor":""
        },
        {
          "content":"又要开始工作啦~~",
          "image":"images/diary/pic7.JPG",
          "actor":""
        },
        {
          "content":"这就是我的座位，因为最近一直比较忙，没有好好收拾过",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"桌上放着一个皮卡丘，我经常工作累的时候看一眼，消除下疲劳",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"同事们陆陆续续地来了",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"【早啊~~】",
          "image":"images/diary/pic8.JPG",
          "actor":"images/diary/per1.png"
        },
        {
          "content":"开始专心上班吧~",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"就这样，忙碌的一天开始了",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"时间过得很快，一眨眼的功夫就到了下班时间",
          "image":"images/diary/pic8.JPG",
          "actor":""
        },
        {
          "content":"和同事们陆续下了电梯",
          "image":"images/diary/pic9.JPG",
          "actor":""
        },
        {
          "content":"【拜拜啊，明天见啦~~】",
          "image":"images/diary/pic9.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"有些同事会先去其他地方吃个饭，就和他们先道了个别",
          "image":"images/diary/pic9.JPG",
          "actor":""
        },
        {
          "content":"再来到了中庭，见到了傍晚的景色，也是挺不错的",
          "image":"images/diary/pic10.JPG",
          "actor":""
        },
        {
          "content":"顺路的同事招呼着一起快走，去赶地铁",
          "image":"images/diary/pic11.JPG",
          "actor":""
        },
        {
          "content":"【你们先走吧，我慢慢走，明儿见啦~】",
          "image":"images/diary/pic11.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"有时我不喜欢走那么快，就喜欢享受慢慢走一边欣赏周围的景物，也可以放松一下心情",
          "image":"images/diary/pic11.JPG",
          "actor":""
        },
        {
          "content":"来到了宽敞的地铁站",
          "image":"images/diary/pic12.JPG",
          "actor":""
        },
        {
          "content":"突然感到一股很亲切的气息",
          "image":"images/diary/pic12.JPG",
          "actor":""
        },
        {
          "content":"在远处，仿佛看到了一个熟悉的身影",
          "image":"images/diary/pic12.JPG",
          "actor":""
        },
        {
          "content":"那个我一直梦里都想见的人",
          "image":"images/diary/pic12.JPG",
          "actor":"images/diary/per4.png"
        },
        {
          "content":"【宝宝！！！】",
          "image":"images/diary/pic12.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"我激动地叫了起来",
          "image":"images/diary/pic12.JPG",
          "actor":"images/diary/per3.png"
        },
        {
          "content":"【乖乖】",
          "image":"images/diary/pic12.JPG",
          "actor":"images/diary/per4.png"
        },
        {
          "content":"【我爱你】",
          "image":"images/diary/pic12.JPG",
          "actor":"images/diary/per4.png"
        }
     ];

     $("#next-step").click(function(){
         step += 1;
         if(step<content.length){
         	loadcontent(step);
         }
     });

     $("#previous-step").click(function(){
         step -= 1;
         if(step>=0){
            loadcontent(step);
         }
     });
     
     var musicoff = true; 

     function loadcontent(currentstep){
        $("#detail_text").fadeOut(500,function(){
        	$("#detail_text").html(content[currentstep]["content"]);
        	$(".example-image").prop("src",content[currentstep]["image"]);
        	$(".example-image-link").prop("href",content[currentstep]["image"]);
        	if(content[currentstep]["image"]==""){
        		$("#panel").append($('<video width="100%" autoplay><source src="images/diary/movie.mp4" type="video/mp4"></video>'));
        	}else{
        		$("video").remove();
        	}
        	if((content[currentstep]["image"]=="images/diary/pic12.JPG")&&musicoff){
        		$("#panel").append($('<audio autoplay loop><source src="music/MyHeartWillGoOn.mp3" type="audio/mp3"></audio>'));
        		musicoff =false;
        	}
        	if(step==(content.length-1)){
        		$("#board_inner").css("opacity",0);
        		setTimeout(function(){
        			var uagent = navigator.userAgent.toLowerCase();
                        
                    if (uagent.search("iphone") > -1 || uagent.search("android") > -1 || uagent.search("blackberry") > -1
                    || uagent.search("webos") > -1){
                        $("#board").append($('<div id="wording" style="position:absolute;width:80%;font-size:20px;font-weight:bold;left:50%;top:10%;transform:translateX(-50%);translateY(-90%);"></div>'));
                    }else{
                        $("#board").append($('<div id="wording" style="position:absolute;width:80%;font-size:24px;font-weight:bold;left:50%;top:30%;transform:translateX(-50%);translateY(-70%);"></div>'));
                    }
                    var theater = new TheaterJS();
		            theater.describe("wording",0.2,"#wording");
		            theater
			            .write("wording:"+"谢谢宝宝耐心地看到这里呢，原本这个是之前提到过的一篇特殊的日记，是想让宝宝知道我每天的日常生活，最后的结尾宝宝的出现是幻想出来的场景，是我对和宝宝生活的憧憬。现在突然发生这件事情，设身处地换位思考下宝宝现在的心境，宝宝应该是最需要鼓励的时刻，我想说，宝宝要加油，没有什么过不去的坎，人生就是经历各种各样的挫折。宝宝最可贵的精神就是不折不饶，敢于直面最危险的困难。阿姨现在也是最需要宝宝鼓励和安慰的时刻，宝宝加油，宝宝加油，宝宝加油！！！！！！！<br><br>乖乖亲笔")
			            .write(function(){theater.play();});
		        },10000);
        	}
        	$("#person_image").prop("src",content[currentstep]["actor"]);
        	$("#detail_text").fadeIn(500);
        });

     }
});
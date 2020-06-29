$(document).ready(function($) {
    var container=document.getElementById("container");
    var uploadfilename;
    var uagent = navigator.userAgent.toLowerCase();
    var currenctpostid;
    var lastid;
    var postcount = localStorage.getItem("postcount");
                        
    $.ajax({    
        type: "GET",
        url: "getdata.php",             
        dataType: 'json',   //expect html to be returned                
        success: function(response){ 
             setTimeout(function(){
                generatepost(response.data); 
                if(postcount!=response.data.length){
                   $("#track_btn").show();
                }else{
                   $("#track_btn").hide();
                }
                localStorage.setItem("postcount",response.data.length);
            },100); 
            $.ajax({    
                type: "GET",
                url: "getcomment.php",             
                dataType: 'json',   //expect html to be returned                
                success: function(response){                     
                    setTimeout(function(){
                        generatecomment(response.data); 
                    },100);                   
                }
            });                  
        }
   });

    function getDateNum(date){
       var tmp = date.split("");
       var arr = new Array();

       tmp.forEach(function(element){
          if(!isNaN(element)&&element!==" "){
             arr.push(element);
          }
       });

       return arr.join("");
    }

    function generatepost(data){
        data.sort(function(a,b){
            return getDateNum(a.postid) - getDateNum(b.postid);
        });
        $.each( data, function( key, value ) {
            var newpostdiv = document.createElement('div');
            newpostdiv.setAttribute("class","item");
            newpostdiv.setAttribute("id",value.postid);
            lastid = value.postid;

            var newatag = document.createElement('a');
            newatag.setAttribute("class","example-image-link");
            newatag.setAttribute("href",value.imageUrl);
            newatag.setAttribute("data-lightbox","example-set");
            newatag.setAttribute("data-title","Click arrows to switch pictures");
     
            var newimg = document.createElement('img');
            newimg.setAttribute("class","example-image");
            newimg.setAttribute("src",value.imageUrl);

            var newdiv = document.createElement('div');
            newdiv.setAttribute("class","content-item");

            var newh3 = document.createElement('h3');
            newh3.setAttribute("class","title-item");

            var newatag1 = document.createElement('a');
            newatag1.setAttribute("href",'');
            newatag1.innerHTML=value.title;

            var newdiv2 = document.createElement('div');
            newdiv2.setAttribute("class","time");
            newdiv2.innerHTML=value.postDate;

            var newdiv3 = document.createElement('div');
            newdiv3.setAttribute("class","bottom-item");
            var newspanleft=document.createElement('span');
            newspanleft.setAttribute("class","user f-left btn btn-comment");
            newspanleft.setAttribute("data-toggle","modal");
            newspanleft.setAttribute("data-target","#newcommentmodal");
            var newcommenticon=document.createElement('i');
            newcommenticon.setAttribute("class","fa fa-comment-o");
            newcommenticon.style.fontSize="x-large";
            newcommenticon.style.marginTop="5px";
            var newspan= document.createElement('span');
            newspan.setAttribute("class","user f-right");
            newspan.innerHTML="发帖人 ";
            var newuser=document.createElement('span');
            if(value.author=="wenhui"){
                newuser.innerHTML="文慧";
            }else{
                newuser.innerHTML="辞海";
            }
            var newavatar = document.createElement('img');
            newavatar.setAttribute("width",50);
            newavatar.setAttribute("src","images/"+value.author+".jpg");

            var newtext = document.createElement('p');
            newtext.innerHTML=value.text;

            container.appendChild(newpostdiv);
            newpostdiv.appendChild(newatag);
            newatag.appendChild(newimg);
            newpostdiv.appendChild(newdiv);
            newdiv.appendChild(newh3);
            newh3.appendChild(newatag1);
            newdiv.appendChild(newdiv2);
            newdiv.appendChild(newtext);
            newpostdiv.appendChild(newdiv3);
            newdiv3.appendChild(newspanleft);
            newspanleft.appendChild(newcommenticon);
            newdiv3.appendChild(newspan);
            newspan.appendChild(newuser);
            newspan.appendChild(newavatar);
        });

        $(".btn-comment").click(function(){
            currenctpostid=$(this).closest(".item").prop("id");
        });
        setTimeout(function(){
           $('#container').pinto();
        },300);
    }

    function generatecomment(data){
        data.sort(function(a,b){
            return getDateNum(a.commentid) - getDateNum(b.commentid);
        });
        $.each( data, function( key, value ) {
            var post = document.getElementById(value.postid);

            var newcommentdiv = document.createElement('div');
            newcommentdiv.setAttribute("class","comment");
            newcommentdiv.setAttribute("id",value.commentid);
            newcommentdiv.style.padding="10px";
            newcommentdiv.style.borderTop="1px solid #eee";

            var newavatar = document.createElement('img');
            newavatar.setAttribute("width",25);
            newavatar.style.display="inline-block";
            newavatar.style.borderRadius="25px";
            newavatar.style.marginRight="5px";
            newavatar.style.verticalAlign="top";
            newavatar.setAttribute("src","images/"+value.author+".jpg");

            var newtext = document.createElement('p');
            newtext.style.width="85%";
            newtext.style.fontSize="12px";
            newtext.style.display="inline-block";
            newtext.style.margin="0";
            newtext.style.verticalAlign="middle";
            newtext.innerHTML=value.text;

            post.appendChild(newcommentdiv);
            newcommentdiv.appendChild(newavatar);
            newcommentdiv.appendChild(newtext);
        });
    }

    $('#container').pinto({
        itemWidth:250,
        gapX:10,
        gapY:10,
        onItemLayout: function($item, column, position) {
        }
    });

    $("#track_btn").click(function(){
       window.location.href="#"+lastid;
    });
    
    $(".avatars").hover(function(){
       $(this).find("p").css("opacity",1);
       $(this).find("img").css("box-shadow","0 0 20px #C83935");
    },function(){
       $(this).find("p").css("opacity",0);
       $(this).find("img").css("box-shadow","none");
    });

    $(".avatars").click(function(){
        var $user = $(this).prop("id");
        localStorage.setItem("user",$user);
        if($user=="wenhui"){
            $('#login_user').html("欢迎! 文慧");
        }else{
            $('#login_user').html("欢迎! 辞海");
        }
        $(".header").css("opacity",1);
        $(".password").fadeOut();
        $('#container').removeClass("blurpage");
        $("body").append($('<audio autoplay loop><source src="music/jiarutianyouaiyi.mp3" type="audio/mp3"></audio>'));
    });

    $("#log_out").click(function(){
		localStorage.clear();
        $('#login_user').html("");
    	$(".header").css("opacity",0);
        $("#choose_character").hide();
        $("#login_panel").show();
        $(".password").fadeIn();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        hexaDemo5.flip();
        $('#container').addClass("blurpage");
    })

    if(localStorage.getItem("user")!=null){
        if(localStorage.getItem("user")=="wenhui"){
            $('#login_user').html("欢迎! 文慧");
        }else{
            $('#login_user').html("欢迎! 辞海");
        }
        $(".header").css("opacity",1);
        $(".password").hide();
        $('#container').removeClass("blurpage");
        $("body").append($('<audio autoplay loop><source src="music/jiarutianyouaiyi.mp3" type="audio/mp3"></audio>'));
    }

    $("#createpost").click(function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var hour = today.getHours()  < 10 ? "0" + today.getHours() : today.getHours();
        var minute = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

        if(dd<10) {
            dd = '0'+dd;
        } 

        if(mm<10) {
            mm = '0'+mm;
        } 

        today=yyyy+'-'+mm+'-'+dd;
        var postId=yyyy+'-'+mm+'-'+dd+'-'+hour+'-'+minute+'-'+seconds;
        var title = $("#post_title").val();
        var text = $("#post_text").val();
        var author = localStorage.getItem("user");
        var imageUrl=""+uploadfilename;
        console.log("imageUrl", imageUrl);
        if (uagent.search("iphone") > -1){
            $.ajax({    
                type:"POST",
                async:false,
                url:"insertdata.php",             
                dataType: 'json',
                data:{postId:postId,postDate:today,title:title,text:text,imageUrl:imageUrl,author:author},               
                success: function(response){   
                    $("form").submit();             
                }
            });
        }else{
            $.ajax({    
                type:"POST",
                url:"insertdata.php",             
                dataType: 'json',
                data:{postId:postId,postDate:today,title:title,text:text,imageUrl:imageUrl,author:author},               
                success: function(response){
                    $("form").submit();
                }
            });
        }
    });

    $("#createcomment").click(function(){
        var postDate = currenctpostid.split("-");
        var date = postDate[0]+"年"+postDate[1]+"月"+postDate[2]+"日";
        var commentId = new Date().getTime();
        var text = $("#comment_text").val();
        var author = localStorage.getItem("user");
        $.ajax({    
            type:"POST",
            url:"insertcomment.php",             
            dataType: 'json',
            data:{postId:currenctpostid,commentId:commentId,postDate:date,text:text,author:author},               
            success: function(response){
                location.reload();                 
            }
        });
    });

    $("#post_image").change(function() {
        $("#message").empty(); // To remove the previous error message
        var file = this.files[0];
        uploadfilename=file.name;
        var imagefile = file.type;
        var match= ["image/jpeg","image/png","image/jpg"];
        if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))){
            $('#previewing').attr('src','images/noimage.png');
            return false;
        }else{
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
        
    function imageIsLoaded(e) {
      $("#file").css("color","green");
      $('#image_preview').css("display", "block");
      $('#previewing').attr('src', e.target.result);
      $('#previewing').attr('width', '250px');
      $('#previewing').attr('height', '230px');
    };
})
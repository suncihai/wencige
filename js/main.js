$(document).ready(function ($) {
    var container = document.getElementById("container");
    var $container = $(container);
    var uploadfilename;
    var uagent = navigator.userAgent.toLowerCase();
    var currenctpostid;
    var currentTitle;
    var lastid;
    var postcount = localStorage.getItem("postcount");
    var balance = 0;
    var bg_music = document.getElementById('bg_music');

    $.ajax({
        type: "GET",
        url: "services/getdata.php",
        dataType: 'json', //expect html to be returned                
        success: function (response) {
            setTimeout(function () {
                generatepost(response.data);
                if (postcount != response.data.length) {
                    $("#track_btn").show();
                } else {
                    $("#track_btn").hide();
                }
                localStorage.setItem("postcount", response.data.length);
            }, 100);
            $.ajax({
                type: "GET",
                url: "services/getcomment.php",
                dataType: 'json', //expect html to be returned                
                success: function (response) {
                    setTimeout(function () {
                        generatecomment(response.data);
                    }, 100);
                }
            });
            $.ajax({
                type: "GET",
                url: "services/getprofile.php",
                dataType: 'json',
                data: {
                    user: localStorage.getItem("user")
                },
                success: function (response) {
                    balance = response.data.balance;
                    $("#user_balance").html(response.data.balance);
                }
            });
        }
    });

    function getDateNum(date) {
        var tmp = date.split("");
        var arr = new Array();

        tmp.forEach(function (element) {
            if (!isNaN(element) && element !== " ") {
                arr.push(element);
            }
        });

        return arr.join("");
    }

    function generatepost(data) {
        data.sort(function (a, b) {
            return getDateNum(a.postid) - getDateNum(b.postid);
        });
        $.each(data, function (key, value) {
            var $div = $("<div>").prop({
                "class": "item",
                "id": value.postid
            });
            lastid = value.postid;

            var $tag = $("<a>").attr({
                "class": "example-image-link",
                "href": value.imageUrl,
                "data-lightbox": "example-set",
                "data-title": "Click arrows to switch pictures"
            });
            var $img = $("<img>").prop({
                "class": "example-image",
                "src": value.imageUrl
            });
            var $div1 = $("<div>").prop("class", "content-item");
            var $h3 = $("<h3>").prop("class", "title-item");
            var $tag1 = $("<h5>").attr({
                "class": "title-text"
            }).html(value.title);
            var $div2 = $("<div>").prop("class", "time").html(value.postDate);
            var $div3 = $("<div>").prop("class", "bottom-item");
            var $spancomment = $("<span>").attr({
                "class": "user f-left btn btn-comment",
                "data-toggle": "modal",
                "data-target": "#newcommentmodal"
            });
            var $spanedit = $("<span>").attr({
                "class": "user f-left btn btn-comment",
                "data-toggle": "modal",
                "data-target": "#editpostmodal"
            });
            var $commention = $("<i>").prop("class", "fa fa-comment-o").css({
                fontSize: "x-large",
                marginTop: "5px"
            });
            var $edit = $("<i>").prop("class", "fa fa-pencil").css({
                fontSize: "x-large",
                marginTop: "5px"
            });
            var $span = $("<span>").prop("class", "user f-right").html("发帖人 ");

            var $user = $("<span>");
            if (value.author == "wenhui") {
                $user.html("文慧");
            } else {
                $user.html("辞海");
            }

            var $avatar = $("<img>").prop({
                "width": 50,
                "src": "assets/images/" + value.author + ".jpg"
            })
            var $text = $("<p>").html(value.text);

            $container.append($div);
            $div.append($tag).append($div1).append($div3);
            $tag.append($img);
            $div1.append($h3).append($div2).append($text);
            $h3.append($tag1);
            $div3.append($spancomment.append($commention)).append($spanedit.append($edit)).append($span);
            $span.append($user).append($avatar);
        });

        $(".btn-comment").click(function () {
            currenctpostid = $(this).closest(".item").prop("id");
            currentTitle = $(this).closest(".item").find(".title-text").text();
        });
        setTimeout(function () {
            $('#container').pinto();
        }, 300);
    }

    function generatecomment(data) {
        data.sort(function (a, b) {
            return getDateNum(a.commentid) - getDateNum(b.commentid);
        });
        $.each(data, function (key, value) {
            var post = document.getElementById(value.postid);
            var $post = $(post);

            var $comment = $("<div>").prop({
                "class": "comment",
                "id": value.commentid
            }).css({
                padding: "10px",
                borderTop: "1px solid #eee"
            });
            var $avatar = $("<img>").prop({
                "width": 25,
                "src": "assets/images/" + value.author + ".jpg"
            }).css({
                display: "inline-block",
                borderRadius: "25px",
                marginRight: "5px",
                verticalAlign: "top"
            });
            var $text = $("<p>").css({
                width: "85%",
                fontSize: "12px",
                display: "inline-block",
                margin: "0",
                verticalAlign: "middle"
            }).html(value.text)

            $post.append($comment.append($avatar).append($text));
        });
    }

    $('#container').pinto({
        itemWidth: 250,
        gapX: 20,
        gapY: 20,
        onItemLayout: function ($item, column, position) {}
    });

    $("#track_btn").click(function () {
        window.location.href = "#" + lastid;
    });

    $(".avatars").hover(function () {
        $(this).find("p").css("opacity", 1);
        $(this).find("img").css("box-shadow", "0 0 20px #ccc");
    }, function () {
        $(this).find("p").css("opacity", 0);
        $(this).find("img").css("box-shadow", "none");
    });

    $("body").click(function () {
        bg_music.play()
    })

    $(".avatars").click(function () {
        var $user = $(this).prop("id");
        localStorage.setItem("user", $user);
        if ($user == "wenhui") {
            $('#login_user').html("欢迎! 文慧");
        } else {
            $('#login_user').html("欢迎! 辞海");
        }
        $.ajax({
            type: "GET",
            url: "services/getprofile.php",
            dataType: 'json',
            data: {
                user: $user
            },
            success: function (response) {
                balance = response.data.balance;
                $("#user_balance").html(response.data.balance);
            }
        });
        $(".header").css("opacity", 1);
        $(".password").fadeOut();
        $('#container').removeClass("blurpage");
    });

    $("#log_out").click(function () {
        localStorage.clear();
        $('#login_user').html("");
        $(".header").css("opacity", 0);
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
        $("#bg_music").remove();
    })

    if (localStorage.getItem("user") != null) {
        if (localStorage.getItem("user") == "wenhui") {
            $('#login_user').html("欢迎! 文慧");
        } else {
            $('#login_user').html("欢迎! 辞海");
        }
        $(".header").css("opacity", 1);
        $(".password").hide();
        $('#container').removeClass("blurpage");
    }

    $("#createpost").click(function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var hour = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
        var minute = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy + '-' + mm + '-' + dd;
        var postId = yyyy + '-' + mm + '-' + dd + '-' + hour + '-' + minute + '-' + seconds;
        var title = $("#post_title").val();
        var text = $("#post_text").val();
        var author = localStorage.getItem("user");
        var imageUrl = "" + uploadfilename;

        if (uagent.search("iphone") > -1) {
            $.ajax({
                type: "POST",
                async: false,
                url: "services/insertdata.php",
                dataType: 'json',
                data: {
                    postId: postId,
                    postDate: today,
                    title: title,
                    text: text,
                    imageUrl: imageUrl,
                    author: author,
                    balance
                },
                success: function (response) {
                    $("form").submit();
                }
            });
        } else {
            $.ajax({
                type: "POST",
                url: "services/insertdata.php",
                dataType: 'json',
                data: {
                    postId: postId,
                    postDate: today,
                    title: title,
                    text: text,
                    imageUrl: imageUrl,
                    author: author,
                    balance
                },
                success: function (response) {
                    $("form").submit();
                }
            });
        }
    });

    $("#editpost").click(function () {
        var text = $("#edit_post_text").val();
        var postDate = currenctpostid.split("-");
        var date = postDate[0] + "年" + postDate[1] + "月" + postDate[2] + "日";

        if (uagent.search("iphone") > -1) {
            $.ajax({
                type: "POST",
                async: false,
                url: "services/updatedata.php",
                dataType: 'json',
                data: {
                    postId: currenctpostid,
                    postDate: date,
                    text: text,
                    title: currentTitle
                },
                success: function (response) {
                    $("form").submit();
                }
            });
        } else {
            $.ajax({
                type: "POST",
                url: "services/updatedata.php",
                dataType: 'json',
                data: {
                    postId: currenctpostid,
                    postDate: date,
                    text: text,
                    title: currentTitle
                },
                success: function (response) {
                    $("form").submit();
                }
            });
        }
    });

    $("#createcomment").click(function () {
        var postDate = currenctpostid.split("-");
        var date = postDate[0] + "年" + postDate[1] + "月" + postDate[2] + "日";
        var commentId = new Date().getTime();
        var text = $("#comment_text").val();
        var author = localStorage.getItem("user");
        $.ajax({
            type: "POST",
            url: "services/insertcomment.php",
            dataType: 'json',
            data: {
                postId: currenctpostid,
                commentId: commentId,
                postDate: date,
                title: currentTitle,
                text: text,
                author: author,
                balance
            },
            success: function (response) {
                location.reload();
            }
        });
    });

    $("#post_image").change(function () {
        $("#message").empty(); // To remove the previous error message
        var file = this.files[0];
        uploadfilename = file.name;
        var imagefile = file.type;
        var match = ["image/jpeg", "image/png", "image/jpg"];
        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2]))) {
            $('#previewing').attr('src', 'assets/images/noimage.png');
            return false;
        } else {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $("#file").css("color", "green");
        $('#image_preview').css("display", "block");
        $('#previewing').attr('src', e.target.result);
        $('#previewing').attr('width', '250px');
        $('#previewing').attr('height', '230px');
    };

    setInterval(function () {
        var windowwidth = $(window).width();
        var bubblerandomleft = Math.ceil(Math.random() * windowwidth);
        var BubbleDiv = document.getElementById('bubble_layer');
        var newDiv2 = document.createElement('div');
        var newImg2 = document.createElement('img');
        newDiv2.setAttribute("style", "position:fixed;left:" + bubblerandomleft + "px;top:850px;width:60px;height:60px;cursor:pointer;z-index:999;");
        newDiv2.setAttribute("class", "bubbleflying");
        newImg2.setAttribute("src", "assets/images/bubble.png");
        newDiv2.appendChild(newImg2);
        BubbleDiv.appendChild(newDiv2);
        newDiv2.style.transition = "ease-in 5s";

        setTimeout(function () {
            newDiv2.style.top = "0px";
        }, 200);
        var bubbleburst = false;

        newDiv2.onclick = function (event) {
            var currentX = event.clientX;
            var currentY = event.clientY;
            BubbleDiv.removeChild(newDiv2);
            bubbleburst = true;

            var newBubblefeather1 = document.createElement('div');
            var newBubblefeather1img = document.createElement('img');
            newBubblefeather1.setAttribute("style", "position:fixed;left:" + currentX + "px;top:" + (currentY - 130) + "px;width:90px;height:108px");
            newBubblefeather1.setAttribute("class", "bubblefeather1");
            newBubblefeather1img.setAttribute("src", "assets/images/bubble_feather1.png");
            newBubblefeather1.appendChild(newBubblefeather1img);
            BubbleDiv.appendChild(newBubblefeather1);

            var newBubblefeather2 = document.createElement('div');
            var newBubblefeather2img = document.createElement('img');
            newBubblefeather2.setAttribute("style", "position:fixed;left:" + (currentX - 100) + "px;top:" + (currentY - 80) + "px;width:93px;height:81px");
            newBubblefeather2.setAttribute("class", "bubblefeather2");
            newBubblefeather2img.setAttribute("src", "assets/images/bubble_feather2.png");
            newBubblefeather2.appendChild(newBubblefeather2img);
            BubbleDiv.appendChild(newBubblefeather2);

            var newBubbleheart1 = document.createElement('div');
            var newBubbleheart1img = document.createElement('img');
            newBubbleheart1.setAttribute("style", "position:fixed;left:" + (currentX - 10) + "px;top:" + (currentY - 20) + "px;width:24px;height:24px");
            newBubbleheart1.setAttribute("class", "bubbleheart1");
            newBubbleheart1img.setAttribute("src", "assets/images/bubble_heart1.png");
            newBubbleheart1.appendChild(newBubbleheart1img);
            BubbleDiv.appendChild(newBubbleheart1);

            var newBubbleheart2 = document.createElement('div');
            var newBubbleheart2img = document.createElement('img');
            newBubbleheart2.setAttribute("style", "position:fixed;left:" + (currentX - 50) + "px;top:" + (currentY + 20) + "px;width:16px;height:16px");
            newBubbleheart2.setAttribute("class", "bubbleheart2");
            newBubbleheart2img.setAttribute("src", "assets/images/bubble_heart2.png");
            newBubbleheart2.appendChild(newBubbleheart2img);
            BubbleDiv.appendChild(newBubbleheart2);

            var newBubblestar1 = document.createElement('div');
            var newBubblestar1img = document.createElement('img');
            newBubblestar1.setAttribute("style", "position:fixed;left:" + (currentX + 10) + "px;top:" + (currentY + 40) + "px;width:24px;height:24px");
            newBubblestar1.setAttribute("class", "bubblestar1");
            newBubblestar1img.setAttribute("src", "assets/images/bubble_star1.png");
            newBubblestar1.appendChild(newBubblestar1img);
            BubbleDiv.appendChild(newBubblestar1);

            var newBubblestar2 = document.createElement('div');
            var newBubblestar2img = document.createElement('img');
            newBubblestar2.setAttribute("style", "position:fixed;left:" + (currentX - 30) + "px;top:" + (currentY - 10) + "px;width:34px;height:34px");
            newBubblestar2.setAttribute("class", "bubblestar1");
            newBubblestar2img.setAttribute("src", "assets/images/bubble_star2.png");
            newBubblestar2.appendChild(newBubblestar2img);
            BubbleDiv.appendChild(newBubblestar2);

            var newBubblestar3 = document.createElement('div');
            var newBubblestar3img = document.createElement('img');
            newBubblestar3.setAttribute("style", "position:fixed;left:" + (currentX - 10) + "px;top:" + (currentY) + "px;width:16px;height:16px");
            newBubblestar3.setAttribute("class", "bubblestar1");
            newBubblestar3img.setAttribute("src", "assets/images/bubble_star3.png");
            newBubblestar3.appendChild(newBubblestar3img);
            BubbleDiv.appendChild(newBubblestar3);

            var falltime = 0;

            //if onmouseover bubble in the lower part of screen, make it fall faster
            if (currentY < 500) {
                falltime = 7100;
                newBubblefeather1.style.transition = "ease-in 10s";
                newBubblefeather2.style.transition = "ease-in 9s";
                newBubbleheart1.style.transition = "ease-in 10s";
                newBubbleheart2.style.transition = "ease-in 9s";
                newBubblestar1.style.transition = "ease-in 10s";
                newBubblestar2.style.transition = "ease-in 9.5s";
                newBubblestar3.style.transition = "ease-in 9.5s";
            } else {
                falltime = 3100;
                newBubblefeather1.style.transition = "ease-in 3s";
                newBubblefeather2.style.transition = "ease-in 2s";
                newBubbleheart1.style.transition = "ease-in 3s";
                newBubbleheart2.style.transition = "ease-in 2s";
                newBubblestar1.style.transition = "ease-in 3s";
                newBubblestar2.style.transition = "ease-in 2.5s";
                newBubblestar3.style.transition = "ease-in 2.5s";
            }

            setTimeout(function () {
                newBubblefeather1.style.top = "800px";
                newBubblefeather2.style.top = "800px";
                newBubbleheart1.style.top = "830px";
                newBubbleheart2.style.top = "840px";
                newBubblestar1.style.top = "820px";
                newBubblestar2.style.top = "820px";
                newBubblestar3.style.top = "820px";
            }, 200);

            setTimeout(function () {
                BubbleDiv.removeChild(newBubblefeather1);
                BubbleDiv.removeChild(newBubblefeather2);
                BubbleDiv.removeChild(newBubbleheart1);
                BubbleDiv.removeChild(newBubbleheart2);
                BubbleDiv.removeChild(newBubblestar1);
                BubbleDiv.removeChild(newBubblestar2);
                BubbleDiv.removeChild(newBubblestar3);
            }, falltime);
        }

        setTimeout(function () {
            if (!bubbleburst) {
                BubbleDiv.removeChild(newDiv2);
            }
        }, 5200);
    }, 2000);
})
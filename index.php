<!DOCTYPE html>
<html lang="en_US">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Love Diary">
    <meta name="author" content="#">
	
    <title>文辞阁</title>
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/menu.css">
	
	<!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
	
	<!-- Custom Fonts -->
    <link rel="stylesheet" href="font-awesome-4.4.0/css/font-awesome.min.css"  type="text/css">
    <link href="css/hexaflip.css" rel="stylesheet" type="text/css">
	
	<link rel="stylesheet" href="css/lightbox.css">
	
	<!-- Core JavaScript Files -->  	 
    
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>

<?php
  if(isset($_FILES['image'])){
      session_start();
  	  $date = $_SESSION['uploadTime'];
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];

      $tmp = explode('.', $file_name);
      $file_ext = end($tmp);

      $file_name = $date.'-'.$file_name;
      $target = "images/upload/".$file_name;
      
      $expensions= array("jpeg","jpg","png","JPG");
      
      if(in_array($file_ext,$expensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 5242880){
         $errors[]='File size must be excately 5 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,$target);
      }

      $imagepath =$file_name;
      $save = "images/upload/" . $imagepath; //This is the new file you saving
      $file = "images/upload/" . $imagepath; //This is the original file

      list($width, $height) = getimagesize($file); 

      $tn = imagecreatetruecolor($width, $height);

      $image = imagecreatefromjpeg($file);
      $info=getimagesize($target);
      if ($info['mime'] == 'image/jpeg'){
        $image = imagecreatefromjpeg($file);
      }elseif($info['mime'] == 'image/jpg'){
        $image = imagecreatefromjpeg($file);
      }elseif ($info['mime'] == 'image/gif'){
        $image = imagecreatefromgif($file);
      }elseif ($info['mime'] == 'image/png'){
        $image = imagecreatefrompng($file);
      }

      imagecopyresampled($tn, $image, 0, 0, 0, 0, $width, $height, $width, $height);
      imagejpeg($tn, $save,60);
      
      $_FILES=null;
      clearstatcache();
      session_destroy();
   }
?>

<body>
    <div id="bubble_dummylayer"><div id="bubble_layer"></div></div>
    <div id="password_layer" class="password" style="position:fixed;background:black;opacity:0.8;left:0;top:0;width:100%;height:100vh;z-index:9999;"></div>
    <div id="password_panel" class="password" style="position:fixed;z-index:9999;top:30%;padding:30px;background:white;border:2px solid white;box-shadow:0 0 10px white;border-radius:5px;left:50%;transform:translateX(-50%);transition:ease 1s;">
        <div id="login_panel">
        	 <div class="main">
                <div id="hexaflip-demo5" class="demo"></div>
            </div>
        </div>
        <div id="choose_character" style="display:none;">
             <p>你是谁呀？</p>
        	 <div id="wenhui" class="avatars">
        	    <img src="images/wenhui.jpg" class="avatars_img"/>
                <p class="avatars_wording">文慧</p>
        	 </div>
        	 <div id="cihai" class="avatars">
        	    <img src="images/cihai.jpg" class="avatars_img"/>
                <p class="avatars_wording">辞海</p>
        	 </div>
        </div>
    </div>
	<div class="header">
		<div id='cssmenu' >
			<ul>
         <li class="active"><a href='#'><span style="color:black">文辞阁</span></a></li>
			   <li class='last' style="float:right;"><a href='#'><span id="login_user"></span></a></li>
			   <li id="log_out_li"style="float:right;"><a href='#'><span id="log_out">登出</span></a></li>
			</ul>
		</div>
	</div>
	<button id="post_btn" type="button" data-toggle="modal" data-target="#newpostmodal" style="background:white;padding:5px 30px;color:black;margin-left:10px;">发帖</button>
	<button id="track_btn" type="button" style="background:white;padding:5px 30px;color:black;margin-left:10px;">有更新噢~</button>
	<div id="page-content" class="index-page">
		<div id="container" class="blurpage">
			<!-- These are our grid blocks -->
		</div>
	</div>
    <div class="modal fade" id="newpostmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" style="margin-top:15%;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="display:inline;color:black;font-weight:bold;">新帖子</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align:center;position:relative;">
	              <div style="width:70%;margin:20px auto;">
	              	  <label for="posttitle" style="display:block;text-align:left;">标题</label>
	                  <input id="post_title" name="post_title" type="text" style="width:100%;"/>
	              </div>
	              <div style="width:70%;margin:20px auto;">
	                  <label for="posttext" style="display:block;text-align:left;">内容</label>
	                  <textarea id="post_text" name="post_text" style="width:100%;resize:none;height:100px;"></textarea>
	              </div>
	              <form id="post_form" action="" method="POST" enctype="multipart/form-data">
	                  <div style="width:70%;margin:20px auto;">
	                  <label for="image" style="display:block;text-align:left;">图片</label>
	                  <div id="image_preview" style="margin:15px;"><img id="previewing" src="images/noimage.png" /></div>
	                  <input id="post_image" type="file" name="image"/>
	                  </div>
		          </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" id="createpost" style="background:white;color:black;border:1px solid black;">发帖</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editpostmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" style="margin-top:15%;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="display:inline;color:black;font-weight:bold;">编辑帖子</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align:center;position:relative;">
	              <div style="width:70%;margin:20px auto;">
	                  <label for="posttext" style="display:block;text-align:left;">变更内容</label>
	                  <textarea id="edit_post_text" name="edit_post_text" style="width:100%;resize:none;height:100px;"></textarea>
	              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" id="editpost" style="background:white;color:black;border:1px solid black;">提交编辑</button>
          </div>
        </div>
      </div>
    </div>

     <div class="modal fade" id="newcommentmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document" style="margin-top:15%;">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="display:inline;color:black;font-weight:bold;">回复</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align:center;position:relative;">
                <div style="width:80%;margin:20px auto;">
                    <label for="commenttext" style="display:block;text-align:left;">内容</label>
                    <textarea id="comment_text" name="comment_text" style="width:100%;resize:none;height:100px;"></textarea>
                </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" id="createcomment" style="background:white;color:black;border:1px solid black;">回复</button>
          </div>
        </div>
      </div>
     </div>

    <!-- Once the page is loaded, initialized the plugin. -->
    <script type="text/javascript" src="js/jquery-2.1.1.js" ></script>
	<!-- jQuery Pinterest -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js "></script>
    <script type="text/javascript" src="js/jquery.pinto.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/hexaflip.js"></script>
    <script type="text/javascript" src="js/setcurb.js"></script>
	
	<!-- Light Box -->
	<script src="js/lightbox-plus-jquery.min.js"></script>
	
	<!-- Menu -->
	<script src="js/script.js"></script>	
</body>
</html>
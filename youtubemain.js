$(document).ready(function(){
    $(document).on('click','.download',function(){
        var url = $('#url').val();
        var element = document.createElement('a');
        element.href = url.toLowerCase();
        final_url = element.hostname;
        switch (final_url) {
                case "web.facebook.com":
                    facebook();
                    break;
                case "m.facebook.com":
                    facebook();
                    break;
                case "facebook.com":
                    facebook();
                    break;
                case "www.facebook.com":
                    facebook();
                    break;
                case "free.facebook.com":
                    facebook();
                    break;
                case "0.facebook.com":
                    facebook();
                    break;
                case "www.youtube.com":
                    youtube();
                    break;
                case "youtube.com":
                    youtube();
                    break;
                case "m.youtube.com":
                    youtube();
                    break;
                case "youtu.be":
                    youtube();
                    break;
                case "instagram.com":
                    instagram();
                    break;
                case "www.instagram.com":
                    instagram();
                    break;
                case "twitter.com":
                    twitter();
                    break;
                case "www.twitter.com":
                    twitter();
                    break;
                case "vimeo.com":
                    vimeo();
                    break;
                case "www.vimeo.com":
                    vimeo();
                    break;
                 case "dailymotion.com":
                    dailymotion();
                    break;
                case "www.dailymotion.com":
                    dailymotion();
                    break;
                default:
                    fail();
        }
    })
});
function facebook(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/facebook.php',
            data:'url='+url,
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
}
function instagram(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/instagram.php',
            data:'url='+url,
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
}
function vimeo(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/vimeo.php',
            data:'url='+url,
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
}
function youtube(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/youtube.php',
            data:'url='+url,
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
}
function twitter(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        var fail = "";
        var cb = new Codebird;
        var tweet_url = url;
        cb.setConsumerKey("K0w8rlDCB6zBB739TGt1BLY2n", "3dk9oqc7CQoI90fCyk9JcZEvS88bvkP1YHxI3ylyorl1cNaD5H");
        cb.setProxy(base_url+"codebird-cors-proxy/");
        function getLink(tweet_url) {
          var s_url=tweet_url.split("/")[5];
          if ((tweet_url.indexOf("twitter.com") == -1) || s_url==undefined){
              fail += "Please enter a valid twitter link";
              failure(fail);
              return fail;
          }  else {
            var valid = 1;
            var video_url;
            var i = 0;
            cb.__call(
                "statuses_show_ID",
                "id="+s_url,
                null, // no callback needed, we have the promise
                true // app-only auth
            ).then(function (data) {
                    if (data.reply.extended_entities==null && data.reply.entities.media==null){
                       valid = 0;
                       fail += "The tweet content is not accessible).";
                    }
                    else if((data.reply.extended_entities.media[0].type)!="video" && (data.reply.extended_entities.media[0].type)!="animated_gif"){
                       valid = 0;
                       fail += "The tweet contains no video or gif file (or it is not accessible).";
                    }else{
                        video_url = data.reply.extended_entities.media[0].video_info.variants[i].url;
                        while (!video_url.match(".mp4$")){
                        video_url = data.reply.extended_entities.media[0].video_info.variants[i].url;
                        i=i+1;
                        } 
                        if(valid == 0){
                          failure(fail);
                        }else{
                          download(video_url);
                        }
                    }
                });
          }
      }
      getLink(tweet_url);
      function download(video_url) {
        $.ajax({
            type:'POST',
            url:'includes/twitter.php',
            data:'url='+video_url,
            success:function(html){
              $('body').append(html);
              $('#myModal').modal('show');
              $('.ajax-loading').hide();
            }
        });
      }
      function failure(fail) {
        $.ajax({
            type:'POST',
            url:'includes/twitter-fail.php',
            data:'fail='+fail,
            success:function(html){
              $('body').append(html);
              $('#myModal').modal('show');
              $('.ajax-loading').hide();
            }
        });
      }
}
function dailymotion(){
        var url = $('#url').val();
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/dailymotion.php',
            data:'url='+url,
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
}
function fail(){
        var url = $('#url').val();
        if(url==""){
           alert('Please enter a URL!');
        } else if(!/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(url)){
            alert('Please enter a valid URL.');
        } else {
        $('.ajax-loading').show();
        $.ajax({
            type:'POST',
            url:'includes/fail.php',
            success:function(html){
                $('body').append(html);
                $('#myModal').modal('show');
                $('.ajax-loading').hide();
            }
        });
    }
}
$(document).ready(function(){
    $(document).on('click','.contactform',function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        $('.ajax-loadingc').show();
        $.ajax({
            type:'POST',
            url:'includes/contact.php',
            data:'name='+ name + '&email='+ email + '&subject='+ subject + '&message='+ message,
            success:function(html){
                $('body').append(html);
                $('.ajax-loadingc').hide();
                $('#contact').modal('hide');
                $('#contactsuccess').modal('show');
            }
        });
    });
});
$(document).on('hidden.bs.modal','#myModal', function () {
	$('#myModal').remove();
});

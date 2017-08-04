<<<<<<< HEAD
<script>
$("#left").mouseover(function(){
  $("#left").animate({
    width: "70%",
    opacity: 1
  }, 1500 );
  $("#right").animate({
    width: "30%"
  }, 1500 );
});

$("#right").mouseover(function(){
  $("#right").animate({
    width: "70%",
    opacity: 1
  }, 1500 );
  $("#left").animate({
    width: "30%"
  }, 1500 );
});

</script>
=======
$('.a').hover(
    function(){
        $('.b').css('width','10vh');
    },
    function(){
        $('.c').css('width','10vh');
    },
    function(){
        $('.d').css('width','10vh');
    },
    function(){
        $('.e').css('width','10vh');
    }
);
>>>>>>> origin/master

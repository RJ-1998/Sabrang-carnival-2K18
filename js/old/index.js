/* Open when someone clicks on the span element */
const ham = document.getElementsByClassName('ham_icon');
        function openNav() {
            TweenMax.to(ham , 0.2 , {rotation:"90_cw"});
            if(screen.width>920){
            document.getElementById("myNav").style.width = "35%";}
            else{document.getElementById("myNav").style.width = "90%";}
        }
        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";  
            TweenMax.to(ham , 0.2, {rotation:"0_ccw",delay:"0.5"}); 
        }
        //------------------------------------------------------------//
        const scrollDot = document.getElementById('scroll_dot');
        TweenMax.to(scrollDot , 1 , {y:30,repeat:-1,autoAlpha:0});
        const scroll_down = document.querySelector("#scroll_down_button");
        const home = document.querySelector("#home_window");
        const about = document.querySelector("#about_window");
        scroll_down.addEventListener('click',function(e){
            TweenMax.to(window, 1.5 ,{scrollTo:'#about_window',ease:Power4.easeInOut});
        });
                
const y = screen.height;
home.style.height = y+"px";
const menu = document.getElementById('menu');

menu.addEventListener("mouseout",function(e){
menu.style.backgroundColor = "transparent";});

TweenLite.from(menu,2,{y:-400,ease:Power4.easeOut});
const img = document.getElementsByClassName("logo_image");
TweenLite.from(img,1,{y:700,ease:Power3.easeOut});
/***************** LOADER ********************/
        const loader = document.querySelectorAll("#dot");
        var tl = new TimelineMax({repeat:-1,onComplete:timelinefunction});
        tl.staggerFromTo(loader , 0.4 , {y:0,repeat:4,yoyo:true} , {y:-20,repeat:4,yoyo:true},0.1);         
         function timelinefunction()
         {tl.staggerTo(loader, 0.4 , {autoAlpha:0} , 0.1);} 
/**************** Flickity ************************/
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    autoPlay: 1500,
    pauseAutoPlayOnHover: true,
  cellAlign: 'left',
  contain: true
});     
/****************** CountDown *******************/
var countDownDate = new Date("Oct 25, 2018 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "PARTY IS ON!";
    }
}, 1000);
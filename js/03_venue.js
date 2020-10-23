window.addEventListener('DOMContentLoaded', function () {
// === show title ======
    
    var subject = document.querySelector('.subject div');
    setTimeout(function(){
        subject.style = "opacity:1; transition:.5s;";
    },200);
    
    //=== add span
    
    var h1 = document.querySelector('.subject div h1');
    var arrTxt = h1.textContent;
    
    h1.innerHTML='';
    
    for(var i = 0; i<arrTxt.length; i++){
        var txt = '';
        txt += "<span>"+ arrTxt[i] +"</span>";
        h1.innerHTML += txt;
    }
    
    //=== show title
    
    var venueEle = document.querySelectorAll('.subject div h1 span');
    
    venueEle.forEach(function(el,idx){
        setInterval(function(){
            el.style = "transform:translateY(0); transition:.5s;";
        },(idx+1)*80);
    });

    var scroll = document.querySelector('.scroll');
    setTimeout(function(){
        scroll.style = "opacity:1; transition:1s;";
    },300);
    
    
    
// === scroll event
    
    var v01 = document.querySelector('.v_01');
    var v01Top = v01.offsetTop;
    
    var v02 = document.querySelector('.v_02');
    var v02Top = v02.offsetTop;
    
    var conPro = document.querySelectorAll('.v_01 .process');
    var winH = window.innerHeight;

// === show aside ======
    var aside = document.querySelector('main aside');
    
    window.addEventListener('scroll',showAside);
    
        function showAside(){

            if(v02Top - winH/2 < this.scrollY || v01Top - winH/1.7 > this.scrollY){
                aside.classList.remove('active');
            }else{
                aside.classList.add('active');
            }
        }
    
// === aside menu active ======
    var asideList = document.querySelectorAll('.intro li');
    
    window.addEventListener('scroll', menuAct);
    
    function menuAct(){
        
        conPro.forEach(function(el,idx){
            var proTop = el.offsetTop;

            if(proTop-winH/2 < this.scrollY){
                
                asideList.forEach(function(el){
                    el.classList.remove('active');
                });
                
                asideList[idx].classList.add('active');
            }
        });
    }
    
    // === click menu ======
    
    $(asideList).click(clickMenu);
    
    function clickMenu(){
        var idx = $(this).index();
        var Y = conPro[idx].offsetTop;
        
        window.scrollTo({
            top:Y, left:0, behavior: 'smooth'
        });
    }
    
    $('aside h5').click(function(){
        window.scrollTo({
            top:0, left:0, behavior: 'smooth'
        });
    });
    
//// === mousewheel event ===
//    
//    var conEle = document.querySelector('.v_01');
//    var proEle = document.querySelectorAll('.v_01 .process');
//    var proPos = [];
//    var idx = 0;
//
//    var proStart = document.querySelectorAll('.v_01 .process')[0];
//
//
//
//    proEle.forEach(function (el) {
//        proPos.push(el.offsetTop);
//    });
//
//    var bln = true,
//        jj = 0,
//        cs, proIdx = -1,
//        last = 0,
//        sd = "down",
//        blen, aa;
//
//    proEle.forEach(function (el) {
//
//        el.addEventListener('mousewheel', function (e) {
//            var winTop = this.scrollY;
//            var winHei = this.innerHeight;
//            var delta = e.wheelDeltaY;
//            
//            console.log(e);
//
//            if(bln){
//                bln=false;
//                if (delta < 0) {
//                    proIdx++;
//                } else {
//                    proIdx--;
//                }
//
//                setTimeout(function(){
//                    window.scrollTo({
//                        left:0,
//                        top:proPos[proIdx],
//                        behavior : 'smooth'
//                    });
//                    setTimeout(function(){ bln=true;},500);
//                },20);
//            }
//
//            console.log(sd)
//        });
//    });
//



});

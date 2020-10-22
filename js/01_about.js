window.addEventListener('DOMContentLoaded', function () {
// === call imageList ======
//    showImgList();
    function showImgList(){
        var thumbList, imageList ='';
        
        for(var i = 1; i <= 4; i++){
            thumbList +="<li>";
            thumbList +="<img src=img/1_img_"+i+".png alt=''>";
            thumbList +="</li>";
        }
        $('.a_03 ul').html(thumbList);
        
        for(var i = 1; i <= 4; i++){
            imageList +="<div>";
            imageList +="<img src=img/1_img_"+i+".png alt=''>";
            imageList +="</div>";
        }
        $('.a_03 div').html(imageList);
        
        
        
        
        

        
        
    }
    
// === title show ======
    
    var subAbout = document.querySelectorAll('.about span');
    var subTit = document.querySelector('.subject h1 p');
    
    subAbout.forEach(function(el,idx){
        setInterval(function(){
          el.style = "transform:translateY(50%); transition:.5s;";
        },(idx+1)*80);
    });
    
    setTimeout(function(){
    subTit.style = "transform:translateY(0); transition:.5s;";
    },100);
    
    
// === a_00 show ======
    var a_00 = document.querySelector('.a_00 h2');
    setTimeout(function(){
        a_00.style = "opacity:1;"
    },500);
    
    var arrow = document.querySelector('.a_00 .arrow');
    setTimeout(function(){
        arrow.style = "opacity:1;"
    },500);

    
// === a_01 show ======
    var winH = window.innerHeight;
    var a01 = document.querySelector('.a_01');
    var a01Top = a01.offsetTop;
    var a01 = document.querySelector('.a_01 div');
    var a01TitTop = subTit.offsetTop;
    var a01Tit = document.querySelectorAll('.a_01 div p span');
    
    window.addEventListener('scroll', showA01Txt);
    
    function showA01Txt(){
        if((a01Top+a01TitTop - winH/1.5) < this.scrollY){
            a01Tit.forEach(function(el,idx){
                el.style = "transform: translateX(0); opacity:1; transition:.8s";
            });
        }
    }

// === image slide ======
    
    var imgBtn = document.querySelectorAll('.a_03 .img_btn li'); 
    var imgCon = document.querySelectorAll('.a_03 .img_slide figure');
    
    
//    imgCon.forEach(function(el,idx){
//        
//        setInterval(function(){
//            imgBtn[idx].classList.add('active');
//            el.classList.add('active');
//        },idx*1000);
//        
//    });
    
    
    
// === image click ======      
    $(imgBtn).click(showImg);
    
    function showImg(){
        
        removeAct();
        
        var tIdx = $(this).index();
        
        imgBtn[tIdx].classList.add('active');
        imgCon[tIdx].classList.add('active');
        
    }
    
    function removeAct(){
        for (var i = 0; i < imgBtn.length; i++) {
            imgBtn[i].classList.remove('active');
            imgCon[i].classList.remove('active');
        }
    }
    


    
    
// === image click ======   
    
//    for (let i = 0; i < imgBtn.length; i++) {
//        imgBtn[i].addEventListener('click', function () {
//            showImg(i);
//        });
//    }
//    function showImg(j) {
//        for (var i = 0; i < imgBtn.length; i++) {
//            imgBtn[i].classList.remove('active');
//            imgCon[i].classList.remove('active');
//        }
//        imgBtn[j].classList.add('active');
//        imgCon[j].classList.add('active');
//    }
    


    
});//end

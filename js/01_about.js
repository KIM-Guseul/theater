window.addEventListener('DOMContentLoaded', function () {
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
    
    
 

 
  
    

    
    

    
    

    
// === image click ======
    var imgBtn = document.querySelectorAll('.a_03 ul li');
    var imgCon = document.querySelectorAll('.a_03 div > div');

    for (let i = 0; i < imgBtn.length; i++) {
        imgBtn[i].addEventListener('click', function () {
            showImg(i)
        });
    }

    function showImg(j) {

        for (var i = 0; i < imgBtn.length; i++) {
            imgBtn[i].classList.remove('active');
            imgCon[i].classList.remove('active');
        }

        imgBtn[j].classList.add('active');
        imgCon[j].classList.add('active');

    }
    
    
    
        //    $(function () {
    //        $('.a_03 ul li').on('click', function () {
    //
    //            $('.a_03 ul li').removeClass('active');
    //            $(this).addClass('active');
    //
    //        });
    //
    //        //end
    //    });



    
});//end

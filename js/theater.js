//01_about======================================================

window.addEventListener('DOMContentLoaded', function () {
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


    //end
});



//03_venue======================================================
/*

window.addEventListener('DOMContentLoaded', function () {

    var conEle = document.querySelector('.v_01');
    var proEle = document.querySelectorAll('.v_01 .process');
    var proPos = [];
    var idx = 0;

    var proStart = document.querySelectorAll('.v_01 .process')[0];
    console.log(proStart.offsetTop)


    proEle.forEach(function (el) {
        proPos.push(el.offsetTop);
        //console.log(proPos)
    });



    var bln = true;

    window.addEventListener('scroll', function (m) {
        var winTop = this.scrollY;
        var winHei = this.innerHeight;

        if (bln) {
            if (proPos[0] - winHei < winTop && proPos[3] - 200 > winTop) {

                proPos.forEach(function (el, i) {
                    if (el - winHei < winTop) {
                        bln = false;
                        window.scrollTo({
                            left: 0,
                            top: el,
                            behavior: 'smooth'
                        }); //,behavior:'smooth'
                        setTimeout(function () {
                            bln = true;
                        }, 500)
                    }
                });
            }


        }





    });


});
*/

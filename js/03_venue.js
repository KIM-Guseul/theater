window.addEventListener('DOMContentLoaded', function () {
// === mousewheel event ===
    
    var conEle = document.querySelector('.v_01');
    var proEle = document.querySelectorAll('.v_01 .process');
    var proPos = [];
    var idx = 0;

    var proStart = document.querySelectorAll('.v_01 .process')[0];



    proEle.forEach(function (el) {
        proPos.push(el.offsetTop);
    });

    var bln = true,
        jj = 0,
        cs, proIdx = -1,
        last = 0,
        sd = "down",
        blen, aa;

    proEle.forEach(function (el) {

        el.addEventListener('mousewheel', function (e) {
            var winTop = this.scrollY;
            var winHei = this.innerHeight;
            var delta = e.wheelDeltaY;
            
            console.log(e);

            if(bln){
                bln=false;
                if (delta < 0) {
                    proIdx++;
                } else {
                    proIdx--;
                }

                setTimeout(function(){
                    window.scrollTo({
                        left:0,
                        top:proPos[proIdx],
                        behavior : 'smooth'
                    });
                    setTimeout(function(){ bln=true;},500);
                },20);
            }

            console.log(sd)
        });
    });




});

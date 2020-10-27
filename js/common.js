window.addEventListener('DOMContentLoaded', function () {

// === common area load ======
    
    $('.header').load('inc_head_foot.html header',menu);
    $('.c_04').load('inc_head_foot.html .c_04');
    $('footer').load('inc_head_foot.html footer');

    
    function menu(){
     
// === nav pop ===
        var btnMenu = document.querySelector('.menu-trigger');
        var navPop = document.querySelector('header .h_rt nav');

        btnMenu.addEventListener('click',function(){
            btnMenu.classList.toggle('active');
            navPop.classList.toggle('active');
        });
        
        
// === nav active ===
        var menu = document.querySelector('nav');
        menu.addEventListener('click',function(e){
            e.preventDefault();
            
            var link = e.target.getAttribute('href');
            var page = e.target.dataset.num;

            localStorage.page = page;
            location.href = link;
        });
        var page = localStorage.page;
        
        menu.children[page].classList.add('active');
        
    }

    
    
    
    
    
    
});//end



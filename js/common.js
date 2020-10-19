window.addEventListener('DOMContentLoaded', function () {
// === common area load ===
    $('.header').load('/inc_head_foot.html header',menu);
    $('.c_04').load('/inc_head_foot.html .c_04');
    $('footer').load('/inc_head_foot.html footer');

    
    function menu(){
        
// === nav pop ===
        var btnMenu = document.querySelector('.menu-trigger');
        var navPop = document.querySelector('header .h_rt nav');

        btnMenu.addEventListener('click',function(){
            btnMenu.classList.toggle('active');
            navPop.classList.toggle('active');
        });
        
// === nav addclass active ===
        var menu = document.querySelectorAll('nav a');
        
        for(let i = 0; i<menu.length; i++){
            menu[i].addEventListener('click',function(){
                var pageName = this.textContent;
                localStorage.page = pageName;
                menuActive(i);
            });
        }
        
        function menuActive(j){
            for( var i = 0; i<menu.length; i++){
                    menu[i].classList.remove('active'); 
            }
            menu[j].classList.add('active'); 
        }
        
    }
    
//    
//    var page = localStorage.page;
//    if(page == 'ABOUT') aa();
//    
//    switch(page){
//        case 'ABOUT': aa(); bleak;
//        case 'SERVICE': bb(); bleak;
//        case 'ABOUT': aa(); bleak;
//        case 'ABOUT': aa(); bleak;
//    }
//    
//    
//    p1
//        init1();
//        init2();
//        init3();
//        init4();
//    
    
    
    
    

    
    
    
    
    
    
    
    
});//end



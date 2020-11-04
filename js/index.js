window.addEventListener('DOMContentLoaded', function () {//start
    $.ajax({
        url:'data/show_data.json',
        type:'get',
        data:{},
        success:function(data){
                                 
            var order, title, date, url, tagList = '';
            
            conList();
            
            function conList(){
                
                data.list.forEach(function(value,key){
                    
                    order = value.order;
                    title = value.title;
                    date = value.date;
                    url = value.url;
                    
                    if(key<3){
                        tagList = "<li>";
                        tagList += "<a href='"+url+"'>";
                        tagList += "<p>"+order+"</p>";
                        tagList += "<div>";
                        tagList += "<h3>"+title+"</h3>";
                        tagList += "</div>";
                        tagList += "<p>"+date+"</p>";
                        tagList += "</a>";
                        tagList += "</li>";
                        
                        $('.li_show').append(tagList);
                    }

                });
                
                var aTag = '';
            
                aTag = "<li>";
                aTag += "<a href='02_show.html'>";
                aTag += "<div>";
                aTag += "<article><h3>MORE SHOW</h3></article>";
                aTag += "<p>→</p>";
                aTag += "</div>";
                aTag += "</a>";
                aTag += "</li>";
                
                $('.li_show').append(aTag);
                
            }
            c02(); // === c_02 show

        }
        
    });
    
//=== show title ======
    var title = document.querySelector('.title h1');
    var titleArr = title.textContent;
    
        title.innerHTML = '';
    
    for(var i = 0; i<titleArr.length; i++){
        var txt = '';
        
        txt += "<span>"+ titleArr[i] +"</span>";
        title.innerHTML += txt;
    }
    
    var titleEle = document.querySelectorAll('.title h1 span');
    
        titleEle.forEach(function(el,idx){
            setInterval(function(){
                el.style = "transform: translateX(0); transform: translateY(0); transform: rotate(0deg); opacity:1;"
            },idx*50);
        });
        

// === nav pop ======
    var btnMenu = document.querySelector('.menu-trigger');
    var navPop = document.querySelector('header nav');
    
    btnMenu.addEventListener('click',function(){
        btnMenu.classList.toggle('active');
        navPop.classList.toggle('active');
    });
    
    
// === nav show ======
    var navEle = document.querySelectorAll('header nav a');
    showNav();
    
    function showNav(){
        
        navEle.forEach(function(el,idx){
            setTimeout(function(){
                setInterval(function(){
                   el.style = "transform:translateY(0); transition:.5s;";
                },idx *60);

            },500);
        });
    }
    
// === nav addclass active ===
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
    
    
    var winH = window.innerHeight;
// === c_01 show ======
    var c_01 = document.querySelector('main .c_01');
    var c01Top = c_01.offsetTop;
    var c01Txt = c_01.querySelectorAll(' div p span');
    

    window.addEventListener('scroll', showC01Txt);

    function showC01Txt(){

        if(c01Top - winH/1.5 < this.scrollY){

            c01Txt.forEach(function(el,idx){
                
                setInterval(function(){
                    el.classList.add('active');
                },idx*100 + 50);
            });
        }
    }
    
    
// === c_02 show ======
    
    function c02(){
        
        var c_02 = document.querySelector('main .c_02');
        var c02Top = c_02.offsetTop;
        var c02Txt = c_02.querySelectorAll('.li_show li');

        window.addEventListener('scroll', showC02Txt);

        function showC02Txt(){
            c02Txt.forEach(function(el,idx){

            var c02TxtTop = el.offsetTop;

                if((c02TxtTop + c02Top) - winH/1.3 < this.scrollY){
                    el.classList.add('active');
                }
            });
        }
    }
    
    




    


    
    
    
    
    
    
    
    
});

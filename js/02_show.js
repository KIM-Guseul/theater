window.addEventListener('DOMContentLoaded', function () {
// === json call ======
    
    $.ajax({
        url:'data/show_data.json',
        type:'get',
        data:{},
        success:function(data){

            var order, title, url,imgSrc, tagList = '';
            
            function conList(){
                
                data.list.forEach(function(value,key){
                
                    order = value.order;
                    title = value.title;
                    url = value.url;
                    imgSrc = value.imgSrc;

                    tagList += "<li>";
                    tagList += "<div><img src='"+imgSrc+"'></div>";
                    tagList += "<a href='"+ url +"'>";
                    tagList += "<span>"+ order +"</span>";
                    tagList += "<h3>&nbsp;<span>"+title+"</span>&nbsp;</h3>";
                    tagList += "</a>";
                    tagList += "</li>";
                });
                
                $('.s_01 ul').html(tagList);
            }
            
            conList();
            
            
// === title flow ======
        var showTitle = document.querySelectorAll('.s_01 ul li a h3');
        var direction=0;
        var a = '';
            
        function flow(){
            
            direction += 5;
            
            showTitle.forEach(function(el,idx){
                
//                console.log(el.children[0].offsetWidth);
//                console.log(showTitle[2].children[0]);
                
                
                if((idx+1) % 2 == 0){//짝수번째
                    
                    el.style = "transform:translateX(-"+direction+"px); ";
                
                    
                }else{//홀수번째
                    
                    el.style = "transform:translateX("+direction+"px); ";
                    
                }
                
    
            });

            
//            el.style.setProperty('transform', 'translateX(' + direction + 'px)');
          
            a = requestAnimationFrame(flow);
//            cancelAnimationFrame(a)
        }
            
        flow();
            
         
            
            
        }
    });
    
    

});//end

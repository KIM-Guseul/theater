window.addEventListener('DOMContentLoaded', function () {
    
// === show title ======
    var h1 = document.querySelectorAll('.subject h1 span');
    var h2 = document.querySelectorAll('main h2');

    h1.forEach(function(el,idx){
        setInterval(function(){
            el.style = "transform:translateY(0); transition:.5s;";
        },(idx+1)*100);
    });  
    
    h2.forEach(function(el,idx){
        setTimeout(function(){
            el.style = "opacity:1; transition:1s;"
        },300);
    });
    
// === json call ======
    $.ajax({
        url:'data/show_data.json',
        type:'get',
        data:{},
        success:function(data){

//=== show conList ======
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
                tagList += "<h3><span>&nbsp;"+title+"&nbsp;</span></h3>";
                tagList += "</a>";
                tagList += "</li>";
            });

            $('.s_01 ul').html(tagList);
        }

        conList();
            
            
// === show title flow ======
        var showTitle = document.querySelectorAll('.s_01 ul li a h3');
        var direction=0;
        var elW,af = '';


            
        function flow(){
            direction += 5;
            
            showTitle.forEach(function(el,idx){
                elW = el.children[0].offsetWidth;
                
                if(direction <= elW){
                    console.log('ing');
                    
                    if((idx+1) % 2 == 0){//짝수번째
                        el.style = "transform:translateX(-"+direction+"px); ";
                    }else{//홀수번째
                        el.style = "transform:translateX("+direction+"px); ";
                    }
                    
                }else{
                    console.log('end');
                }
                
                console.log(direction+'D');
                console.log(elW+'W');
                
                
            });
            
            
//            el.style.setProperty('transform', 'translateX(' + direction + 'px)');
            
            af = requestAnimationFrame(flow);
            
            cancelAf();

            function cancelAf(){
                showTitle.forEach(function(el,idx){

                    elW = el.children[0].offsetWidth;

                        if(elW < direction) {
                            console.log('bb');
                            cancelAnimationFrame(af);
                        }
                });

            }
            
            
            
        }
            
        flow();

            
        
            
         
           
            
            
            
            
        }
    });

    
    
    

});//end

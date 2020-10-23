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
        } conList();

            
// === show title flow ======
        var showTitle = document.querySelectorAll('.s_01 ul li a h3');
        var elW=[],af = '';
            
        showTitle.forEach(function(el,idx){
            elW.push(el.children[0].offsetWidth);
            
            var clone = el.querySelector('span').cloneNode(true);
            var clone2 = el.querySelector('span').cloneNode(true);
            var clone3 = el.querySelector('span').cloneNode(true);
            
            el.append(clone);
            el.children[1].style="left:"+elW[idx]+"px";
            
            el.append(clone3);
            el.children[2].style="left:"+elW[idx]*2+"px";

            el.prepend(clone2);
            el.children[0].style="left:-"+elW[idx]+"px";                    
            
            flow(el,idx);
        });
            
            
        function flow(el,idx){
            var direction={sx:0,x:0,speend:'0s'};
            
            function ani(){
                direction.sx += 1.5;

                if(direction.sx <= elW[idx]){
                    if((idx+1) % 2 == 0){//짝수번째
                        direction.x = '-'+direction.sx;
                    }else{//홀수번째
                        direction.x = direction.sx;
                    }
                }else{
                    direction.x=0;
                    direction.sx=0;
                }
               
                el.style = "transform:translateX("+direction.x+"px)";
                af = requestAnimationFrame(ani);
            }
            ani();
        }
        
            

            
        }
    });

    
});//end

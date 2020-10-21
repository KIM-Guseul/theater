window.addEventListener('DOMContentLoaded', function () {
//    $('.s_01').load('02_show.html .s_01');
    
    // === json call ======
    $.ajax({
        url:'data/show_data.json',
        type:'get',
        data:{},
        success:function(data){

            var order,title,name,imgSrc,date,price,seat,grade,time,host,subject,url, tagList = '';
            
            function conList(){
                
                data.list.forEach(function(value,key){
                
                    order = value.order;
                    title = value.title;
                    url = value.url;
                    tagList +="<ul>";
                    tagList += "<li>";
                    tagList += "<a href='"+ url +"'>";
                    tagList += "<span>"+ order +"</span>";
                    tagList += "<h3>"+ title +"</h3>";
                    tagList += "</a>";
                    tagList += "</li>";
                    tagList +="</ul>"
                });
                
                $('.s_01').html(tagList);
            }
            
            conList();
        }
    });
    
    
});//end

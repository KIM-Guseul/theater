window.addEventListener('DOMContentLoaded', function () {
// === json call ======
    
    $.ajax({
        url:'data/show_data.json',
        type:'get',
        data:{},
        success:function(data){

            var order, title, url, tagList = '';
            
            function conList(){
                
                data.list.forEach(function(value,key){
                
                    order = value.order;
                    title = value.title;
                    url = value.url;
                    
                    tagList += "<li>";
                    tagList += "<a href='"+ url +"'>";
                    tagList += "<span>"+ order +"</span>";
                    tagList += "<h3>"+ title +"</h3>";
                    tagList += "</a>";
                    tagList += "</li>";
                    
                });
                
                $('.s_01 ul').html(tagList);
            }
            
            conList();
        }
    });
    


});//end

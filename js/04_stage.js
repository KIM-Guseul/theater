window.addEventListener('DOMContentLoaded', function(){
// === call pstage_data ======
    $.ajax({
        url:'data/pstage_data.json',
        type:'get',
        data:{},
        success:function(data){
            
// === schedule ======
    
    var calender,schedule = '';
    var year, month, day, artist, time;
            
    // === funCal ======
    var today = new Date();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(mm<10){mm = '0'+mm;}
    
    function funCal(){
        var d = new Date('y-m-d');
        calender ="<div>";
        calender +="<a>←</a>";
        calender +="<span>"+yyyy+" . "+mm+"</span>";
        calender +="<a>→</a>";
        calender +="</div>";

        $('.schedule').html(calender);
    }funCal();// show calender 
            
    data.schedule.forEach(function(value,key){
        year = value.year;
        month = value.month;
        day = value.day;
        artist = value.artist;
        time = value.time;
        
        $('.schedule').append(schedule);
        
        if(yyyy == year && mm == month){
            schedule+= "<p><b>date</b> : "+year+".&nbsp"+month+".&nbsp"+day+"</p>";
            schedule+= "<p><b>artist</b> : "+artist+"</p>";
            schedule+= "<p><b>time</b> : "+time+"</p><br>";
        }else{
            schedule = "<p>일정이 없습니다.</p>";
        }
    });
   
// === select date ======
    
    var mBtn = $('.schedule div a');

    $(mBtn).click(selectM);

        function selectM(){
            var sIdx = $(this).index();

            if(sIdx == 0){
                console.log(--mm)
                
                
            }else{
                console.log(++mm)
            }

        }


    }
    });
    
    


    
// === show title ====== 
    var h1 = document.querySelectorAll('.subject h1 span');
    
    h1.forEach(function(el,idx){
        setInterval(function(){
            el.style = "transform: translate(0,0); opacity: 1; transition:.8s;"
        },(idx+1)*100);
    });
    
    var h2 = document.querySelector('.p_01 h2');
    setTimeout(function(){        
        h2.style = "opacity:1; transition:1s;"
    },400);
    
    var intro = document.querySelector('.p_01 .intro');
    setTimeout(function(){        
        intro.style = "opacity:1; transition:1s;"
    },500);

    

    
    
    
    
    
    
    
    
    
    
});

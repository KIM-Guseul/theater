window.addEventListener('DOMContentLoaded', function(){
// === call pstage_data ======
    $.ajax({
        url:'data/pstage_data.json',
        type:'get',
        data:{},
        success:function(data){
            
// === .schedule ======
    
    var calender,schedule = '';
    var year, month, day, artist, time;
            
            
// === show date ======
    var today = new Date();
    var mmList = [1,2,3,4,5,6,7,8,9,10,11,12];
            
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(mm<10){mm = '0'+mm;}
            
    var mmSelect = new Date();
            
    
    function funCal(){
        var d = new Date('y-m-d');
        calender ="<div>";
        calender +="<a>←</a>";
        calender +="<span>"+yyyy+" . "+mm+"</span>";
        calender +="<a>→</a>";
        calender +="</div>";

        $('.schedule').html(calender);
    }funCal(); 
       
            
// === select date ======
    
    var mBtn = $('.schedule div a');

    $(mBtn).click(selectM);

        function selectM(){
            var sIdx = $(this).index();

            if(sIdx == 0){//전월
                console.log(--mm);
       
            }else{//익월
                console.log(++mm);
                
            }
        }
            
            
//=== show schedule ======
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

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
            
        data.schedule.forEach(function(value,key){
            year = value.year;
            month = value.month;
            day = value.day;
            artist = value.artist;
            time = value.time;
            
            funCal();// show calender 
            
            schedule+= "<p><b>date</b> : "+year+".&nbsp"+month+".&nbsp"+day+"</p>";
            schedule+= "<p><b>artist</b> : "+artist+"</p>";
            schedule+= "<p><b>time</b> : "+time+"</p><br>";
            
            $('.schedule').append(schedule);

//        schedule = "<p>일정이 없습니다.</p>";
//    $('.schedule').append(schedule);
        });//call data successful
            
// === select month ======
    
        var mBtn = document.querySelectorAll('.schedule div a');
            
            
        $(mBtn).click(selectMon);
            
        function selectMon(){
            
            var sIdx = $(this).index();
            console.log(this);
            console.log(sIdx);

            
            mBtn.forEach(function(el,idx){
//                
//            console.log(el);
//            console.log(idx);
//                
            });
    


        
        }
                

    

    }
    });
    
    
    function funCal(){
        calender ="<div>";
        calender +="<a>←</a>";
        calender +="<span>2020 .12</span>";
        calender +="<a>→</a>";
        calender +="</div>";

        $('.schedule').html(calender);
    }
    
    



    
    
    
    
    
    
// === show title ====== 
    var h1 = document.querySelectorAll('.subject h1 span');
    
    h1.forEach(function(el,idx){
        setInterval(function(){
            el.style = "transform: translate(0,0); transition:.8s;"
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

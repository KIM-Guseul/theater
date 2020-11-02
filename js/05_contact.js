window.addEventListener('DOMContentLoaded', function(){
// === show title ======
    var h1 = document.querySelectorAll('.subject h1 span');
    
    h1.forEach(function(el,idx){
        setInterval(function(){
            el.style = "transform: translate(0,0); transition:.8s;"
        },(idx+1)*100);
    });
    
// === reg_ex ======
    var nameCheck = /^[가-힣]{2,6}$/;
    var emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    var phonNumberCheck = /^01[0179][0-9]{7,8}$/;

    $('.t_01 p').on('click', funCheck);
    
    function funCheck(){
        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val();
        var phon = $('input[name=phon]').val();
        var message = $('input[name=message]').val();
        
        $('input').css('border','2px solid #303030');
        
        function feedback(el){
            $('input[name='+el+']').css('border','2px solid #bd162c');
            $('input[name='+el+']').val('');
        }
        
        if(!nameCheck.test(name)){
            feedback('name'); return;
        }
        if(!emailCheck.test(email)){
            feedback('email');return;
        }
        if(!phonNumberCheck.test(phon)){
            feedback('phon');return;
        }
        if(message == ''){
            feedback('message');return;
        }
        
    }
    

    
    
    
    
    
    
    
});

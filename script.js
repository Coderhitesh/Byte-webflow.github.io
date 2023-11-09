$('.toggle').click(()=>{
    $(".mob-header ul").toggleClass('mob-toggle')
    // $(".mob-header ul").slideToggle()
})

function client(){
    let i = 0;
    $('.left-btn').click(()=>{
        if(i==0){
            $('.client-1').css('display' , 'none');
            $('.client-2').css('display' , 'none');
            $('.client-3').css('display' , 'flex');
            i = 2;
            console.log(i);
        }
        else if(i==1){
            $('.client-1').css('display' , 'flex');
            $('.client-2').css('display' , 'none');
            $('.client-3').css('display' , 'none');
            i--;
            console.log(i);
        }
        else{
            $('.client-1').css('display' , 'none');
            $('.client-2').css('display' , 'flex');
            $('.client-3').css('display' , 'none');
            i--;
            console.log(i);
        };
    });
    $('.right-btn').click(()=>{
        if(i==0){
            $('.client-1').css('display' , 'none');
            $('.client-2').css('display' , 'flex');
            $('.client-3').css('display' , 'none');
            i++;
            console.log(i);
        }
        else if(i==1){
            $('.client-1').css('display' , 'none');
            $('.client-2').css('display' , 'none');
            $('.client-3').css('display' , 'flex');
            i++;
            console.log(i);
        }
        else{
            $('.client-1').css('display' , 'flex');
            $('.client-2').css('display' , 'none');
            $('.client-3').css('display' , 'none');
            i = 0;
            console.log(i);
        };
    })
};

client();
$(document).ready(function(){


    $('p').click(function(){
       $(this).hide()
    })


    $('.hide').click(function(){
        $(this).hide()
    })

    $('.pluto').click(function(){
        $('#uranus').hide()
    })

    $('#uranus').click(function(){
        $('.pluto').hide()
    
    })

    $('.hiddenText').hide()

    $('#showText').click(function(){
        $('.hiddenText').hide()
    })

    $('.hideText').click(function(){
        $('hiddenText').hide()
    })

    $('#toogle').click(function(){
        $('.hiddentext').toggle()

        if($(this).text() == 'Show'){
            $(this).text('Hide')
        }else{
            $(this).text('Show')
        }
    })

    $('.alertName').hide()
    $('#name').blur(function(){
        $('.alertName').show()
    })

    $('.moveRightButton').click(function(){
        $('.box').animate({
            marginLeft: '300px',
            width: '400px',
            height: '400px'
        },200)
    })
    $('.moveLeftButton').click(function(){
        $('.box').animate({
            marginLeft: '8px',
            width: '200px',
            height: '200px'
        },200)
    })

    $('inputTerm').click(function(){
        if($(this.checked)){
            $('.btnSubmit').addClass('active')
        }else{
            $('.btnSubmit').removeClass('active')
        }    
        
    })

    //PRODUCT TAB
    $('.productItem').hide()
    $('.productItem:first').show()
    $('.colorItem a:not(:first)').addClass('inactive')
    
    $('.colorItem a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('.colorItem a').addClass('inactive')
            $(this).removeClass('inactive')
        }

    })
})
$(document).ready(function() {
    $('mobile_btn').on('click', function(){}
    $('mobile_btn').toggeClass('active');
    $('mobile_btn').find('i').toggleClass('fa-x');
});
const sections = $('section');
const naItems = $ (' nav-item');

$(window).on('scroll',function(){
    const header = $ ('header');
    const scrollPosition = $ ( whindow).scrolltop() - header. outerHeight();

    let activeSectionIndex = 0;

    if(scrollPosition<= 0) {
        header.css('box-shadow', 'none');
    } else{
        header.css('box-shadow', '5px 1px 5px) rgba(0 ,0 ,0 , 0.1)');
    }
    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();

        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
            activeSectionIndex = i ;
            return false
        }
    });
    naItems.removeClass('active');
    $(naItems[activeSectionIndex]).addClass('active');
});

    /**animação */
    ScrollReaveal().reaveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    
    ScrollReaveal().reaveal('#.burguer',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReaveal().reaveal('#testimonial_burguer',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
});
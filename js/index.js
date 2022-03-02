$(document).ready(function(){
    $('#menu-btn').click(function(event){
        $('#navbar').toggle(500).css('display', 'flex');
    });

    $(window).resize(function(){
        // if ($(this).width() >= 768) {
        //     location.reload();
        // }
        if(window.innerWidth == 768 || window.innerWidth == 770)
        location.reload();
    })

    $('#search-btn').click(function(){
        $('#search-input').show();
        $('#search-btn').hide();
    })
    
});


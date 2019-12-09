$(document).ready(()=>{
    let $li = $('.sidebar-nav > ul > li')
    $li.removeClass('active').children('ul').hide()
    $li.on('click',function(){
        $this = $(this)
        $this.toggleClass('active').children('ul').slideToggle('fast');
    })
});
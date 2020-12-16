//event pada saat link di klik

$('.page-scroll').on('click', function(event){
    //ambil href
    var tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(tujuan);
    //pindah scroll
    $('html,body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1500, 'easeInOutExpo');

    event.preventDefault();

});
$(document).ready(function() {
    // run function on initial page load
    demoFunction();
     
    // run function on resize of the window
    $(window).resize(function() {
       
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
 
function demoFunction() {
   $('.title').dblclick(function()
   {
        $('body').removeClass('body1');
        $('body').removeClass('body2');
        $('body').removeClass('body3');
        $('body').removeClass('body4');
        $('body').removeClass('body5');
        $('p').removeClass('whitetext');;
   });
   $('.no1').click(function()
   {
        $('body').addClass('body1');
        $('body').removeClass('body2');
        $('body').removeClass('body3');
        $('body').removeClass('body4');
        $('body').removeClass('body5');
        $('p').addClass('whitetext');;
   });
    $('.no2').click(function()
   {
        $('body').addClass('body2')
        $('body').removeClass('body1');
        $('body').removeClass('body3');
        $('body').removeClass('body4');
        $('body').removeClass('body5');
        $('p').addClass('whitetext');
   });
    $('.no3').click(function()
   {
        $('body').addClass('body3')
        $('body').removeClass('body2');
        $('body').removeClass('body1');
        $('body').removeClass('body4');
        $('body').removeClass('body5');
        $('p').addClass('whitetext');
   });
    $('.no4').click(function()
   {
        $('body').addClass('body4');
        $('body').removeClass('body2');
        $('body').removeClass('body3');
        $('body').removeClass('body1');
        $('body').removeClass('body5');
        $('p').addClass('whitetext');
   });
    $('.no5').click(function()
   {
        $('body').addClass('body5');
        $('body').removeClass('body2');
        $('body').removeClass('body3');
        $('body').removeClass('body4');
        $('body').removeClass('body1');
        $('p').addClass('whitetext');
   });


    $('.no1').hover(function()
    {
        $('.header').toggleClass('text1');
        $('.no1').toggleClass('text1');
    });
   $('.no2').hover(function()
    {
        $('.header').toggleClass('text2');
        $('.no2').toggleClass('text2');
    });
   $('.no3').hover(function()
    {
        $('.header').toggleClass('text3');
        $('.no3').toggleClass('text3');
    });
   $('.no4').hover(function()
    {
        $('.header').toggleClass('text4');
        $('.no4').toggleClass('text4');
    });
   $('.no5').hover(function()
    {
        $('.header').toggleClass('text5');
        $('.no5').toggleClass('text5');
    });


}
/*------------- #General --------------*/


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('a[href="#"]').click(function ($) {
        $.preventDefault();
    });



/*------------- # Fix 100vh viewport bug on mobile devices --------------*/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*------------- #loading-overlay-btn function  --------------*/
$('.loading-btn ').each(function(){
    
    var btn = $(this);
    btn.on("click" , function(){
        
        btn.addClass('loading-overlay');
        setTimeout(function() {
          btn.removeClass('loading-overlay');
          btn.toggleClass('active')
        }, 1000);

    });
    
});
/*------------- #panel-responsive-items --------------*/

$(function(){
    
    $(".panel-responsive-btn").click(function(){
        
        let current_item_attr = $(this).attr("data-target"),
            current_item = $(".panel-responsive-item."+current_item_attr);
            
        if($(this).hasClass("panel-responsive-open")){
            
            current_item.addClass("active");
            if(current_item.hasClass("noScroll")){
                
                $("body").attr("data-panel", "noScroll");
            }
            if(!current_item.hasClass("no-overlay")){
                
                $(".side-overlay").addClass("active");
            }
            
            
            
        }
        if($(this).hasClass("panel-responsive-close")){
            
        
            $(".panel-responsive-item").removeClass("active");
            $("body").removeAttr("data-panel"); 
            $(".side-overlay").removeClass("active");
            
            
        }
        
    });
    
    
});

/*------------- #header functions --------------*/

$(window).scroll(function() {
          
        if ($(this).scrollTop() > 0) {
            $('.top-nav').addClass("scroll")
        } else {
            $('.top-nav').removeClass("scroll");
            

        }
});

$(".h-menu").click(function () {
         
         var current_dropdown = $(this).attr("data-target");
    
            if (window.matchMedia('(min-width: 992px)').matches) {
        
                   if ($(this).hasClass('show')) {

                       $(this).removeClass("show");
                       $("." + current_dropdown).fadeOut(250).removeClass("show");
             
                   }else {

                        $(".h-menu").removeClass("show");
                        $(this).addClass("show");

                        $(".dropdown-list").fadeOut(250).removeClass("show");
                        $("." + current_dropdown).fadeIn(250).addClass("show");
                    
                    }
           
                }else{
                    
                    if ($(this).hasClass('show')) {

                       $(this).removeClass("show");
                       $("." + current_dropdown).slideUp(250).removeClass("show");
             
                    }else {

                        $(".h-menu").removeClass("show");
                        $(this).addClass("show");

                        $(".dropdown-list").slideUp(250).removeClass("show");
                        $("." + current_dropdown).slideDown(250).addClass("show");
                    
                    }
                    
                    /*
                    $(this).toggleClass("show");
                    $("." + current_dropdown).slideToggle(250).toggleClass("show");
                    */
                    
                }

      
         

     });
      
$(document).click(function (e) {

        if (window.matchMedia('(min-width: 992px)').matches) {
            
            if (!(($(e.target).closest('.dropdown-list').length > 0) ||

                 ($(e.target).closest('.h-menu').length > 0))) {

                    $(".h-menu").removeClass("show");
                    $(".dropdown-list").fadeOut(250).removeClass("show");
            }
            
        }
         
             
});

/*------------- #tabs functions --------------*/

$(function () {
    
    
	$(".tabs-content-area .tab-btn").click(function(e){
         
        e.preventDefault();
        let current_tab = $(this).attr("data-target"),
            tabs_area =  $(this).closest('.tabs-content-area');
        
        $(this).closest('.tabs-parent').find('.tab-btn').removeClass("active");
        $(this).addClass("active");
        tabs_area.find('.tab-content').hide().removeClass("active");
    
        if($(this).hasClass("hide-items-tab")){
            
            tabs_area.find("."+current_tab+"_none").hide();
        }else{
            
            tabs_area.find(".hide_item").fadeIn();
        }
        
        $("."+current_tab).fadeIn();

     
        
    });
});

/*------------- #accordion   --------------*/

$(function(){
    
    
    $(".panel-item .accordion_header").click(function(){
        
        let $parent = $(this).closest(".panel-item"),
            $body = $(this).closest(".panel-item").find(".accordion_body");
        
        $(this).closest(".one-panel").find(".accordion_body").not($body).slideUp(300).parent().removeClass('active');
        
        if($parent.hasClass("active")){
            
            $parent.removeClass("active ");
            $body.slideUp(300);
            
        }else{
            
             $parent.toggleClass("active");
             $body.slideToggle(300);
             
        }
       
		
  });
    
    
});

/*------------- #checkOverflown--------------*/

$(function(){
    $('.scroll-list').each(function(){

        let item =$(this),
            scroll_width = $(this)[0].scrollWidth,
            client_width = $(this)[0].clientWidth;


        if(scroll_width > client_width){

            item.addClass("scrolled")
            
        }else{

            item.removeClass("scrolled");
            
        }
    });
});

/*------------- #active_toggle_items--------------*/

$('.active_toggle_item').on('click' ,function(){
        
       let item = $(this),
           itemParent = $(this).closest(".active_toggle_items"),
           items = $('.active_toggle_item');
         
      if(itemParent.hasClass("only_active_item")){
          
          itemParent.find(items).not(item).removeClass("active");
          item.toggleClass("active");
          
      }
    
     if(itemParent.hasClass("active_added_item")){
          
          item.addClass("active");
      }else{
          
          item.toggleClass("active");
      }
        
});
 
$(".display_toggle_item").click(function(){
      
    let item = $(this),
        itemWrapper = $(this).closest(".toggle_item_wrapper"),
        itemParent = $(this).closest(".display_toggle_items"),
        itemsParent = $('.display_toggle_items');
    
    itemWrapper.find(itemsParent).not(itemParent).addClass("hide-item");    
    if(!item.hasClass("hide-item")){
                
        $(this).addClass("hide-item");
        itemParent.find(".hide-item").not($(this)).removeClass("hide-item");
                
    }else{
        
        $(this).removeClass("hide-item");
        itemParent.find(".hide-item").not($(this)).addClass("hide-item");
    }
    
});


/*------------- #ripple btns--------------*/
/*
let ripple_btn = document.querySelectorAll(".btn-hover-ripple");
ripple_btn.forEach(items =>{

    items.onmousemove = function(e){

        const x = e.pageX - items.offsetLeft;
        const y = e.pageY - items.offsetTop;
        items.style.setProperty('--x' , x + 'px');
        items.style.setProperty('--y' , y + 'px');
    }

});
        
*/
const btn = document.querySelectorAll(".btn-hover-ripple");

btn.forEach(items =>{
        
        let ripple;

        items.addEventListener("mouseenter", (e) => {
          const left = e.clientX - e.target.getBoundingClientRect().left;
          const top = e.clientY - e.target.getBoundingClientRect().top;

          ripple = document.createElement("div");
          ripple.classList.add("ripple");
          ripple.style.left = `${left}px`;
          ripple.style.top = `${top}px`;
          items.prepend(ripple);
        });
        items.addEventListener("mouseleave", () => {
          ripple.classList.add("remove"); 
          setTimeout(function(){
            items.removeChild(ripple);
         }, 150);

        });

             
});



/*------------- #scroll-top btn   --------------*/

$(window).scroll(function() {
          
        if ($(this).scrollTop() > 200) {
            $('.scrollup').addClass("show");
            $('.whatsapp-popup').addClass("show")
        } else {
            $('.scrollup').removeClass("show");
            $('.scrollup').removeClass("active");
            $('.whatsapp-popup').removeClass("show");

        }
    });

$('.scrollup').click(function(e){

    e.preventDefault(); 
    
    $(this).addClass('active');
    $('html,body').animate({

        scrollTop:0},1000);
    
     document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
     setTimeout(function() { 
         
       document.documentElement.style.setProperty('scroll-behavior', 'smooth');
         
    }, 1000);
        
    
});

 
/*------------- #show and hide password   --------------*/
   
$('.password-field .eye-icon').on('click' , function(){
       
        
       var password_input = $(this).parent().find(".password-input");
         console.log(password_input);
         
       if(password_input.attr('type') === 'password'){
           
           password_input.attr('type' , 'text');
           $(this).addClass('hide');
           
       }else{
           
           password_input.attr('type' , 'password');
           $(this).removeClass('hide');
       }
          
          
    });



/*------------- #whatsapp  popup   --------------*/
      
$(function(){

    var today = new Date();
    var whatsapp_chat = $('.whatsapp-chat');
    var currentTime = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    $("#currentTime").html(currentTime);
    
    $('.whatsapp-btn').click(function(){

       $('.whatsapp-btn .Bubble__Notification').fadeOut();
        
         
       if($('.whatsapp-popup').hasClass('active')){
              
           $('.whatsapp-popup').removeClass("active");
            $(this).removeClass('active');
            whatsapp_chat.fadeOut(300).removeClass("show");
           
        }else{
                  
            $('.whatsapp-popup').addClass("active");
            $(this).addClass('active');
            whatsapp_chat.fadeIn(300).addClass("show");
            
            }

      }); 
    $('.whatsapp-popup .close-popup').click(function(){

       $('.whatsapp-popup').removeClass("active");
       whatsapp_chat.fadeOut(300);
        


      }); 
            
});
    
    
/*------------- # navbar-link scroll --------------*/

let navbar_height = document.getElementById("header").clientHeight;

$(".scroll-link").on('click' , function(e) {
    
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    var pos = $id.offset().top - navbar_height;
    $('body, html').animate({scrollTop: pos} , 1000);
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
});



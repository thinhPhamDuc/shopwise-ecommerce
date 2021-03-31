// ===========1, Show menu === 

let button =document.querySelector('.header .header__menu .header__menu-button');
let menulist = document.querySelector('.header .header__menu .header__menu-list .list__items ');
button.addEventListener('click',function()
{
    menulist.classList.toggle('show');
    button.classList.toggle('change');
})
// =============2,Drop Menu =========

let dropdown=Array.from(document.querySelectorAll(".dropdown"));
let contents =document.querySelectorAll(".dropdown .dropdown__menu");

dropdown.forEach(function(item){
    item.addEventListener('click', function(e){
        e.stopPropagation();
        this.lastElementChild.classList.toggle('show');
    })
})
 window.addEventListener("click", function(){
         if (!event.target.matches('.dropdown')){
            for (let i = 0; i < contents.length; i++) {
                contents[i].classList.remove("show");
            }
         }
    });
////////////// search//////////////
	const btnOpenSearch = document.querySelector('.search_trigger');
	const searchWrap = document.querySelector('.search_wrap');
	const searchOverLay = Array.from(document.querySelectorAll('.search_overlay'));
	const searchClose = document.querySelector('.close-search');

	btnOpenSearch.addEventListener('click', function() {
		searchWrap.classList.add('open');
		for (let i = 0; i < 3; i++) {
			searchOverLay[i].classList.add('open');
		}
	});

	searchClose.addEventListener('click', function() {
		searchWrap.classList.remove('open');
		for (let i = 0; i < 3; i++) {
			searchOverLay[i].classList.remove('open');
		}
	});
	//========================



// /-------header-------

var bottom = document.querySelector('.icon__list-item');
var menuList = document.querySelector('.icon__list-none');
bottom.addEventListener('click',function(){
    menuList.classList.toggle('show')
})
var curency = document.querySelector('.icon__curency-item');
var listMenu = document.querySelector('.icon__curency-none')
curency.addEventListener('click',function(){
    listMenu.classList.toggle('menu')
})

// ----------loading Page---------
$(window).on("load", function (event) {
  $(".loading-page").delay(1000).fadeOut(300);
});
// -------Modal---Reload
$('#modal-reload').modal({
  show: true
})

// ----------- Modal An vi ----------- 

$("#zoompro").elevateZoom({
    gallery: "gallery",
    galleryActiveClass: "active",
    zoomWindowWidth: 300,
    zoomWindowHeight: 100,
    scrollZoom: true,
    zoomType: "lens",
    lensShape: "round"
});

/* --------------------------------------------------------
    on click quantity
* -------------------------------------------------------*/
$(".plus").on('click', function () {

    var qty = $(".qty");

    if (qty.val() < $(this).data("max")) {

        qty.val(parseInt(qty.val()) + 1, 10);
    }
});

$(".minus").on('click', function () {

    var qty = $(".qty");

    if (qty.val() > $(this).data("min")) {

        qty.val(parseInt(qty.val()) - 1, 10);
    }
});

//===== Pagination active =====//
  $(document).ready(function () {
    $(".switch__color span").click(function () {
      $("span").removeClass("active");
      $(this).addClass("active");
    });
  });
// ============ SWitch Size  
   $(document).ready(function () {
    $(".switch__size .size__item").click(function () {
      $(".size__item").removeClass("active");
      $(this).addClass("active");
    });
  });


//**================== 4, Back to top ==================== **//
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
// Product-List

$('.right__view-icon').on('click',function() {
		if ($(this).hasClass('grid')) {
			$('.shop-container').removeClass('list').addClass('grid');
			$(this).addClass('active').siblings().removeClass('active');
		}
		else if($(this).hasClass('list')) {
			$('.shop-container').removeClass('grid').addClass('list');
			$(this).addClass('active').siblings().removeClass('active');
        }
        $(".shop-container").append('<div class="loading"><div class="mfp-preloader"></div></div>');
		setTimeout(function(){
			$('.loading').remove();
		}, 800);
    });
//Product Color JS
$('.info__switch-color span').each(function() {
	var get_color = $(this).attr('data-color');
	$(this).css("background-color", get_color);
});

$('.info__switch-color span,.product_size_switch span').on("click", function() {
	$(this).siblings(this).removeClass('active').end().addClass('active');
});
//Owl carosel Our-client
 $(document).ready(function() {
	            $('.testimonial__wrap').owlCarousel({
                    loop         : true,
                    margin       : 10,
                    items        : 1,
                    nav          :true,
                    navText      : ["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
                    responsive   : {
                        0    : {
                            items    : 1,
                            margin   : 10
                        },
                        600  : {
                            items    : 1,
                            margin   : 10
                        },
                        1000 : {
                            items    : 1
                        }
                    }
                });
            });
// owl carosel Feature
 $(document).ready(function() {
	            $('.featured__product-style').owlCarousel({
                    loop         : true,
                    margin       : 10,
                    items        : 1,
                    dots : false,
                    nav          : true,
                    navText      : ["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
                    responsive   : {
                        0    : {
                            items    : 1,
                            margin   : 10
                        },
                        600  : {
                            items    : 3,
                            margin   : 10
                        },
                        1000 : {
                            items    : 4
                        }
                    }
                });
            });

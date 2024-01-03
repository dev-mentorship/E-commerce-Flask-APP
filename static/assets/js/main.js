/*********************************************************************************
 Template Name: Hema Multipurpose eCommerce Bootstrap 5 Template
 Description: A perfect template to build beautiful and unique Fashion websites. It comes with nice and clean design.
 Version: 2.0
 **********************************************************************************/


/* =======================================================================
 Table of Content:
 
 1. Preloader Loading
 2. Sticky Header
 3. Mobile Main Menu
 4. Vertical Categories Menu
 5. Setting Box dropdown
 06. Language Picker
 07. Currency Picker
 08. Quantity Plus Minus
 09. Timer Count Down
 10. Color Swacthes
 11. Show hide Product Tags
 12. Show hide Product Filters
 13. Slick Slider
 13.1 Homepage Slideshow
 13.2 Promobar Slider 1 Items
 13.3 Top Bar Slider
 13.4 Sidebar Product
 13.5 Sidebar Product
 13.6 Category Image 3 Items
 13.7 Collection Slider 3 Items
 13.8 Collection Slider 4 Items
 3.9 Collection Slider 5 Items
 13.10 Collection Slider 6 Items
 13.11 Collection Slider 8 Items
 13.12 Products Slider 3 Items
 13.13 Products Slider 4 Items
 13.14 Products Slider 5 Items
 13.15 Logo Slider 6 Items
 13.16 Testimonial Slider 1 Items
 13.17 Testimonial Slider 2 Items
 13.18 Testimonial Slider 3 Items
 13.19 Blog Slider 3 Items
 13.20 Instagram Slider
 13.21 Service Slider 4 Items
 13.22 Service Slider 5 Items
 13.23 Grid Multiple Product
 14. Infinite Scroll js
 15. Tooltip
 16. Sidebar Categories Level links
 17. Price Range Slider
 18. Shop List-grid js
 19. Image swap on click
 20. Image to background js
 21. Links for mobiles
 22. Masonry Grid
 23. Scroll Top
 24. Tabs With Accordian Responsive
 25. Product Details Page
 26. Visitor Fake Message
 27. Product Tabs
 28. Sticky Header and Product Sticky Bottom Cart
 29. Checkout Style2 Tabs
 ======================================================================= */


(function($) {
    // Start of use strict
    ("use strict");

    /*-----------------------------------------
     01. Preloader Loading 
     -----------------------------------------*/
    function pre_loader() {
        $("#load").fadeOut();
        $('#pre-loader').delay(500).fadeOut(500);
    }
    pre_loader();

    function dismiss() {
        $(".product-notification .close").on('click', function() {
            $(".product-notification").hide().fadeOut('slow');
        });
    }
    dismiss();


    /*-----------------------------------------
     02. Sticky Header
     -----------------------------------------*/
    function sticky_header() {
        if ($(".header").hasClass("header-fixed")) {
            var nav = $(".header");
            if (nav.length) {
                var offsetTop = nav.offset().top,
                        headerHeight = nav.height(),
                        injectSpace = $("<div />", {height: headerHeight}).insertAfter(nav);
                injectSpace.hide();
                $(window).on("load scroll", function() {
                    if ($(window).scrollTop() > offsetTop) {
                        nav.addClass("is-fixed");
                        injectSpace.show();
                    } else {
                        nav.removeClass("is-fixed");
                        injectSpace.hide();
                    }
                    if ($(window).scrollTop() > 150) {
                        nav.addClass("is-small animated fadeIn");
                    } else {
                        nav.removeClass("is-small animated fadeIn");
                    }
                });
            }
        }
    }
    sticky_header();

    /*-----------------------------------------
     02. Sticky Header
     -----------------------------------------*/
    function sticky_menu_header() {
        if ($(window).width() > 992) {
            if ($(".main-menu-outer").hasClass("header-fixed")) {
                var nav = $(".main-menu-outer");
                if (nav.length) {
                    var offsetTop = nav.offset().top,
                            headerHeight = nav.height(),
                            injectSpace = $("<div />", {height: headerHeight}).insertAfter(nav);
                    injectSpace.hide();
                    $(window).on("load scroll", function() {
                        if ($(window).scrollTop() > offsetTop) {
                            nav.addClass("is-fixed");
                            injectSpace.show();
                        } else {
                            nav.removeClass("is-fixed");
                            injectSpace.hide();
                        }
                        if ($(window).scrollTop() > 150) {
                            nav.addClass("is-small animated fadeIn");
                        } else {
                            nav.removeClass("is-small animated fadeIn");
                        }
                    });
                }
            }
        }
    }
    sticky_menu_header();

    /*-----------------------------------------
     03. Mobile Main Menu
     -----------------------------------------*/
    var selectors = {
        body: 'body',
        sitenav: '#siteNav',
        navLinks: '#siteNav .lvl1 > a',
        menuToggle: '.js-mobile-nav-toggle',
        mobilenav: '.mobile-nav-wrapper',
        menuLinks: '#MobileNav .anm',
        closemenu: '.closemobileMenu'
    };

    $(selectors.navLinks).each(function() {
        if ($(this).attr('href') == window.location.pathname)
            $(this).addClass('active');
    });

    $(selectors.menuToggle).on("click", function() {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $(selectors.closemenu).on("click", function() {
        body: 'body',
                $(selectors.mobilenav).toggleClass("active");
        $(selectors.body).toggleClass("menuOn");
        $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });

    $("body").on('click', function(event) {
        var $target = $(event.target);
        if (!$target.parents().is(selectors.mobilenav) && !$target.parents().is(selectors.menuToggle) && !$target.is(selectors.menuToggle)) {
            $(selectors.mobilenav).removeClass("active");
            $(selectors.body).removeClass("menuOn");
            $(selectors.menuToggle).removeClass('mobile-nav--close').addClass('mobile-nav--open');
        }
    });

    $(selectors.menuLinks).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('anm-angle-down-l anm-angle-up-l');
        $(this).parent().next().slideToggle();
    });


    /*--------------------------------------
     04. Vertical Categories Menu
     -------------------------------------- */
    $(".header-vertical-menu .menu-title").on("click", function(event) {
        $(".header-vertical-menu .vertical-menu-content").slideToggle(300);
        $(this).toggleClass('active');
    });

    // More Categories Open/Close
    $('.moreSlideOpen').slideUp();
    $('.moreCategories').on('click', function() {
        $(this).toggleClass('show');
        $('.moreSlideOpen').slideToggle();
    });


    /*-----------------------------------------
     05. Setting Box dropdown
     -----------------------------------------*/
    function setting_box() {
        $(".setting-link").on("click", function() {
            $("#settingsBox").toggleClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is("#settingsBox") || t.parents().is(".setting-link") || t.is(".setting-link") || $("#settingsBox").removeClass("active");
        });
    }
    setting_box();

    /* Account dropdown */
    function account_links() {
        $(".account-link").on("click", function() {
            $("#accountBox").toggleClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is("#accountBox") || t.parents().is(".account-link") || t.is(".account-link") || $("#accountBox").removeClass("active");
        });
    }
    account_links();

    /* Top Links Show/Hide dropdown Mobile */
    function usermenu_dropdown() {
        $(".user-menu").on("click", function() {
            $(".user-links").toggleClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is(".user-links") || t.parents().is(".user-menu") || t.is(".user-menu") || $(".user-links").removeClass("active");
        });
    }
    usermenu_dropdown();


    /*----------------------------------
     06. Language Picker
     -----------------------------------*/
    function language_picker() {
        $(".language-picker .default-option").click(function() {
            $(this).parent().toggleClass("active");
        });
        $(".language-picker .select-ul li").click(function() {
            var currentele = $(this).html();
            $(".language-picker .default-option li").html(currentele);
            $(this).parents(".language-picker").removeClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is(".language-picker") || $(".language-picker").removeClass("active");
        });
    }
    language_picker();


    /*----------------------------------
     07. Currency Picker
     -----------------------------------*/
    function currency_picker() {
        $(".currency-picker .default-option").click(function() {
            $(this).parent().toggleClass("active");
        });
        $(".currency-picker .select-ul li").click(function() {
            var currentele = $(this).html();
            $(".currency-picker .default-option li").html(currentele);
            $(this).parents(".currency-picker").removeClass("active");
        });
        $("body").on("click", function(e) {
            var t = $(e.target);
            t.parents().is(".currency-picker") || $(".currency-picker").removeClass("active");
        });
    }
    currency_picker();


    /*----------------------------------
     08. Quantity Plus Minus
     -----------------------------------*/
    function qnt_incre() {
        $(".qtyBtn").on("click", function() {
            var qtyField = $(this).parent(".qtyField"),
                    oldValue = $(qtyField).find(".qty").val(),
                    newVal = 1;

            if ($(this).is(".plus")) {
                newVal = parseInt(oldValue) + 1;
            } else if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            }
            $(qtyField).find(".qty").val(newVal);
        });
    }
    qnt_incre();


    /*-------------------------------
     09. Timer Count Down
     ----------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this),
                finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="ht-count days"><span class="count-inner"><span class="time-count">%-D</span> <span class="text">Days</span></span></span> <span class="ht-count hour"><span class="count-inner"><span class="time-count">%-H</span> <span class="text">Hr</span></span></span> <span class="ht-count minutes"><span class="count-inner"><span class="time-count">%M</span> <span class="text">Min</span></span></span> <span class="ht-count second"><span class="count-inner"><span class="time-count">%S</span> <span class="text">Sc</span></span></span>'));
        });
    });


    /*-----------------------------------
     10. Color Swacthes
     -------------------------------------*/
    function color_swacthes() {
        $.each($(".swacth-list"), function() {
            var n = $(".swatch");
            n.on("click", function() {
                $(this).addClass("active");
                $(this).siblings().removeClass('active');
            });
        });
    }
    color_swacthes();

    function img_swacthes() {
        var selector = '.variants-clr li';
        $(selector).on('click', function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    }
    img_swacthes();

    function size_swacthes() {
        var selector = '.variants-size li';
        $(selector).on('click', function() {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        });
    }
    size_swacthes();


    /*-------------------------------
     11. Show hide Product Tags
     ----------------------------------*/
    $(".product-tags li").eq(4).nextAll().hide();
    $('.btnview').on('click', function() {
        $(".product-tags li").not('.filter-active').show();
        $(this).hide();
    });

    /* Show more and show less */
    $('.morelist').each(function() {
        var LiN = $(this).find('.more-item').length;
        if (LiN > 3) {
            $('.more-item', this).eq(2).nextAll().hide().addClass('toggleable');
            $(this).append('<li class="more">Show More</li>');
        }
    });
    $('.morelist').on('click', '.more', function() {
        if ($(this).hasClass('less')) {
            $(this).text('Show More').removeClass('less');
        } else {
            $(this).text('Show Less').addClass('less');
        }
        $(this).siblings('li.toggleable').slideToggle();
    });


    /*-------------------------------
     12. Show hide Product Filters
     ----------------------------------*/
    $('.btn-filter').on("click", function() {
        $(".filterbar").toggleClass("active");
    });
    $('.closeFilter').on("click", function() {
        $(".filterbar").removeClass("active");
    });
    // Hide Cart on document click
    $("body").on('click', function(event) {
        var $target = $(event.target);
        if (!$target.parents().is(".filterbar") && !$target.is(".btn-filter")) {
            $(".filterbar").removeClass("active");
        }
    });


    /*-----------------------------------------
     13. Slick Slider
     -----------------------------------------*/
    /* 13.1 Homepage Slideshow */
    function home_slider() {
        $('.home-slideshow').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 7000,
            lazyLoad: 'ondemand'
        });
    }
    home_slider();

    /* 13.2 Promobar Slider 1 Items */
    function promo_slider_1items() {
        $('.promo-slider-1items').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            cssEase: 'linear'
        });
    }
    promo_slider_1items();

    /* 13.3 Top Bar Slider */
    function top_infobar_slider() {
        $('.infobar-slider-4items').slick({
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    top_infobar_slider();

    function topbar_slider_style1() {
        $('.topBar-slider-style1').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true
        });
    }
    topbar_slider_style1();

    /* 13.4 Sidebar Product */
    function menu_product_slider() {
        $('.weekly-product').slick({
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2500
        });
    }
    menu_product_slider();

    /* 13.5 Sidebar Product */
    function side_product_slider() {
        $('.sideProSlider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    }
    side_product_slider();


    /* 13.6 Category Image 3 Items */
    function category_image_items() {
        $('.category-image-3items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    category_image_items();


    /* 13.7 Collection Slider 3 Items */
    function collection_slider_3items() {
        $('.collection-slider-3items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider_3items();

    function image_slider3items() {
        $('.image-text-slider3items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    image_slider3items();

    /* 13.8 Collection Slider 4 Items */
    function collection_slider_4items() {
        $('.collection-slider-4items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider_4items();

    /* 13.9 Collection Slider 5 Items */
    function collection_slider_5items() {
        $('.collection-slider-5items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider_5items();

    /* 13.10 Collection Slider 6 Items */
    function collection_slider_6items() {
        $('.collection-slider-6items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    collection_slider_6items();

    /* 13.11 Collection Slider 8 Items */
    function collection_slider_8items() {
        $('.collection-slider-8items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }
    collection_slider_8items();


    /* 13.12 Products Slider 3 Items */
    function product_slider_3items() {
        $('.product-slider-3items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider_3items();

    /* 13.13 Products Slider 4 Items */
    function product_slider_4items() {
        $('.product-slider-4items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider_4items();

    /* 13.14 Products Slider 5 Items */
    function product_slider_5items() {
        $('.product-slider-5items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    product_slider_5items();


    /* 13.15 Logo Slider 6 Items */
    function logo_slider_6items() {
        $('.logo-slider-6items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    logo_slider_6items();


    /* 13.16 Testimonial Slider 1 Items */
    function testimonial_slider_1items() {
        $('.testimonial-slider-1items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true
        });
    }
    testimonial_slider_1items();

    /* 13.17 Testimonial Slider 2 Items */
    function testimonial_slider_2items() {
        $('.testimonial-slider-2items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider_2items();

    /* 13.18 Testimonial Slider 3 Items */
    function testimonial_slider_3items() {
        $('.testimonial-slider-3items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
    testimonial_slider_3items();


    /* 13.19 Blog Slider 3 Items */
    function blog_slider_3items() {
        $('.blog-slider-3items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    blog_slider_3items();


    /* 13.20 Instagram Slider */
    function instagram_slider_5items() {
        $('.instagram-slider-5items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    instagram_slider_5items();

    /* 13.21 Service Slider 4 Items */
    function service_slider_4items() {
        $('.service-slider-4items').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    service_slider_4items();

    /* 13.22 Service Slider 5 Items */
    function service_slider_5items() {
        $('.service-slider-5items').slick({
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    service_slider_5items();


    /* 13.23 Grid Multiple Product */
    function multiple_product_slider() {
        $('.multiple-product').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        });
    }
    multiple_product_slider();


    /*-----------------------------------
     Slider Refresh
     -------------------------------------*/
    function slider_refresh() {
        $(".nav-tabs .nav-item").on('click', function() {
            $('.tabs-listing .slick-slider').slick('refresh');
        });
    }
    slider_refresh();


    /*-----------------------------------
     14. Infinite Scroll js
     -------------------------------------*/
    function product_three_loadmore() {
        $(".product-three-loadmore .item").slice(0, 12).show();
        $(".loadMore3").on('click', function(e) {
            e.preventDefault();
            $(".product-three-loadmore .item:hidden").slice(0, 3).slideDown();
            if ($(".product-three-loadmore .item:hidden").length == 0) {
                $(".infiniteload").html('<div class="btn btn-lg loadMore3">No more products</div>');
            }
        });
    }
    product_three_loadmore();

    function product_four_loadmore() {
        $(".product-four-loadmore .item").slice(0, 8).show();
        $(".loadMore4").on('click', function(e) {
            e.preventDefault();
            $(".product-four-loadmore .item:hidden").slice(0, 4).slideDown();
            if ($(".product-four-loadmore .item:hidden").length == 0) {
                $(".infiniteload").html('<div class="btn btn-lg loadMore4">No more products</div>');
            }
        });
    }
    product_four_loadmore();

    function product_listview_loadmore() {
        $(".product-listview-loadmore .item").slice(0, 8).show();
        $(".loadMoreList").on('click', function(e) {
            e.preventDefault();
            $(".product-listview-loadmore .item:hidden").slice(0, 1).slideDown();
            if ($(".product-listview-loadmore .item:hidden").length == 0) {
                $(".infiniteload").html('<div class="btn btn-lg loadMoreList">No more products</div>');
            }
        });
    }
    product_listview_loadmore();

    function blog_listview_loadmore() {
        $(".blog-listview-loadmore .blog-article").slice(0, 3).show();
        $(".loadMore1").on('click', function(e) {
            e.preventDefault();
            $(".blog-listview-loadmore .blog-article:hidden").slice(0, 1).slideDown();
            if ($(".blog-listview-loadmore .blog-article:hidden").length == 0) {
                $(".infiniteload").html('<div class="btn btn-lg loadMore1">No more Blog post</div>');
            }
        });
    }
    blog_listview_loadmore();


    /*----------------------------------
     15. Tooltip
     -----------------------------------*/
    function tooltip() {
        if ($(window).width() > 992) {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl, {
                    trigger: 'hover'
                });
            });
        }
    }
    tooltip();


    /*-----------------------------------
     16. Sidebar Categories Level links
     -------------------------------------*/
    function categories_level() {
        $(".sidebar-categories .sub-level a").on("click", function() {
            $(this).toggleClass('active');
            $(this).next(".sublinks").slideToggle("slow");
        });
    }
    categories_level();

    $(".filter-widget .widget-title").on("click", function() {
        $(this).next().slideToggle('300');
        $(this).toggleClass("active");
    });

    $('.dropdown-menu').on('click', function(e) {
        if ($(this).hasClass('filterDD')) {
            e.stopPropagation();
        }
    });


    /*-----------------------------------
     17. Price Range Slider
     -------------------------------------*/
    function price_slider() {
        $("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [0, 100],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
    }
    price_slider();


    /*-----------------------------------
     18. Shop List-grid js
     -------------------------------------*/
    function grid_options() {
        $(".grid-options .mode-list").on("click", function() {
            $(".product-options").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 list-style").addClass("list-style");
        });
        $('.grid-2').on('click', function() {
            $(".product-options").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 list-style").addClass("row-cols-2");
        });
        $('.grid-3').on('click', function() {
            $(".product-options").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 list-style").addClass("row-cols-md-3 row-cols-sm-3 row-cols-2");
        });
        $('.grid-4').on('click', function() {
            $(".product-options").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 list-style").addClass("row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2");
        });
        $('.grid-5').on('click', function() {
            $(".product-options").removeClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 list-style").addClass("row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2");
        });

        var contentwidth = $(window).width();
        if (contentwidth < "1199") {
            $(".grid-options .grid-4").addClass("active");
        }
        if (contentwidth < "991") {
            $(".grid-options .grid-3").addClass("active");
        }
        if (contentwidth < "767") {
            $(".grid-options .grid-2").addClass("active");
        }

        $(".grid-options .icon-mode").click(function() {
            $(".grid-options .icon-mode.active").removeClass("active");
            $(this).addClass("active");
        });
    }
    grid_options();


    /* --------------------------------------
     19. Image swap on click
     -------------------------------------- */
    function product_image_swap() {
        $(".product-box .swatchLbl img").click(function() {
            parentClass = $(this).parent().closest(".product-box");
            ChldImg = parentClass.find(".product-image img");
            ImageSrcValue = $(this).attr("src");
            ChldImg.attr("src", $(this).attr("src").replace());
            $(this).parent().siblings(".active").removeClass("active");
            $(this).parent().addClass("active");
        });
    }
    product_image_swap();


    /* --------------------------------------
     20. Image to background js
     -------------------------------------- */
    $(".bg-top").parent().addClass('b-top');
    $(".bg-bottom").parent().addClass('b-bottom');
    $(".bg-center").parent().addClass('b-center');
    $(".bg-left").parent().addClass('b-left');
    $(".bg-right").parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up").parent().addClass('');
    jQuery('.bg-img').each(function() {
        var el = $(this),
                src = el.attr('src'),
                parent = el.parent();
        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });
        el.hide();
    });


    /*-----------------------------------
     21. Links for mobiles
     -------------------------------------*/
    function footer_dropdown() {
        $(".footer-links .h4").on('click', function() {
            if ($(window).width() < 767) {
                $(this).next().slideToggle();
                $(this).toggleClass("active");
            }
        });
    }
    footer_dropdown();

    // Resize Function 
    var resizeTimer;
    $(window).resize(function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            $(window).trigger('delayed-resize', e);
        }, 250);
    });
    $(window).on("load resize", function(e) {
        if ($(window).width() > 767) {
            $(".footer-links ul").show();
        } else {
            $(".footer-links ul").hide();
        }
    });

    /* Blog Pages Sidebar Widget +/- */
    function blog_sidebar_dropdown() {
        $(".blog-sidebar .widget-title").on("click", function() {
            if ($(window).width() < 991) {
                $(this).next().slideToggle('300');
                $(this).toggleClass("active");
            }
        });
    }
    blog_sidebar_dropdown();

    $(window).on("load resize", function(e) {
        if ($(window).width() > 991) {
            $(".blog-sidebar .widget-content").show();
        } else {
            $(".blog-sidebar .widget-content").hide();
        }
    });


    /*-----------------------------------------
     22. Masonry Grid
     -----------------------------------------*/
    var $grid = $('.grid-masonary').masonry({
        itemSelector: '.masonary-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function() {
        $grid.masonry();
    });


    $(".btn-shop").on("click", function() {
        $(".btn-shop").removeClass("active");
        $(this).addClass("active");
        $(".products .grid-lb").removeClass("active"), $(this).next().addClass("active");
    });
    $(".btn-shop-close").on("click", function() {
        $(this).parent().removeClass("active");
        $(".btn-shop").removeClass("active");
    });


    /*-------------------------------
     23. Scroll Top
     ---------------------------------*/
    function scroll_top() {
        $("#site-scroll").on("click", function() {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });
    }
    scroll_top();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#site-scroll").fadeIn();
        } else {
            $("#site-scroll").fadeOut();
        }
    });


    /*-----------------------------------
     24. Tabs With Accordian Responsive
     -------------------------------------*/
    $(".tab_content").hide();
    $(".tab_content:first").show();
    /* if in tab mode */
    $("ul.tabs li").on('click', function() {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

        $('.productSlider').slick('refresh');
        $('.productSlider-style2').slick('refresh');
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").on('click', function() {
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("d_active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("d_active");

        $('.productSlider').slick('refresh');
        $('.productSlider-style2').slick('refresh');
    });
    $('ul.tabs li').last().addClass("tab_last");


    /*----------------------------------
     25. Product Details Page
     ------------------------------------*/
    /* Horizontal Thumb Slider */
    function product_thumb1() {
        $('.product-thumb-horizontal').slick({
            infinite: true,
            slidesToShow: 5,
            stageMargin: 5,
            slidesToScroll: 1
        });
    }
    product_thumb1();

    /* Vertical Thumb Slider */
    function product_thumb() {
        $('.product-thumb-vertical').slick({
            infinite: true,
            slidesToShow: 5,
            vertical: true,
            verticalSwiping: true,
            centerPadding: '0',
            draggable: true,
            slidesToScroll: 1
        });
    }
    product_thumb();


    /*----------------------------------
     26. Visitor Fake Message
     ------------------------------------*/
    var userLimit = $(".userViewMsg").attr('data-user'),
            userTime = $(".userViewMsg").attr('data-time');
    $(".uersView").text(Math.floor((Math.random() * userLimit)));
    setInterval(function() {
        $(".uersView").text(Math.floor((Math.random() * userLimit)));
    }, userTime);


    /*----------------------------------
     27. Product Tabs
     ------------------------------------*/
    $(".tab-content").hide();
    $(".tab-content:first").show();
    /* if in tab mode */
    $(".product-tabs li").on('click', function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".product-tabs li").removeClass("active");
        $(this).addClass("active");

        $(this).fadeIn();
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({scrollTop: tabposition.top - 70}, 700);
        }
    });

    $('.product-tabs li:first-child').addClass("active");
    $('.tab-container h3:first-child + .tab-content').show();

    /* if in drawer mode */
    $(".acor-ttl").on("click", function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".acor-ttl").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({scrollTop: tabposition.top}, 700);
        }
    });

    /* Below 767 Accordian style */
    $(".tabs-ac-style").on("click", function() {
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $(".tabs-ac-style").removeClass("active");
        $(this).addClass("active");

        $(this).fadeIn();
        if ($(window).width() < 767) {
            var tabposition = $(this).offset();
            $("html, body").animate({scrollTop: tabposition.top}, 700);
        }
    });


    /*----------------------------
     28. Sticky Header and Product Sticky Bottom Cart
     ------------------------------ */
    function sticky_cart() {
        window.onscroll = function() {
            $(window).scrollTop() > 600 && $(".stickyCart").length ? (
                    $("body.template-product").css("padding-bottom", "70px"),
                    $(".stickyCart").slideDown()) : ($("body.template-product").css("padding-bottom", "0"),
                    $(".stickyCart").slideUp());
        };
        $(".stickyOptions .selectedOpt").on("click", function() {
            $(".stickyOptions ul").slideToggle("fast");
        }),
                $(".stickyOptions .vrOpt").on("click", function(e) {
            var t = $(this).attr("data-val"),
                    s = $(this).attr("data-no"),
                    a = $(this).text();
            $(".selectedOpt").text(a), $(".stickyCart .selectbox").val(t).trigger("change"), $(".stickyOptions ul").slideUp("fast"), this.productvariants = JSON.parse(document.getElementById("ProductJson-" + i).innerHTML), $(".stickyCart .product-featured-img").attr("src", this.productvariants.variants[s].featured_image.src.replace(/(\.[^\.]*$|$)/, "_60x60$&"));
        });
    }
    sticky_cart();

    /*----------------------------
     29. Checkout Style2 Tabs
     ------------------------------ */
    function checkout_tabs() {
        $.each($(".step-items"), function() {
            var n = $(".nav-item");
            n.on("click", function() {
                $(this).addClass("active");
                $(this).siblings().removeClass('active');
            });
        });
    }
    checkout_tabs();


})(jQuery);

/****
 * Theme Name: Zali
 * Theme URI: http://ali.cricbd.info/theme/
 * Author URI: https://themeforest.net/user/Favourite-theme
 * Description:  Zali - personal porfolio template
 * Version: 1.0
 * Author: Mohammad Saifur Rahman
 * Tags: html5, css3, jquery, bootstrap, theme, template, modern, responsive, personal, portfolio
 ****/

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        /*
         * ----------------------------------------------------------------------------------------
         *  Tooltip
         * ----------------------------------------------------------------------------------------
         */

        $('[data-toggle="tooltip"]').tooltip();

        /*
         * ----------------------------------------------------------------------------------------
         *  Slider Vertical Center
         * ----------------------------------------------------------------------------------------
         */
        function custom_js() {
            var windowH = $(window).height();
            var windowW = $(window).width();
            $('.home_slide_wrap').css('height', windowH);

            // this code for text vertical center
            var wcH = $('.single_home_slide').height(),
                vertical = ((windowH - wcH) / 2);
            $('.single_home_slide').css({
                paddingTop: vertical,
                paddingBottom: vertical
            });

        }

        custom_js();

        $(window).load(function () {
            custom_js();
        });

        $(window).resize(function () {
            custom_js();
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  owl-carousel
         * ----------------------------------------------------------------------------------------
         */
        $('.home_slide_main').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        $('.testimonial_slide').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });

        $('.team_slider').owlCarousel({
            items: 4,
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
        
        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         */

        $('.navbar-nav li a, .home-arrow-down a, a.navbar-brand').on('click', function (event) {
            $('.navbar-nav li a, .home-arrow-down a, navbar-brand').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 72;
            $(this).parent().addClass('active');
            $('body, html').animate({
                scrollTop: $anchor
            }, 800);

            return false;
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  jQuery scroll psy
         * ----------------------------------------------------------------------------------------
         */

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  Scroll To Top
         * ----------------------------------------------------------------------------------------
         */

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $('.scrollToTop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  Isotope js
         * ----------------------------------------------------------------------------------------
         */

        $(".project_title li").on('click', function () {

            $(".project_title li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".project_list").isotope({
                filter: selector,
            });
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  progress-bar
         * ----------------------------------------------------------------------------------------
         */

        var progresssH = $('.progresss').height();
        $('.progresss').animate({
            borderRadius: progresssH,
        });
        var progresssBarH = $('.progresss-bar').height();
        $('.progresss-bar').animate({
            borderRadius: progresssBarH,
        });
        var progresssBspanH = $('.progresss span').height();
        $('.progresss span').animate({
            lineHeight: progresssBspanH,
            borderRadius: progresssBspanH,
        }).append(' %');

        /*
         * ----------------------------------------------------------------------------------------
         *  Show More / Show Less Button
         * ----------------------------------------------------------------------------------------
         */
        $('.show-more, .show-less').on("click", function () {

            $('.portfolio_2').fadeIn(1000, function () {

                $('.show-more').hide();
                $('.show-less').show();
                $('.show-less').on("click", function () {

                    $('.portfolio_2').fadeOut(500);
                    $('.show-less').hide();
                    $('.show-more').show();
                });

            });
        });

        /*
         * ----------------------------------------------------------------------------------------
         * fallingSnow
         * ----------------------------------------------------------------------------------------
         */

        $("#snow").fallingSnow({
            stopOnClick: false,
            thicknessAdjust: 1.3,
        });
        

    });

    jQuery(window).load(function () {


        jQuery(".project_list").isotope();


        /*
         * ----------------------------------------------------------------------------------------
         *  Preloader
         * ----------------------------------------------------------------------------------------
         */
        $('.loading-overlay .spinner').fadeOut(1500, function () {

            $(this).parent().fadeOut(1500, function () {

                $('body').css('overflow', 'auto');
                $(this).remove();

            });

        });
        
        /* Parallex Js*/
        $(window).stellar({
                responsive: true,
                positionProperty: 'position',
                horizontalScrolling: false
        });
        

    });

})(jQuery);
//Fix Hashbang**********************************************************
$(function () {
    var pathname = $(location).attr('href');
    
    if ((/www./.test(pathname))) {
        var href = pathname.replace("http://www.", 'http://');
        window.location.href = href;
    }

    if ((/#!/.test(pathname))) {
        var urlraw = window.location.hash;
        var furl = urlraw.substring(2, urlraw.length);
        //alert(furl);
        window.location.href = "http://goldgunsandguitars.com/#" + furl;
    }
    



});

//****************************************************************************





//Change Links**********************************************************
$(document).ready(function() {
    var scrollspeed = 700;
    $(".navlink2").attr("href", "#guns");
    $('.navlink2').click(function () {

        $('html,body').animate({
            scrollTop: $('#guns').offset().top
        }, scrollspeed);
        return false;

    });
    
    $(".navlink3").attr("href", "#pawn");
    $('.navlink3').click(function () {

        $('html,body').animate({
            scrollTop: $('#pawn').offset().top
        }, scrollspeed);
        return false;

    });
    
    $(".navlink4").attr("href", "#loans");
    $('.navlink4').click(function () {

        $('html,body').animate({
            scrollTop: $('#loans').offset().top
        }, scrollspeed);
        return false;

    });
    
    $(".navlink5").attr("href", "#gold");
    $('.navlink5').click(function () {

        $('html,body').animate({
            scrollTop: $('#gold').offset().top
        }, scrollspeed);
        return false;

    });
    
    $(".navlink6").attr("href", "#check-cashing");
    $('.navlink6').click(function () {

        $('html,body').animate({
            scrollTop: $('#check-cashing').offset().top
        }, scrollspeed);
        return false;

    });
    
    $(".navlink7").attr("href", "#more");
    $('.navlink7').click(function () {

        $('html,body').animate({
            scrollTop: $('#more').offset().top
        }, scrollspeed);
        return false;

    });
    
    
    
    
    
});


//****************************************************************************


                            
//Load Sections**********************************************************
$(function () {

    //FAQ

    //$('#welcome').load('./pages/welcome.htm');

    $('#gun-sales').load('./pages/gun-sales.htm #content', function () {
        $('#faq-gun-inventory').load('./faq/gun-inventory.htm');
        $('#faq-gun-brands').load('./faq/gun-brands.htm');
        $('#faq-gun-faq').load('./faq/gun-faq.htm');
    });

    $('#gunsmithing').load('./pages/gunsmithing.htm #content', function () {
        $('#faq-gunsmithing-faq').load('./faq/gunsmithing-faq.htm');
        $('#faq-gunsmithing-prices').load('./faq/gunsmithing-prices.htm');
    });

    $('#pawn').load('./pages/pawn.htm #content', function () {
        $('#faq-pawn-faq').load('./faq/pawn-faq.htm');
        $('#faq-pawn-items').load('./faq/pawn-items.htm');
    });

    $('#title-loan').load('./pages/title-loan.htm #content', function () {
        $('#faq-title-faq').load('./faq/title-faq.htm');
        $('#faq-title-rates').load('./faq/title-rates.htm');
    });

    $('#other-loans').load('./pages/other-loans.htm #content', function () {
        $('#faq-other-loans-faq').load('./faq/other-loans--faq.htm');
        //$('#faq-payday-fees').load('./faq/payday-fees.htm');
    });

    $('#gold').load('./pages/gold.htm #content', function () {
        $('#faq-gold-faq').load('./faq/gold-faq.htm');
        $('#faq-gold-items').load('./faq/gold-items.htm');
    });

    $('#check-cashing').load('./pages/check-cashing.htm #content');

    $('#consignment').load('./pages/consignment.htm #content', function () {
        $('#faq-consignment-faq').load('./faq/consignment-faq.htm');
    });

    $('#layaway').load('./pages/layaway.htm #content', function () {
        $('#faq-layaway-faq').load('./faq/layaway-faq.htm');
    });

    $('#ffl-transfers').load('./pages/ffl-transfers.htm #content', function () {
        $('#faq-ffl-faq').load('./faq/ffl-faq.htm');
        $('#faq-ffl-license').load('./faq/ffl-license.htm');
    });

    $('#textbook-buyback').load('./pages/textbook-buyback.htm #content', function () {
        $('#faq-textbook-faq').load('./faq/textbook-faq.htm');
    });

    $('#musical-instruments').load('./pages/musical-instruments.htm #content');

    $('#sell-your-car').load('./pages/sell-your-car.htm #content');
    
    $('#big-logo').delay(2000).fadeIn(2000);
    $('#scroll-indicator').delay(2000).fadeIn(2000);

});
//****************************************************************************

//Detect Webkit**********************************************************
$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");


    if (isiPhone > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
    if (isiPad > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
    if (isiPod > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }


    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
});
//****************************************************************************

//Animate Icons**********************************************************
$(document).ready(function () {
    var SlideSpeed = 400;
    var divs = $(".line2");
    var divs2 = $("#social-bar");
    var divs3 = $("#fs-background-transparent2");
    var clicks = $(".social1, .social2, .social3, .social4, .social5, .social6");
    var clicks2 = $(".social-label1, .social-label2, .social-label3, .social-label4, .social-label5, .social-label6");
    var clicks3 = $("#twitter, #facebook, #email, #phone, #hours, #map");
    var close = $(".close, #fs-background-transparent2");
    var iframe = $(".gmap");
    var open = 0;


    function CurrentMargin() {
        // get current margin of slider
        var currentMargin = divs.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin);
    }


    function SetNavigationDisplay() {
        // get current margin
        var currentMargin = CurrentMargin();

    }

    //make slider show
    $('.social1').click(function (e) {
        e.preventDefault();
        window.location.href = "http://twitter.com/goldgunsguitars";
    });

    $('.social2').click(function (e) {
        e.preventDefault();
        window.location.href = "http://facebook.com/goldgunsguitars";
    });

    $('.social3').click(function () {

        $('html,body').animate({
            scrollTop: $("#contactus").offset().top
        }, 700);
        
    });

    $('.social4').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 293
            }, 500);
            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);

            $('#phone').css('visibility', 'visible');
            $('.social4').css('border-top', 'solid 6px #222');
            $('.social-label4').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });

    $('.social5').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 283
            }, 500);
            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);

            $('#hours').css('visibility', 'visible');
            $('.social5').css('border-top', 'solid 6px #222');
            $('.social-label5').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });

    $('.social6').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 225
            }, 500);
            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);


            $('#map').css('visibility', 'visible');
            iframe.fadeIn(0);
            $('.social6').css('border-top', 'solid 6px #222');
            $('.social-label6').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });


    close.click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 0
            var newMargin = 320;
            //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 1
            }, 500, function () {
                $('#social-bar').css("visibility", "hidden");
                clicks3.css('visibility', 'hidden');
                iframe.fadeOut(0);
            });
            //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');



            //$('#fs-background-transparent2').css("visibility","hidden");
        }
    });

    $(window).on('scroll', function (e) {
        e.preventDefault();
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 845) {
            if (divs2.is(':not(:animated)')) {
                //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });
                divs2.animate({
                    opacity: 0
                }, 200, function () {
                    $('#contact').css("visibility", "hidden");
                });
                $("#slideshow").fadeIn(0)
                //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });

                //$('#fs-background-transparent2').css("visibility","hidden");
            }

        }

        if (open == 1) {

            if (scrollTop >= 845) {

                if (divs2.is(':not(:animated)')) {
                    //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });
                    divs2.animate({
                        opacity: 1
                    }, 200);
                    //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });

                    //$('#fs-background-transparent2').css("visibility","hidden");
                    $('#social-bar').css("visibility", "visible");
                    $("#slideshow").fadeOut(0)

                }
            }
        }





    });


});
//**********************************************************************

//Hover Shadow**********************************************************
/*$(function(){
//Block2 - Start
$(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").on('mouseover', function() {
   $(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").css('box-shadow','0px -0px 0px 3px #303030');      
});

$(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").on('mouseout', function() {
   $(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").css('box-shadow','none');      
});

$(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").on('click', function() {
   $(".block2-scroll1-indicator, .block2-scroll2-indicator, .block-scroll-next").css('box-shadow','none');      
});

//Block2 - End

//Block4 - Start
$(".block4-scroll1-indicator, .block4-scroll2-indicator").on('mouseover', function() {
   $(".block4-scroll1-indicator, .block4-scroll2-indicator").css('box-shadow','0px -0px 0px 3px #303030');      
});

$(".block4-scroll1-indicator, .block4-scroll2-indicator").on('mouseout', function() {
   $(".block4-scroll1-indicator, .block4-scroll2-indicator").css('box-shadow','none');      
});

$(".block4-scroll1-indicator, .block4-scroll2-indicator").on('click', function() {
   $(".block4-scroll1-indicator, .block4-scroll2-indicator").css('box-shadow','none');      
});

//Block4 - End
    
//Block7 - Start
$(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").on('mouseover', function() {
   $(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").css('box-shadow','0px -0px 0px 3px #303030');      
});

$(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").on('mouseout', function() {
   $(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").css('box-shadow','none');      
});

$(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").on('click', function() {
   $(".block7-scroll2-indicator, .block7-scroll3-indicator, .block7-scroll4-indicator, .block7-scroll5-indicator, .block7-scroll6-indicator").css('box-shadow','none');      
});

//Block7 - End
});*/
//**********************************************************************

// Gun Slider**********************************************************
$(document).ready(function () {
    var SlideSpeed = 700;
    var SlideWidth = 1012;
    var slidenumber = 2;
    var button1 = $("#block2-scroll1-indicator");
    var button2 = $("#block2-scroll2-indicator");
    var block1 = $("#gun-sales, .nav1-border1");
    var block2 = $("#gunsmithing, .nav1-border2");

    var wrapperWidth = 940;

    var nav1 = $(".nav2-word1");
    var nav2 = $(".nav2-word2");

    var navClick1 = $(".nav2-word1, .gunsLink");
    var navClick2 = $(".nav2-word2, .gunsmithingLink");


    // if current margin is at 0, then we are at the beginning, hide previous
    if (CurrentMargin() == 0) {
        button1.fadeOut();
    } else {
        button1.fadeIn();
    }

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    function CurrentMargin() {
        // get current margin of slider
        var currentMargin = block1.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin);
    }

    function CurrentMargin2() {
        // get current margin of slider
        var currentMargin2 = block2.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin2);
    }

    function SetNavigationDisplay() {
        // get current margin
        var currentMargin = CurrentMargin();

        // if current margin is at 0, then we are at the beginning, hide previous
        if (currentMargin == 0) {
            button1.fadeOut(1);
        } else {
            button1.fadeIn(1);
        }

        // turn current margin into postive number and calculate if we are at last slide, if so, hide next button
        if (currentMargin == -(SlideWidth * (slidenumber - 1))) {
            button2.fadeOut(1);
        } else {
            button2.fadeIn(1);
        }
    }

    button2.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {

            var newMargin = CurrentMargin() - SlideWidth;

            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin - newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

        }

        if (CurrentMargin() == 0) {
            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');

            button2.delay(SlideSpeed).transition({
                marginLeft: -62
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button2.animateRotate(-180, SlideSpeed);

            button1.css('margin-left', '-62px');
            button1.css({
                "transform": "rotate(0deg)",
            });

        } else {
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');
        }


        if (CurrentMargin2() == 0) {
            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
        } else {
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');
        }

    });



    button1.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button1.is(':not(:animated)')) {
            var newMargin = CurrentMargin() + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
        }

        if (CurrentMargin() == 0) {
            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');

        } else {
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');
        }


        if (CurrentMargin2() == 0) {
            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
            button1.delay(SlideSpeed).transition({
                marginLeft: 950
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button1.animateRotate(180, SlideSpeed);

            button2.css('margin-left', '950px');
            button2.css({
                "transform": "rotate(0deg)",
            });

        } else {
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');
        }

    });


    navClick1.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {
            var newMargin = 0;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button1.delay(SlideSpeed).transition({
                marginLeft: 950
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button1.animateRotate(180, SlideSpeed);

            button2.css('margin-left', '950px');
            button2.css({
                "transform": "rotate(0deg)",
            });

            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');
        }
    });

    navClick2.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {
            var newMargin = -(SlideWidth);
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button2.delay(SlideSpeed).transition({
                marginLeft: -62
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button2.animateRotate(-180, SlideSpeed);

            button1.css('margin-left', '-62px');
            button1.css({
                "transform": "rotate(0deg)",
            });


            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');

        }
    });


});
//***********************************************************************


// Loans Slider**********************************************************
$(document).ready(function () {
    var SlideSpeed = 700;
    var SlideWidth = 1012;
    var slidenumber = 2;
    var button1 = $("#block4-scroll1-indicator");
    var button2 = $("#block4-scroll2-indicator");
    var block1 = $("#title-loan, .nav2-border1");
    var block2 = $("#other-loans, .nav2-border2");

    var wrapperWidth = 940;

    var nav1 = $(".nav4-word1");
    var nav2 = $(".nav4-word2");

    var navClick1 = $(".nav4-word1, .titleLink");
    var navClick2 = $(".nav4-word2, .paydayLink");


    // if current margin is at 0, then we are at the beginning, hide previous
    if (CurrentMargin() == 0) {
        button1.fadeOut();
    } else {
        button1.fadeIn();
    }

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    function CurrentMargin() {
        // get current margin of slider
        var currentMargin = block1.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin);
    }

    function CurrentMargin2() {
        // get current margin of slider
        var currentMargin2 = block2.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin2);
    }

    function SetNavigationDisplay() {
        // get current margin
        var currentMargin = CurrentMargin();

        // if current margin is at 0, then we are at the beginning, hide previous
        if (currentMargin == 0) {
            button1.fadeOut(1);
        } else {
            button1.fadeIn(1);
        }

        // turn current margin into postive number and calculate if we are at last slide, if so, hide next button
        if (currentMargin == -(SlideWidth * (slidenumber - 1))) {
            button2.fadeOut(1);
        } else {
            button2.fadeIn(1);
        }
    }

    button2.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {
            var newMargin = CurrentMargin() - SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin - newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
        }

        if (CurrentMargin() == 0) {
            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');

            button2.delay(SlideSpeed).transition({
                marginLeft: -62
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button2.animateRotate(-180, SlideSpeed);

            button1.css('margin-left', '-62px');
            button1.css({
                "transform": "rotate(0deg)",
            });

        } else {
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');
        }


        if (CurrentMargin2() == 0) {
            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
        } else {
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');
        }


    });



    button1.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button1.is(':not(:animated)')) {
            var newMargin = CurrentMargin() + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
        }

        if (CurrentMargin() == 0) {
            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');

        } else {
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');
        }


        if (CurrentMargin2() == 0) {
            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
            button1.delay(SlideSpeed).transition({
                marginLeft: 950
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button1.animateRotate(180, SlideSpeed);

            button2.css('margin-left', '950px');
            button2.css({
                "transform": "rotate(0deg)",
            });

        } else {
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');
        }


    });


    navClick1.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {
            var newMargin = 0;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button1.delay(SlideSpeed).transition({
                marginLeft: 950
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button1.animateRotate(180, SlideSpeed);

            button2.css('margin-left', '950px');
            button2.css({
                "transform": "rotate(0deg)",
            });

            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');
            nav2.css('border-top', 'none');
            //block2.css('opacity','0.4');
            block2.addClass('opacity-fade');
            block2.removeClass('opacity-full');

        }


    });

    navClick2.click(function (e) {
        e.preventDefault();
        if (block1.is(':not(:animated)') && button2.is(':not(:animated)')) {
            var newMargin = -(SlideWidth);
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin + SlideWidth
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button2.delay(SlideSpeed).transition({
                marginLeft: -62
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            button2.animateRotate(-180, SlideSpeed);

            button1.css('margin-left', '-62px');
            button1.css({
                "transform": "rotate(0deg)",
            });


            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');
            nav1.css('border-top', 'none');
            //block1.css('opacity','0.4');
            block1.addClass('opacity-fade');
            block1.removeClass('opacity-full');

        }


    });


});
//***********************************************************************


// More Slider***********************************************************
$(document).ready(function () {
    var SlideSpeed = 700;
    var SlideWidth = 1012;
    var slidenumber = 6;
    var allbuttons = $("#block7-scroll2-indicator, #block7-scroll3-indicator, #block7-scroll4-indicator, #block7-scroll5-indicator, #block7-scroll6-indicator");
    var button2 = $("#block7-scroll2-indicator");
    var button3 = $("#block7-scroll3-indicator");
    var button4 = $("#block7-scroll4-indicator");
    var button5 = $("#block7-scroll5-indicator");
    var button6 = $("#block7-scroll6-indicator");
    var allblocks = $("#consignment, #layaway, #ffl-transfers, #textbook-buyback, #musical-instruments, #sell-your-car, .nav7-border1, .nav7-border2, .nav7-border3, .nav7-border4, .nav7-border5, .nav7-border6");
    var block1 = $("#consignment, .nav7-border1");
    var block2 = $("#layaway, .nav7-border2");
    var block3 = $("#ffl-transfers, .nav7-border3");
    var block4 = $("#textbook-buyback, .nav7-border4");
    var block5 = $("#musical-instruments, .nav7-border5");
    var block6 = $("#sell-your-car, .nav7-border6");
    var wrapperWidth = 940;
    var nav1 = $(".nav7-word1");
    var nav2 = $(".nav7-word2");
    var nav3 = $(".nav7-word3");
    var nav4 = $(".nav7-word4");
    var nav5 = $(".nav7-word5");
    var nav6 = $(".nav7-word6");
    var navClick1 = $(".nav7-word1, .consignmentLink");
    var navClick2 = $(".nav7-word2, .layawayLink");
    var navClick3 = $(".nav7-word3, .fflLink");
    var navClick4 = $(".nav7-word4, .textbookLink");
    var navClick5 = $(".nav7-word5, .musicLink");
    var navClick6 = $(".nav7-word6, .carLink");
    var allnavs = $(".nav7-word1, .nav7-word2, .nav7-word3, .nav7-word4, .nav7-word5, .nav7-word6");
    var buttonset2 = 1;
    var buttonset3 = 1;
    var buttonset4 = 1;
    var buttonset5 = 1;
    var buttonset6 = 1;
    var buttonset7 = 1;



    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: -180
            }).animate({
                deg: angle
            }, args);
        });
    };

    function CurrentMargin() {
        // get current margin of slider
        var currentMargin = block1.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin);
    }

    function CurrentMargin2() {
        // get current margin of slider
        var currentMargin2 = block2.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin2);
    }

    function CurrentMargin3() {
        // get current margin of slider
        var currentMargin3 = block3.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin3);
    }

    function CurrentMargin4() {
        // get current margin of slider
        var currentMargin4 = block4.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin4);
    }

    function CurrentMargin5() {
        // get current margin of slider
        var currentMargin5 = block5.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin5);
    }

    function CurrentMargin6() {
        // get current margin of slider
        var currentMargin6 = block6.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin6);
    }

    function CurrentButton2() {
        // get current margin of slider
        var currentButton2 = button2.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentButton2);
    }

    function CurrentButton3() {
        // get current margin of slider
        var currentButton3 = button3.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentButton3);
    }

    function CurrentButton4() {
        // get current margin of slider
        var currentButton4 = button4.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentButton4);
    }

    function CurrentButton5() {
        // get current margin of slider
        var currentButton5 = button5.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentButton5);
    }

    function CurrentButton6() {
        // get current margin of slider
        var currentButton6 = button6.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentButton6);
    }

    function SetNavigationDisplay() {
        // get current margin
        var currentMargin = CurrentMargin();
    }

    button2.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            if (CurrentMargin() == 0) {
                var newMargin = CurrentMargin() - SlideWidth;
                var newMargin2 = CurrentMargin2() - SlideWidth;
                var newMargin3 = CurrentMargin3() - SlideWidth;
                var newMargin4 = CurrentMargin4() - SlideWidth;
                var newMargin5 = CurrentMargin5() - SlideWidth;
                var newMargin6 = CurrentMargin6() - SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav2.css('border-top', 'solid 6px #d9d9d9');
                //block2.css('opacity','1');
                block2.addClass('opacity-full');
                block2.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() - SlideWidth;
                var newButton3 = CurrentButton3() - SlideWidth;
                var newButton4 = CurrentButton4() - SlideWidth;
                var newButton5 = CurrentButton5() - SlideWidth;
                var newButton6 = CurrentButton6() - SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button2.animateRotate(-180, SlideSpeed);
            }

            if (CurrentMargin2() == 0) {
                var newMargin = CurrentMargin() + SlideWidth;
                var newMargin2 = CurrentMargin2() + SlideWidth;
                var newMargin3 = CurrentMargin3() + SlideWidth;
                var newMargin4 = CurrentMargin4() + SlideWidth;
                var newMargin5 = CurrentMargin5() + SlideWidth;
                var newMargin6 = CurrentMargin6() + SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav1.css('border-top', 'solid 6px #d9d9d9');
                //block1.css('opacity','1');
                block1.addClass('opacity-full');
                block1.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() + SlideWidth;
                var newButton3 = CurrentButton3() + SlideWidth;
                var newButton4 = CurrentButton4() + SlideWidth;
                var newButton5 = CurrentButton5() + SlideWidth;
                var newButton6 = CurrentButton6() + SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button2.animateRotateMinus(0, SlideSpeed);
            }
        }
    });

    button3.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            if (CurrentMargin2() == 0) {
                var newMargin = CurrentMargin() - SlideWidth;
                var newMargin2 = CurrentMargin2() - SlideWidth;
                var newMargin3 = CurrentMargin3() - SlideWidth;
                var newMargin4 = CurrentMargin4() - SlideWidth;
                var newMargin5 = CurrentMargin5() - SlideWidth;
                var newMargin6 = CurrentMargin6() - SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav3.css('border-top', 'solid 6px #d9d9d9');
                //block3.css('opacity','1');
                block3.addClass('opacity-full');
                block3.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() - SlideWidth;
                var newButton3 = CurrentButton3() - SlideWidth;
                var newButton4 = CurrentButton4() - SlideWidth;
                var newButton5 = CurrentButton5() - SlideWidth;
                var newButton6 = CurrentButton6() - SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button3.animateRotate(-180, SlideSpeed);
            }

            if (CurrentMargin3() == 0) {
                var newMargin = CurrentMargin() + SlideWidth;
                var newMargin2 = CurrentMargin2() + SlideWidth;
                var newMargin3 = CurrentMargin3() + SlideWidth;
                var newMargin4 = CurrentMargin4() + SlideWidth;
                var newMargin5 = CurrentMargin5() + SlideWidth;
                var newMargin6 = CurrentMargin6() + SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav2.css('border-top', 'solid 6px #d9d9d9');
                //block2.css('opacity','1');
                block2.addClass('opacity-full');
                block2.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() + SlideWidth;
                var newButton3 = CurrentButton3() + SlideWidth;
                var newButton4 = CurrentButton4() + SlideWidth;
                var newButton5 = CurrentButton5() + SlideWidth;
                var newButton6 = CurrentButton6() + SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button3.animateRotateMinus(0, SlideSpeed);
            }
        }
    });

    button4.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            if (CurrentMargin3() == 0) {
                var newMargin = CurrentMargin() - SlideWidth;
                var newMargin2 = CurrentMargin2() - SlideWidth;
                var newMargin3 = CurrentMargin3() - SlideWidth;
                var newMargin4 = CurrentMargin4() - SlideWidth;
                var newMargin5 = CurrentMargin5() - SlideWidth;
                var newMargin6 = CurrentMargin6() - SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav4.css('border-top', 'solid 6px #d9d9d9');
                //block4.css('opacity','1');
                block4.addClass('opacity-full');
                block4.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() - SlideWidth;
                var newButton3 = CurrentButton3() - SlideWidth;
                var newButton4 = CurrentButton4() - SlideWidth;
                var newButton5 = CurrentButton5() - SlideWidth;
                var newButton6 = CurrentButton6() - SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button4.animateRotate(-180, SlideSpeed);
            }

            if (CurrentMargin4() == 0) {
                var newMargin = CurrentMargin() + SlideWidth;
                var newMargin2 = CurrentMargin2() + SlideWidth;
                var newMargin3 = CurrentMargin3() + SlideWidth;
                var newMargin4 = CurrentMargin4() + SlideWidth;
                var newMargin5 = CurrentMargin5() + SlideWidth;
                var newMargin6 = CurrentMargin6() + SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav3.css('border-top', 'solid 6px #d9d9d9');
                //block3.css('opacity','1');
                block3.addClass('opacity-full');
                block3.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() + SlideWidth;
                var newButton3 = CurrentButton3() + SlideWidth;
                var newButton4 = CurrentButton4() + SlideWidth;
                var newButton5 = CurrentButton5() + SlideWidth;
                var newButton6 = CurrentButton6() + SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button4.animateRotateMinus(0, SlideSpeed);
            }
        }
    });

    button5.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            if (CurrentMargin4() == 0) {
                var newMargin = CurrentMargin() - SlideWidth;
                var newMargin2 = CurrentMargin2() - SlideWidth;
                var newMargin3 = CurrentMargin3() - SlideWidth;
                var newMargin4 = CurrentMargin4() - SlideWidth;
                var newMargin5 = CurrentMargin5() - SlideWidth;
                var newMargin6 = CurrentMargin6() - SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav5.css('border-top', 'solid 6px #d9d9d9');
                //block5.css('opacity','1');
                block5.addClass('opacity-full');
                block5.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() - SlideWidth;
                var newButton3 = CurrentButton3() - SlideWidth;
                var newButton4 = CurrentButton4() - SlideWidth;
                var newButton5 = CurrentButton5() - SlideWidth;
                var newButton6 = CurrentButton6() - SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button5.animateRotate(-180, SlideSpeed);
            }

            if (CurrentMargin5() == 0) {
                var newMargin = CurrentMargin() + SlideWidth;
                var newMargin2 = CurrentMargin2() + SlideWidth;
                var newMargin3 = CurrentMargin3() + SlideWidth;
                var newMargin4 = CurrentMargin4() + SlideWidth;
                var newMargin5 = CurrentMargin5() + SlideWidth;
                var newMargin6 = CurrentMargin6() + SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav4.css('border-top', 'solid 6px #d9d9d9');
                //block4.css('opacity','1');
                block4.addClass('opacity-full');
                block4.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() + SlideWidth;
                var newButton3 = CurrentButton3() + SlideWidth;
                var newButton4 = CurrentButton4() + SlideWidth;
                var newButton5 = CurrentButton5() + SlideWidth;
                var newButton6 = CurrentButton6() + SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button5.animateRotateMinus(0, SlideSpeed);
            }
        }
    });

    button6.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            if (CurrentMargin5() == 0) {
                var newMargin = CurrentMargin() - SlideWidth;
                var newMargin2 = CurrentMargin2() - SlideWidth;
                var newMargin3 = CurrentMargin3() - SlideWidth;
                var newMargin4 = CurrentMargin4() - SlideWidth;
                var newMargin5 = CurrentMargin5() - SlideWidth;
                var newMargin6 = CurrentMargin6() - SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav6.css('border-top', 'solid 6px #d9d9d9');
                //block6.css('opacity','1');
                block6.addClass('opacity-full');
                block6.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() - SlideWidth;
                var newButton3 = CurrentButton3() - SlideWidth;
                var newButton4 = CurrentButton4() - SlideWidth;
                var newButton5 = CurrentButton5() - SlideWidth;
                var newButton6 = CurrentButton6() - SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button6.animateRotate(-180, SlideSpeed);
            }

            if (CurrentMargin6() == 0) {
                var newMargin = CurrentMargin() + SlideWidth;
                var newMargin2 = CurrentMargin2() + SlideWidth;
                var newMargin3 = CurrentMargin3() + SlideWidth;
                var newMargin4 = CurrentMargin4() + SlideWidth;
                var newMargin5 = CurrentMargin5() + SlideWidth;
                var newMargin6 = CurrentMargin6() + SlideWidth;
                block1.delay(SlideSpeed).transition({
                    marginLeft: newMargin
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block2.delay(SlideSpeed).transition({
                    marginLeft: newMargin2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block3.delay(SlideSpeed).transition({
                    marginLeft: newMargin3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block4.delay(SlideSpeed).transition({
                    marginLeft: newMargin4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block5.delay(SlideSpeed).transition({
                    marginLeft: newMargin5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                block6.delay(SlideSpeed).transition({
                    marginLeft: newMargin6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                nav5.css('border-top', 'solid 6px #d9d9d9');
                //block5.css('opacity','1');
                block5.addClass('opacity-full');
                block5.removeClass('opacity-fade');

                var newButton2 = CurrentButton2() + SlideWidth;
                var newButton3 = CurrentButton3() + SlideWidth;
                var newButton4 = CurrentButton4() + SlideWidth;
                var newButton5 = CurrentButton5() + SlideWidth;
                var newButton6 = CurrentButton6() + SlideWidth;
                button2.delay(SlideSpeed).transition({
                    marginLeft: newButton2
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button3.delay(SlideSpeed).transition({
                    marginLeft: newButton3
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button4.delay(SlideSpeed).transition({
                    marginLeft: newButton4
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button5.delay(SlideSpeed).transition({
                    marginLeft: newButton5
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });
                button6.delay(SlideSpeed).transition({
                    marginLeft: newButton6
                }, SlideSpeed, function () {
                    SetNavigationDisplay()
                });

                button6.animateRotateMinus(0, SlideSpeed);
            }
        }
    });
    
    



    navClick1.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }



            var newMargin = 0;
            var newMargin2 = newMargin + SlideWidth;
            var newMargin3 = newMargin2 + SlideWidth;
            var newMargin4 = newMargin3 + SlideWidth;
            var newMargin5 = newMargin4 + SlideWidth;
            var newMargin6 = newMargin5 + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav1.css('border-top', 'solid 6px #d9d9d9');
            //block1.css('opacity','1');
            block1.addClass('opacity-full');
            block1.removeClass('opacity-fade');

            var newButton2 = 950;
            var newButton3 = newButton2 + SlideWidth;
            var newButton4 = newButton3 + SlideWidth;
            var newButton5 = newButton4 + SlideWidth;
            var newButton6 = newButton5 + SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            if (CurrentButton2() <= -62) {
                button2.animateRotateMinus(0, SlideSpeed);
            }






        }
    });

    navClick2.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }



            var newMargin2 = 0;
            var newMargin = newMargin2 - SlideWidth;
            var newMargin3 = newMargin2 + SlideWidth;
            var newMargin4 = newMargin3 + SlideWidth;
            var newMargin5 = newMargin4 + SlideWidth;
            var newMargin6 = newMargin5 + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav2.css('border-top', 'solid 6px #d9d9d9');
            //block2.css('opacity','1');
            block2.addClass('opacity-full');
            block2.removeClass('opacity-fade');

            var newButton3 = 950;
            var newButton2 = newButton3 - SlideWidth;
            var newButton4 = newButton3 + SlideWidth;
            var newButton5 = newButton4 + SlideWidth;
            var newButton6 = newButton5 + SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });


            if (CurrentButton2() > 0 && CurrentButton2() != -62) {
                button2.animateRotate(-180, SlideSpeed);
            }

            if (CurrentButton3() <= 0 && CurrentButton3() != 950) {
                button3.animateRotateMinus(0, SlideSpeed);
            }





        }
    });

    var pathname = $(location).attr('href');




    if ((/ffl-link/.test(pathname))) {
        

        $('#link-cover').fadeIn(0);

        $('#placeholder').delay(2000).animate({
            opacity: 0
        }, 0, function () {

            $(document).ready(function () {

                navClick3.trigger("click");
                $('#link-cover').delay(700).fadeOut(700);

            });

        });
    }
    



    navClick3.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            var newMargin3 = 0;
            var newMargin2 = newMargin3 - SlideWidth;
            var newMargin = newMargin2 - SlideWidth;
            var newMargin4 = newMargin3 + SlideWidth;
            var newMargin5 = newMargin4 + SlideWidth;
            var newMargin6 = newMargin5 + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav3.css('border-top', 'solid 6px #d9d9d9');
            //block3.css('opacity','1');
            block3.addClass('opacity-full');
            block3.removeClass('opacity-fade');

            var newButton4 = 950;
            var newButton3 = newButton4 - SlideWidth;
            var newButton2 = newButton3 - SlideWidth;
            var newButton5 = newButton4 + SlideWidth;
            var newButton6 = newButton5 + SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });


            if (CurrentButton3() > 0 && CurrentButton3() != -62) {
                button3.animateRotate(-180, SlideSpeed);
            }

            if (CurrentButton4() <= 0 && CurrentButton4() != 950) {
                button4.animateRotateMinus(0, SlideSpeed);
            }

        }
    });

    navClick4.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            var newMargin4 = 0;
            var newMargin3 = newMargin4 - SlideWidth;
            var newMargin2 = newMargin3 - SlideWidth;
            var newMargin = newMargin2 - SlideWidth;
            var newMargin5 = newMargin4 + SlideWidth;
            var newMargin6 = newMargin5 + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav4.css('border-top', 'solid 6px #d9d9d9');
            //block4.css('opacity','1');
            block4.addClass('opacity-full');
            block4.removeClass('opacity-fade');

            var newButton5 = 950;
            var newButton4 = newButton5 - SlideWidth;
            var newButton3 = newButton4 - SlideWidth;
            var newButton2 = newButton3 - SlideWidth;
            var newButton6 = newButton5 + SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });


            if (CurrentButton4() > 0 && CurrentButton4() != -62) {
                button4.animateRotate(-180, SlideSpeed);
            }

            if (CurrentButton5() <= 0 && CurrentButton5() != 950) {
                button5.animateRotateMinus(0, SlideSpeed);
            }

        }
    });

    navClick5.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            var newMargin5 = 0;
            var newMargin4 = newMargin5 - SlideWidth;
            var newMargin3 = newMargin4 - SlideWidth;
            var newMargin2 = newMargin3 - SlideWidth;
            var newMargin = newMargin2 - SlideWidth;
            var newMargin6 = newMargin5 + SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav5.css('border-top', 'solid 6px #d9d9d9');
            //block5.css('opacity','1');
            block5.addClass('opacity-full');
            block5.removeClass('opacity-fade');

            var newButton6 = 950;
            var newButton5 = newButton6 - SlideWidth;
            var newButton4 = newButton5 - SlideWidth;
            var newButton3 = newButton4 - SlideWidth;
            var newButton2 = newButton3 - SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });


            if (CurrentButton5() > 0 && CurrentButton5() != -62) {
                button5.animateRotate(-180, SlideSpeed);
            }

            if (CurrentButton6() <= 0 && CurrentButton6() != 950) {
                button6.animateRotateMinus(0, SlideSpeed);
            }

        }
    });

    navClick6.click(function (e) {
        e.preventDefault();
        if (block3.is(':not(:animated)') && button2.is(':not(:animated)')) {

            allnavs.css('border-top', 'none');
            //allblocks.css('opacity','0.4');
            allblocks.addClass('opacity-fade');
            allblocks.removeClass('opacity-full');

            if (CurrentButton2() < 0) {
                button2.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton2() >= 0) {
                button2.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton3() < 0) {
                button3.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton3() >= 0) {
                button3.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton4() < 0) {
                button4.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton4() >= 0) {
                button4.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton5() < 0) {
                button5.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton5() >= 0) {
                button5.css({
                    "transform": "rotate(0deg)"
                });
            }
            if (CurrentButton6() < 0) {
                button6.css({
                    "transform": "rotate(180deg)"
                });
            }
            if (CurrentButton6() >= 0) {
                button6.css({
                    "transform": "rotate(0deg)"
                });
            }


            var newMargin6 = 0;
            var newMargin5 = newMargin6 - SlideWidth;
            var newMargin4 = newMargin5 - SlideWidth;
            var newMargin3 = newMargin4 - SlideWidth;
            var newMargin2 = newMargin3 - SlideWidth;
            var newMargin = newMargin2 - SlideWidth;
            block1.delay(SlideSpeed).transition({
                marginLeft: newMargin
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block2.delay(SlideSpeed).transition({
                marginLeft: newMargin2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block3.delay(SlideSpeed).transition({
                marginLeft: newMargin3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block4.delay(SlideSpeed).transition({
                marginLeft: newMargin4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block5.delay(SlideSpeed).transition({
                marginLeft: newMargin5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            block6.delay(SlideSpeed).transition({
                marginLeft: newMargin6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });

            nav6.css('border-top', 'solid 6px #d9d9d9');
            //block6.css('opacity','1');
            block6.addClass('opacity-full');
            block6.removeClass('opacity-fade');

            var newButton6 = -62;
            var newButton5 = newButton6 - SlideWidth;
            var newButton4 = newButton5 - SlideWidth;
            var newButton3 = newButton4 - SlideWidth;
            var newButton2 = newButton3 - SlideWidth;
            button2.delay(SlideSpeed).transition({
                marginLeft: newButton2
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button3.delay(SlideSpeed).transition({
                marginLeft: newButton3
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button4.delay(SlideSpeed).transition({
                marginLeft: newButton4
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button5.delay(SlideSpeed).transition({
                marginLeft: newButton5
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });
            button6.delay(SlideSpeed).transition({
                marginLeft: newButton6
            }, SlideSpeed, function () {
                SetNavigationDisplay()
            });


            if (CurrentButton6() > 0 && CurrentButton6() != -62) {
                button6.animateRotate(-180, SlideSpeed);
            }


        }
    });

});
//***********************************************************************

// scroll arrow**********************************************************
var bodyHeight = $("body").height() - $(window).height();
window.onscroll = function () {
    var deg = -$(window).scrollTop() * ((180 / bodyHeight) * 2);
    if (deg <= 180) {
        $(".scroll-indicator").css({
            "transform": "rotate(" + deg + "deg)",
        });
    }
    if (deg > 180) {
        $(".scroll-indicator").css({
            "transform": "rotate(180deg)",
        });
    }
};
//***********************************************************************



// scroll links**********************************************************
// When the Document Object Model is ready
/*var scroller = 1200;
$(function() {
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, scroller, function () {
        window.location.hash = href;
    });
    return false;
});
});
*/


$(function () {
    var scroller = 700;
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                //if (!$('html,body').is(':animated')) {

                //alert('not animated');

                $('html,body').animate({
                    scrollTop: target.offset().top
                }, scroller);
                return false;
                //}          

            }
        }
    });
    



});
//********************************************************************



//Resize ALL**********************************************************0987
$(function () {
    //detect Firefox and set absolute for slideshow
    var FF = !(window.mozInnerScreenX == null);

    if (FF) {
        //alert("ff");
        $('.cb-slideshow').css('position', 'absolute');
        $('.cb-slideshow li:nth-child(1) span').css('width', w);
        $('.cb-slideshow li:nth-child(1) span').css('height', h);


        $.fn.animateRotate = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 0
                }).animate({
                    deg: angle
                }, args);
            });
        };

        $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 180
                }).animate({
                    deg: angle
                }, args);
            });
        };



        $('.block-scroll-next, .scroll-indicator').animateRotate(180, 0);


        $('.block-scroll-next, .scroll-indicator').animateRotateMinus(0, 0);


    }


    var h = $(window).height();
    var w = $(window).width();
    var st = $(this).scrollTop();

    /*if(st<=((h-151)/2)-12){
    	$('.logo').css('margin-top',(h-151)/2); 
    //alert(st);
    }*/


    if (w < 940) {
        w = 940;
    }


    $('.spacer2').css('margin-left', -(w - 940) / 2);
    $('.spacer2').css('width', w);

    $('.block-border').css('left', -15);
    $('.block-border').css('width', w + 30);

    $('.picture-top').css('height', h - 64);

    /*if(st<=((h-111)/2)-32){
    	$('.logo-background').css('margin-top',(h-111)/2); 
    //alert(st);
    }*/

    $('.big-logo').css('margin-top', (h - 280) / 2);
    
    
    
    $('.scroll-indicator').css({marginTop: 0});
    $('.scroll-indicator').animate({marginTop: (h - 120)}, {duration: 4000, queue: false}, function() {
        //$('.scroll-indicator').css({marginTop: (h - 120)});
        alert('dd');
    });    
    
    $('#scroll-indicator').animate({
        opacity: .82
    }, 0, function () {
        $('.scroll-indicator').css({marginTop: (h - 120)});
        //alert('dd');
    });
    

    
    
    
    
    $('.cb-slideshow').css('height', h);
    $('.cb-slideshow').css('width', w);

    $('.ie-slideshow').css('height', h);
    $('.ie-slideshow').css('width', w);
    $('.block2-shell').css('width', w);
    $('.block2-shell').css('margin-left', -(w - 940) / 2);
    $('.block4-shell').css('width', w);
    $('.block4-shell').css('margin-left', -(w - 940) / 2);
    $('.block7-shell').css('width', w);
    $('.block7-shell').css('margin-left', -(w - 940) / 2);


    $(window).on('resize', function () {
        if (FF) {
            //alert("ff");
            $('.cb-slideshow').css('position', 'absolute');
            $('.cb-slideshow li:nth-child(1) span').css('width', w);
            $('.cb-slideshow li:nth-child(1) span').css('height', h);

        }


        h = $(window).height();
        w = $(window).width();
        st = $(this).scrollTop();

        /*if(st<=((h-151)/2)-12){
    	$('.logo').css('margin-top',(h-151)/2); 
    //alert(st);
    }*/

        if (w < 940) {
            w = 940;
        }


        $('.spacer2').css('margin-left', -(w - 940) / 2);
        $('.spacer2').css('width', w);

        $('.block-border').css('left', -15);
        $('.block-border').css('width', w + 30);

        $('.picture-top').css('height', h - 64);

        /*if(st<=((h-111)/2)-32){
    	$('.logo-background').css('margin-top',(h-111)/2); 
    //alert(st);
    }*/

        $('.big-logo').css('margin-top', (h - 280) / 2);
        $('.scroll-indicator').css('margin-top', (h - 120));
        $('.cb-slideshow').css('height', h);
        $('.cb-slideshow').css('width', w);

        $('.ie-slideshow').css('height', h);
        $('.ie-slideshow').css('width', w);
        $('.block2-shell').css('width', w);
        $('.block2-shell').css('margin-left', -(w - 940) / 2);
        $('.block4-shell').css('width', w);
        $('.block4-shell').css('margin-left', -(w - 940) / 2);
        $('.block7-shell').css('width', w);
        $('.block7-shell').css('margin-left', -(w - 940) / 2);


    });


}); //]]> 
//************************************************************************************************

//Get Screen Size*********************************************************
/*$(document).ready(function(){ 
    
function getScreenSizeInches() {    
    var $temp =  $('<div style="overflow:hidden;visibility:hidden;width:10in"/>').appendTo('body'),
    dpi = $temp[0].offsetWidth / 10;
    return screen.width / dpi;
}
    
var screenSize = getScreenSizeInches();
alert(screenSize);
  
});*/
//************************************************************************  



//Fade In - line2, logo, logo-background**********************************************************
$(function () {
    var divOUT = $('#welcome');
    var divIN = $('.line2, .logo, .logo-background');
    //var st = $(this).scrollTop();
    //alert(st);
    var scrollTop = $(window).scrollTop();
    //alert(scrollTop);
    var elementOffset = divOUT.offset().top;
    //alert(elementOffset);
    var distance = (elementOffset - scrollTop);
    //alert(distance);

    //Slideshow***********************    
    if (distance < 145) {
        $("#slideshow").fadeOut(0);
    }


    if (distance >= 145) {
        $("#slideshow").fadeIn(0);
    }
    //Slideshow***********************

    if (distance < 345) {
        //alert(distance);
        divIN.css('opacity', (((distance - 345) * -1) / 150));
    }
    if (distance < 345) {
        $('.nav a, .nav .current a').css('color', '#222');
        $('.topmenu').css('visibility', 'hidden');
        divIN.css('visibility', 'visible');
    } else {
        $('.nav a, .nav .current a').css('color', '#d9d9d9');
        $('.topmenu').css('visibility', 'visible');
        divIN.css('opacity', 0);
        divIN.css('visibility', 'hidden');
    }
    $(window).on('scroll', function () {
        //var st = $(this).scrollTop();
        //alert(st);
        scrollTop = $(window).scrollTop();
        //alert(scrollTop);
        elementOffset = divOUT.offset().top;
        //alert(elementOffset);
        distance = (elementOffset - scrollTop);
        //alert(distance);

        //Slideshow***********************    
        if ($("#slideshow").is(':visible')) {
            if (distance < 145) {
                $("#slideshow").fadeOut(0);
            }
        }
        if ($("#slideshow").is(':hidden')) {
            if (distance >= 145) {
                $("#slideshow").fadeIn(0);
            }
        }
        //Slideshow***********************

        if (distance < 345) {
            //alert(distance);
            divIN.css('opacity', (((distance - 345) * -1) / 150));
        }
        if (distance < 345) {
            $('.nav a, .nav .current a').css('color', '#222');
            $('.topmenu').css('visibility', 'hidden');
            divIN.css('visibility', 'visible');
        } else {
            $('.nav a, .nav .current a').css('color', '#d9d9d9');
            $('.topmenu').css('visibility', 'visible');
            divIN.css('opacity', 0);
            divIN.css('visibility', 'hidden');
        }
    });

}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 2**********************************************************33333
$(function () {
    var title = $('.block-border-top2');
    var divOUT1 = $('.block-border-section2');
    var divOUT2 = $('.block-border-section2');
    var button = $('.block-scroll-next-link2');
    var done = 0;
    var clicked = 0;


    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);


    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }


    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }


    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        var tt
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 3**********************************************************
$(function () {
    var title = $('.block-border-top3');
    var divOUT1 = $('.block-border-section3');
    var divOUT2 = $('.block-border-section3');
    var button = $('.block-scroll-next-link3');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 4**********************************************************
$(function () {
    var title = $('.block-border-top4');
    var divOUT1 = $('.block-border-section4');
    var divOUT2 = $('.block-border-section4');
    var button = $('.block-scroll-next-link4');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 5**********************************************************
$(function () {
    var title = $('.block-border-top5');
    var divOUT1 = $('.block-border-section5');
    var divOUT2 = $('.block-border-section5');
    var button = $('.block-scroll-next-link5');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 6**********************************************************
$(function () {
    var title = $('.block-border-top6');
    var divOUT1 = $('.block-border-section6');
    var divOUT2 = $('.block-border-section6');
    var button = $('.block-scroll-next-link6');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 7**********************************************************
$(function () {
    var title = $('.block-border-top7');
    var divOUT1 = $('.block-border-section7');
    var divOUT2 = $('.block-border-section7');
    var button = $('.block-scroll-next-link7');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************


//Fade/Out In - title1**********************************************************
$(function () {
    var title = $('.nav-word1');
    var divOUT1 = $('#welcome');
    var divOUT2 = $('#guns');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 345 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 345 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - title2**********************************************************
$(function () {
    var title = $('.nav-word2');
    var divOUT1 = $('#guns');
    var divOUT2 = $('#pawn');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - title3**********************************************************
$(function () {
    var title = $('.nav-word3');
    var divOUT1 = $('#pawn');
    var divOUT2 = $('#gold');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//****************************************************************************

////Fade/Out In - title4**********************************************************
//$(function () {
//    var title = $('.nav-word4');
//    var divOUT1 = $('#loans');
//    var divOUT2 = $('#gold');
//
//    var scrollTop1 = $(window).scrollTop();
//    var elementOffset1 = divOUT1.offset().top;
//    var distance1 = (elementOffset1 - scrollTop1);
//
//    var scrollTop2 = $(window).scrollTop();
//    var elementOffset2 = divOUT2.offset().top;
//    var distance2 = (elementOffset2 - scrollTop2);
//
//    if (distance1 < 550 && distance2 > 550) {
//        title.css('border-top', 'solid 10px #222');
//    } else {
//        title.css('border-top', 'solid 0px #222');
//    }
//
//    $(window).on('scroll', function () {
//        scrollTop1 = $(window).scrollTop();
//        elementOffset1 = divOUT1.offset().top;
//        distance1 = (elementOffset1 - scrollTop1);
//
//        scrollTop2 = $(window).scrollTop();
//        elementOffset2 = divOUT2.offset().top;
//        distance2 = (elementOffset2 - scrollTop2);
//
//        if (distance1 < 550 && distance2 > 550) {
//            title.css('border-top', 'solid 10px #222');
//        } else {
//            title.css('border-top', 'solid 0px #222');
//        }
//
//    });
//}); //]]>
////****************************************************************************

//Fade/Out In - title5**********************************************************
$(function () {
    var title = $('.nav-word5');
    var divOUT1 = $('#gold');
    var divOUT2 = $('#check-cashing');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//****************************************************************************

//Fade/Out In - title6**********************************************************
$(function () {
    var title = $('.nav-word6');
    var divOUT1 = $('#check-cashing');
    var divOUT2 = $('#more');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//****************************************************************************

//Fade/Out In - title7**********************************************************
$(function () {
    var title = $('.nav-word7');
    var divOUT1 = $('#more');
    var divOUT2 = $('.blockfinal');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #222');
    } else {
        title.css('border-top', 'solid 0px #222');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #222');
        } else {
            title.css('border-top', 'solid 0px #222');
        }

    });
}); //]]>
//****************************************************************************

//Resize .blockfinal**********************************************************
$(function () {
    var divs = $('.blockfinal');
    var h = $(window).height();
    divs.css('height', h);
    $('.picturefinal').css('margin-top', (h / 2) - 100);
    $(window).on('resize', function () {
        var h = $(window).height();
        divs.css('height', h);
        $('.picturefinal').css('margin-top', (h / 2) - 100);
    });

}); //]]> 
//****************************************************************************

//Fix Nav Borders**********************************************************
$(function () {
    var w = $(window).width();
    $('.border-shell').css('width', w - ((w - 940) / 2));
    $('.border-shell').css('left', -(w - 940) / 2);
    $('.border-shell').css('padding-left', (w - 940) / 2);

    if (w < 940) {
        $('.border-shell').css('width', 940);
        $('.border-shell').css('left', 0);
        $('.border-shell').css('padding-left', 0);
    }

    var w = $(window).width();
    $('.section-break').css('width', w - ((w - 940) / 2));
    $('.section-break').css('margin-left', -(w - 940) / 2);
    $('.section-break').css('padding-left', (w - 940) / 2);

    if (w < 940) {
        $('.section-break').css('width', 940);
        $('.section-break').css('margin-left', 0);
        $('.section-break').css('padding-left', 0);
    }


    $(window).on('resize', function () {
        var w = $(window).width();
        $('.border-shell').css('width', w - ((w - 940) / 2));
        $('.border-shell').css('left', -(w - 940) / 2);
        $('.border-shell').css('padding-left', (w - 940) / 2);

        if (w < 940) {
            $('.border-shell').css('width', 940);
            $('.border-shell').css('left', 0);
            $('.border-shell').css('padding-left', 0);
        }

        var w = $(window).width();
        $('.section-break').css('width', w - ((w - 940) / 2));
        $('.section-break').css('margin-left', -(w - 940) / 2);
        $('.section-break').css('padding-left', (w - 940) / 2);

        if (w < 940) {
            $('.section-break').css('width', 940);
            $('.section-break').css('margin-left', 0);
            $('.section-break').css('padding-left', 0);
        }

    });


});
//****************************************************************************

//Fade In/Out navs**********************************************************
$(document).ready(function () {
    var fout = 515;
    var fin = 142;
    var divOUT1 = $('.spacer-block2-out');
    var divOUT11 = $('#pawn');
    var divOUT2 = $('.spacer-block4-out');
    var divOUT22 = $('#gold');
    var divOUT3 = $('.spacer-block7-out');
    var divOUT33 = $('.blockfinal');
    var divIN1 = $('.spacer-block2');
    var divIN1B = $('.nav-bg2');
    var divIN2 = $('.spacer-block4');
    var divIN2B = $('.nav-bg4');
    var divIN3 = $('.spacer-block7');
    var divIN3B = $('.nav-bg7');
    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);

    var elementOffset11 = divOUT11.offset().top;
    var distance11 = (elementOffset11 - scrollTop);

    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop);

    var elementOffset22 = divOUT22.offset().top;
    var distance22 = (elementOffset22 - scrollTop);

    var elementOffset3 = divOUT3.offset().top;
    var distance3 = (elementOffset3 - scrollTop);

    var elementOffset33 = divOUT33.offset().top;
    var distance33 = (elementOffset33 - scrollTop);


    if (distance1 <= fin) {
        divIN1.css('position', 'fixed');
        divIN1.css('top', '105px');
        divIN1B.css('position', 'fixed');
    }


    if (distance1 > fin) {
        divIN1.css('position', 'absolute');
        divIN1.css('top', '-37px');
        divIN1B.css('position', 'absolute');
    }

    if (divIN1.is(':visible')) {
        if (distance11 <= fout) {
            divIN1.fadeOut(0);
        }
    }
    if (divIN1.is(':hidden')) {
        if (distance11 > fout) {
            divIN1.fadeIn(0);
        }
    }






    if (distance2 <= fin) {
        divIN2.css('position', 'fixed');
        divIN2.css('top', '105px');
        divIN2B.css('position', 'fixed');
    }


    if (distance2 > fin) {
        divIN2.css('position', 'absolute');
        divIN2.css('top', '-37px');
        divIN2B.css('position', 'absolute');
    }

    if (divIN2.is(':visible')) {
        if (distance22 <= fout) {
            divIN2.fadeOut(0);
        }
    }
    if (divIN2.is(':hidden')) {
        if (distance22 > fout) {
            divIN2.fadeIn(0);
        }
    }



    if (distance3 <= fin) {
        divIN3.css('position', 'fixed');
        divIN3.css('top', '105px');
        divIN3B.css('position', 'fixed');
    }


    if (distance3 > fin) {
        divIN3.css('position', 'absolute');
        divIN3.css('top', '-37px');
        divIN3B.css('position', 'absolute');
    }

    if (divIN3.is(':visible')) {
        if (distance33 <= 390) {
            divIN3.fadeOut(0);
        }
    }
    if (divIN3.is(':hidden')) {
        if (distance33 > 390) {
            divIN3.fadeIn(0);
        }
    }

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        elementOffset11 = divOUT11.offset().top;
        distance11 = (elementOffset11 - scrollTop);

        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop);

        elementOffset22 = divOUT22.offset().top;
        distance22 = (elementOffset22 - scrollTop);

        elementOffset3 = divOUT3.offset().top;
        distance3 = (elementOffset3 - scrollTop);

        elementOffset33 = divOUT33.offset().top;
        distance33 = (elementOffset33 - scrollTop);


        if (distance1 <= fin) {
            divIN1.css('position', 'fixed');
            divIN1.css('top', '105px');
            divIN1B.css('position', 'fixed');
        }

        if (distance1 > fin) {
            divIN1.css('position', 'absolute');
            divIN1.css('top', '-37px');
            divIN1B.css('position', 'absolute');
        }

        if (divIN1.is(':visible')) {
            if (distance11 <= fout) {
                divIN1.fadeOut(100);
            }
        }
        if (divIN1.is(':hidden')) {
            if (distance11 > fout) {
                divIN1.fadeIn(100);
            }
        }


        if (distance2 <= fin) {
            divIN2.css('position', 'fixed');
            divIN2.css('top', '105px');
            divIN2B.css('position', 'fixed');
        }


        if (distance2 > fin) {
            divIN2.css('position', 'absolute');
            divIN2.css('top', '-37px');
            divIN2B.css('position', 'absolute');
        }

        if (divIN2.is(':visible')) {
            if (distance22 <= fout) {
                divIN2.fadeOut(100);
            }
        }
        if (divIN2.is(':hidden')) {
            if (distance22 > fout) {
                divIN2.fadeIn(100);
            }
        }

        if (distance3 <= fin) {
            divIN3.css('position', 'fixed');
            divIN3.css('top', '105px');
            divIN3B.css('position', 'fixed');
        }


        if (distance3 > fin) {
            divIN3.css('position', 'absolute');
            divIN3.css('top', '-37px');
            divIN3B.css('position', 'absolute');
        }

        if (divIN3.is(':visible')) {
            if (distance33 <= 390) {
                divIN3.fadeOut(100);
            }
        }
        if (divIN3.is(':hidden')) {
            if (distance33 > 390) {
                divIN3.fadeIn(100);
            }
        }




    });

}); //]]>
//******************************************************************************
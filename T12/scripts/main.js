//Detect Webkit**********************************************************
$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var bgDIVS = $('.block-border-inside, #background-one, #background-three, #background-five');

    if (isiPhone > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPad > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPod > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }


    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');

    } else if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {

        //alert(window.devicePixelRatio);

        if (window.matchMedia) {
            var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen  and (min-device-pixel-ratio: 1.5), only screen and (min-resolution: 1.5dppx)");
            if (mq && mq.matches || (window.devicePixelRatio > 1.4)) {
                //return true;
                //alert('Retina!');
                bgDIVS.css('position', 'fixed');
                bgDIVS.css('background-attachment', 'local');
            } else {
                //return false;
                //alert('Old!');
            }
        }
        //$('.block-border-inside').css('position', 'fixed');
        //$('.block-border-inside').css('background-attachment', 'local');
        //$('.block-border-inside').css('-webkit-transform', 'translateZ(0)');


    }



});
//****************************************************************************

//Facebook Button**********************************************************
$(function () {
    

        $('#main').animate({
            opacity: 1,
        }, {
            duration: 1800,
            queue: false
        });

    $('#facebook-icon').click(function () {

        $('#facebook-background').fadeIn(600);

        $('#facebook-icon').animate({
            opacity: 0,
            width: 0,
            height: 0,
            fontSize: 20
        }, {
            duration: 600,
            queue: false
        });

        $('#facebook-plugin').fadeIn(600);

        $('#facebook-plugin').animate({
            opacity: 1,
            width: 300,
            height: 215,
        }, {
            duration: 600,
            queue: false
        });

    });




    $('#facebook-background').click(function (e) {

        var container = $('#facebook-icon');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            
            $('#facebook-background').fadeOut(600);
            
            $('#facebook-plugin').fadeOut(600);

            $('#facebook-plugin').animate({
                opacity: 0,
                width: 0,
                height: 0,
            }, {
                duration: 600,
                queue: false
            });

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        }

    });


});

//****************************************************************************

//Fade Dark - logo-background**********************************************************
$(function () {
    var divOUT = $('#block1');
    var scrollTop = $(window).scrollTop();
    var elementOffset = divOUT.offset().top;
    var distance = (elementOffset - scrollTop);


    if (distance < -5) {
        //$('#logo-background').stop().animate({ backgroundColor: "rgba(32, 32, 32, 0.92);" },700);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});
        //alert('dark');
        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);

    } else {
        //$('#logo-background').stop().animate({ backgroundColor: "rgba(255, 255, 255, 0.92);" },700);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});
        //alert('light');
        $('#logo-background-dark').fadeOut(0);
        $('#logo-background').fadeIn(0);

        $('#logo-dark').fadeOut(0);
        $('#logo').fadeIn(0);

    }


    var pathname = $(location).attr('href');

    if ((/two/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/three/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/four/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/five/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/six/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/contact/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }


    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();
        elementOffset = divOUT.offset().top;
        distance = (elementOffset - scrollTop);

        if (distance < -5) {
            //$('#main').css('opacity', '.5');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(32, 32, 32, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(255, 255, 255, 0.92)');
            //$('#logo-background').css("background", "rgba(32, 32, 32, 0.92)");
            $('#logo-background').fadeOut(600);
            $('#logo-background-dark').fadeIn(600);

            $('#logo').fadeOut(600);
            $('#logo-dark').fadeIn(600);
            //alert('dark');

        } else {
            //$('#main').css('opacity', '1');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(255, 255, 255, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(32, 32, 32, 0.92)');
            //$('#logo-background').css("background", "rgba(255, 255, 255, 0.92)");
            $('#logo-background-dark').fadeOut(600);
            $('#logo-background').fadeIn(600);

            $('#logo-dark').fadeOut(600);
            $('#logo').fadeIn(600);
            //alert('light');

        }

    });



}); //]]>
//******************************************************************************




/* scroll arrow**********************************************************
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
***********************************************************************/



//scroll links**********************************************************

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

        var w = $(window).width();

        if (w < 940) {

            $('#load-shell, #big-logo').fadeOut(0);
            $('#load-background').fadeOut(0);

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


    $('.picture-top').css('height', h - 64);
    $('#background-picture').css('height', h);

    $('.load-shell-center').css('margin-top', (h - 400) / 2);

    //MAKE BACKGROUNDS MATCH CONTAINERS*****************************

    window.onload = function () {

        var bgHeight1 = $('#section-one').height();
        var bgHeight3 = $('#section-three').height();
        var bgHeight5 = $('#section-five').height();

        $('#background-main1').css('height', bgHeight1 + 20);
        $('#background-main3').css('height', bgHeight3 + 20);
        $('#background-main5').css('height', bgHeight5 + 20);

    };

    //MAKE BACKGROUNDS MATCH CONTAINERS*****************************



    $('.ie-slideshow').css('height', h);
    $('.ie-slideshow').css('width', w);

    var width = $(window).width(),
        height = $(window).height();

    $(window).on('resize', function () {


        h = $(window).height();
        w = $(window).width();

        //MAKE BACKGROUNDS MATCH CONTAINERS*****************************

        var bgHeight1 = $('#section-one').height();
        var bgHeight3 = $('#section-three').height();
        var bgHeight5 = $('#section-five').height();

        $('#background-main1').css('height', bgHeight1 + 20);
        $('#background-main3').css('height', bgHeight3 + 20);
        $('#background-main5').css('height', bgHeight5 + 20);

        //MAKE BACKGROUNDS MATCH CONTAINERS*****************************


        //st = $(this).scrollTop();

        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
        if (isAndroid > -1) {

            if ($(window).width() != width && $(window).height() != height) {


                $('.picture-top').css('height', h - 64);
                $('#background-picture').css('height', h);
                $('.load-shell-center').css('margin-top', (h - 400) / 2);





                $('.ie-slideshow').css('height', h);
                $('.ie-slideshow').css('width', w);


            }

        } else {

            $('.picture-top').css('height', h - 64);
            $('#background-picture').css('height', h);
            $('.load-shell-center').css('margin-top', (h - 400) / 2);





            $('.ie-slideshow').css('height', h);
            $('.ie-slideshow').css('width', w);

        }





    });


}); //]]> 
//************************************************************************************************




//Fade In - line2, logo, logo-background**********************************************************
$(function () {
    var divOUT = $('.block3');

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


    });

}); //]]>
//******************************************************************************






//Fade/Out In - Title Borders**********************************************************
$(document).ready(function () {

    //Call Functions*****************************************************************************
    $(function () {
        $.fn.menuBorderTopFunction($('.nav-word1'), $('.block1'), $('.block2'), "Title 0", "Title 1", "0", "1");
        $.fn.menuBorderTopFunction($('.nav-word2'), $('.block2'), $('.block3'), "Title 1", "Title 2", "1", "2");
        $.fn.menuBorderTopFunction($('.nav-word3'), $('.block3'), $('.block4'), "Title 2", "Title 3", "2", "3");
        $.fn.menuBorderTopFunction($('.nav-word4'), $('.block4'), $('.block5'), "Title 3", "Title 4", "3", "4");
        $.fn.menuBorderTopFunction($('.nav-word5'), $('.block5'), $('.block6'), "Title 4", "Title 5", "4", "5");
        $.fn.menuBorderTopFunction($('.nav-word6'), $('.block6'), $('.block7'), "Title 5", "Title 6", "5", "6");
    });
    //******************************************************************************


    //CODE*****************************************************************************
    $.fn.menuBorderTopFunction = function (title, divOUT1, divOUT2, historyOUT, historyIN, linkTitleOUT, linkTitleIN) {

        var scrollTop1 = $(window).scrollTop();
        var elementOffset1 = divOUT1.offset().top;
        var distance1 = (elementOffset1 - scrollTop1);

        var scrollTop2 = $(window).scrollTop();
        var elementOffset2 = divOUT2.offset().top;
        var distance2 = (elementOffset2 - scrollTop2);

        var shown = 0

        if (distance1 < 550 && distance2 > 551) {
            title.css('border-top', 'solid 10px #aaa');
            if (shown == 0) {
                var stateObj = {
                    foo: linkTitleIN
                };
                history.replaceState(stateObj, historyIN, "/" + linkTitleIN);
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #aaa');
            shown = 0;
        }

        $(window).on('scroll', function () {
            scrollTop1 = $(window).scrollTop();
            elementOffset1 = divOUT1.offset().top;
            distance1 = (elementOffset1 - scrollTop1);

            scrollTop2 = $(window).scrollTop();
            elementOffset2 = divOUT2.offset().top;
            distance2 = (elementOffset2 - scrollTop2);


            if (distance1 < 550 && distance2 > 551) {
                title.css('border-top', 'solid 10px #aaa');
                if (shown == 0) {
                    var stateObj = {
                        foo: linkTitleIN
                    };
                    history.replaceState(stateObj, historyIN, "/" + linkTitleIN);
                    shown = 1;
                }
            } else {
                title.css('border-top', 'solid 0px #aaa');
                shown = 0;
            }

        });
    }
    //******************************************************************************

});

//******************************************************************************




//Fade/Out In - title7**********************************************************
$(function () {
    var title = $('.nav-word7');
    var divOUT1 = $('#linkfinal');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);



    var shown = 0

    if (distance1 < 550) {
        title.css('border-top', 'solid 10px #aaa');

        if (shown == 0) {
            var stateObj = {
                foo: "contact"
            };
            history.replaceState(stateObj, "One - Contact", "/contact");
            shown = 1;
        }
    } else {
        title.css('border-top', 'solid 0px #aaa');
        shown = 0;
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);



        if (distance1 < 550) {
            title.css('border-top', 'solid 10px #aaa');

            if (shown == 0) {
                var stateObj = {
                    foo: "contact"
                };
                history.replaceState(stateObj, "One - Contact", "/contact");
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #aaa');
            shown = 0;
        }

    });
}); //]]>
//****************************************************************************

//Resize .blockfinal**********************************************************
$(function () {
    var divs = $('.bigger, #contact');
    var h = $(window).height();
    var isios = 0;
    var issmallios = 0;

    if (h < 762) {
        h = 762;
    }

    divs.css('height', h);
    $('#contact').css('margin-top', -h);
    $('.block7-shell').css('margin-top', h - 650 - 112);

    $(window).on('resize', function () {
        var h = $(window).height();
        //alert($('.block7').css('height'));

        if (h < 762) {
            h = 762;
        }

        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");


        if (isiPhone > -1) {

            isios = 1;
            issmallios = 1;

        }

        if (isiPod > -1) {

            isios = 1;
            issmallios = 1;

        }


        if (isiPad > -1) {

            isios = 1;

        }


        if (isios == 1) {

            divs.css('height', h + 60);
            $('#contact').css('margin-top', -(h + 60));
            $('.block7-shell').css('margin-top', h + 60 - 650 - 112);
            //$('#mini-menu, #logo-background, #logo-background-dark').css('border-radius', '2px');


            if (issmallios == 1) {

                divs.css('height', h + 200);
                $('#contact').css('margin-top', -(h + 200));
                $('.block7-shell').css('margin-top', h + 200 - 650 - 112);

            }

        } else {

            divs.css('height', h);
            $('#contact').css('margin-top', -h);
            $('.block7-shell').css('margin-top', h - 650 - 112);

        }


    });


}); //]]> 
//****************************************************************************

//Fade In/Out section-one**********************************************************
$(function () {
    var fout = -1250;
    var fin = 412;
    var divOUT1 = $('#section-one');
    var divIN1 = $('.block-box-section-one, block-box-facebook');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: 0
            }, {
                duration: 600,
                queue: false
            });*/
            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }
    if (distance1 < fout) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {
                    divIN1.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: 0
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }




    });

}); //]]>
//******************************************************************************


//Fade In/Out section-five**********************************************************
$(function () {
    var fout = -1250;
    var fin = 412;
    var divOUT1 = $('#section-five');
    var divIN1 = $('.block-box-section-five');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: 0
            }, {
                duration: 600,
                queue: false
            });*/
            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }
    if (distance1 < fout) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {
                    divIN1.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: 0
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }




    });

}); //]]>
//******************************************************************************

//Fade In/Out facebook icon**********************************************************
$(function () {
    var fout = -1250;
    var fin = 412;
    var divOUT1 = $('#contact');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 0,
                width: 0,
                height: 0,
                fontSize: 20
            }, {
                duration: 600,
                queue: false
            });

            $('#facebook-background').fadeOut(600);

            $('#facebook-plugin').fadeOut(600);

            $('#facebook-plugin').animate({
                opacity: 0,
                width: 0,
                height: 0,
            }, {
                duration: 600,
                queue: false
            });

            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        });
    }
    if (distance1 < fout) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 0,
                        width: 0,
                        height: 0,
                        fontSize: 20
                    }, {
                        duration: 600,
                        queue: false
                    });

                    $('#facebook-background').fadeOut(600);

                    $('#facebook-plugin').fadeOut(600);

                    $('#facebook-plugin').animate({
                        opacity: 0,
                        width: 0,
                        height: 0,
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 1,
                        width: 50,
                        height: 50,
                        fontSize: 10
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 1,
                        width: 50,
                        height: 50,
                        fontSize: 10
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
        }




    });

}); //]]>
//******************************************************************************


//detect bottom of page
$(function () {
    var baseshow = 0;
    var isios = 0;
    var issmallios = 0;

    $(window).scroll(function () {


        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

        if (isiPhone > -1) {

            isios = 1;
            issmallios = 1;

        }

        if (isiPod > -1) {

            isios = 1;
            issmallios = 1;

        }


        if (isiPad > -1) {

            isios = 1;

        }



        if (issmallios == 1) {


            $('#base-text').fadeIn(0);
            baseshow = 1;


        } else {

            if (isios == 1) {

                if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height() + 10 + 60) {
                    $('#base-text').fadeIn(300);
                    baseshow = 1;

                } else {
                    if (baseshow == 1) {
                        $('#base-text').fadeOut(100);
                        baseshow = 0;
                    }
                }

            } else {

                if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height() + 10) {
                    $('#base-text').fadeIn(300);
                    //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});

                    baseshow = 1;
                } else {
                    if (baseshow == 1) {
                        $('#base-text').fadeOut(100);
                        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});
                        baseshow = 0;
                    }
                }

            }

        }

    });

});
//******************************************************************************









//Responsive**********************************************************0987
$(document).ready(function () {
    var pathname = $(location).attr('href');
    var h = $(window).height();
    var w = $(window).width();
    var st = $(this).scrollTop();
    var mobilecheck = 0;
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var landscapetrigger = 0;

    $('.logos').css('left', '0');
    $('.envira-gallery-item').css('border-radius', '2px');
    $('.envira-gallery-item').css('overflow', 'hidden');
    $('.envira-gallery-item').css('box-shadow', '0px 0px 3px 0px rgba(0,0,0,0.5)');


    $('.close-button').click(function () {

        window.location.href = "";

    });

    if (isiPhone > -1) {
        mobilecheck = 1;
    }
    if (isiPad > -1) {
        mobilecheck = 1;
    }
    if (isiPod > -1) {
        mobilecheck = 1;
    }
    if (isAndroid > -1) {
        mobilecheck = 1;
    }





    //Responsive Actions*****************************************************************************

    //MOBILE******************************************************
    function mobile() {

        $('.logos').css('margin-left', '-2px');
        $('#line2').fadeOut(0);
        $('.navigation-top').css('visibility', 'hidden');
        $('#hamburger').fadeIn(0);
        $('.inner20').css('width', (w * .88) - 30);


        $('#background-one').css('background-position', '25% 50%');
        $('#background-five').css('background-position', '80% 50%');

        $('.block1').css('margin-right', '');
        $('.block1').css('margin-left', '6%');
        $('.block-box-section-one').css('margin-left', '0');

        $('.inner21, .inner22').css('width', '57%');
        $('.inner21, .inner22').css('margin-left', '6%');
        $('.inner21, .inner22').css('margin-right', '6%');
        $('.inner21, .inner22').css('max-width', '1000px');

        $('.icon-set-left, .icon-set-right').css('width', '80%');
        $('.icon-set-left, .icon-set-right').css('margin-left', '0');
        $('.icon-set-left, .icon-set-right').css('margin-right', '0');

        $('#base-shell').fadeOut(0);
        $('h1,h2,h3,h4,h5,h6').css('text-align', 'center');

        $('#picturefinal').fadeOut(0);
        $('#picturefinal-mini').fadeIn(0);

        $('#load-background').css('zoom', '60%');
        $('#load-background').css('padding-top', '20%');

        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');

        if (w < 791) {
            $('.archive .main,.blog .main').css('width', '100%');
            $('.excerpt').css('margin', '20px');
            $('.excerpt:first-of-type').css('margin-top', '40px');
        }


        //ICON SET & TESTIMONIALS******************************************

        $('.list-icon-left, .list-icon-right').css('font-size', '28px');
        $('.list-text-left, .list-text-right').css('font-size', '28px');

        $('.testimonial1, .testimonial2').css('min-width', '500px');

        if (w < 600) {
            $('.testimonial1, .testimonial2').css('min-width', '300px');

            $('.list-icon-left, .list-icon-right').css('font-size', '18px');
            $('.list-text-left, .list-text-right').css('font-size', '20px');

            if (w < 410) {
                $('.list-icon-left, .list-icon-right').css('font-size', '16px');
                $('.list-text-left, .list-text-right').css('font-size', '18px');
            }

        }

        //ICON SET & TESTIMONIALS******************************************

    }
    //MOBILE******************************************************


    //DESKTOP******************************************************    
    function desktop() {

        //DESKTOP******************************************************
        $('.logos').css('margin-left', ((w - 940) / 2) - 30);
        $('#line2').fadeIn(0);
        $('.navigation-top').css('visibility', 'visible');
        $('#hamburger').fadeOut(0);
        $('#mini-menu, #mini-menu-background').fadeOut(0);
        $('#mini-menu').css('right', '-300px');
        $('#hamburger').css('right', '25px');
        $('.inner20').css('width', '46%');


        $('#background-one').css('background-position', 'center');
        $('#background-five').css('background-position', 'center');

        $('.block1').css('margin-right', '6%');
        $('.block1').css('margin-left', '');
        $('.block-box-section-one').css('margin-left', '50%');

        open = 0;

        $('.inner21, .inner22').css('width', '46%');
        $('.inner21').css('margin-left', '1%');
        $('.inner21').css('margin-right', '3%');
        $('.inner22').css('margin-left', '3%');
        $('.inner22').css('margin-right', '1%');
        $('.inner21, .inner22').css('max-width', '428px');

        $('.state-width').css('max-width', '350px');

        $('#base-shell').fadeIn(0);
        $('h1,h2,h3,h4,h5,h6').css('text-align', 'left');

        $('#picturefinal').fadeIn(0);
        $('#picturefinal-mini').fadeOut(0);

        $('#load-background').css('zoom', '100%');
        $('#load-background').css('padding-top', '0');

        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');




        //ICON SET & TESTIMONIALS******************************************

        $('.testimonial1, .testimonial2').css('min-width', '350px');

        $('.list-icon-left, .list-icon-right').css('font-size', '18px');
        $('.list-text-left, .list-text-right').css('font-size', '20px');

        //ICON SET & TESTIMONIALS******************************************

    }
    //DESKTOP******************************************************

    //******************************************************************************








    if (mobilecheck == 1) {
        $('.expand').css('visibility', 'hidden');
        $('.close-button').fadeOut(0);
        $('.footerbar').fadeIn(0);
        $('.bottom-margin').fadeIn(0);
        $('.bottom-margin').css('height', '80px');


        var pathname = $(location).attr('href');

        function doOnOrientationChange() {
            switch (window.orientation) {
            case -90:
            case 90:
                //alert('landscape');

                /*w = $(window).width();
                    
                if (w < 940) {
                    $('.logo').css('visibility', 'hidden');
                    $('.logo-background').fadeOut(0);
                    $('.navigation-top').css('visibility', 'hidden');
                    //$('.bottom').css('zoom', '.5');
                    $('.footerbar').css('top', '0');
                    $('body, html').css('margin-top', '-2px');
                }*/

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (w < 940) {
                        landscapetrigger = 1;
                        document.getElementById("viewport").setAttribute("content", "width=1068");

                        h = $(window).height();
                        w = $(window).width();

                        desktop();



                        $('.picture-top').css('height', h - 64);
                        $('.load-shell-center').css('margin-top', (h - 400) / 2);


                        $('.ie-slideshow').css('height', h);
                        $('.ie-slideshow').css('width', w);



                        if ((/#/.test(pathname))) {

                        } else {
                            window.location = pathname + '#';
                        }

                    } else {
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        if (w < 940) {
                            mobile();

                        } else {
                            desktop();

                        }

                        //$('.expand').css('margin-left', w - 52);
                    }

                }






                break;
            default:
                //alert('portrait');

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (landscapetrigger == 1) {
                        landscapetrigger = 0;
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        w = $(window).width();

                        if (w < 940) {
                            mobile();

                        } else {
                            desktop();

                        }

                        //$('.expand').css('margin-left', w - 52);
                    }

                }
                break;
            }
        }

        window.addEventListener('orientationchange', doOnOrientationChange);

        // Initial execution if needed
        doOnOrientationChange();


    }
    //alert(pathname);

    if (w < 940) {
        mobile();

    } else {
        desktop();

    }
    //$('.expand').css('margin-left', w - 52);



    $(window).on('resize', function () {

        w = $(window).width();
        if (w < 940) {
            mobile();

        } else {
            desktop();

        }

        //$('.expand').css('margin-left', w - 52);


    });

    //Testimonials****************************************
    w = $(window).width();

    if (w < 822) {

        $('.testimonial-left').css('margin-left', '5%');
        $('.testimonial-right').css('margin-right', '5%');

    } else {

        $('.testimonial-left').css('margin-left', '0');
        $('.testimonial-right').css('margin-right', '0');

    }

    $(window).on('resize', function () {
        w = $(window).width();

        if (w < 822) {

            $('.testimonial-left').css('margin-left', '5%');
            $('.testimonial-right').css('margin-right', '5%');

        } else {

            $('.testimonial-left').css('margin-left', '0');
            $('.testimonial-right').css('margin-right', '0');

        }

    });
    //Testimonials****************************************


    //Galleries****************************************
    /*w = $(window).width();

    if (w < 620) {

        $('.gallery-thumb').css('width', w * .88);

    } else {

        $('.gallery-thumb').css('width', '40%');

    }

    $(window).on('resize', function () {
        w = $(window).width();

        if (w < 620) {

            $('.gallery-thumb').css('width', w * .88);

        } else {

            $('.gallery-thumb').css('width', '40%');

        }

    });*/
    //Galleries****************************************






}); //]]> 
//************************************************************************************************

var open = 0;

//Hamburger Click**********************************************************0987
$(function () {

    $('#mini-menu-background, #mini-menu-item').click(function () {


        if (open == 0) {




        } else {

            $('#mini-menu-background').fadeOut(500);

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 30
            }, {
                duration: 500,
                queue: false
            });



            open = 0;




        }

    });

    $('#hamburger').click(function () {


        if (open == 0) {


            $('#mini-menu').fadeIn(500);

            $('#mini-menu').animate({
                right: 0
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: -4
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeIn(500);

            open = 1;


        } else {

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 30
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeOut(500);

            open = 0;




        }

    });





}); //]]> 
//*************************************************************************************************
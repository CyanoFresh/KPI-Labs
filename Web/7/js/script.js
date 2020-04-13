(function () {
    var userAgent = navigator.userAgent.toLowerCase(), initialDate = new Date(), $window = $(window),
        $document = $(document), $html = $('html'), isDesktop = $html.hasClass("desktop"),
        isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false,
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        plugins = {
            materialParallax: $(".parallax-container"),
            owl: $(".owl-carousel"),
            camera: $('.camera_wrap'),
            regula: $("[data-constraints]"),
        };
    $document.ready(function () {
        var isNoviBuilder = window.xMode;

        function initOwlCarousel(c) {
            var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-", "-xl-"], values = [0, 480, 768, 992, 1200, 1600],
                responsive = {}, j, k;
            for (j = 0; j < values.length; j++) {
                responsive[values[j]] = {};
                for (k = j; k >= -1; k--) {
                    if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
                        responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
                    }
                    if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
                        responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
                    }
                    if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
                        responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
                    }
                }
            }
            if (c.attr('data-dots-custom')) {
                c.on("initialized.owl.carousel", function (event) {
                    var carousel = $(event.currentTarget), customPag = $(carousel.attr("data-dots-custom")), active = 0;
                    if (carousel.attr('data-active')) {
                        active = parseInt(carousel.attr('data-active'), 10);
                    }
                    carousel.trigger('to.owl.carousel', [active, 300, true]);
                    customPag.find("[data-owl-item='" + active + "']").addClass("active");
                    customPag.find("[data-owl-item]").on('click', function (e) {
                        e.preventDefault();
                        carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
                    });
                    carousel.on("translate.owl.carousel", function (event) {
                        customPag.find(".active").removeClass("active");
                        customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
                    });
                });
            }
            c.owlCarousel({
                autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
                loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
                items: 1,
                dotsContainer: c.attr("data-pagination-class") || false,
                navContainer: c.attr("data-navigation-class") || false,
                mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
                nav: c.attr("data-nav") === "true",
                dots: (isNoviBuilder && c.attr("data-nav") !== "true") ? true : c.attr("data-dots") === "true",
                dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
                animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
                animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
                responsive: responsive,
                navText: c.attr("data-nav-text") ? $.parseJSON(c.attr("data-nav-text")) : [],
                navClass: c.attr("data-nav-class") ? $.parseJSON(c.attr("data-nav-class")) : ['owl-prev', 'owl-next']
            });
        }

        if (!isNoviBuilder && isDesktop) {
            $().UItoTop({easingType: 'easeOutQuart', containerClass: 'toTop fa fa-angle-up'});
        }
        if (!isNoviBuilder && !isIE && isDesktop) {
            new WOW().init();
        }
        if (plugins.owl.length) {
            for (var i = 0; i < plugins.owl.length; i++) {
                var c = $(plugins.owl[i]);
                plugins.owl[i] = c;
                if (!c.parents('.tab-content').length) {
                    initOwlCarousel(c);
                }
            }
        }
        if (plugins.camera.length) {
            $document.ready(function () {
                plugins.camera.camera({
                    autoAdvance: false,
                    height: '40.91796875%',
                    minHeight: '725px',
                    pagination: true,
                    thumbnails: false,
                    playPause: false,
                    hover: false,
                    loader: 'none',
                    navigation: false,
                    navigationHover: true,
                    mobileNavHover: false,
                    time: 4000,
                    transPeriod: 1000,
                    fx: 'bottomLeftTopRight'
                })
            });
        }
        if (plugins.materialParallax.length) {
            var i;
            if (!isNoviBuilder && !isIE && !isMobile) {
                plugins.materialParallax.parallax();
            } else {
                for (i = 0; i < plugins.materialParallax.length; i++) {
                    var parallax = $(plugins.materialParallax[i]), imgPath = parallax.data("parallax-img");
                    parallax.css({
                        "background-image": 'url(' + imgPath + ')',
                        "background-attachment": "fixed",
                        "background-size": "cover",
                        "background-position": "center center"
                    });
                }
            }
        }
    });
}());

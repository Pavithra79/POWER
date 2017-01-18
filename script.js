$(function() {

  function loader() {

      $("#loading-page").fadeOut('normal');


  }
  setTimeout(loader, 2200);




    $('#fullpage').fullpage({
        //Navigation
        menu: '.menu',
        lockAnchors: false,
        anchors: ['homepage', 'about', 'gym', 'classes', 'coaches', 'transformations', 'contact', 'footer'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About', 'gym', 'classes', 'coaches', 'transformations', 'contact', 'footer'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 800,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#transformation-image-2, #transformation-image-1',
        scrollOverflow: true,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 2,
        normalScrollElementTouchThreshold: 8,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: true,
        //        verticalCentered: true,
        sectionsColor: [],
        //        paddingTop: '3em',
        //        paddingBottom: '10px',
        fixedElements: '#header',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });


    var hamburger = $('.hamburger');
    var nav = $('nav');
    hamburger.click(function() {
        nav.toggleClass('shown');
        hamburger.toggleClass('active');
        return false;
    });


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".transformation-image").twentytwenty({
        default_offset_pct: 0.7, // How much of the before image is visible when the page loads
        orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
    });


    $("#rotate-lines").Morphext({
        animation: "fadeIn", // Overrides default "bounceIn"
        separator: ",", // Overrides default ","
        speed: 3000, // Overrides default 2000

    });

    $('.gym-gallery').flickity({
        // options
        cellAlign: 'center',
        contain: true,
        autoplay:true,
      adaptiveHeight: true
    });






});

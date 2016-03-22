
var wW = window.innerWidth,
    wH = window.screen.availHeight;

var pageHero,
    sectionDemo,
    sectionForm,
    pageFooter,
    heroVideo;

var headerHeight;
var scrollPos = 0;
var ticking = false;



function addLightShow(elem) {
  var lights = 12;
  var lightshow = document.createElement("div");

  elem.appendChild(lightshow);
  lightshow.className = "lightshow";

  for( i = 0; i < lights; i++ ) {
      var light = document.createElement("span");
      light.className = "light-" + (i+1);
      lightshow.appendChild(light);
  }
}



function revealNav(scroll_pos) {
  var  scrollT = body.scrollTop;

  var tl = new TimelineMax();
  if( scroll_pos > wH ) {
    tl.to( bgSlide, 1.8, {
      bottom: 0,
      ease: Expo.easeOut
    })
  } else {
    tl.to( bgSlide, 1.5, {
      bottom: headerHeight,
      ease: Expo.easeIn
    })
  }

}



function init() {
  body = document.querySelector('[data-js="body"]');
  pageHeader = document.querySelector('[data-js="page-header"]');
  bgSlide = document.querySelector('[data-js="bgslide"]');
  pageHero = document.querySelector('[data-js="page-hero"]');
  sectionInfo = document.querySelector('[data-js="section-info"]');
  sectionDemo = document.querySelector('[data-js="section-demo"]');
  sectionForm = document.querySelector('[data-js="section-form"]');
  pageFooter = document.querySelector('[data-js="page-footer"]');
  heroVideo = document.querySelector('[data-js="hero-video"]');

  addLightShow(pageHero);
  addLightShow(sectionDemo);
  addLightShow(sectionForm);
  addLightShow(pageFooter);

  heroVideo.play();

  headerHeight = pageHeader.offsetHeight;
  bgSlide.style.height = headerHeight + "px";
  bgSlide.style.bottom = headerHeight + "px";
}




//////////////////////////////
// Resize Handler
//////////////////////////////
function resizeHandler() {
  wW = window.innerWidth,
  wH = window.screen.availHeight;
  headerHeight = pageHeader.offsetHeight;
}



//////////////////////////////
// Event Listeners
//////////////////////////////

// DOM elements loaded
document.addEventListener("DOMContentLoaded", init );

// on resize
window.addEventListener( 'resize', resizeHandler, false );

// after fully loaded
// document.addEventListener("load", functionName );

// on scroll
window.addEventListener('scroll', function(e) {
  scrollPos = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      revealNav(scrollPos);
      ticking = false;
    });
  }
  ticking = true;
});

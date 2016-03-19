
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
  console.log(scrollT);
  // console.log(headerHeight);
  var b = wH - (headerHeight);
  var t = wH;
  var h = scroll_pos - wH + headerHeight; // t - scroll_pos

  bgSlide.style.top = scrollT + wH + "px"

  // if( scroll_pos > b  && scroll_pos < t ) {
    // console.log(headerHeight);
    // bgSlide.style.top = scroll_pos - wH + "px"
    // console.log(headerHeight);
    // console.log(wH);
    // console.log(scroll_pos);
  // }
  // if ( scroll_pos > t ) {
  //   console.log("stop");
  // }
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
  bgSlide.style.top = wH + "px";
  bgSlide.style.height = headerHeight + "px";
  bgSlide.style.opacity = "0.3";
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


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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZpbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgd1cgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB3SCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XG5cbnZhciBwYWdlSGVybyxcbiAgICBzZWN0aW9uRGVtbyxcbiAgICBzZWN0aW9uRm9ybSxcbiAgICBwYWdlRm9vdGVyLFxuICAgIGhlcm9WaWRlbztcblxudmFyIGhlYWRlckhlaWdodDtcbnZhciBzY3JvbGxQb3MgPSAwO1xudmFyIHRpY2tpbmcgPSBmYWxzZTtcblxuXG5cbmZ1bmN0aW9uIGFkZExpZ2h0U2hvdyhlbGVtKSB7XG4gIHZhciBsaWdodHMgPSAxMjtcbiAgdmFyIGxpZ2h0c2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5hcHBlbmRDaGlsZChsaWdodHNob3cpO1xuICBsaWdodHNob3cuY2xhc3NOYW1lID0gXCJsaWdodHNob3dcIjtcblxuICBmb3IoIGkgPSAwOyBpIDwgbGlnaHRzOyBpKysgKSB7XG4gICAgICB2YXIgbGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxpZ2h0LmNsYXNzTmFtZSA9IFwibGlnaHQtXCIgKyAoaSsxKTtcbiAgICAgIGxpZ2h0c2hvdy5hcHBlbmRDaGlsZChsaWdodCk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIHJldmVhbE5hdihzY3JvbGxfcG9zKSB7XG4gIHZhciAgc2Nyb2xsVCA9IGJvZHkuc2Nyb2xsVG9wO1xuICBjb25zb2xlLmxvZyhzY3JvbGxUKTtcbiAgLy8gY29uc29sZS5sb2coaGVhZGVySGVpZ2h0KTtcbiAgdmFyIGIgPSB3SCAtIChoZWFkZXJIZWlnaHQpO1xuICB2YXIgdCA9IHdIO1xuICB2YXIgaCA9IHNjcm9sbF9wb3MgLSB3SCArIGhlYWRlckhlaWdodDsgLy8gdCAtIHNjcm9sbF9wb3NcblxuICBiZ1NsaWRlLnN0eWxlLnRvcCA9IHNjcm9sbFQgKyB3SCArIFwicHhcIlxuXG4gIC8vIGlmKCBzY3JvbGxfcG9zID4gYiAgJiYgc2Nyb2xsX3BvcyA8IHQgKSB7XG4gICAgLy8gY29uc29sZS5sb2coaGVhZGVySGVpZ2h0KTtcbiAgICAvLyBiZ1NsaWRlLnN0eWxlLnRvcCA9IHNjcm9sbF9wb3MgLSB3SCArIFwicHhcIlxuICAgIC8vIGNvbnNvbGUubG9nKGhlYWRlckhlaWdodCk7XG4gICAgLy8gY29uc29sZS5sb2cod0gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNjcm9sbF9wb3MpO1xuICAvLyB9XG4gIC8vIGlmICggc2Nyb2xsX3BvcyA+IHQgKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCJzdG9wXCIpO1xuICAvLyB9XG59XG5cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJib2R5XCJdJyk7XG4gIHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cInBhZ2UtaGVhZGVyXCJdJyk7XG4gIGJnU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cImJnc2xpZGVcIl0nKTtcbiAgcGFnZUhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cInBhZ2UtaGVyb1wiXScpO1xuICBzZWN0aW9uSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzPVwic2VjdGlvbi1pbmZvXCJdJyk7XG4gIHNlY3Rpb25EZW1vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJzZWN0aW9uLWRlbW9cIl0nKTtcbiAgc2VjdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cInNlY3Rpb24tZm9ybVwiXScpO1xuICBwYWdlRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJwYWdlLWZvb3RlclwiXScpO1xuICBoZXJvVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cImhlcm8tdmlkZW9cIl0nKTtcblxuICBhZGRMaWdodFNob3cocGFnZUhlcm8pO1xuICBhZGRMaWdodFNob3coc2VjdGlvbkRlbW8pO1xuICBhZGRMaWdodFNob3coc2VjdGlvbkZvcm0pO1xuICBhZGRMaWdodFNob3cocGFnZUZvb3Rlcik7XG4gIGhlcm9WaWRlby5wbGF5KCk7XG4gIGhlYWRlckhlaWdodCA9IHBhZ2VIZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICBiZ1NsaWRlLnN0eWxlLnRvcCA9IHdIICsgXCJweFwiO1xuICBiZ1NsaWRlLnN0eWxlLmhlaWdodCA9IGhlYWRlckhlaWdodCArIFwicHhcIjtcbiAgYmdTbGlkZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjNcIjtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBSZXNpemUgSGFuZGxlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICB3VyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICB3SCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XG4gIGhlYWRlckhlaWdodCA9IHBhZ2VIZWFkZXIub2Zmc2V0SGVpZ2h0O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFdmVudCBMaXN0ZW5lcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBET00gZWxlbWVudHMgbG9hZGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0ICk7XG5cbi8vIG9uIHJlc2l6ZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCByZXNpemVIYW5kbGVyLCBmYWxzZSApO1xuXG4vLyBhZnRlciBmdWxseSBsb2FkZWRcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uTmFtZSApO1xuXG4vLyBvbiBzY3JvbGxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gIHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICBpZiAoIXRpY2tpbmcpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV2ZWFsTmF2KHNjcm9sbFBvcyk7XG4gICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgdGlja2luZyA9IHRydWU7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
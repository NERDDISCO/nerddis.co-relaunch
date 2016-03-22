
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZpbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgd1cgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICB3SCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XG5cbnZhciBwYWdlSGVybyxcbiAgICBzZWN0aW9uRGVtbyxcbiAgICBzZWN0aW9uRm9ybSxcbiAgICBwYWdlRm9vdGVyLFxuICAgIGhlcm9WaWRlbztcblxudmFyIGhlYWRlckhlaWdodDtcbnZhciBzY3JvbGxQb3MgPSAwO1xudmFyIHRpY2tpbmcgPSBmYWxzZTtcblxuXG5cbmZ1bmN0aW9uIGFkZExpZ2h0U2hvdyhlbGVtKSB7XG4gIHZhciBsaWdodHMgPSAxMjtcbiAgdmFyIGxpZ2h0c2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbS5hcHBlbmRDaGlsZChsaWdodHNob3cpO1xuICBsaWdodHNob3cuY2xhc3NOYW1lID0gXCJsaWdodHNob3dcIjtcblxuICBmb3IoIGkgPSAwOyBpIDwgbGlnaHRzOyBpKysgKSB7XG4gICAgICB2YXIgbGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxpZ2h0LmNsYXNzTmFtZSA9IFwibGlnaHQtXCIgKyAoaSsxKTtcbiAgICAgIGxpZ2h0c2hvdy5hcHBlbmRDaGlsZChsaWdodCk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIHJldmVhbE5hdihzY3JvbGxfcG9zKSB7XG4gIHZhciAgc2Nyb2xsVCA9IGJvZHkuc2Nyb2xsVG9wO1xuXG4gIHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xuICBpZiggc2Nyb2xsX3BvcyA+IHdIICkge1xuICAgIHRsLnRvKCBiZ1NsaWRlLCAxLjgsIHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGVhc2U6IEV4cG8uZWFzZU91dFxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgdGwudG8oIGJnU2xpZGUsIDEuNSwge1xuICAgICAgYm90dG9tOiBoZWFkZXJIZWlnaHQsXG4gICAgICBlYXNlOiBFeHBvLmVhc2VJblxuICAgIH0pXG4gIH1cblxufVxuXG5cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzPVwiYm9keVwiXScpO1xuICBwYWdlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJwYWdlLWhlYWRlclwiXScpO1xuICBiZ1NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJiZ3NsaWRlXCJdJyk7XG4gIHBhZ2VIZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJwYWdlLWhlcm9cIl0nKTtcbiAgc2VjdGlvbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1qcz1cInNlY3Rpb24taW5mb1wiXScpO1xuICBzZWN0aW9uRGVtbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzPVwic2VjdGlvbi1kZW1vXCJdJyk7XG4gIHNlY3Rpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJzZWN0aW9uLWZvcm1cIl0nKTtcbiAgcGFnZUZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWpzPVwicGFnZS1mb290ZXJcIl0nKTtcbiAgaGVyb1ZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtanM9XCJoZXJvLXZpZGVvXCJdJyk7XG5cbiAgYWRkTGlnaHRTaG93KHBhZ2VIZXJvKTtcbiAgYWRkTGlnaHRTaG93KHNlY3Rpb25EZW1vKTtcbiAgYWRkTGlnaHRTaG93KHNlY3Rpb25Gb3JtKTtcbiAgYWRkTGlnaHRTaG93KHBhZ2VGb290ZXIpO1xuXG4gIGhlcm9WaWRlby5wbGF5KCk7XG5cbiAgaGVhZGVySGVpZ2h0ID0gcGFnZUhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gIGJnU2xpZGUuc3R5bGUuaGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgXCJweFwiO1xuICBiZ1NsaWRlLnN0eWxlLmJvdHRvbSA9IGhlYWRlckhlaWdodCArIFwicHhcIjtcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBSZXNpemUgSGFuZGxlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICB3VyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICB3SCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQ7XG4gIGhlYWRlckhlaWdodCA9IHBhZ2VIZWFkZXIub2Zmc2V0SGVpZ2h0O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFdmVudCBMaXN0ZW5lcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBET00gZWxlbWVudHMgbG9hZGVkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBpbml0ICk7XG5cbi8vIG9uIHJlc2l6ZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCByZXNpemVIYW5kbGVyLCBmYWxzZSApO1xuXG4vLyBhZnRlciBmdWxseSBsb2FkZWRcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uTmFtZSApO1xuXG4vLyBvbiBzY3JvbGxcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gIHNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuICBpZiAoIXRpY2tpbmcpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV2ZWFsTmF2KHNjcm9sbFBvcyk7XG4gICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgdGlja2luZyA9IHRydWU7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
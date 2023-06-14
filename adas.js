ticking = true;
if (currentSlideNumber !== 0) {
  currentSlideNumber--;
}
previousItem();
slideDurationTimeout(slideDurationSetting);

​
// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
setTimeout(function() {
ticking = false;
}, slideDuration);
}
​
// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
​
// ------------- SLIDE MOTION ------------- //
function nextItem() {
var $previousSlide = $(".background").eq(currentSlideNumber - 1);
$previousSlide.removeClass("up-scroll").addClass("down-scroll");
}
​
function previousItem() {
var $currentSlide = $(".background").eq(currentSlideNumber);
$currentSlide.removeClass("down-scroll").addClass("up-scroll");
}
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
  var helloSpeaker = {};

  var speakWord = "Hello";

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
 // 'helloSpeaker' on the global scope as well.
  window.helloSpeaker = helloSpeaker;

})(window);

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.



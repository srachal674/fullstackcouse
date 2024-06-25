// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {
  var helloSpeaker = {};
/**
 * Logs a greeting message to the console.
 *
 * @param {string} name - The name to be included in the greeting.
 * @return {void} This function does not return a value.
 */

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
var speakWord = "Hello";



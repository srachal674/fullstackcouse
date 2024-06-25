(function (window) {
  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var byeSpeaker = {};

  /**
   * Logs a farewell message to the console.
   *
   * @param {string} name - The name to be included in the farewell.
   * @return {void} This function does not return a value.
   */
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);  
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  window.byeSpeaker = byeSpeaker;

})(window);

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2


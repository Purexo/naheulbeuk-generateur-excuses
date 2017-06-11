/**
 * Created by Purexo on 11/06/2017.
 */
$(function () {
  var $excuse = $('#excuse');
  var $button = $('#generate');
  
  var $fills = [1,2,3,4,5,6].reduce(function (prev, value) {
    prev.push($excuse.find('#tirage-' + value));
    
    return prev;
  }, []);
  
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function fill() {
    $fills.forEach(function ($fill, index) {
      var potential_part = PARTIE_PHRASE_TIRAGE[index];
      var part = potential_part[getRandomInt(0, potential_part.length - 1)];
      
      $fill.text(part);
    });
  }
  
  fill();
  
  $button.click(fill);
});
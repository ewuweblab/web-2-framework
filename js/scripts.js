// Initialize player
const player = new Plyr( '#player', {
  
  // Turn on/off conrols. Array data type
  controls : [ 'play', 'current-time', 'progress' ],
  
  // Turn on keyboard. Boolean data type
  keyboard : { focused: true, global: true },
  
  // Increase/Decrease seek time. Integer data type
  seekTime : 15

});
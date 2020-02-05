// Initialize player
const player = new Plyr( '#player', {
  
  // Turn on/off conrols  
  controls : [ 'play', 'current-time', 'progress' ],
  
  // Turn    
  keyboard : { focused: true, global: true },
  
  seekTime : 15

});

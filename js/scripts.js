console.log('OK');

// Initialize player

const player = new Plyr('#player', 
{
  controls: ['play','volume','current-time', 'progress','fullscreen'],
  
  keyboard: { focused: true, global:true },
  
  seekTime: 30
                        
});

console.log(player);
// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 8;

//Global Variables
var pattern = new Array();// = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

function randomPattern(){
  var temp = new Array();
  for(let i=0;i < patternLength;i++){
        var random = Math.floor(Math.random() * 4) + 1;
        temp.push(random);
  }
  pattern = temp;
}

function startGame(){
  
    randomPattern();  
      
    //initialize game variables
    progress = 0;
    gamePlaying = true;    
    // swap the Start and Stop buttons
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("endButton").classList.remove("hidden");
    playClueSequence();
}
function stopGame(){
    gamePlaying = false;
    progress = 0;
    // swap the Start and Stop buttons
    document.getElementById("startButton").classList.remove("hidden");
    document.getElementById("endButton").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log(i+" play single clue: " + pattern[i] + " in " + delay + "ms progress:"+progress)
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  
  progress = 0;
  stopGame();
  alert("Game Over. You lost.");  
}

function winGame(){  
  
  progress = 0;
  stopGame();
  alert("Game Over. You Won!");
}

function guess(btn){
  console.log("user guessed: " + btn+" progress:"+progress);
  
  if(!gamePlaying)
    return;
  
  if (pattern[guessCounter] != btn)
    loseGame();    
  
  if(guessCounter == progress){  
    
      if(progress == pattern.length-1){
        winGame();
        progress++;
      }
      playClueSequence();
    
  }
  else{
    guessCounter++;
  }
   
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
//var context = new AudioContext()
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(1)

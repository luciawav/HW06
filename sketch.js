let poem =
  "My life has been the poem I would have writ\nBut I could not both live and utter it My life has been the poem I would have writ\nBut I could not both live and utter it My life has been the poem I would have writ\nBut I could not both live and utter it My life has been the poem I would have writ\nBut I could not both live and utter it My life has been the poem I would have writ\nBut I could not both live and utter itMy life has been the poem I would have writ\nBut I could not both live and utter it ";

let MARGIN = 50;
let letters = [];
let displayedLetters = [];

let minTextSize = 10;
let maxTextSize = 80;
let lineHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP);
  textFont("Courier New");
  letters = poem.split('');
  lineHeight = maxTextSize * 1.5;
  frameRate(24); 
}

function draw() {
  background(255);

  for (let i = 0; i < displayedLetters.length; i++) {
    let letterInfo = displayedLetters[i];
    textSize(letterInfo.textSize);
    text(letterInfo.letter, letterInfo.x, letterInfo.y);
  }

  if (letters.length > 0) {
    let x = random(width - MARGIN * 2);
 
    let y = random(height - MARGIN * 2);

    let letter = letters.shift(); 
    let textSizeVal = random(minTextSize, maxTextSize);

    textSize(textSizeVal);

    if (random(1) > 0.5) {
      letter = letter.toUpperCase();
    } else {
      letter = letter.toLowerCase();
    }

    text(letter, x, y);

    displayedLetters.push({ letter, x, y, textSize: textSizeVal });
  }
}
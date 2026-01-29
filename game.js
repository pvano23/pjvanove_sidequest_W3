// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// =====================================================================
// GAME STATE - Tracks which page and choice the player is on
// =====================================================================
let currentPage = 1; // Start at page 1
let gameOutcome = "win"; // Tracks final outcome: "win" or "loss"

// =====================================================================
// BUTTON OBJECTS - Store position and size for click detection
// =====================================================================
// Page 1 buttons
const page1ButtonA = { x: 200, y: 450, w: 180, h: 80 }; // TAKE THE SHOT
const page1ButtonB = { x: 600, y: 450, w: 180, h: 80 }; // PASS BACK

// Page 2 buttons
const page2ButtonA = { x: 200, y: 450, w: 180, h: 80 }; // TEAMMATE HELPS
const page2ButtonB = { x: 600, y: 450, w: 180, h: 80 }; // LET GOALIE COVER

// Page 3 buttons
const page3ButtonA = { x: 200, y: 450, w: 180, h: 80 }; // STICK ON ICE
const page3ButtonB = { x: 600, y: 450, w: 180, h: 80 }; // WRAPAROUND

// Page 4 buttons
const page4ButtonA = { x: 200, y: 350, w: 180, h: 80 }; // CHAMPIONS WIN
const page4ButtonB = { x: 600, y: 350, w: 180, h: 80 }; // MISS 2-1 LOSS
const page4StartOverBtn = { x: 400, y: 650, w: 200, h: 60 }; // START OVER

// =====================================================================
// PAGE 1: INTRO PAGE / BREAK AWAY
// =====================================================================
// Description: Player sees hockey intro and choice between shooting or passing
function drawPage1() {
  // Set background colour for page 1
  background(240, 230, 140);

  // ---- Title ----
  fill(0); // black text
  textSize(28);
  textAlign(CENTER, CENTER);
  text("HOCKEY STORY: THE BREAKAWAY", width / 2, 80);

  // ---- Story text ----
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text(
    "You have the puck and a perfect breakaway opportunity! The goalie is out of position.",
    width / 2,
    150
  );

  textSize(20);
  text(
    "Your teammate is positioned for a pass, but you have a clear shot.",
    width / 2,
    200
  );

  textSize(20);
  text(
    "What do you do?",
    width / 2,
    250
  );

  // ---- Choice A Button ----
  drawChoiceButton("A", "TAKE THE SHOT", 200, 450);

  // ---- Choice B Button ----
  drawChoiceButton("B", "PASS BACK", 600, 450);

  // ---- Cursor feedback ----
  // Currently static - buttons not interactive yet
  cursor(ARROW);
}

// =====================================================================
// PAGE 2: SHOT RESULT - DEKE THE GOALIE
// =====================================================================
// Description: Player chose to shoot and deked the goalie, puck is loose
function drawPage2() {
  // Set background colour for page 2
  background(200, 220, 240);

  // ---- Title ----
  fill(0); // black text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("SHOT RESULT: DEKE SUCCESS!", width / 2, 80);

  // ---- Story text ----
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text(
    "You attempted to deke the goalie and succeeded! The puck is now loose in the crease.",
    width / 2,
    150
  );

  textSize(20);
  text(
    "Your teammate is pushing for a rebound, but the goalie is also scrambling.",
    width / 2,
    200
  );

  textSize(20);
  text(
    "How do you proceed?",
    width / 2,
    250
  );

  // ---- Choice A Button ----
  drawChoiceButton("A", "TEAMMATE HELPS GET PUCK LOOSE", 200, 450);

  // ---- Choice B Button ----
  drawChoiceButton("B", "LET GOALIE COVER PUCK (AUTOMATIC LOSS)", 600, 450);

  // ---- Cursor feedback ----
  // Currently static - buttons not interactive yet
  cursor(ARROW);
}

// =====================================================================
// PAGE 3: PASS RESULT - TEAMMATE SHOT STOPPED
// =====================================================================
// Description: Player chose to pass, teammate's shot was stopped, puck bounces back
function drawPage3() {
  // Set background colour for page 3
  background(240, 200, 200);

  // ---- Title ----
  fill(0); // black text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("PASS RESULT: SHOT BLOCKED!", width / 2, 80);

  // ---- Story text ----
  fill(0);
  textSize(20);
  textAlign(CENTER, TOP);
  text(
    "You passed to your teammate and they took a shot, but the goalie stopped it!",
    width / 2,
    150
  );

  textSize(20);
  text(
    "The puck bounces back to you. The goalie is out of position after the save.",
    width / 2,
    200
  );

  textSize(20);
  text(
    "What's your next move?",
    width / 2,
    250
  );

  // ---- Choice A Button ----
  drawChoiceButton("A", "STICK ON ICE", 200, 450);

  // ---- Choice B Button ----
  drawChoiceButton("B", "WRAPAROUND", 600, 450);

  // ---- Cursor feedback ----
  // Currently static - buttons not interactive yet
  cursor(ARROW);
}

// =====================================================================
// PAGE 4: FINAL RESULT
// =====================================================================
// Description: Final result screen showing WIN or LOSS based on previous choices
function drawPage4() {
  // Set background colour for page 4
  background(200, 240, 200);

  // ---- Title ----
  fill(0); // black text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("FINAL RESULT", width / 2, 80);

  // ---- Story text - Shows outcome based on gameOutcome variable ----
  fill(0);
  textSize(24);
  textAlign(CENTER, TOP);
  if (gameOutcome === "win") {
    // WIN outcome - player scored
    text(
      "You scored! CHAMPIONS! 2-1 victory!",
      width / 2,
      150
    );
  } else {
    // LOSS outcome - opponent scored
    text(
      "Miss! The opponent scored! You lost 2-1.",
      width / 2,
      150
    );
  }

  // ---- Outcome display buttons ----
  // Note: These are display only, they show the final outcome
  drawChoiceButton("A", "CHAMPIONS - WIN!", 200, 350);
  drawChoiceButton("B", "MISS 2-1 - OPPONENTS SCORED", 600, 350);

  // ---- START OVER Button ----
  // This button will let player restart the game
  drawStartOverButton();

  // ---- Cursor feedback ----
  cursor(ARROW);
}

// =====================================================================
// HELPER FUNCTION: Draw a choice button
// =====================================================================
// Draws a button with choice letter and label
// Parameters: letter (A or B), label (text), x (position), y (position)
function drawChoiceButton(letter, label, x, y) {
  rectMode(CENTER);
  
  // Draw button background
  noStroke();
  fill(100, 150, 200); // blue button
  rect(x, y, 180, 80, 14); // last value = rounded corners
  
  // Draw letter indicator
  fill(255); // white text
  textSize(20);
  textAlign(CENTER, CENTER);
  text(letter, x - 70, y);
  
  // Draw button label
  fill(255); // white text
  textSize(14);
  textAlign(CENTER, CENTER);
  text(label, x + 30, y);
}

// =====================================================================
// HELPER FUNCTION: Draw START OVER button
// =====================================================================
// Draws the restart button at the bottom of page 4
function drawStartOverButton() {
  rectMode(CENTER);
  
  // Draw button background
  noStroke();
  fill(150, 150, 150); // grey button
  rect(400, 650, 200, 60, 14); // last value = rounded corners
  
  // Draw button label
  fill(255); // white text
  textSize(20);
  textAlign(CENTER, CENTER);
  text("START OVER", 400, 650);
}

// =====================================================================
// MAIN DRAW FUNCTION FOR GAME SCREEN
// =====================================================================
// drawGame() is called from main.js *only* when currentScreen === "game"
function drawGame() {
  // Route to the correct page based on currentPage
  if (currentPage === 1) {
    drawPage1();
  } else if (currentPage === 2) {
    drawPage2();
  } else if (currentPage === 3) {
    drawPage3();
  } else if (currentPage === 4) {
    drawPage4();
  }
}

// =====================================================================
// MOUSE INPUT FOR GAME SCREEN
// =====================================================================
// This function is called from main.js only when currentScreen === "game"
// Detects which button was clicked and moves to the next page accordingly
function gameMousePressed() {
  if (currentPage === 1) {
    // PAGE 1: Choice between TAKE SHOT or PASS BACK
    if (isHover(page1ButtonA)) {
      // Choice A: Take the shot → goes to Page 2
      currentPage = 2;
    } else if (isHover(page1ButtonB)) {
      // Choice B: Pass back → goes to Page 3
      currentPage = 3;
    }
  } else if (currentPage === 2) {
    // PAGE 2: Choice between TEAMMATE HELPS or LET GOALIE COVER
    if (isHover(page2ButtonA)) {
      // Choice A: Teammate helps → WINNING scenario
      gameOutcome = "win";
      currentPage = 4;
    } else if (isHover(page2ButtonB)) {
      // Choice B: Let goalie cover (automatic loss)
      gameOutcome = "loss";
      currentPage = 4;
    }
  } else if (currentPage === 3) {
    // PAGE 3: Choice between STICK ON ICE or WRAPAROUND
    if (isHover(page3ButtonA)) {
      // Choice A: Stick on ice → WINNING scenario
      gameOutcome = "win";
      currentPage = 4;
    } else if (isHover(page3ButtonB)) {
      // Choice B: Wraparound → WINNING scenario
      gameOutcome = "win";
      currentPage = 4;
    }
  } else if (currentPage === 4) {
    // PAGE 4: Final result with START OVER button
    if (isHover(page4StartOverBtn)) {
      // START OVER button - reset game to page 1
      currentPage = 1;
      gameOutcome = "win"; // Reset outcome
    }
  }
}

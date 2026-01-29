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
// Description: Final result screen showing WIN or LOSS
function drawPage4() {
  // Set background colour for page 4
  background(200, 240, 200);

  // ---- Title ----
  fill(0); // black text
  textSize(48);
  textAlign(CENTER, CENTER);
  text("FINAL RESULT", width / 2, 80);

  // ---- Story text - PLACEHOLDER (will show different outcomes based on choices) ----
  fill(0);
  textSize(24);
  textAlign(CENTER, TOP);
  text(
    "You scored! CHAMPIONS! 2-1 victory!",
    width / 2,
    150
  );

  // ---- Outcome Buttons ----
  // Left button: WIN
  drawChoiceButton("A", "CHAMPIONS - WIN!", 200, 350);

  // Right button: LOSS
  drawChoiceButton("B", "MISS 2-1 - OPPONENTS SCORED", 600, 350);

  // ---- START OVER Button ----
  // This button will appear at the bottom to let player restart
  drawStartOverButton();

  // ---- Cursor feedback ----
  // Currently static - buttons not interactive yet
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
  textSize(32);
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
// Currently disabled - buttons are not interactive yet (DELETE THIS FUNCTION WHEN READY TO MAKE BUTTONS INTERACTIVE)
function gameMousePressed() {
  // Button interaction will be added here in a future version
  // For now, this function exists but does nothing (DELETE WHEN ADDING INTERACTIVITY)
}

// ========== DELETE BELOW WHEN MAKING BUTTONS INTERACTIVE ==========
// DELETE the gameKeyPressed() function below once you add button interactivity
// DELETE the triggerRandomOutcome() function below once you add button interactivity
// ====================================================================

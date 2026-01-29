# Hockey Story Game - Structure Guide

## Overview
Your game now has 4 static pages that display correctly. Buttons are NOT interactive yet. This document explains what each page contains and what code to delete when you're ready to make buttons interactive.

---

## PAGE STRUCTURE

###  PAGE 1: INTRO PAGE / BREAK AWAY
**File Location:** `game.js` - `drawPage1()` function
- **Background Color:** Khaki/tan
- **Title:** "HOCKEY STORY: THE BREAKAWAY"
- **Story:** Player has a breakaway opportunity with two choices
- **Choices:**
  - **A** → "TAKE THE SHOT"
  - **B** → "PASS BACK"

---

### PAGE 2: SHOT RESULT - DEKE SUCCESS
**File Location:** `game.js` - `drawPage2()` function
- **Background Color:** Light blue
- **Title:** "SHOT RESULT: DEKE SUCCESS!"
- **Story:** Player attempted to shoot and deked the goalie, puck is loose
- **Choices:**
  - **A** → "TEAMMATE HELPS GET PUCK LOOSE" (leads to winning)
  - **B** → "LET GOALIE COVER PUCK (AUTOMATIC LOSS)" (automatic loss)

---

### PAGE 3: PASS RESULT - SHOT BLOCKED
**File Location:** `game.js` - `drawPage3()` function
- **Background Color:** Light pink/red
- **Title:** "PASS RESULT: SHOT BLOCKED!"
- **Story:** Player passed to teammate, their shot was blocked, puck bounces back
- **Choices:**
  - **A** → "STICK ON ICE" (alternative move)
  - **B** → "WRAPAROUND" (alternative move)

---

### PAGE 4: FINAL RESULT
**File Location:** `game.js` - `drawPage4()` function
- **Background Color:** Light green
- **Title:** "FINAL RESULT"
- **Shows:** Two outcome buttons and a "START OVER" button
- **Buttons:**
  - **A** → "CHAMPIONS - WIN!" (winning outcome)
  - **B** → "MISS 2-1 - OPPONENTS SCORED" (losing outcome)
  - **START OVER** → Restart button at bottom

---

## HELPER FUNCTIONS

### `drawChoiceButton(letter, label, x, y)`
Draws a choice button with:
- A letter (A or B) on the left
- A label text on the right
- Blue background, white text
- Positioned at coordinates (x, y)

### `drawStartOverButton()`
Draws the restart button at the bottom of Page 4
- Grey background
- White text
- Located at bottom center

### `drawGame()`
Main router function that checks `currentPage` variable and calls the correct page function

---

## GAME STATE TRACKING

### Current Variable
```javascript
let currentPage = 1; // Values: 1, 2, 3, or 4
```

This variable tracks which page to display. Currently it's hardcoded to start at page 1.

---

## ⚠️ CODE TO DELETE WHEN MAKING BUTTONS INTERACTIVE

When you're ready to add button click functionality, **DELETE the following code** from the bottom of `game.js`:

```javascript
// ========== DELETE BELOW WHEN MAKING BUTTONS INTERACTIVE ==========
// DELETE the gameKeyPressed() function below once you add button interactivity
// DELETE the triggerRandomOutcome() function below once you add button interactivity
// ====================================================================
```

These old placeholder functions are marked for deletion and no longer needed.

---

## NEXT STEPS (When Ready for Interactivity)

1. Replace the empty `gameMousePressed()` function with actual button click detection
2. Use the `isHover()` function from `main.js` to check if buttons are clicked
3. Update the `currentPage` variable based on which button is clicked
4. Add logic to route between pages based on player choices
5. Delete the marked placeholder code sections

---

## COLOR SCHEME

- **Page 1:** `background(240, 230, 140)` - Khaki (Intro/Break Away)
- **Page 2:** `background(200, 220, 240)` - Light Blue (Shot Result)
- **Page 3:** `background(240, 200, 200)` - Light Pink (Pass Result)
- **Page 4:** `background(200, 240, 200)` - Light Green (Final Result)

---

## Comments in Code

All code sections have detailed comments indicating:
- What each section does
- Why buttons aren't interactive yet
- What to delete when adding interactivity

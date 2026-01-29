# CODE DELETION CHECKLIST

## When Ready to Add Button Interactivity

In `game.js`, at the BOTTOM of the file, you will find this section:

```javascript
// ========== DELETE BELOW WHEN MAKING BUTTONS INTERACTIVE ==========
// DELETE the gameKeyPressed() function below once you add button interactivity
// DELETE the triggerRandomOutcome() function below once you add button interactivity
// ====================================================================
```

**DELETE EVERYTHING AFTER THIS COMMENT** - those are placeholder functions from the old template that are no longer needed.

---

## What's Already Been Cleaned Up ✓

The following old code has already been REMOVED from game.js:
- ~~`gameKeyPressed()` function~~ - OLD keyboard handler (not needed for static pages)
- ~~`triggerRandomOutcome()` function~~ - OLD random outcome logic (not needed yet)
- ~~`const gameBtn` object~~ - OLD single button data (replaced with multiple choice buttons)
- ~~`drawGameButton()` function~~ - OLD button drawing (replaced with `drawChoiceButton()`)

---

## What's NEW in game.js ✓

The following new code has been ADDED:
- ✓ `let currentPage = 1` - Game state tracker
- ✓ `drawPage1()` - Page 1: Intro/Break Away
- ✓ `drawPage2()` - Page 2: Shot Result
- ✓ `drawPage3()` - Page 3: Pass Result
- ✓ `drawPage4()` - Page 4: Final Result
- ✓ `drawChoiceButton()` - Helper to draw choice buttons
- ✓ `drawStartOverButton()` - Helper to draw restart button
- ✓ Updated `drawGame()` - Routes to correct page based on `currentPage`

---

## Current Status

**Buttons are STATIC (not interactive).** To make them interactive:

1. Fill in the `gameMousePressed()` function with click detection logic
2. Use the `isHover()` function from main.js to detect button clicks
3. Update `currentPage` based on which button is clicked
4. Delete the old placeholder code at the bottom of the file

---

## All Comments Added ✓

Every section of code includes comments explaining:
- What the function does
- What each variable/parameter means
- Why buttons aren't interactive yet
- What to delete when adding interactivity

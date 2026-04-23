# Design Spec: Card Deck Shuffle Mode

## Overview
Add a new game mode called **Card Deck Shuffle** alongside the existing Bingo game. Each player taps to get a random question card. Perfect for quick icebreakers at mixers.

## ✅ Implementation Status
**COMPLETE** - All core features implemented and tested.

## Game Modes

### Mode Selection Screen (Entry Point) ✅
- **Purpose**: Let players choose between Bingo or Card Deck Shuffle
- **Layout**: Two large, tappable option buttons
- **Interaction**: Selection takes them to respective game mode
- **Implementation**: `ModeSelectScreen.tsx`

### Card Deck Shuffle Flow ✅

#### 1. Shuffle Screen (Main Gameplay) ✅
- **Display**: Large question card in the center
- **Layout**: 
  - Title/branding at top
  - Large card with question text (centered, readable from distance)
  - Tap to shuffle button/area
  - Back to mode selection
- **Behavior**: 
  - Card displays a random question from the questions pool
  - Each tap/shuffle shows a new random question
  - Smooth transition animation between cards (3D flip)
  - No win conditions - just keep shuffling
- **Implementation**: `CardDeckScreen.tsx` + `ShuffleCard.tsx`

#### 2. Visual Design ✅
- Large, bold question text (3xl font, easily readable)
- Blue gradient card design (distinct from Bingo's emerald theme)
- Card maintains 3:4 aspect ratio for portrait orientation
- Smooth 3D flip animation on shuffle (180° rotation)
- Touch-friendly tap targets with active state feedback
- Decorative corner elements for visual polish
- Question mark emoji as visual indicator

## Technical Structure ✅

### Component Hierarchy
```
App.tsx (updated with mode routing)
├── ModeSelectScreen.tsx (created)
├── StartScreen.tsx (Bingo mode - existing)
├── GameScreen.tsx (Bingo mode - existing)
└── CardDeckScreen.tsx (created)
    └── ShuffleCard.tsx (created)
```

### State Management ✅
- Added `gameMode` state ('selection' | 'bingo' | 'cardDeck') in App.tsx
- Reused existing `questions` from `data/questions.ts`
- Random initialization using useState initializer (improves performance)
- Proper React patterns (no setState in effects)

## Implementation Phases

### Phase 1: Mode Selection ✅
- [x] Create ModeSelectScreen component
- [x] Update App.tsx routing logic
- [x] Add mode state management

### Phase 2: Card Shuffle Screen ✅
- [x] Create CardDeckScreen component  
- [x] Create ShuffleCard component
- [x] Implement random question selection logic
- [x] Add tap/shuffle interaction

### Phase 3: Polish & Animations ✅
- [x] Card transition animations (3D flip)
- [x] Touch feedback (active state and scale down)
- [x] Responsive design (works on all screen sizes)
- [x] Code quality (linting and TypeScript strict mode)

## Design Decisions

### Color Scheme
- **Bingo**: Emerald/green theme (existing)
- **Card Deck**: Blue gradient (new, distinct)
- Hover states with border color changes for visual feedback

### Animations
- 3D flip animation on shuffle (rotateY 180deg + scale)
- 150ms transition duration for responsiveness
- Active state scale down (0.98) for touch feedback

### Interaction Model
- Entire card is tappable for maximum ease (no small buttons)
- Back button for returning to mode selection
- Instructions present for first-time users
- No scoring/win conditions - pure fun

### Questions
- Reuses existing questions pool from `data/questions.ts`
- Maintains variety and brand tone
- No category filtering - all questions can appear

## Next Steps / Future Enhancements
- [ ] Add haptic feedback on tap (mobile devices)
- [ ] Persist game mode preference
- [ ] Add category filters for card deck
- [ ] Sound effects for shuffle
- [ ] Score tracking (optional, fun leaderboard)

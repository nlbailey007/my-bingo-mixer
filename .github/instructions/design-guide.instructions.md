---
name: design-guide
description: Use when the user asks for a design guide or redesign plan, especially for frontend UI, theming, layouts, and component styling.
applyTo:
  - "src/**/*.{ts,tsx,css}"
---

This instruction guides frontend design work in the Bingo Mixer app with a context-aware, creative approach.

Focus on:
- Unique theme direction that feels intentional and memorable.
- Clear visual hierarchy, thoughtful spacing, and a polished layout.
- Use of Tailwind CSS utilities and CSS variables for consistent theming.
- Supporting copy and component tone that match the desired aesthetic.
- Retaining the existing project structure and lightweight app approach.

Preferred behavior:
- Avoid generic, off-the-shelf visuals.
- Choose a strong, cohesive palette and support it with layered backgrounds or subtle texture.
- Use custom yet accessible typography; system fonts are okay only if they support the design.
- Add motion intentionally: one or two well-placed transitions or entrance effects are better than many small, noisy animations.
- Make the experience feel more than a generic template by using design details tied to the theme.

Do not:
- Force large architectural changes or add new frameworks just for aesthetics.
- Use bland monochrome pages with only basic cards and buttons.
- Add overly complex animations unless the chosen aesthetic clearly benefits from them.
- Break the minimal toolchain or the existing component hierarchy without strong justification.

If the user asks for a specific style (e.g. Solarpunk), align copy, colors, and motion with that theme while preserving usability and accessibility.

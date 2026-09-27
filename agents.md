# Portfolio Development Rules

## Design
- Treat provided screenshots and videos as the source of truth.
- Do not invent visual elements unless explicitly requested.
- Preserve spacing, proportions, typography hierarchy, and animation timing from references.
- Prefer subtle, intentional animations over generic fades and scaling.

## Implementation
- Use React / Next.js.
- Use Framer Motion for UI animation unless another solution is demonstrably better.
- Keep components modular.
- Do not introduce unnecessary dependencies.
- Keep responsive behavior intentional rather than relying purely on default CSS wrapping.

## Visual Verification
After implementing a visual section:
1. Start the development server.
2. Open the page in the browser.
3. Inspect the rendered result.
4. Compare it against the supplied references.
5. Fix visible discrepancies before considering the task complete.

## Animation
- Match reference timing and sequencing.
- Do not replace character-level animation with whole-element animation when the reference uses character-level behavior.
- Avoid excessive bounce, spring, blur, rotation, or scaling unless visible in the reference.

## Code Quality
- Reuse existing components.
- Do not rewrite unrelated parts of the application.
- Do not install packages without a reason.
- Explain major architectural changes before making them.

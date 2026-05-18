# Framer Motion Cheatsheet

## Core Concept: motion Components
Replace any HTML element with its `motion.{tag}` counterpart to enable animations.

```tsx
import { motion } from "framer-motion"

<motion.div />     // animatable <div>
<motion.p />       // animatable <p>
<motion.button />  // animatable <button>
<motion.img />     // animatable <img>
<motion.svg />     // animatable <svg>
<motion.path />    // animatable <path> (for SVG)
<motion.span />    // animatable <span>
<motion.section /> // animatable <section>
```

For custom components, wrap with `motion()`:
```tsx
const MotionCard = motion(MyComponent)
```

---

## The Three Core Props: initial / animate / exit

| Prop | What it does |
|---|---|
| `initial` | State before the component mounts (starting point) |
| `animate` | State the component animates **to** |
| `exit` | State when the component **unmounts** (needs `<AnimatePresence>`) |
| `whileHover` | State while mouse is hovering |
| `whileTap` | State while being clicked/pressed |
| `whileFocus` | State while element has focus |
| `whileDrag` | State while being dragged |
| `whileInView` | State while element is in the viewport |

```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
/>
```

---

## Animatable Properties

### Transform
| Property | Example value | What it does |
|---|---|---|
| `x` | `x: 100` | Translate X (pixels) |
| `y` | `y: -50` | Translate Y (pixels) |
| `z` | `z: 10` | Translate Z (pixels) |
| `rotate` | `rotate: 45` | Rotate in degrees |
| `rotateX` | `rotateX: 90` | Rotate around X axis |
| `rotateY` | `rotateY: 180` | Rotate around Y axis |
| `scale` | `scale: 1.2` | Scale both axes |
| `scaleX` | `scaleX: 0.5` | Scale X axis only |
| `scaleY` | `scaleY: 2` | Scale Y axis only |
| `skewX` | `skewX: 10` | Skew along X axis |
| `skewY` | `skewY: -5` | Skew along Y axis |

### Visual
| Property | Example value | What it does |
|---|---|---|
| `opacity` | `opacity: 0` | Transparency (0–1) |
| `backgroundColor` | `backgroundColor: "#ff0000"` | Background color |
| `color` | `color: "blue"` | Text color |
| `borderRadius` | `borderRadius: "50%"` | Border radius |
| `width` | `width: "100%"` | Width |
| `height` | `height: 200` | Height |
| `boxShadow` | `boxShadow: "0 10px 30px rgba(0,0,0,0.3)"` | Box shadow |
| `filter` | `filter: "blur(4px)"` | CSS filter |
| `clipPath` | `clipPath: "circle(50%)"` | Clip path |

---

## Transition

The `transition` prop controls **how** the animation plays. Goes on the `motion` element or inside a variant.

### Types
| Type | Description |
|---|---|
| `tween` | Standard eased animation with a set duration |
| `spring` | Physics-based spring simulation |
| `inertia` | Decelerates from an initial velocity (good for drag) |
| `just` | Instantly snap to target (no animation) |

```tsx
// Tween
transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}

// Spring
transition={{ type: "spring", stiffness: 300, damping: 20 }}

// Instant
transition={{ type: "just" }}
```

### Tween Options
| Option | Example | What it does |
|---|---|---|
| `duration` | `duration: 0.5` | Animation length in seconds |
| `delay` | `delay: 0.2` | Wait before starting (seconds) |
| `ease` | `ease: "easeOut"` | Easing curve name |
| `repeat` | `repeat: Infinity` | Number of times to repeat |
| `repeatType` | `repeatType: "reverse"` | `"loop"` \| `"reverse"` \| `"mirror"` |
| `repeatDelay` | `repeatDelay: 1` | Delay between repeats |
| `times` | `times: [0, 0.5, 1]` | Progress points for keyframes |

### Spring Options
| Option | Example | What it does |
|---|---|---|
| `stiffness` | `stiffness: 200` | How "stiff" the spring is (higher = snappier) |
| `damping` | `damping: 20` | Friction (lower = more bounce) |
| `mass` | `mass: 1` | Weight of the object |
| `restDelta` | `restDelta: 0.001` | Threshold to stop animating |
| `bounce` | `bounce: 0.3` | Shorthand for bounciness (0–1) |
| `duration` | `duration: 0.8` | Override spring duration |

### Easing Curves
| Value | Description |
|---|---|
| `"linear"` | Constant speed |
| `"easeIn"` | Starts slow, ends fast |
| `"easeOut"` | Starts fast, ends slow |
| `"easeInOut"` | Slow start and end |
| `"circIn"` / `"circOut"` | Circular curve |
| `"backIn"` / `"backOut"` | Overshoot then settle |
| `"anticipate"` | Pull back slightly before moving |
| `[0.25, 0.1, 0.25, 1]` | Custom cubic-bezier array |

---

## Variants

Variants let you define named animation states and share them across a component tree.

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // children animate 0.1s apart
      delayChildren: 0.2,    // wait before animating children
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  <motion.li variants={itemVariants} />
  <motion.li variants={itemVariants} />
  <motion.li variants={itemVariants} />
</motion.ul>
```

Children **automatically inherit** `initial`/`animate` from their parent when using variants — no need to repeat them.

### Variant Orchestration (inside parent transition)
| Option | Example | What it does |
|---|---|---|
| `staggerChildren` | `staggerChildren: 0.1` | Delay between each child animating |
| `staggerDirection` | `staggerDirection: -1` | `1` = forward, `-1` = reverse stagger |
| `delayChildren` | `delayChildren: 0.3` | Delay before first child starts |
| `when` | `when: "beforeChildren"` | Parent animates before (`"beforeChildren"`) or after (`"afterChildren"`) children |

---

## AnimatePresence

Enables `exit` animations when components are removed from the React tree.

```tsx
import { AnimatePresence, motion } from "framer-motion"

<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    />
  )}
</AnimatePresence>
```

**Rules:**
- Wrap the conditional element with `<AnimatePresence>`
- Give the element a stable `key` prop
- Define an `exit` prop on the `motion` element

### AnimatePresence Props
| Prop | Example | What it does |
|---|---|---|
| `mode` | `mode="wait"` | `"sync"` (default), `"wait"` (exit first, then enter), `"popLayout"` |
| `initial` | `initial={false}` | Skip enter animation on first render |
| `onExitComplete` | `onExitComplete={() => {}}` | Callback when all exit animations finish |

```tsx
// Route transitions: wait for old page to leave before new one enters
<AnimatePresence mode="wait">
  <motion.div key={router.pathname} ... />
</AnimatePresence>
```

---

## Gesture Animations

| Prop | Triggers when... |
|---|---|
| `whileHover` | Mouse hovers over element |
| `whileTap` | Element is pressed/clicked |
| `whileFocus` | Element receives keyboard focus |
| `whileDrag` | Element is being dragged |
| `whileInView` | Element scrolls into the viewport |

```tsx
<motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#0070f3" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
/>
```

### `whileInView` options via `viewport`
```tsx
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
/>
```

| `viewport` option | Example | What it does |
|---|---|---|
| `once` | `once: true` | Only animate on first scroll into view |
| `amount` | `amount: 0.5` | How much of element must be visible (0–1) |
| `margin` | `margin: "-100px"` | Expand/shrink the trigger area |

---

## Drag

```tsx
<motion.div
  drag                         // enable drag on both axes
  drag="x"                     // x axis only
  drag="y"                     // y axis only
  dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}
  dragElastic={0.2}            // how much it stretches past constraints (0–1)
  dragMomentum={false}         // disable inertia on release
  dragSnapToOrigin             // snaps back to starting position
  onDragStart={(e, info) => {}}
  onDrag={(e, info) => {}}
  onDragEnd={(e, info) => {}}
/>
```

Constrain drag to a ref element:
```tsx
const constraintsRef = useRef(null)

<div ref={constraintsRef}>
  <motion.div drag dragConstraints={constraintsRef} />
</div>
```

---

## Keyframes

Pass an **array** to any animatable prop to create a keyframe sequence.

```tsx
<motion.div
  animate={{
    x: [0, 100, 50, 100],
    opacity: [1, 0.5, 1],
  }}
  transition={{
    duration: 2,
    times: [0, 0.3, 0.6, 1],  // progress of each keyframe (must match array length)
    ease: ["easeIn", "easeOut", "easeIn"],
  }}
/>
```

---

## useAnimation Hook

Programmatically control animations from outside the component.

```tsx
import { useAnimation } from "framer-motion"

const controls = useAnimation()

// Start
await controls.start({ opacity: 1, x: 0 })

// Stop
controls.stop()

// Reset
controls.set({ opacity: 0 })

<motion.div animate={controls} />
```

Sequence animations:
```tsx
async function sequence() {
  await controls.start({ x: 100 })
  await controls.start({ y: 100 })
  await controls.start({ rotate: 180 })
}
```

---

## MotionValue

`MotionValue` tracks state and velocity of a value — useful for linking animations without triggering re-renders.

```tsx
import { useMotionValue, useTransform, motion } from "framer-motion"

const x = useMotionValue(0)

// Transform x (0–200) into rotate (0–90deg)
const rotate = useTransform(x, [0, 200], [0, 90])

// Transform x into a color
const background = useTransform(x, [0, 200], ["#ff0000", "#0000ff"])

<motion.div drag="x" style={{ x, rotate, background }} />
```

### Common MotionValue hooks
| Hook | Description |
|---|---|
| `useMotionValue(initial)` | Create a MotionValue with an initial value |
| `useTransform(value, input, output)` | Map one MotionValue range to another |
| `useSpring(value, config)` | Apply spring physics to a MotionValue |
| `useVelocity(value)` | Track the velocity of a MotionValue |
| `useMotionTemplate` | Compose MotionValues into a CSS string template |

```tsx
// useMotionTemplate example
const boxShadow = useMotionTemplate`0px ${blur}px ${spread}px rgba(0,0,0,0.5)`
```

---

## Scroll Animations

```tsx
import { useScroll, useTransform } from "framer-motion"

// Page scroll progress
const { scrollY, scrollYProgress } = useScroll()

// scrollYProgress is 0 at top, 1 at bottom
const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

<motion.div style={{ opacity }} />
```

Scroll relative to a specific element:
```tsx
const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]  // [when target enters, when target leaves]
})
```

### `offset` keywords
| Value | Meaning |
|---|---|
| `"start"` | Top/left edge of target |
| `"end"` | Bottom/right edge of target |
| `"center"` | Center of target |
| `"start start"` | Target's top meets viewport's top |
| `"start end"` | Target's top meets viewport's bottom |
| `"end end"` | Target's bottom meets viewport's bottom |

---

## Layout Animations

Animate layout changes (size, position) automatically — no need to know start/end values.

```tsx
// Animate position/size changes when layout shifts
<motion.div layout />

// Animate just size changes
<motion.div layout="size" />

// Animate just position changes
<motion.div layout="position" />

// Animate border radius during layout change
<motion.div layout style={{ borderRadius: 8 }} />
```

### Shared Layout (layoutId)
Elements with the same `layoutId` animate between each other — great for selected indicators, modals, and expanding cards.

```tsx
// Tab indicator
{tabs.map(tab => (
  <button key={tab.id} onClick={() => setActive(tab.id)}>
    {tab.label}
    {active === tab.id && (
      <motion.div layoutId="tab-indicator" className="underline" />
    )}
  </button>
))}
```

---

## Common Patterns

### Fade In on Mount
```tsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} />
```

### Slide In from Bottom
```tsx
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} />
```

### Staggered List
```tsx
const list = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

<motion.ul variants={list} initial="hidden" animate="visible">
  {items.map(i => <motion.li key={i} variants={item} />)}
</motion.ul>
```

### Hover Card Lift
```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
/>
```

### Pulse / Infinite Loop
```tsx
<motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
/>
```

### Page Transition (with Next.js)
```tsx
const pageVariants = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
}

<AnimatePresence mode="wait">
  <motion.main key={router.pathname} variants={pageVariants} initial="initial" animate="enter" exit="exit">
    {children}
  </motion.main>
</AnimatePresence>
```

### Scroll-triggered Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>
```

---

## Performance Tips

| Tip | Why |
|---|---|
| Animate `transform` and `opacity` | GPU-accelerated — won't trigger layout recalculation |
| Avoid animating `width`, `height`, `top`, `left` | Triggers layout — use `scaleX`/`scaleY` + `layout` instead |
| Use `will-change: transform` (via style) | Hints to browser to promote to its own layer |
| Use `MotionValue` + `style` for scroll-linked animations | Skips React re-renders entirely |
| Add `viewport={{ once: true }}` | Stops re-animating on scroll up/down |
| Use `lazy` from framer-motion for code splitting | Defers loading the animation library |

---

## useAnimate Hook (v10+)

More flexible alternative to `useAnimation` — directly animates DOM elements imperatively.

```tsx
import { useAnimate, stagger } from "framer-motion"

const [scope, animate] = useAnimate()

async function handleClick() {
  await animate("li", { opacity: 0, x: -20 }, { delay: stagger(0.05) })
  await animate("li", { opacity: 1, x: 0 })
}

<ul ref={scope}>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

## Quick Reference: `transition` Presets

```tsx
// Snappy spring (buttons, hovers)
transition={{ type: "spring", stiffness: 400, damping: 17 }}

// Gentle spring (modals, cards)
transition={{ type: "spring", stiffness: 200, damping: 25 }}

// Bouncy spring (playful UI)
transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}

// Fast tween (subtle fades)
transition={{ duration: 0.2, ease: "easeOut" }}

// Slow reveal (hero sections)
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}  // expo ease out
```

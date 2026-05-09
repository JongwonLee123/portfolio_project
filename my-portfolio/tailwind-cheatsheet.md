# Tailwind CSS Cheatsheet

## Colors
Colors follow the pattern: `{property}-{color}-{shade}`
Shades: `50 100 200 300 400 500 600 700 800 900 950`
Colors: `slate gray zinc neutral stone red orange amber yellow lime green emerald teal cyan sky blue indigo violet purple fuchsia pink rose`

| Property | Example | What it does |
|---|---|---|
| `text-{color}-{shade}` | `text-blue-500` | Text color |
| `bg-{color}-{shade}` | `bg-gray-700` | Background color |
| `border-{color}-{shade}` | `border-red-300` | Border color |
| `text-white` / `text-black` | `text-white` | Pure white/black text |
| `bg-transparent` | `bg-transparent` | No background |

---

## Typography

| Property | Example | What it does |
|---|---|---|
| `text-xs` | `text-xs` | 12px |
| `text-sm` | `text-sm` | 14px |
| `text-base` | `text-base` | 16px (default) |
| `text-lg` | `text-lg` | 18px |
| `text-xl` | `text-xl` | 20px |
| `text-2xl` to `text-9xl` | `text-4xl` | Larger sizes |
| `font-thin` | `font-thin` | Weight 100 |
| `font-light` | `font-light` | Weight 300 |
| `font-normal` | `font-normal` | Weight 400 |
| `font-medium` | `font-medium` | Weight 500 |
| `font-semibold` | `font-semibold` | Weight 600 |
| `font-bold` | `font-bold` | Weight 700 |
| `font-extrabold` | `font-extrabold` | Weight 800 |
| `italic` | `italic` | Italic text |
| `underline` | `underline` | Underline |
| `line-through` | `line-through` | Strikethrough |
| `uppercase` | `uppercase` | ALL CAPS |
| `lowercase` | `lowercase` | all lowercase |
| `capitalize` | `capitalize` | First Letter Cap |
| `text-left/center/right` | `text-center` | Text alignment |
| `leading-tight/normal/loose` | `leading-loose` | Line height |
| `tracking-tight/normal/wide` | `tracking-wide` | Letter spacing |

---

## Spacing (Padding & Margin)
Scale: `0=0px  1=4px  2=8px  3=12px  4=16px  5=20px  6=24px  8=32px  10=40px  12=48px  16=64px`

| Property | Example | What it does |
|---|---|---|
| `p-{n}` | `p-4` | Padding all sides |
| `px-{n}` | `px-6` | Padding left + right |
| `py-{n}` | `py-2` | Padding top + bottom |
| `pt/pr/pb/pl-{n}` | `pt-4` | Padding one side |
| `m-{n}` | `m-4` | Margin all sides |
| `mx-{n}` | `mx-auto` | Margin left + right (`auto` = center) |
| `my-{n}` | `my-8` | Margin top + bottom |
| `mt/mr/mb/ml-{n}` | `mb-4` | Margin one side |
| `-mt-{n}` | `-mt-4` | Negative margin (pull up) |

---

## Sizing

| Property | Example | What it does |
|---|---|---|
| `w-{n}` | `w-64` | Fixed width (n × 4px) |
| `w-full` | `w-full` | 100% width |
| `w-screen` | `w-screen` | 100vw |
| `w-1/2` | `w-1/2` | 50% |
| `w-1/3` / `w-2/3` | `w-1/3` | 33% / 66% |
| `w-auto` | `w-auto` | Auto width |
| `max-w-sm/md/lg/xl/2xl` | `max-w-3xl` | Max width caps |
| `min-w-0` / `min-w-full` | `min-w-0` | Min width |
| `h-{n}` | `h-16` | Fixed height |
| `h-full` | `h-full` | 100% height |
| `h-screen` | `h-screen` | 100vh |
| `min-h-screen` | `min-h-screen` | At least full viewport |

---

## Flexbox

| Property | Example | What it does |
|---|---|---|
| `flex` | `flex` | Enable flexbox |
| `flex-row` | `flex-row` | Horizontal (default) |
| `flex-col` | `flex-col` | Vertical |
| `flex-wrap` | `flex-wrap` | Allow wrapping |
| `justify-start` | `justify-start` | Align along main axis (start) |
| `justify-center` | `justify-center` | Center along main axis |
| `justify-end` | `justify-end` | End of main axis |
| `justify-between` | `justify-between` | Space between items |
| `justify-around` | `justify-around` | Space around items |
| `items-start` | `items-start` | Align cross axis (top) |
| `items-center` | `items-center` | Center cross axis |
| `items-end` | `items-end` | Bottom of cross axis |
| `items-stretch` | `items-stretch` | Stretch to fill (default) |
| `self-start` | `self-start` | Override alignment for one item |
| `self-center` | `self-center` | Center one item |
| `gap-{n}` | `gap-4` | Gap between items |
| `gap-x-{n}` | `gap-x-4` | Horizontal gap only |
| `gap-y-{n}` | `gap-y-4` | Vertical gap only |
| `flex-1` | `flex-1` | Grow to fill available space |
| `shrink-0` | `shrink-0` | Don't shrink |
| `grow` | `grow` | Grow to fill |

---

## Grid

| Property | Example | What it does |
|---|---|---|
| `grid` | `grid` | Enable grid |
| `grid-cols-{n}` | `grid-cols-3` | n equal columns |
| `grid-rows-{n}` | `grid-rows-2` | n equal rows |
| `col-span-{n}` | `col-span-2` | Item spans n columns |
| `row-span-{n}` | `row-span-2` | Item spans n rows |
| `gap-{n}` | `gap-6` | Gap between grid cells |

---

## Borders

| Property | Example | What it does |
|---|---|---|
| `border` | `border` | 1px border all sides |
| `border-{n}` | `border-2` | n px border |
| `border-t/r/b/l` | `border-b` | Border one side |
| `border-{color}-{shade}` | `border-gray-300` | Border color |
| `rounded` | `rounded` | Small border radius |
| `rounded-sm/md/lg/xl/2xl/3xl` | `rounded-xl` | Larger radius |
| `rounded-full` | `rounded-full` | Circle / pill |
| `rounded-none` | `rounded-none` | No radius |
| `rounded-t/r/b/l-{size}` | `rounded-t-lg` | Radius one side |

---

## Shadows

| Property | Example | What it does |
|---|---|---|
| `shadow-sm` | `shadow-sm` | Small shadow |
| `shadow` | `shadow` | Default shadow |
| `shadow-md` | `shadow-md` | Medium shadow |
| `shadow-lg` | `shadow-lg` | Large shadow |
| `shadow-xl` | `shadow-xl` | Extra large shadow |
| `shadow-2xl` | `shadow-2xl` | Biggest shadow |
| `shadow-none` | `shadow-none` | Remove shadow |

---

## Positioning

| Property | Example | What it does |
|---|---|---|
| `static` | `static` | Default flow |
| `relative` | `relative` | Positioned relative to itself |
| `absolute` | `absolute` | Positioned relative to nearest `relative` parent |
| `fixed` | `fixed` | Fixed to viewport |
| `sticky` | `sticky` | Sticks on scroll |
| `top/right/bottom/left-{n}` | `top-0` | Offset from edge |
| `inset-0` | `inset-0` | top+right+bottom+left = 0 |
| `z-{n}` | `z-10` | Stack order (z-index) |

---

## Display & Visibility

| Property | Example | What it does |
|---|---|---|
| `block` | `block` | Display block |
| `inline` | `inline` | Display inline |
| `inline-block` | `inline-block` | Inline block |
| `hidden` | `hidden` | display: none |
| `invisible` | `invisible` | Invisible but takes space |
| `overflow-hidden` | `overflow-hidden` | Clip content outside bounds |
| `overflow-auto` | `overflow-auto` | Scroll if content overflows |
| `opacity-{n}` | `opacity-50` | 0–100 opacity |

---

## Interactivity & Transitions

| Property | Example | What it does |
|---|---|---|
| `cursor-pointer` | `cursor-pointer` | Hand cursor on hover |
| `cursor-not-allowed` | `cursor-not-allowed` | Disabled cursor |
| `select-none` | `select-none` | Prevent text selection |
| `transition` | `transition` | Smooth transitions |
| `duration-{n}` | `duration-300` | Transition time in ms |
| `ease-in/out/in-out` | `ease-in-out` | Easing curve |
| `hover:{class}` | `hover:bg-blue-600` | Apply on hover |
| `focus:{class}` | `focus:outline-none` | Apply on focus |
| `active:{class}` | `active:scale-95` | Apply when clicked |

---

## Responsive Prefixes
Apply any class only at certain screen sizes:

| Prefix | Breakpoint | Example |
|---|---|---|
| (none) | All sizes | `text-sm` |
| `sm:` | ≥ 640px | `sm:text-base` |
| `md:` | ≥ 768px | `md:flex-row` |
| `lg:` | ≥ 1024px | `lg:grid-cols-3` |
| `xl:` | ≥ 1280px | `xl:max-w-5xl` |
| `2xl:` | ≥ 1536px | `2xl:text-xl` |

---

## Image Specific

| Property | Example | What it does |
|---|---|---|
| `object-cover` | `object-cover` | Fill box, crop to fit |
| `object-contain` | `object-contain` | Fit inside box, no crop |
| `object-fill` | `object-fill` | Stretch to fill (distorts) |
| `object-center` | `object-center` | Crop from center |
| `object-top` | `object-top` | Crop from top |

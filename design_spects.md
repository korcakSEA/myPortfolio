"# Portfolio Design Specifications for Figma

## Table of Contents
1. [Design System Overview](#design-system-overview)
2. [Layout & Grid System](#layout--grid-system)
3. [Color Palette](#color-palette)
4. [Typography Scale](#typography-scale)
5. [Component Specifications](#component-specifications)
6. [Responsive Breakpoints](#responsive-breakpoints)
7. [Animations & Transitions](#animations--transitions)

---

## Design System Overview

**Design Philosophy:** Beginner-friendly, nature-inspired, clean and modern

**Canvas Dimensions:**
- Desktop: 1920px × Variable height
- Tablet: 768px × Variable height
- Mobile: 375px × Variable height

**Container Max Width:** 1152px (72rem)
**Container Padding:** 
- Desktop: 32px (2rem)
- Tablet: 24px (1.5rem)
- Mobile: 16px (1rem)

---

## Layout & Grid System

### Grid Settings
- **Columns:** 12-column grid
- **Gutter:** 32px (Desktop), 24px (Tablet), 16px (Mobile)
- **Margins:** Match container padding

### Spacing Scale (Use for padding/margins)
```
4px   = 0.25rem = XS
8px   = 0.5rem  = SM
12px  = 0.75rem = MD
16px  = 1rem    = Base
24px  = 1.5rem  = LG
32px  = 2rem    = XL
48px  = 3rem    = 2XL
64px  = 4rem    = 3XL
80px  = 5rem    = 4XL
96px  = 6rem    = 5XL
```

---

## Color Palette

### Light Mode Palette

**Primary Colors:**
```
Sage Green:    #87A96B
Warm Brown:    #8B7355
Soft Cream:    #F5E6D3
Dark Sage:     #6B8E54
Pure White:    #FFFFFF
```

**Opacity Variations:**
```
Warm Brown 80%: rgba(139, 115, 85, 0.8)
Warm Brown 70%: rgba(139, 115, 85, 0.7)
Sage Green 90%: rgba(135, 169, 107, 0.9)
Sage Green 20%: rgba(135, 169, 107, 0.2)
White 90%:      rgba(255, 255, 255, 0.9)
White 70%:      rgba(255, 255, 255, 0.7)
White 20%:      rgba(255, 255, 255, 0.2)
```

### Dark Mode Palette

**Primary Colors:**
```
Light Sage:    #A4C98F
Light Beige:   #D4C5B5
Gray 950:      #030712
Gray 900:      #111827
Gray 800:      #1F2937
Gray 700:      #374151
Gray 600:      #4B5563
Gray 400:      #9CA3AF
Gray 300:      #D1D5DB
Gray 200:      #E5E7EB
```

**Opacity Variations:**
```
Gray 900 90%:  rgba(17, 24, 39, 0.9)
Light Sage 90%: rgba(164, 201, 143, 0.9)
White 90%:     rgba(255, 255, 255, 0.9)
White 70%:     rgba(255, 255, 255, 0.7)
White 20%:     rgba(255, 255, 255, 0.2)
```

### Gradients

**Light Mode:**
```
Hero Background: 
  Linear 135° from #F5E6D3 to #FFFFFF

Project Card Back:
  Linear 135° from #87A96B to #6B8E54
```

**Dark Mode:**
```
Hero Background:
  Linear 135° from #111827 to #1F2937

Project Background:
  Linear 135° from #1F2937 to #111827

Project Card Back:
  Linear 135° from #A4C98F to #87A96B
```

---

## Typography Scale

### Font Family
**Primary:** Poppins (Google Fonts)
**Weights:** 300, 400, 500, 600, 700, 800
**Import URL:** https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap

### Font Sizes & Line Heights

| Style Name | Size | Line Height | Weight | Letter Spacing | Usage |
|------------|------|-------------|--------|----------------|-------|
| Hero XL    | 72px | 1.1 (79px)  | 800    | -0.02em        | Hero name (Desktop) |
| Hero L     | 60px | 1.1 (66px)  | 800    | -0.02em        | Hero name (Tablet) |
| Hero M     | 48px | 1.1 (53px)  | 800    | -0.02em        | Hero name (Mobile) |
| Heading XL | 48px | 1.2 (58px)  | 700    | -0.01em        | Section headings (Desktop) |
| Heading L  | 36px | 1.2 (43px) | 700     | -0.01em        | Section headings (Mobile) |
| Subheading XL | 36px | 1.2 (43px) | 600 | -0.01em | Hero title (Desktop) |
| Subheading L | 30px | 1.2 (36px) | 600 | 0 | Hero title (Tablet) |
| Subheading M | 24px | 1.3 (31px) | 600 | 0 | Hero title (Mobile), Contact subhead |
| Body XL | 20px | 1.6 (32px) | 400 | 0 | Hero bio (Desktop) |
| Body L | 18px | 1.6 (29px) | 400 | 0 | Hero bio (Mobile) |
| Body M | 16px | 1.5 (24px) | 400 | 0 | Default body text |
| Label | 16px | 1.5 (24px) | 500 | 0 | Nav links, form labels |
| Small | 14px | 1.4 (20px) | 400 | 0 | Descriptions, footer |
| Small Bold | 14px | 1.4 (20px) | 500 | 0 | Small headings |
| XSmall | 12px | 1.3 (16px) | 400 | 0 | Tech badges |

---

## Component Specifications

### 1. NAVBAR

**Dimensions:**
- Height: 64px (fixed)
- Width: 100% (Full width)
- Max container: 1152px
- Position: Fixed/Sticky top

**Layout:**
```
[Logo] ---------------------------------- [Nav Items] [Theme Toggle]
  32px padding left/right              8px gap between items
```

**Logo:**
- Text: \"AJ\"
- Font size: 24px
- Weight: 700
- Color Light: #87A96B
- Color Dark: #A4C98F

**Nav Items:**
- Font size: 16px
- Weight: 500
- Gap between items: 32px (Desktop), 24px (Tablet)
- Color Light: #8B7355
- Color Dark: #D1D5DB
- Hover Light: #87A96B
- Hover Dark: #A4C98F

**Theme Toggle Button:**
- Size: 40px × 40px
- Border radius: 8px
- Background Light: #F5E6D3
- Background Dark: #1F2937
- Icon size: 20px
- Hover effect: Background changes to #87A96B (Light) / #A4C98F (Dark)

**Mobile Menu:**
- Appears below navbar
- Padding: 16px
- Items stack vertically with 12px gap

**States:**
- Default: 90% opacity backdrop blur
- Scroll: Shadow-sm (0 1px 3px rgba(0,0,0,0.1))

---

### 2. HERO SECTION

**Dimensions:**
- Height: 100vh (Full viewport height)
- Max width: 896px (content container)
- Padding top: 64px (navbar height)

**Layout (Centered):**
```
        [Hero Name - 72px/60px/48px]
           [Title - 36px/30px/24px]
      [Bio paragraph - 20px/18px max-width 672px]
              [CTA Button]
```

**Spacing:**
- Name to Title: 16px
- Title to Bio: 24px
- Bio to Button: 32px

**Hero Name:**
- Desktop: 72px, Weight 800
- Tablet: 60px, Weight 800
- Mobile: 48px, Weight 800
- Color Light: #8B7355
- Color Dark: #D4C5B5

**Title:**
- Desktop: 36px, Weight 600
- Tablet: 30px, Weight 600
- Mobile: 24px, Weight 600
- Color Light: #87A96B
- Color Dark: #A4C98F

**Bio:**
- Desktop: 20px
- Mobile: 18px
- Weight: 400
- Max width: 672px
- Line height: 1.6
- Color Light: #8B7355 (80% opacity)
- Color Dark: #D1D5DB

**CTA Button:**
- Padding: 12px 32px
- Border radius: 9999px (fully rounded)
- Font size: 16px
- Weight: 500
- Background Light: #87A96B
- Background Dark: #A4C98F
- Text Light: #FFFFFF
- Text Dark: #111827
- Icon: Arrow Down (20px) with bounce animation
- Hover: Scale 1.05, Background 90% opacity
- Shadow: 0 10px 30px rgba(0,0,0,0.1)

---

### 3. SKILLS SECTION

**Dimensions:**
- Padding: 80px (top/bottom), 16px (left/right)
- Max width: 1152px
- Background Light: #FFFFFF
- Background Dark: #111827

**Section Heading:**
- Size Desktop: 48px
- Size Mobile: 36px
- Weight: 700
- Margin bottom: 48px
- Color Light: #8B7355
- Color Dark: #D4C5B5

**Skill Grid:**
- Display: Flex wrap, centered
- Gap: 32px (Desktop), 48px between items
- Gap: 32px (Mobile)

**Skill Card:**
- Icon container: 80×80px (Desktop), 64×64px (Mobile)
- Border radius: 8px
- Background Light: #F5E6D3
- Background Dark: #1F2937
- Padding: 12px
- Shadow: 0 4px 6px rgba(0,0,0,0.1)
- Hover shadow: 0 10px 20px rgba(0,0,0,0.15)
- Hover scale: 1.1

**Skill Label:**
- Font size: 16px (Desktop), 14px (Mobile)
- Weight: 500
- Margin top: 12px
- Color Light: #8B7355
- Color Dark: #D1D5DB

**Animation:**
- Fade in up effect
- Stagger delay: 0.1s per item
- Duration: 0.6s
- Easing: ease-out

---

### 4. PROJECTS SECTION

**Dimensions:**
- Padding: 80px (top/bottom), 16px (left/right)
- Max width: 1152px
- Background: Gradient (see color palette)

**Section Heading:**
- Size Desktop: 48px
- Size Mobile: 36px
- Weight: 700
- Margin bottom: 48px
- Color Light: #8B7355
- Color Dark: #D4C5B5

**Project Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 32px
- Grid template: repeat(auto-fit, minmax(300px, 1fr))

**Project Card (3D Flip):**

**Front Side:**
```
Dimensions: Width auto, Height 320px
Border radius: 16px
Shadow: 0 10px 30px rgba(0,0,0,0.1)
Background Light: #FFFFFF
Background Dark: #1F2937

Layout:
┌─────────────────────┐
│   [Image 400×200]   │ Height: 192px
├─────────────────────┤
│  [Title - 20px]     │ Padding: 20px
│  [Description-14px] │
└─────────────────────┘
```

**Card Front Spacing:**
- Image height: 192px
- Content padding: 20px
- Title margin bottom: 8px

**Card Front Typography:**
- Title: 20px, Weight 700
- Title Color Light: #8B7355
- Title Color Dark: #D4C5B5
- Description: 14px, Weight 400
- Description Color Light: #8B7355 (70%)
- Description Color Dark: #9CA3AF

**Back Side:**
```
Dimensions: Same as front
Border radius: 16px
Background: Gradient (see color palette)
Padding: 24px

Layout:
┌─────────────────────┐
│  [Title - 20px]     │
│                     │
│  [Details - 14px]   │ Flex grow
│                     │
│  [Tech Badges]      │
│  [Code] [Demo]      │
└─────────────────────┘
```

**Card Back Spacing:**
- Padding: 24px all sides
- Title margin bottom: 12px
- Details margin bottom: 16px
- Tech badges margin bottom: 16px
- Button gap: 12px

**Card Back Typography:**
- Title: 20px, Weight 700, Color: #FFFFFF
- Details: 14px, Weight 400, Color: #FFFFFF (90%)
- Tech badges: 12px, Weight 400

**Tech Badges:**
- Padding: 4px 12px
- Border radius: 9999px
- Background: rgba(255,255,255,0.2)
- Text color: #FFFFFF
- Gap between badges: 8px

**Buttons (Code/Demo):**
- Padding: 8px 16px
- Border radius: 8px
- Font size: 14px
- Weight: 500
- Icon size: 16px
- Gap: 8px

**Code Button:**
- Background: #FFFFFF
- Text: #87A96B
- Hover: 90% opacity

**Demo Button:**
- Background: rgba(255,255,255,0.2)
- Border: 1px solid #FFFFFF
- Text: #FFFFFF
- Hover: Background rgba(255,255,255,0.3)

**Flip Animation:**
- Perspective: 1000px
- Transform: rotateY(180deg)
- Duration: 0.6s
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
- Trigger: Hover (Desktop), Tap (Mobile)

**Stagger Animation:**
- Fade in up effect
- Delay: 0.15s per card
- Duration: 0.6s

---

### 5. CONTACT SECTION

**Dimensions:**
- Padding: 80px (top/bottom), 16px (left/right)
- Max width: 1152px
- Background Light: #FFFFFF
- Background Dark: #111827

**Section Heading:**
- Size Desktop: 48px
- Size Mobile: 36px
- Weight: 700
- Margin bottom: 48px
- Color Light: #8B7355
- Color Dark: #D4C5B5

**Layout:**
- 2 columns (Desktop): 1:1 ratio
- 1 column (Mobile): Stack
- Gap: 48px

**Left Column (Contact Info):**

**Subheading:**
- Font size: 24px
- Weight: 700
- Margin bottom: 24px
- Color Light: #87A96B
- Color Dark: #A4C98F

**Description:**
- Font size: 16px
- Weight: 400
- Margin bottom: 24px
- Color Light: #8B7355 (80%)
- Color Dark: #D1D5DB

**Info Cards:**
```
┌──────────────────────────┐
│ [Icon 40×40] [Label]     │
│              [Value]     │
└──────────────────────────┘
Gap: 16px between icon and text
Margin: 16px between cards
```

**Icon Container:**
- Size: 48×48px
- Border radius: 8px
- Background Light: #F5E6D3
- Background Dark: #1F2937
- Icon size: 20px
- Icon color Light: #87A96B
- Icon color Dark: #A4C98F

**Info Text:**
- Label: 16px, Weight 500
- Value: 14px, Weight 400, 70% opacity

**Social Links:**
- Heading: 18px, Weight 600, Margin bottom 16px
- Button size: 48×48px
- Border radius: 8px
- Background Light: #87A96B
- Background Dark: #A4C98F
- Icon size: 20px
- Icon color Light: #FFFFFF
- Icon color Dark: #111827
- Gap: 16px between buttons
- Hover: Scale 1.1, 90% opacity

**Right Column (Form):**

**Form Container:**
- Border radius: 16px
- Padding: 32px
- Background Light: #f5e6d313
- Background Dark: #1F2937
- Shadow: 0 10px 30px rgba(0,0,0,0.1)

**Form Fields:**
- Gap between fields: 24px

**Label:**
- Font size: 14px
- Weight: 500
- Margin bottom: 8px
- Color Light: #8B7355
- Color Dark: #D1D5DB

**Input/Textarea:**
- Width: 100%
- Padding: 12px 16px
- Border radius: 8px
- Border: 1px solid (rgba #87A96B 20%)
- Background Light: #FFFFFF
- Background Dark: #374151
- Text color Light: #8B7355
- Text color Dark: #D1D5DB
- Font size: 16px
- Focus: Ring 2px #87A96B / #A4C98F

**Textarea:**
- Rows: 5
- Resize: None

**Submit Button:**
- Width: 100%
- Padding: 12px 24px
- Border radius: 8px
- Background Light: #87A96B
- Background Dark: #A4C98F
- Text Light: #FFFFFF
- Text Dark: #111827
- Font size: 16px
- Weight: 500
- Icon: Send (18px)
- Gap: 8px
- Hover: Scale 1.05, 90% opacity
- Shadow: 0 4px 6px rgba(0,0,0,0.1)

---

### 6. FOOTER

**Dimensions:**
- Padding: 32px 16px
- Width: 100%
- Background Light: #8B7355
- Background Dark: #030712

**Content:**
- Max width: 1152px
- Centered
- Text align: center

**Text:**
- Font size: 14px
- Weight: 400
- Color: #FFFFFF

**Heart Icon:**
- Size: 16px
- Color Light: #87A96B
- Color Dark: #A4C98F
- Fill: Current color

**Copyright:**
- Margin top: 8px
- Opacity: 70%

---

## Responsive Breakpoints

### Tailwind/Standard Breakpoints
```
Mobile:   < 640px   (sm)
Tablet:   640-1024px (sm to lg)
Desktop:  > 1024px   (lg+)
```

### Key Responsive Changes

**Navbar:**
- Mobile: Hamburger menu, stacked items
- Desktop: Horizontal menu

**Hero:**
- Mobile: Font 48px → Tablet: 60px → Desktop: 72px
- Mobile: Button full width → Desktop: Auto width

**Skills:**
- Mobile: 2 columns → Tablet: 3-4 columns → Desktop: 6 columns (single row)
- Icon size: Mobile 64px → Desktop 80px

**Projects:**
- Mobile: 1 column → Tablet: 2 columns → Desktop: 3 columns

**Contact:**
- Mobile: Stack (Info top, Form bottom)
- Desktop: Side by side (50/50)

---

## Animations & Transitions

### Global Transitions
```
Property: all
Duration: 0.3s
Easing: ease-in-out
```

### Specific Animations

**1. Fade In (Hero):**
```
From: opacity 0
To: opacity 1
Duration: 1s
Easing: ease-out
```

**2. Fade In Up (Skills, Projects):**
```
From: opacity 0, translateY(30px)
To: opacity 1, translateY(0)
Duration: 0.6s
Easing: ease-out
Stagger: 0.1s per item (Skills), 0.15s per item (Projects)
```

**3. Bounce (CTA Arrow):**
```
Animation: bounce
Duration: 1s
Iteration: infinite
Keyframes:
  0%, 100%: translateY(0)
  50%: translateY(-10px)
```

**4. Hover Scale (Buttons, Cards):**
```
Property: transform
Scale: 1.05 (Buttons), 1.1 (Skills, Social)
Duration: 0.3s
Easing: ease-in-out
```

**5. 3D Card Flip (Projects):**
```
Perspective: 1000px
Transform: rotateY(180deg)
Duration: 0.6s
Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
Backface visibility: hidden
```

**6. Theme Toggle:**
```
Property: background-color, color
Duration: 0.3s
Easing: ease-in-out
All colors transition smoothly
```

**7. Smooth Scroll:**
```
Behavior: smooth
```

---

## Shadow System

### Light Mode Shadows
```
Shadow SM:  0 1px 3px rgba(0,0,0,0.1)
Shadow MD:  0 4px 6px rgba(0,0,0,0.1)
Shadow LG:  0 10px 20px rgba(0,0,0,0.15)
Shadow XL:  0 10px 30px rgba(0,0,0,0.1)
```

### Dark Mode Shadows
```
Use same values, shadows are more subtle on dark backgrounds
```

### Hover Shadows
```
Cards: MD → LG
Buttons: MD → LG (subtle increase)
```

---

## Border Radius System

```
None:    0px      - Badges inner elements
SM:      4px      - Small elements
Default: 8px      - Inputs, buttons, skill cards, social buttons
LG:      12px     - Larger cards
XL:      16px     - Project cards, form container
2XL:     24px     - Special containers
Full:    9999px   - Pills, CTA button, badges
```

---

## States & Interactions

### Button States
```
Default: Base colors
Hover:   Scale 1.05, Opacity 90%
Active:  Scale 0.98
Focus:   Ring 2px accent color
Disabled: Opacity 50%, Cursor not-allowed
```

### Input States
```
Default: Border accent 20% opacity
Hover:   Border accent 40% opacity
Focus:   Ring 2px accent color
Error:   Border red, Ring red
Filled:  Background slightly darker
```

### Link/Nav States
```
Default: Base color
Hover:   Accent color
Active:  Darker accent
Visited: Same as default
```

### Card States
```
Default: Shadow MD
Hover:   Shadow LG, Scale (skills only)
Active:  Scale 0.98 (if clickable)
```

---

## Accessibility Notes

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Light mode: Dark text on light backgrounds
- Dark mode: Light text on dark backgrounds

### Focus States
- All interactive elements have visible focus rings
- Focus ring: 2px solid accent color
- Offset: 2px from element

### Interactive Areas
- Minimum touch target: 44×44px (mobile)
- Buttons exceed minimum size
- Adequate spacing between interactive elements

### Motion
- Respect `prefers-reduced-motion` for animations
- All animations can be disabled if needed

---

## Icon System

### Icons Used
All from **Lucide React** icon set:
- Menu (24px)
- X (24px)
- Moon (20px)
- Sun (20px)
- ArrowDown (20px)
- Mail (20px)
- MapPin (20px)
- Send (18px)
- Github (20px, 16px)
- Linkedin (20px)
- Twitter (20px)
- ExternalLink (16px)
- Heart (16px)

### Icon Styling
- Stroke width: 2px (default)
- Color: Inherits from parent
- Size: Specified per component

---

## Custom Scrollbar

**Width:** 10px

**Track:**
- Light: #F5E6D3
- Dark: #1F2937

**Thumb:**
- Light: #87A96B
- Dark: #A4C98F
- Border radius: 5px

**Thumb Hover:**
- Light: #6B8E54
- Dark: #87A96B

---

## Design Tokens Summary

### Color Tokens
```
--sage-green: #87A96B
--warm-brown: #8B7355
--soft-cream: #F5E6D3
--dark-sage: #6B8E54
--light-sage: #A4C98F
--light-beige: #D4C5B5
```

### Spacing Tokens
```
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-base: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
--spacing-4xl: 80px
```

### Typography Tokens
```
--font-family: 'Poppins', sans-serif
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800
```

---

## Figma Setup Recommendations

### 1. Create Color Styles
- Set up all colors as styles
- Create both light and dark mode versions
- Include opacity variations

### 2. Create Text Styles
- Set up all typography scales as text styles
- Include line height, letter spacing
- Create responsive variants (Desktop/Mobile)

### 3. Create Components
- Navbar (with variants)
- Buttons (multiple variants)
- Cards (project card front/back)
- Form inputs
- Skill card
- Social button

### 4. Use Auto Layout
- All containers use auto layout
- Set proper padding and gaps
- Use \"hug\" and \"fill\" appropriately

### 5. Create Variants
- Theme: Light/Dark
- State: Default/Hover/Active
- Size: Desktop/Tablet/Mobile

### 6. Set Up Grid
- 12-column grid
- Proper gutters and margins
- Show/hide based on breakpoint

---

## Export Settings

### For Development
- SVG for icons
- PNG @1x, @2x, @3x for images
- Use proper naming conventions

### Optimal Image Sizes
- Logo: 48×48px
- Skill icons: 80×80px (Desktop), 64×64px (Mobile)
- Project images: 400×250px
- Social icons: 20px (vector)

---

## Additional Notes

### Performance Considerations
- Use web-optimized images
- Implement lazy loading for below-fold content
- Optimize animations for 60fps

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- CSS fallbacks for unsupported properties

### Theme Persistence
- Save theme preference to localStorage
- Apply theme on page load
- Smooth transition between themes (300ms)

---

## Quick Reference Card

**Most Used Values:**
```
Container Max Width: 1152px
Section Padding: 80px (vertical)
Card Border Radius: 16px
Button Border Radius: 8px (square) / 9999px (pill)
Card Shadow: 0 10px 30px rgba(0,0,0,0.1)
Hover Scale: 1.05 (buttons), 1.1 (cards)
Animation Duration: 0.6s (standard)
Transition Duration: 0.3s (standard)
Gap Standard: 32px (desktop), 16px (mobile)
```

---

## End of Design Specifications

This document provides all measurements, colors, typography, and spacing needed to recreate the portfolio design in Figma. Each section is detailed with exact pixel values, colors, and states.

**Good luck with your Figma design!** 🎨✨
"
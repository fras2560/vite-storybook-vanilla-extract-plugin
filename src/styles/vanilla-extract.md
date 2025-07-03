# Vanilla-Extract Development Guide

## Introduction

Vanilla-extract is a zero-runtime CSS-in-TS library that provides type safety and composition patterns similar to styled-components, but with the advantage of generating static CSS at build time.

Key benefits:

- **Zero runtime** - All styles are extracted at build time
- **Type safety** - Full TypeScript support
- **Scoped styles** - Automatic class name hashing
- **Composition patterns** - Similar to styled-components
- **Theme support** - Strong theming capabilities

## File Structure

- **Component styles**: Create a `[componentName].css.ts` file for each component
- **Global styles**: Define global styles in `global.css.ts`
- **Design tokens**: Use color and theme variables from the `tokens` directory
- **Core**: Store foundational design primitives like color scales and base utilities in the `core` directory - these serve as building blocks for tokens
- **Typography**: Keep typography style definitions (`.css.ts`) and component implementations (`.tsx`) in the `typography` directory to create a consistent text hierarchy across the application

## Basic Concepts

### Styled-components vs vanilla-extract

**Styled-components (Before):**

```tsx
// Button.tsx
import styled from 'styled-components';

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.variant === 'primary' &&
    `
    background-color: blue;
    color: white;
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background-color: white;
    color: blue;
    border: 1px solid blue;
  `}
`;

export const Button = ({ variant = 'primary', children }) => (
  <StyledButton variant={variant}>{children}</StyledButton>
);
```

**vanilla-extract (After):**

```tsx
// button.css.ts
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Base styles
const baseButton = style({
  padding: '8px 16px',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
});

// Create variants with recipe
export const button = recipe({
  base: baseButton,
  variants: {
    variant: {
      primary: {
        backgroundColor: 'blue',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'white',
        color: 'blue',
        border: '1px solid blue',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

// Button.tsx
import React from 'react';
import { button } from './button.css';

export const Button = ({ variant = 'primary', children }) => (
  <button className={button({ variant })}>{children}</button>
);
```

## When to Use Each Tool

### Basic Styles (`style()`)

- **Use when**: Creating static styles that don't change
- **Example**: Container layouts, typography styles, static elements

```typescript
// myComponent.css.ts
import { style } from '@vanilla-extract/css';
import { tokens } from '../../styles/tokens/index.css';

export const container = style({
  display: 'flex',
  padding: '16px',
  backgroundColor: tokens.colors.button.secondary,
});
```

### Recipe (`recipe()`)

- **Use when**: Component has variants (size, color, state)
- **Example**: Buttons, tabs, cards with different styles

```typescript
// myComponent.css.ts
import { recipe } from '@vanilla-extract/recipes';
import { tokens } from '../../styles/tokens/index.css';

export const myComponent = recipe({
  base: {
    /* base styles */
  },
  variants: {
    size: {
      small: {
        /* small size styles */
      },
      medium: {
        /* medium size styles */
      },
    },
    variant: {
      primary: {
        /* primary variant */
      },
      secondary: {
        /* secondary variant */
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});
```

### Dynamic (`createVar()`, `assignInlineVars()`)

- **Use when**: Values must change at runtime based on props/state
- **Example**: Custom colors, positioning, dimensions from user input

```typescript
// In css.ts file
export const colorVar = createVar();
export const container = style({
  color: colorVar
});

// In component
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { colorVar, container } from './myComponent.css';

<div className={container} style={assignInlineVars({ [colorVar]: dynamicColor })} />
```

### Global Styles (`globalStyle()`)

- **Use when**: Styling global elements or targeting child selectors
- **Example**: Reset styles, targeting specific HTML elements

```typescript
import { globalStyle } from '@vanilla-extract/css';
import { container } from './myComponent.css';

// Add styles for child elements within a specific component
globalStyle(`${container} svg path`, {
  fill: 'currentColor',
});
```

## Using `globalStyle` with Dynamic Variables

In vanilla-extract, we often use `globalStyle` with the `dynamic` approach for several important reasons:

### Why `globalStyle` is Needed with Dynamic Variables

When you use a CSS variable (created with `createVar()`), you're setting up a variable that can be referenced throughout your CSS. However, there's a limitation: **inline styles can only affect the element they're directly applied to**.

Consider this example from your icon component:

```typescript
// icon.css.ts
export const iconColorVar = createVar();
export const container = style({
  // Define the variable on the container
  vars: {
    [iconColorVar]: colorContract.grey[600],
  },
});

// Then use globalStyle to apply it to child elements
globalStyle(`${container} svg path`, {
  fill: iconColorVar, // This makes SVG paths inherit the color variable
});
```

### Why Not Just Use Inline Styles?

You might wonder: "Why not just use `style={{color: dynamicColor}}` directly?"

1. **Selector Power**: Inline styles can't target:

   - Child elements (like SVG paths)
   - Pseudo-classes (`:hover`, `:active`)
   - Complex selectors

2. **Consistency**: Using CSS variables keeps styling logic in your CSS files instead of spreading it across components

3. **Performance**: CSS variables perform better than applying many individual inline styles

## Real-World Example

In your icon component:

```tsx
// Without globalStyle, you'd need:
<div className={containerRecipe({ size })}>
  <svg>
    <path style={{fill: color}} /> <!-- Must manually style each path -->
    <path style={{fill: color}} />
    <!-- And if these are created by a library, you can't reach them! -->
  </svg>
</div>

// With globalStyle + CSS variables, you get:
<div
  className={containerRecipe({ size })}
  style={assignInlineVars({ [iconColorVar]: color })}
>
  <svg>
    <!-- All paths automatically get the right color! -->
  </svg>
</div>
```

## clsx Utility

**Purpose**: Combines multiple class names conditionally.

```tsx
import clsx from 'clsx';

// Basic usage
<div className={clsx(styles.base, isActive && styles.active, customClass)} />;
```

## Combining Tools

### Recipe + Dynamic

```tsx
// CSS file
export const colorVar = createVar();
export const component = recipe({
  base: { color: colorVar },
  variants: { size: { small: {...}, large: {...} } }
});

// Component
<div
  className={component({ size: 'small' })}
  style={assignInlineVars({ [colorVar]: dynamicColor })}
/>
```

### Basic + Global Styles

```tsx
// CSS file
export const container = style({ display: 'flex' });
globalStyle(`${container} svg`, { fill: 'currentColor' });

// Component
<div className={container}>
  <svg>...</svg>
</div>;
```

### All Together

```tsx
// CSS file
export const colorVar = createVar();
export const component = recipe({
  base: {
    display: 'flex',
    color: colorVar
  },
  variants: {
    size: { small: {...}, large: {...} }
  }
});
globalStyle(`${component.classNames.base} svg`, { fill: colorVar });

// Component
<div
  className={clsx(
    component({ size: isPrimary ? 'large' : 'small' }),
    customClass
  )}
  style={assignInlineVars({ [colorVar]: themeColor })}
/>
```

## Using Design Tokens

```typescript
import { tokens } from '../../styles/tokens/index.css';

export const myStyle = style({
  // Colors
  color: tokens.colors.text.primary,
  backgroundColor: tokens.colors.button.secondary,

  // Borders
  border: `1px solid ${tokens.colors.border.default}`,

  // Use existing design system to ensure consistency
});
```

## Component Integration

```typescript
// MyComponent.tsx
import clsx from 'clsx';
import { myComponent } from './myComponent.css';

export const MyComponent = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}) => (
  <div
    className={clsx(myComponent({ variant, size }), className)}
    {...props}
  />
);
```

## Best Practices

1. **Use Type Definitions**: Export types for recipe variants for better type safety

   ```typescript
   export type MyComponentVariants = Parameters<typeof myComponent>[0];
   ```

2. **Separate Concerns**:

   - Style logic in `.css.ts` files
   - Component logic in `.tsx` files

3. **Tokens First**: Always prefer design tokens over hardcoded values

4. **Compound Variants**: Use `compoundVariants` to handle special styling for combinations of variants

   ```typescript
   compoundVariants: [
     {
       variants: { size: 'small', variant: 'primary' },
       style: {
         /* special styles */
       },
     },
   ];
   ```

5. **Override Specific Variant Combinations**: When you need certain variants to behave differently in specific states, use multiple compound variants with increasing specificity

   ```typescript
   // Example: Making textbutton maintain transparent background when disabled
   compoundVariants: [
     // General disabled state for all variants
     {
       variants: { disabled: true },
       style: {
         backgroundColor: tokens.colors.button.disabled,
         color: tokens.colors.text.buttonDisabled,
         cursor: 'not-allowed',
         opacity: 0.7,
       },
     },
     // Specific override for textbutton + disabled combination
     {
       variants: { variant: 'textbutton', disabled: true },
       style: {
         backgroundColor: 'transparent', // Override the general disabled background
         ':hover': {
           backgroundColor: 'transparent',
         },
       },
     },
   ];
   ```

   **Key principle**: More specific compound variants (matching multiple conditions) will override less specific ones (matching fewer conditions).

6. **Avoid Inline Styles**: Use vanilla-extract styles whenever possible instead of inline styles

7. **Use Global Styles Sparingly**: Only use `globalStyle` for elements that truly need global influence

8. **File Organization**:
   - Name CSS files with `.css.ts` extension
   - Keep CSS files next to their component files
   - Use consistent naming (e.g., `Button.tsx` and `button.css.ts`)

## Resources

### Official Documentation

- **Vanilla Extract Documentation**: [vanilla-extract.style](https://vanilla-extract.style/)
- **Style API**: [vanilla-extract.style/documentation/styling](https://vanilla-extract.style/documentation/styling/)
- **Recipe Package**: [vanilla-extract.style/documentation/packages/recipes](https://vanilla-extract.style/documentation/packages/recipes/)
- **Sprinkles Package**: [vanilla-extract.style/documentation/packages/sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/)
- **Dynamic Package**: [vanilla-extract.style/documentation/packages/dynamic](https://vanilla-extract.style/documentation/packages/dynamic/)

### GitHub Repositories

- **Main Repository**: [github.com/vanilla-extract-css/vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract)
- **NPM Packages**:
  - Core: [@vanilla-extract/css](https://www.npmjs.com/package/@vanilla-extract/css)
  - Recipes: [@vanilla-extract/recipes](https://www.npmjs.com/package/@vanilla-extract/recipes)
  - Sprinkles: [@vanilla-extract/sprinkles](https://www.npmjs.com/package/@vanilla-extract/sprinkles)
  - Dynamic: [@vanilla-extract/dynamic](https://www.npmjs.com/package/@vanilla-extract/dynamic)

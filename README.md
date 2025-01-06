# @datatr-ux/ods-tailwind-config

A Tailwind CSS plugin that extends your theme with custom colors, border radius values, and base styles following the OVHcloud design system.

## Installation

Install the library and its dependencies using npm:

```bash
npm install @datatr-ux/ods-tailwind-config
```

If you don't have Tailwind CSS installed in your project, follow the [Tailwind installation guide](https://tailwindcss.com/docs/installation) first.

---

## Usage

### Step 1: Add the Plugin to Your Tailwind Configuration

In your `tailwind.config.js` file, add the plugin to the `plugins` array:

```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@datatr-ux/ods-tailwind-config'),
  ],
};
```

### Step 2: Import the Styles

In your main CSS file (e.g., `src/style.css`), import the library's base styles:

```css
@import '@datatr-ux/ods-tailwind-config/style.css';
```

This ensures that the OVHcloud design system styles are applied to your project.

---

## Features

1. **Extended Theme Configuration**:
   - **Custom Colors**: Adds OVHcloud-specific color palettes.
   - **Custom Border Radius**: Provides additional border radius utilities.

2. **Base Styles**:
   - Applies default font-family, heading styles, and typography consistent with the OVHcloud design system.

3. **Integration-Ready**:
   - Automatically works with TailwindCSS projects by including this plugin and importing its styles.

---

## Example

### Example Project Configuration

#### `tailwind.config.js`

```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@datatr-ux/ods-tailwind-config'),
  ],
};
```

#### `src/style.css`

```css
@import '@datatr-ux/ods-tailwind-config/style.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Result
With the configuration above, your project will use the extended TailwindCSS theme and styles provided by `@datatr-ux/ods-tailwind-config`.

---

## Contributing

Contributions are welcome! To contribute:

1. Clone the repository:
   ```bash
   git clone https://github.com/datatr-ux/ods-tailwind-config.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make your changes and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

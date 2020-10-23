# Use tailwind.css Globaly
## 1 Create a file on project root nommed: postcss.config.js
```JavaScript
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
```
## 2 Creating css/scss file where importing styles
``` CSS
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
## 3 Import Css file on main.js (where app is mounted)
```JavaScript
import './assets/styles/tailwind.scss';
```
## Finally, we can use tailwind class on html or directly in css with @apply and declarate some classes

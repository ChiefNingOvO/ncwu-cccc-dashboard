(()=>{(()=>{var __webpack_modules__={9257:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(8081),l=t.n(o),i=t(23645),a=t.n(i),m=a()(l());m.push([M.id,`/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: var(--text-normal);
  --tw-ring-color: rgb(147 197 253 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: var(--text-normal);
  --tw-ring-color: rgb(147 197 253 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
:root {
  --color-primary: hsl(212, 89%, 53%);
  --color-secondary: hsl(208, 7%, 46%);
  --color-pass: hsl(100, 60%, 47%);
  --color-danger: hsl(3, 68%, 53%);
  --color-warning: hsl(35, 90%, 50%);
  --color-ac: hsl(3, 89%, 53%);
  --color-wa: hsl(100, 89%, 45%);
  --color-pta: hsl(212, 87%, 30%);
  --color-pds: hsl(23, 100%, 57%);
  --color-pat: hsl(199, 88%, 57%);
  --color-oms: hsl(175, 74%, 37%);
  --color-zoj: hsl(227, 59%, 40%);
  --color-es: hsl(45, 100%, 50%);
  --text-darkest: hsl(0, 0%, 0%);
  --text-dark: hsl(0, 0%, 10%);
  --text-normal: hsl(0, 0%, 25%);
  --text-light: hsl(0, 0%, 45%);
  --text-lightest: hsl(0, 0%, 60%);
  --text-white: hsl(0, 0%, 100%);
  --text-darkest-r: hsl(0, 0%, 100%);
  --border-all: hsla(0, 0%, 0%, 0.06);
  --bg-base: hsl(0, 0%, 100%);
  --bg-light: hsl(211, 20%, 97%);
  --bg-normal: hsl(211, 20%, 93%);
  --bg-site: hsl(204, 24%, 95%);
  --bg-base-r: hsl(0, 0%, 25%);
  --scroll-thumb: hsl(0, 0%, 85%);
  --problem-set-landing-from: hsl(214, 100%, 97%);
  --active-brightness: 0.85;
  --transition-fast: 0.15s;
  --transition-normal: 0.2s;
  --transition-slow: 0.4s;
  --height-full: 100vh;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-sans: 'Harmony', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  interpolate-size: allow-keywords;
  zoom: min(progress(100cqi, 0px, 360px), 1);
}
@supports (height: 100dvh) {
  :root {
    --height-full: 100dvh;
  }
}
@supports (font-variant-ligatures: none) {
  :root {
    --font-mono: 'JBMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", var(--font-sans);
  }
}
.dark {
  --color-primary: hsl(212, 100%, 60%);
  --color-pta: hsl(212, 100%, 60%);
  --text-darkest: hsl(0, 0%, 100%);
  --text-dark: hsl(0, 0%, 90%);
  --text-normal: hsl(0, 0%, 75%);
  --text-light: hsl(0, 0%, 60%);
  --text-lightest: hsl(0, 0%, 50%);
  --text-white: hsl(0, 0%, 100%);
  --text-darkest-r: hsl(0, 0%, 0%);
  --border-all: hsla(0, 0%, 100%, 0.06);
  --bg-base: hsl(0, 0%, 25%);
  --bg-light: hsl(0, 0%, 28%);
  --bg-normal: hsl(0, 0%, 31%);
  --bg-site: hsl(0, 0%, 20%);
  --bg-base-r: hsl(0, 0%, 100%);
  --scroll-thumb: hsl(0, 0%, 45%);
  --problem-set-landing-from: hsl(214, 50%, 10%);
}
body {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--text-normal);
  text-align: left;
  background-color: var(--bg-base);
}
a {
  color: var(--color-primary);
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
hr {
  border-color: var(--border-all);
}
body,
input {
  font-variant-ligatures: none;
}
/* Overwrites @tailwind base */
svg {
  display: inline;
}
svg.lucide {
  display: block;
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
.dark {
  color: var(--text-normal);
  background-color: var(--bg-site);
}
.dark .modal-title {
  color: var(--color-primary);
}
.dark .modal-header .close {
  color: var(--text-darkest);
}
.dark .modal-footer {
  border-color: var(--border-all);
}
.dark .page-link {
  background-color: var(--bg-base) !important;
  color: var(--text-normal) !important;
}
.dark .page-item.active .page-link {
  border-color: var(--color-primary);
}
.dark .breadcrumb {
  background: var(--bg-light);
}
.dark .card {
  background: var(--bg-base);
}
.dark .card-header {
  border-color: var(--border-all);
}
.dark .alert-secondary {
  background: var(--bg-light);
  color: var(--text-normal);
}
.dark .nav-tabs {
  border-color: var(--border-all);
}
.dark .nav-link.active {
  border-color: var(--border-all);
  background: var(--bg-light);
  color: var(--text-white);
}
.dark a {
  color: var(--color-primary);
}
.dark a:not(.pc-button):hover {
  color: var(--text-white) !important;
}
.dark hr {
  border-color: var(--border-all);
}
.dark input,
.dark textarea {
  caret-color: var(--text-darkest);
  color: var(--text-darkest);
}
.dark input[type='radio']:checked,
.dark textarea[type='radio']:checked {
  outline: 1px solid var(--color-primary);
}
.pc-layout {
  display: flex;
  min-width: 0;
}
.pc-layout.inline {
  display: inline-flex;
}
.pc-layout > * {
  flex: none;
}
.pc-h {
  display: flex;
  min-width: 0;
}
.pc-h.inline {
  display: inline-flex;
}
.pc-h > * {
  flex: none;
}
.pc-v {
  display: flex;
  min-width: 0;
  flex-direction: column;
}
.pc-v.inline {
  display: inline-flex;
}
.pc-v > * {
  flex: none;
}
.pc-v.pc-gap-default > :not(:first-child) {
  margin-left: 0;
  margin-top: 1rem;
}
.pc-v.pc-gap-0 > :not(:first-child) {
  margin-top: 0rem;
  margin-left: 0;
}
.pc-v.pc-gap-1 > :not(:first-child) {
  margin-top: 0.0625rem;
  margin-left: 0;
}
.pc-v.pc-gap-2 > :not(:first-child) {
  margin-top: 0.125rem;
  margin-left: 0;
}
.pc-v.pc-gap-3 > :not(:first-child) {
  margin-top: 0.1875rem;
  margin-left: 0;
}
.pc-v.pc-gap-4 > :not(:first-child) {
  margin-top: 0.25rem;
  margin-left: 0;
}
.pc-v.pc-gap-5 > :not(:first-child) {
  margin-top: 0.3125rem;
  margin-left: 0;
}
.pc-v.pc-gap-6 > :not(:first-child) {
  margin-top: 0.375rem;
  margin-left: 0;
}
.pc-v.pc-gap-7 > :not(:first-child) {
  margin-top: 0.4375rem;
  margin-left: 0;
}
.pc-v.pc-gap-8 > :not(:first-child) {
  margin-top: 0.5rem;
  margin-left: 0;
}
.pc-v.pc-gap-9 > :not(:first-child) {
  margin-top: 0.5625rem;
  margin-left: 0;
}
.pc-v.pc-gap-10 > :not(:first-child) {
  margin-top: 0.625rem;
  margin-left: 0;
}
.pc-v.pc-gap-11 > :not(:first-child) {
  margin-top: 0.6875rem;
  margin-left: 0;
}
.pc-v.pc-gap-12 > :not(:first-child) {
  margin-top: 0.75rem;
  margin-left: 0;
}
.pc-v.pc-gap-14 > :not(:first-child) {
  margin-top: 0.875rem;
  margin-left: 0;
}
.pc-v.pc-gap-16 > :not(:first-child) {
  margin-top: 1rem;
  margin-left: 0;
}
.pc-v.pc-gap-20 > :not(:first-child) {
  margin-top: 1.25rem;
  margin-left: 0;
}
.pc-v.pc-gap-24 > :not(:first-child) {
  margin-top: 1.5rem;
  margin-left: 0;
}
.pc-v.pc-gap-28 > :not(:first-child) {
  margin-top: 1.75rem;
  margin-left: 0;
}
.pc-v.pc-gap-32 > :not(:first-child) {
  margin-top: 2rem;
  margin-left: 0;
}
.pc-v.pc-gap-36 > :not(:first-child) {
  margin-top: 2.25rem;
  margin-left: 0;
}
.pc-v.pc-gap-40 > :not(:first-child) {
  margin-top: 2.5rem;
  margin-left: 0;
}
.pc-v.pc-gap-44 > :not(:first-child) {
  margin-top: 2.75rem;
  margin-left: 0;
}
.pc-v.pc-gap-48 > :not(:first-child) {
  margin-top: 3rem;
  margin-left: 0;
}
.pc-v.pc-gap-52 > :not(:first-child) {
  margin-top: 3.25rem;
  margin-left: 0;
}
.pc-v.pc-gap-56 > :not(:first-child) {
  margin-top: 3.5rem;
  margin-left: 0;
}
.pc-v.pc-gap-60 > :not(:first-child) {
  margin-top: 3.75rem;
  margin-left: 0;
}
.pc-v.pc-gap-64 > :not(:first-child) {
  margin-top: 4rem;
  margin-left: 0;
}
.pc-v.pc-gap-72 > :not(:first-child) {
  margin-top: 4.5rem;
  margin-left: 0;
}
.pc-v.pc-gap-80 > :not(:first-child) {
  margin-top: 5rem;
  margin-left: 0;
}
.pc-v.pc-gap-96 > :not(:first-child) {
  margin-top: 6rem;
  margin-left: 0;
}
.pc-v.flex-reverse {
  flex-direction: column-reverse;
}
.pc-v > * {
  max-width: 100%;
}
.pc-v > hr {
  width: 100%;
}
.pc-image {
  display: flex;
  min-width: 0;
  justify-content: center;
  align-items: center;
}
.pc-image.inline {
  display: inline-flex;
}
.pc-image > * {
  flex: none;
}
.pc-image > img {
  width: 100%;
  height: 100%;
}
.pc-image.match-width > img:not(.default) {
  height: auto;
}
.pc-image.match-height > img:not(.default) {
  width: auto;
}
.pc-image.original > img:not(.default) {
  object-fit: none;
  width: auto;
  height: auto;
}
.pc-avatar {
  display: flex;
  min-width: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
}
.pc-avatar.inline {
  display: inline-flex;
}
.pc-avatar > * {
  flex: none;
}
.pc-avatar > img {
  width: 100%;
  height: 100%;
}
.pc-avatar.match-width > img:not(.default) {
  height: auto;
}
.pc-avatar.match-height > img:not(.default) {
  width: auto;
}
.pc-avatar.original > img:not(.default) {
  object-fit: none;
  width: auto;
  height: auto;
}
.pc-badge {
  display: flex;
  min-width: 0;
  align-items: center;
  --color: var(--text-normal);
  color: var(--color);
  border-radius: 4px;
  height: 1.3125rem;
  padding: 0 0.5rem;
}
.pc-badge.inline {
  display: inline-flex;
}
.pc-badge > * {
  flex: none;
}
.pc-badge > :not(:first-child) {
  margin-left: 0.25rem;
}
.pc-badge:not(.pc-outline) {
  color: var(--text-white);
}
.pc-badge.pc-outline {
  border: 1px solid;
}
.pc-text {
  display: flex;
  min-width: 0;
  align-items: center;
  --color: var(--text-normal);
  color: var(--color);
}
.pc-text.inline {
  display: inline-flex;
}
.pc-text > * {
  flex: none;
}
.pc-text > :not(:first-child) {
  margin-left: 0.25rem;
}
.pc-text-raw {
  flex: auto;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}
.pc-title {
  display: flex;
  min-width: 0;
  align-items: center;
  --color: var(--text-normal);
  color: var(--color);
  font-weight: 600;
  color: var(--text-darkest);
}
.pc-title.inline {
  display: inline-flex;
}
.pc-title > * {
  flex: none;
}
.pc-title > :not(:first-child) {
  margin-left: 0.25rem;
}
.pc-icon {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-shrink: 0;
  font-size: 0;
}
.pc-icon.inline {
  display: inline-flex;
}
.pc-icon > * {
  flex: none;
}
.pc-icon-raw {
  font-size: 1rem;
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
.pc-icon-raw.pc-md {
  font-size: 1rem;
}
.pc-icon-raw.pc-lg {
  font-size: 1.25rem;
}
.pc-icon-raw.pc-xl {
  font-size: 1.5rem;
}
.pc-iii {
  display: flex;
  min-width: 0;
  justify-content: center;
  align-items: center;
}
.pc-iii.inline {
  display: inline-flex;
}
.pc-iii > * {
  flex: none;
}
.pc-iii-left {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
}
.pc-iii-left.inline {
  display: inline-flex;
}
.pc-iii-left > * {
  flex: none;
}
.pc-iii-center {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-grow: 0;
}
.pc-iii-center.inline {
  display: inline-flex;
}
.pc-iii-center > * {
  flex: none;
}
.pc-iii-right {
  display: flex;
  min-width: 0;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: flex-end;
}
.pc-iii-right.inline {
  display: inline-flex;
}
.pc-iii-right > * {
  flex: none;
}
.pc-list {
  display: flex;
  min-width: 0;
  flex-direction: column;
}
.pc-list.inline {
  display: inline-flex;
}
.pc-list > * {
  flex: none;
}
.pc-list.pc-gap-default > :not(:first-child) {
  margin-left: 0;
  margin-top: 1rem;
}
.pc-list.pc-gap-0 > :not(:first-child) {
  margin-top: 0rem;
  margin-left: 0;
}
.pc-list.pc-gap-1 > :not(:first-child) {
  margin-top: 0.0625rem;
  margin-left: 0;
}
.pc-list.pc-gap-2 > :not(:first-child) {
  margin-top: 0.125rem;
  margin-left: 0;
}
.pc-list.pc-gap-3 > :not(:first-child) {
  margin-top: 0.1875rem;
  margin-left: 0;
}
.pc-list.pc-gap-4 > :not(:first-child) {
  margin-top: 0.25rem;
  margin-left: 0;
}
.pc-list.pc-gap-5 > :not(:first-child) {
  margin-top: 0.3125rem;
  margin-left: 0;
}
.pc-list.pc-gap-6 > :not(:first-child) {
  margin-top: 0.375rem;
  margin-left: 0;
}
.pc-list.pc-gap-7 > :not(:first-child) {
  margin-top: 0.4375rem;
  margin-left: 0;
}
.pc-list.pc-gap-8 > :not(:first-child) {
  margin-top: 0.5rem;
  margin-left: 0;
}
.pc-list.pc-gap-9 > :not(:first-child) {
  margin-top: 0.5625rem;
  margin-left: 0;
}
.pc-list.pc-gap-10 > :not(:first-child) {
  margin-top: 0.625rem;
  margin-left: 0;
}
.pc-list.pc-gap-11 > :not(:first-child) {
  margin-top: 0.6875rem;
  margin-left: 0;
}
.pc-list.pc-gap-12 > :not(:first-child) {
  margin-top: 0.75rem;
  margin-left: 0;
}
.pc-list.pc-gap-14 > :not(:first-child) {
  margin-top: 0.875rem;
  margin-left: 0;
}
.pc-list.pc-gap-16 > :not(:first-child) {
  margin-top: 1rem;
  margin-left: 0;
}
.pc-list.pc-gap-20 > :not(:first-child) {
  margin-top: 1.25rem;
  margin-left: 0;
}
.pc-list.pc-gap-24 > :not(:first-child) {
  margin-top: 1.5rem;
  margin-left: 0;
}
.pc-list.pc-gap-28 > :not(:first-child) {
  margin-top: 1.75rem;
  margin-left: 0;
}
.pc-list.pc-gap-32 > :not(:first-child) {
  margin-top: 2rem;
  margin-left: 0;
}
.pc-list.pc-gap-36 > :not(:first-child) {
  margin-top: 2.25rem;
  margin-left: 0;
}
.pc-list.pc-gap-40 > :not(:first-child) {
  margin-top: 2.5rem;
  margin-left: 0;
}
.pc-list.pc-gap-44 > :not(:first-child) {
  margin-top: 2.75rem;
  margin-left: 0;
}
.pc-list.pc-gap-48 > :not(:first-child) {
  margin-top: 3rem;
  margin-left: 0;
}
.pc-list.pc-gap-52 > :not(:first-child) {
  margin-top: 3.25rem;
  margin-left: 0;
}
.pc-list.pc-gap-56 > :not(:first-child) {
  margin-top: 3.5rem;
  margin-left: 0;
}
.pc-list.pc-gap-60 > :not(:first-child) {
  margin-top: 3.75rem;
  margin-left: 0;
}
.pc-list.pc-gap-64 > :not(:first-child) {
  margin-top: 4rem;
  margin-left: 0;
}
.pc-list.pc-gap-72 > :not(:first-child) {
  margin-top: 4.5rem;
  margin-left: 0;
}
.pc-list.pc-gap-80 > :not(:first-child) {
  margin-top: 5rem;
  margin-left: 0;
}
.pc-list.pc-gap-96 > :not(:first-child) {
  margin-top: 6rem;
  margin-left: 0;
}
.pc-list.flex-reverse {
  flex-direction: column-reverse;
}
.pc-list > * {
  max-width: 100%;
}
.pc-list > hr {
  width: 100%;
}
.pc-list-item {
  display: flex;
  min-width: 0;
  align-items: center;
  padding: 0.5rem 0.25rem;
  transition: background-color var(--transition-normal);
}
.pc-list-item.inline {
  display: inline-flex;
}
.pc-list-item > * {
  flex: none;
}
.pc-list-item > :not(:first-child) {
  margin-left: 0.25rem;
}
.pc-list-item.active {
  background-color: hsla(212, 89%, 53%, 0.1);
}
.pc-list-item:hover {
  background-color: var(--bg-light);
}
.pc-list-item.pc-sm {
  padding: 0.25rem;
}
.pc-list-item.pc-sm .pc-list-item-main > :not(:first-child) {
  margin-top: 0;
}
.pc-list-item-main {
  display: flex;
  min-width: 0;
  flex-direction: column;
  flex: auto;
}
.pc-list-item-main.inline {
  display: inline-flex;
}
.pc-list-item-main > * {
  flex: none;
}
.pc-list-item-main.pc-gap-default > :not(:first-child) {
  margin-left: 0;
  margin-top: 1rem;
}
.pc-list-item-main.pc-gap-0 > :not(:first-child) {
  margin-top: 0rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-1 > :not(:first-child) {
  margin-top: 0.0625rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-2 > :not(:first-child) {
  margin-top: 0.125rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-3 > :not(:first-child) {
  margin-top: 0.1875rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-4 > :not(:first-child) {
  margin-top: 0.25rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-5 > :not(:first-child) {
  margin-top: 0.3125rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-6 > :not(:first-child) {
  margin-top: 0.375rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-7 > :not(:first-child) {
  margin-top: 0.4375rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-8 > :not(:first-child) {
  margin-top: 0.5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-9 > :not(:first-child) {
  margin-top: 0.5625rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-10 > :not(:first-child) {
  margin-top: 0.625rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-11 > :not(:first-child) {
  margin-top: 0.6875rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-12 > :not(:first-child) {
  margin-top: 0.75rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-14 > :not(:first-child) {
  margin-top: 0.875rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-16 > :not(:first-child) {
  margin-top: 1rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-20 > :not(:first-child) {
  margin-top: 1.25rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-24 > :not(:first-child) {
  margin-top: 1.5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-28 > :not(:first-child) {
  margin-top: 1.75rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-32 > :not(:first-child) {
  margin-top: 2rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-36 > :not(:first-child) {
  margin-top: 2.25rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-40 > :not(:first-child) {
  margin-top: 2.5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-44 > :not(:first-child) {
  margin-top: 2.75rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-48 > :not(:first-child) {
  margin-top: 3rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-52 > :not(:first-child) {
  margin-top: 3.25rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-56 > :not(:first-child) {
  margin-top: 3.5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-60 > :not(:first-child) {
  margin-top: 3.75rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-64 > :not(:first-child) {
  margin-top: 4rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-72 > :not(:first-child) {
  margin-top: 4.5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-80 > :not(:first-child) {
  margin-top: 5rem;
  margin-left: 0;
}
.pc-list-item-main.pc-gap-96 > :not(:first-child) {
  margin-top: 6rem;
  margin-left: 0;
}
.pc-list-item-main.flex-reverse {
  flex-direction: column-reverse;
}
.pc-list-item-main > * {
  max-width: 100%;
}
.pc-list-item-main > hr {
  width: 100%;
}
.pc-list-item-main > :not(:first-child) {
  margin-top: 0.5rem;
}
.pc-button {
  display: flex;
  min-width: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 2rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0 0.9375rem;
  --color: var(--color-primary);
  color: var(--color);
  background: var(--color);
  user-select: none;
  transition: all var(--transition-normal);
}
.pc-button.inline {
  display: inline-flex;
}
.pc-button > * {
  flex: none;
}
.pc-button:focus-visible {
  outline: var(--color) solid 2px;
  outline-offset: 1px;
}
.pc-button:hover {
  color: var(--color);
  text-decoration: none;
}
.pc-button.disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.pc-button:not(.disabled) {
  filter: brightness(var(--brightness, ''));
}
.pc-button:not(.disabled):hover {
  --brightness: var(--active-brightness);
}
.pc-button:not(.disabled):active {
  transform: translateY(0.0625rem);
}
.pc-button:not(.pc-button-text).pc-sm {
  height: 1.5rem;
}
.pc-button:not(.pc-button-text).pc-md {
  height: 2rem;
}
.pc-button:not(.pc-button-text).pc-lg {
  height: 2.5rem;
}
.pc-button-outline,
.pc-button-text,
.pc-button-borderless {
  background: none;
}
.pc-button-outline:not(.disabled):hover,
.pc-button-borderless:not(.disabled):hover {
  filter: none;
  background-color: var(--bg-light);
}
.pc-button-outline {
  border-color: var(--color);
}
.pc-button-text {
  height: auto;
  border-style: none;
  border-width: 0;
  border-color: currentColor;
  padding: 0;
  border-radius: 0;
}
@keyframes bg-translate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
@keyframes angle {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
.animated-bg-ai {
  background-image: linear-gradient(80deg, #8b5cf6, #d946ef, #8b5cf6);
  background-size: 200% 200%;
  animation: bg-translate 2s infinite linear var(--animation-state);
}
.pc-button-ai {
  --animation-state: paused;
  --color: var(--text-white);
  color: var(--color);
  border: 1px solid var(--color);
  background-image: linear-gradient(80deg, #8b5cf6, #d946ef, #8b5cf6);
  background-size: 200% 200%;
  animation: bg-translate 2s infinite linear var(--animation-state);
  animation-duration: 3s;
}
.pc-button-ai:before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  border-radius: 0.25rem;
  padding: 2px;
  background: conic-gradient(from var(--angle), #0ff, #f0f, #0ff);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  animation: angle 2s infinite ease var(--animation-state);
  opacity: 0;
  transition: opacity 0.4s;
}
.pc-button-ai .pc-text-raw {
  color: var(--color);
}
.pc-button-ai:hover {
  --animation-state: running;
  filter: none;
}
.pc-button-ai:hover:before {
  opacity: 1;
}
.pc-button-ai:focus {
  filter: none;
}
.pc-button-ai:disabled {
  animation: none;
}
.pc-button-ai:disabled .pc-icon {
  animation: none;
}
.pc-button-ai:disabled:before {
  content: unset;
}
.pc-slider {
  overflow: hidden;
  position: relative;
}
.pc-slider .pc-slider-container {
  transition: transform var(--transition-slow);
}
.pc-slider .pc-slider-indicator,
.pc-slider .pc-slider-operator {
  position: absolute;
  transition: opacity var(--transition-normal);
}
.pc-slider .pc-slider-indicator:hover,
.pc-slider .pc-slider-operator:hover,
.pc-slider .pc-slider-indicator:focus-visible,
.pc-slider .pc-slider-operator:focus-visible {
  opacity: 1;
}
.pc-slider:not(:hover):not(:focus-within) > .pc-slider-indicator,
.pc-slider .pc-slider-operator {
  opacity: 0;
}
.pc-slider .pc-slider-indicator {
  bottom: 0;
  padding: 0.5rem 0;
}
.pc-slider .pc-slider-indicator:not(.right) {
  left: 0.5rem;
}
.pc-slider .pc-slider-indicator:not(.left) {
  right: 0.5rem;
}
.pc-slider .pc-slider-indicator > * {
  width: 0.75rem;
  height: 0.5rem;
  margin: 0 0.25rem;
  border-radius: 0.25rem;
  background-color: hsla(0, 0%, 100%, 0.2);
  transition: width var(--transition-fast) linear, margin var(--transition-fast) linear, background-color var(--transition-fast) linear;
}
.pc-slider .pc-slider-indicator > *.active {
  width: 1.5rem;
  margin: 0;
}
.pc-slider .pc-slider-indicator > *.active,
.pc-slider .pc-slider-indicator > *:hover {
  background-color: hsl(0, 0%, 100%);
}
.pc-slider .pc-slider-operator {
  top: 0;
  bottom: 0;
}
.pc-slider .pc-slider-operator.left {
  left: 0;
}
.pc-slider .pc-slider-operator.right {
  right: 0;
}
.pc-loader {
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
  background-size: 3px 50%;
  animation: pc-loader 1s infinite linear;
  aspect-ratio: 1;
  opacity: 0.25;
}
@keyframes pc-loader {
  20% {
    background-position: 0% 30%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 70%, 50% 30%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 70%, 100% 30%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 70%;
  }
}
@keyframes bgPos {
  from {
    background-position: -200px 0;
  }
  to {
    background-position: 600px 0;
  }
}
.loading-placeholder {
  height: 1.5rem;
  border-radius: 8px;
  background: linear-gradient(90deg, var(--bg-normal) 0, var(--bg-light) 80px, var(--bg-normal) 160px);
  background-size: 800px 100%;
  overflow: hidden;
  animation: bgPos infinite linear 1.6s;
}
.interactive {
  filter: brightness(var(--brightness, ''));
}
.interactive:hover {
  --brightness: var(--active-brightness);
}
.pc-color-black {
  --color: var(--text-black);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-black:hover {
  --color: var(--text-black);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-dark {
  --color: var(--text-dark);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-dark:hover {
  --color: var(--text-dark);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-normal {
  --color: var(--text-normal);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-normal:hover {
  --color: var(--text-normal);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-light {
  --color: var(--text-light);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-light:hover {
  --color: var(--text-light);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-lightest {
  --color: var(--text-lightest);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-lightest:hover {
  --color: var(--text-lightest);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-white {
  --color: var(--text-white);
  --active-brightness: 1.5;
  color: var(--color);
}
.pc-active-white:hover {
  --color: var(--text-white);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-inherit {
  color: currentColor;
  --color: currentColor;
}
.pc-color-primary {
  --color: var(--color-primary);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-primary:hover {
  --color: var(--color-primary);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-secondary {
  --color: var(--color-secondary);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-secondary:hover {
  --color: var(--color-secondary);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-pass {
  --color: var(--color-pass);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-pass:hover {
  --color: var(--color-pass);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-danger {
  --color: var(--color-danger);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-danger:hover {
  --color: var(--color-danger);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-warning {
  --color: var(--color-warning);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-warning:hover {
  --color: var(--color-warning);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-ac {
  --color: var(--color-ac);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-ac:hover {
  --color: var(--color-ac);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-wa {
  --color: var(--color-wa);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-wa:hover {
  --color: var(--color-wa);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-pta {
  --color: var(--color-pta);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-pta:hover {
  --color: var(--color-pta);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-pds {
  --color: var(--color-pds);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-pds:hover {
  --color: var(--color-pds);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-pat {
  --color: var(--color-pat);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-pat:hover {
  --color: var(--color-pat);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-oms {
  --color: var(--color-oms);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-oms:hover {
  --color: var(--color-oms);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-zoj {
  --color: var(--color-zoj);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-zoj:hover {
  --color: var(--color-zoj);
  --active-brightness: 1;
  color: var(--color);
}
.pc-color-es {
  --color: var(--color-es);
  --active-brightness: 0.85;
  color: var(--color);
}
.pc-active-es:hover {
  --color: var(--color-es);
  --active-brightness: 1;
  color: var(--color);
}
.bd-top-1 {
  border-top: 1px solid var(--border-all);
}
.bd-bottom-1 {
  border-bottom: 1px solid var(--border-all);
}
.bd-left-1 {
  border-left: 1px solid var(--border-all);
}
.bd-right-1 {
  border-right: 1px solid var(--border-all);
}
.bd-1 {
  border: 1px solid var(--border-all);
}
.pc-bg-base {
  background-color: var(--bg-base);
}
.pc-bg-light {
  background-color: var(--bg-light);
}
.pc-bg-normal {
  background-color: var(--bg-normal);
}
.pc-bg-site {
  background-color: var(--bg-site);
}
.pc-bg-primary {
  background-color: var(--color-primary);
}
.pc-bg-secondary {
  background-color: var(--color-secondary);
}
.pc-bg-pass {
  background-color: var(--color-pass);
}
.pc-bg-danger {
  background-color: var(--color-danger);
}
.pc-bg-warning {
  background-color: var(--color-warning);
}
.pc-bg-ac {
  background-color: var(--color-ac);
}
.pc-bg-wa {
  background-color: var(--color-wa);
}
.pc-bg-pta {
  background-color: var(--color-pta);
}
.pc-bg-pds {
  background-color: var(--color-pds);
}
.pc-bg-pat {
  background-color: var(--color-pat);
}
.pc-bg-oms {
  background-color: var(--color-oms);
}
.pc-bg-zoj {
  background-color: var(--color-zoj);
}
.pc-bg-es {
  background-color: var(--color-es);
}
.grow {
  flex-grow: 1;
}
.no-grow {
  flex-grow: 0;
}
.shrink {
  flex-shrink: 1;
}
.no-shrink {
  flex-shrink: 0;
}
.radius-2 {
  border-radius: 0.125rem;
}
.radius-4 {
  border-radius: 0.25rem;
}
.pc-gap-default > :not(:first-child) {
  margin-left: 0.5rem;
}
.pc-gap-0 > :not(:first-child) {
  margin-left: 0rem;
}
.pc-gap-1 > :not(:first-child) {
  margin-left: 0.0625rem;
}
.pc-gap-2 > :not(:first-child) {
  margin-left: 0.125rem;
}
.pc-gap-3 > :not(:first-child) {
  margin-left: 0.1875rem;
}
.pc-gap-4 > :not(:first-child) {
  margin-left: 0.25rem;
}
.pc-gap-5 > :not(:first-child) {
  margin-left: 0.3125rem;
}
.pc-gap-6 > :not(:first-child) {
  margin-left: 0.375rem;
}
.pc-gap-7 > :not(:first-child) {
  margin-left: 0.4375rem;
}
.pc-gap-8 > :not(:first-child) {
  margin-left: 0.5rem;
}
.pc-gap-9 > :not(:first-child) {
  margin-left: 0.5625rem;
}
.pc-gap-10 > :not(:first-child) {
  margin-left: 0.625rem;
}
.pc-gap-11 > :not(:first-child) {
  margin-left: 0.6875rem;
}
.pc-gap-12 > :not(:first-child) {
  margin-left: 0.75rem;
}
.pc-gap-14 > :not(:first-child) {
  margin-left: 0.875rem;
}
.pc-gap-16 > :not(:first-child) {
  margin-left: 1rem;
}
.pc-gap-20 > :not(:first-child) {
  margin-left: 1.25rem;
}
.pc-gap-24 > :not(:first-child) {
  margin-left: 1.5rem;
}
.pc-gap-28 > :not(:first-child) {
  margin-left: 1.75rem;
}
.pc-gap-32 > :not(:first-child) {
  margin-left: 2rem;
}
.pc-gap-36 > :not(:first-child) {
  margin-left: 2.25rem;
}
.pc-gap-40 > :not(:first-child) {
  margin-left: 2.5rem;
}
.pc-gap-44 > :not(:first-child) {
  margin-left: 2.75rem;
}
.pc-gap-48 > :not(:first-child) {
  margin-left: 3rem;
}
.pc-gap-52 > :not(:first-child) {
  margin-left: 3.25rem;
}
.pc-gap-56 > :not(:first-child) {
  margin-left: 3.5rem;
}
.pc-gap-60 > :not(:first-child) {
  margin-left: 3.75rem;
}
.pc-gap-64 > :not(:first-child) {
  margin-left: 4rem;
}
.pc-gap-72 > :not(:first-child) {
  margin-left: 4.5rem;
}
.pc-gap-80 > :not(:first-child) {
  margin-left: 5rem;
}
.pc-gap-96 > :not(:first-child) {
  margin-left: 6rem;
}
.pc-grid {
  display: flex;
  flex: auto;
  flex-wrap: wrap;
}
.pc-grid.inline {
  display: inline-flex;
}
.pc-grid.pc-gap-default {
  margin: -0.5rem;
}
.pc-grid.pc-gap-default > * {
  margin: 0.5rem;
}
.pc-grid.pc-gap-0 {
  margin: 0rem;
}
.pc-grid.pc-gap-0 > * {
  margin: 0rem;
}
.pc-grid.pc-gap-1 {
  margin: -0.0625rem;
}
.pc-grid.pc-gap-1 > * {
  margin: 0.0625rem;
}
.pc-grid.pc-gap-2 {
  margin: -0.125rem;
}
.pc-grid.pc-gap-2 > * {
  margin: 0.125rem;
}
.pc-grid.pc-gap-3 {
  margin: -0.1875rem;
}
.pc-grid.pc-gap-3 > * {
  margin: 0.1875rem;
}
.pc-grid.pc-gap-4 {
  margin: -0.25rem;
}
.pc-grid.pc-gap-4 > * {
  margin: 0.25rem;
}
.pc-grid.pc-gap-5 {
  margin: -0.3125rem;
}
.pc-grid.pc-gap-5 > * {
  margin: 0.3125rem;
}
.pc-grid.pc-gap-6 {
  margin: -0.375rem;
}
.pc-grid.pc-gap-6 > * {
  margin: 0.375rem;
}
.pc-grid.pc-gap-7 {
  margin: -0.4375rem;
}
.pc-grid.pc-gap-7 > * {
  margin: 0.4375rem;
}
.pc-grid.pc-gap-8 {
  margin: -0.5rem;
}
.pc-grid.pc-gap-8 > * {
  margin: 0.5rem;
}
.pc-grid.pc-gap-9 {
  margin: -0.5625rem;
}
.pc-grid.pc-gap-9 > * {
  margin: 0.5625rem;
}
.pc-grid.pc-gap-10 {
  margin: -0.625rem;
}
.pc-grid.pc-gap-10 > * {
  margin: 0.625rem;
}
.pc-grid.pc-gap-11 {
  margin: -0.6875rem;
}
.pc-grid.pc-gap-11 > * {
  margin: 0.6875rem;
}
.pc-grid.pc-gap-12 {
  margin: -0.75rem;
}
.pc-grid.pc-gap-12 > * {
  margin: 0.75rem;
}
.pc-grid.pc-gap-14 {
  margin: -0.875rem;
}
.pc-grid.pc-gap-14 > * {
  margin: 0.875rem;
}
.pc-grid.pc-gap-16 {
  margin: -1rem;
}
.pc-grid.pc-gap-16 > * {
  margin: 1rem;
}
.pc-grid.pc-gap-20 {
  margin: -1.25rem;
}
.pc-grid.pc-gap-20 > * {
  margin: 1.25rem;
}
.pc-grid.pc-gap-24 {
  margin: -1.5rem;
}
.pc-grid.pc-gap-24 > * {
  margin: 1.5rem;
}
.pc-grid.pc-gap-28 {
  margin: -1.75rem;
}
.pc-grid.pc-gap-28 > * {
  margin: 1.75rem;
}
.pc-grid.pc-gap-32 {
  margin: -2rem;
}
.pc-grid.pc-gap-32 > * {
  margin: 2rem;
}
.pc-grid.pc-gap-36 {
  margin: -2.25rem;
}
.pc-grid.pc-gap-36 > * {
  margin: 2.25rem;
}
.pc-grid.pc-gap-40 {
  margin: -2.5rem;
}
.pc-grid.pc-gap-40 > * {
  margin: 2.5rem;
}
.pc-grid.pc-gap-44 {
  margin: -2.75rem;
}
.pc-grid.pc-gap-44 > * {
  margin: 2.75rem;
}
.pc-grid.pc-gap-48 {
  margin: -3rem;
}
.pc-grid.pc-gap-48 > * {
  margin: 3rem;
}
.pc-grid.pc-gap-52 {
  margin: -3.25rem;
}
.pc-grid.pc-gap-52 > * {
  margin: 3.25rem;
}
.pc-grid.pc-gap-56 {
  margin: -3.5rem;
}
.pc-grid.pc-gap-56 > * {
  margin: 3.5rem;
}
.pc-grid.pc-gap-60 {
  margin: -3.75rem;
}
.pc-grid.pc-gap-60 > * {
  margin: 3.75rem;
}
.pc-grid.pc-gap-64 {
  margin: -4rem;
}
.pc-grid.pc-gap-64 > * {
  margin: 4rem;
}
.pc-grid.pc-gap-72 {
  margin: -4.5rem;
}
.pc-grid.pc-gap-72 > * {
  margin: 4.5rem;
}
.pc-grid.pc-gap-80 {
  margin: -5rem;
}
.pc-grid.pc-gap-80 > * {
  margin: 5rem;
}
.pc-grid.pc-gap-96 {
  margin: -6rem;
}
.pc-grid.pc-gap-96 > * {
  margin: 6rem;
}
.flex-reverse {
  flex-direction: row-reverse;
}
.flex-column {
  flex-direction: column;
}
.flex-column.pc-gap-default > :not(:first-child) {
  margin-left: 0;
  margin-top: 1rem;
}
.flex-column.pc-gap-0 > :not(:first-child) {
  margin-top: 0rem;
  margin-left: 0;
}
.flex-column.pc-gap-1 > :not(:first-child) {
  margin-top: 0.0625rem;
  margin-left: 0;
}
.flex-column.pc-gap-2 > :not(:first-child) {
  margin-top: 0.125rem;
  margin-left: 0;
}
.flex-column.pc-gap-3 > :not(:first-child) {
  margin-top: 0.1875rem;
  margin-left: 0;
}
.flex-column.pc-gap-4 > :not(:first-child) {
  margin-top: 0.25rem;
  margin-left: 0;
}
.flex-column.pc-gap-5 > :not(:first-child) {
  margin-top: 0.3125rem;
  margin-left: 0;
}
.flex-column.pc-gap-6 > :not(:first-child) {
  margin-top: 0.375rem;
  margin-left: 0;
}
.flex-column.pc-gap-7 > :not(:first-child) {
  margin-top: 0.4375rem;
  margin-left: 0;
}
.flex-column.pc-gap-8 > :not(:first-child) {
  margin-top: 0.5rem;
  margin-left: 0;
}
.flex-column.pc-gap-9 > :not(:first-child) {
  margin-top: 0.5625rem;
  margin-left: 0;
}
.flex-column.pc-gap-10 > :not(:first-child) {
  margin-top: 0.625rem;
  margin-left: 0;
}
.flex-column.pc-gap-11 > :not(:first-child) {
  margin-top: 0.6875rem;
  margin-left: 0;
}
.flex-column.pc-gap-12 > :not(:first-child) {
  margin-top: 0.75rem;
  margin-left: 0;
}
.flex-column.pc-gap-14 > :not(:first-child) {
  margin-top: 0.875rem;
  margin-left: 0;
}
.flex-column.pc-gap-16 > :not(:first-child) {
  margin-top: 1rem;
  margin-left: 0;
}
.flex-column.pc-gap-20 > :not(:first-child) {
  margin-top: 1.25rem;
  margin-left: 0;
}
.flex-column.pc-gap-24 > :not(:first-child) {
  margin-top: 1.5rem;
  margin-left: 0;
}
.flex-column.pc-gap-28 > :not(:first-child) {
  margin-top: 1.75rem;
  margin-left: 0;
}
.flex-column.pc-gap-32 > :not(:first-child) {
  margin-top: 2rem;
  margin-left: 0;
}
.flex-column.pc-gap-36 > :not(:first-child) {
  margin-top: 2.25rem;
  margin-left: 0;
}
.flex-column.pc-gap-40 > :not(:first-child) {
  margin-top: 2.5rem;
  margin-left: 0;
}
.flex-column.pc-gap-44 > :not(:first-child) {
  margin-top: 2.75rem;
  margin-left: 0;
}
.flex-column.pc-gap-48 > :not(:first-child) {
  margin-top: 3rem;
  margin-left: 0;
}
.flex-column.pc-gap-52 > :not(:first-child) {
  margin-top: 3.25rem;
  margin-left: 0;
}
.flex-column.pc-gap-56 > :not(:first-child) {
  margin-top: 3.5rem;
  margin-left: 0;
}
.flex-column.pc-gap-60 > :not(:first-child) {
  margin-top: 3.75rem;
  margin-left: 0;
}
.flex-column.pc-gap-64 > :not(:first-child) {
  margin-top: 4rem;
  margin-left: 0;
}
.flex-column.pc-gap-72 > :not(:first-child) {
  margin-top: 4.5rem;
  margin-left: 0;
}
.flex-column.pc-gap-80 > :not(:first-child) {
  margin-top: 5rem;
  margin-left: 0;
}
.flex-column.pc-gap-96 > :not(:first-child) {
  margin-top: 6rem;
  margin-left: 0;
}
.flex-column.flex-reverse {
  flex-direction: column-reverse;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
.ellipsis-m {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.pc-trs-fast {
  transition-duration: var(--transition-fast);
}
.pc-trs-normal {
  transition-duration: var(--transition-normal);
}
.pc-trs-slow {
  transition-duration: var(--transition-slow);
}
.scroll {
  overflow: auto;
  scroll-behavior: smooth;
  --scroll-bar: transparent;
}
@supports not selector(::-webkit-scrollbar) {
  .scroll {
    scrollbar-width: thin;
    scrollbar-color: var(--scroll-thumb) var(--scroll-bar);
  }
}
.scroll::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}
.scroll::-webkit-scrollbar-track {
  background-color: var(--scroll-bar);
}
.scroll::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: var(--scroll-thumb);
}
.scrollbar-hidden {
  scrollbar-width: none;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
@supports (anchor-name: none) {
  :where(.anchor-list) {
    contain: paint;
  }
  :where(.anchor-list):before,
  :where(.anchor-list) > [data-is-marker] {
    --tw-content: '';
    content: '';
    position: absolute;
    position-anchor: var(--uniq-anchor-name, --nav);
    top: anchor(top);
    left: anchor(left);
    width: anchor-size(width);
    height: anchor-size(height);
  }
  @media not (prefers-reduced-motion: reduce) {
    :where(.anchor-list):before,
    :where(.anchor-list) > [data-is-marker] {
      transition: 0.2s;
    }
  }
  :where(.anchor-list) :where(a,[data-is-anchor]) {
    position: relative;
  }
  :where(.anchor-list) :where(a,[data-is-anchor]):before,
  :where(.anchor-list) :where(a,[data-is-anchor]) > [data-is-marker] {
    --tw-content: '';
    content: '';
    position: absolute;
    inset: 0;
  }
  :where(.anchor-list) :where(a,[data-is-anchor]):hover,
  :where(.anchor-list) :where(a,[data-is-anchor]).active-anchor {
    anchor-name: var(--uniq-anchor-name, --nav);
  }
  :where(.anchor-list):has(:where(a,[data-is-anchor]):hover) > :where(a,[data-is-anchor]).active-anchor:not(:hover) {
    anchor-name: none;
  }
}
.pc-shadow {
  box-shadow: 0 0.125rem 0.625rem 0.125rem var(--bg-normal);
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.rendered-markdown {
  color: var(--tw-prose-body);
  max-width: 65ch;
}
.rendered-markdown :where(p):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.rendered-markdown :where([class~="lead"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-lead);
  font-size: 1.25em;
  line-height: 1.6;
  margin-top: 1.2em;
  margin-bottom: 1.2em;
}
.rendered-markdown :where(a):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-links);
  text-decoration: underline;
  font-weight: 500;
}
.rendered-markdown :where(strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-bold);
  font-weight: 600;
}
.rendered-markdown :where(a strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(blockquote strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(thead th strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(ol):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: decimal;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.rendered-markdown :where(ol[type="A"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: upper-alpha;
}
.rendered-markdown :where(ol[type="a"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: lower-alpha;
}
.rendered-markdown :where(ol[type="A" s]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: upper-alpha;
}
.rendered-markdown :where(ol[type="a" s]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: lower-alpha;
}
.rendered-markdown :where(ol[type="I"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: upper-roman;
}
.rendered-markdown :where(ol[type="i"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: lower-roman;
}
.rendered-markdown :where(ol[type="I" s]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: upper-roman;
}
.rendered-markdown :where(ol[type="i" s]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: lower-roman;
}
.rendered-markdown :where(ol[type="1"]):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: decimal;
}
.rendered-markdown :where(ul):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  list-style-type: disc;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-inline-start: 1.625em;
}
.rendered-markdown :where(ol > li):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::marker {
  font-weight: 400;
  color: var(--tw-prose-counters);
}
.rendered-markdown :where(ul > li):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::marker {
  color: var(--tw-prose-bullets);
}
.rendered-markdown :where(dt):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.25em;
}
.rendered-markdown :where(hr):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  border-color: var(--tw-prose-hr);
  border-top-width: 1px;
  margin-top: 3em;
  margin-bottom: 3em;
}
.rendered-markdown :where(blockquote):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 500;
  font-style: italic;
  color: var(--tw-prose-quotes);
  border-inline-start-width: 0.25rem;
  border-inline-start-color: var(--tw-prose-quote-borders);
  quotes: "\\201C""\\201D""\\2018""\\2019";
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  padding-inline-start: 1em;
}
.rendered-markdown :where(blockquote p:first-of-type):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::before {
  content: open-quote;
}
.rendered-markdown :where(blockquote p:last-of-type):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::after {
  content: close-quote;
}
.rendered-markdown :where(h1):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: 0.8888889em;
  line-height: 1.1111111;
}
.rendered-markdown :where(h1 strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 900;
  color: inherit;
}
.rendered-markdown :where(h2):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
}
.rendered-markdown :where(h2 strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 800;
  color: inherit;
}
.rendered-markdown :where(h3):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
.rendered-markdown :where(h3 strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 700;
  color: inherit;
}
.rendered-markdown :where(h4):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  line-height: 1.5;
}
.rendered-markdown :where(h4 strong):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 700;
  color: inherit;
}
.rendered-markdown :where(img):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.rendered-markdown :where(picture):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  display: block;
  margin-top: 2em;
  margin-bottom: 2em;
}
.rendered-markdown :where(video):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.rendered-markdown :where(kbd):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  font-weight: 500;
  font-family: inherit;
  color: var(--tw-prose-kbd);
  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%);
  font-size: 0.875em;
  border-radius: 0.3125rem;
  padding-top: 0.1875em;
  padding-inline-end: 0.375em;
  padding-bottom: 0.1875em;
  padding-inline-start: 0.375em;
}
.rendered-markdown :where(code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-code);
  font-weight: 600;
  font-size: 0.875em;
}
.rendered-markdown :where(code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::before {
  content: "\`";
}
.rendered-markdown :where(code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::after {
  content: "\`";
}
.rendered-markdown :where(a code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(h1 code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(h2 code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
  font-size: 0.875em;
}
.rendered-markdown :where(h3 code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
  font-size: 0.9em;
}
.rendered-markdown :where(h4 code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(blockquote code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(thead th code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: inherit;
}
.rendered-markdown :where(pre):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-pre-code);
  background-color: var(--tw-prose-pre-bg);
  overflow-x: auto;
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.7142857;
  margin-top: 1.7142857em;
  margin-bottom: 1.7142857em;
  border-radius: 0.375rem;
  padding-top: 0.8571429em;
  padding-inline-end: 1.1428571em;
  padding-bottom: 0.8571429em;
  padding-inline-start: 1.1428571em;
}
.rendered-markdown :where(pre code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  background-color: transparent;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.rendered-markdown :where(pre code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::before {
  content: none;
}
.rendered-markdown :where(pre code):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *))::after {
  content: none;
}
.rendered-markdown :where(table):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  width: 100%;
  table-layout: auto;
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 0.875em;
  line-height: 1.7142857;
}
.rendered-markdown :where(thead):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-th-borders);
}
.rendered-markdown :where(thead th):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  vertical-align: bottom;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.rendered-markdown :where(tbody tr):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  border-bottom-width: 1px;
  border-bottom-color: var(--tw-prose-td-borders);
}
.rendered-markdown :where(tbody tr:last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  border-bottom-width: 0;
}
.rendered-markdown :where(tbody td):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  vertical-align: baseline;
}
.rendered-markdown :where(tfoot):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  border-top-width: 1px;
  border-top-color: var(--tw-prose-th-borders);
}
.rendered-markdown :where(tfoot td):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  vertical-align: top;
}
.rendered-markdown :where(th, td):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  text-align: start;
}
.rendered-markdown :where(figure > *):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.rendered-markdown :where(figcaption):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  color: var(--tw-prose-captions);
  font-size: 0.875em;
  line-height: 1.4285714;
  margin-top: 0.8571429em;
}
.rendered-markdown {
  --tw-prose-body: #374151;
  --tw-prose-headings: #111827;
  --tw-prose-lead: #4b5563;
  --tw-prose-links: #111827;
  --tw-prose-bold: #111827;
  --tw-prose-counters: #6b7280;
  --tw-prose-bullets: #d1d5db;
  --tw-prose-hr: #e5e7eb;
  --tw-prose-quotes: #111827;
  --tw-prose-quote-borders: #e5e7eb;
  --tw-prose-captions: #6b7280;
  --tw-prose-kbd: #111827;
  --tw-prose-kbd-shadows: 17 24 39;
  --tw-prose-code: #111827;
  --tw-prose-pre-code: #e5e7eb;
  --tw-prose-pre-bg: #1f2937;
  --tw-prose-th-borders: #d1d5db;
  --tw-prose-td-borders: #e5e7eb;
  --tw-prose-invert-body: #d1d5db;
  --tw-prose-invert-headings: #fff;
  --tw-prose-invert-lead: #9ca3af;
  --tw-prose-invert-links: #fff;
  --tw-prose-invert-bold: #fff;
  --tw-prose-invert-counters: #9ca3af;
  --tw-prose-invert-bullets: #4b5563;
  --tw-prose-invert-hr: #374151;
  --tw-prose-invert-quotes: #f3f4f6;
  --tw-prose-invert-quote-borders: #374151;
  --tw-prose-invert-captions: #9ca3af;
  --tw-prose-invert-kbd: #fff;
  --tw-prose-invert-kbd-shadows: 255 255 255;
  --tw-prose-invert-code: #fff;
  --tw-prose-invert-pre-code: #d1d5db;
  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);
  --tw-prose-invert-th-borders: #4b5563;
  --tw-prose-invert-td-borders: #374151;
  font-size: 1rem;
  line-height: 1.75;
}
.rendered-markdown :where(picture > img):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
.rendered-markdown :where(li):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.rendered-markdown :where(ol > li):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-start: 0.375em;
}
.rendered-markdown :where(ul > li):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-start: 0.375em;
}
.rendered-markdown :where(.rendered-markdown > ul > li p):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.rendered-markdown :where(.rendered-markdown > ul > li > p:first-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 1.25em;
}
.rendered-markdown :where(.rendered-markdown > ul > li > p:last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-bottom: 1.25em;
}
.rendered-markdown :where(.rendered-markdown > ol > li > p:first-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 1.25em;
}
.rendered-markdown :where(.rendered-markdown > ol > li > p:last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-bottom: 1.25em;
}
.rendered-markdown :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}
.rendered-markdown :where(dl):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
.rendered-markdown :where(dd):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0.5em;
  padding-inline-start: 1.625em;
}
.rendered-markdown :where(hr + *):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
}
.rendered-markdown :where(h2 + *):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
}
.rendered-markdown :where(h3 + *):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
}
.rendered-markdown :where(h4 + *):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
}
.rendered-markdown :where(thead th:first-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-start: 0;
}
.rendered-markdown :where(thead th:last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-end: 0;
}
.rendered-markdown :where(tbody td, tfoot td):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-top: 0.5714286em;
  padding-inline-end: 0.5714286em;
  padding-bottom: 0.5714286em;
  padding-inline-start: 0.5714286em;
}
.rendered-markdown :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-start: 0;
}
.rendered-markdown :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  padding-inline-end: 0;
}
.rendered-markdown :where(figure):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}
.rendered-markdown :where(.rendered-markdown > :first-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-top: 0;
}
.rendered-markdown :where(.rendered-markdown > :last-child):not(:where([class~="not-rendered-markdown"],[class~="not-rendered-markdown"] *)) {
  margin-bottom: 0;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.\\!visible {
  visibility: visible !important;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.\\!fixed {
  position: fixed !important;
}
.fixed {
  position: fixed;
}
.\\!absolute {
  position: absolute !important;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-bottom-1 {
  bottom: -0.25rem;
}
.-bottom-5 {
  bottom: -1.25rem;
}
.-bottom-px {
  bottom: -1px;
}
.-left-4 {
  left: -1rem;
}
.-left-6 {
  left: -1.5rem;
}
.-right-1 {
  right: -0.25rem;
}
.-right-2 {
  right: -0.5rem;
}
.-right-4 {
  right: -1rem;
}
.-top-1 {
  top: -0.25rem;
}
.-top-2 {
  top: -0.5rem;
}
.-top-\\[2px\\] {
  top: -2px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-16 {
  bottom: 4rem;
}
.bottom-2 {
  bottom: 0.5rem;
}
.bottom-32 {
  bottom: 8rem;
}
.bottom-4 {
  bottom: 1rem;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-1\\.5 {
  left: 0.375rem;
}
.left-1\\/2 {
  left: 50%;
}
.left-10 {
  left: 2.5rem;
}
.left-2 {
  left: 0.5rem;
}
.left-8 {
  left: 2rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-1 {
  right: 0.25rem;
}
.right-10 {
  right: 2.5rem;
}
.right-2 {
  right: 0.5rem;
}
.right-3 {
  right: 0.75rem;
}
.right-4 {
  right: 1rem;
}
.right-8 {
  right: 2rem;
}
.right-px {
  right: 1px;
}
.top-0 {
  top: 0px;
}
.top-1 {
  top: 0.25rem;
}
.top-1\\.5 {
  top: 0.375rem;
}
.top-1\\/2 {
  top: 50%;
}
.top-3 {
  top: 0.75rem;
}
.top-3\\.5 {
  top: 0.875rem;
}
.top-4 {
  top: 1rem;
}
.top-5 {
  top: 1.25rem;
}
.top-\\[20px\\] {
  top: 20px;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.top-full {
  top: 100%;
}
.top-px {
  top: 1px;
}
.z-0 {
  z-index: 0;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-40 {
  z-index: 40;
}
.z-50 {
  z-index: 50;
}
.z-\\[999\\] {
  z-index: 999;
}
.col-span-full {
  grid-column: 1 / -1;
}
.col-start-1 {
  grid-column-start: 1;
}
.col-start-2 {
  grid-column-start: 2;
}
.col-end-2 {
  grid-column-end: 2;
}
.col-end-3 {
  grid-column-end: 3;
}
.row-start-1 {
  grid-row-start: 1;
}
.row-start-2 {
  grid-row-start: 2;
}
.row-end-2 {
  grid-row-end: 2;
}
.row-end-3 {
  grid-row-end: 3;
}
.float-right {
  float: right;
}
.\\!m-0 {
  margin: 0px !important;
}
.-m-0 {
  margin: -0px;
}
.-m-0\\.5 {
  margin: -0.125rem;
}
.-m-2 {
  margin: -0.5rem;
}
.-m-px {
  margin: -1px;
}
.m-0 {
  margin: 0px;
}
.m-2 {
  margin: 0.5rem;
}
.m-3 {
  margin: 0.75rem;
}
.m-4 {
  margin: 1rem;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.-mx-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}
.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}
.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}
.mx-0\\.5 {
  margin-left: 0.125rem;
  margin-right: 0.125rem;
}
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.mx-3\\.5 {
  margin-left: 0.875rem;
  margin-right: 0.875rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-2\\.5 {
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.\\!mt-1 {
  margin-top: 0.25rem !important;
}
.-mb-2 {
  margin-bottom: -0.5rem;
}
.-mb-6 {
  margin-bottom: -1.5rem;
}
.-ml-px {
  margin-left: -1px;
}
.-mr-px {
  margin-right: -1px;
}
.-mt-0 {
  margin-top: -0px;
}
.-mt-0\\.5 {
  margin-top: -0.125rem;
}
.-mt-6 {
  margin-top: -1.5rem;
}
.-mt-\\[0\\.125rem\\] {
  margin-top: -0.125rem;
}
.-mt-px {
  margin-top: -1px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.ml-\\[5px\\] {
  margin-left: 5px;
}
.ml-auto {
  margin-left: auto;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mr-1\\.5 {
  margin-right: 0.375rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-4 {
  margin-right: 1rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-auto {
  margin-top: auto;
}
.box-content {
  box-sizing: content-box;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.size-4 {
  width: 1rem;
  height: 1rem;
}
.h-1 {
  height: 0.25rem;
}
.h-1\\.5 {
  height: 0.375rem;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-12 {
  height: 3rem;
}
.h-14 {
  height: 3.5rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-2\\.5 {
  height: 0.625rem;
}
.h-20 {
  height: 5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-32 {
  height: 8rem;
}
.h-4 {
  height: 1rem;
}
.h-40 {
  height: 10rem;
}
.h-48 {
  height: 12rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-80 {
  height: 20rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\\[0\\.1875rem\\] {
  height: 0.1875rem;
}
.h-\\[1\\.875rem\\] {
  height: 1.875rem;
}
.h-\\[1080px\\] {
  height: 1080px;
}
.h-\\[15rem\\] {
  height: 15rem;
}
.h-\\[1px\\] {
  height: 1px;
}
.h-\\[3\\.5rem\\] {
  height: 3.5rem;
}
.h-\\[30rem\\] {
  height: 30rem;
}
.h-\\[400px\\] {
  height: 400px;
}
.h-\\[840px\\] {
  height: 840px;
}
.h-\\[calc\\(100\\%-2rem\\)\\] {
  height: calc(100% - 2rem);
}
.h-\\[calc\\(100\\%-3\\.5rem\\)\\] {
  height: calc(100% - 3.5rem);
}
.h-\\[calc\\(100\\%-56px\\)\\] {
  height: calc(100% - 56px);
}
.h-\\[calc\\(var\\(--height-full\\)-10rem\\)\\] {
  height: calc(var(--height-full) - 10rem);
}
.h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.h-auto {
  height: auto;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.h-screen {
  height: 100vh;
}
.h-svh {
  height: 100svh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-32 {
  max-height: 8rem;
}
.max-h-40 {
  max-height: 10rem;
}
.max-h-60 {
  max-height: 15rem;
}
.max-h-80 {
  max-height: 20rem;
}
.max-h-\\[--radix-select-content-available-height\\] {
  max-height: var(--radix-select-content-available-height);
}
.max-h-\\[1000px\\] {
  max-height: 1000px;
}
.max-h-\\[15rem\\] {
  max-height: 15rem;
}
.max-h-\\[30rem\\] {
  max-height: 30rem;
}
.max-h-\\[calc\\(var\\(--height-full\\)-10rem\\)\\] {
  max-height: calc(var(--height-full) - 10rem);
}
.max-h-\\[calc\\(var\\(--height-full\\)-14\\.5rem\\)\\] {
  max-height: calc(var(--height-full) - 14.5rem);
}
.max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\] {
  max-height: var(--radix-dropdown-menu-content-available-height);
}
.max-h-full {
  max-height: 100%;
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-0 {
  min-height: 0px;
}
.min-h-36 {
  min-height: 9rem;
}
.min-h-\\[20rem\\] {
  min-height: 20rem;
}
.min-h-\\[2rem\\] {
  min-height: 2rem;
}
.min-h-\\[30rem\\] {
  min-height: 30rem;
}
.min-h-\\[80px\\] {
  min-height: 80px;
}
.min-h-\\[unset\\] {
  min-height: unset;
}
.min-h-svh {
  min-height: 100svh;
}
.\\!w-full {
  width: 100% !important;
}
.w-0 {
  width: 0px;
}
.w-1 {
  width: 0.25rem;
}
.w-1\\.5 {
  width: 0.375rem;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-1\\/4 {
  width: 25%;
}
.w-1\\/5 {
  width: 20%;
}
.w-1\\/6 {
  width: 16.666667%;
}
.w-10 {
  width: 2.5rem;
}
.w-11 {
  width: 2.75rem;
}
.w-12 {
  width: 3rem;
}
.w-16 {
  width: 4rem;
}
.w-2 {
  width: 0.5rem;
}
.w-2\\.5 {
  width: 0.625rem;
}
.w-2\\/5 {
  width: 40%;
}
.w-20 {
  width: 5rem;
}
.w-24 {
  width: 6rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-3\\/5 {
  width: 60%;
}
.w-4 {
  width: 1rem;
}
.w-40 {
  width: 10rem;
}
.w-44 {
  width: 11rem;
}
.w-48 {
  width: 12rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-64 {
  width: 16rem;
}
.w-7 {
  width: 1.75rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
}
.w-80 {
  width: 20rem;
}
.w-9 {
  width: 2.25rem;
}
.w-\\[--sidebar-width\\] {
  width: var(--sidebar-width);
}
.w-\\[0\\.625rem\\] {
  width: 0.625rem;
}
.w-\\[10\\%\\] {
  width: 10%;
}
.w-\\[100\\%\\] {
  width: 100%;
}
.w-\\[12\\.5rem\\] {
  width: 12.5rem;
}
.w-\\[15\\%\\] {
  width: 15%;
}
.w-\\[15rem\\] {
  width: 15rem;
}
.w-\\[1920px\\] {
  width: 1920px;
}
.w-\\[1px\\] {
  width: 1px;
}
.w-\\[2\\.625rem\\] {
  width: 2.625rem;
}
.w-\\[20\\%\\] {
  width: 20%;
}
.w-\\[25\\%\\] {
  width: 25%;
}
.w-\\[25rem\\] {
  width: 25rem;
}
.w-\\[3\\.2rem\\] {
  width: 3.2rem;
}
.w-\\[30\\%\\] {
  width: 30%;
}
.w-\\[322px\\] {
  width: 322px;
}
.w-\\[4\\.1rem\\] {
  width: 4.1rem;
}
.w-\\[4\\.5rem\\] {
  width: 4.5rem;
}
.w-\\[400px\\] {
  width: 400px;
}
.w-\\[5\\%\\] {
  width: 5%;
}
.w-\\[6\\.25rem\\] {
  width: 6.25rem;
}
.w-\\[7\\.5rem\\] {
  width: 7.5rem;
}
.w-\\[75rem\\] {
  width: 75rem;
}
.w-\\[80\\%\\] {
  width: 80%;
}
.w-\\[840px\\] {
  width: 840px;
}
.w-\\[fit-content\\] {
  width: fit-content;
}
.w-auto {
  width: auto;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-16 {
  min-width: 4rem;
}
.min-w-32 {
  min-width: 8rem;
}
.min-w-40 {
  min-width: 10rem;
}
.min-w-5 {
  min-width: 1.25rem;
}
.min-w-8 {
  min-width: 2rem;
}
.min-w-\\[20ch\\] {
  min-width: 20ch;
}
.min-w-\\[3em\\] {
  min-width: 3em;
}
.min-w-\\[3rem\\] {
  min-width: 3rem;
}
.min-w-\\[4rem\\] {
  min-width: 4rem;
}
.min-w-\\[7\\.5rem\\] {
  min-width: 7.5rem;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.\\!max-w-none {
  max-width: none !important;
}
.max-w-3xl {
  max-width: 48rem;
}
.max-w-4xl {
  max-width: 56rem;
}
.max-w-56 {
  max-width: 14rem;
}
.max-w-5xl {
  max-width: 64rem;
}
.max-w-7xl {
  max-width: 80rem;
}
.max-w-\\[--skeleton-width\\] {
  max-width: var(--skeleton-width);
}
.max-w-\\[20rem\\] {
  max-width: 20rem;
}
.max-w-\\[40rem\\] {
  max-width: 40rem;
}
.max-w-\\[600px\\] {
  max-width: 600px;
}
.max-w-\\[75rem\\] {
  max-width: 75rem;
}
.max-w-\\[90vw\\] {
  max-width: 90vw;
}
.max-w-full {
  max-width: 100%;
}
.max-w-lg {
  max-width: 32rem;
}
.max-w-md {
  max-width: 28rem;
}
.max-w-none {
  max-width: none;
}
.max-w-xl {
  max-width: 36rem;
}
.max-w-xs {
  max-width: 20rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-auto {
  flex: 1 1 auto;
}
.flex-none {
  flex: none;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink {
  flex-shrink: 1;
}
.shrink-0 {
  flex-shrink: 0;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.table-fixed {
  table-layout: fixed;
}
.caption-bottom {
  caption-side: bottom;
}
.origin-\\[--radix-dropdown-menu-content-transform-origin\\] {
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}
.origin-\\[--radix-popover-content-transform-origin\\] {
  transform-origin: var(--radix-popover-content-transform-origin);
}
.origin-\\[--radix-select-content-transform-origin\\] {
  transform-origin: var(--radix-select-content-transform-origin);
}
.origin-\\[--radix-tooltip-content-transform-origin\\] {
  transform-origin: var(--radix-tooltip-content-transform-origin);
}
.origin-top-left {
  transform-origin: top left;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-x-px {
  --tw-translate-x: -1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-full {
  --tw-translate-y: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-px {
  --tw-translate-x: 1px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-2\\] {
  --tw-translate-y: -2;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\\[var\\(--scale\\2c 1\\)\\] {
  --tw-scale-x: var(--scale,1);
  --tw-scale-y: var(--scale,1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes ping {

  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.\\!cursor-not-allowed {
  cursor: not-allowed !important;
}
.cursor-default {
  cursor: default;
}
.cursor-move {
  cursor: move;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-zoom-in {
  cursor: zoom-in;
}
.touch-none {
  touch-action: none;
}
.select-none {
  user-select: none;
}
.select-all {
  user-select: all;
}
.resize {
  resize: both;
}
.scroll-mt-0 {
  scroll-margin-top: 0px;
}
.appearance-none {
  appearance: none;
}
.grid-flow-col {
  grid-auto-flow: column;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-\\[4rem\\2c minmax\\(0\\2c 1fr\\)\\] {
  grid-template-columns: 4rem minmax(0,1fr);
}
.grid-cols-\\[505px\\2c 330px\\2c 330px\\2c 505px\\] {
  grid-template-columns: 505px 330px 330px 505px;
}
.grid-cols-\\[max-content\\2c 1fr\\] {
  grid-template-columns: max-content 1fr;
}
.grid-cols-\\[minmax\\(4rem\\2c auto\\)\\2c 1fr\\] {
  grid-template-columns: minmax(4rem,auto) 1fr;
}
.grid-rows-\\[285px\\2c 285px\\2c 305px\\] {
  grid-template-rows: 285px 285px 305px;
}
.grid-rows-\\[auto\\2c minmax\\(0\\2c 1fr\\)\\] {
  grid-template-rows: auto minmax(0,1fr);
}
.grid-rows-\\[repeat\\(2\\2c 7\\.75rem\\)\\] {
  grid-template-rows: repeat(2,7.75rem);
}
.grid-rows-\\[repeat\\(3\\2c 4\\.375rem\\)\\] {
  grid-template-rows: repeat(3,4.375rem);
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.place-content-center {
  place-content: center;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-baseline {
  align-items: baseline;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.gap-0 {
  gap: 0px;
}
.gap-0\\.5 {
  gap: 0.125rem;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-9 {
  gap: 2.25rem;
}
.gap-x-1 {
  column-gap: 0.25rem;
}
.gap-x-1\\.5 {
  column-gap: 0.375rem;
}
.gap-x-2 {
  column-gap: 0.5rem;
}
.gap-x-4 {
  column-gap: 1rem;
}
.gap-x-5 {
  column-gap: 1.25rem;
}
.gap-x-\\[50px\\] {
  column-gap: 50px;
}
.gap-y-1 {
  row-gap: 0.25rem;
}
.gap-y-2 {
  row-gap: 0.5rem;
}
.gap-y-3 {
  row-gap: 0.75rem;
}
.gap-y-4 {
  row-gap: 1rem;
}
.gap-y-\\[30px\\] {
  row-gap: 30px;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}
.self-start {
  align-self: flex-start;
}
.self-center {
  align-self: center;
}
.justify-self-end {
  justify-self: end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-visible {
  overflow: visible;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.scroll-auto {
  scroll-behavior: auto;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-ellipsis {
  text-overflow: ellipsis;
}
.hyphens-auto {
  hyphens: auto;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.\\!whitespace-pre {
  white-space: pre !important;
}
.whitespace-pre {
  white-space: pre;
}
.whitespace-pre-line {
  white-space: pre-line;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.text-balance {
  text-wrap: balance;
}
.text-pretty {
  text-wrap: pretty;
}
.break-normal {
  overflow-wrap: normal;
  word-break: normal;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-\\[inherit\\] {
  border-radius: inherit;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-none {
  border-radius: 0px;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.rounded-l-sm {
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
.rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.rounded-r-sm {
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}
.rounded-bl-sm {
  border-bottom-left-radius: 0.125rem;
}
.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}
.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}
.rounded-tr-sm {
  border-top-right-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-2 {
  border-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-b-0 {
  border-bottom-width: 0px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-r {
  border-right-width: 1px;
}
.border-r-2 {
  border-right-width: 2px;
}
.border-t {
  border-top-width: 1px;
}
.border-t-0 {
  border-top-width: 0px;
}
.border-solid {
  border-style: solid;
}
.border-dashed {
  border-style: dashed;
}
.border-hidden {
  border-style: hidden;
}
.border-none {
  border-style: none;
}
.\\!border-danger {
  border-color: var(--color-danger) !important;
}
.border-\\[\\#3a3a3a\\] {
  --tw-border-opacity: 1;
  border-color: rgb(58 58 58 / var(--tw-border-opacity));
}
.border-\\[\\#ced4da\\] {
  --tw-border-opacity: 1;
  border-color: rgb(206 212 218 / var(--tw-border-opacity));
}
.border-\\[\\#d946ef\\] {
  --tw-border-opacity: 1;
  border-color: rgb(217 70 239 / var(--tw-border-opacity));
}
.border-bg-base {
  border-color: var(--bg-base);
}
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(191 219 254 / var(--tw-border-opacity));
}
.border-border {
  border-color: var(--border-all);
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(167 243 208 / var(--tw-border-opacity));
}
.border-input {
  border-color: var(--bg-light);
}
.border-lightest {
  border-color: var(--text-lightest);
}
.border-primary {
  border-color: var(--color-primary);
}
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity));
}
.border-sidebar-border {
  border-color: var(--border-all);
}
.border-slate-100 {
  --tw-border-opacity: 1;
  border-color: rgb(241 245 249 / var(--tw-border-opacity));
}
.border-slate-200 {
  --tw-border-opacity: 1;
  border-color: rgb(226 232 240 / var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.border-white\\/10 {
  border-color: rgb(255 255 255 / 0.1);
}
.border-white\\/20 {
  border-color: rgb(255 255 255 / 0.2);
}
.border-l-transparent {
  border-left-color: transparent;
}
.border-t-transparent {
  border-top-color: transparent;
}
.\\!bg-\\[\\#eee\\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity)) !important;
}
.\\!bg-bg-light {
  background-color: var(--bg-light) !important;
}
.bg-\\[\\#072965\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(7 41 101 / var(--tw-bg-opacity));
}
.bg-\\[\\#2a2a2a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 42 42 / var(--tw-bg-opacity));
}
.bg-\\[color-mix\\(in_oklch\\2c var\\(--color-primary\\)\\2c transparent_95\\%\\)\\] {
  background-color: color-mix(in oklch,var(--color-primary),transparent 95%);
}
.bg-\\[rgba\\(255\\2c 255\\2c 255\\2c 0\\.1\\)\\] {
  background-color: rgba(255,255,255,0.1);
}
.bg-accent {
  background-color: var(--bg-base);
}
.bg-background {
  background-color: var(--bg-base);
}
.bg-bg-base {
  background-color: var(--bg-base);
}
.bg-bg-light {
  background-color: var(--bg-light);
}
.bg-bg-normal {
  background-color: var(--bg-normal);
}
.bg-bg-site {
  background-color: var(--bg-site);
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}
.bg-black\\/20 {
  background-color: rgb(0 0 0 / 0.2);
}
.bg-black\\/60 {
  background-color: rgb(0 0 0 / 0.6);
}
.bg-black\\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-blue-500\\/10 {
  background-color: rgb(59 130 246 / 0.1);
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
.bg-border {
  background-color: var(--border-all);
}
.bg-card {
  background-color: var(--bg-base);
}
.bg-danger {
  background-color: var(--color-danger);
}
.bg-darkest {
  background-color: var(--text-darkest);
}
.bg-destructive {
  background-color: var(--bg-base);
}
.bg-destructive-foreground {
  background-color: var(--color-danger);
}
.bg-es {
  background-color: var(--color-es);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 250 229 / var(--tw-bg-opacity));
}
.bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(167 243 208 / var(--tw-bg-opacity));
}
.bg-green-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 253 245 / var(--tw-bg-opacity));
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(16 185 129 / var(--tw-bg-opacity));
}
.bg-inherit {
  background-color: inherit;
}
.bg-light {
  background-color: var(--text-light);
}
.bg-muted {
  background-color: var(--bg-site);
}
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
}
.bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 215 170 / var(--tw-bg-opacity));
}
.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
}
.bg-pass {
  background-color: var(--color-pass);
}
.bg-popover {
  background-color: var(--bg-base);
}
.bg-primary {
  background-color: var(--color-primary);
}
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}
.bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 202 202 / var(--tw-bg-opacity));
}
.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}
.bg-secondary {
  background-color: var(--color-secondary);
}
.bg-sidebar {
  background-color: var(--bg-light);
}
.bg-sidebar-border {
  background-color: var(--border-all);
}
.bg-sky-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(2 132 199 / var(--tw-bg-opacity));
}
.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}
.bg-slate-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}
.bg-slate-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}
.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}
.bg-transparent {
  background-color: transparent;
}
.bg-warning {
  background-color: var(--color-warning);
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.bg-white\\/10 {
  background-color: rgb(255 255 255 / 0.1);
}
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}
.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}
.bg-opacity-10 {
  --tw-bg-opacity: 0.1;
}
.bg-opacity-20 {
  --tw-bg-opacity: 0.2;
}
.bg-\\[linear-gradient\\(to_right\\2c transparent\\2c var\\(--bg-light\\)_1\\.5rem\\)\\] {
  background-image: linear-gradient(to right,transparent,var(--bg-light) 1.5rem);
}
.bg-\\[linear-gradient\\(to_top\\2c var\\(--bg-base\\)_1rem\\2c transparent_70\\%\\)\\] {
  background-image: linear-gradient(to top,var(--bg-base) 1rem,transparent 70%);
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from {
  --tw-gradient-from: var(--text-normal) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-bg-base {
  --tw-gradient-from: var(--bg-base) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-blue-400 {
  --tw-gradient-from: #60a5fa var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(96 165 250 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-green-400 {
  --tw-gradient-from: #34d399 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(52 211 153 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.\\!to {
  --tw-gradient-to: var(--text-normal) var(--tw-gradient-to-position) !important;
}
.to {
  --tw-gradient-to: var(--text-normal) var(--tw-gradient-to-position);
}
.to-blue-600 {
  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);
}
.to-green-600 {
  --tw-gradient-to: #059669 var(--tw-gradient-to-position);
}
.to-white\\/0 {
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
}
.bg-contain {
  background-size: contain;
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
.bg-left-bottom {
  background-position: left bottom;
}
.bg-right-bottom {
  background-position: right bottom;
}
.bg-repeat {
  background-repeat: repeat;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.fill {
  fill: var(--text-normal);
}
.fill-current {
  fill: currentColor;
}
.stroke {
  stroke: var(--text-normal);
}
.object-contain {
  object-fit: contain;
}
.p-0 {
  padding: 0px;
}
.p-0\\.5 {
  padding: 0.125rem;
}
.p-1 {
  padding: 0.25rem;
}
.p-1\\.5 {
  padding: 0.375rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-5 {
  padding: 1.25rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.p-\\[1px\\] {
  padding: 1px;
}
.p-\\[50px\\] {
  padding: 50px;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-1\\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-16 {
  padding-left: 4rem;
  padding-right: 4rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-3\\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.py-px {
  padding-top: 1px;
  padding-bottom: 1px;
}
.\\!pb-0 {
  padding-bottom: 0px !important;
}
.\\!pr-0 {
  padding-right: 0px !important;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pb-2\\.5 {
  padding-bottom: 0.625rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pl-14 {
  padding-left: 3.5rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pr-1 {
  padding-right: 0.25rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-3 {
  padding-right: 0.75rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pr-7 {
  padding-right: 1.75rem;
}
.pt-0 {
  padding-top: 0px;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-1\\.5 {
  padding-top: 0.375rem;
}
.pt-12 {
  padding-top: 3rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pt-9 {
  padding-top: 2.25rem;
}
.pt-\\[95px\\] {
  padding-top: 95px;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-start {
  text-align: start;
}
.align-top {
  vertical-align: top;
}
.align-middle {
  vertical-align: middle;
}
.\\!align-\\[-2px\\] {
  vertical-align: -2px !important;
}
.\\!align-\\[0px\\] {
  vertical-align: 0px !important;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-\\[0\\.625rem\\] {
  font-size: 0.625rem;
}
.text-\\[0\\.75rem\\] {
  font-size: 0.75rem;
}
.text-\\[0\\.875rem\\] {
  font-size: 0.875rem;
}
.text-\\[1\\.125rem\\] {
  font-size: 1.125rem;
}
.text-\\[1\\.625rem\\] {
  font-size: 1.625rem;
}
.text-\\[1\\.75rem\\] {
  font-size: 1.75rem;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[1em\\] {
  font-size: 1em;
}
.text-\\[1rem\\] {
  font-size: 1rem;
}
.text-\\[24px\\] {
  font-size: 24px;
}
.text-\\[2rem\\] {
  font-size: 2rem;
}
.text-\\[3rem\\] {
  font-size: 3rem;
}
.text-\\[4\\.5rem\\] {
  font-size: 4.5rem;
}
.text-\\[48px\\] {
  font-size: 48px;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.9375rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.8125rem;
  line-height: 1rem;
}
.font-black {
  font-weight: 900;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
}
.ordinal {
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.leading-4 {
  line-height: 1rem;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-\\[0\\.875rem\\] {
  line-height: 0.875rem;
}
.leading-\\[1\\.125rem\\] {
  line-height: 1.125rem;
}
.leading-\\[1\\.25rem\\] {
  line-height: 1.25rem;
}
.leading-\\[1\\.375rem\\] {
  line-height: 1.375rem;
}
.leading-\\[2\\.5rem\\] {
  line-height: 2.5rem;
}
.leading-\\[2rem\\] {
  line-height: 2rem;
}
.leading-\\[3\\.125rem\\] {
  line-height: 3.125rem;
}
.leading-\\[5\\.25rem\\] {
  line-height: 5.25rem;
}
.leading-\\[62px\\] {
  line-height: 62px;
}
.leading-loose {
  line-height: 2;
}
.leading-none {
  line-height: 1;
}
.leading-normal {
  line-height: 1.5;
}
.tracking-\\[4px\\] {
  letter-spacing: 4px;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.\\!text {
  color: var(--text-normal) !important;
}
.\\!text-primary {
  color: var(--color-primary) !important;
}
.text {
  color: var(--text-normal);
}
.text-\\[\\#48FFB2\\] {
  --tw-text-opacity: 1;
  color: rgb(72 255 178 / var(--tw-text-opacity));
}
.text-\\[\\#F85960\\] {
  --tw-text-opacity: 1;
  color: rgb(248 89 96 / var(--tw-text-opacity));
}
.text-\\[\\#ffd700\\] {
  --tw-text-opacity: 1;
  color: rgb(255 215 0 / var(--tw-text-opacity));
}
.text-\\[--active-color\\] {
  color: var(--active-color);
}
.text-\\[--color\\] {
  color: var(--color);
}
.text-\\[rgba\\(255\\2c 255\\2c 255\\2c 0\\.7\\)\\] {
  color: rgba(255,255,255,0.7);
}
.text-amber-500 {
  --tw-text-opacity: 1;
  color: rgb(245 158 11 / var(--tw-text-opacity));
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}
.text-card-foreground {
  color: var(--text-normal);
}
.text-current {
  color: currentColor;
}
.text-danger {
  color: var(--color-danger);
}
.text-dark {
  color: var(--text-dark);
}
.text-darkest {
  color: var(--text-darkest);
}
.text-destructive {
  color: var(--bg-base);
}
.text-destructive-foreground {
  color: var(--color-danger);
}
.text-emerald-500 {
  --tw-text-opacity: 1;
  color: rgb(16 185 129 / var(--tw-text-opacity));
}
.text-foreground {
  color: var(--text-normal);
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(16 185 129 / var(--tw-text-opacity));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 150 105 / var(--tw-text-opacity));
}
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(6 95 70 / var(--tw-text-opacity));
}
.text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(199 210 254 / var(--tw-text-opacity));
}
.text-inherit {
  color: inherit;
}
.text-light {
  color: var(--text-light);
}
.text-lightest {
  color: var(--text-lightest);
}
.text-muted-foreground {
  color: var(--text-light);
}
.text-normal {
  color: var(--text-normal);
}
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(154 52 18 / var(--tw-text-opacity));
}
.text-pass {
  color: var(--color-pass);
}
.text-popover-foreground {
  color: var(--text-normal);
}
.text-primary {
  color: var(--color-primary);
}
.text-primary-foreground {
  color: var(--bg-base);
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}
.text-secondary-foreground {
  color: var(--bg-light);
}
.text-sidebar-foreground {
  color: var(--text-normal);
}
.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}
.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}
.text-slate-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}
.text-slate-700 {
  --tw-text-opacity: 1;
  color: rgb(51 65 85 / var(--tw-text-opacity));
}
.text-slate-800 {
  --tw-text-opacity: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}
.text-transparent {
  color: transparent;
}
.text-warning {
  color: var(--color-warning);
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.text-white\\/80 {
  color: rgb(255 255 255 / 0.8);
}
.text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(202 138 4 / var(--tw-text-opacity));
}
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(133 77 14 / var(--tw-text-opacity));
}
.line-through {
  text-decoration-line: line-through;
}
.\\!no-underline {
  text-decoration-line: none !important;
}
.decoration {
  text-decoration-color: var(--text-normal);
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.placeholder::placeholder {
  color: var(--text-normal);
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-30 {
  opacity: 0.3;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-\\[var\\(--opacity-left\\2c 0\\)\\] {
  opacity: var(--opacity-left,0);
}
.opacity-\\[var\\(--opacity-right\\2c 0\\)\\] {
  opacity: var(--opacity-right,0);
}
.\\!shadow-none {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\] {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-border));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\\[0_2px_10px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.2\\)\\] {
  --tw-shadow: 0 2px 10px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 2px 10px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.outline-1 {
  outline-width: 1px;
}
.outline-2 {
  outline-width: 2px;
}
.outline {
  outline-color: var(--text-normal);
}
.outline-border {
  outline-color: var(--border-all);
}
.outline-lightest {
  outline-color: var(--text-lightest);
}
.outline-white {
  outline-color: #fff;
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-primary {
  --tw-ring-color: var(--color-primary);
}
.ring-sidebar-ring {
  --tw-ring-color: var(--color-primary);
}
.ring-offset-background {
  --tw-ring-offset-color: var(--bg-base);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.brightness-90 {
  --tw-brightness: brightness(.9);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow-lg {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter-none {
  filter: none !important;
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-xl {
  --tw-backdrop-blur: blur(24px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.\\!transition-all {
  transition-property: all !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-color\\2c box-shadow\\] {
  transition-property: border-color,box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[height\\] {
  transition-property: height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[left\\2c right\\2c width\\] {
  transition-property: left,right,width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[left\\] {
  transition-property: left;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[margin\\2c opacity\\] {
  transition-property: margin,opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[width\\2c height\\2c padding\\] {
  transition-property: width,height,padding;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[width\\] {
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  transition-timing-function: linear;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.fade-in-0 {
  --tw-enter-opacity: 0;
}
.zoom-in-95 {
  --tw-enter-scale: .95;
}
.duration-200 {
  animation-duration: 200ms;
}
.duration-300 {
  animation-duration: 300ms;
}
.duration-500 {
  animation-duration: 500ms;
}
.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  animation-timing-function: linear;
}
.ease-out {
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.running {
  animation-play-state: running;
}
.\\!paused {
  animation-play-state: paused !important;
}
.paused {
  animation-play-state: paused;
}
.\\[--active-brightness\\:1\\] {
  --active-brightness: 1;
}
.\\[--active-color\\:var\\(--text-white\\)\\!important\\] {
  --active-color: var(--text-white) !important;
}
.\\[animation-direction\\:reverse\\] {
  animation-direction: reverse;
}
.\\[animation-duration\\:20s\\] {
  animation-duration: 20s;
}
.\\[animation-duration\\:40s\\] {
  animation-duration: 40s;
}
.\\[animation-duration\\:60s\\] {
  animation-duration: 60s;
}
.\\[grid-area\\:center\\] {
  grid-area: center;
}
.\\[grid\\:\\'center\\'\\] {
  grid: 'center';
}
* {
  border: 0 solid var(--border-all);
}
.flex-1 {
  min-width: 0;
}
.flex-col {
  max-width: 100%;
}
.break-words {
  word-break: break-word;
  hyphens: auto;
}
.font-sans {
  font-family: var(--font-sans);
}
.font-mono,
.code {
  font-family: var(--font-mono);
}
[class^='gap-']:not(.grid):empty:before,
[class*=' gap-']:not(.grid):empty:before {
  content: '';
}
@supports (height: 100dvh) {
  .min-h-screen {
    min-height: 100dvh;
  }
  .h-screen {
    height: 100dvh;
  }
  .max-h-screen {
    max-height: 100dvh;
  }
}
.inset-0,
.before\\:inset-0:before,
.after\\:inset-0:after {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
[data-radix-popper-content-wrapper] {
  z-index: 50 !important;
}
.no-flex-gap .gap-y-0:not(.grid) > :not([hidden]) {
  margin-bottom: 0px;
}
.no-flex-gap .gap-x-0:not(.grid) > :not([hidden]) {
  margin-right: 0px;
}
.no-flex-gap .gap-0:not(.grid) > :not([hidden]) {
  margin-right: 0px;
  margin-bottom: 0px;
}
.no-flex-gap .gap-y-1:not(.grid) > :not([hidden]) {
  margin-bottom: 0.25rem;
}
.no-flex-gap .gap-x-1:not(.grid) > :not([hidden]) {
  margin-right: 0.25rem;
}
.no-flex-gap .gap-1:not(.grid) > :not([hidden]) {
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}
.no-flex-gap .gap-y-2:not(.grid) > :not([hidden]) {
  margin-bottom: 0.5rem;
}
.no-flex-gap .gap-x-2:not(.grid) > :not([hidden]) {
  margin-right: 0.5rem;
}
.no-flex-gap .gap-2:not(.grid) > :not([hidden]) {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.no-flex-gap .gap-y-3:not(.grid) > :not([hidden]) {
  margin-bottom: 0.75rem;
}
.no-flex-gap .gap-x-3:not(.grid) > :not([hidden]) {
  margin-right: 0.75rem;
}
.no-flex-gap .gap-3:not(.grid) > :not([hidden]) {
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
}
.no-flex-gap .gap-y-4:not(.grid) > :not([hidden]) {
  margin-bottom: 1rem;
}
.no-flex-gap .gap-x-4:not(.grid) > :not([hidden]) {
  margin-right: 1rem;
}
.no-flex-gap .gap-4:not(.grid) > :not([hidden]) {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.no-flex-gap .gap-y-5:not(.grid) > :not([hidden]) {
  margin-bottom: 1.25rem;
}
.no-flex-gap .gap-x-5:not(.grid) > :not([hidden]) {
  margin-right: 1.25rem;
}
.no-flex-gap .gap-5:not(.grid) > :not([hidden]) {
  margin-right: 1.25rem;
  margin-bottom: 1.25rem;
}
.no-flex-gap .gap-y-6:not(.grid) > :not([hidden]) {
  margin-bottom: 1.5rem;
}
.no-flex-gap .gap-x-6:not(.grid) > :not([hidden]) {
  margin-right: 1.5rem;
}
.no-flex-gap .gap-6:not(.grid) > :not([hidden]) {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
}
.no-flex-gap .gap-y-7:not(.grid) > :not([hidden]) {
  margin-bottom: 1.75rem;
}
.no-flex-gap .gap-x-7:not(.grid) > :not([hidden]) {
  margin-right: 1.75rem;
}
.no-flex-gap .gap-7:not(.grid) > :not([hidden]) {
  margin-right: 1.75rem;
  margin-bottom: 1.75rem;
}
.no-flex-gap .gap-y-8:not(.grid) > :not([hidden]) {
  margin-bottom: 2rem;
}
.no-flex-gap .gap-x-8:not(.grid) > :not([hidden]) {
  margin-right: 2rem;
}
.no-flex-gap .gap-8:not(.grid) > :not([hidden]) {
  margin-right: 2rem;
  margin-bottom: 2rem;
}
.no-flex-gap .gap-y-9:not(.grid) > :not([hidden]) {
  margin-bottom: 2.25rem;
}
.no-flex-gap .gap-x-9:not(.grid) > :not([hidden]) {
  margin-right: 2.25rem;
}
.no-flex-gap .gap-9:not(.grid) > :not([hidden]) {
  margin-right: 2.25rem;
  margin-bottom: 2.25rem;
}
.no-flex-gap .gap-y-10:not(.grid) > :not([hidden]) {
  margin-bottom: 2.5rem;
}
.no-flex-gap .gap-x-10:not(.grid) > :not([hidden]) {
  margin-right: 2.5rem;
}
.no-flex-gap .gap-10:not(.grid) > :not([hidden]) {
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
}
.no-flex-gap .gap-y-11:not(.grid) > :not([hidden]) {
  margin-bottom: 2.75rem;
}
.no-flex-gap .gap-x-11:not(.grid) > :not([hidden]) {
  margin-right: 2.75rem;
}
.no-flex-gap .gap-11:not(.grid) > :not([hidden]) {
  margin-right: 2.75rem;
  margin-bottom: 2.75rem;
}
.no-flex-gap .gap-y-12:not(.grid) > :not([hidden]) {
  margin-bottom: 3rem;
}
.no-flex-gap .gap-x-12:not(.grid) > :not([hidden]) {
  margin-right: 3rem;
}
.no-flex-gap .gap-12:not(.grid) > :not([hidden]) {
  margin-right: 3rem;
  margin-bottom: 3rem;
}
.no-flex-gap .gap-y-14:not(.grid) > :not([hidden]) {
  margin-bottom: 3.5rem;
}
.no-flex-gap .gap-x-14:not(.grid) > :not([hidden]) {
  margin-right: 3.5rem;
}
.no-flex-gap .gap-14:not(.grid) > :not([hidden]) {
  margin-right: 3.5rem;
  margin-bottom: 3.5rem;
}
.no-flex-gap .gap-y-16:not(.grid) > :not([hidden]) {
  margin-bottom: 4rem;
}
.no-flex-gap .gap-x-16:not(.grid) > :not([hidden]) {
  margin-right: 4rem;
}
.no-flex-gap .gap-16:not(.grid) > :not([hidden]) {
  margin-right: 4rem;
  margin-bottom: 4rem;
}
.no-flex-gap .gap-y-20:not(.grid) > :not([hidden]) {
  margin-bottom: 5rem;
}
.no-flex-gap .gap-x-20:not(.grid) > :not([hidden]) {
  margin-right: 5rem;
}
.no-flex-gap .gap-20:not(.grid) > :not([hidden]) {
  margin-right: 5rem;
  margin-bottom: 5rem;
}
.no-flex-gap .gap-y-24:not(.grid) > :not([hidden]) {
  margin-bottom: 6rem;
}
.no-flex-gap .gap-x-24:not(.grid) > :not([hidden]) {
  margin-right: 6rem;
}
.no-flex-gap .gap-24:not(.grid) > :not([hidden]) {
  margin-right: 6rem;
  margin-bottom: 6rem;
}
.no-flex-gap .gap-y-28:not(.grid) > :not([hidden]) {
  margin-bottom: 7rem;
}
.no-flex-gap .gap-x-28:not(.grid) > :not([hidden]) {
  margin-right: 7rem;
}
.no-flex-gap .gap-28:not(.grid) > :not([hidden]) {
  margin-right: 7rem;
  margin-bottom: 7rem;
}
.no-flex-gap .gap-y-32:not(.grid) > :not([hidden]) {
  margin-bottom: 8rem;
}
.no-flex-gap .gap-x-32:not(.grid) > :not([hidden]) {
  margin-right: 8rem;
}
.no-flex-gap .gap-32:not(.grid) > :not([hidden]) {
  margin-right: 8rem;
  margin-bottom: 8rem;
}
.no-flex-gap .gap-y-36:not(.grid) > :not([hidden]) {
  margin-bottom: 9rem;
}
.no-flex-gap .gap-x-36:not(.grid) > :not([hidden]) {
  margin-right: 9rem;
}
.no-flex-gap .gap-36:not(.grid) > :not([hidden]) {
  margin-right: 9rem;
  margin-bottom: 9rem;
}
.no-flex-gap .gap-y-40:not(.grid) > :not([hidden]) {
  margin-bottom: 10rem;
}
.no-flex-gap .gap-x-40:not(.grid) > :not([hidden]) {
  margin-right: 10rem;
}
.no-flex-gap .gap-40:not(.grid) > :not([hidden]) {
  margin-right: 10rem;
  margin-bottom: 10rem;
}
.no-flex-gap .gap-y-44:not(.grid) > :not([hidden]) {
  margin-bottom: 11rem;
}
.no-flex-gap .gap-x-44:not(.grid) > :not([hidden]) {
  margin-right: 11rem;
}
.no-flex-gap .gap-44:not(.grid) > :not([hidden]) {
  margin-right: 11rem;
  margin-bottom: 11rem;
}
.no-flex-gap .gap-y-48:not(.grid) > :not([hidden]) {
  margin-bottom: 12rem;
}
.no-flex-gap .gap-x-48:not(.grid) > :not([hidden]) {
  margin-right: 12rem;
}
.no-flex-gap .gap-48:not(.grid) > :not([hidden]) {
  margin-right: 12rem;
  margin-bottom: 12rem;
}
.no-flex-gap .gap-y-52:not(.grid) > :not([hidden]) {
  margin-bottom: 13rem;
}
.no-flex-gap .gap-x-52:not(.grid) > :not([hidden]) {
  margin-right: 13rem;
}
.no-flex-gap .gap-52:not(.grid) > :not([hidden]) {
  margin-right: 13rem;
  margin-bottom: 13rem;
}
.no-flex-gap .gap-y-56:not(.grid) > :not([hidden]) {
  margin-bottom: 14rem;
}
.no-flex-gap .gap-x-56:not(.grid) > :not([hidden]) {
  margin-right: 14rem;
}
.no-flex-gap .gap-56:not(.grid) > :not([hidden]) {
  margin-right: 14rem;
  margin-bottom: 14rem;
}
.no-flex-gap .gap-y-60:not(.grid) > :not([hidden]) {
  margin-bottom: 15rem;
}
.no-flex-gap .gap-x-60:not(.grid) > :not([hidden]) {
  margin-right: 15rem;
}
.no-flex-gap .gap-60:not(.grid) > :not([hidden]) {
  margin-right: 15rem;
  margin-bottom: 15rem;
}
.no-flex-gap .gap-y-64:not(.grid) > :not([hidden]) {
  margin-bottom: 16rem;
}
.no-flex-gap .gap-x-64:not(.grid) > :not([hidden]) {
  margin-right: 16rem;
}
.no-flex-gap .gap-64:not(.grid) > :not([hidden]) {
  margin-right: 16rem;
  margin-bottom: 16rem;
}
.no-flex-gap .gap-y-72:not(.grid) > :not([hidden]) {
  margin-bottom: 18rem;
}
.no-flex-gap .gap-x-72:not(.grid) > :not([hidden]) {
  margin-right: 18rem;
}
.no-flex-gap .gap-72:not(.grid) > :not([hidden]) {
  margin-right: 18rem;
  margin-bottom: 18rem;
}
.no-flex-gap .gap-y-80:not(.grid) > :not([hidden]) {
  margin-bottom: 20rem;
}
.no-flex-gap .gap-x-80:not(.grid) > :not([hidden]) {
  margin-right: 20rem;
}
.no-flex-gap .gap-80:not(.grid) > :not([hidden]) {
  margin-right: 20rem;
  margin-bottom: 20rem;
}
.no-flex-gap .gap-y-96:not(.grid) > :not([hidden]) {
  margin-bottom: 24rem;
}
.no-flex-gap .gap-x-96:not(.grid) > :not([hidden]) {
  margin-right: 24rem;
}
.no-flex-gap .gap-96:not(.grid) > :not([hidden]) {
  margin-right: 24rem;
  margin-bottom: 24rem;
}
@media (min-width: 768px) {

  .no-flex-gap .md\\:gap-y-0:not(.grid) > :not([hidden]) {
    margin-bottom: 0px;
  }

  .no-flex-gap .md\\:gap-x-0:not(.grid) > :not([hidden]) {
    margin-right: 0px;
  }

  .no-flex-gap .md\\:gap-0:not(.grid) > :not([hidden]) {
    margin-right: 0px;
    margin-bottom: 0px;
  }

  .no-flex-gap .md\\:gap-y-1:not(.grid) > :not([hidden]) {
    margin-bottom: 0.25rem;
  }

  .no-flex-gap .md\\:gap-x-1:not(.grid) > :not([hidden]) {
    margin-right: 0.25rem;
  }

  .no-flex-gap .md\\:gap-1:not(.grid) > :not([hidden]) {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .no-flex-gap .md\\:gap-y-2:not(.grid) > :not([hidden]) {
    margin-bottom: 0.5rem;
  }

  .no-flex-gap .md\\:gap-x-2:not(.grid) > :not([hidden]) {
    margin-right: 0.5rem;
  }

  .no-flex-gap .md\\:gap-2:not(.grid) > :not([hidden]) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .no-flex-gap .md\\:gap-y-3:not(.grid) > :not([hidden]) {
    margin-bottom: 0.75rem;
  }

  .no-flex-gap .md\\:gap-x-3:not(.grid) > :not([hidden]) {
    margin-right: 0.75rem;
  }

  .no-flex-gap .md\\:gap-3:not(.grid) > :not([hidden]) {
    margin-right: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .no-flex-gap .md\\:gap-y-4:not(.grid) > :not([hidden]) {
    margin-bottom: 1rem;
  }

  .no-flex-gap .md\\:gap-x-4:not(.grid) > :not([hidden]) {
    margin-right: 1rem;
  }

  .no-flex-gap .md\\:gap-4:not(.grid) > :not([hidden]) {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .no-flex-gap .md\\:gap-y-5:not(.grid) > :not([hidden]) {
    margin-bottom: 1.25rem;
  }

  .no-flex-gap .md\\:gap-x-5:not(.grid) > :not([hidden]) {
    margin-right: 1.25rem;
  }

  .no-flex-gap .md\\:gap-5:not(.grid) > :not([hidden]) {
    margin-right: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .no-flex-gap .md\\:gap-y-6:not(.grid) > :not([hidden]) {
    margin-bottom: 1.5rem;
  }

  .no-flex-gap .md\\:gap-x-6:not(.grid) > :not([hidden]) {
    margin-right: 1.5rem;
  }

  .no-flex-gap .md\\:gap-6:not(.grid) > :not([hidden]) {
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .no-flex-gap .md\\:gap-y-7:not(.grid) > :not([hidden]) {
    margin-bottom: 1.75rem;
  }

  .no-flex-gap .md\\:gap-x-7:not(.grid) > :not([hidden]) {
    margin-right: 1.75rem;
  }

  .no-flex-gap .md\\:gap-7:not(.grid) > :not([hidden]) {
    margin-right: 1.75rem;
    margin-bottom: 1.75rem;
  }

  .no-flex-gap .md\\:gap-y-8:not(.grid) > :not([hidden]) {
    margin-bottom: 2rem;
  }

  .no-flex-gap .md\\:gap-x-8:not(.grid) > :not([hidden]) {
    margin-right: 2rem;
  }

  .no-flex-gap .md\\:gap-8:not(.grid) > :not([hidden]) {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }

  .no-flex-gap .md\\:gap-y-9:not(.grid) > :not([hidden]) {
    margin-bottom: 2.25rem;
  }

  .no-flex-gap .md\\:gap-x-9:not(.grid) > :not([hidden]) {
    margin-right: 2.25rem;
  }

  .no-flex-gap .md\\:gap-9:not(.grid) > :not([hidden]) {
    margin-right: 2.25rem;
    margin-bottom: 2.25rem;
  }

  .no-flex-gap .md\\:gap-y-10:not(.grid) > :not([hidden]) {
    margin-bottom: 2.5rem;
  }

  .no-flex-gap .md\\:gap-x-10:not(.grid) > :not([hidden]) {
    margin-right: 2.5rem;
  }

  .no-flex-gap .md\\:gap-10:not(.grid) > :not([hidden]) {
    margin-right: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .no-flex-gap .md\\:gap-y-11:not(.grid) > :not([hidden]) {
    margin-bottom: 2.75rem;
  }

  .no-flex-gap .md\\:gap-x-11:not(.grid) > :not([hidden]) {
    margin-right: 2.75rem;
  }

  .no-flex-gap .md\\:gap-11:not(.grid) > :not([hidden]) {
    margin-right: 2.75rem;
    margin-bottom: 2.75rem;
  }

  .no-flex-gap .md\\:gap-y-12:not(.grid) > :not([hidden]) {
    margin-bottom: 3rem;
  }

  .no-flex-gap .md\\:gap-x-12:not(.grid) > :not([hidden]) {
    margin-right: 3rem;
  }

  .no-flex-gap .md\\:gap-12:not(.grid) > :not([hidden]) {
    margin-right: 3rem;
    margin-bottom: 3rem;
  }

  .no-flex-gap .md\\:gap-y-14:not(.grid) > :not([hidden]) {
    margin-bottom: 3.5rem;
  }

  .no-flex-gap .md\\:gap-x-14:not(.grid) > :not([hidden]) {
    margin-right: 3.5rem;
  }

  .no-flex-gap .md\\:gap-14:not(.grid) > :not([hidden]) {
    margin-right: 3.5rem;
    margin-bottom: 3.5rem;
  }

  .no-flex-gap .md\\:gap-y-16:not(.grid) > :not([hidden]) {
    margin-bottom: 4rem;
  }

  .no-flex-gap .md\\:gap-x-16:not(.grid) > :not([hidden]) {
    margin-right: 4rem;
  }

  .no-flex-gap .md\\:gap-16:not(.grid) > :not([hidden]) {
    margin-right: 4rem;
    margin-bottom: 4rem;
  }

  .no-flex-gap .md\\:gap-y-20:not(.grid) > :not([hidden]) {
    margin-bottom: 5rem;
  }

  .no-flex-gap .md\\:gap-x-20:not(.grid) > :not([hidden]) {
    margin-right: 5rem;
  }

  .no-flex-gap .md\\:gap-20:not(.grid) > :not([hidden]) {
    margin-right: 5rem;
    margin-bottom: 5rem;
  }

  .no-flex-gap .md\\:gap-y-24:not(.grid) > :not([hidden]) {
    margin-bottom: 6rem;
  }

  .no-flex-gap .md\\:gap-x-24:not(.grid) > :not([hidden]) {
    margin-right: 6rem;
  }

  .no-flex-gap .md\\:gap-24:not(.grid) > :not([hidden]) {
    margin-right: 6rem;
    margin-bottom: 6rem;
  }

  .no-flex-gap .md\\:gap-y-28:not(.grid) > :not([hidden]) {
    margin-bottom: 7rem;
  }

  .no-flex-gap .md\\:gap-x-28:not(.grid) > :not([hidden]) {
    margin-right: 7rem;
  }

  .no-flex-gap .md\\:gap-28:not(.grid) > :not([hidden]) {
    margin-right: 7rem;
    margin-bottom: 7rem;
  }

  .no-flex-gap .md\\:gap-y-32:not(.grid) > :not([hidden]) {
    margin-bottom: 8rem;
  }

  .no-flex-gap .md\\:gap-x-32:not(.grid) > :not([hidden]) {
    margin-right: 8rem;
  }

  .no-flex-gap .md\\:gap-32:not(.grid) > :not([hidden]) {
    margin-right: 8rem;
    margin-bottom: 8rem;
  }

  .no-flex-gap .md\\:gap-y-36:not(.grid) > :not([hidden]) {
    margin-bottom: 9rem;
  }

  .no-flex-gap .md\\:gap-x-36:not(.grid) > :not([hidden]) {
    margin-right: 9rem;
  }

  .no-flex-gap .md\\:gap-36:not(.grid) > :not([hidden]) {
    margin-right: 9rem;
    margin-bottom: 9rem;
  }

  .no-flex-gap .md\\:gap-y-40:not(.grid) > :not([hidden]) {
    margin-bottom: 10rem;
  }

  .no-flex-gap .md\\:gap-x-40:not(.grid) > :not([hidden]) {
    margin-right: 10rem;
  }

  .no-flex-gap .md\\:gap-40:not(.grid) > :not([hidden]) {
    margin-right: 10rem;
    margin-bottom: 10rem;
  }

  .no-flex-gap .md\\:gap-y-44:not(.grid) > :not([hidden]) {
    margin-bottom: 11rem;
  }

  .no-flex-gap .md\\:gap-x-44:not(.grid) > :not([hidden]) {
    margin-right: 11rem;
  }

  .no-flex-gap .md\\:gap-44:not(.grid) > :not([hidden]) {
    margin-right: 11rem;
    margin-bottom: 11rem;
  }

  .no-flex-gap .md\\:gap-y-48:not(.grid) > :not([hidden]) {
    margin-bottom: 12rem;
  }

  .no-flex-gap .md\\:gap-x-48:not(.grid) > :not([hidden]) {
    margin-right: 12rem;
  }

  .no-flex-gap .md\\:gap-48:not(.grid) > :not([hidden]) {
    margin-right: 12rem;
    margin-bottom: 12rem;
  }

  .no-flex-gap .md\\:gap-y-52:not(.grid) > :not([hidden]) {
    margin-bottom: 13rem;
  }

  .no-flex-gap .md\\:gap-x-52:not(.grid) > :not([hidden]) {
    margin-right: 13rem;
  }

  .no-flex-gap .md\\:gap-52:not(.grid) > :not([hidden]) {
    margin-right: 13rem;
    margin-bottom: 13rem;
  }

  .no-flex-gap .md\\:gap-y-56:not(.grid) > :not([hidden]) {
    margin-bottom: 14rem;
  }

  .no-flex-gap .md\\:gap-x-56:not(.grid) > :not([hidden]) {
    margin-right: 14rem;
  }

  .no-flex-gap .md\\:gap-56:not(.grid) > :not([hidden]) {
    margin-right: 14rem;
    margin-bottom: 14rem;
  }

  .no-flex-gap .md\\:gap-y-60:not(.grid) > :not([hidden]) {
    margin-bottom: 15rem;
  }

  .no-flex-gap .md\\:gap-x-60:not(.grid) > :not([hidden]) {
    margin-right: 15rem;
  }

  .no-flex-gap .md\\:gap-60:not(.grid) > :not([hidden]) {
    margin-right: 15rem;
    margin-bottom: 15rem;
  }

  .no-flex-gap .md\\:gap-y-64:not(.grid) > :not([hidden]) {
    margin-bottom: 16rem;
  }

  .no-flex-gap .md\\:gap-x-64:not(.grid) > :not([hidden]) {
    margin-right: 16rem;
  }

  .no-flex-gap .md\\:gap-64:not(.grid) > :not([hidden]) {
    margin-right: 16rem;
    margin-bottom: 16rem;
  }

  .no-flex-gap .md\\:gap-y-72:not(.grid) > :not([hidden]) {
    margin-bottom: 18rem;
  }

  .no-flex-gap .md\\:gap-x-72:not(.grid) > :not([hidden]) {
    margin-right: 18rem;
  }

  .no-flex-gap .md\\:gap-72:not(.grid) > :not([hidden]) {
    margin-right: 18rem;
    margin-bottom: 18rem;
  }

  .no-flex-gap .md\\:gap-y-80:not(.grid) > :not([hidden]) {
    margin-bottom: 20rem;
  }

  .no-flex-gap .md\\:gap-x-80:not(.grid) > :not([hidden]) {
    margin-right: 20rem;
  }

  .no-flex-gap .md\\:gap-80:not(.grid) > :not([hidden]) {
    margin-right: 20rem;
    margin-bottom: 20rem;
  }

  .no-flex-gap .md\\:gap-y-96:not(.grid) > :not([hidden]) {
    margin-bottom: 24rem;
  }

  .no-flex-gap .md\\:gap-x-96:not(.grid) > :not([hidden]) {
    margin-right: 24rem;
  }

  .no-flex-gap .md\\:gap-96:not(.grid) > :not([hidden]) {
    margin-right: 24rem;
    margin-bottom: 24rem;
  }
}
.p-0:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 0);
}
.py-0:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 0);
}
.p-1:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 1);
}
.py-1:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 1);
}
.p-2:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 2);
}
.py-2:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 2);
}
.p-3:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 3);
}
.py-3:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 3);
}
.p-4:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 4);
}
.py-4:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 4);
}
.p-5:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 5);
}
.py-5:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 5);
}
.p-6:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 6);
}
.py-6:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 6);
}
.p-7:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 7);
}
.py-7:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 7);
}
.p-8:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 8);
}
.py-8:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 8);
}
.p-9:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 9);
}
.py-9:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 9);
}
.p-10:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 10);
}
.py-10:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 10);
}
.p-11:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 11);
}
.py-11:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 11);
}
.p-12:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 12);
}
.py-12:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 12);
}
.p-14:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 14);
}
.py-14:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 14);
}
.p-16:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 16);
}
.py-16:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 16);
}
.p-20:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 20);
}
.py-20:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 20);
}
.p-24:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 24);
}
.py-24:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 24);
}
.p-28:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 28);
}
.py-28:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 28);
}
.p-32:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 32);
}
.py-32:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 32);
}
.p-36:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 36);
}
.py-36:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 36);
}
.p-40:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 40);
}
.py-40:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 40);
}
.p-44:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 44);
}
.py-44:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 44);
}
.p-48:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 48);
}
.py-48:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 48);
}
.p-52:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 52);
}
.py-52:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 52);
}
.p-56:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 56);
}
.py-56:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 56);
}
.p-60:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 60);
}
.py-60:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 60);
}
.p-64:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 64);
}
.py-64:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 64);
}
.p-72:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 72);
}
.py-72:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 72);
}
.p-80:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 80);
}
.py-80:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 80);
}
.p-96:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 96);
}
.py-96:where(.scroll, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll) {
  --scroll-container-padding-y: calc(0.25rem * 96);
}
.rendered-markdown {
  line-height: 1.5;
}
.rendered-markdown p,
.rendered-markdown td,
.rendered-markdown th,
.rendered-markdown h1,
.rendered-markdown h2,
.rendered-markdown h3,
.rendered-markdown h4,
.rendered-markdown h5,
.rendered-markdown h6 {
  white-space: pre-wrap;
}
.rendered-markdown p {
  margin: 0.5rem 0;
}
.rendered-markdown p:first-child {
  margin: 0;
}
.rendered-markdown h1,
.rendered-markdown h2,
.rendered-markdown h3,
.rendered-markdown h4,
.rendered-markdown h5,
.rendered-markdown h6 {
  margin: 0.8rem 0;
}
.rendered-markdown img {
  max-width: 100%;
}
.rendered-markdown code {
  background: var(--bg-light);
  border-radius: 0.1875rem;
  border: 1px solid var(--border-all);
  color: #e74c3c;
  margin: 0 0.125em;
}
.rendered-markdown pre {
  display: flex;
  background: var(--bg-light);
  border: 1px solid var(--border-all);
  border-radius: 0.1875rem;
  word-break: break-all;
  padding: 0 !important;
}
.rendered-markdown pre code {
  padding: 0.375rem 0.75rem;
  background: none;
  border: none;
  color: var(--text-normal);
  margin: 0;
}
.rendered-markdown hr {
  border: none;
  border-top: 1px solid var(--border-all);
}
.rendered-markdown blockquote {
  margin: 0.5rem 0;
  padding: 0.125rem 0.875rem;
  font-size: 0.75rem;
  background: var(--bg-light);
  border-left: 4px solid var(--border-all);
}
.rendered-markdown blockquote p {
  margin-bottom: 0;
}
.rendered-markdown [data-code] {
  margin: 1rem 0;
}
.rendered-markdown [data-table] {
  overflow: auto;
  max-width: 100%;
  margin: 1rem 0;
}
.rendered-markdown [data-table] table {
  margin: 0 auto;
}
.rendered-markdown [data-table] th,
.rendered-markdown [data-table] td {
  border: 1px solid var(--text-lightest);
  padding: 0.3125rem;
}
.katex-mathml {
  display: none;
}
.rendered-markdown {
  max-width: unset;
}
.rendered-markdown pre code {
  font-size: inherit;
}
.rendered-markdown code::before,
.rendered-markdown code::after {
  content: unset;
}
.rendered-markdown img {
  margin-top: unset;
  margin-bottom: unset;
}
.rendered-markdown td[align='center'],
.rendered-markdown th[align='center'] {
  text-align: center;
}
.rendered-markdown td[align='right'],
.rendered-markdown th[align='right'] {
  text-align: right;
}
.rendered-markdown a {
  color: var(--color-primary);
  text-decoration: unset;
  font-weight: unset;
}
:is(.dark .dark\\:rendered-markdown-invert) {
  --tw-prose-body: var(--tw-prose-invert-body);
  --tw-prose-headings: var(--tw-prose-invert-headings);
  --tw-prose-lead: var(--tw-prose-invert-lead);
  --tw-prose-links: var(--tw-prose-invert-links);
  --tw-prose-bold: var(--tw-prose-invert-bold);
  --tw-prose-counters: var(--tw-prose-invert-counters);
  --tw-prose-bullets: var(--tw-prose-invert-bullets);
  --tw-prose-hr: var(--tw-prose-invert-hr);
  --tw-prose-quotes: var(--tw-prose-invert-quotes);
  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);
  --tw-prose-captions: var(--tw-prose-invert-captions);
  --tw-prose-kbd: var(--tw-prose-invert-kbd);
  --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);
  --tw-prose-code: var(--tw-prose-invert-code);
  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);
  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);
  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);
  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);
}
.file\\:border-0::file-selector-button {
  border-width: 0px;
}
.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}
.file\\:text-sm::file-selector-button {
  font-size: 0.9375rem;
  line-height: 1.25rem;
}
.file\\:font-medium::file-selector-button {
  font-weight: 500;
}
.file\\:text-foreground::file-selector-button {
  color: var(--text-normal);
}
.placeholder\\:italic::placeholder {
  font-style: italic;
}
.placeholder\\:text-lightest::placeholder {
  color: var(--text-lightest);
}
.placeholder\\:text-muted-foreground::placeholder {
  color: var(--text-light);
}
.placeholder\\:text-slate-500::placeholder {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}
.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}
.before\\:-inset-x-1::before {
  content: var(--tw-content);
  left: -0.25rem;
  right: -0.25rem;
}
.before\\:-inset-x-2::before {
  content: var(--tw-content);
  left: -0.5rem;
  right: -0.5rem;
}
.before\\:-inset-y-1::before {
  content: var(--tw-content);
  top: -0.25rem;
  bottom: -0.25rem;
}
.before\\:inset-x-\\[-0\\.25rem\\]::before {
  content: var(--tw-content);
  left: -0.25rem;
  right: -0.25rem;
}
.before\\:bottom-0::before {
  content: var(--tw-content);
  bottom: 0px;
}
.before\\:bottom-\\[0\\.125rem\\]::before {
  content: var(--tw-content);
  bottom: 0.125rem;
}
.before\\:left-0::before {
  content: var(--tw-content);
  left: 0px;
}
.before\\:right-0::before {
  content: var(--tw-content);
  right: 0px;
}
.before\\:top-\\[calc\\(anchor\\(100\\%\\)-2px\\)\\]::before {
  content: var(--tw-content);
  top: calc(anchor(100%) - 2px);
}
.before\\:z-\\[-1\\]::before {
  content: var(--tw-content);
  z-index: -1;
}
.before\\:h-0::before {
  content: var(--tw-content);
  height: 0px;
}
.before\\:h-0\\.5::before {
  content: var(--tw-content);
  height: 0.125rem;
}
.before\\:h-1::before {
  content: var(--tw-content);
  height: 0.25rem;
}
.before\\:h-1\\.5::before {
  content: var(--tw-content);
  height: 0.375rem;
}
.before\\:h-2::before {
  content: var(--tw-content);
  height: 0.5rem;
}
.before\\:h-\\[1\\.375rem\\]::before {
  content: var(--tw-content);
  height: 1.375rem;
}
.before\\:h-\\[2px\\]::before {
  content: var(--tw-content);
  height: 2px;
}
.before\\:h-px::before {
  content: var(--tw-content);
  height: 1px;
}
.before\\:w-1::before {
  content: var(--tw-content);
  width: 0.25rem;
}
.before\\:w-2::before {
  content: var(--tw-content);
  width: 0.5rem;
}
.before\\:flex-1::before {
  content: var(--tw-content);
  flex: 1 1 0%;
}
.before\\:origin-left::before {
  content: var(--tw-content);
  transform-origin: left;
}
.before\\:scale-x-0::before {
  content: var(--tw-content);
  --tw-scale-x: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.before\\:scale-x-100::before {
  content: var(--tw-content);
  --tw-scale-x: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.before\\:rounded::before {
  content: var(--tw-content);
  border-radius: 0.25rem;
}
.before\\:rounded-tl::before {
  content: var(--tw-content);
  border-top-left-radius: 0.25rem;
}
.before\\:bg-\\[--color\\]::before {
  content: var(--tw-content);
  background-color: var(--color);
}
.before\\:bg-bg-base::before {
  content: var(--tw-content);
  background-color: var(--bg-base);
}
.before\\:bg-bg-light::before {
  content: var(--tw-content);
  background-color: var(--bg-light);
}
.before\\:bg-border::before {
  content: var(--tw-content);
  background-color: var(--border-all);
}
.before\\:bg-primary::before {
  content: var(--tw-content);
  background-color: var(--color-primary);
}
.before\\:bg-slate-900\\/10::before {
  content: var(--tw-content);
  background-color: rgb(15 23 42 / 0.1);
}
.before\\:bg-warning::before {
  content: var(--tw-content);
  background-color: var(--color-warning);
}
.before\\:opacity-0::before {
  content: var(--tw-content);
  opacity: 0;
}
.before\\:opacity-40::before {
  content: var(--tw-content);
  opacity: 0.4;
}
.before\\:transition-all::before {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.before\\:transition-transform::before {
  content: var(--tw-content);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.before\\:duration-300::before {
  content: var(--tw-content);
  transition-duration: 300ms;
}
.before\\:\\!content-none::before {
  --tw-content: none !important;
  content: var(--tw-content) !important;
}
.before\\:content-\\[\\"\\"\\]::before {
  --tw-content: "";
  content: var(--tw-content);
}
.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}
.before\\:duration-300::before {
  content: var(--tw-content);
  animation-duration: 300ms;
}
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
.after\\:-inset-2::after {
  content: var(--tw-content);
  inset: -0.5rem;
}
.after\\:inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}
.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}
.after\\:h-px::after {
  content: var(--tw-content);
  height: 1px;
}
.after\\:w-0::after {
  content: var(--tw-content);
  width: 0px;
}
.after\\:w-1::after {
  content: var(--tw-content);
  width: 0.25rem;
}
.after\\:w-\\[2px\\]::after {
  content: var(--tw-content);
  width: 2px;
}
.after\\:flex-1::after {
  content: var(--tw-content);
  flex: 1 1 0%;
}
.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.after\\:border-x-\\[0\\.3125rem\\]::after {
  content: var(--tw-content);
  border-left-width: 0.3125rem;
  border-right-width: 0.3125rem;
}
.after\\:border-y-\\[0\\.1875rem\\]::after {
  content: var(--tw-content);
  border-top-width: 0.1875rem;
  border-bottom-width: 0.1875rem;
}
.after\\:border-solid::after {
  content: var(--tw-content);
  border-style: solid;
}
.after\\:border-transparent::after {
  content: var(--tw-content);
  border-color: transparent;
}
.after\\:border-r-primary::after {
  content: var(--tw-content);
  border-right-color: var(--color-primary);
}
.after\\:bg-border::after {
  content: var(--tw-content);
  background-color: var(--border-all);
}
.after\\:opacity-0::after {
  content: var(--tw-content);
  opacity: 0;
}
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}
.last\\:border-b-0:last-child {
  border-bottom-width: 0px;
}
.read-only\\:cursor-not-allowed:read-only {
  cursor: not-allowed;
}
.read-only\\:bg-bg-light:read-only {
  background-color: var(--bg-light);
}
.empty\\:mb-0:empty {
  margin-bottom: 0px;
}
.empty\\:mt-0:empty {
  margin-top: 0px;
}
.empty\\:hidden:empty {
  display: none;
}
.focus-within\\:z-10:focus-within {
  z-index: 10;
}
.focus-within\\:border-primary:focus-within {
  border-color: var(--color-primary);
}
.focus-within\\:bg-bg-light:focus-within {
  background-color: var(--bg-light);
}
.focus-within\\:opacity-100:focus-within {
  opacity: 1;
}
.focus-within\\:ring:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-within\\:ring-\\[rgba\\(10\\2c 73\\2c 145\\2c 0\\.25\\)\\]:focus-within {
  --tw-ring-color: rgba(10,73,145,0.25);
}
.focus-within\\:ring-blue-300:focus-within {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}
.focus-within\\:drop-shadow-lg:focus-within {
  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.hover\\:left-0:hover {
  left: 0px;
}
.hover\\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:cursor-pointer:hover {
  cursor: pointer;
}
.hover\\:border-orange-200:hover {
  --tw-border-opacity: 1;
  border-color: rgb(254 215 170 / var(--tw-border-opacity));
}
.hover\\:border-primary:hover {
  border-color: var(--color-primary);
}
.hover\\:bg-accent:hover {
  background-color: var(--bg-base);
}
.hover\\:bg-bg-base:hover {
  background-color: var(--bg-base);
}
.hover\\:bg-bg-light:hover {
  background-color: var(--bg-light);
}
.hover\\:bg-bg-normal:hover {
  background-color: var(--bg-normal);
}
.hover\\:bg-black\\/10:hover {
  background-color: rgb(0 0 0 / 0.1);
}
.hover\\:bg-black\\/80:hover {
  background-color: rgb(0 0 0 / 0.8);
}
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}
.hover\\:bg-orange-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity));
}
.hover\\:bg-primary:hover {
  background-color: var(--color-primary);
}
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}
.hover\\:bg-sidebar-accent:hover {
  background-color: var(--bg-light);
}
.hover\\:bg-slate-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}
.hover\\:bg-slate-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}
.hover\\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.hover\\:bg-opacity-10:hover {
  --tw-bg-opacity: 0.1;
}
.hover\\:bg-opacity-20:hover {
  --tw-bg-opacity: 0.2;
}
.hover\\:\\!text-primary:hover {
  color: var(--color-primary) !important;
}
.hover\\:text-\\[\\#052549\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(5 37 73 / var(--tw-text-opacity));
}
.hover\\:text-\\[--active-color\\]:hover {
  color: var(--active-color);
}
.hover\\:text-accent-foreground:hover {
  color: var(--text-dark);
}
.hover\\:text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}
.hover\\:text-foreground:hover {
  color: var(--text-normal);
}
.hover\\:text-gray-800:hover {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}
.hover\\:text-lightest:hover {
  color: var(--text-lightest);
}
.hover\\:text-primary:hover {
  color: var(--color-primary);
}
.hover\\:text-sidebar-accent-foreground:hover {
  color: var(--text-normal);
}
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.hover\\:underline:hover {
  text-decoration-line: underline;
}
.hover\\:no-underline:hover {
  text-decoration-line: none;
}
.hover\\:opacity-100:hover {
  opacity: 1;
}
.hover\\:shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\]:hover {
  --tw-shadow: 0 0 0 1px hsl(var(--sidebar-accent));
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.hover\\:ring-2:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.hover\\:ring-primary:hover {
  --tw-ring-color: var(--color-primary);
}
.hover\\:before\\:bg-bg-normal:hover::before {
  content: var(--tw-content);
  background-color: var(--bg-normal);
}
.hover\\:before\\:opacity-100:hover::before {
  content: var(--tw-content);
  opacity: 1;
}
.hover\\:after\\:bg-sidebar-border:hover::after {
  content: var(--tw-content);
  background-color: var(--border-all);
}
.focus\\:border-yellow-400\\/50:focus {
  border-color: rgb(250 204 21 / 0.5);
}
.focus\\:bg-accent:focus {
  background-color: var(--bg-base);
}
.focus\\:bg-bg-light:focus {
  background-color: var(--bg-light);
}
.focus\\:text-accent-foreground:focus {
  color: var(--text-dark);
}
.focus\\:\\!shadow-none:focus {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.focus\\:\\!outline-none:focus {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:outline:focus {
  outline-style: solid;
}
.focus\\:outline-2:focus {
  outline-width: 2px;
}
.focus\\:outline:focus {
  outline-color: var(--text-normal);
}
.focus\\:outline-primary:focus {
  outline-color: var(--color-primary);
}
.focus\\:\\!ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-\\[rgba\\(10\\2c 73\\2c 145\\2c 0\\.25\\)\\]:focus {
  --tw-ring-color: rgba(10,73,145,0.25);
}
.focus\\:ring-ring:focus {
  --tw-ring-color: var(--color-primary);
}
.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus-visible\\:ring-1:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-ring:focus-visible {
  --tw-ring-color: var(--color-primary);
}
.focus-visible\\:ring-sidebar-ring:focus-visible {
  --tw-ring-color: var(--color-primary);
}
.focus-visible\\:ring-offset-1:focus-visible {
  --tw-ring-offset-width: 1px;
}
.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:ring-offset-background:focus-visible {
  --tw-ring-offset-color: var(--bg-base);
}
.active\\:bg-sidebar-accent:active {
  background-color: var(--bg-light);
}
.active\\:text-sidebar-accent-foreground:active {
  color: var(--text-normal);
}
.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:bg-bg-light:disabled {
  background-color: var(--bg-light);
}
.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}
.group:focus-within .group-focus-within\\:visible {
  visibility: visible;
}
.group:focus-within .group-focus-within\\:flex {
  display: flex;
}
.group\\/menu-item:focus-within .group-focus-within\\/menu-item\\:opacity-100 {
  opacity: 1;
}
.group:focus-within .group-focus-within\\:opacity-100 {
  opacity: 1;
}
.group:hover .group-hover\\:flex {
  display: flex;
}
.group\\/ListItemView:hover .group-hover\\/ListItemView\\:text-primary {
  color: var(--color-primary);
}
.group\\/TopicListItemCard:hover .group-hover\\/TopicListItemCard\\:text-primary {
  color: var(--color-primary);
}
.group\\/menu-item:hover .group-hover\\/menu-item\\:opacity-100 {
  opacity: 1;
}
.peer:hover ~ .peer-hover\\:hidden {
  display: none;
}
.peer\\/menu-button:hover ~ .peer-hover\\/menu-button\\:text-sidebar-accent-foreground {
  color: var(--text-normal);
}
.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}
.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}
.has-\\[\\[data-variant\\=inset\\]\\]\\:bg-sidebar:has([data-variant=inset]) {
  background-color: var(--bg-light);
}
.aria-disabled\\:pointer-events-none[aria-disabled="true"] {
  pointer-events: none;
}
.aria-disabled\\:opacity-50[aria-disabled="true"] {
  opacity: 0.5;
}
.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}
.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction=vertical] {
  height: 1px;
}
.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction=vertical] {
  width: 100%;
}
.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=right\\]\\:translate-x-1[data-side=right] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=checked\\]\\:translate-x-5[data-state=checked] {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=unchecked] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction=vertical] {
  flex-direction: column;
}
.data-\\[active\\=true\\]\\:bg-sidebar-accent[data-active=true] {
  background-color: var(--bg-light);
}
.data-\\[state\\=active\\]\\:bg-background[data-state=active] {
  background-color: var(--bg-base);
}
.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked] {
  background-color: var(--color-primary);
}
.data-\\[state\\=open\\]\\:bg-accent[data-state=open] {
  background-color: var(--bg-base);
}
.data-\\[state\\=open\\]\\:bg-secondary[data-state=open] {
  background-color: var(--color-secondary);
}
.data-\\[state\\=selected\\]\\:bg-muted[data-state=selected] {
  background-color: var(--bg-site);
}
.data-\\[state\\=unchecked\\]\\:bg-input[data-state=unchecked] {
  background-color: var(--bg-light);
}
.data-\\[active\\=true\\]\\:font-medium[data-active=true] {
  font-weight: 500;
}
.data-\\[active\\=true\\]\\:text-sidebar-accent-foreground[data-active=true] {
  color: var(--text-normal);
}
.data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder] {
  color: var(--text-light);
}
.data-\\[state\\=active\\]\\:text-foreground[data-state=active] {
  color: var(--text-normal);
}
.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked] {
  color: var(--bg-base);
}
.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open] {
  color: var(--text-light);
}
.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}
.data-\\[state\\=open\\]\\:opacity-100[data-state=open] {
  opacity: 1;
}
.data-\\[state\\=active\\]\\:shadow-sm[data-state=active] {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  transition-duration: 300ms;
}
.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  transition-duration: 500ms;
}
.data-\\[state\\=open\\]\\:animate-in[data-state=open] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}
.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {
  --tw-exit-opacity: 0;
}
.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {
  --tw-enter-opacity: 0;
}
.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {
  --tw-exit-scale: .95;
}
.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {
  --tw-enter-scale: .95;
}
.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom] {
  --tw-enter-translate-y: -0.5rem;
}
.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left] {
  --tw-enter-translate-x: 0.5rem;
}
.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right] {
  --tw-enter-translate-x: -0.5rem;
}
.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top] {
  --tw-enter-translate-y: 0.5rem;
}
.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state=closed] {
  --tw-exit-translate-y: 100%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state=closed] {
  --tw-exit-translate-x: -100%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {
  --tw-exit-translate-x: -50%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state=closed] {
  --tw-exit-translate-x: 100%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state=closed] {
  --tw-exit-translate-y: -100%;
}
.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {
  --tw-exit-translate-y: -48%;
}
.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state=open] {
  --tw-enter-translate-y: 100%;
}
.data-\\[state\\=open\\]\\:slide-in-from-left[data-state=open] {
  --tw-enter-translate-x: -100%;
}
.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {
  --tw-enter-translate-x: -50%;
}
.data-\\[state\\=open\\]\\:slide-in-from-right[data-state=open] {
  --tw-enter-translate-x: 100%;
}
.data-\\[state\\=open\\]\\:slide-in-from-top[data-state=open] {
  --tw-enter-translate-y: -100%;
}
.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {
  --tw-enter-translate-y: -48%;
}
.data-\\[state\\=closed\\]\\:duration-300[data-state=closed] {
  animation-duration: 300ms;
}
.data-\\[state\\=open\\]\\:duration-500[data-state=open] {
  animation-duration: 500ms;
}
.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  left: 0px;
}
.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  height: 0.25rem;
}
.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  width: 100%;
}
.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction=vertical]::after {
  content: var(--tw-content);
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.data-\\[state\\=open\\]\\:hover\\:bg-sidebar-accent:hover[data-state=open] {
  background-color: var(--bg-light);
}
.data-\\[state\\=open\\]\\:hover\\:text-sidebar-accent-foreground:hover[data-state=open] {
  color: var(--text-normal);
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
  left: calc(var(--sidebar-width) * -1);
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\] {
  right: calc(var(--sidebar-width) * -1);
}
.group[data-side=left] .group-data-\\[side\\=left\\]\\:-right-4 {
  right: -1rem;
}
.group[data-side=right] .group-data-\\[side\\=right\\]\\:left-0 {
  left: 0px;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:-mt-8 {
  margin-top: -2rem;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:hidden {
  display: none;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:\\!size-8 {
  width: 2rem !important;
  height: 2rem !important;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[--sidebar-width-icon\\] {
  width: var(--sidebar-width-icon);
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)_\\+_theme\\(spacing\\.4\\)\\)\\] {
  width: calc(var(--sidebar-width-icon) + 1rem);
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)_\\+_theme\\(spacing\\.4\\)_\\+2px\\)\\] {
  width: calc(var(--sidebar-width-icon) + 1rem + 2px);
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:w-0 {
  width: 0px;
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-side=right] .group-data-\\[side\\=right\\]\\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:overflow-hidden {
  overflow: hidden;
}
.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:rounded-lg {
  border-radius: 0.5rem;
}
.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border {
  border-width: 1px;
}
.group[data-side=left] .group-data-\\[side\\=left\\]\\:border-r {
  border-right-width: 1px;
}
.group[data-side=right] .group-data-\\[side\\=right\\]\\:border-l {
  border-left-width: 1px;
}
.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:border-sidebar-border {
  border-color: var(--border-all);
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:\\!p-0 {
  padding: 0px !important;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:\\!p-2 {
  padding: 0.5rem !important;
}
.group[data-collapsible=icon] .group-data-\\[collapsible\\=icon\\]\\:opacity-0 {
  opacity: 0;
}
.group[data-variant=floating] .group-data-\\[variant\\=floating\\]\\:shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:left-full::after {
  content: var(--tw-content);
  left: 100%;
}
.group[data-collapsible=offcanvas] .group-data-\\[collapsible\\=offcanvas\\]\\:hover\\:bg-sidebar:hover {
  background-color: var(--bg-light);
}
.peer\\/menu-button[data-size=default] ~ .peer-data-\\[size\\=default\\]\\/menu-button\\:top-1\\.5 {
  top: 0.375rem;
}
.peer\\/menu-button[data-size=lg] ~ .peer-data-\\[size\\=lg\\]\\/menu-button\\:top-2\\.5 {
  top: 0.625rem;
}
.peer\\/menu-button[data-size=sm] ~ .peer-data-\\[size\\=sm\\]\\/menu-button\\:top-1 {
  top: 0.25rem;
}
.peer\\/menu-button[data-active=true] ~ .peer-data-\\[active\\=true\\]\\/menu-button\\:text-sidebar-accent-foreground {
  color: var(--text-normal);
}
@supports (anchor-name:none) {

  .supports-\\[anchor-name\\:none\\]\\:\\!border-transparent {
    border-color: transparent !important;
  }

  .supports-\\[anchor-name\\:none\\]\\:\\!bg-transparent {
    background-color: transparent !important;
  }

  .supports-\\[anchor-name\\:none\\]\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}
@media (prefers-reduced-motion: reduce) {

  .motion-reduce\\:transition-none {
    transition-property: none;
  }
}
:is(.dark .dark\\:border-destructive) {
  border-color: var(--bg-base);
}
:is(.dark .dark\\:border-lightest) {
  border-color: var(--text-lightest);
}
:is(.dark .dark\\:bg-blue-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-blue-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-gray-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-gray-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-gray-950) {
  --tw-bg-opacity: 1;
  background-color: rgb(3 7 18 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-green-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(6 95 70 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-red-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:bg-yellow-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(133 77 14 / var(--tw-bg-opacity));
}
:is(.dark .dark\\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 640px) {

  .sm\\:flex {
    display: flex;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-start {
    justify-content: flex-start;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-2 {
    gap: 0.5rem;
  }

  .sm\\:gap-2\\.5 {
    gap: 0.625rem;
  }

  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:text-left {
    text-align: left;
  }
}
@media (min-width: 768px) {

  .md\\:absolute {
    position: absolute;
  }

  .md\\:left-auto {
    left: auto;
  }

  .md\\:mx-6 {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mt-1 {
    margin-top: 0.25rem;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:inline-flex {
    display: inline-flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-full {
    height: 100%;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-24 {
    max-width: 6rem;
  }

  .md\\:max-w-\\[12\\.5rem\\] {
    max-width: 12.5rem;
  }

  .md\\:max-w-full {
    max-width: 100%;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:flex-wrap {
    flex-wrap: wrap;
  }

  .md\\:gap-2 {
    gap: 0.5rem;
  }

  .md\\:gap-x-4 {
    column-gap: 1rem;
  }

  .md\\:gap-y-2 {
    row-gap: 0.5rem;
  }

  .md\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\\:p-4 {
    padding: 1rem;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:pt-2 {
    padding-top: 0.5rem;
  }

  .md\\:pt-2\\.5 {
    padding-top: 0.625rem;
  }

  .md\\:text-sm {
    font-size: 0.9375rem;
    line-height: 1.25rem;
  }

  .md\\:opacity-0 {
    opacity: 0;
  }

  .after\\:md\\:hidden::after {
    content: var(--tw-content);
    display: none;
  }

  .peer[data-variant=inset] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:m-2 {
    margin: 0.5rem;
  }

  .peer[data-state=collapsed][data-variant=inset] ~ .md\\:peer-data-\\[state\\=collapsed\\]\\:peer-data-\\[variant\\=inset\\]\\:ml-2 {
    margin-left: 0.5rem;
  }

  .peer[data-variant=inset] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:ml-0 {
    margin-left: 0px;
  }

  .peer[data-state=expanded] ~ .md\\:peer-data-\\[state\\=expanded\\]\\:w-\\[calc\\(100\\%-var\\(--sidebar-width\\)\\)\\] {
    width: calc(100% - var(--sidebar-width));
  }

  .peer[data-variant=inset] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:rounded-xl {
    border-radius: 0.75rem;
  }

  .peer[data-variant=inset] ~ .md\\:peer-data-\\[variant\\=inset\\]\\:shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
@media (min-width: 1024px) {

  .lg\\:block {
    display: block;
  }

  .lg\\:flex {
    display: flex;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:w-64 {
    width: 16rem;
  }

  .lg\\:w-80 {
    width: 20rem;
  }

  .lg\\:w-96 {
    width: 24rem;
  }

  .lg\\:flex-1 {
    flex: 1 1 0%;
  }

  .lg\\:flex-none {
    flex: none;
  }

  .lg\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .lg\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }
}
.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]) {
  padding-right: 0px;
}
.\\[\\&\\:not\\(\\:disabled\\)\\:not\\(\\[readonly\\]\\)\\]\\:focus\\:border-primary:focus:not(:disabled):not([readonly]) {
  border-color: var(--color-primary);
}
.\\[\\&\\:not\\(\\:disabled\\)\\:not\\(\\[readonly\\]\\)\\]\\:focus\\:ring-2:focus:not(:disabled):not([readonly]) {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.\\[\\&\\:not\\(\\:disabled\\)\\]\\:focus\\:border-primary:focus:not(:disabled) {
  border-color: var(--color-primary);
}
.\\[\\&\\:not\\(\\:disabled\\)\\]\\:focus\\:ring-2:focus:not(:disabled) {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.\\[\\&\\>button\\]\\:hidden>button {
  display: none;
}
.\\[\\&\\>span\\:last-child\\]\\:truncate>span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.\\[\\&\\>span\\]\\:line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div {
  --tw-translate-y: -3px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\\[\\&\\>svg\\]\\:absolute>svg {
  position: absolute;
}
.\\[\\&\\>svg\\]\\:left-4>svg {
  left: 1rem;
}
.\\[\\&\\>svg\\]\\:top-4>svg {
  top: 1rem;
}
.\\[\\&\\>svg\\]\\:size-4>svg {
  width: 1rem;
  height: 1rem;
}
.\\[\\&\\>svg\\]\\:h-3\\.5>svg {
  height: 0.875rem;
}
.\\[\\&\\>svg\\]\\:w-3\\.5>svg {
  width: 0.875rem;
}
.\\[\\&\\>svg\\]\\:shrink-0>svg {
  flex-shrink: 0;
}
.\\[\\&\\>svg\\]\\:text-destructive-foreground>svg {
  color: var(--color-danger);
}
.\\[\\&\\>svg\\]\\:text-foreground>svg {
  color: var(--text-normal);
}
.\\[\\&\\>svg\\]\\:text-sidebar-accent-foreground>svg {
  color: var(--text-normal);
}
.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~* {
  padding-left: 1.75rem;
}
.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child>tr {
  border-bottom-width: 0px;
}
.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\\[\\&_p\\]\\:leading-relaxed p {
  line-height: 1.625;
}
.\\[\\&_svg\\]\\:pointer-events-none svg {
  pointer-events: none;
}
.\\[\\&_svg\\]\\:size-4 svg {
  width: 1rem;
  height: 1rem;
}
.\\[\\&_svg\\]\\:shrink-0 svg {
  flex-shrink: 0;
}
.\\[\\&_tbody_tr\\:first-child\\]\\:font-bold tbody tr:first-child {
  font-weight: 700;
}
.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {
  border-width: 0px;
}
.\\[\\&_tr\\]\\:border-b tr {
  border-bottom-width: 1px;
}
[data-side=left][data-collapsible=offcanvas] .\\[\\[data-side\\=left\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-right-2 {
  right: -0.5rem;
}
[data-side=left][data-state=collapsed] .\\[\\[data-side\\=left\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-e-resize {
  cursor: e-resize;
}
[data-side=left] .\\[\\[data-side\\=left\\]_\\&\\]\\:cursor-w-resize {
  cursor: w-resize;
}
[data-side=right][data-collapsible=offcanvas] .\\[\\[data-side\\=right\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-left-2 {
  left: -0.5rem;
}
[data-side=right][data-state=collapsed] .\\[\\[data-side\\=right\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-w-resize {
  cursor: w-resize;
}
[data-side=right] .\\[\\[data-side\\=right\\]_\\&\\]\\:cursor-e-resize {
  cursor: e-resize;
}
`,""]);const n=m},15171:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(8081),l=t.n(o),i=t(23645),a=t.n(i),m=a()(l());m.push([M.id,`.drawer {
  z-index: 30;
}

.drawer-handle {
  transition: left ease 0.3s;
}

:not(.drawer-open) .drawer-handle {
  left: 0;
}

.drawer-open .drawer-handle {
  left: -40px;

  @starting-style {
    left: 0;
  }
}
`,""]),m.locals={};const n=m},10744:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(8081),l=t.n(o),i=t(23645),a=t.n(i),m=a()(l());m.push([M.id,`.iconWrapper_F8AAa {
  padding: 8px;
  height: 56px;
  width: 56px;
  background: #d9534f;
  border-radius: 50%;
}
.iconWrapper_F8AAa svg {
  width: 40px;
  height: 40px;
  color: #fff;
  fill: currentColor;
}
`,""]),m.locals={iconWrapper:"iconWrapper_F8AAa"};const n=m},85929:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(8081),l=t.n(o),i=t(23645),a=t.n(i),m=a()(l());m.push([M.id,`.expandableContent_yVXQc {
  transition: max-height 0.3s;
  overflow: auto hidden;
  max-height: var(--height-threshold);
}
.expandableContent_yVXQc.expanded_Al1mV {
  max-height: max-content;
}
`,""]),m.locals={expandableContent:"expandableContent_yVXQc",expanded:"expanded_Al1mV"};const n=m},57792:(M,s,t)=>{"use strict";t.d(s,{Z:()=>l});var o=t(74272);const l=(0,o.iE)({packageConfig:{PTA_URL:navigator.userAgent.includes("OMSClient")?"https://pta-oms.pintia.cn":"https://pintia.cn",GPLT_EXAM_TYPE_ID:"1359419395582308352"},developmentConfig:{PTA_URL:navigator.userAgent.includes("OMSClient")?"https://pta-oms-dev.pintia.cn":"https://dev.pintia.cn",GPLT_EXAM_TYPE_ID:"1340953758086500352"}})},79195:(M,s,t)=>{"use strict";var o=t(98137),l=t(1973),i=t(31699),a=t(48994),m=t(18667),n=t(81869),v=t(62065),g=t(11335),_=t(11701),b=t(69958),z=(U,H,D)=>new Promise((Q,c0)=>{var h0=K=>{try{e0(D.next(K))}catch(s0){c0(s0)}},g0=K=>{try{e0(D.throw(K))}catch(s0){c0(s0)}},e0=K=>K.done?Q(K.value):Promise.resolve(K.value).then(h0,g0);e0((D=D.apply(U,H)).next())});const h=()=>{l.default.waitHandle=(U,H)=>{if(H!=null&&H.wait)return new Promise(D=>{(0,b.I)(D,H.wait)})},l.default.reloadHandle=(U,H)=>z(void 0,null,function*(){const D=(H==null?void 0:H.reload)||[];i.default.isAdmin||i.default.isTeacher?((0,a.setCache)({noCache:!0}),yield g.default.reload(D),(0,a.setCache)({noCache:!1})):yield g.default.reload(D)}),l.default.redirectHandle=(U,H)=>{if(H!=null&&H.redirect){const{redirect:D}=H;(0,b.I)(()=>{typeof D=="string"?m.default.push(D):typeof D=="function"&&m.default.push(D(U))},0)}},l.default.afterHandle=(U,H)=>{if(H!=null&&H.after){const{after:D}=H;(0,b.I)(()=>D(U),0)}},l.default.trackHandle=(U,H)=>{if(H!=null&&H.track){const{track:D}=H;typeof D=="string"?(0,n.logEvent)(D):(0,n.logEvent)(D.type,D)}},l.default.messageHandle=(U,H,D)=>{const Q=(0,_.getInitT)().message;(D==null?void 0:D.message)===!0?v.default.info(Q.operationSuccessHint):typeof(D==null?void 0:D.message)=="string"?v.default.info(D.message):typeof(D==null?void 0:D.message)=="function"&&v.default.info(D.message(U))},l.default.errorMessageHandle=(U,H,D)=>{U instanceof o._||(D==null?void 0:D.message)!==!1&&v.default.error(U==null?void 0:U.message)}};var k=t(49509),w=t(88253);function c(){k.p8.registerPlugin(w.L)}var p=t(62765),d=t(63570),u=(U,H,D)=>new Promise((Q,c0)=>{var h0=K=>{try{e0(D.next(K))}catch(s0){c0(s0)}},g0=K=>{try{e0(D.throw(K))}catch(s0){c0(s0)}},e0=K=>K.done?Q(K.value):Promise.resolve(K.value).then(h0,g0);e0((D=D.apply(U,H)).next())});function f(){return u(this,null,function*(){_.default.language==="zh-CN"&&p.Z.locale("zh-cn"),yield _.default.loadTranslation()})}var C=t(87854),e=t.n(C),y=t(95348),r=t.n(y),A=new(e())({id:"pat-abnormal",use:"pat-abnormal-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-abnormal">
  <path d="M10,21h-5V3h14v5.2c0,.6.4,1,1,1s1-.4,1-1V3c0-1.1-.9-2-2-2H5c-1.1,0-2,.9-2,2v18c0,1.1.9,2,2,2h5c.6,0,1-.4,1-1s-.4-1-1-1Z" />
  <path d="M15.5,7c0-.6-.4-1-1-1h-6.5c-.6,0-1,.4-1,1s.4,1,1,1h6.5c.6,0,1-.4,1-1Z" />
  <path d="M8,9.5c-.6,0-1,.4-1,1s.4,1,1,1h2.5c.6,0,1-.4,1-1s-.4-1-1-1h-2.5Z" />
  <path d="M17,11c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM17,21c-2.2,0-4-1.8-4-4s1.8-4,4-4,4,1.8,4,4-1.8,4-4,4Z" />
  <path d="M17,17c-.6,0-1,.4-1,1v1.5c0,.6.4,1,1,1s1-.4,1-1v-1.5c0-.6-.4-1-1-1Z" />
  <circle cx="17" cy="15" r="1" />
</symbol>`}),T=r().add(A);const V=A;var N=new(e())({id:"pat-add-blank-block",use:"pat-add-blank-block-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-add-blank-block">
<path d="M8.7,10.7v-2h2c0.4,0,0.7-0.3,0.7-0.7S11,7.3,10.7,7.3h-2v-2C8.7,5,8.4,4.7,8,4.7S7.3,5,7.3,5.3v2h-2
	C5,7.3,4.7,7.6,4.7,8S5,8.7,5.3,8.7h2v2c0,0.4,0.3,0.7,0.7,0.7S8.7,11,8.7,10.7z" />
<path d="M14,6.3c-0.4,0-0.7,0.3-0.7,0.7v2c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V7C14.7,6.6,14.4,6.3,14,6.3z" />
<path d="M2,9.7c0.4,0,0.7-0.3,0.7-0.7V7c0-0.4-0.3-0.7-0.7-0.7S1.3,6.6,1.3,7v2C1.3,9.4,1.6,9.7,2,9.7z" />
<path d="M2,5.3c0.4,0,0.7-0.3,0.7-0.7v-2h2C5,2.7,5.3,2.4,5.3,2S5,1.3,4.7,1.3h-2c-0.7,0-1.3,0.6-1.3,1.3v2
	C1.3,5,1.6,5.3,2,5.3z" />
<path d="M11.3,2.7h2v2c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-2c0-0.7-0.6-1.3-1.3-1.3h-2c-0.4,0-0.7,0.3-0.7,0.7
	S11,2.7,11.3,2.7z" />
<path d="M4.7,13.3h-2v-2c0-0.4-0.3-0.7-0.7-0.7S1.3,11,1.3,11.3v2c0,0.7,0.6,1.3,1.3,1.3h2c0.4,0,0.7-0.3,0.7-0.7
	S5,13.3,4.7,13.3z" />
<path d="M7,2.7h2c0.4,0,0.7-0.3,0.7-0.7S9.4,1.3,9,1.3H7C6.6,1.3,6.3,1.6,6.3,2S6.6,2.7,7,2.7z" />
<path d="M15,12.7h-4.4l0.9-0.9c0.3-0.3,0.3-0.7,0-0.9c-0.3-0.3-0.7-0.3-0.9,0l-2,2l0,0c-0.1,0.1-0.1,0.1-0.1,0.2
	c-0.1,0.2-0.1,0.3,0,0.5c0,0.1,0.1,0.2,0.1,0.2l0,0l2,2c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L10.6,14H15
	c0.4,0,0.7-0.3,0.7-0.7S15.4,12.7,15,12.7z" />
</symbol>`}),F=r().add(N);const L=N;var B=new(e())({id:"pat-add-blank-inline",use:"pat-add-blank-inline-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-add-blank-inline">
<path d="M7.3,10.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-2h2c0.4,0,0.7-0.3,0.7-0.7S11,7.3,10.7,7.3h-2v-2
	C8.7,5,8.4,4.7,8,4.7S7.3,5,7.3,5.3v2h-2C5,7.3,4.7,7.6,4.7,8S5,8.7,5.3,8.7h2V10.7z" />
<path d="M14,6.3c-0.4,0-0.7,0.3-0.7,0.7v2c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V7C14.7,6.6,14.4,6.3,14,6.3z" />
<path d="M2,9.7c0.4,0,0.7-0.3,0.7-0.7V7c0-0.4-0.3-0.7-0.7-0.7S1.3,6.6,1.3,7v2C1.3,9.4,1.6,9.7,2,9.7z" />
<path d="M2,5.3c0.4,0,0.7-0.3,0.7-0.7v-2h2C5,2.7,5.3,2.4,5.3,2S5,1.3,4.7,1.3h-2c-0.7,0-1.3,0.6-1.3,1.3v2
	C1.3,5,1.6,5.3,2,5.3z" />
<path d="M13.3,1.3h-2c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h2v2c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-2
	C14.7,1.9,14.1,1.3,13.3,1.3z" />
<path d="M14,10.7c-0.4,0-0.7,0.3-0.7,0.7v2h-2c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h2c0.7,0,1.3-0.6,1.3-1.3v-2
	C14.7,11,14.4,10.7,14,10.7z" />
<path d="M4.7,13.3h-2v-2c0-0.4-0.3-0.7-0.7-0.7S1.3,11,1.3,11.3v2c0,0.7,0.6,1.3,1.3,1.3h2c0.4,0,0.7-0.3,0.7-0.7
	S5,13.3,4.7,13.3z" />
<path d="M7,2.7h2c0.4,0,0.7-0.3,0.7-0.7S9.4,1.3,9,1.3H7C6.6,1.3,6.3,1.6,6.3,2S6.6,2.7,7,2.7z" />
<path d="M9,13.3H7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h2c0.4,0,0.7-0.3,0.7-0.7S9.4,13.3,9,13.3z" />
</symbol>`}),P=r().add(B);const R=B;var S=new(e())({id:"pat-add",use:"pat-add-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-add">
    <g>
	<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v10c0,0.92,0.75,1.67,1.67,1.67h10c0.92,0,1.67-0.75,1.67-1.67V3
		C14.67,2.08,13.92,1.33,13,1.33z M13.33,13c0,0.18-0.15,0.33-0.33,0.33H3c-0.18,0-0.33-0.15-0.33-0.33V3
		c0-0.18,0.15-0.33,0.33-0.33h10c0.18,0,0.33,0.15,0.33,0.33V13z" />
        <path d="M10.67,7.33h-2v-2c0-0.37-0.3-0.67-0.67-0.67s-0.67,0.3-0.67,0.67v2h-2c-0.37,0-0.67,0.3-0.67,0.67
		s0.3,0.67,0.67,0.67h2v2c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-2h2c0.37,0,0.67-0.3,0.67-0.67S11.04,7.33,10.67,7.33z" />
</g>
</symbol>`}),I=r().add(S);const j=S;var W=new(e())({id:"pat-alert",use:"pat-alert-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-alert">
<g>
	<path d="M13.19,2.81C11.8,1.43,9.96,0.67,8,0.67c-1.96,0-3.8,0.76-5.19,2.15C1.43,4.2,0.67,6.04,0.67,8
		c0,1.96,0.76,3.8,2.15,5.19C4.2,14.57,6.04,15.33,8,15.33c1.96,0,3.8-0.76,5.19-2.15S15.33,9.96,15.33,8
		C15.33,6.04,14.57,4.2,13.19,2.81z M12.24,12.24C11.11,13.38,9.6,14,8,14c-1.6,0-3.11-0.62-4.24-1.76C2.62,11.11,2,9.6,2,8
		c0-1.6,0.62-3.11,1.76-4.24C4.89,2.62,6.4,2,8,2c1.6,0,3.11,0.62,4.24,1.76C13.38,4.89,14,6.4,14,8C14,9.6,13.38,11.11,12.24,12.24
		z" />
	<circle cx="8" cy="11.5" r="0.83" />
	<path d="M8,10c0.37,0,0.67-0.3,0.67-0.67V4c0-0.37-0.3-0.67-0.67-0.67S7.33,3.63,7.33,4v5.33C7.33,9.7,7.63,10,8,10z" />
</g>
</symbol>`}),t0=r().add(W);const q=W;var Y=new(e())({id:"pat-all-application",use:"pat-all-application-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-all-application">
<title>all-application</title>
<path d="M5.601 0h-4c-0.884 0.001-1.6 0.717-1.601 1.601v4c0.001 0.883 0.717 1.599 1.601 1.6h4c0.883-0.001 1.598-0.717 1.6-1.6v-4c-0.001-0.883-0.716-1.599-1.6-1.601h-0zM5.601 5.601h-4v-4h4z" />
<path d="M5.601 8.801h-4c-0.883 0.001-1.599 0.716-1.601 1.6v4c0.001 0.884 0.717 1.599 1.601 1.601h4c0.883-0.001 1.599-0.717 1.6-1.601v-4c-0.001-0.883-0.717-1.598-1.6-1.6h-0zM5.601 14.4h-4v-4h4z" />
<path d="M14.4 0h-4c-0.883 0.001-1.599 0.717-1.6 1.601v4c0.001 0.883 0.717 1.598 1.6 1.6h4c0.883-0.001 1.599-0.716 1.601-1.6v-4c-0.001-0.884-0.717-1.599-1.601-1.601h-0zM14.4 5.601h-4v-4h4z" />
<path d="M14.4 8.801h-4c-0.883 0.001-1.598 0.717-1.6 1.6v4c0.001 0.883 0.716 1.599 1.6 1.601h4c0.884-0.001 1.599-0.717 1.601-1.601v-4c-0.001-0.883-0.717-1.599-1.601-1.6h-0zM14.4 14.4h-4v-4h4z" />
</symbol>`}),X=r().add(Y);const i0=Y;var l0=new(e())({id:"pat-announcement",use:"pat-announcement-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-announcement">
<g>
	<path d="M14,4.33h-3.06L8.47,1.86c-0.25-0.25-0.69-0.25-0.94,0L5.06,4.33H2c-0.74,0-1.33,0.6-1.33,1.33V13
		c0,0.73,0.6,1.33,1.33,1.33h12c0.74,0,1.33-0.6,1.33-1.33V5.67C15.33,4.93,14.74,4.33,14,4.33z M8,3.28l1.06,1.06H6.94L8,3.28z
		 M2,5.67L2,5L2,5.67C2,5.67,2,5.67,2,5.67z M14,13L2,13l0-7.33h3.33h5.33H14V13z" />
	<path d="M10,7.33H4c-0.37,0-0.67,0.3-0.67,0.67S3.63,8.67,4,8.67h6c0.37,0,0.67-0.3,0.67-0.67S10.37,7.33,10,7.33z" />
	<path d="M6.67,10H4c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h2.67c0.37,0,0.67-0.3,0.67-0.67S7.03,10,6.67,10z" />
</g>
</symbol>`}),G=r().add(l0);const J=l0;var r0=new(e())({id:"pat-apple",use:"pat-apple-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-apple"><path d="M791.49604 544.088185c-1.293991-129.681091 105.757258-191.874655 110.541225-194.964633-60.151578-88.019383-153.848921-100.077298-187.240687-101.471288-79.741441-8.073943-155.594909 46.947671-196.064625 46.94767-40.367717 0-102.817279-45.753679-168.950816-44.551687-86.915391 1.291991-167.056829 50.537646-211.810514 128.3791-90.303367 156.696901-23.125838 388.837274 64.889545 515.922382 43.007698 62.203564 94.291339 132.075074 161.624866 129.579091 64.841545-2.587982 89.361373-41.957706 167.754824-41.957705s100.427296 41.957706 169.048815 40.669715c69.773511-1.295991 113.981201-63.397555 156.690901-125.795118 49.389654-72.167494 69.725511-142.037004 70.923503-145.624979-1.547989-0.705995-136.059046-52.235634-137.407037-207.132548zM662.560944 163.520853C698.298694 120.163157 722.420525 60.009579 715.840571 0c-51.477639 2.095985-113.877202 34.28976-150.808943 77.549456-33.141768 38.375731-62.147564 99.625301-54.373619 158.434889 57.465597 4.483969 116.127186-29.203795 151.902935-72.463492z" p-id="7859" /></symbol>'}),p0=r().add(r0);const C0=r0;var w0=new(e())({id:"pat-audit",use:"pat-audit-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-audit">
  <path d="M19.5,12.5h-4.4c0-.1,0-.2,0-.4,0-.1.3-.4.5-.6.8-.8,1.9-2.1,1.9-4.6,0-4-2.8-5.4-5.4-5.4s-5.6,1.4-5.6,5.4,1.3,4,2,4.8c.1.2.3.4.4.5,0,0,0,.2,0,.3h-4.5c-.8,0-1.5.7-1.5,1.5v4c0,.3.1.5.3.7.2.2.4.3.7.3h16c.6,0,1-.4,1-1v-4c0-.8-.7-1.5-1.5-1.5ZM19,17H5v-2.5h4.5c.7,0,1.2-.4,1.4-1.1,0-.3,0-.7,0-1.3s-.5-1.3-.9-1.8c-.7-.7-1.5-1.6-1.5-3.5,0-3,2.3-3.4,3.6-3.4s3.4.6,3.4,3.4-.7,2.5-1.4,3.2c-.5.5-1,1.1-1,2,0,1.2,0,2.4,1.4,2.4h4.5v2.5Z" />
  <path d="M20,20H4c-.6,0-1,.4-1,1s.4,1,1,1h16c.6,0,1-.4,1-1s-.4-1-1-1Z" />
</symbol>`}),f0=r().add(w0);const x0=w0;var y0=new(e())({id:"pat-balloon-fill",use:"pat-balloon-fill-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-balloon-fill">
  <path d="M12.9,14.9s0,0,0,0c2-.6,4.5-3.1,5-6.7.3-2.3-.1-4.1-1.2-5.3-1-1.2-2.7-1.8-4.7-1.8s-3.6.7-4.7,2c-1.1,1.3-1.6,3.1-1.3,5.2.4,2.9,2.5,5.3,4.3,6.3-.7.8-1.3,1.9-1.3,3,0,1.6,1.9,1.9,3.4,2.1.4,0,1,.1,1.4.2-.7.4-2.6.9-4.4,1.1-.5,0-.9.6-.9,1.1,0,.5.5.9,1,.9s0,0,.1,0c2.4-.3,6.4-1.1,6.4-3.2s-1.9-1.9-3.4-2.1c-.5,0-1.3-.2-1.6-.3.1-1,1.2-2,1.9-2.4Z" />
</symbol>`}),E0=r().add(y0);const v0=y0;var u0=new(e())({id:"pat-balloon",use:"pat-balloon-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-balloon">
<path d="M8.62,9.93C8.65,9.92,8.66,9.9,8.68,9.89c1.36-0.41,3.01-2.03,3.31-4.47c0.19-1.52-0.09-2.71-0.83-3.55
	c-0.69-0.79-1.77-1.2-3.12-1.2c-1.3,0-2.42,0.47-3.16,1.32c-0.76,0.87-1.07,2.1-0.88,3.44c0.28,1.95,1.65,3.54,2.88,4.22
	C6.39,10.19,6,10.9,6,11.67c0,1.1,1.24,1.28,2.24,1.42c0.27,0.04,0.65,0.09,0.92,0.17c-0.49,0.28-1.72,0.61-2.9,0.75
	c-0.37,0.04-0.63,0.38-0.58,0.74c0.04,0.34,0.33,0.59,0.66,0.59c0.03,0,0.05,0,0.08,0c1.59-0.19,4.25-0.73,4.25-2.14
	c0-1.09-1.24-1.27-2.24-1.42c-0.33-0.05-0.86-0.12-1.09-0.22C7.42,10.89,8.12,10.18,8.62,9.93z M5.33,5.24
	c-0.14-0.96,0.06-1.8,0.56-2.38C6.38,2.3,7.12,2,8.04,2c0.97,0,1.69,0.25,2.12,0.75c0.47,0.54,0.64,1.38,0.5,2.5v0
	c-0.3,2.37-2.02,3.42-2.63,3.42C7.47,8.67,5.62,7.32,5.33,5.24z" />
</symbol>`}),M0=r().add(u0);const _0=u0;var k0=new(e())({id:"pat-bank-card",use:"pat-bank-card-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-bank-card">
  <path d="M21,3H3c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2ZM21,5v2H3v-2h18ZM21,19H3v-10h18v10Z" />
  <path d="M18,15h-4.5c-.6,0-1,.4-1,1s.4,1,1,1h4.5c.6,0,1-.4,1-1s-.4-1-1-1Z" />
</symbol>`}),I0=r().add(k0);const H0=k0;var D0=new(e())({id:"pat-bank",use:"pat-bank-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bank">
<g>
	<path d="M14.8,6.86L13.14,5.2c0,0,0,0-0.01-0.01l-0.02-0.02L8.45,0.84c-0.26-0.24-0.65-0.24-0.91,0L2.86,5.19
		c0,0,0,0,0,0L1.2,6.86c-0.26,0.26-0.26,0.68,0,0.94c0.26,0.26,0.68,0.26,0.94,0l0.53-0.53v7.39c0,0.37,0.3,0.67,0.67,0.67h9.33
		c0.37,0,0.67-0.3,0.67-0.67V7.28l0.53,0.53c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.19C15.06,7.54,15.06,7.12,14.8,6.86z
		 M4,14V5.96l4-3.71l4,3.71V14H4z" />
	<path d="M10,9c0.37,0,0.67-0.3,0.67-0.67S10.37,7.67,10,7.67H9.42l0.76-0.91c0.24-0.28,0.2-0.7-0.08-0.94
		c-0.28-0.24-0.7-0.2-0.94,0.09L8,7.29L6.85,5.91C6.61,5.62,6.19,5.59,5.91,5.82C5.62,6.06,5.59,6.48,5.82,6.76l0.76,0.91H6
		c-0.37,0-0.67,0.3-0.67,0.67S5.63,9,6,9h1.33v0.67H6c-0.37,0-0.67,0.3-0.67,0.67S5.63,11,6,11h1.33v1.33C7.33,12.7,7.63,13,8,13
		s0.67-0.3,0.67-0.67V11H10c0.37,0,0.67-0.3,0.67-0.67S10.37,9.67,10,9.67H8.67V9H10z" />
</g>
</symbol>`}),W0=r().add(D0);const V0=D0;var z0=new(e())({id:"pat-banned",use:"pat-banned-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-banned">
    <path d="M8,.7C4,.7.7,4,.7,8s3.3,7.3,7.3,7.3,7.3-3.3,7.3-7.3S12,.7,8,.7ZM8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6,6,2.7,6,6-2.7,6-6,6Z" />
    <path d="M5.5,4.5c-.3-.3-.7-.3-.9,0-.3.3-.3.7,0,.9l6,6c.1.1.3.2.5.2s.3,0,.5-.2c.3-.3.3-.7,0-.9l-6-6Z" />
</symbol>`}),x=r().add(z0);const E=z0;var O=new(e())({id:"pat-bell-fill",use:"pat-bell-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bell-fill">
<path d="M14.67,12h-1.33V6c0-2.94-2.39-5.33-5.33-5.33C5.06,0.67,2.67,3.06,2.67,6v6H1.33c-0.37,0-0.67,0.3-0.67,0.67
	s0.3,0.67,0.67,0.67H5.7c0.16,1.13,1.13,2,2.3,2c1.17,0,2.14-0.87,2.3-2h4.37c0.37,0,0.67-0.3,0.67-0.67S15.04,12,14.67,12z" />
</symbol>`}),$=r().add(O);const o0=O;var d0=new(e())({id:"pat-bell-off",use:"pat-bell-off-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bell-off">
<g>
	<path d="M14.43,12.16c-0.02-0.02-1.76-1.58-1.76-5.83c0-2.12-1.42-3.89-3.36-4.46C9.24,1.2,8.69,0.67,8,0.67
		c-0.69,0-1.23,0.52-1.3,1.19C6.22,2,5.76,2.21,5.34,2.5c-0.3,0.21-0.38,0.63-0.17,0.93C5.38,3.73,5.8,3.8,6.1,3.59
		C6.66,3.2,7.32,3,8,3c1.84,0,3.33,1.5,3.33,3.33c0,4.92,2.15,6.77,2.24,6.85c0.12,0.1,0.27,0.15,0.42,0.15
		c0.19,0,0.38-0.08,0.51-0.24C14.74,12.82,14.71,12.4,14.43,12.16z" />
	<path d="M2.83,1.72c-0.25-0.28-0.67-0.3-0.94-0.05c-0.27,0.25-0.3,0.67-0.05,0.94l8.48,9.48
		C10.22,12.04,10.12,12,10,12H6H3.35c0.58-0.98,1.23-2.63,1.31-5.15c0.01-0.37-0.28-0.68-0.65-0.69C3.63,6.15,3.34,6.44,3.33,6.81
		c-0.12,3.88-1.74,5.33-1.75,5.34c-0.22,0.18-0.3,0.47-0.2,0.74c0.1,0.26,0.35,0.44,0.63,0.44h3.43c0.3,1.15,1.33,2,2.57,2
		c1.47,0,2.67-1.2,2.67-2.67c0-0.09-0.02-0.17-0.05-0.24l2.55,2.85c0.13,0.15,0.31,0.22,0.5,0.22c0.16,0,0.32-0.06,0.44-0.17
		c0.27-0.25,0.3-0.67,0.05-0.94L2.83,1.72z M8,14c-0.49,0-0.92-0.27-1.15-0.67h2.31C8.92,13.73,8.49,14,8,14z" />
</g>
</symbol>`}),m0=r().add(d0);const a0=d0;var n0=new(e())({id:"pat-bell",use:"pat-bell-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bell">
<path d="M14.67,12h-1.33V6c0-2.94-2.39-5.33-5.33-5.33C5.06,0.67,2.67,3.06,2.67,6v6H1.33c-0.37,0-0.67,0.3-0.67,0.67
	s0.3,0.67,0.67,0.67H5.7c0.16,1.13,1.13,2,2.3,2c1.17,0,2.14-0.87,2.3-2h4.37c0.37,0,0.67-0.3,0.67-0.67S15.04,12,14.67,12z M8,14
	c-0.43,0-0.81-0.28-0.94-0.67h1.89C8.81,13.72,8.44,14,8,14z M12,12H9.67H6.33H4V6c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4V12z" />
</symbol>`}),B0=r().add(n0);const b0=n0;var T0=new(e())({id:"pat-bold",use:"pat-bold-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bold">
<path d="M10.7,7.6C11.5,6.9,12,5.8,12,4.7c0-2.2-1.8-4-4-4H3.7C3.3,0.7,3,1,3,1.3V8v6.7c0,0.4,0.3,0.7,0.7,0.7h5.7
	c2.2,0,4-1.8,4-4C13.3,9.6,12.2,8.1,10.7,7.6z M4.3,2H8c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7H4.3V2z M9.3,14h-5V8.7H8h1.3
	c1.5,0,2.7,1.2,2.7,2.7S10.8,14,9.3,14z" />
</symbol>`}),As=r().add(T0);const Lo=T0;var $0=new(e())({id:"pat-bookshelf",use:"pat-bookshelf-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bookshelf">
    <path d="M13,7.3H1.7C1.4,7.3,1.1,7.1,1,6.8C0.9,6.5,1.1,6.2,1.4,6.1c0,0,1-0.5,1-1.7c0-1.2-0.9-1.7-1-1.7
	C1.1,2.5,0.9,2.1,1,1.8c0.1-0.3,0.3-0.5,0.6-0.5H13c0.1,0,0.2,0,0.3,0.1c0.1,0,1.7,0.9,1.7,2.9c0,2.1-1.6,2.9-1.7,2.9
	C13.2,7.3,13.1,7.3,13,7.3z M3.2,6h9.6c0.3-0.2,0.9-0.7,0.9-1.7c0-1-0.6-1.5-0.9-1.7H3.2c0.2,0.4,0.4,1,0.4,1.7C3.7,5,3.5,5.6,3.2,6
	z" />
    <path d="M14.3,14.7H3c-0.1,0-0.2,0-0.3-0.1c-0.1,0-1.7-0.9-1.7-2.9c0-2.1,1.6-2.9,1.7-2.9c0.1,0,0.2-0.1,0.3-0.1h11.3
	c0.3,0,0.6,0.2,0.6,0.5c0.1,0.3-0.1,0.6-0.3,0.7c-0.1,0-1,0.5-1,1.7c0,1.2,1,1.7,1,1.7c0.3,0.1,0.4,0.4,0.4,0.8
	C14.9,14.5,14.6,14.7,14.3,14.7z M3.2,13.3h9.6c-0.2-0.4-0.4-1-0.4-1.7c0-0.7,0.2-1.2,0.4-1.7H3.2c-0.3,0.2-0.9,0.7-0.9,1.7
	C2.3,12.6,2.9,13.2,3.2,13.3z" />
</symbol>`}),Is=r().add($0);const Oo=$0;var G0=new(e())({id:"pat-bug",use:"pat-bug-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-bug">
<path d="M14.67,8.33h-1.33V4.94l1.8-1.8c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L12.39,4h-1.07
	C11.26,2.15,9.8,0.67,8,0.67S4.74,2.15,4.68,4H3.61L1.8,2.2c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l1.8,1.8v3.39
	H1.33c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h1.35C2.73,10.49,3,11.53,3.6,12.46l-1.74,1.74c-0.26,0.26-0.26,0.68,0,0.94
	c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l1.66-1.66c0.43,0.38,0.97,0.69,1.6,0.9c0.02,0.01,0.05,0.01,0.07,0.02
	c0.23,0.07,0.48,0.13,0.75,0.18c0.06,0.01,0.13,0.02,0.2,0.03c0.29,0.04,0.59,0.07,0.91,0.07c0.33,0,0.63-0.03,0.92-0.07
	c0.07-0.01,0.14-0.02,0.21-0.03c0.26-0.04,0.5-0.1,0.73-0.17c0.03-0.01,0.07-0.02,0.1-0.03c0.28-0.1,0.55-0.21,0.79-0.34
	c0.01,0,0.02-0.01,0.02-0.01c0.28-0.16,0.54-0.33,0.77-0.53l1.66,1.66c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2
	c0.26-0.26,0.26-0.68,0-0.94l-1.74-1.74c0.6-0.92,0.86-1.97,0.92-2.79h1.35c0.37,0,0.67-0.3,0.67-0.67S15.04,8.33,14.67,8.33z
	 M12,9.33c0,0.12-0.03,2.09-1.47,3.22c-0.11,0.09-0.23,0.17-0.36,0.24c-0.06,0.04-0.13,0.07-0.2,0.11
	c-0.11,0.06-0.23,0.11-0.36,0.15c-0.07,0.03-0.15,0.06-0.23,0.08c-0.14,0.04-0.29,0.07-0.45,0.1c-0.07,0.01-0.13,0.03-0.21,0.04
	c-0.02,0-0.04,0-0.07,0V5.33h2H12V9.33z M7.09,13.25c-0.16-0.03-0.33-0.06-0.48-0.11c-0.07-0.02-0.12-0.04-0.19-0.07
	c-0.14-0.05-0.28-0.11-0.41-0.17c-0.05-0.03-0.1-0.05-0.15-0.08c-0.15-0.09-0.3-0.19-0.44-0.3C4.03,11.39,4,9.45,4,9.33v-4h1.33h2
	v7.95c-0.02,0-0.04,0-0.06,0C7.2,13.27,7.15,13.26,7.09,13.25z M8,2c1.07,0,1.94,0.89,2,2H6C6.06,2.89,6.93,2,8,2z" />
</symbol>`}),Vs=r().add(G0);const So=G0;var X0=new(e())({id:"pat-building",use:"pat-building-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-building">
    <path d="M8.3,15.3H3.7C3.3,15.3,3,15,3,14.7v-10c0-0.2,0.1-0.4,0.3-0.5l4.7-3.3c0.2-0.1,0.5-0.2,0.7-0.1
	C8.9,0.9,9,1.1,9,1.3v13.3C9,15,8.7,15.3,8.3,15.3z M4.3,14h3.3V2.6L4.3,5V14z" />
    <path d="M13,15.3c-0.4,0-0.7-0.3-0.7-0.7V8L7.9,4.9C7.6,4.7,7.6,4.2,7.8,3.9C8,3.6,8.4,3.6,8.7,3.8l4.7,3.3
	c0.2,0.1,0.3,0.3,0.3,0.5v7C13.7,15,13.4,15.3,13,15.3z" />
    <path d="M14.7,15.3H1.3c-0.4,0-0.7-0.3-0.7-0.7S1,14,1.3,14h13.3c0.4,0,0.7,0.3,0.7,0.7S15,15.3,14.7,15.3z" />
</symbol>`}),Us=r().add(X0);const Ho=X0;var Y0=new(e())({id:"pat-calendar",use:"pat-calendar-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-calendar">
<g>
	<path d="M13.67,1.67h-2.33V1.33c0-0.37-0.3-0.67-0.67-0.67S10,0.97,10,1.33v0.33H6V1.33c0-0.37-0.3-0.67-0.67-0.67
		s-0.67,0.3-0.67,0.67v0.33H2.33C1.6,1.67,1,2.26,1,3v3.33v7c0,0.74,0.6,1.33,1.33,1.33h11.33c0.73,0,1.33-0.6,1.33-1.33v-7V3
		C15,2.26,14.4,1.67,13.67,1.67z M2.33,3h2.33v1c0,0.37,0.3,0.67,0.67,0.67S6,4.37,6,4V3h4v1c0,0.37,0.3,0.67,0.67,0.67
		s0.67-0.3,0.67-0.67V3h2.33v2.67H2.33V3z M2.33,13.33V7h11.33l0,6.33H2.33z" />
	<path d="M11.33,10.67h-2c-0.37,0-0.67,0.3-0.67,0.67S8.96,12,9.33,12h2C11.7,12,12,11.7,12,11.33
		S11.7,10.67,11.33,10.67z" />
	<path d="M6.67,10.67h-2C4.3,10.67,4,10.96,4,11.33S4.3,12,4.67,12h2c0.37,0,0.67-0.3,0.67-0.67S7.03,10.67,6.67,10.67z
		" />
	<path d="M11.33,8h-2C8.96,8,8.67,8.3,8.67,8.67c0,0.37,0.3,0.67,0.67,0.67h2c0.37,0,0.67-0.3,0.67-0.67
		C12,8.3,11.7,8,11.33,8z" />
	<path d="M6.67,8h-2C4.3,8,4,8.3,4,8.67c0,0.37,0.3,0.67,0.67,0.67h2c0.37,0,0.67-0.3,0.67-0.67C7.33,8.3,7.03,8,6.67,8
		z" />
</g>
</symbol>`}),Ns=r().add(Y0);const Do=Y0;var J0=new(e())({id:"pat-calling",use:"pat-calling-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-calling">
<g>
	<path d="M14.49,5.01c-0.22-0.87-0.67-1.67-1.31-2.31c-0.64-0.64-1.44-1.1-2.32-1.31c-0.64-0.16-1.3-0.19-1.96-0.1
		C8.54,1.34,8.28,1.68,8.34,2.04C8.39,2.4,8.74,2.66,9.1,2.6c0.49-0.07,0.97-0.05,1.44,0.07c0.64,0.16,1.23,0.49,1.7,0.96
		c0.47,0.47,0.8,1.06,0.96,1.7c0.12,0.47,0.14,0.96,0.07,1.44c-0.05,0.36,0.2,0.7,0.56,0.76c0.03,0.01,0.07,0.01,0.1,0.01
		c0.32,0,0.61-0.24,0.66-0.57C14.68,6.31,14.65,5.65,14.49,5.01z" />
	<path d="M11.3,7.26c0.03,0,0.07,0.01,0.1,0.01c0.33,0,0.61-0.24,0.66-0.57c0.12-0.83-0.16-1.69-0.75-2.28
		S9.86,3.54,9.02,3.67C8.66,3.72,8.41,4.06,8.46,4.42c0.05,0.36,0.4,0.62,0.76,0.56c0.42-0.06,0.84,0.07,1.14,0.38
		c0.3,0.3,0.44,0.72,0.38,1.14C10.68,6.87,10.93,7.21,11.3,7.26z" />
	<path d="M12.71,9.7l-1.47-0.82c-0.38-0.21-0.85-0.22-1.24-0.03L8.64,9.53c-0.33-0.1-1-0.37-1.57-0.94
		C6.5,8.02,6.23,7.34,6.13,7.01L6.8,5.66C7,5.27,6.99,4.8,6.77,4.42L5.96,2.95C5.72,2.53,5.28,2.27,4.79,2.27H3.1
		c-0.63,0-1.23,0.3-1.59,0.81C1.16,3.56,1.07,4.18,1.26,4.76c0.64,1.88,1.75,4.48,3.45,6.18c1.7,1.7,4.3,2.82,6.19,3.45
		c0.2,0.07,0.41,0.1,0.61,0.1c0.38,0,0.76-0.12,1.08-0.35c0.5-0.36,0.8-0.96,0.8-1.59v-1.69C13.39,10.38,13.13,9.94,12.71,9.7z
		 M12.06,12.56c0,0.21-0.09,0.39-0.25,0.51c-0.08,0.06-0.26,0.15-0.49,0.07C9.89,12.65,7.25,11.6,5.66,10
		c-1.6-1.6-2.65-4.24-3.13-5.67C2.45,4.1,2.53,3.93,2.59,3.85C2.71,3.69,2.89,3.6,3.1,3.6h1.69l0.82,1.47L4.82,6.64
		C4.76,6.77,4.74,6.92,4.76,7.06c0.01,0.06,0.28,1.38,1.36,2.47c1.08,1.08,2.41,1.35,2.47,1.36c0.14,0.03,0.29,0.01,0.42-0.06
		l1.57-0.79l1.47,0.82V12.56z" />
</g>
</symbol>`}),Fs=r().add(J0);const To=J0;var Q0=new(e())({id:"pat-camera-video-off",use:"pat-camera-video-off-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-camera-video-off">
<g>
	<path d="M10,12H2V4c0-0.37-0.3-0.67-0.67-0.67S0.67,3.63,0.67,4v8.67c0,0.37,0.3,0.67,0.67,0.67H10
		c0.37,0,0.67-0.3,0.67-0.67S10.37,12,10,12z" />
	<path d="M14.95,4.06c-0.24-0.11-0.51-0.07-0.71,0.09l-1.57,1.32V3.33c0-0.37-0.3-0.67-0.67-0.67H6
		c-0.37,0-0.67,0.3-0.67,0.67S5.63,4,6,4h5.33v2.92V9v0.08c0,0.2,0.09,0.38,0.24,0.51l2.67,2.25c0.12,0.1,0.28,0.16,0.43,0.16
		c0.1,0,0.19-0.02,0.28-0.06c0.24-0.11,0.39-0.34,0.39-0.6V4.67C15.33,4.41,15.18,4.17,14.95,4.06z M14,9.9l-1.33-1.12V7.23L14,6.1
		V9.9z" />
	<path d="M1.8,0.86c-0.26-0.26-0.68-0.26-0.94,0C0.6,1.12,0.6,1.54,0.86,1.8L14.2,15.14c0.13,0.13,0.3,0.2,0.47,0.2
		s0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L1.8,0.86z" />
</g>
</symbol>`}),js=r().add(Q0);const Ro=Q0;var q0=new(e())({id:"pat-camera-video",use:"pat-camera-video-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-camera-video">
<g>
	<path d="M14.95,4.06c-0.24-0.11-0.51-0.07-0.71,0.09l-1.57,1.32V3.33c0-0.37-0.3-0.67-0.67-0.67H1.33
		c-0.37,0-0.67,0.3-0.67,0.67v9.33c0,0.37,0.3,0.67,0.67,0.67H12c0.37,0,0.67-0.3,0.67-0.67v-2.15l1.57,1.32
		c0.12,0.1,0.28,0.16,0.43,0.16c0.1,0,0.19-0.02,0.28-0.06c0.24-0.11,0.39-0.34,0.39-0.6V4.67C15.33,4.41,15.18,4.17,14.95,4.06z
		 M11.33,12H2V4h9.33v2.92v2.17V12z M14,9.9l-1.33-1.12V7.23L14,6.1V9.9z" />
	<path d="M6.09,5.82c-0.28-0.24-0.7-0.2-0.94,0.09c-0.24,0.28-0.2,0.7,0.09,0.94L6.62,8L5.24,9.16
		c-0.28,0.24-0.32,0.66-0.09,0.94c0.13,0.16,0.32,0.24,0.51,0.24c0.15,0,0.3-0.05,0.43-0.16l2-1.67C8.25,8.39,8.33,8.2,8.33,8
		S8.25,7.61,8.09,7.49L6.09,5.82z" />
</g>
</symbol>`}),Ws=r().add(q0);const Ao=q0;var tt=new(e())({id:"pat-can",use:"pat-can-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-can">
  <path d="M8.5,12.2c0-.5-.3-1.1-.8-1.1-.5,0-1.1.3-1.2.8,0,.2-.3,1.8.5,4.9s.5.8,1,.8.2,0,.2,0c.5-.1.9-.7.7-1.2-.7-2.7-.5-4.1-.5-4.1Z" />
  <path d="M20.1,6.6c.1-.1.2-.2.3-.4.3-.5.2-1.1,0-1.5l-1.3-2c-.3-.4-.7-.7-1.3-.7H6.2c-.5,0-1,.3-1.3.7l-1.3,2c-.3.5-.3,1,0,1.5,0,.2.2.3.4.4-.5,1.2-1,2.7-1,4.3,0,2.3.6,5.8,1.2,8.4.4,1.8,2,3.1,3.9,3.1h7.9c1.9,0,3.5-1.3,3.9-3.2.5-2.7,1.2-6.4,1.2-8.4s-.4-3.1-.9-4.4ZM6.5,4h11l.6,1H5.8l.6-1ZM17.9,18.9c-.2.9-1,1.6-1.9,1.6h-7.9c-.9,0-1.7-.6-1.9-1.5-.7-3.5-1.1-6.4-1.1-8s.5-2.9,1-4h12.1c.5,1.2.9,2.7.9,4s-.4,4.2-1.1,8Z" />
</symbol>`}),Ks=r().add(tt);const Io=tt;var et=new(e())({id:"pat-cart",use:"pat-cart-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-cart">
<g>
	<path d="M6.83,12.67c-0.64,0-1.17,0.52-1.17,1.17c0,0.64,0.52,1.17,1.17,1.17C7.48,15,8,14.48,8,13.83
		C8,13.19,7.48,12.67,6.83,12.67z" />
	<path d="M12.5,12.67c-0.64,0-1.17,0.52-1.17,1.17c0,0.64,0.52,1.17,1.17,1.17s1.17-0.52,1.17-1.17
		C13.67,13.19,13.14,12.67,12.5,12.67z" />
	<path d="M15.2,5.27C15.08,5.1,14.88,5,14.67,5H8.33C7.97,5,7.67,5.3,7.67,5.67s0.3,0.67,0.67,0.67h5.44L13.29,8H8.33
		C7.97,8,7.67,8.3,7.67,8.67c0,0.37,0.3,0.67,0.67,0.67h4.56l-0.39,1.33H6.87L5.32,3.85C5.28,3.69,5.18,3.54,5.04,3.45l-3-2
		c-0.3-0.2-0.72-0.12-0.92,0.19C0.91,1.94,0.99,2.35,1.3,2.55l2.78,1.85l1.61,7.07C5.75,11.78,6.02,12,6.33,12H13
		c0.3,0,0.56-0.2,0.64-0.48l1.67-5.67C15.37,5.65,15.33,5.44,15.2,5.27z" />
</g>
</symbol>`}),Zs=r().add(et);const Vo=et;var rt=new(e())({id:"pat-caution-fill",use:"pat-caution-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-caution-fill">
    <path d="M15.91,14L8.58,1.33C8.46,1.13,8.24,1,8,1S7.54,1.13,7.42,1.33L0.09,14c-0.12,0.21-0.12,0.46,0,0.67
	S0.43,15,0.67,15h14.67c0.24,0,0.46-0.13,0.58-0.33C16.03,14.46,16.03,14.21,15.91,14z M8.67,12c0,0.37-0.3,0.67-0.67,0.67
	S7.33,12.37,7.33,12v-0.33C7.33,11.3,7.63,11,8,11s0.67,0.3,0.67,0.67V12z M8,10.33L8,10.33c-0.37,0-0.67-0.3-0.67-0.67l0-3.33
	c0-0.37,0.3-0.67,0.67-0.67h0c0.37,0,0.67,0.3,0.67,0.67l0,3.33C8.67,10.03,8.37,10.33,8,10.33z" />
</symbol>`}),$s=r().add(rt);const Uo=rt;var ot=new(e())({id:"pat-caution",use:"pat-caution-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-caution">
    <path d="M15.91,14L8.58,1.33C8.46,1.13,8.24,1,8,1C7.76,1,7.54,1.13,7.42,1.33L0.09,14C-0.03,14.21,-0.03,14.46,0.09,14.67C0.21,14.88,0.43,15,0.67,15L15.34,15C15.58,15,15.8,14.87,15.92,14.67C16.03,14.46,16.03,14.21,15.91,14ZM1.82,13.67L8,3L14.18,13.67L1.82,13.67Z" />
    <path d="M7.999999923706055,11C7.6299999237060545,11,7.329999923706055,11.3,7.329999923706055,11.67L7.329999923706055,12C7.329999923706055,12.370000000000001,7.6299999237060545,12.67,7.999999923706055,12.67C8.369999923706054,12.67,8.669999923706055,12.370000000000001,8.669999923706055,12L8.669999923706055,11.67C8.669999923706055,11.3,8.369999923706054,11,7.999999923706055,11Z" />
    <path d="M7.999999923706055,5.670000076293945C7.6299999237060545,5.670000076293945,7.329999923706055,5.970000076293945,7.329999923706055,6.340000076293945L7.329999923706055,9.670000076293945C7.329999923706055,10.040000076293946,7.6299999237060545,10.340000076293945,7.999999923706055,10.340000076293945C8.369999923706054,10.340000076293945,8.669999923706055,10.040000076293946,8.669999923706055,9.670000076293945L8.669999923706055,6.340000076293945C8.669999923706055,5.960000076293945,8.369999923706054,5.670000076293945,7.999999923706055,5.670000076293945Z" />
</symbol>`}),Gs=r().add(ot);const No=ot;var at=new(e())({id:"pat-certificate",use:"pat-certificate-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-certificate">
    <path d="M14,12.7h-2.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7H14V2.7H2v8.7h6.7c0.4,0,0.7,0.3,0.7,0.7S9,12.7,8.7,12.7
	H2c-0.7,0-1.3-0.6-1.3-1.3V2.7c0-0.7,0.6-1.3,1.3-1.3h12c0.7,0,1.3,0.6,1.3,1.3v8.7C15.3,12.1,14.7,12.7,14,12.7z" />
    <path d="M12,5.3H4C3.6,5.3,3.3,5,3.3,4.7S3.6,4,4,4h8c0.4,0,0.7,0.3,0.7,0.7S12.4,5.3,12,5.3z" />
    <path d="M6,7.7H4C3.6,7.7,3.3,7.4,3.3,7S3.6,6.3,4,6.3h2c0.4,0,0.7,0.3,0.7,0.7S6.4,7.7,6,7.7z" />
    <path d="M5.3,10H4c-0.4,0-0.7-0.3-0.7-0.7S3.6,8.7,4,8.7h1.3C5.7,8.7,6,9,6,9.3S5.7,10,5.3,10z" />
    <path d="M10,11.7c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7C12.7,10.5,11.5,11.7,10,11.7z
	 M10,7.7C9.3,7.7,8.7,8.3,8.7,9s0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3S10.7,7.7,10,7.7z" />
    <path d="M11.3,14.7c-0.1,0-0.2,0-0.3-0.1l-1-0.5l-1,0.5c-0.2,0.1-0.5,0.1-0.6,0C8.1,14.4,8,14.2,8,14v-3.5
	c0-0.3,0.2-0.5,0.5-0.6c0.3-0.1,0.6,0,0.7,0.2c0,0,0,0,0,0c0,0,0.2,0.2,0.8,0.2c0.6,0,0.8-0.2,0.8-0.3c0.2-0.2,0.5-0.3,0.7-0.2
	c0.3,0.1,0.4,0.3,0.4,0.6V14c0,0.2-0.1,0.4-0.3,0.6C11.6,14.6,11.5,14.7,11.3,14.7z M9.3,11.6v1.3l0.4-0.2c0.2-0.1,0.4-0.1,0.6,0
	l0.4,0.2v-1.3C10.3,11.7,9.7,11.7,9.3,11.6z" />
</symbol>`}),Xs=r().add(at);const Fo=at;var nt=new(e())({id:"pat-chart",use:"pat-chart-usage",viewBox:"0 0 1024 1024",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="pat-chart">
    <path d="M810.669 128h-597.336c-46.933 0-85.333 38.4-85.333 85.333v597.336c0 46.931 38.4 85.331 85.333 85.331h597.336c46.931 0 85.331-38.4 85.331-85.331v-597.336c0-46.933-38.4-85.333-85.331-85.333zM384 725.333h-85.333v-298.666h85.333v298.666zM554.667 725.333h-85.334v-426.666h85.334v426.666zM725.333 725.333h-85.333v-170.666h85.333v170.666z" />
</symbol>`}),Ys=r().add(nt);const jo=nt;var it=new(e())({id:"pat-check-check",use:"pat-check-check-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-check-check">
<path d="M14.195 4.195l-6.218 6.218c-0.113-0.090-0.257-0.144-0.414-0.144-0.174 0-0.333 0.067-0.452 0.176l0-0c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l0.417 0.417c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195l6.667-6.667c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0z" />
<path d="M10.862 4.195l-6.195 6.195-2.862-2.862c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l3.333 3.333c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195l6.667-6.667c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0z" />
</symbol>`}),Js=r().add(it);const Wo=it;var st=new(e())({id:"pat-check-small",use:"pat-check-small-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-check-small">
<path d="M6.67,12c-0.17,0-0.34-0.07-0.47-0.2L2.86,8.47c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0
	l2.86,2.86l6.19-6.2c0.26-0.26,0.68-0.26,0.94,0c0.26,0.26,0.26,0.68,0,0.94L7.14,11.8C7.01,11.93,6.84,12,6.67,12z" />
</symbol>`}),Qs=r().add(st);const Ko=st;var lt=new(e())({id:"pat-check",use:"pat-check-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-check">
<path d="M5.62,13c-0.17,0-0.34-0.07-0.47-0.19L1.2,8.87c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0
	l3.49,3.47l8.24-8.2c0.26-0.26,0.68-0.26,0.94,0c0.26,0.26,0.26,0.68,0,0.94L6.1,12.81C5.97,12.93,5.79,13,5.62,13z" />
</symbol>`}),qs=r().add(lt);const Zo=lt;var ct=new(e())({id:"pat-checkbox-blank",use:"pat-checkbox-blank-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-checkbox-blank">
<path d="M13,14.67H3c-0.92,0-1.67-0.75-1.67-1.67V3c0-0.92,0.75-1.67,1.67-1.67h10c0.92,0,1.67,0.75,1.67,1.67v10
	C14.67,13.92,13.92,14.67,13,14.67z M3,2.67C2.82,2.67,2.67,2.82,2.67,3v10c0,0.18,0.15,0.33,0.33,0.33h10
	c0.18,0,0.33-0.15,0.33-0.33V3c0-0.18-0.15-0.33-0.33-0.33H3z" />
</symbol>`}),t6=r().add(ct);const $o=ct;var dt=new(e())({id:"pat-checkbox-fill",use:"pat-checkbox-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-checkbox-fill">
<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v10c0,0.92,0.75,1.67,1.67,1.67h10c0.92,0,1.67-0.75,1.67-1.67V3
	C14.67,2.08,13.92,1.33,13,1.33z M12.64,5.8L7.3,11.14c-0.13,0.13-0.3,0.2-0.47,0.2s-0.34-0.07-0.47-0.2L3.69,8.47
	c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0l2.2,2.2l4.86-4.87c0.26-0.26,0.68-0.26,0.94,0
	C12.9,5.12,12.9,5.54,12.64,5.8z" />
</symbol>`}),e6=r().add(dt);const Go=dt;var pt=new(e())({id:"pat-checkbox-indeterminate-fill",use:"pat-checkbox-indeterminate-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-checkbox-indeterminate-fill">
<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v10c0,0.92,0.75,1.67,1.67,1.67h10c0.92,0,1.67-0.75,1.67-1.67V3
	C14.67,2.08,13.92,1.33,13,1.33z M11.04,8.67H4.96c-0.37,0-0.67-0.3-0.67-0.67s0.3-0.67,0.67-0.67h6.08c0.37,0,0.67,0.3,0.67,0.67
	S11.41,8.67,11.04,8.67z" />
</symbol>`}),r6=r().add(pt);const Xo=pt;var mt=new(e())({id:"pat-checkbox",use:"pat-checkbox-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-checkbox">
<g>
	<path d="M11.7,4.86L6.83,9.73l-2.2-2.2c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l2.67,2.67
		c0.13,0.12,0.29,0.2,0.47,0.2s0.35-0.07,0.47-0.2l5.34-5.34c0.26-0.26,0.26-0.68,0-0.94C12.38,4.6,11.96,4.6,11.7,4.86z" />
	<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v10c0,0.92,0.75,1.67,1.67,1.67h10c0.92,0,1.67-0.75,1.67-1.67V3
		C14.67,2.08,13.92,1.33,13,1.33z M13.33,13c0,0.18-0.15,0.33-0.33,0.33H3c-0.18,0-0.33-0.15-0.33-0.33V3
		c0-0.18,0.15-0.33,0.33-0.33h10c0.18,0,0.33,0.15,0.33,0.33V13z" />
</g>
</symbol>`}),o6=r().add(mt);const Yo=mt;var gt=new(e())({id:"pat-checklist",use:"pat-checklist-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-checklist">
  <path d="M10.9,6.5c.1.1.3.2.5.2s.3,0,.5-.2l.9-.9.9.9c.1.1.3.2.5.2s.3,0,.5-.2c.3-.3.3-.7,0-.9l-.9-.9.9-.9c.3-.3.3-.7,0-.9-.3-.3-.7-.3-.9,0l-.9.9-.9-.9c-.3-.3-.7-.3-.9,0-.3.3-.3.7,0,.9l.9.9-.9.9c-.3.3-.3.7,0,.9Z" />
  <path d="M15.1,9.5c-.3-.2-.7-.2-.9,0l-1.9,2.1-.8-.8c-.3-.3-.7-.3-.9,0-.3.3-.3.7,0,.9l1.3,1.3c.1.1.3.2.5.2s0,0,0,0c.2,0,.4,0,.5-.2l2.3-2.7c.2-.3.2-.7,0-.9Z" />
  <path d="M8.7,2.7H1.3c-.4,0-.7.3-.7.7v2.7c0,.4.3.7.7.7h7.3c.4,0,.7-.3.7-.7v-2.7c0-.4-.3-.7-.7-.7ZM8,5.3H2v-1.3h6v1.3Z" />
  <path d="M8.7,9.3H1.3c-.4,0-.7.3-.7.7v2.7c0,.4.3.7.7.7h7.3c.4,0,.7-.3.7-.7v-2.7c0-.4-.3-.7-.7-.7ZM8,12H2v-1.3h6v1.3Z" />
</symbol>`}),a6=r().add(gt);const Jo=gt;var ht=new(e())({id:"pat-clear",use:"pat-clear-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-clear">
<path d="M6.667 1.305c-0.368 0-0.667 0.298-0.667 0.667v0 2h-4.333c-0.368 0-0.667 0.298-0.667 0.667v0 2.667c0 0.368 0.298 0.667 0.667 0.667h12.667c0.368-0 0.667-0.298 0.667-0.667v0-2.667c-0-0.368-0.298-0.667-0.667-0.667h-4.333v-2c-0-0.368-0.298-0.667-0.667-0.667v0zM7.333 2.638h1.333v2c0 0.368 0.298 0.667 0.667 0.667h4.333v1.333h-11.333v-1.333h4.333c0.368-0 0.667-0.298 0.667-0.667v0z" />
<path d="M2.667 6.667c-0.368 0-0.667 0.298-0.667 0.667v0 6c0 0.368 0.298 0.667 0.667 0.667h10.667c0.368-0 0.667-0.298 0.667-0.667v0-6c-0-0.368-0.298-0.667-0.667-0.667v0zM3.333 8h9.333v4.667h-9.333z" />
<path d="M5.333 10.638c-0.368 0-0.667 0.298-0.667 0.667v0 1.995c0 0.368 0.298 0.667 0.667 0.667v0c0.368 0 0.667-0.298 0.667-0.667v0-1.995c0-0.368-0.298-0.667-0.667-0.667v0z" />
<path d="M8 10.633c-0.368 0-0.667 0.298-0.667 0.667v0 2c0 0.368 0.298 0.667 0.667 0.667v0c0.368 0 0.667-0.298 0.667-0.667v0-2c0-0.368-0.298-0.667-0.667-0.667v0z" />
<path d="M10.667 10.638c-0.368 0-0.667 0.298-0.667 0.667v0 1.995c0 0.368 0.298 0.667 0.667 0.667v0c0.368 0 0.667-0.298 0.667-0.667v0-1.995c0-0.368-0.298-0.667-0.667-0.667v0z" />
<path d="M4 12.667c-0.368 0-0.667 0.298-0.667 0.667v0c0 0.368 0.298 0.667 0.667 0.667v0h8c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0z" />
</symbol>`}),n6=r().add(ht);const Qo=ht;var wt=new(e())({id:"pat-clock",use:"pat-clock-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-clock">
    <g>
	<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
		C15.33,3.96,12.04,0.67,8,0.67z M8,14c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6c3.31,0,6,2.69,6,6C14,11.31,11.31,14,8,14z" />
        <path d="M8.67,7.73l0-3.73c0-0.37-0.3-0.67-0.67-0.67S7.34,3.63,7.34,4l0,4c0,0.18,0.07,0.35,0.2,0.47l2.83,2.83
		c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L8.67,7.73z" />
</g>
</symbol>`}),i6=r().add(wt);const qo=wt;var vt=new(e())({id:"pat-close-3",use:"pat-close-3-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-close-3"><path d="M557.25 512L982.62 86.62a32 32 0 0 0-45.25-45.25L512 466.74 86.62 41.37a32 32 0 0 0-45.25 45.25L466.74 512 41.38 937.37a32 32 0 1 0 45.25 45.25L512 557.25l425.37 425.37a32 32 0 0 0 45.25-45.25z" p-id="7378" /></symbol>'}),s6=r().add(vt);const ta=vt;var ut=new(e())({id:"pat-close-fill",use:"pat-close-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-close-fill">
<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
	C15.33,3.96,12.04,0.67,8,0.67z M10.36,9.41c0.26,0.26,0.26,0.68,0,0.94c-0.13,0.13-0.3,0.2-0.47,0.2s-0.34-0.07-0.47-0.2L8,8.94
	l-1.41,1.41c-0.13,0.13-0.3,0.2-0.47,0.2s-0.34-0.07-0.47-0.2c-0.26-0.26-0.26-0.68,0-0.94L7.06,8L5.64,6.59
	c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0L8,7.06l1.41-1.41c0.26-0.26,0.68-0.26,0.94,0c0.26,0.26,0.26,0.68,0,0.94
	L8.94,8L10.36,9.41z" />
</symbol>`}),l6=r().add(ut);const ea=ut;var ft=new(e())({id:"pat-close-small",use:"pat-close-small-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-close-small">
    <path d="M8.94,8l2.86-2.86c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L8,7.06L5.14,4.2
	c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L7.06,8L4.2,10.86c-0.26,0.26-0.26,0.68,0,0.94C4.33,11.93,4.5,12,4.67,12
	s0.34-0.07,0.47-0.2L8,8.94l2.86,2.86c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L8.94,8z" />
</symbol>`}),c6=r().add(ft);const ra=ft;var bt=new(e())({id:"pat-close",use:"pat-close-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-close">
<path d="M8.94,8l4.86-4.86c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L8,7.06L3.14,2.2
	c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L7.06,8L2.2,12.86c-0.26,0.26-0.26,0.68,0,0.94C2.33,13.93,2.5,14,2.67,14
	s0.34-0.07,0.47-0.2L8,8.94l4.86,4.86c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L8.94,8z" />
</symbol>`}),d6=r().add(bt);const oa=bt;var xt=new(e())({id:"pat-cloud-download",use:"pat-cloud-download-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-cloud-download">
<g>
	<path d="M15.3,7.8c-0.47-1.48-1.89-2.44-3.62-2.44c0,0,0,0,0,0H11.4C10.69,3.39,8.9,1.95,6.79,1.7
		C4.51,1.43,2.27,2.63,1.21,4.67C0.14,6.7,0.45,9.22,1.97,10.94c0.24,0.28,0.67,0.3,0.94,0.06c0.28-0.24,0.3-0.67,0.06-0.94
		C1.82,8.75,1.58,6.83,2.39,5.28C3.2,3.74,4.9,2.83,6.64,3.03c1.74,0.2,3.19,1.47,3.63,3.16c0.08,0.29,0.34,0.5,0.65,0.5h0.77
		c0,0,0,0,0,0c1.13,0,2.05,0.59,2.34,1.51c0.32,1-0.05,2.09-0.91,2.69c-0.3,0.21-0.37,0.63-0.16,0.93c0.13,0.18,0.34,0.28,0.55,0.28
		c0.13,0,0.27-0.04,0.38-0.12C15.23,11.04,15.8,9.36,15.3,7.8z" />
	<path d="M9.65,11.07l-0.98,0.98l0-4.39C8.67,7.3,8.37,7,8,7c0,0,0,0,0,0C7.63,7,7.33,7.3,7.33,7.67l0,4.39l-0.99-0.99
		c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l2.12,2.12c0.13,0.12,0.29,0.2,0.47,0.2c0.09,0,0.18-0.02,0.26-0.05
		c0.08-0.03,0.16-0.09,0.22-0.15l2.11-2.12c0.26-0.26,0.26-0.68,0-0.94C10.33,10.81,9.91,10.81,9.65,11.07z" />
</g>
</symbol>`}),p6=r().add(xt);const aa=xt;var yt=new(e())({id:"pat-cloud-storage",use:"pat-cloud-storage-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-cloud-storage">
  <path d="M23,14.3h0s-2.5-12-2.5-12c0-.5-.5-.8-1-.8H4.5c-.5,0-.9.3-1,.8L1,14.3h0c0,0,0,.1,0,.2v6.5c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-6.5c0,0,0-.1,0-.2ZM5.3,3.5h13.4l2.1,10H3.2L5.3,3.5ZM21,20H3v-4.5h18v4.5Z" />
  <circle cx="17.8" cy="17.8" r="1.2" />
  <path d="M9.8,12.5h4.3c2.1,0,3.4-1.1,3.4-2.7s-.8-2.3-2.1-2.6c-.4-1.6-1.6-2.6-3.4-2.6s-3.1,1.1-3.4,2.7c-1.2.4-2.1,1.4-2.1,2.6s1.3,2.7,3.3,2.7ZM9.5,9c.6,0,1-.4,1-1,0-1,.5-1.5,1.5-1.5s1.5.6,1.5,1.5.4,1,1,1c1,0,1,.5,1,.7s0,.7-1.4.7h-4.3c-1.3,0-1.3-.6-1.3-.7,0-.4.5-.7,1-.7Z" />
</symbol>`}),m6=r().add(yt);const na=yt;var _t=new(e())({id:"pat-code-brackets",use:"pat-code-brackets-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-code-brackets">
<path d="M4.3,6V3c0-0.8,0.5-1,1-1C5.7,2,6,1.7,6,1.3S5.7,0.7,5.3,0.7C4.2,0.7,3,1.4,3,3v3c0,0.3-0.7,0.8-1.2,1
	C1.5,7.1,1.3,7.4,1.3,7.7c0,0.3,0.2,0.5,0.4,0.6C2.3,8.5,3,9,3,9.3V13c0,1.6,1.2,2.3,2.3,2.3C5.7,15.3,6,15,6,14.7S5.7,14,5.3,14
	c-0.5,0-1-0.2-1-1V9.3c0-0.7-0.5-1.3-1-1.7C3.8,7.3,4.3,6.7,4.3,6z" />
<path d="M14.2,7C13.7,6.8,13,6.3,13,6V3c0-1.6-1.2-2.3-2.3-2.3C10.3,0.7,10,1,10,1.3S10.3,2,10.7,2c0.5,0,1,0.2,1,1v3
	c0,0.7,0.5,1.3,1,1.7c-0.5,0.4-1,0.9-1,1.7V13c0,0.8-0.5,1-1,1c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c1.2,0,2.3-0.7,2.3-2.3V9.3
	c0-0.3,0.7-0.8,1.2-1c0.3-0.1,0.4-0.3,0.4-0.6S14.5,7.1,14.2,7z" />
</symbol>`}),g6=r().add(_t);const ia=_t;var Ct=new(e())({id:"pat-code-completion",use:"pat-code-completion-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-code-completion"><path d="M906.34 393.08C852.68 355.55 791.72 351.5 768 351.5s-84.68 4.05-138.34 41.58a191.626 191.626 0 0 0-34.28 30.68c-5.28-13.4-12.68-25.7-23.06-36.08-13.8-13.8-31.53-23.24-54.21-28.87C499.4 354.16 477.12 352 448 352H288.1c-0.06-43-0.1-76.94-0.1-96 0-63.98 21.87-97.02 42.34-106.61 13.87-6.5 32.21-6.06 54.5 1.3 30.32 10.01 66.21 32.18 106.67 65.9 13.58 11.31 33.76 9.48 45.07-4.1 11.31-13.58 9.48-33.75-4.1-45.07C439 89.52 361.86 63.96 303.19 91.43c-27.56 12.91-49.28 37.49-62.81 71.09C229.67 189.15 224 221.47 224 256c0 19.07 0.04 53 0.1 96H64c-17.67 0-32 14.33-32 32s14.33 32 32 32h160.21c0.36 212.08 1.06 539.65 1.07 544.07 0.04 17.65 14.36 31.93 32 31.93h0.07c17.67-0.04 31.97-14.4 31.93-32.07-0.01-4.42-0.71-331.9-1.07-543.93H448c42.39 0 67.51 5.38 79.07 16.93C538.62 444.49 544 469.61 544 512v448c0 17.67 14.33 32 32 32s32-14.33 32-32V576c0-59.5 19.63-103.4 58.34-130.47 39.84-27.86 87.88-30.03 101.66-30.03s61.82 2.17 101.66 30.03C908.37 472.6 928 516.5 928 576v384c0 17.67 14.33 32 32 32s32-14.33 32-32V576c0-101.67-46.58-155.59-85.66-182.92z" p-id="5253" /></symbol>'}),h6=r().add(Ct);const sa=Ct;var Mt=new(e())({id:"pat-code",use:"pat-code-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-code">
	<path d="M5.8,3.9c-0.3-0.3-0.7-0.2-0.9,0L0.9,8C0.7,8.1,0.7,8.3,0.7,8.5c0,0.2,0.1,0.3,0.2,0.5l4,3.9
		C5,12.9,5.2,13,5.3,13c0.2,0,0.3-0.1,0.5-0.2c0.3-0.3,0.2-0.7,0-0.9L2.3,8.5l3.5-3.7C6.1,4.5,6.1,4.1,5.8,3.9z" />
	<path d="M15.1,8l-4-4.1c-0.3-0.3-0.7-0.3-0.9,0c-0.3,0.3-0.3,0.7,0,0.9l3.5,3.7l-3.5,3.4c-0.3,0.3-0.3,0.7,0,0.9
		c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2l4-3.9c0.1-0.1,0.2-0.3,0.2-0.5C15.3,8.3,15.3,8.1,15.1,8z" />
	<path d="M9.4,0.7C9.1,0.6,8.7,0.9,8.7,1.2L6.3,14.6c-0.1,0.4,0.2,0.7,0.5,0.8c0,0,0.1,0,0.1,0c0.3,0,0.6-0.2,0.7-0.6
		L10,1.4C10.1,1.1,9.8,0.7,9.4,0.7z" />
</symbol>`}),w6=r().add(Mt);const la=Mt;var kt=new(e())({id:"pat-coin",use:"pat-coin-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-coin"><path d="M512.7 512.18m-479.82 0a479.82 479.82 0 1 0 959.64 0 479.82 479.82 0 1 0-959.64 0Z" fill="#F8B22C" p-id="5465" /><path d="M513.12 512.6m-422.31 0a422.31 422.31 0 1 0 844.62 0 422.31 422.31 0 1 0-844.62 0Z" fill="#F8DD5C" p-id="5466" /><path d="M512.6 512.09m-383.91 0a383.91 383.91 0 1 0 767.82 0 383.91 383.91 0 1 0-767.82 0Z" fill="#F8B22C" p-id="5467" /><path d="M509.63 509.11m-369.23 0a369.23 369.23 0 1 0 738.46 0 369.23 369.23 0 1 0-738.46 0Z" fill="#F8DD5C" p-id="5468" /><path d="M555.36 233.09l192.19 480.47h-79.69l-49.22-128.9H405.36l-49.22 128.9h-79.69l192.19-480.47z m-42.19 63.29h-2.34l-14.06 42.18q-2.37 4.72-72.66 187.5h175.78q-70.3-182.8-72.66-187.5c0-1.54-0.8-4.68-2.34-9.37-7.84-18.75-11.72-29.67-11.72-32.81z" fill="#F8B22C" p-id="5469" /></symbol>'}),v6=r().add(kt);const ca=kt;var Et=new(e())({id:"pat-comment",use:"pat-comment-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-comment">
    <g>
	<path d="M14.67,6.67h-2V2c0-0.37-0.3-0.67-0.67-0.67H1.33c-0.37,0-0.67,0.3-0.67,0.67v8c0,0.37,0.3,0.67,0.67,0.67
		h1.39l1.14,1.14c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l1.14-1.14h0.72v2c0,0.37,0.3,0.67,0.67,0.67h3.39l0.8,0.8
		c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l0.8-0.8h1.39c0.37,0,0.67-0.3,0.67-0.67V7.33C15.33,6.97,15.04,6.67,14.67,6.67z
		 M5.67,9.33c-0.18,0-0.35,0.07-0.47,0.2l-0.86,0.86L3.47,9.53C3.35,9.4,3.18,9.33,3,9.33H2V2.67h9.33v4.67v2h-4H5.67z M14,12h-1
		c-0.18,0-0.35,0.07-0.47,0.2L12,12.72l-0.53-0.53C11.35,12.07,11.18,12,11,12H8v-1.33h4c0.37,0,0.67-0.3,0.67-0.67V8H14V12z" />
        <path d="M6,6.67H4c-0.37,0-0.67,0.3-0.67,0.67S3.63,8,4,8h2c0.37,0,0.67-0.3,0.67-0.67S6.37,6.67,6,6.67z" />
        <path d="M4,5.33h4c0.37,0,0.67-0.3,0.67-0.67S8.37,4,8,4H4C3.63,4,3.33,4.3,3.33,4.67S3.63,5.33,4,5.33z" />
</g>
</symbol>`}),u6=r().add(Et);const da=Et;var zt=new(e())({id:"pat-communication",use:"pat-communication-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-communication">
  <path d="M22,10h-3V3c0-.6-.4-1-1-1H2c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1h2.1l1.7,1.7c.2.2.5.3.7.3s.5,0,.7-.3l1.7-1.7h1.1v3c0,.6.4,1,1,1h5.1l1.2,1.2c.2.2.5.3.7.3s.5,0,.7-.3l1.2-1.2h2.1c.6,0,1-.4,1-1v-8c0-.6-.4-1-1-1ZM8.5,14c-.3,0-.5.1-.7.3l-1.3,1.3-1.3-1.3c-.2-.2-.4-.3-.7-.3h-1.5V4h14v10h-8.5ZM21,18h-1.5c-.3,0-.5.1-.7.3l-.8.8-.8-.8c-.2-.2-.4-.3-.7-.3h-4.5v-2h6c.6,0,1-.4,1-1v-3h2v6Z" />
  <path d="M10,8h-.5c-.6,0-1,.4-1,1s.4,1,1,1h.5c.6,0,1-.4,1-1s-.4-1-1-1Z" />
  <path d="M13,10h.5c.6,0,1-.4,1-1s-.4-1-1-1h-.5c-.6,0-1,.4-1,1s.4,1,1,1Z" />
  <path d="M6.5,8h-.5c-.6,0-1,.4-1,1s.4,1,1,1h.5c.6,0,1-.4,1-1s-.4-1-1-1Z" />
</symbol>`}),f6=r().add(zt);const pa=zt;var Bt=new(e())({id:"pat-concept-sharing",use:"pat-concept-sharing-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-concept-sharing">
<g>
	<path d="M15.26,11.7c-0.17-0.33-0.57-0.46-0.9-0.29c-4.6,2.34-5.49,2.58-5.64,2.59c-0.1,0-0.75-0.12-3.69-1.88
		c-0.18-0.11-0.4-0.12-0.6-0.04l-1.79,0.75l-0.38-0.76l2.68-0.98l2.73,1.51c0.1,0.05,0.21,0.08,0.32,0.08h1.46
		c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H8.17L5.32,9.76C5.15,9.67,4.95,9.65,4.77,9.72l-3.66,1.35
		c-0.18,0.07-0.32,0.2-0.39,0.38c-0.07,0.18-0.06,0.38,0.02,0.54l1,1.98c0.16,0.31,0.53,0.45,0.85,0.31l2.05-0.86
		c2.82,1.67,3.65,1.9,4.08,1.9c0.31,0,0.88,0,6.25-2.74C15.3,12.43,15.43,12.03,15.26,11.7z" />
	<path d="M6.07,7.26C6.33,7.51,6.68,7.72,7,7.87C7,8.13,7,8.51,7,9c0,0.18,0.07,0.35,0.19,0.47
		c0.12,0.13,0.29,0.2,0.47,0.2h2c0.37,0,0.67-0.3,0.67-0.67V7.87c0.32-0.16,0.67-0.36,0.93-0.61c0.69-0.69,1.07-1.61,1.07-2.59
		C12.33,2.64,10.69,1,8.67,1S5,2.64,5,4.67C5,5.65,5.38,6.57,6.07,7.26z M8.67,2.33C9.95,2.33,11,3.38,11,4.67
		c0,0.62-0.24,1.21-0.68,1.65c-0.15,0.15-0.45,0.32-0.91,0.51C9.16,6.93,9,7.17,9,7.44v0.89H8.33c0-0.52,0-0.82,0-0.9
		c0-0.27-0.17-0.5-0.41-0.6C7.47,6.64,7.17,6.47,7.02,6.32C6.58,5.88,6.33,5.29,6.33,4.67C6.33,3.38,7.38,2.33,8.67,2.33z" />
	<path d="M3.86,6.2L3.53,6.53c-0.26,0.26-0.26,0.68,0,0.94C3.66,7.6,3.83,7.67,4,7.67s0.34-0.06,0.47-0.2L4.8,7.14
		c0.26-0.26,0.26-0.68,0-0.94C4.54,5.93,4.12,5.93,3.86,6.2z" />
	<path d="M12.53,6.2c-0.26,0.26-0.26,0.68,0,0.94l0.33,0.33c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.19
		c0.26-0.26,0.26-0.68,0-0.94L13.47,6.2C13.21,5.93,12.79,5.94,12.53,6.2z" />
	<path d="M4.53,2.14c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L5.14,0.86
		C4.88,0.6,4.46,0.6,4.2,0.86c-0.26,0.26-0.26,0.68,0,0.94L4.53,2.14z" />
	<path d="M12.33,2.33c0.17,0,0.34-0.06,0.47-0.19l0.33-0.33c0.26-0.26,0.26-0.68,0-0.94s-0.68-0.26-0.94,0L11.86,1.2
		c-0.26,0.26-0.26,0.68,0,0.94C11.99,2.27,12.16,2.33,12.33,2.33z" />
	<path d="M12.67,4c0,0.37,0.3,0.67,0.67,0.67h0.33c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67h-0.33
		C12.96,3.33,12.67,3.63,12.67,4z" />
	<path d="M3.67,4.67H4c0.37,0,0.67-0.3,0.67-0.67S4.37,3.33,4,3.33H3.67C3.3,3.33,3,3.63,3,4S3.3,4.67,3.67,4.67z" />
</g>
</symbol>`}),b6=r().add(Bt);const ma=Bt;var Pt=new(e())({id:"pat-connection-point",use:"pat-connection-point-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-connection-point">
<path d="M14.33,8.67C14.7,8.67,15,8.37,15,8s-0.3-0.67-0.67-0.67H8.67V6h0.67c0.74,0,1.33-0.6,1.33-1.33V2
	c0-0.74-0.6-1.33-1.33-1.33H6.67c-0.74,0-1.33,0.6-1.33,1.33v2.67C5.33,5.4,5.93,6,6.67,6h0.67v1.33H1.67C1.3,7.33,1,7.63,1,8
	s0.3,0.67,0.67,0.67h1.67V10H2.67c-0.74,0-1.33,0.6-1.33,1.33V14c0,0.74,0.6,1.33,1.33,1.33h2.67c0.74,0,1.33-0.6,1.33-1.33v-2.67
	c0-0.73-0.6-1.33-1.33-1.33H4.67V8.67h6.67V10h-0.67c-0.74,0-1.33,0.6-1.33,1.33V14c0,0.74,0.6,1.33,1.33,1.33h2.67
	c0.74,0,1.33-0.6,1.33-1.33v-2.67c0-0.73-0.6-1.33-1.33-1.33h-0.67V8.67H14.33z M6.67,2h2.67v2.67l-2.67,0V2z M5.33,14H2.67v-2.67
	h2.67V14z M13.33,14h-2.67v-2.67h2.67V14z" />
</symbol>`}),x6=r().add(Pt);const ga=Pt;var Lt=new(e())({id:"pat-connection",use:"pat-connection-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-connection">
  <path d="M21.2,15.3c.2-.8.3-1.5.3-2.3,0-4-2.4-7.4-6-8.8-.2-1.8-1.7-3.2-3.5-3.2s-1,.1-1.5.3c-1.1.5-1.9,1.6-2,2.8-3.6,1.4-6,4.9-6,8.8s0,1.6.3,2.3c-.8.7-1.3,1.6-1.3,2.7,0,1.9,1.6,3.5,3.5,3.5s1.3-.2,1.8-.5c1.5,1,3.3,1.5,5.2,1.5s3.6-.5,5.2-1.5c.5.3,1.2.5,1.8.5,1,0,1.9-.4,2.5-1.1.6-.7,1-1.5,1-2.4s-.5-2-1.3-2.7ZM11.4,3.1c.2,0,.4-.1.6-.1.8,0,1.5.7,1.5,1.5s-.1.8-.4,1c-.3.3-.7.5-1.1.5-.8,0-1.5-.7-1.5-1.5s.3-1.1.9-1.4ZM5,19.5c-.8,0-1.5-.7-1.5-1.5s.3-1.1.9-1.4c.2,0,.4-.1.6-.1.8,0,1.5.7,1.5,1.5s-.1.8-.4,1c-.3.3-.7.5-1.1.5ZM8.2,19.4c.2-.4.3-.9.3-1.4,0-1.9-1.6-3.5-3.5-3.5s-.2,0-.3,0c-.1-.5-.2-1-.2-1.5,0-3,1.8-5.6,4.4-6.8.6,1.1,1.7,1.8,3.1,1.8s1.9-.4,2.5-1.1c.2-.2.4-.5.5-.8,2.7,1.2,4.4,3.8,4.4,6.8s0,1-.2,1.5c-.1,0-.2,0-.3,0-.5,0-1,.1-1.5.3-1.2.6-2,1.8-2,3.2s.1,1,.3,1.4c-1.2.7-2.4,1.1-3.8,1.1s-2.7-.4-3.8-1.1ZM20.1,19c-.3.3-.7.5-1.1.5-.8,0-1.5-.7-1.5-1.5s.3-1.1.9-1.4c.2,0,.4-.1.6-.1.8,0,1.5.7,1.5,1.5s-.1.8-.4,1Z" />
</symbol>`}),y6=r().add(Lt);const ha=Lt;var Ot=new(e())({id:"pat-copy",use:"pat-copy-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-copy">
<path d="M13.4,1H5.27c-0.88,0-1.6,0.72-1.6,1.6v1.06H2.6C1.72,3.67,1,4.39,1,5.27v8.12C1,14.28,1.72,15,2.6,15h8.13
	c0.88,0,1.6-0.72,1.6-1.6v-1.06h1.06c0.88,0,1.6-0.72,1.6-1.6V2.6C15,1.72,14.28,1,13.4,1z M11,13.4c0,0.15-0.12,0.27-0.27,0.27H2.6
	c-0.15,0-0.27-0.12-0.27-0.27V5.27C2.33,5.12,2.45,5,2.6,5h8.13C10.88,5,11,5.12,11,5.27V13.4z M13.67,10.73
	c0,0.15-0.12,0.27-0.27,0.27h-1.06V5.27c0-0.88-0.72-1.6-1.6-1.6H5V2.6c0-0.15,0.12-0.27,0.27-0.27h8.12c0.15,0,0.27,0.12,0.27,0.27
	V10.73z" />
</symbol>`}),_6=r().add(Ot);const wa=Ot;var St=new(e())({id:"pat-course",use:"pat-course-usage",viewBox:"0 0 32 32",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="pat-course">
    <path d="M16 23.608c-0.009 0-0.020 0.001-0.031 0.001-0.148 0-0.288-0.034-0.413-0.095l0.005 0.002-8.912-3.741c-0.423-0.176-0.716-0.586-0.716-1.064v-15.050c0-0.001 0-0.002 0-0.003 0-0.399 0.199-0.752 0.504-0.964l0.004-0.003c0.177-0.118 0.394-0.189 0.627-0.189 0.166 0 0.323 0.035 0.465 0.099l-0.007-0.003 4.894 2.055c0.398 0.187 0.668 0.584 0.668 1.044 0 0.635-0.515 1.15-1.15 1.15-0.142 0-0.278-0.026-0.404-0.073l0.008 0.003-3.3-1.385v12.537l6.603 2.77v-13.3c0.001-0.477 0.293-0.886 0.708-1.059l0.008-0.003 8.912-3.74c0.134-0.056 0.289-0.088 0.451-0.088 0.235 0 0.454 0.067 0.639 0.183l-0.005-0.003c0.308 0.208 0.508 0.556 0.508 0.951 0 0.007-0 0.013-0 0.020v-0.001 15.051c-0.001 0.477-0.293 0.886-0.708 1.059l-0.008 0.003-4.872 2.032c-0.118 0.044-0.254 0.070-0.396 0.070-0.635 0-1.15-0.515-1.15-1.15 0-0.46 0.271-0.858 0.661-1.041l4.163-1.757v-12.535l-6.604 2.77v14.268c0 0.001 0 0.002 0 0.003 0 0.399-0.199 0.752-0.504 0.964l-0.004 0.003c-0.176 0.131-0.398 0.209-0.639 0.209-0.003 0-0.006 0-0.008-0h0z" />
    <path d="M16 29.5c-0.144-0-0.283-0.025-0.412-0.071l0.009 0.003-13.88-5.379c-0.423-0.172-0.717-0.58-0.717-1.056 0-0.004 0-0.007 0-0.011v0.001-13.482c0-0.618 0.501-1.12 1.119-1.12s1.119 0.501 1.119 1.12v0 12.688l12.761 4.95 12.761-4.95v-11.78c0-0.618 0.501-1.12 1.119-1.12s1.119 0.501 1.119 1.12v0 12.574c-0.002 0.479-0.294 0.889-0.709 1.064l-0.008 0.003-13.88 5.379c-0.112 0.044-0.242 0.069-0.378 0.069-0.009 0-0.018-0-0.027-0l0.001 0z" />
</symbol>`}),C6=r().add(St);const va=St;var Ht=new(e())({id:"pat-crown-2",use:"pat-crown-2-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-crown-2">
  <path d="M22.3,8.1c-.2-.1-.4-.1-.5,0l-4.6,2.3-4.8-6.7c-.2-.3-.6-.3-.8,0l-4.8,6.7-4.6-2.3c-.2,0-.4,0-.5,0-.2.1-.2.3-.2.5l2.5,11.5c0,.2.3.4.5.4h15c.2,0,.4-.2.5-.4l2.5-11.5c0-.2,0-.4-.2-.5ZM12,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5,2.5,1.1,2.5,2.5-1.1,2.5-2.5,2.5Z" />
</symbol>`}),M6=r().add(Ht);const ua=Ht;var Dt=new(e())({id:"pat-crown",use:"pat-crown-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-crown">
<path d="M8 0.5c-4.134 0-7.5 3.366-7.5 7.5s3.366 7.5 7.5 7.5c4.134 0 7.5-3.366 7.5-7.5s-3.366-7.5-7.5-7.5zM8 1.864c3.397 0 6.136 2.739 6.136 6.136s-2.739 6.136-6.136 6.136c-3.397 0-6.136-2.739-6.136-6.136s2.739-6.136 6.136-6.136z" />
<path d="M8 4.25c-0.228 0-0.429 0.112-0.553 0.284l-0.001 0.002-1.366 1.912-1.524-0.762c-0.089-0.045-0.194-0.072-0.305-0.072-0.377 0-0.682 0.305-0.682 0.682v0 3.409c0 0.377 0.305 0.682 0.682 0.682h7.5c0.377-0 0.682-0.305 0.682-0.682v0-3.409c-0-0.377-0.305-0.682-0.682-0.682-0.111 0-0.216 0.027-0.309 0.074l0.004-0.002-1.524 0.762-1.366-1.912c-0.125-0.174-0.327-0.286-0.555-0.286h-0zM8 6.104l1.15 1.61c0.125 0.174 0.327 0.286 0.555 0.286 0.111 0 0.216-0.027 0.309-0.074l-0.004 0.002 1.059-0.529v1.624h-6.136v-1.624l1.059 0.529c0.089 0.045 0.194 0.072 0.305 0.072 0.228 0 0.43-0.112 0.554-0.284l0.001-0.002z" />
</symbol>`}),k6=r().add(Dt);const fa=Dt;var Tt=new(e())({id:"pat-dashboard",use:"pat-dashboard-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-dashboard">
<g>
	<path d="M8.09,1.8c-3.96,0-7.18,3.22-7.18,7.18c0,1.94,0.66,3.77,1.81,5.01c0.12,0.13,0.3,0.21,0.48,0.21h9.8
		c0.18,0,0.36-0.08,0.48-0.21c1.15-1.24,1.81-3.07,1.81-5.01C15.27,5.02,12.05,1.8,8.09,1.8z M12.69,12.9h-9.2
		c-0.81-1-1.28-2.41-1.28-3.92c0-3.24,2.64-5.88,5.88-5.88c3.24,0,5.88,2.64,5.88,5.88C13.97,10.49,13.5,11.9,12.69,12.9z" />
	<path d="M8.74,8.12V6.69c0-0.36-0.29-0.65-0.65-0.65S7.44,6.33,7.44,6.69v1.43C6.68,8.39,6.13,9.11,6.13,9.96
		c0,1.08,0.88,1.96,1.96,1.96s1.96-0.88,1.96-1.96C10.05,9.11,9.5,8.39,8.74,8.12z M8.09,10.61c-0.36,0-0.65-0.29-0.65-0.65
		c0-0.36,0.29-0.65,0.65-0.65c0.36,0,0.65,0.29,0.65,0.65C8.74,10.32,8.45,10.61,8.09,10.61z" />
	<path d="M8.09,5.39c0.36,0,0.65-0.29,0.65-0.65V4.08c0-0.36-0.29-0.65-0.65-0.65S7.44,3.72,7.44,4.08v0.65
		C7.44,5.1,7.73,5.39,8.09,5.39z" />
	<path d="M3.85,8.65H3.19c-0.36,0-0.65,0.29-0.65,0.65s0.29,0.65,0.65,0.65h0.65c0.36,0,0.65-0.29,0.65-0.65
		S4.21,8.65,3.85,8.65z" />
	<path d="M4.96,5.58c-0.25-0.26-0.67-0.26-0.92,0c-0.26,0.25-0.26,0.67,0,0.92L4.5,6.96c0.13,0.13,0.29,0.19,0.46,0.19
		c0.17,0,0.33-0.06,0.46-0.19c0.26-0.25,0.26-0.67,0-0.92L4.96,5.58z" />
	<path d="M12.99,8.65h-0.65c-0.36,0-0.65,0.29-0.65,0.65s0.29,0.65,0.65,0.65h0.65c0.36,0,0.65-0.29,0.65-0.65
		S13.35,8.65,12.99,8.65z" />
	<path d="M12.28,6.5c0.25-0.26,0.25-0.67,0-0.92c-0.25-0.25-0.67-0.25-0.92,0l-0.46,0.46c-0.25,0.26-0.25,0.67,0,0.92
		c0.13,0.13,0.29,0.19,0.46,0.19s0.33-0.06,0.46-0.19L12.28,6.5z" />
</g>
</symbol>`}),E6=r().add(Tt);const ba=Tt;var Rt=new(e())({id:"pat-data-server",use:"pat-data-server-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-data-server">
  <path class="st0" d="M13.7.7H2.3c-.9,0-1.7.7-1.7,1.7v11.3c0,.9.7,1.7,1.7,1.7h11.3c.9,0,1.7-.7,1.7-1.7V2.3c0-.9-.7-1.7-1.7-1.7ZM2,2.3c0-.2.1-.3.3-.3h11.3c.2,0,.3.1.3.3v7.7H2V2.3ZM14,13.7c0,.2-.1.3-.3.3H2.3c-.2,0-.3-.1-.3-.3v-2.3h12v2.3Z" />
  <path class="st0" d="M3.7,12h-.3c-.4,0-.7.3-.7.7s.3.7.7.7h.3c.4,0,.7-.3.7-.7s-.3-.7-.7-.7Z" />
  <path class="st0" d="M12.7,12h-4c-.4,0-.7.3-.7.7s.3.7.7.7h4c.4,0,.7-.3.7-.7s-.3-.7-.7-.7Z" />
</symbol>`}),z6=r().add(Rt);const xa=Rt;var At=new(e())({id:"pat-database",use:"pat-database-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-database">
<path d="M15.37,3.3c0-1.83-3.82-2.67-7.37-2.67S0.63,1.47,0.63,3.3c0,0.08,0.02,0.16,0.03,0.24
	C0.65,3.59,0.63,3.64,0.63,3.7v9c0,1.83,3.82,2.67,7.37,2.67s7.37-0.83,7.37-2.67v-9c0-0.06-0.02-0.11-0.03-0.16
	C15.35,3.46,15.37,3.38,15.37,3.3z M14.03,9.69c-0.11,0.37-2.13,1.34-6.03,1.34c-3.91,0-5.93-0.97-6.03-1.33V8.32
	C3.39,9.03,5.75,9.37,8,9.37c2.25,0,4.61-0.34,6.03-1.05L14.03,9.69z M14.03,6.69C13.92,7.06,11.9,8.03,8,8.03
	c-3.91,0-5.93-0.98-6.03-1.33V4.91C3.39,5.63,5.75,5.97,8,5.97c2.25,0,4.61-0.34,6.03-1.05L14.03,6.69z M8,1.97
	c3.92,0,5.93,0.97,6.04,1.32C13.93,3.66,11.92,4.63,8,4.63S2.07,3.66,1.97,3.31C2.07,2.94,4.08,1.97,8,1.97z M8,14.03
	c-3.91,0-5.93-0.97-6.03-1.33v-1.39c1.42,0.71,3.78,1.05,6.03,1.05c2.25,0,4.61-0.34,6.03-1.05l0,1.37
	C13.93,13.06,11.91,14.03,8,14.03z" />
</symbol>`}),B6=r().add(At);const ya=At;var It=new(e())({id:"pat-desktop-off",use:"pat-desktop-off-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-desktop-off"><path d="M44.544 85.504L61.44 102.4c-33.792 1.536-61.44 29.696-61.44 64V742.4c0 35.328 28.672 64 64 64h342.016c-15.872 38.912-55.296 89.088-149.504 128h512c-94.72-38.912-133.632-89.088-149.504-128h147.456l170.496 170.496 84.48-84.48L129.536 1.024 44.544 85.504z m19.456 592.896v-512h61.44l512 512h-573.44zM960 102.4H392.192l64 64h503.808v503.808l64 64V166.4c0-35.328-28.672-64-64-64z" p-id="4408" /></symbol>'}),P6=r().add(It);const _a=It;var Vt=new(e())({id:"pat-desktop",use:"pat-desktop-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-desktop"><path d="M960 102.4h-896A64.1792 64.1792 0 0 0 0 166.4V742.4c0 35.2 28.8 64 64 64h341.76c-16 39.04-55.04 88.96-149.76 128h512c-94.72-39.04-133.76-88.96-149.76-128H960c35.2 0 64-28.8 64-64V166.4C1024 131.2 995.2 102.4 960 102.4z m0 576h-896v-512h896v512z" p-id="5988" /></symbol>'}),L6=r().add(Vt);const Ca=Vt;var Ut=new(e())({id:"pat-devices",use:"pat-devices-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-devices">
<g>
	<path d="M14.33,1H4.67C4.3,1,4,1.3,4,1.67v2.67H1.67C1.3,4.33,1,4.63,1,5v9.33C1,14.7,1.3,15,1.67,15h6h6.67
		C14.7,15,15,14.7,15,14.33V1.67C15,1.3,14.7,1,14.33,1z M7,13.67H2.33v-8H7V13.67z M13.67,13.67H8.33V5c0-0.37-0.3-0.67-0.67-0.67
		H5.33v-2h8.33V13.67z" />
	<path d="M4.33,13H5c0.37,0,0.67-0.3,0.67-0.67S5.37,11.67,5,11.67H4.33c-0.37,0-0.67,0.3-0.67,0.67S3.97,13,4.33,13z" />
	<path d="M9.33,13H10c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H9.33c-0.37,0-0.67,0.3-0.67,0.67S8.96,13,9.33,13z
		" />
</g>
</symbol>`}),O6=r().add(Ut);const Ma=Ut;var Nt=new(e())({id:"pat-diamond",use:"pat-diamond-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-diamond"><path d="M511.11 64.09L288.98 328.22h445.51L511.11 64.09z" fill="#ADCEF2" p-id="5499" /><path d="M192.71 64.09l96.27 264.13L511.11 64.09h-318.4z" fill="#659EDB" p-id="5500" /><path d="M192.71 64.09L32 328.75l256.98-0.53-96.27-264.13z" fill="#7EB3ED" p-id="5501" /><path d="M288.98 328.22H32.29L512.14 960 288.98 328.22z" fill="#659EDB" p-id="5502" /><path d="M288.98 328.22L512.14 960l222.35-631.78H288.98z" fill="#7EB3ED" p-id="5503" /><path d="M511.11 64.09l223.38 264.13 91.79-264.13H511.11z" fill="#CBE1F7" p-id="5504" /><path d="M826.28 64.09l-91.79 264.13H992L826.28 64.09z" fill="#EDF4FC" p-id="5505" /><path d="M734.49 328.22L512.14 960 992 328.22H734.49z" fill="#ABCEF4" p-id="5506" /></symbol>'}),S6=r().add(Nt);const ka=Nt;var Ft=new(e())({id:"pat-directory",use:"pat-directory-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-directory">
<g>
	<path d="M13.67,3.33H8.31L6.85,1.57C6.72,1.42,6.53,1.33,6.33,1.33h-4C1.6,1.33,1,1.93,1,2.67v10.67
		c0,0.74,0.6,1.33,1.33,1.33h11.33c0.73,0,1.33-0.6,1.33-1.33V4.67C15,3.93,14.4,3.33,13.67,3.33z M2.33,13.33V2.67h3.69l1.47,1.76
		C7.61,4.58,7.8,4.67,8,4.67h5.67l0,8.67H2.33z" />
	<path d="M9.8,6.86c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L10.06,9l-1.19,1.2
		c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l1.67-1.67c0.12-0.12,0.2-0.29,0.2-0.47
		s-0.07-0.35-0.2-0.47L9.8,6.86z" />
	<path d="M5.94,9l1.19-1.2c0.26-0.26,0.26-0.68,0-0.94C6.88,6.6,6.46,6.6,6.2,6.86L4.53,8.53
		c-0.26,0.26-0.26,0.68,0,0.94l1.67,1.67c0.13,0.13,0.3,0.2,0.47,0.2c0.17,0,0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L5.94,9z
		" />
</g>
</symbol>`}),H6=r().add(Ft);const Ea=Ft;var jt=new(e())({id:"pat-doc-search",use:"pat-doc-search-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-doc-search">
    <path d="M7,15.3H3.3C2.6,15.3,2,14.7,2,14V2c0-0.7,0.6-1.3,1.3-1.3h9.3C13.4,0.7,14,1.3,14,2v7c0,0.4-0.3,0.7-0.7,0.7
	S12.7,9.4,12.7,9V2H3.3l0,12H7c0.4,0,0.7,0.3,0.7,0.7S7.4,15.3,7,15.3z" />
    <path d="M10.3,4.7H5.7C5.3,4.7,5,4.4,5,4s0.3-0.7,0.7-0.7h4.7C10.7,3.3,11,3.6,11,4S10.7,4.7,10.3,4.7z" />
    <path d="M10.3,7.3H5.7C5.3,7.3,5,7,5,6.7S5.3,6,5.7,6h4.7C10.7,6,11,6.3,11,6.7S10.7,7.3,10.3,7.3z" />
    <path d="M7.7,10h-2C5.3,10,5,9.7,5,9.3s0.3-0.7,0.7-0.7h2C8,8.7,8.3,9,8.3,9.3S8,10,7.7,10z" />
    <path d="M13,15.3c-0.2,0-0.3-0.1-0.5-0.2l-0.8-0.8c-0.3,0.2-0.7,0.3-1.1,0.3c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3
	c1.3,0,2.3,1,2.3,2.3c0,0.4-0.1,0.8-0.3,1.1l0.8,0.8c0.3,0.3,0.3,0.7,0,0.9C13.3,15.3,13.2,15.3,13,15.3z M10.7,11.3
	c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3c0,0,0,0,0,0c0.2-0.2,0.3-0.4,0.3-0.7C11.7,11.8,11.2,11.3,10.7,11.3z" />
</symbol>`}),D6=r().add(jt);const za=jt;var Wt=new(e())({id:"pat-dot-small",use:"pat-dot-small-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-dot-small"><path d="M512 512m-96 0a96 96 0 1 0 192 0 96 96 0 1 0-192 0Z" p-id="5838" /></symbol>'}),T6=r().add(Wt);const Ba=Wt;var Kt=new(e())({id:"pat-dot",use:"pat-dot-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-dot">
<path d="M8,4.33C5.98,4.33,4.33,5.98,4.33,8c0,2.02,1.64,3.67,3.67,3.67c2.02,0,3.67-1.65,3.67-3.67
	C11.67,5.98,10.02,4.33,8,4.33z" />
</symbol>`}),R6=r().add(Kt);const Pa=Kt;var Zt=new(e())({id:"pat-double-down",use:"pat-double-down-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-double-down"><path d="M482.133333 541.866667c8.533333 8.533333 21.333333 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l256-256c17.066667-17.066667 17.066667-42.666667 0-59.733334s-42.666667-17.066667-59.733334 0L512 452.266667 285.866667 226.133333c-17.066667-17.066667-42.666667-17.066667-59.733334 0s-17.066667 42.666667 0 59.733334l256 256z" p-id="3113" /><path d="M738.133333 482.133333L512 708.266667l-226.133333-226.133334c-17.066667-17.066667-42.666667-17.066667-59.733334 0s-17.066667 42.666667 0 59.733334l256 256c8.533333 8.533333 21.333333 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8l256-256c17.066667-17.066667 17.066667-42.666667 0-59.733334s-42.666667-17.066667-59.733334 0z" p-id="3114" /></symbol>'}),A6=r().add(Zt);const La=Zt;var $t=new(e())({id:"pat-down-fill",use:"pat-down-fill-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-down-fill"><path d="M256 384l256 256 256-256H256z" p-id="8639" /></symbol>'}),I6=r().add($t);const Oa=$t;var Gt=new(e())({id:"pat-down",use:"pat-down-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-down">
<path d="M8,10.67c-0.17,0-0.34-0.07-0.47-0.2l-4-4c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0L8,9.06
	l3.53-3.53c0.26-0.26,0.68-0.26,0.94,0c0.26,0.26,0.26,0.68,0,0.94l-4,4C8.34,10.6,8.17,10.67,8,10.67z" />
</symbol>`}),V6=r().add(Gt);const Sa=Gt;var Xt=new(e())({id:"pat-download",use:"pat-download-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-download">
<g>
	<path d="M14,7.33c-0.37,0-0.67,0.3-0.67,0.67v5.33H2.67V8c0-0.37-0.3-0.67-0.67-0.67S1.33,7.63,1.33,8v6
		c0,0.37,0.3,0.67,0.67,0.67h12c0.37,0,0.67-0.3,0.67-0.67V8C14.67,7.63,14.37,7.33,14,7.33z" />
	<path d="M7.52,11.13c0.06,0.07,0.14,0.12,0.23,0.15c0.05,0.02,0.11,0.03,0.17,0.03c0.03,0,0.05,0.02,0.08,0.02
		c0,0,0,0,0,0s0,0,0,0c0.09,0,0.17-0.02,0.26-0.05c0.01,0,0.02-0.02,0.03-0.02c0.07-0.03,0.13-0.07,0.18-0.12l3-3
		c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L8.66,9.06V2c0-0.37-0.3-0.67-0.67-0.67S7.33,1.63,7.33,2v7.05L5.47,7.2
		c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L7.52,11.13z" />
</g>
</symbol>`}),U6=r().add(Xt);const Ha=Xt;var Yt=new(e())({id:"pat-drag",use:"pat-drag-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-drag">
  <path class="st0" d="M5,2c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" />
  <circle class="st0" cx="5" cy="8" r="1.3" />
  <path class="st0" d="M5,11.3c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" />
  <path class="st0" d="M11,4.7c.7,0,1.3-.6,1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3,1.3.6,1.3,1.3,1.3Z" />
  <path class="st0" d="M11,11.3c-.7,0-1.3.6-1.3,1.3s.6,1.3,1.3,1.3,1.3-.6,1.3-1.3-.6-1.3-1.3-1.3Z" />
  <circle class="st0" cx="11" cy="8" r="1.3" />
</symbol>`}),N6=r().add(Yt);const Da=Yt;var Jt=new(e())({id:"pat-edit-2",use:"pat-edit-2-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-edit-2"><path d="M624.14 218.77a32 32 0 0 0-45.26 0L82.64 715a92.14 92.14 0 0 0-24.21 42.75 34.24 34.24 0 0 0-0.68 3.61L32.27 955.84a32 32 0 0 0 36.07 35.86L262 965.2a30.79 30.79 0 0 0 3.42-0.66c17.94-4.48 32.58-12.28 43.58-23.23l496.2-496.23a32 32 0 0 0 0-45.26zM117.81 795.63l109.7 109.69-126.34 17.29z m168.31 78c-0.65-0.79-1.34-1.55-2.08-2.29l-132-132a32.44 32.44 0 0 0-1.73-1.6l451.2-451.09 135.8 135.8z" p-id="6832" /><path d="M310.1 637.62a32 32 0 0 0 45.25 45.26l269-269a32 32 0 0 0-45.25-45.26zM964 150.61l-90.57-90.55a96.1 96.1 0 0 0-135.76 0l-67.88 67.88a32 32 0 0 0 0 45.25l181.05 181.06a32 32 0 0 0 45.26 0l67.9-67.88a96 96 0 0 0 0-135.76z m-45.26 90.51l-45.25 45.25-135.8-135.8 45.25-45.26a32 32 0 0 1 45.26 0l90.55 90.55a32 32 0 0 1 0 45.26z" p-id="6833" /></symbol>'}),F6=r().add(Jt);const Ta=Jt;var Qt=new(e())({id:"pat-edit-paper",use:"pat-edit-paper-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-edit-paper">
<g>
	<path d="M13,6c-0.37,0-0.67,0.3-0.67,0.67V14L3,14V2h6.67c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H3
		c-0.74,0-1.33,0.6-1.33,1.33v12c0,0.73,0.6,1.33,1.33,1.33h9.33c0.74,0,1.33-0.6,1.33-1.33V6.67C13.67,6.3,13.37,6,13,6z" />
	<path d="M4.33,6.67H7c0.37,0,0.67-0.3,0.67-0.67S7.37,5.33,7,5.33H4.33c-0.37,0-0.67,0.3-0.67,0.67
		S3.97,6.67,4.33,6.67z" />
	<path d="M4.33,10h4C8.7,10,9,9.7,9,9.33S8.7,8.67,8.33,8.67h-4c-0.37,0-0.67,0.3-0.67,0.67S3.97,10,4.33,10z" />
	<path d="M14.14,1.53c-0.26-0.26-0.68-0.26-0.94,0l-4,4c-0.26,0.26-0.26,0.68,0,0.94C9.33,6.6,9.5,6.67,9.67,6.67
		s0.34-0.06,0.47-0.2l4-4C14.4,2.21,14.4,1.79,14.14,1.53z" />
</g>
</symbol>`}),j6=r().add(Qt);const Ra=Qt;var qt=new(e())({id:"pat-edit",use:"pat-edit-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-edit"><path d="M965.93 152.7l-92.76-93.89A89.63 89.63 0 0 0 809.25 32H809a89.58 89.58 0 0 0-63.79 26.43L273.9 529.71a90.23 90.23 0 0 0-23.74 41.92 32.41 32.41 0 0 0-0.67 3.51l-25.21 188.18a32 32 0 0 0 36 36l188.33-25.22a32 32 0 0 0 3.51-0.67 90.24 90.24 0 0 0 41.81-23.62l471.5-469.76a90.41 90.41 0 0 0 0.5-127.35zM309.31 610.57L413 714.25l-119.72 16z m611-375.86L471.24 682c-0.21-0.21-0.4-0.43-0.61-0.64l-128-128c-0.32-0.31-0.64-0.62-1-0.92l448.8-448.76A26.08 26.08 0 0 1 809 96h0.08a26 26 0 0 1 18.58 7.8l92.77 93.88a26.29 26.29 0 0 1-0.17 37.03zM786.6 162.59l-292 292a32 32 0 0 0 45.25 45.25l292.05-292a32 32 0 0 0-45.26-45.25zM832 544a32 32 0 0 0-32 32v320a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V256a32 32 0 0 1 32-32h320a32 32 0 0 0 0-64H128a96.11 96.11 0 0 0-96 96v640a96.11 96.11 0 0 0 96 96h640a96.11 96.11 0 0 0 96-96V576a32 32 0 0 0-32-32z" p-id="6802" /></symbol>'}),W6=r().add(qt);const Aa=qt;var te=new(e())({id:"pat-editor",use:"pat-editor-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-editor">
    <path d="M12.7,15.3h-2.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h2.2l0-3c0-0.4,0.3-0.7,0.7-0.7S14,10.6,14,11v3
	C14,14.7,13.4,15.3,12.7,15.3z" />
    <path d="M5.3,15.3h-2C2.6,15.3,2,14.7,2,14V2c0-0.7,0.6-1.3,1.3-1.3h9.3C13.4,0.7,14,1.3,14,2v3.3C14,5.7,13.7,6,13.3,6
	s-0.7-0.3-0.7-0.7V2H3.3l0,12h2C5.7,14,6,14.3,6,14.7S5.7,15.3,5.3,15.3z" />
    <path d="M10,6H5.3C5,6,4.7,5.7,4.7,5.3S5,4.7,5.3,4.7H10c0.4,0,0.7,0.3,0.7,0.7S10.4,6,10,6z" />
    <path d="M7.7,15.3c-0.1,0-0.3,0-0.4-0.1C7,15,6.9,14.5,7.1,14.2l5.7-7C13,7,13.5,6.9,13.8,7.1c0.3,0.2,0.3,0.7,0.1,0.9
	l-5.7,7C8.1,15.2,7.9,15.3,7.7,15.3z" />
    <path d="M8,8.7H5.3C5,8.7,4.7,8.4,4.7,8S5,7.3,5.3,7.3H8c0.4,0,0.7,0.3,0.7,0.7S8.4,8.7,8,8.7z" />
</symbol>`}),K6=r().add(te);const Ia=te;var ee=new(e())({id:"pat-enquire",use:"pat-enquire-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-enquire">
  <path d="M18.5,9c1.9,0,3.5-1.6,3.5-3.5s-1.6-3.5-3.5-3.5-3.5,1.6-3.5,3.5,1.6,3.5,3.5,3.5ZM18.5,4c.8,0,1.5.7,1.5,1.5s-.7,1.5-1.5,1.5-1.5-.7-1.5-1.5.7-1.5,1.5-1.5Z" />
  <path d="M6,7c1.7,0,3-1.3,3-3s-1.3-3-3-3-3,1.3-3,3,1.3,3,3,3ZM6,3c.6,0,1,.4,1,1s-.4,1-1,1-1-.4-1-1,.4-1,1-1Z" />
  <path d="M18.5,10c-2,0-3.5,1.7-3.5,4v2.5l-2.6,2.2c-.4.4-.5,1-.1,1.4.4.4,1,.5,1.4.1l3-2.5c.2-.2.4-.5.4-.8v-3c0-1,.5-2,1.5-2s1.5,1,1.5,2v7c0,.6.4,1,1,1s1-.4,1-1v-7c0-2.3-1.5-4-3.5-4Z" />
  <path d="M12.8,17.1c.4-.4.3-1.1-.1-1.4l-2.6-2.2v-1.5c0-2.3-1.5-4-3.5-4s-3.5,1.7-3.5,4v9c0,.6.4,1,1,1s1-.4,1-1v-9c0-1,.5-2,1.5-2s1.5,1,1.5,2v2c0,.3.1.6.4.8l3,2.5c.4.4,1.1.3,1.4-.1Z" />
</symbol>`}),Z6=r().add(ee);const Va=ee;var re=new(e())({id:"pat-enter-key",use:"pat-enter-key-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-enter-key">
<path d="M8 0.667c-0.368 0-0.667 0.298-0.667 0.667v0 4.667h-6c-0.368 0-0.667 0.298-0.667 0.667v0 8c0 0.368 0.298 0.667 0.667 0.667h13.333c0.368-0 0.667-0.298 0.667-0.667v0-13.333c-0-0.368-0.298-0.667-0.667-0.667v0zM8.667 2h5.333v12h-12v-6.667h6c0.368-0 0.667-0.298 0.667-0.667v0z" />
<path d="M7 8.667c-0.184 0-0.351 0.075-0.471 0.195l-1.333 1.333c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l1.333 1.333c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195v0c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471l-0.862-0.862 0.862-0.862c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0c-0.121-0.121-0.287-0.195-0.471-0.195v0z" />
<path d="M11.333 7c-0.368 0-0.667 0.298-0.667 0.667v0 2.333h-5c-0.368 0-0.667 0.298-0.667 0.667v0c0 0.368 0.298 0.667 0.667 0.667v0h5.667c0.368-0 0.667-0.298 0.667-0.667v0-3c0-0.368-0.298-0.667-0.667-0.667v0z" />
</symbol>`}),$6=r().add(re);const Ua=re;var oe=new(e())({id:"pat-enter",use:"pat-enter-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-enter">
<g>
	<path d="M8,13.33H2.67V2.67H8c0.37,0,0.67-0.3,0.67-0.67S8.37,1.33,8,1.33H2c-0.37,0-0.67,0.3-0.67,0.67v12
		c0,0.37,0.3,0.67,0.67,0.67h6c0.37,0,0.67-0.3,0.67-0.67S8.37,13.33,8,13.33z" />
	<path d="M14,7.33H6.95L8.8,5.47c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L4.87,7.52
		C4.81,7.58,4.75,7.66,4.72,7.75c-0.03,0.07-0.04,0.13-0.04,0.2c0,0.02-0.01,0.03-0.01,0.05c0,0,0,0,0,0c0,0.09,0.02,0.18,0.05,0.26
		c0,0.01,0.01,0.01,0.01,0.02c0.03,0.07,0.07,0.14,0.13,0.2l3,3c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2
		c0.26-0.26,0.26-0.68,0-0.94L6.94,8.66H14c0.37,0,0.67-0.3,0.67-0.67S14.37,7.33,14,7.33z" />
</g>
</symbol>`}),G6=r().add(oe);const Na=oe;var ae=new(e())({id:"pat-enterprise",use:"pat-enterprise-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-enterprise">
<g>
	<path d="M14.67,13.33H14V2c0-0.74-0.6-1.33-1.33-1.33H6c-0.74,0-1.33,0.6-1.33,1.33v6c0,0,0,0,0,0H3.33
		C2.6,8,2,8.6,2,9.33v4H1.33c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h2h1.33H6h6.67h2c0.37,0,0.67-0.3,0.67-0.67
		S15.04,13.33,14.67,13.33z M6,1.33V2c0,0,0,0,0,0L6,1.33z M3.33,13.33l0-4c0,0,0,0,0,0l0-0.67v0.67h1.33l0,1.44
		c-0.1-0.06-0.21-0.1-0.33-0.1H4c-0.37,0-0.67,0.3-0.67,0.67S3.63,12,4,12h0.33c0.12,0,0.23-0.04,0.33-0.1l0,1.44H3.33z M6,13.33
		L6,2l6.67,0l0,11.33H6z" />
	<rect x="7.33" y="3.33" width="1.33" height="1.33" />
	<rect x="10" y="3.33" width="1.33" height="1.33" />
	<rect x="7.33" y="5.67" width="1.33" height="1.33" />
	<rect x="10" y="5.67" width="1.33" height="1.33" />
	<rect x="10" y="8" width="1.33" height="1.33" />
	<rect x="10" y="10.33" width="1.33" height="1.33" />
</g>
</symbol>`}),X6=r().add(ae);const Fa=ae;var ne=new(e())({id:"pat-es-color",use:"pat-es-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-es-color"><path d="M639.26 256C632.46 147.34 590.83 96 512 96c-78.64 0-120.27 51.39-127.24 160z m-302.57 0C344.67 122.72 403 48 512 48c109.15 0 167.53 74.77 175.33 208h148.72l60 624H128l60.24-624z m455.75 48H231.82l-51 528H688l50.34-528zM464 648.4l77.13 42.6-14.77-90.53 63.84-65.44-88.1-13.46-38.1-81.13-38.1 81.17-88.1 13.46 63.84 65.44L386.87 691zM323.58 780.87l26.78-164.18-112.16-115L393.33 478 464 327.47 534.67 478l155.13 23.7-112.16 115 26.78 164.18L464 703.25z" fill="#FFC100" p-id="6259" /></symbol>'}),Y6=r().add(ne);const ja=ne;var ie=new(e())({id:"pat-es",use:"pat-es-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-es"><path d="M639.26 256C632.46 147.34 590.83 96 512 96c-78.64 0-120.27 51.39-127.24 160z m-302.57 0C344.67 122.72 403 48 512 48c109.15 0 167.53 74.77 175.33 208h148.72l60 624H128l60.24-624z m455.75 48H231.82l-51 528H688l50.34-528zM464 648.4l77.13 42.6-14.77-90.53 63.84-65.44-88.1-13.46-38.1-81.13-38.1 81.17-88.1 13.46 63.84 65.44L386.87 691zM323.58 780.87l26.78-164.18-112.16-115L393.33 478 464 327.47 534.67 478l155.13 23.7-112.16 115 26.78 164.18L464 703.25z" p-id="6289" /></symbol>'}),J6=r().add(ie);const Wa=ie;var se=new(e())({id:"pat-excel",use:"pat-excel-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-excel">
<g>
	<path d="M12.67,0.67H3.33C2.6,0.67,2,1.26,2,2v2.33H1.33c-0.37,0-0.67,0.3-0.67,0.67v6c0,0.37,0.3,0.67,0.67,0.67H2V14
		c0,0.74,0.6,1.33,1.33,1.33h9.33c0.73,0,1.33-0.6,1.33-1.33V2C14,1.26,13.4,0.67,12.67,0.67z M2,5.67h4.67v4.67H2V5.67z M3.33,14
		v-2.33h4C7.7,11.67,8,11.37,8,11V5c0-0.37-0.3-0.67-0.67-0.67h-4l0-2.33h9.33l0,12H3.33z" />
	<path d="M11.33,4.33h-1c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h1C11.7,5.67,12,5.37,12,5S11.7,4.33,11.33,4.33
		z" />
	<path d="M11.33,7h-2C8.96,7,8.67,7.3,8.67,7.67s0.3,0.67,0.67,0.67h2c0.37,0,0.67-0.3,0.67-0.67S11.7,7,11.33,7z" />
	<path d="M11.33,9.67h-2c-0.37,0-0.67,0.3-0.67,0.67S8.96,11,9.33,11h2C11.7,11,12,10.7,12,10.33S11.7,9.67,11.33,9.67z
		" />
	<path d="M2.86,9.47c0.13,0.13,0.3,0.2,0.47,0.2S3.67,9.6,3.8,9.47l0.53-0.53l0.53,0.53c0.13,0.13,0.3,0.2,0.47,0.2
		S5.67,9.6,5.8,9.47c0.26-0.26,0.26-0.68,0-0.94L5.28,8L5.8,7.47c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L4.33,7.06
		L3.8,6.53c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L3.39,8L2.86,8.53C2.6,8.79,2.6,9.21,2.86,9.47z" />
</g>
</symbol>`}),Q6=r().add(se);const Ka=se;var le=new(e())({id:"pat-exit",use:"pat-exit-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-exit">
<g>
	<path d="M8,13.33H2.67V2.67H8c0.37,0,0.67-0.3,0.67-0.67S8.37,1.33,8,1.33H2c-0.37,0-0.67,0.3-0.67,0.67v12
		c0,0.37,0.3,0.67,0.67,0.67h6c0.37,0,0.67-0.3,0.67-0.67S8.37,13.33,8,13.33z" />
	<path d="M14.67,8C14.67,8,14.67,8,14.67,8c0-0.05-0.02-0.09-0.03-0.14c-0.01-0.04-0.01-0.08-0.02-0.11
		c-0.04-0.09-0.09-0.16-0.15-0.23l-2.99-2.99c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l1.86,1.86H5.33
		c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h7.06l-1.87,1.86c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2
		s0.34-0.07,0.47-0.2l3-3c0.05-0.05,0.08-0.11,0.11-0.16c0.01-0.02,0.03-0.03,0.03-0.05C14.65,8.17,14.67,8.09,14.67,8z" />
</g>
</symbol>`}),q6=r().add(le);const Za=le;var ce=new(e())({id:"pat-experiment",use:"pat-experiment-usage",viewBox:"0 0 512 512",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="pat-experiment">
<g>
    <path d="M301.087 169.681l76.989 159.588 38.428-18.539-74.87-155.196v-112.868q0-2.101-0.41-4.162t-1.214-4.002-1.971-3.689-2.653-3.233-3.233-2.653-3.688-1.971-4.002-1.214-4.162-0.41h-128.099q-2.101 0-4.162 0.41t-4.002 1.214-3.689 1.971-3.232 2.653-2.653 3.233-1.971 3.689-1.214 4.002-0.41 4.162v112.853l-75.118 155.185 38.404 18.59 77.249-159.588q2.131-4.403 2.131-9.295v-96.412h85.432v96.412q0 4.877 2.119 9.269z" />
    <path d="M73.844 485.047q11.608 5.62 24.505 5.62h315.384q23.296 0 39.769-16.474t16.474-39.769q0-12.858-5.587-24.438l-47.882-99.255q-2.454-5.084-7.101-8.289-90.62-62.532-167.063 1.17-51.538 42.949-115.248-1.152-1.359-0.941-2.847-1.661-1.891-0.916-3.925-1.445t-4.131-0.651-4.178 0.168-4.066 0.979-3.796 1.754-3.382 2.461-2.836 3.073-2.183 3.567l-48.026 99.214q-10.15 20.969-2.5 42.974t28.619 32.154zM413.733 448h-315.384q-3.112 0-5.915-1.356-5.062-2.45-6.909-7.762t0.603-10.373l37.755-77.995q78.307 42.097 145.774-14.125 49.708-41.423 110.945-1.884l45.357 94.020q1.351 2.796 1.351 5.899 0 5.623-3.978 9.599t-9.6 3.976z" />
</g>
</symbol>`}),t2=r().add(ce);const $a=ce;var de=new(e())({id:"pat-explore",use:"pat-explore-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-explore"><path d="M755.2 235.52c-10.24 2.56-240.64 94.72-335.36 186.88-92.16 92.16-181.76 325.12-186.88 335.36-2.56 10.24-2.56 20.48 5.12 28.16 5.12 5.12 10.24 7.68 17.92 7.68 2.56 0 5.12 0 10.24-2.56 10.24-2.56 240.64-94.72 335.36-186.88C693.76 512 783.36 279.04 788.48 268.8c2.56-10.24 2.56-20.48-5.12-28.16s-17.92-10.24-28.16-5.12zM565.76 565.76c-58.88 58.88-186.88 120.32-261.12 151.04 33.28-74.24 92.16-202.24 151.04-261.12 58.88-58.88 186.88-120.32 261.12-151.04-30.72 74.24-92.16 202.24-151.04 261.12zM460.8 512a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0zM512 0C230.4 0 0 230.4 0 512s230.4 512 512 512c107.52 0 209.92-33.28 296.96-94.72 10.24-7.68 15.36-23.04 5.12-35.84-7.68-10.24-23.04-15.36-35.84-5.12-76.8 53.76-168.96 84.48-266.24 84.48-253.44 0-460.8-207.36-460.8-460.8S258.56 51.2 512 51.2 972.8 258.56 972.8 512c0 97.28-30.72 189.44-87.04 268.8-7.68 10.24-5.12 28.16 5.12 35.84 10.24 7.68 28.16 5.12 35.84-5.12 64-89.6 97.28-192 97.28-299.52C1024 230.4 793.6 0 512 0z" p-id="4076" /></symbol>'}),e2=r().add(de);const Ga=de;var pe=new(e())({id:"pat-external",use:"pat-external-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-external">
<g>
	<path d="M13.33,7.58c-0.37,0-0.67,0.3-0.67,0.67l0,5.42l-9.33,0l0-11.33h3.33c0.37,0,0.67-0.3,0.67-0.67S7.03,1,6.67,1
		H3.33C2.6,1,2,1.6,2,2.33v11.33C2,14.4,2.6,15,3.33,15h9.33C13.4,15,14,14.4,14,13.67V8.25C14,7.88,13.7,7.58,13.33,7.58z" />
	<path d="M13.33,1h-4C8.96,1,8.67,1.3,8.67,1.67s0.3,0.67,0.67,0.67h2.39l-5.2,5.2c-0.26,0.26-0.26,0.68,0,0.94
		C6.66,8.6,6.83,8.67,7,8.67s0.34-0.06,0.47-0.2l5.19-5.19v2.39c0,0.37,0.3,0.67,0.67,0.67S14,6.03,14,5.67v-4
		C14,1.3,13.7,1,13.33,1z" />
</g>
</symbol>`}),r2=r().add(pe);const Xa=pe;var me=new(e())({id:"pat-file-addition",use:"pat-file-addition-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-file-addition">
	<path d="M13.9,4.4C13.9,4.4,13.9,4.4,13.9,4.4c-0.1-0.1-0.1-0.2-0.1-0.2l-3-3.3c-0.1-0.1-0.3-0.2-0.5-0.2h-7
		C2.6,0.7,2,1.3,2,2v12c0,0.7,0.6,1.3,1.3,1.3h4C7.7,15.3,8,15,8,14.7S7.7,14,7.3,14h-4l0-12h6v2.7C9.3,5,9.6,5.3,10,5.3h2.7v2.3
		c0,0.4,0.3,0.7,0.7,0.7S14,8,14,7.7v-3C14,4.6,14,4.5,13.9,4.4z M10.7,2.7L11.8,4h-1.2V2.7z" />
	<path d="M13.3,11.3h-1.7V9.7C11.7,9.3,11.4,9,11,9s-0.7,0.3-0.7,0.7v1.7H8.7C8.3,11.3,8,11.6,8,12s0.3,0.7,0.7,0.7h1.7
		v1.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-1.7h1.7c0.4,0,0.7-0.3,0.7-0.7S13.7,11.3,13.3,11.3z" />
</symbol>`}),o2=r().add(me);const Ya=me;var ge=new(e())({id:"pat-file-conversion",use:"pat-file-conversion-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-file-conversion">
<path d="M7.3,14h-4l0-12h6v2.7C9.3,5,9.6,5.3,10,5.3h2.7v2.3c0,0.4,0.3,0.7,0.7,0.7S14,8,14,7.7v-3
	c0-0.1,0-0.2-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0-0.1-0.1-0.1l-3-3.3c-0.1-0.1-0.3-0.2-0.5-0.2h-7C2.6,0.7,2,1.3,2,2v12
	c0,0.7,0.6,1.3,1.3,1.3h4C7.7,15.3,8,15,8,14.7S7.7,14,7.3,14z M11.8,4h-1.2V2.7L11.8,4z" />
<path d="M14.1,10.5C14.1,10.5,14.1,10.5,14.1,10.5l-1.7-1.7c-0.3-0.3-0.7-0.3-0.9,0c-0.3,0.3-0.3,0.7,0,0.9l0.5,0.5H9
	c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h4.7c0.1,0,0.2,0,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1c0,0,0,0,0,0c0,0,0,0,0,0
	c0.1-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2C14.3,10.7,14.2,10.6,14.1,10.5z" />
<path d="M13.7,12.3H9c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0,0,0l0,0
	c-0.1,0.1-0.1,0.1-0.1,0.2c-0.1,0.2-0.1,0.3,0,0.5c0,0.1,0.1,0.2,0.1,0.2l0,0l1.7,1.7c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2
	c0.3-0.3,0.3-0.7,0-0.9l-0.5-0.5h3.1c0.4,0,0.7-0.3,0.7-0.7S14,12.3,13.7,12.3z" />
</symbol>`}),a2=r().add(ge);const Ja=ge;var he=new(e())({id:"pat-file-draft",use:"pat-file-draft-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-file-draft">
<g>
	<path d="M13.99,4.6c-0.01-0.07-0.01-0.13-0.04-0.19c-0.03-0.08-0.08-0.15-0.14-0.21c0,0,0,0,0,0l-3.33-3.33l0,0
		c-0.06-0.06-0.14-0.11-0.22-0.14C10.17,0.68,10.09,0.67,10,0.67H3.33C2.6,0.67,2,1.26,2,2v12c0,0.74,0.6,1.33,1.33,1.33h9.33
		c0.73,0,1.33-0.6,1.33-1.33V4.67C14,4.64,13.99,4.63,13.99,4.6z M10.67,2.94L11.72,4h-1.06V2.94z M3.33,14l0-12h6v2.67
		c0,0.37,0.3,0.67,0.67,0.67h2.67l0,8.67H3.33z" />
	<path d="M9.47,6.53C9.35,6.4,9.18,6.33,9,6.33S8.65,6.4,8.53,6.53L5.2,9.86C5.07,9.99,5,10.16,5,10.33v1.33
		c0,0.37,0.3,0.67,0.67,0.67H7c0.18,0,0.35-0.07,0.47-0.2L10.8,8.8c0.26-0.26,0.26-0.68,0-0.94L9.47,6.53z M6.72,11H6.33v-0.39
		L9,7.94l0.39,0.39L6.72,11z" />
</g>
</symbol>`}),n2=r().add(he);const Qa=he;var we=new(e())({id:"pat-file-success",use:"pat-file-success-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-file-success">
  <path d="M14,4.6c0,0,0-.1,0-.2,0,0,0-.2-.1-.2,0,0,0,0,0,0l-3.3-3.3h0c0,0-.1-.1-.2-.1,0,0-.2,0-.3,0H3.3c-.7,0-1.3.6-1.3,1.3v12c0,.7.6,1.3,1.3,1.3h9.3c.7,0,1.3-.6,1.3-1.3V4.7s0,0,0,0ZM10.7,2.9l1.1,1.1h-1.1v-1.1ZM3.3,14V2h6v2.7c0,.4.3.7.7.7h2.7v8.7s-9.3,0-9.3,0Z" />
  <path d="M10.2,7.2l-2.6,3.1-1.5-1.2c-.3-.2-.7-.2-.9,0-.2.3-.2.7,0,.9l2,1.7c.1,0,.3.2.4.2s0,0,0,0c.2,0,.3-.1.5-.2l3-3.7c.2-.3.2-.7,0-.9-.3-.2-.7-.2-.9,0Z" />
</symbol>`}),i2=r().add(we);const qa=we;var ve=new(e())({id:"pat-file",use:"pat-file-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-file">
<g>
	<path d="M13.99,4.6c-0.01-0.07-0.01-0.13-0.04-0.19c-0.03-0.08-0.08-0.15-0.14-0.21c0,0,0,0,0,0l-3.33-3.33l0,0
		c-0.06-0.06-0.14-0.11-0.22-0.14C10.17,0.68,10.09,0.67,10,0.67H3.33C2.6,0.67,2,1.26,2,2v12c0,0.74,0.6,1.33,1.33,1.33h9.33
		c0.73,0,1.33-0.6,1.33-1.33V4.67C14,4.64,13.99,4.63,13.99,4.6z M10.67,2.94L11.72,4h-1.06V2.94z M3.33,14l0-12h6v2.67
		c0,0.37,0.3,0.67,0.67,0.67h2.67l0,8.67H3.33z" />
	<path d="M9.47,7.53c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l1.19,1.2l-1.19,1.19
		c-0.26,0.26-0.26,0.68,0,0.94C8.66,11.93,8.83,12,9,12s0.34-0.07,0.47-0.2l1.67-1.67c0.12-0.12,0.2-0.29,0.2-0.47
		s-0.07-0.35-0.2-0.47L9.47,7.53z" />
	<path d="M7.47,7.53c-0.26-0.26-0.68-0.26-0.94,0L4.86,9.2C4.74,9.32,4.67,9.49,4.67,9.67s0.07,0.35,0.2,0.47l1.67,1.67
		C6.66,11.93,6.83,12,7,12s0.34-0.07,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94L6.28,9.67l1.2-1.2C7.73,8.21,7.73,7.79,7.47,7.53z" />
</g>
</symbol>`}),s2=r().add(ve);const tn=ve;var ue=new(e())({id:"pat-fill-in-the-blank-for-programming",use:"pat-fill-in-the-blank-for-programming-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-fill-in-the-blank-for-programming"><path d="M406.3 627.55a32 32 0 0 0 45.25-45.25L317.25 448l134.3-134.3a32 32 0 0 0-45.25-45.25L249.37 425.37a32 32 0 0 0 0 45.26zM572.45 627.55a32 32 0 0 0 45.26 0l156.92-156.92a32 32 0 0 0 0-45.26L617.71 268.45a32 32 0 0 0-45.26 45.25L706.75 448l-134.3 134.3a32 32 0 0 0 0 45.25zM768 800H256a32 32 0 0 0 0 64h512a32 32 0 0 0 0-64z" p-id="5283" /><path d="M914.22 269.87L691.32 39.08A128.62 128.62 0 0 0 599.25 0h-397.4a128.14 128.14 0 0 0-128 128v768a128.14 128.14 0 0 0 128 128h620.3a128.14 128.14 0 0 0 128-128V358.79a127.38 127.38 0 0 0-35.93-88.92zM886.15 896a64.07 64.07 0 0 1-64 64h-620.3a64.07 64.07 0 0 1-64-64V128a64.07 64.07 0 0 1 64-64h397.4a64.32 64.32 0 0 1 46 19.54l222.9 230.79a63.69 63.69 0 0 1 18 44.46z" p-id="5284" /></symbol>'}),l2=r().add(ue);const en=ue;var fe=new(e())({id:"pat-fill-in-the-blank",use:"pat-fill-in-the-blank-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-fill-in-the-blank"><path d="M914.22 269.87L691.32 39.08C667.34 14.24 633.78 0 599.25 0h-397.4c-70.58 0-128 57.42-128 128v768c0 70.58 57.42 128 128 128h620.31c70.58 0 128-57.42 128-128V358.79c-0.01-33.35-12.77-64.93-35.94-88.92zM886.15 896c0 35.29-28.71 64-64 64h-620.3c-35.29 0-64-28.71-64-64V128c0-35.29 28.71-64 64-64h397.41c17.26 0 34.04 7.12 46.04 19.54l222.9 230.79c11.59 12 17.97 27.79 17.97 44.46V896zM768 800H256c-17.67 0-32 14.33-32 32s14.33 32 32 32h512c17.67 0 32-14.33 32-32s-14.33-32-32-32zM308.76 733.96c16.55 6.2 34.99-2.18 41.2-18.73L390.18 608h243.65l40.21 107.24c4.82 12.85 17.01 20.77 29.97 20.77 3.73 0 7.53-0.66 11.23-2.05 16.55-6.21 24.93-24.65 18.73-41.2L686.14 565.2c-0.07-0.21-0.15-0.41-0.23-0.61L541.96 180.76C537.28 168.27 525.34 160 512 160s-25.28 8.27-29.96 20.76L338.11 564.57c-0.08 0.22-0.17 0.43-0.24 0.65l-47.83 127.54c-6.21 16.55 2.18 35 18.72 41.2zM512 283.14L609.82 544H414.18L512 283.14z" p-id="5435" /></symbol>'}),c2=r().add(fe);const rn=fe;var be=new(e())({id:"pat-filter",use:"pat-filter-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-filter"><path d="M911.429 168.571q9.714 23.429-8 40L621.714 490.286v424q0 24-22.285 33.714-7.429 2.857-14.286 2.857-15.429 0-25.714-10.857L413.143 793.714Q402.286 782.857 402.286 768V490.286L120.57 208.57q-17.714-16.571-8-40 9.715-22.285 33.715-22.285h731.428q24 0 33.715 22.285z" p-id="3866" /></symbol>'}),d2=r().add(be);const on=be;var xe=new(e())({id:"pat-fold",use:"pat-fold-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-fold">
<g>
	<path d="M14.47,1.53c-0.26-0.26-0.68-0.26-0.94,0L9.67,5.39V3c0-0.37-0.3-0.67-0.67-0.67S8.33,2.63,8.33,3v4
		c0,0.09,0.02,0.17,0.05,0.26c0.07,0.16,0.2,0.29,0.36,0.36C8.83,7.65,8.91,7.67,9,7.67h4c0.37,0,0.67-0.3,0.67-0.67
		S13.37,6.33,13,6.33h-2.39l3.86-3.86C14.73,2.21,14.73,1.79,14.47,1.53z" />
	<path d="M7.62,8.75c-0.07-0.16-0.2-0.29-0.36-0.36C7.17,8.35,7.09,8.33,7,8.33H3c-0.37,0-0.67,0.3-0.67,0.67
		S2.63,9.67,3,9.67h2.39l-3.86,3.86c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l3.86-3.86V13
		c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V9C7.67,8.91,7.65,8.83,7.62,8.75z" />
</g>
</symbol>`}),p2=r().add(xe);const an=xe;var ye=new(e())({id:"pat-folder-plus",use:"pat-folder-plus-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-folder-plus">
  <path d="M13.7,3.3h-5.4l-1.5-1.8c-.1-.2-.3-.2-.5-.2H2.3c-.7,0-1.3.6-1.3,1.3v10.7c0,.7.6,1.3,1.3,1.3h11.3c.7,0,1.3-.6,1.3-1.3V4.7c0-.7-.6-1.3-1.3-1.3ZM2.3,13.3V2.7h0s3.7,0,3.7,0l1.5,1.8c.1.2.3.2.5.2h5.7s0,8.7,0,8.7H2.3Z" />
  <path d="M10,8.3h-1.3v-1.3c0-.4-.3-.7-.7-.7s-.7.3-.7.7v1.3h-1.3c-.4,0-.7.3-.7.7s.3.7.7.7h1.3v1.3c0,.4.3.7.7.7s.7-.3.7-.7v-1.3h1.3c.4,0,.7-.3.7-.7s-.3-.7-.7-.7Z" />
</symbol>`}),m2=r().add(ye);const nn=ye;var _e=new(e())({id:"pat-folder-star-fill",use:"pat-folder-star-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-folder-star-fill">
<g>
	<path d="M13.67,3.33H8.31L6.85,1.57C6.72,1.42,6.53,1.33,6.33,1.33h-4C1.6,1.33,1,1.93,1,2.67v10.67
		c0,0.74,0.6,1.33,1.33,1.33h5C7.7,14.67,8,14.37,8,14s-0.3-0.67-0.67-0.67h-5l0-10.67h3.69l1.47,1.76C7.61,4.58,7.8,4.67,8,4.67
		h5.67v3c0,0.37,0.3,0.67,0.67,0.67S15,8.03,15,7.67v-3C15,3.93,14.4,3.33,13.67,3.33z" />
	<path d="M14.28,10.18l-1.42-0.16l-0.59-1.3c-0.11-0.24-0.35-0.39-0.61-0.39s-0.5,0.15-0.61,0.39l-0.59,1.3l-1.41,0.16
		c-0.26,0.03-0.48,0.21-0.56,0.46c-0.08,0.25-0.01,0.52,0.18,0.7l1.05,0.96l-0.28,1.4c-0.05,0.26,0.05,0.52,0.26,0.67
		c0.12,0.08,0.25,0.13,0.39,0.13c0.11,0,0.23-0.03,0.33-0.09l1.24-0.7l1.24,0.7c0.23,0.13,0.51,0.11,0.72-0.04
		c0.21-0.15,0.31-0.42,0.26-0.67l-0.28-1.4l1.05-0.96c0.19-0.18,0.26-0.45,0.18-0.7C14.76,10.39,14.54,10.21,14.28,10.18z" />
</g>
</symbol>`}),g2=r().add(_e);const sn=_e;var Ce=new(e())({id:"pat-folder-success",use:"pat-folder-success-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-folder-success">
  <path d="M13.7,3.3h-5.4l-1.5-1.8c-.1-.2-.3-.2-.5-.2H2.3c-.7,0-1.3.6-1.3,1.3v10.7c0,.7.6,1.3,1.3,1.3h11.3c.7,0,1.3-.6,1.3-1.3V4.7c0-.7-.6-1.3-1.3-1.3ZM2.3,13.3V2.7h0s3.7,0,3.7,0l1.5,1.8c.1.2.3.2.5.2h5.7s0,8.7,0,8.7H2.3Z" />
  <path d="M10.2,6.9l-2.6,3.2-1.2-.9c-.3-.2-.7-.2-.9.1-.2.3-.2.7.1.9l1.7,1.3c.1,0,.3.1.4.1s.4,0,.5-.2l3-3.7c.2-.3.2-.7,0-.9s-.7-.2-.9,0Z" />
</symbol>`}),h2=r().add(Ce);const ln=Ce;var Me=new(e())({id:"pat-formula",use:"pat-formula-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-formula">
<path d="M12.3,14.7H2.7c-0.3,0-0.5-0.2-0.6-0.4c-0.1-0.2,0-0.5,0.1-0.7L7.7,8L2.2,2.5C2,2.3,1.9,2,2.1,1.7
	c0.1-0.2,0.3-0.4,0.6-0.4h9.7c0.2,0,0.3,0.1,0.5,0.2l1,1c0.3,0.3,0.3,0.7,0,0.9c-0.3,0.3-0.7,0.3-0.9,0l-0.8-0.8H4.3l4.9,4.9
	c0.3,0.3,0.3,0.7,0,0.9l-4.9,4.9h7.8l0.8-0.8c0.3-0.3,0.7-0.3,0.9,0c0.3,0.3,0.3,0.7,0,0.9l-1,1C12.7,14.6,12.5,14.7,12.3,14.7z" />
</symbol>`}),w2=r().add(Me);const cn=Me;var ke=new(e())({id:"pat-fullscreen",use:"pat-fullscreen-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-fullscreen">
<g>
	<path d="M14,1.33h-3c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h2.33V5c0,0.37,0.3,0.67,0.67,0.67
		s0.67-0.3,0.67-0.67V2C14.67,1.63,14.37,1.33,14,1.33z" />
	<path d="M14,10.33c-0.37,0-0.67,0.3-0.67,0.67v2.33H11c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h3
		c0.37,0,0.67-0.3,0.67-0.67v-3C14.67,10.63,14.37,10.33,14,10.33z" />
	<path d="M5,13.33H2.67V11c0-0.37-0.3-0.67-0.67-0.67S1.33,10.63,1.33,11v3c0,0.37,0.3,0.67,0.67,0.67h3
		c0.37,0,0.67-0.3,0.67-0.67S5.37,13.33,5,13.33z" />
	<path d="M5,1.33H2c-0.37,0-0.67,0.3-0.67,0.67v3c0,0.37,0.3,0.67,0.67,0.67S2.67,5.37,2.67,5V2.67H5
		c0.37,0,0.67-0.3,0.67-0.67S5.37,1.33,5,1.33z" />
</g>
</symbol>`}),v2=r().add(ke);const dn=ke;var Ee=new(e())({id:"pat-gear",use:"pat-gear-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-gear">
<g>
	<path d="M15,5.8c-0.09-0.28-0.37-0.47-0.66-0.47C13.6,5.33,13,4.74,13,4c0-0.21,0.05-0.4,0.14-0.59
		c0.13-0.26,0.07-0.58-0.14-0.78c-0.86-0.8-1.91-1.39-3.03-1.7c-0.3-0.08-0.63,0.06-0.77,0.34C8.96,1.72,8.5,2,8,2
		C7.5,2,7.04,1.72,6.81,1.27C6.67,0.99,6.34,0.85,6.04,0.93c-1.13,0.31-2.17,0.9-3.03,1.7c-0.22,0.2-0.27,0.52-0.14,0.78
		C2.95,3.59,3,3.79,3,4c0,0.74-0.6,1.33-1.33,1.33C1.36,5.31,1.09,5.51,1,5.8C0.78,6.51,0.67,7.25,0.67,8c0,0.5,0.05,1,0.15,1.48
		c0.07,0.33,0.37,0.56,0.71,0.53C2.28,9.94,3,10.55,3,11.33c0,0.31-0.11,0.62-0.31,0.86c-0.22,0.26-0.21,0.65,0.03,0.89
		C3.59,14,4.7,14.67,5.9,15.03c0.35,0.11,0.71-0.09,0.83-0.44c0.18-0.55,0.69-0.93,1.27-0.93s1.09,0.37,1.27,0.93
		c0.09,0.28,0.35,0.46,0.63,0.46c0.06,0,0.13-0.01,0.19-0.03c1.21-0.36,2.31-1.03,3.19-1.95c0.24-0.25,0.25-0.63,0.03-0.89
		c-0.2-0.24-0.31-0.54-0.31-0.86c0-0.78,0.71-1.39,1.47-1.33c0.33,0.03,0.64-0.2,0.71-0.53c0.1-0.48,0.15-0.98,0.15-1.48
		C15.33,7.25,15.22,6.51,15,5.8z M13.96,8.69c-1.29,0.18-2.29,1.3-2.29,2.64c0,0.41,0.1,0.82,0.28,1.19
		c-0.5,0.44-1.08,0.79-1.7,1.04C9.77,12.81,8.93,12.33,8,12.33s-1.77,0.48-2.25,1.23c-0.62-0.25-1.19-0.6-1.7-1.04
		c0.18-0.37,0.28-0.77,0.28-1.19c0-1.34-1-2.46-2.29-2.64C2.01,8.46,2,8.23,2,8c0-0.47,0.05-0.93,0.16-1.38
		C3.4,6.39,4.33,5.3,4.33,4c0-0.23-0.03-0.46-0.09-0.68c0.51-0.41,1.08-0.73,1.69-0.96C6.44,2.97,7.19,3.33,8,3.33
		c0.81,0,1.56-0.36,2.06-0.97c0.61,0.22,1.19,0.55,1.7,0.96C11.7,3.54,11.67,3.77,11.67,4c0,1.29,0.92,2.36,2.17,2.61
		C13.95,7.06,14,7.53,14,8C14,8.23,13.99,8.46,13.96,8.69z" />
	<path d="M8,5C6.35,5,5,6.35,5,8s1.35,3,3,3s3-1.35,3-3S9.65,5,8,5z M8,9.67C7.08,9.67,6.33,8.92,6.33,8
		S7.08,6.33,8,6.33S9.67,7.08,9.67,8S8.92,9.67,8,9.67z" />
</g>
</symbol>`}),u2=r().add(Ee);const pn=Ee;var ze=new(e())({id:"pat-go-start",use:"pat-go-start-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-go-start">
  <path d="M12.4,12l5.3-5.3c.4-.4.4-1,0-1.4s-1-.4-1.4,0l-6,6c-.4.4-.4,1,0,1.4l6,6c.2.2.5.3.7.3s.5,0,.7-.3c.4-.4.4-1,0-1.4l-5.3-5.3Z" />
  <path d="M7,5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1s1-.4,1-1V6c0-.6-.4-1-1-1Z" />
</symbol>`}),f2=r().add(ze);const mn=ze;var Be=new(e())({id:"pat-heading",use:"pat-heading-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-heading">
<path d="M12,1c-0.4,0-0.7,0.3-0.7,0.7v5.7H4.7V1.7C4.7,1.3,4.4,1,4,1S3.3,1.3,3.3,1.7v12.7C3.3,14.7,3.6,15,4,15
	s0.7-0.3,0.7-0.7V8.7h6.7v5.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V1.7C12.7,1.3,12.4,1,12,1z" />
</symbol>`}),b2=r().add(Be);const gn=Be;var Pe=new(e())({id:"pat-history",use:"pat-history-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-history">
<g>
	<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v10c0,0.92,0.75,1.67,1.67,1.67h5c0.37,0,0.67-0.3,0.67-0.67
		S8.37,13.33,8,13.33H3c-0.18,0-0.33-0.15-0.33-0.33V3c0-0.18,0.15-0.33,0.33-0.33h10c0.18,0,0.33,0.15,0.33,0.33v5
		c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V3C14.67,2.08,13.92,1.33,13,1.33z" />
	<path d="M13.1,11.76c0.15-0.33,0.24-0.7,0.24-1.09c0-1.47-1.2-2.67-2.67-2.67S8,9.2,8,10.67c0,1.47,1.2,2.67,2.67,2.67
		c0.6,0,1.15-0.21,1.59-0.54l1.33,1.06C13.71,13.95,13.85,14,14,14c0.2,0,0.39-0.09,0.52-0.25c0.23-0.29,0.18-0.71-0.1-0.94
		L13.1,11.76z M10.67,12c-0.74,0-1.33-0.6-1.33-1.33s0.6-1.33,1.33-1.33S12,9.93,12,10.67S11.4,12,10.67,12z" />
	<path d="M4.67,6h6.67C11.7,6,12,5.7,12,5.33s-0.3-0.67-0.67-0.67H4.67C4.3,4.67,4,4.97,4,5.33S4.3,6,4.67,6z" />
	<path d="M4.67,8.67h2.67C7.7,8.67,8,8.37,8,8S7.7,7.33,7.33,7.33H4.67C4.3,7.33,4,7.63,4,8S4.3,8.67,4.67,8.67z" />
</g>
</symbol>`}),x2=r().add(Pe);const hn=Pe;var Le=new(e())({id:"pat-home",use:"pat-home-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-home">
<path d="M13.42,5.48l-5-4c-0.24-0.2-0.59-0.2-0.83,0l-5,4C2.43,5.61,2.33,5.8,2.33,6v8c0,0.37,0.3,0.67,0.67,0.67h3.33
	h3.33H13c0.37,0,0.67-0.3,0.67-0.67V6C13.67,5.8,13.57,5.61,13.42,5.48z M7,13.33v-3h2v3H7z M10.33,13.33V9.67
	C10.33,9.3,10.04,9,9.67,9H6.33C5.97,9,5.67,9.3,5.67,9.67v3.67h-2V6.32L8,2.85l4.33,3.47v7.01H10.33z" />
</symbol>`}),y2=r().add(Le);const wn=Le;var Oe=new(e())({id:"pat-horizontal-gap",use:"pat-horizontal-gap-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-horizontal-gap"><path d="M64 64m64 0l256 0q64 0 64 64l0 256q0 64-64 64l-256 0q-64 0-64-64l0-256q0-64 64-64ZM576 576m64 0l256 0q64 0 64 64l0 256q0 64-64 64l-256 0q-64 0-64-64l0-256q0-64 64-64ZM128 576h256a64 64 0 0 1 64 64v256a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64v-256a64 64 0 0 1 64-64z m0 64v256h256v-256H128zM640 64h256a64 64 0 0 1 64 64v256a64 64 0 0 1-64 64h-256a64 64 0 0 1-64-64V128a64 64 0 0 1 64-64z m0 64v256h256V128h-256z" p-id="7679" /></symbol>'}),_2=r().add(Oe);const vn=Oe;var Se=new(e())({id:"pat-image",use:"pat-image-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-image">
	<path d="M13,1.3H3C2.1,1.3,1.3,2.1,1.3,3v10c0,0.9,0.7,1.7,1.7,1.7h10c0.9,0,1.7-0.7,1.7-1.7V3
		C14.7,2.1,13.9,1.3,13,1.3z M3,2.7h10c0.2,0,0.3,0.1,0.3,0.3v7.5l-2.6-2.3c-0.3-0.2-0.6-0.2-0.9,0L7,10.8L5.1,9.2
		C4.9,9,4.5,8.9,4.3,9.1l-1.6,1.2V3C2.7,2.8,2.8,2.7,3,2.7z M13,13.3H3c-0.2,0-0.3-0.1-0.3-0.3v-1l2-1.5l1.9,1.7
		c0.3,0.2,0.6,0.2,0.9,0l2.9-2.6l3,2.7V13C13.3,13.2,13.2,13.3,13,13.3z" />
	<path d="M6,8.3c1.3,0,2.3-1,2.3-2.3S7.3,3.7,6,3.7S3.7,4.7,3.7,6S4.7,8.3,6,8.3z M6,5c0.6,0,1,0.4,1,1S6.6,7,6,7
		S5,6.6,5,6S5.4,5,6,5z" />
</symbol>`}),C2=r().add(Se);const un=Se;var He=new(e())({id:"pat-indent-left",use:"pat-indent-left-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-indent-left">
	<path d="M2,3.7h12c0.4,0,0.7-0.3,0.7-0.7S14.4,2.3,14,2.3H2C1.6,2.3,1.3,2.6,1.3,3S1.6,3.7,2,3.7z" />
	<path d="M14,5.7H6.3C6,5.7,5.7,6,5.7,6.3S6,7,6.3,7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,5.7,14,5.7z" />
	<path d="M14,9H6.3C6,9,5.7,9.3,5.7,9.7s0.3,0.7,0.7,0.7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,9,14,9z" />
	<path d="M3.2,10.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L2.9,8l1.2-1.2
		c0.3-0.3,0.3-0.7,0-0.9c-0.3-0.3-0.7-0.3-0.9,0L1.5,7.5c-0.3,0.3-0.3,0.7,0,0.9L3.2,10.1z" />
	<path d="M14,12.3H2c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h12c0.4,0,0.7-0.3,0.7-0.7S14.4,12.3,14,12.3z" />
</symbol>`}),M2=r().add(He);const fn=He;var De=new(e())({id:"pat-info",use:"pat-info-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-info">
<g>
	<path d="M13.19,2.81C11.8,1.43,9.96,0.67,8,0.67c-1.96,0-3.8,0.76-5.19,2.15C1.43,4.2,0.67,6.04,0.67,8
		c0,1.96,0.76,3.8,2.15,5.19C4.2,14.57,6.04,15.33,8,15.33c1.96,0,3.8-0.76,5.19-2.15S15.33,9.96,15.33,8
		C15.33,6.04,14.57,4.2,13.19,2.81z M12.24,12.24C11.11,13.38,9.6,14,8,14c-1.6,0-3.11-0.62-4.24-1.76C2.62,11.11,2,9.6,2,8
		c0-1.6,0.62-3.11,1.76-4.24C4.89,2.62,6.4,2,8,2c1.6,0,3.11,0.62,4.24,1.76C13.38,4.89,14,6.4,14,8C14,9.6,13.38,11.11,12.24,12.24
		z" />
	<circle cx="8" cy="4.5" r="0.83" />
	<path d="M9.33,10.67h-0.5v-4C8.83,6.3,8.53,6,8.17,6H7.5C7.13,6,6.83,6.3,6.83,6.67s0.3,0.67,0.67,0.67v3.33H7
		c-0.37,0-0.67,0.3-0.67,0.67S6.63,12,7,12h2.33C9.7,12,10,11.7,10,11.33S9.7,10.67,9.33,10.67z" />
</g>
</symbol>`}),k2=r().add(De);const bn=De;var Te=new(e())({id:"pat-italic",use:"pat-italic-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-italic">
<path d="M12,1.3H9.7c-0.1,0-0.1,0-0.2,0H6.7C6.3,1.3,6,1.6,6,2s0.3,0.7,0.7,0.7h2.1l-3,10.7H4c-0.4,0-0.7,0.3-0.7,0.7
	s0.3,0.7,0.7,0.7h5.3c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7H7.2l3-10.7H12c0.4,0,0.7-0.3,0.7-0.7S12.4,1.3,12,1.3z" />
</symbol>`}),E2=r().add(Te);const xn=Te;var Re=new(e())({id:"pat-kebab-horizontal",use:"pat-kebab-horizontal-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-kebab-horizontal">
<g>
	<circle cx="4" cy="8" r="1" />
	<circle cx="8" cy="8" r="1" />
	<circle cx="12" cy="8" r="1" />
</g>
</symbol>`}),z2=r().add(Re);const yn=Re;var Ae=new(e())({id:"pat-kebab-vertical",use:"pat-kebab-vertical-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-kebab-vertical">
<g>
	<circle cx="8" cy="4" r="1" />
	<circle cx="8" cy="8" r="1" />
	<circle cx="8" cy="11.67" r="1" />
</g>
</symbol>`}),B2=r().add(Ae);const _n=Ae;var Ie=new(e())({id:"pat-key",use:"pat-key-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-key">
<path d="M14.49,4.86l-1.38-1.37L13.8,2.8c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0L7.54,7.19
	C5.99,6.16,3.86,6.32,2.5,7.67c-1.53,1.52-1.55,4.02-0.04,5.57C3.21,14,4.24,14.41,5.3,14.41c0.34,0,0.68-0.04,1.02-0.13
	c1.38-0.36,2.46-1.44,2.83-2.81c0.31-1.17,0.06-2.4-0.64-3.36l1.57-1.57l1.37,1.37c0.13,0.13,0.3,0.19,0.47,0.19
	s0.34-0.06,0.47-0.19l2.11-2.1c0.13-0.12,0.2-0.3,0.2-0.47S14.62,4.99,14.49,4.86z M7.85,11.12c-0.24,0.91-0.96,1.63-1.88,1.87
	s-1.9-0.03-2.56-0.69c-1-1.03-0.98-2.68,0.03-3.69C3.96,8.1,4.64,7.85,5.32,7.85c0.66,0,1.33,0.24,1.84,0.73
	C7.83,9.24,8.1,10.21,7.85,11.12z M11.91,6.49l-0.86-0.86l1.17-1.16l0.86,0.86L11.91,6.49z" />
</symbol>`}),P2=r().add(Ie);const Cn=Ie;var Ve=new(e())({id:"pat-last-step-fill",use:"pat-last-step-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-last-step-fill">
<path d="M12.6,7.5c-1.4-1.5-3.2-2.3-5.2-2.4V2.3c0-0.3-0.2-0.5-0.4-0.6c-0.2-0.1-0.5,0-0.7,0.2L0.9,7.4
	C0.6,7.6,0.6,8,0.8,8.3l5.4,5.8c0.1,0.1,0.3,0.2,0.5,0.2c0.1,0,0.2,0,0.2,0c0.3-0.1,0.4-0.3,0.4-0.6v-3c0.9-0.1,1.8,0,2.8,0.2
	c1.1,0.2,2.4,1.3,4,3.2c0.2,0.2,0.5,0.3,0.8,0.2c0.3-0.1,0.4-0.4,0.4-0.7C15.1,11.2,14.2,9.1,12.6,7.5z" />
</symbol>`}),L2=r().add(Ve);const Mn=Ve;var Ue=new(e())({id:"pat-last-step",use:"pat-last-step-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-last-step">
<path d="M6.7,14.3c-0.2,0-0.4-0.1-0.5-0.2L0.8,8.3C0.6,8,0.6,7.6,0.9,7.4l5.4-5.5C6.4,1.7,6.7,1.6,7,1.7
	c0.3,0.1,0.4,0.3,0.4,0.6v2.8c2,0.2,3.8,1,5.2,2.4c1.6,1.6,2.5,3.6,2.8,6c0,0.3-0.1,0.6-0.4,0.7c-0.3,0.1-0.6,0-0.8-0.2
	c-1.5-1.9-2.9-2.9-4-3.2c-1-0.2-1.9-0.3-2.8-0.2v3c0,0.3-0.2,0.5-0.4,0.6C6.9,14.3,6.8,14.3,6.7,14.3z M2.3,7.9L6,12v-1.9
	c0-0.3,0.2-0.6,0.6-0.7c1.2-0.2,2.5-0.2,3.9,0.1c0.9,0.2,1.9,0.8,3,1.8c-0.4-1.1-1-2-1.8-2.9c-1.4-1.4-3-2.1-4.9-2.1
	C6.3,6.4,6,6.1,6,5.7V4L2.3,7.9z" />
</symbol>`}),O2=r().add(Ue);const kn=Ue;var Ne=new(e())({id:"pat-layout-column",use:"pat-layout-column-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-layout-column">
<path d="M13,1.3H3C2.1,1.3,1.3,2.1,1.3,3v4v2v4c0,0.9,0.7,1.7,1.7,1.7h10c0.9,0,1.7-0.7,1.7-1.7V9V7V3
	C14.7,2.1,13.9,1.3,13,1.3z M2.7,3c0-0.2,0.1-0.3,0.3-0.3h10c0.2,0,0.3,0.1,0.3,0.3v4v0.3H2.7V7V3z M13.3,13c0,0.2-0.1,0.3-0.3,0.3
	H3c-0.2,0-0.3-0.1-0.3-0.3V9V8.7h10.7V9V13z" />
</symbol>`}),S2=r().add(Ne);const En=Ne;var Fe=new(e())({id:"pat-layout-row",use:"pat-layout-row-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-layout-row">
<path d="M13.1,1.3H2.9C2,1.3,1.3,2,1.3,2.9v10.2c0,0.9,0.7,1.6,1.6,1.6h10.2c0.9,0,1.6-0.7,1.6-1.6V2.9
	C14.7,2,14,1.3,13.1,1.3z M2.7,13.1V2.9c0-0.1,0.1-0.2,0.2-0.2h4.4v10.7H2.9C2.8,13.3,2.7,13.2,2.7,13.1z M13.3,13.1
	c0,0.1-0.1,0.2-0.2,0.2H8.7V2.7h4.4c0.1,0,0.2,0.1,0.2,0.2V13.1z" />
</symbol>`}),H2=r().add(Fe);const zn=Fe;var je=new(e())({id:"pat-layout",use:"pat-layout-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-layout">
<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v1.33v2V13c0,0.92,0.75,1.67,1.67,1.67h6.67h2H13
	c0.92,0,1.67-0.75,1.67-1.67V6.67v-2V3C14.67,2.08,13.92,1.33,13,1.33z M2.67,3c0-0.18,0.15-0.33,0.33-0.33h10
	c0.18,0,0.33,0.15,0.33,0.33v1.67v0H2.67V4.33V3z M3,13.33c-0.18,0-0.33-0.15-0.33-0.33V6.33V6H10v7.33H9.67H3z M13.33,13
	c0,0.18-0.15,0.33-0.33,0.33h-1.33h-0.33V6h2v0.67V13z" />
</symbol>`}),D2=r().add(je);const Bn=je;var We=new(e())({id:"pat-left-arrow",use:"pat-left-arrow-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-left-arrow"><path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0s24.994 65.516 0 90.51L282.51 448H896c35.346 0 64 28.654 64 64s-28.654 64-64 64H282.51l210.746 210.746C505.752 799.242 512 815.622 512 832s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z" p-id="3475" /></symbol>'}),T2=r().add(We);const Pn=We;var Ke=new(e())({id:"pat-left",use:"pat-left-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-left">
<path d="M10.33,12.67c-0.17,0-0.34-0.07-0.47-0.2l-4-4c-0.26-0.26-0.26-0.68,0-0.94l4-4c0.26-0.26,0.68-0.26,0.94,0
	c0.26,0.26,0.26,0.68,0,0.94L7.28,8l3.53,3.53c0.26,0.26,0.26,0.68,0,0.94C10.67,12.6,10.5,12.67,10.33,12.67z" />
</symbol>`}),R2=r().add(Ke);const Ln=Ke;var Ze=new(e())({id:"pat-lightning",use:"pat-lightning-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-lightning">
<path d="M5.67,15.33c-0.11,0-0.22-0.03-0.32-0.08c-0.27-0.15-0.4-0.46-0.32-0.75L6.47,9h-3.8C2.43,9,2.22,8.88,2.1,8.68
	S1.97,8.23,2.08,8.02l3.67-7C5.86,0.8,6.09,0.67,6.33,0.67h6c0.25,0,0.49,0.15,0.6,0.38s0.08,0.5-0.08,0.7l-2.82,3.59h3.63
	c0.26,0,0.5,0.16,0.61,0.4c0.11,0.24,0.06,0.53-0.12,0.72l-8,8.67C6.03,15.26,5.85,15.33,5.67,15.33z M3.77,7.67h3.56
	c0.21,0,0.4,0.1,0.53,0.26C7.99,8.09,8.03,8.3,7.98,8.5l-0.99,3.74l5.15-5.58H8.67c-0.26,0-0.49-0.15-0.6-0.38
	c-0.11-0.23-0.08-0.5,0.08-0.7L10.96,2H6.74L3.77,7.67z" />
</symbol>`}),A2=r().add(Ze);const On=Ze;var $e=new(e())({id:"pat-link",use:"pat-link-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-link">
<g>
	<path d="M2.87,5.24c-0.3-0.3-0.46-0.7-0.46-1.14c0.01-0.44,0.18-0.86,0.5-1.17C3.57,2.28,4.6,2.26,5.23,2.88l3.05,3.05
		c0,0,0,0,0,0C8.9,6.56,8.88,7.59,8.23,8.24c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2c0.17,0,0.34-0.07,0.47-0.2
		c1.17-1.17,1.19-3.05,0.04-4.2L6.17,1.94c-1.15-1.15-3.03-1.12-4.2,0.04c-0.56,0.56-0.88,1.31-0.89,2.1
		c-0.01,0.8,0.29,1.54,0.85,2.1l2.65,2.65c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.19c0.26-0.26,0.26-0.68,0-0.94L2.87,5.24z" />
	<path d="M14.08,9.84L11.44,7.2c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l2.64,2.65
		c0.63,0.63,0.61,1.66-0.04,2.31c-0.32,0.32-0.73,0.5-1.17,0.5c-0.01,0-0.01,0-0.02,0c-0.42,0-0.82-0.16-1.12-0.46l-3.05-3.05
		c-0.01-0.01-0.02-0.01-0.03-0.02c-0.01-0.01-0.01-0.02-0.02-0.03C7.07,9.42,7.09,8.39,7.74,7.74C8,7.48,8,7.06,7.74,6.8
		c-0.26-0.26-0.68-0.26-0.94,0c-1.17,1.17-1.19,3.05-0.04,4.2C6.76,11,6.77,11,6.78,11.01c0.01,0.01,0.01,0.02,0.02,0.03l3.05,3.05
		c0.55,0.55,1.28,0.85,2.06,0.85c0.01,0,0.03,0,0.04,0c0.79-0.01,1.54-0.33,2.1-0.89C15.21,12.87,15.23,10.99,14.08,9.84z" />
</g>
</symbol>`}),I2=r().add($e);const Sn=$e;var Ge=new(e())({id:"pat-list-add",use:"pat-list-add-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-list-add">
	<path d="M8,8.7H2.7C2.3,8.7,2,9,2,9.3S2.3,10,2.7,10H8c0.4,0,0.7-0.3,0.7-0.7S8.4,8.7,8,8.7z" />
	<path d="M8,11.7H2.7C2.3,11.7,2,12,2,12.3S2.3,13,2.7,13H8c0.4,0,0.7-0.3,0.7-0.7S8.4,11.7,8,11.7z" />
	<path d="M13.3,5.7H2.7C2.3,5.7,2,6,2,6.3S2.3,7,2.7,7h10.7C13.7,7,14,6.7,14,6.3S13.7,5.7,13.3,5.7z" />
	<path d="M2.7,4h10.7C13.7,4,14,3.7,14,3.3s-0.3-0.7-0.7-0.7H2.7C2.3,2.7,2,3,2,3.3S2.3,4,2.7,4z" />
	<path d="M13.3,10.3h-1v-1c0-0.4-0.3-0.7-0.7-0.7S11,9,11,9.3v1h-1c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h1v1
		c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-1h1c0.4,0,0.7-0.3,0.7-0.7S13.7,10.3,13.3,10.3z" />
</symbol>`}),V2=r().add(Ge);const Hn=Ge;var Xe=new(e())({id:"pat-list-numbers",use:"pat-list-numbers-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-list-numbers">
	<path d="M6.7,3.7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,2.3,14,2.3H6.7C6.3,2.3,6,2.6,6,3S6.3,3.7,6.7,3.7z" />
	<path d="M14,5.7H6.7C6.3,5.7,6,6,6,6.3S6.3,7,6.7,7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,5.7,14,5.7z" />
	<path d="M14,9H6.7C6.3,9,6,9.3,6,9.7s0.3,0.7,0.7,0.7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,9,14,9z" />
	<path d="M14,12.3H6.7C6.3,12.3,6,12.6,6,13s0.3,0.7,0.7,0.7H14c0.4,0,0.7-0.3,0.7-0.7S14.4,12.3,14,12.3z" />
	<path d="M4,9H2C1.6,9,1.3,9.3,1.3,9.7s0.3,0.7,0.7,0.7h1.3l-1.8,1.9c-0.1,0.1-0.2,0.3-0.2,0.5V13
		c0,0.4,0.3,0.7,0.7,0.7h2c0.4,0,0.7-0.3,0.7-0.7S4.4,12.3,4,12.3H3.3l1.2-1.2c0.1-0.1,0.2-0.3,0.2-0.5v-1C4.7,9.3,4.4,9,4,9z" />
	<path d="M2.3,4.3v1.3C2,5.7,1.7,6,1.7,6.3S2,7,2.3,7h1.3C4,7,4.3,6.7,4.3,6.3S4,5.7,3.7,5.7V3c0-0.3-0.2-0.5-0.4-0.6
		C3,2.3,2.7,2.3,2.5,2.5L1.9,3.2c-0.3,0.3-0.3,0.7,0,0.9C2,4.3,2.2,4.3,2.3,4.3z" />
</symbol>`}),U2=r().add(Xe);const Dn=Xe;var Ye=new(e())({id:"pat-list-view",use:"pat-list-view-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-list-view">
    <path d="M13.7,14.7H2.3c-0.9,0-1.7-0.7-1.7-1.7V3c0-0.9,0.7-1.7,1.7-1.7h11.3c0.9,0,1.7,0.7,1.7,1.7v10
	C15.3,13.9,14.6,14.7,13.7,14.7z M2.3,2.7C2.1,2.7,2,2.8,2,3v10c0,0.2,0.1,0.3,0.3,0.3h11.3c0.2,0,0.3-0.1,0.3-0.3V3
	c0-0.2-0.1-0.3-0.3-0.3H2.3z" />
    <path d="M14.7,5.3H1.3C1,5.3,0.7,5,0.7,4.7S1,4,1.3,4h13.3c0.4,0,0.7,0.3,0.7,0.7S15,5.3,14.7,5.3z" />
    <path d="M12,8.7H6.7C6.3,8.7,6,8.4,6,8s0.3-0.7,0.7-0.7H12c0.4,0,0.7,0.3,0.7,0.7S12.4,8.7,12,8.7z" />
    <path d="M12,11.3H6.7C6.3,11.3,6,11,6,10.7S6.3,10,6.7,10H12c0.4,0,0.7,0.3,0.7,0.7S12.4,11.3,12,11.3z" />
    <path d="M4.7,8.7H4C3.6,8.7,3.3,8.4,3.3,8S3.6,7.3,4,7.3h0.7C5,7.3,5.3,7.6,5.3,8S5,8.7,4.7,8.7z" />
    <path d="M4.7,11.3H4c-0.4,0-0.7-0.3-0.7-0.7S3.6,10,4,10h0.7c0.4,0,0.7,0.3,0.7,0.7S5,11.3,4.7,11.3z" />
</symbol>`}),N2=r().add(Ye);const Tn=Ye;var Je=new(e())({id:"pat-list",use:"pat-list-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-list">
	<path d="M2.7,11.3c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3S4,13.4,4,12.7C4,11.9,3.4,11.3,2.7,11.3z" />
	<path d="M14.7,7.3h-8C6.3,7.3,6,7.6,6,8s0.3,0.7,0.7,0.7h8c0.4,0,0.7-0.3,0.7-0.7S15,7.3,14.7,7.3z" />
	<path d="M14.7,12h-8C6.3,12,6,12.3,6,12.7s0.3,0.7,0.7,0.7h8c0.4,0,0.7-0.3,0.7-0.7S15,12,14.7,12z" />
	<path d="M6.7,4h8c0.4,0,0.7-0.3,0.7-0.7S15,2.7,14.7,2.7h-8C6.3,2.7,6,3,6,3.3S6.3,4,6.7,4z" />
	<path d="M2.7,2C1.9,2,1.3,2.6,1.3,3.3c0,0.7,0.6,1.3,1.3,1.3S4,4.1,4,3.3C4,2.6,3.4,2,2.7,2z" />
	<path d="M2.7,6.7C1.9,6.7,1.3,7.3,1.3,8c0,0.7,0.6,1.3,1.3,1.3S4,8.7,4,8C4,7.3,3.4,6.7,2.7,6.7z" />
</symbol>`}),F2=r().add(Je);const Rn=Je;var Qe=new(e())({id:"pat-location",use:"pat-location-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-location">
<g>
	<path d="M8,0.67c-3.12,0-5.67,2.54-5.67,5.67c0,4.6,5.04,8.68,5.25,8.85c0.12,0.1,0.27,0.15,0.42,0.15
		s0.29-0.05,0.42-0.15c0.21-0.17,5.25-4.25,5.25-8.85C13.67,3.21,11.12,0.67,8,0.67z M8,13.79c-1.16-1.04-4.33-4.2-4.33-7.45
		C3.67,3.94,5.61,2,8,2s4.33,1.94,4.33,4.33C12.33,9.58,9.16,12.74,8,13.79z" />
	<path d="M8,3.67c-1.47,0-2.67,1.2-2.67,2.67S6.53,9,8,9c1.47,0,2.67-1.2,2.67-2.67S9.47,3.67,8,3.67z M8,7.67
		c-0.74,0-1.33-0.6-1.33-1.33S7.26,5,8,5s1.33,0.6,1.33,1.33S8.74,7.67,8,7.67z" />
</g>
</symbol>`}),j2=r().add(Qe);const An=Qe;var qe=new(e())({id:"pat-lock",use:"pat-lock-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-lock">
<g>
	<path d="M13.33,6.67H12v-2c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4v2H2.67c-0.74,0-1.33,0.6-1.33,1.33v6
		c0,0.73,0.6,1.33,1.33,1.33h10.67c0.74,0,1.33-0.6,1.33-1.33V8C14.67,7.26,14.07,6.67,13.33,6.67z M5.33,4.67C5.33,3.2,6.53,2,8,2
		s2.67,1.2,2.67,2.67v2H5.33V4.67z M2.67,8l0-0.67L2.67,8C2.67,8,2.67,8,2.67,8z M13.33,14L2.67,14l0-6l10.67,0V14z" />
	<path d="M8,12.67c0.37,0,0.67-0.3,0.67-0.67v-2c0-0.37-0.3-0.67-0.67-0.67S7.33,9.63,7.33,10v2
		C7.33,12.37,7.63,12.67,8,12.67z" />
</g>
</symbol>`}),W2=r().add(qe);const In=qe;var tr=new(e())({id:"pat-mail",use:"pat-mail-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-mail">
<path d="M15.32,2.92c-0.01-0.04-0.01-0.09-0.03-0.13c-0.02-0.05-0.04-0.09-0.06-0.13c-0.01-0.02-0.02-0.05-0.03-0.07
	c-0.01-0.01-0.02-0.02-0.03-0.03c-0.03-0.04-0.07-0.06-0.1-0.09c-0.03-0.03-0.06-0.05-0.1-0.07c-0.04-0.02-0.08-0.03-0.12-0.04
	c-0.05-0.01-0.09-0.02-0.14-0.03c-0.02,0-0.03-0.01-0.04-0.01H8H1.33c-0.02,0-0.03,0.01-0.05,0.01c-0.05,0-0.09,0.01-0.13,0.03
	C1.11,2.38,1.08,2.39,1.04,2.41C1,2.43,0.97,2.45,0.94,2.48C0.9,2.51,0.87,2.53,0.83,2.57C0.82,2.58,0.81,2.59,0.8,2.6
	C0.78,2.62,0.78,2.65,0.77,2.67C0.74,2.71,0.72,2.75,0.71,2.79C0.69,2.84,0.69,2.88,0.68,2.93c0,0.03-0.02,0.05-0.02,0.07v5v5
	c0,0.37,0.3,0.67,0.67,0.67h13.33c0.37,0,0.67-0.3,0.67-0.67V8V3C15.33,2.97,15.32,2.95,15.32,2.92z M8,3.67h4.67L8,7.17l-4.67-3.5
	H8z M14,12.33H2V8V4.33l5.6,4.2C7.72,8.62,7.86,8.67,8,8.67s0.28-0.04,0.4-0.13l5.6-4.2V8V12.33z" />
</symbol>`}),K2=r().add(tr);const Vn=tr;var er=new(e())({id:"pat-mark",use:"pat-mark-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-mark">
  <path d="M19.5,5h-3.3l-3.3-1.4c-.1,0-.3,0-.4,0h-6v-.5c0-.6-.4-1-1-1s-1,.4-1,1v17h-1c-.6,0-1,.4-1,1s.4,1,1,1h4c.6,0,1-.4,1-1s-.4-1-1-1h-1v-4h5.8l3.3,1.4c.1,0,.3,0,.4,0h3.5c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2ZM19.5,15.5h-3.3l-3.3-1.4c-.1,0-.3,0-.4,0h-6V5.5h5.8l3.3,1.4c.1,0,.3,0,.4,0h3.5v8.5Z" />
</symbol>`}),Z2=r().add(er);const Un=er;var rr=new(e())({id:"pat-medal-color",use:"pat-medal-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-medal-color"><path d="M512 1024C317.853193 1024 159.887719 866.034526 159.887719 671.887719s157.965474-352.112281 352.112281-352.11228 352.112281 157.965474 352.112281 352.11228S706.146807 1024 512 1024z" fill="#F2E377" p-id="2833" /><path d="M512 671.887719m-271.629474 0a271.629474 271.629474 0 1 0 543.258948 0 271.629474 271.629474 0 1 0-543.258948 0Z" fill="#F3D55B" p-id="2834" /><path d="M511.838316 472.567018l58.799158 119.143298L702.104702 610.807018l-95.124211 92.734877 22.456141 130.946245-117.598316-61.835228-117.598316 61.835228 22.474105-130.946245L321.57193 610.807018l131.467228-19.096702z" fill="#F0C419" p-id="2835" /><path d="M512 319.775439c39.540772 0 77.446737 6.844632 112.963368 18.935017L828.182456 0h-179.649123L453.506246 325.039158A352.687158 352.687158 0 0 1 512 319.775439z" fill="#546A79" p-id="2836" /><path d="M453.506246 325.039158L513.796491 224.561404 379.059649 0h-179.649123l202.572351 337.614596a350.657123 350.657123 0 0 1 51.523369-12.575438z" fill="#38454F" p-id="2837" /></symbol>'}),$2=r().add(rr);const Nn=rr;var or=new(e())({id:"pat-medal",use:"pat-medal-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-medal">
    <path d="M5.3,6.7C5.1,6.7,5,6.6,4.8,6.4l-3.3-4C1.3,2.1,1.3,1.7,1.6,1.5s0.7-0.2,0.9,0.1l3.3,4C6.1,5.9,6,6.3,5.8,6.5
	C5.6,6.6,5.5,6.7,5.3,6.7z" />
    <path d="M10.7,6.7c-0.2,0-0.3-0.1-0.4-0.2C10,6.3,9.9,5.9,10.2,5.6l3.3-4c0.2-0.3,0.7-0.3,0.9-0.1s0.3,0.7,0.1,0.9
	l-3.3,4C11,6.6,10.9,6.7,10.7,6.7z" />
    <path d="M8.7,6C8.6,6,8.5,6,8.4,5.9C8.1,5.8,7.9,5.4,8.1,5.1l1.7-4c0.1-0.3,0.5-0.5,0.9-0.4s0.5,0.5,0.4,0.9l-1.7,4
	C9.2,5.8,8.9,6,8.7,6z" />
    <path d="M7.3,6C7.1,6,6.8,5.8,6.7,5.6l-1.7-4c-0.1-0.3,0-0.7,0.4-0.9c0.3-0.1,0.7,0,0.9,0.4l1.7,4
	c0.1,0.3,0,0.7-0.4,0.9C7.5,6,7.4,6,7.3,6z" />
    <path d="M8,15.3c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3C13.3,12.9,10.9,15.3,8,15.3z M8,6
	c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C12,7.8,10.2,6,8,6z" />
    <path d="M8,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.7,13,8,13z M8,8.3c-0.9,0-1.7,0.7-1.7,1.7s0.7,1.7,1.7,1.7
	s1.7-0.7,1.7-1.7S8.9,8.3,8,8.3z" />
</symbol>`}),G2=r().add(or);const Fn=or;var ar=new(e())({id:"pat-mic-off",use:"pat-mic-off-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-mic-off">
<g>
	<path d="M12.32,10.28c0.09,0.04,0.18,0.06,0.27,0.06c0.26,0,0.5-0.15,0.61-0.4c0.31-0.72,0.47-1.48,0.47-2.27
		C13.67,7.3,13.37,7,13,7s-0.67,0.3-0.67,0.67c0,0.6-0.12,1.19-0.36,1.73C11.83,9.74,11.98,10.13,12.32,10.28z" />
	<path d="M9.44,11.75C8.98,11.92,8.5,12,8,12c-2.39,0-4.33-1.94-4.33-4.33C3.67,7.3,3.37,7,3,7S2.33,7.3,2.33,7.67
		c0,2.9,2.19,5.29,5,5.62v1.38c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-1.39c0.42-0.05,0.83-0.13,1.22-0.27
		c0.35-0.12,0.53-0.5,0.41-0.85C10.17,11.81,9.79,11.63,9.44,11.75z" />
	<path d="M14.47,13.53l-3.94-3.94C10.82,9.13,11,8.59,11,8V3.67c0-1.65-1.35-3-3-3s-3,1.35-3,3v0.39L2.47,1.53
		c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94L5,5.94V8c0,1.65,1.35,3,3,3c0.59,0,1.13-0.18,1.59-0.47l3.94,3.94
		c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2C14.73,14.21,14.73,13.79,14.47,13.53z M6.33,3.67C6.33,2.75,7.08,2,8,2
		s1.67,0.75,1.67,1.67V8c0,0.21-0.04,0.42-0.12,0.61L6.33,5.39V3.67z M8,9.67C7.08,9.67,6.33,8.92,6.33,8V7.28l2.27,2.27
		C8.42,9.62,8.21,9.67,8,9.67z" />
</g>
</symbol>`}),X2=r().add(ar);const jn=ar;var nr=new(e())({id:"pat-mic",use:"pat-mic-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-mic">
<g>
	<path d="M8,11c1.65,0,3-1.35,3-3V3.67c0-1.65-1.35-3-3-3s-3,1.35-3,3V8C5,9.65,6.35,11,8,11z M6.33,3.67
		C6.33,2.75,7.08,2,8,2s1.67,0.75,1.67,1.67V8c0,0.92-0.75,1.67-1.67,1.67S6.33,8.92,6.33,8V3.67z" />
	<path d="M13.67,7.67C13.67,7.3,13.37,7,13,7s-0.67,0.3-0.67,0.67C12.33,10.06,10.39,12,8,12s-4.33-1.94-4.33-4.33
		C3.67,7.3,3.37,7,3,7S2.33,7.3,2.33,7.67c0,2.9,2.19,5.29,5,5.62v1.38c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-1.38
		C11.48,12.96,13.67,10.57,13.67,7.67z" />
</g>
</symbol>`}),Y2=r().add(nr);const Wn=nr;var ir=new(e())({id:"pat-minus",use:"pat-minus-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-minus"><path d="M831.41 449.68L192.17 448H192c-35.27 0-63.9 28.54-64 63.83-0.09 35.35 28.49 64.08 63.83 64.17l639.24 1.68h0.17c35.27 0 63.9-28.54 64-63.83 0.09-35.35-28.49-64.08-63.83-64.17z" p-id="5598" /></symbol>'}),J2=r().add(ir);const Kn=ir;var sr=new(e())({id:"pat-mobile-off",use:"pat-mobile-off-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-mobile-off"><path d="M950.272 939.52L84.48 73.728 0 158.208l192 192v577.536c0 52.736 43.008 96.256 96.256 96.256h448c34.816 0 65.536-18.944 82.432-47.104l47.104 47.104 84.48-84.48z m-438.272 20.48c-35.328 0-64-28.672-64-64s28.672-64 64-64 64 28.672 64 64-28.672 64-64 64zM256 768V414.208l353.792 353.792H256zM768 128v463.872l64 64V96.256c0-52.736-43.008-96.256-96.256-96.256H287.744C257.536 0 230.4 14.336 212.992 36.352L304.128 128H768zM384 48.128h256v31.744H384V48.128z" p-id="4378" /></symbol>'}),Q2=r().add(sr);const Zn=sr;var lr=new(e())({id:"pat-mobile",use:"pat-mobile-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-mobile"><path d="M736 0H288c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96V96c0-52.8-43.2-96-96-96zM384 48h256v32H384V48z m128 912c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64z m256-192H256V128h512v640z" p-id="4738" /></symbol>'}),q2=r().add(lr);const $n=lr;var cr=new(e())({id:"pat-mooc",use:"pat-mooc-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-mooc"><path d="M169.88842667 61.85415111h684.22314666c59.57745778 0 108.03427555 48.45681778 108.03427556 108.03427556v684.22314666c0 59.57745778-48.45681778 108.03427555-108.03427556 108.03427556H169.88842667c-59.57745778 0-108.03427555-48.45681778-108.03427556-108.03427556V169.88842667c0-59.57745778 48.45681778-108.03427555 108.03427556-108.03427556z" fill="#32A1FE" p-id="4860" /><path d="M272.89258667 510.41166222l-48.72192-61.16693333h-16.94606222v126.04074666h19.85877333v-91.88352l45.80920889 57.46005334 46.07431111-57.46005334v91.88352h19.85877333V449.24472889H321.61564445z m123.39313778 1.85344c0-12.97521778 4.50218667-24.09585778 13.50542222-33.09909333s20.12387555-13.50542222 33.36305778-13.50542222 24.09585778 4.50218667 33.36419555 13.50542222c9.00209778 9.00323555 13.50428445 20.12387555 13.50428445 33.09795556a46.18012445 46.18012445 0 0 1-46.86848 46.86848 46.18012445 46.18012445 0 0 1-46.86848-46.86734223z m-19.85877334 0c0 18.00533333 6.35448889 33.36305778 19.06460444 46.07317333 12.70897778 12.44501333 28.59804445 18.80064 47.39754667 18.80064s34.68743111-6.35562667 47.39754667-18.80064 19.06574222-27.80273778 19.06574222-46.07317333c0-18.00647111-6.35562667-33.36419555-19.06574222-46.07431111-12.70897778-12.44501333-28.59690667-18.79950222-47.39754667-18.79950222s-34.68743111 6.35448889-47.39754667 18.79950222-19.06460445 27.80387555-19.06460444 46.07431111z m183.76476444 0c0-12.97521778 4.50218667-24.09585778 13.50542223-33.09909333s20.12387555-13.50542222 33.36305777-13.50542222c12.97521778 0 24.09585778 4.50218667 33.36419556 13.50542222 9.00209778 9.00323555 13.50428445 20.12387555 13.50428444 33.09795556a46.18012445 46.18012445 0 0 1-46.86848 46.86848 46.18012445 46.18012445 0 0 1-46.86848-46.86734223z m-19.85877333 0c0 18.00533333 6.35448889 33.36305778 19.06460445 46.07317333 12.71011555 12.44501333 28.59804445 18.80064 47.39754666 18.80064s34.68856889-6.35562667 47.39868445-18.80064 19.06460445-27.80273778 19.06460444-46.07317333c0-18.00647111-6.35562667-33.36419555-19.06460444-46.07431111-12.71011555-12.44501333-28.59804445-18.79950222-47.39868445-18.79950222s-34.68743111 6.35448889-47.39754666 18.79950222-19.06460445 27.80387555-19.06460445 46.07431111z m230.36928-64.87381333c-18.80064 0-34.68856889 6.35448889-47.39868444 18.79950222s-19.06460445 27.80387555-19.06460445 46.07431111c0 18.00533333 6.35448889 33.36305778 19.06460445 46.07317333 12.71011555 12.44501333 28.59804445 18.80064 47.39868444 18.80064 6.35448889 0 12.44501333-0.79416889 18.5344-2.64760888s10.85667555-3.70801778 14.56355556-6.09052445 7.14979555-4.76728889 10.59271111-7.68 5.56032-4.76501333 6.35448889-6.08938667c1.05813333-1.05813333 1.58833778-2.11854222 2.11854222-2.64760888L810.15466667 539.27253333l-1.32437334 2.11854222c-1.05813333 1.32323555-2.91271111 2.91271111-5.03125333 4.76615112-2.38250667 1.85344-4.76615111 3.70688-7.94282667 5.82542222-2.91271111 1.85344-6.62072889 3.70688-11.12177778 5.03125333s-9.2672 2.11740445-14.0333511 2.11740445c-13.24032 0-24.09699555-4.50104889-33.36419556-13.50428445-8.73813333-9.2672-13.50542222-20.38897778-13.50542222-33.36305777s4.50218667-24.09585778 13.50542222-33.09909334 20.12387555-13.50542222 33.36419556-13.50542222a53.72586667 53.72586667 0 0 1 24.89002666 6.62072889c2.64760889 1.58833778 5.29521778 3.44177778 7.67886222 5.82542222 2.38364445 2.11854222 3.97084445 3.70688 4.50104889 4.50104889 0.79530667 0.79416889 1.05927111 1.58947555 1.58947556 1.85457778l12.44501333-12.71125334-1.85457778-2.38250666c-1.32323555-1.58833778-3.44177778-3.70688-6.35448888-6.09052445s-6.35448889-4.76615111-10.0613689-7.14865777-8.73813333-4.50218667-14.56355555-6.09052445c-5.56145778-1.85457778-11.65084445-2.64760889-18.27043555-2.64760889z" fill="#FFFFFF" p-id="4861" /></symbol>'}),tl=r().add(cr);const Gn=cr;var dr=new(e())({id:"pat-more",use:"pat-more-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-more">
<g>
	<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
		C15.33,3.96,12.04,0.67,8,0.67z M8,14c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6c3.31,0,6,2.69,6,6C14,11.31,11.31,14,8,14z" />
	<circle cx="4.67" cy="8" r="1" />
	<circle cx="8" cy="8" r="1" />
	<circle cx="11.33" cy="8" r="1" />
</g>
</symbol>`}),el=r().add(dr);const Xn=dr;var pr=new(e())({id:"pat-multiple-choice-more-than-one-answer",use:"pat-multiple-choice-more-than-one-answer-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-multiple-choice-more-than-one-answer"><path d="M397.75893 84.21C392.92893 72.01 381.12893 64 368.00893 64s-24.92 8.01-29.75 20.21l-336 848c-6.51 16.43 1.53 35.03 17.96 41.54 16.43 6.51 35.03-1.53 41.54-17.96L148.84893 736h438.33l87.09 219.79c4.98 12.56 17.02 20.22 29.76 20.22 3.92 0 7.91-0.73 11.78-2.26 16.43-6.51 24.47-25.11 17.96-41.54l-336.01-848zM174.19893 672L368.00893 182.87 561.81893 672H174.19893z" p-id="5221" /><path d="M944.00893 892m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" p-id="5222" /><path d="M864.00893 288h128c17.67 0 32-14.33 32-32s-14.33-32-32-32H864.00893V96c0-17.67-14.33-32-32-32s-32 14.33-32 32v128H672.00893c-17.67 0-32 14.33-32 32s14.33 32 32 32h128v128c0 17.67 14.33 32 32 32s32-14.33 32-32V288z" p-id="5223" /></symbol>'}),rl=r().add(pr);const Yn=pr;var mr=new(e())({id:"pat-multiple-choice",use:"pat-multiple-choice-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-multiple-choice"><path d="M397.75893 84.21C392.92893 72.01 381.12893 64 368.00893 64s-24.92 8.01-29.75 20.21l-336 848c-6.51 16.43 1.53 35.03 17.96 41.54 16.43 6.51 35.03-1.53 41.54-17.96L148.84893 736h438.33l87.09 219.79c4.98 12.56 17.02 20.22 29.76 20.22 3.92 0 7.91-0.73 11.78-2.26 16.43-6.51 24.47-25.11 17.96-41.54l-336.01-848zM174.19893 672L368.00893 182.87 561.81893 672H174.19893zM944.00893 892m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z" p-id="5344" /></symbol>'}),ol=r().add(mr);const Jn=mr;var gr=new(e())({id:"pat-multiple-file",use:"pat-multiple-file-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-multiple-file">
    <g>
	<path d="M1.11,4.6l6.67,2.36C7.85,6.99,7.92,7,8,7s0.15-0.01,0.22-0.04l6.67-2.36c0.27-0.09,0.45-0.35,0.44-0.63
		s-0.18-0.54-0.45-0.63l-6.67-2.3c-0.14-0.05-0.29-0.05-0.44,0l-6.67,2.3C0.85,3.43,0.67,3.69,0.67,3.97
		C0.67,4.25,0.84,4.5,1.11,4.6z M8,2.37l4.65,1.61L8,5.63L3.35,3.98L8,2.37z" />
        <path d="M14.45,6.04L8,8.29L1.55,6.04C1.21,5.92,0.83,6.1,0.7,6.45C0.58,6.79,0.77,7.17,1.11,7.3l6.67,2.33
		C7.85,9.65,7.93,9.67,8,9.67s0.15-0.01,0.22-0.04l6.67-2.33c0.35-0.12,0.53-0.5,0.41-0.85C15.17,6.1,14.79,5.92,14.45,6.04z" />
        <path d="M14.45,8.7L8,10.96L1.55,8.7C1.21,8.58,0.83,8.76,0.7,9.11s0.06,0.73,0.41,0.85l6.67,2.33
		c0.07,0.03,0.15,0.04,0.22,0.04s0.15-0.01,0.22-0.04l6.67-2.33c0.35-0.12,0.53-0.5,0.41-0.85C15.17,8.76,14.79,8.58,14.45,8.7z" />
        <path d="M14.45,11.37L8,13.63l-6.45-2.26c-0.35-0.12-0.73,0.06-0.85,0.41c-0.12,0.35,0.06,0.73,0.41,0.85l6.67,2.33
		C7.85,14.99,7.93,15,8,15c0.07,0,0.15-0.01,0.22-0.04l6.67-2.33c0.35-0.12,0.53-0.5,0.41-0.85C15.17,11.43,14.79,11.25,14.45,11.37
		z" />
</g>
</symbol>`}),al=r().add(gr);const Qn=gr;var hr=new(e())({id:"pat-next-step-fill",use:"pat-next-step-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-next-step-fill">
<path d="M15.1,7.4L9.8,1.9C9.6,1.7,9.3,1.6,9,1.7C8.8,1.8,8.6,2.1,8.6,2.3v2.8c-2,0.2-3.8,1-5.2,2.4
	c-1.6,1.6-2.5,3.6-2.8,6c0,0.3,0.1,0.6,0.4,0.7c0.3,0.1,0.6,0,0.8-0.2c1.5-1.9,2.9-2.9,4-3.2c1-0.2,1.9-0.3,2.8-0.2v3
	c0,0.3,0.2,0.5,0.4,0.6c0.1,0,0.2,0,0.2,0c0.2,0,0.4-0.1,0.5-0.2l5.4-5.8C15.4,8,15.4,7.6,15.1,7.4z" />
</symbol>`}),nl=r().add(hr);const qn=hr;var wr=new(e())({id:"pat-next-step",use:"pat-next-step-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-next-step">
<path d="M9.3,14.3c-0.1,0-0.2,0-0.2,0c-0.3-0.1-0.4-0.3-0.4-0.6v-3c-0.9-0.1-1.8,0-2.8,0.2c-1.1,0.2-2.4,1.3-4,3.2
	c-0.2,0.2-0.5,0.3-0.8,0.2c-0.3-0.1-0.4-0.4-0.4-0.7c0.2-2.4,1.2-4.4,2.8-6c1.4-1.5,3.2-2.3,5.2-2.4V2.3c0-0.3,0.2-0.5,0.4-0.6
	c0.2-0.1,0.5,0,0.7,0.2l5.4,5.5c0.2,0.3,0.3,0.7,0,0.9l-5.4,5.8C9.7,14.3,9.5,14.3,9.3,14.3z M7.9,9.3c0.5,0,1,0,1.5,0.1
	C9.7,9.5,10,9.8,10,10.1V12l3.8-4.1L10,4v1.7c0,0.4-0.3,0.7-0.7,0.7c-2,0-3.6,0.7-4.9,2.1c-0.8,0.8-1.4,1.8-1.8,2.9
	c1.1-1,2.1-1.6,3-1.8C6.3,9.4,7.1,9.3,7.9,9.3z" />
</symbol>`}),il=r().add(wr);const t3=wr;var vr=new(e())({id:"pat-notebook",use:"pat-notebook-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-notebook">
<path d="M13.33,0.67H13H9H4c-0.74,0-1.33,0.6-1.33,1.33v2H2C1.63,4,1.33,4.3,1.33,4.67S1.63,5.33,2,5.33h0.67v2H2
	c-0.37,0-0.67,0.3-0.67,0.67S1.63,8.67,2,8.67h0.67v2H2c-0.37,0-0.67,0.3-0.67,0.67S1.63,12,2,12h0.67v2c0,0.74,0.6,1.33,1.33,1.33
	h5h4h0.33c0.74,0,1.33-0.6,1.33-1.33V2C14.67,1.26,14.07,0.67,13.33,0.67z M9,14H4v-2h0.67c0.37,0,0.67-0.3,0.67-0.67
	s-0.3-0.67-0.67-0.67H4v-2h0.67c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H4v-2h0.67c0.37,0,0.67-0.3,0.67-0.67S5.03,4,4.67,4
	H4V2h5h1.67v12H9z M12,14V2h1h0.33v12H13H12z" />
</symbol>`}),sl=r().add(vr);const e3=vr;var ur=new(e())({id:"pat-offline",use:"pat-offline-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-offline"><path d="M140.16 0.736a92.64 92.64 0 0 0-92.96 92.96v185.92a92.64 92.64 0 0 0 92.96 92.96H0.736v92.96h557.76v-92.96h-139.424a92.64 92.64 0 0 0 92.96-92.96v-185.92A92.64 92.64 0 0 0 419.072 0.736H140.192z m0 92.96h278.88v185.92H140.16v-185.92z m464.8 464.768A92.64 92.64 0 0 0 512 651.424v185.92a92.64 92.64 0 0 0 92.96 92.96h-139.424v92.96h557.76v-92.96h-139.424a92.64 92.64 0 0 0 92.96-92.96v-185.92a92.64 92.64 0 0 0-92.96-92.96h-278.88z m-470.368 21.408l-66.016 66.016 99.008 98.528-99.008 98.528 66.016 66.016 98.528-99.008 98.528 99.008 66.016-66.016-99.008-98.528 99.008-98.528-66.016-66.016-98.528 99.008-98.528-99.008z m470.368 71.552h278.88v185.92h-278.88v-185.92z" p-id="8039" /></symbol>'}),ll=r().add(ur);const r3=ur;var fr=new(e())({id:"pat-ok-2",use:"pat-ok-2-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-ok-2"><path d="M512 32C246.9 32 32 246.9 32 512s214.9 480 480 480 480-214.9 480-480S777.1 32 512 32z m216.44 382.66l-246.81 292A32 32 0 0 1 457.19 718H457a32 32 0 0 1-24.49-11.64L295.31 540a32 32 0 0 1 49.38-40.72L457.5 636.07l222.06-262.73a32 32 0 0 1 48.88 41.32z" p-id="6469" /></symbol>'}),cl=r().add(fr);const o3=fr;var br=new(e())({id:"pat-ok-3",use:"pat-ok-3-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-ok-3"><path d="M387.203 913.68h-2.86c-28.15-0.65-56.87-10.84-83.07-29.45q-1.87-1.34-3.66-2.81L23.263 655a64 64 0 1 1 81.48-98.72L377.003 780.93a38.45 38.45 0 0 0 7.51 4l524.25-650.76a64 64 0 1 1 99.67 80.3L478.553 872.18a61.48 61.48 0 0 1-4.58 5.1c-23.53 23.54-54.25 36.4-86.77 36.4zM679.563 912.06a64 64 0 0 1-49.79-104.15l280.39-348a64 64 0 1 1 99.68 80.3l-280.4 348a63.86 63.86 0 0 1-49.88 23.85z" p-id="7256" /></symbol>'}),dl=r().add(br);const a3=br;var xr=new(e())({id:"pat-oms-color",use:"pat-oms-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-oms-color"><path d="M512 32L128 138.75v582a91.39 91.39 0 0 0 46.38 79.41L512 992l335.43-190.59A96 96 0 0 0 896 717.94V138.75z m265.65 464.59C692.12 569.91 603.23 608 512 608v328.79L198.1 758.43a43.38 43.38 0 0 1-22.1-37.68V175.23l336-93.41V288c91.23 0 180.12 38.09 265.65 111.41L834.34 448z" fill="#1AA69B" p-id="6048" /><path d="M512.07 320h-0.14c-82.93 0-164.68 35.07-244.76 103.7L238.83 448l28.34 24.3C347.27 541 429.05 576 512 576s164.73-35 244.83-103.7l28.34-24.3-28.34-24.3C676.75 355.07 595 320 512.07 320z m-8.21 48.14c2.71-0.09 5.43-0.14 8.14-0.14s5.43 0.05 8.14 0.14C554.59 369.34 568 378.69 568 400a56 56 0 0 1-112 0c0-21.31 13.41-30.66 47.86-31.86zM512 528c-65.48 0-131.69-26.25-198.92-80q48-38.4 95.39-58.22Q408 394.7 408 400a104 104 0 0 0 208 0q0-5.29-0.47-10.22 47.37 19.89 95.39 58.22c-67.23 53.75-133.44 80-198.92 80z" fill="#1AA69B" p-id="6049" /></symbol>'}),pl=r().add(xr);const n3=xr;var yr=new(e())({id:"pat-oms",use:"pat-oms-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-oms"><path d="M486.4 64l358.4 99.648v540.544a89.6 89.6 0 0 1-45.312 77.952L486.4 960l-315.136-179.072A85.312 85.312 0 0 1 128 706.816V163.648L486.4 64z m247.936 433.6l52.928-45.312-52.928-45.376C654.528 338.432 571.52 302.912 486.4 302.912V110.528L172.8 197.696v509.12c0 14.592 7.936 28.032 20.608 35.2l292.992 166.4V601.6c85.12 0 168.128-35.52 247.936-104zM486.464 332.8c77.44 0 153.728 32.704 228.48 96.768l26.432 22.72-26.496 22.656C640.128 539.072 563.84 571.712 486.4 571.712s-153.728-32.64-228.48-96.768l-26.496-22.656 26.496-22.72c74.688-64 151.04-96.768 228.416-96.768h0.128z m-7.68 44.928c-32.128 1.152-44.672 9.856-44.672 29.76a52.288 52.288 0 0 0 104.576 0c0-19.904-12.544-28.608-44.672-29.76a229.12 229.12 0 0 0-15.232 0zM486.4 526.912c61.12 0 122.88-24.448 185.6-74.624a379.456 379.456 0 0 0-88.96-54.4 97.088 97.088 0 1 1-193.28 0c-29.44 12.352-59.136 30.464-88.96 54.4 62.72 50.176 124.48 74.624 185.6 74.624z" p-id="8099" /></symbol>'}),ml=r().add(yr);const i3=yr;var _r=new(e())({id:"pat-online",use:"pat-online-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-online"><path d="M140.16 0.736a92.64 92.64 0 0 0-92.96 92.96v185.92a92.64 92.64 0 0 0 92.96 92.96H0.736v92.96h557.76v-92.96h-139.424a92.64 92.64 0 0 0 92.96-92.96v-185.92A92.64 92.64 0 0 0 419.072 0.736H140.192z m0 92.96h278.88v185.92H140.16v-185.92zM93.696 558.464v325.344h325.344v-92.96H186.656v-232.384H93.696z m511.264 0A92.64 92.64 0 0 0 512 651.424v185.92a92.64 92.64 0 0 0 92.96 92.96h-139.424v92.96h557.76v-92.96h-139.424a92.64 92.64 0 0 0 92.96-92.96v-185.92a92.64 92.64 0 0 0-92.96-92.96h-278.88z m0 92.96h278.88v185.92h-278.88v-185.92z" p-id="7949" /></symbol>'}),gl=r().add(_r);const s3=_r;var Cr=new(e())({id:"pat-pat-color",use:"pat-pat-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pat-color"><path d="M992 880H30.92V591.67H191.1V351.4h160.18V111.13H992z m-400.45-48V639.72H79v192.22z m112.13-240.33V399.45H239.15v192.22zM399.33 351.4H815.8V159.18H399.33z" fill="#16A4E5" p-id="6109" /></symbol>'}),hl=r().add(Cr);const l3=Cr;var Mr=new(e())({id:"pat-pat",use:"pat-pat-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pat"><path d="M992 880H30.92V591.67H191.1V351.4h160.18V111.13H992z m-400.45-48V639.72H79v192.22z m112.13-240.33V399.45H239.15v192.22zM399.33 351.4H815.8V159.18H399.33z" p-id="6079" /></symbol>'}),wl=r().add(Mr);const c3=Mr;var kr=new(e())({id:"pat-pause-fill",use:"pat-pause-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-pause-fill">
<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
	C15.33,3.96,12.04,0.67,8,0.67z M7,10c0,0.37-0.3,0.67-0.67,0.67S5.67,10.37,5.67,10V6c0-0.37,0.3-0.67,0.67-0.67S7,5.63,7,6V10z
	 M10.33,10c0,0.37-0.3,0.67-0.67,0.67S9,10.37,9,10V6c0-0.37,0.3-0.67,0.67-0.67s0.67,0.3,0.67,0.67V10z" />
</symbol>`}),vl=r().add(kr);const d3=kr;var Er=new(e())({id:"pat-pause",use:"pat-pause-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-pause">
  <path d="M8,5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1s1-.4,1-1V6c0-.6-.4-1-1-1Z" />
  <path d="M16,5c-.6,0-1,.4-1,1v12c0,.6.4,1,1,1s1-.4,1-1V6c0-.6-.4-1-1-1Z" />
</symbol>`}),ul=r().add(Er);const p3=Er;var zr=new(e())({id:"pat-pds-color",use:"pat-pds-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pds-color"><path d="M933.6 236.89v548.6L772.25 721V301.43zM740 172.35V850l-225.91-80.65V253zM143 512.53a177.53 177.53 0 0 0-45.3 32.89q-1.6 1.58-3.13 3.18V209.72l387.25-101.91v806.76l-233.13-68a176.76 176.76 0 0 0 74.2-28.79L433.41 850V170.61L143 247z m-11.15 272.54l-91.22 91.22L6.4 842.06l93.5-93.5a145.27 145.27 0 1 1 31.95 36.51z m91.8-15.72a96.81 96.81 0 1 0-96.81-96.81 96.81 96.81 0 0 0 96.81 96.81z" fill="#FF7A26" p-id="6199" /></symbol>'}),fl=r().add(zr);const m3=zr;var Br=new(e())({id:"pat-pds",use:"pat-pds-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pds"><path d="M933.6 236.89v548.59l-161.35-64.54V301.43l161.35-64.54z m-193.62-64.54v677.68l-225.89-80.68V253.03l225.89-80.68z m-597 340.18c-16.33 8.27-31.65 19.24-45.3 32.88-1.05 1.05-2.09 2.11-3.1 3.18V209.72l387.24-101.91v806.76L248.7 846.58c26.11-3.77 51.54-13.37 74.19-28.78l110.52 32.24V170.61l-290.43 76.43v265.49z m-11.13 272.54l-91.22 91.22L6.4 842.06l93.5-93.5c-13.61-22.11-21.46-48.15-21.46-76.02 0-80.2 65.02-145.22 145.22-145.22s145.22 65.02 145.22 145.22-65.02 145.22-145.22 145.22c-34.83 0-66.79-12.26-91.81-32.69z m91.8-15.72c53.47 0 96.81-43.34 96.81-96.81s-43.34-96.81-96.81-96.81-96.81 43.34-96.81 96.81 43.35 96.81 96.81 96.81z" p-id="6229" /></symbol>'}),bl=r().add(Br);const g3=Br;var Pr=new(e())({id:"pat-peer-review-distribution",use:"pat-peer-review-distribution-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-peer-review-distribution">
<g>
	<path d="M7.2,4.2c-0.26,0.26-0.26,0.68,0,0.94c0.26,0.26,0.68,0.26,0.94,0l1.33-1.33c0,0,0.01-0.01,0.01-0.01
		c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.06-0.06,0.1-0.13,0.13-0.2c0.03-0.08,0.05-0.17,0.05-0.26
		c0-0.09-0.02-0.18-0.05-0.26C9.58,3,9.54,2.93,9.48,2.87c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.01-0.01-0.01L8.14,1.53
		c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l0.19,0.19H5.9C5.62,1.7,4.72,1,3.67,1C2.38,1,1.33,2.05,1.33,3.33
		s1.05,2.33,2.33,2.33c1.06,0,1.95-0.7,2.24-1.67h1.49L7.2,4.2z M3.67,4.33c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1
		C4.67,3.88,4.22,4.33,3.67,4.33z" />
	<path d="M12.33,10.33c-1.05,0-1.95,0.7-2.24,1.67H8.61L8.8,11.8c0.26-0.26,0.26-0.68,0-0.94
		c-0.26-0.26-0.68-0.26-0.94,0l-1.33,1.33c-0.06,0.06-0.11,0.14-0.14,0.22c0,0,0,0,0,0c-0.03,0.08-0.05,0.17-0.05,0.25
		c0,0.09,0.02,0.18,0.05,0.26c0.03,0.07,0.07,0.14,0.13,0.2c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0
		c0,0,0.01,0.01,0.01,0.01l1.33,1.33c0.26,0.26,0.68,0.26,0.94,0c0.26-0.26,0.26-0.68,0-0.94l-0.2-0.2h1.49
		C10.38,14.3,11.28,15,12.33,15c1.29,0,2.33-1.05,2.33-2.33C14.67,11.38,13.62,10.33,12.33,10.33z M12.33,13.67c-0.55,0-1-0.45-1-1
		c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C13.33,13.22,12.88,13.67,12.33,13.67z" />
	<path d="M12,5.9v1.49l-0.2-0.2c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l1.33,1.33
		c0,0,0,0.01,0.01,0.01c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0.06,0.06,0.13,0.1,0.21,0.13c0.08,0.03,0.16,0.05,0.25,0.05
		c0.09,0,0.18-0.02,0.26-0.05c0.08-0.03,0.15-0.08,0.21-0.14l1.33-1.33c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0
		l-0.19,0.19V5.9C14.3,5.62,15,4.72,15,3.67c0-1.29-1.05-2.33-2.33-2.33c-1.29,0-2.33,1.05-2.33,2.33C10.33,4.72,11.04,5.62,12,5.9z
		 M12.67,2.67c0.55,0,1,0.45,1,1s-0.45,1-1,1c-0.55,0-1-0.45-1-1S12.12,2.67,12.67,2.67z" />
	<path d="M4,10.1V8.61L4.2,8.8c0.26,0.26,0.68,0.26,0.94,0c0.26-0.26,0.26-0.68,0-0.94L3.81,6.53
		c0,0-0.01-0.01-0.01-0.01c0,0,0,0,0,0c0,0,0,0,0,0c-0.06-0.06-0.13-0.1-0.21-0.13l0,0c0,0,0,0,0,0c-0.16-0.07-0.36-0.07-0.51,0
		c-0.01,0-0.02,0.01-0.03,0.02h0c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0
		c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.01,0
		C2.96,6.44,2.92,6.47,2.89,6.51c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
		c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.01,0.01-0.01,0.01L1.53,7.86
		c-0.26,0.26-0.26,0.68,0,0.94s0.68,0.26,0.94,0l0.2-0.2v1.49C1.7,10.38,1,11.28,1,12.33c0,1.29,1.05,2.33,2.33,2.33
		s2.33-1.05,2.33-2.33C5.67,11.28,4.96,10.38,4,10.1z M3.33,13.33c-0.55,0-1-0.45-1-1s0.45-1,1-1c0.55,0,1,0.45,1,1
		S3.88,13.33,3.33,13.33z" />
</g>
</symbol>`}),xl=r().add(Pr);const h3=Pr;var Lr=new(e())({id:"pat-peer-review-result",use:"pat-peer-review-result-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-peer-review-result">
<g>
	<path d="M14.67,4.67c0.37,0,0.67-0.3,0.67-0.67V1.33c0-0.37-0.3-0.67-0.67-0.67H12c-0.37,0-0.67,0.3-0.67,0.67V2H4.67
		V1.33c0-0.37-0.3-0.67-0.67-0.67H1.33c-0.37,0-0.67,0.3-0.67,0.67V4c0,0.37,0.3,0.67,0.67,0.67H2v6.67H1.33
		c-0.37,0-0.67,0.3-0.67,0.67v2.67c0,0.37,0.3,0.67,0.67,0.67H4c0.37,0,0.67-0.3,0.67-0.67V14h6.67v0.67c0,0.37,0.3,0.67,0.67,0.67
		h2.67c0.37,0,0.67-0.3,0.67-0.67V12c0-0.37-0.3-0.67-0.67-0.67H14V4.67H14.67z M12.67,2H14v1.33h-1.33V2z M2,2h1.33v1.33H2V2z
		 M3.33,14H2v-1.33h1.33V14z M14,14h-1.33v-1.33H14V14z M12.67,11.33H12c-0.37,0-0.67,0.3-0.67,0.67v0.67H4.67V12
		c0-0.37-0.3-0.67-0.67-0.67H3.33V4.67H4c0.37,0,0.67-0.3,0.67-0.67V3.33h6.67V4c0,0.37,0.3,0.67,0.67,0.67h0.67V11.33z" />
	<path d="M10.67,6.8H9.2V5.33c0-0.37-0.3-0.67-0.67-0.67h-3.2c-0.37,0-0.67,0.3-0.67,0.67v3.2
		c0,0.37,0.3,0.67,0.67,0.67H6.8v1.47c0,0.37,0.3,0.67,0.67,0.67h3.2c0.37,0,0.67-0.3,0.67-0.67v-3.2C11.33,7.1,11.04,6.8,10.67,6.8
		z M10,10H8.13V8.53c0-0.37-0.3-0.67-0.67-0.67H6V6h1.87v1.47c0,0.37,0.3,0.67,0.67,0.67H10V10z" />
</g>
</symbol>`}),yl=r().add(Lr);const w3=Lr;var Or=new(e())({id:"pat-peer-review",use:"pat-peer-review-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-peer-review">
    <path d="M12.67,10c1.47,0,2.67-1.2,2.67-2.67c0-0.02-0.01-0.03-0.01-0.05c0-0.04-0.01-0.08-0.03-0.12
	c-0.01-0.05-0.03-0.09-0.05-0.13C15.25,7.02,15.25,7,15.24,6.99l-2-3.33c-0.01-0.01-0.02-0.02-0.03-0.03
	c-0.12-0.17-0.31-0.29-0.54-0.29h-4V2c0-0.37-0.3-0.67-0.67-0.67S7.33,1.63,7.33,2v1.33h-4c-0.23,0-0.41,0.12-0.54,0.29
	C2.79,3.64,2.77,3.64,2.76,3.66l-2,3.33C0.75,7,0.75,7.02,0.75,7.03C0.73,7.07,0.71,7.11,0.7,7.16C0.69,7.2,0.68,7.24,0.68,7.29
	c0,0.02-0.01,0.03-0.01,0.04C0.67,8.8,1.86,10,3.33,10S6,8.8,6,7.33c0-0.02-0.01-0.03-0.01-0.04c0-0.05-0.01-0.09-0.03-0.13
	C5.95,7.11,5.94,7.07,5.92,7.03C5.91,7.02,5.91,7,5.91,6.99L4.51,4.67h2.82v8.67h-4c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67
	h9.33c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67h-4V4.67h2.82L10.1,6.99C10.09,7,10.09,7.02,10.08,7.03
	c-0.02,0.04-0.03,0.09-0.05,0.13c-0.01,0.04-0.02,0.08-0.03,0.12C10.01,7.3,10,7.32,10,7.33C10,8.8,11.2,10,12.67,10z M3.33,5.3
	l0.82,1.37H2.51L3.33,5.3z M3.33,8.67C2.84,8.67,2.41,8.4,2.18,8h2.31C4.26,8.4,3.83,8.67,3.33,8.67z M12.67,8.67
	c-0.49,0-0.92-0.27-1.15-0.67h2.31C13.59,8.4,13.16,8.67,12.67,8.67z M11.84,6.67l0.82-1.37l0.82,1.37H11.84z" />
</symbol>`}),_l=r().add(Or);const v3=Or;var Sr=new(e())({id:"pat-people-delete",use:"pat-people-delete-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-people-delete">
<path d="M6.333 1.333c-1.649 0-3 1.351-3 3s1.351 3 3 3c1.649 0 3-1.351 3-3s-1.351-3-3-3zM6.333 2.667c0.928 0 1.667 0.738 1.667 1.667s-0.738 1.667-1.667 1.667c-0.928 0-1.667-0.738-1.667-1.667s0.738-1.667 1.667-1.667z" />
<path d="M10.529 9.862c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l2.667 2.667c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195v0c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471l-2.667-2.667c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0z" />
<path d="M13.195 9.862l-2.667 2.667c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471v0c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195l2.667-2.667c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0z" />
<path d="M6.267 8.667c-1.493 0-2.333-0.034-3.113 0.363-0.627 0.32-1.138 0.83-1.457 1.457-0.397 0.78-0.363 1.62-0.363 3.113v0.4c0 0.368 0.298 0.667 0.667 0.667h7c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0h-6.327c0.006-1.255 0.042-1.909 0.212-2.242 0.192-0.376 0.497-0.682 0.874-0.874 0.361-0.184 1.015-0.218 2.508-0.218h2.733c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0z" />
</symbol>`}),Cl=r().add(Sr);const u3=Sr;var Hr=new(e())({id:"pat-peoples",use:"pat-peoples-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-peoples">
	<g>
	<path d="M8,7.33c1.65,0,3-1.35,3-3c0-1.65-1.35-3-3-3s-3,1.35-3,3C5,5.99,6.35,7.33,8,7.33z M8,2.67
		c0.92,0,1.67,0.75,1.67,1.67S8.92,6,8,6S6.33,5.25,6.33,4.33S7.08,2.67,8,2.67z" />
		<path d="M3.79,6.9C3.89,6.97,4.01,7,4.13,7C4.36,7,4.58,6.88,4.7,6.68c0.19-0.31,0.09-0.73-0.23-0.92
		c-0.51-0.3-0.81-0.84-0.81-1.43c0-0.54,0.27-1.06,0.71-1.37c0.3-0.21,0.38-0.63,0.17-0.93c-0.21-0.3-0.63-0.38-0.93-0.17
		c-0.8,0.56-1.29,1.48-1.29,2.46C2.33,5.39,2.88,6.36,3.79,6.9z" />
		<path d="M11.62,5.7c-0.3,0.21-0.38,0.63-0.17,0.93c0.13,0.19,0.34,0.29,0.55,0.29c0.13,0,0.26-0.04,0.38-0.12
		c0.8-0.56,1.29-1.48,1.29-2.46s-0.48-1.9-1.29-2.46c-0.3-0.21-0.72-0.14-0.93,0.17s-0.14,0.72,0.17,0.93
		c0.45,0.31,0.71,0.82,0.71,1.37C12.33,4.88,12.07,5.39,11.62,5.7z" />
		<path d="M10.61,8.92C10,8.67,9.33,8.67,8,8.67s-2,0-2.61,0.25c-0.81,0.34-1.47,0.99-1.8,1.8
		C3.33,11.34,3.33,12,3.33,13.33V14c0,0.37,0.3,0.67,0.67,0.67h8c0.37,0,0.67-0.3,0.67-0.67v-0.67c0-1.33,0-2-0.25-2.61
		C12.08,9.91,11.42,9.26,10.61,8.92z M4.67,13.33c0-1.12,0-1.73,0.15-2.1c0.2-0.49,0.6-0.88,1.08-1.08C6.27,10,6.85,10,8,10
		c1.12,0,1.73,0,2.1,0.15c0.49,0.2,0.88,0.6,1.08,1.08c0.15,0.37,0.15,0.98,0.15,2.1H4.67z" />
		<path d="M14.97,10.49c-0.32-0.63-0.82-1.13-1.46-1.46c-0.33-0.17-0.73-0.04-0.9,0.29c-0.17,0.33-0.04,0.73,0.29,0.9
		c0.38,0.19,0.68,0.5,0.88,0.87C14,11.52,14,12.22,14,13.6V14c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-0.4
		C15.33,12,15.33,11.2,14.97,10.49z" />
		<path d="M3.38,9.32c-0.17-0.33-0.57-0.46-0.9-0.29c-0.63,0.32-1.14,0.83-1.46,1.46C0.67,11.2,0.67,12,0.67,13.6V14
		c0,0.37,0.3,0.67,0.67,0.67S2,14.37,2,14v-0.4c0-1.38,0-2.08,0.22-2.51c0.19-0.38,0.5-0.68,0.87-0.87
		C3.42,10.05,3.55,9.65,3.38,9.32z" />
</g>
</symbol>`}),Ml=r().add(Hr);const f3=Hr;var Dr=new(e())({id:"pat-person",use:"pat-person-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-person">
    <g>
	<path d="M8,7.33c1.65,0,3-1.35,3-3c0-1.65-1.35-3-3-3s-3,1.35-3,3C5,5.99,6.35,7.33,8,7.33z M8,2.67
		c0.92,0,1.67,0.75,1.67,1.67S8.92,6,8,6S6.33,5.25,6.33,4.33S7.08,2.67,8,2.67z" />
        <path d="M14.3,10.49c-0.32-0.63-0.82-1.13-1.46-1.46c-0.71-0.36-1.51-0.36-3.11-0.36H6.27c-1.6,0-2.4,0-3.11,0.36
		C2.52,9.35,2.02,9.85,1.7,10.49C1.33,11.2,1.33,12,1.33,13.6V14c0,0.37,0.3,0.67,0.67,0.67h12c0.37,0,0.67-0.3,0.67-0.67v-0.4
		C14.67,12,14.67,11.2,14.3,10.49z M2.67,13.33c0-1.21,0.01-1.84,0.22-2.24c0.19-0.38,0.5-0.68,0.88-0.88C4.19,10,4.88,10,6.27,10
		h3.47c1.38,0,2.08,0,2.51,0.22c0.37,0.19,0.68,0.5,0.87,0.87c0.2,0.4,0.22,1.03,0.22,2.24H2.67z" />
</g>
</symbol>`}),kl=r().add(Dr);const b3=Dr;var Tr=new(e())({id:"pat-pin-fill",use:"pat-pin-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-pin-fill">
<path d="M11.2,6.2l-1.1-3.6l1-0.7c0.2-0.2,0.3-0.5,0.2-0.7c-0.1-0.3-0.3-0.5-0.6-0.5H5.3C5,0.7,4.8,0.9,4.7,1.1
	c-0.1,0.3,0,0.6,0.2,0.7l1,0.7L4.8,6.3C4.2,6.7,2.7,7.9,2.7,9.3C2.7,9.7,3,10,3.3,10h2.8l1.2,4.8c0.1,0.3,0.3,0.5,0.6,0.5
	c0.3,0,0.6-0.2,0.6-0.5L9.9,10h2.8c0.4,0,0.7-0.3,0.7-0.7C13.3,7.8,12.1,6.8,11.2,6.2z" />
</symbol>`}),El=r().add(Tr);const x3=Tr;var Rr=new(e())({id:"pat-pin",use:"pat-pin-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-pin">
<path d="M2.1,14.5c-0.2,0-0.3-0.1-0.5-0.2c-0.2-0.2-0.3-0.6-0.1-0.9l3.7-5L3.1,6.3C2.8,6,2.8,5.6,3.1,5.4
	c0.7-0.7,1.8-1.3,3.5-0.5l3.5-2L10,1.7c0-0.3,0.1-0.6,0.4-0.7c0.3-0.1,0.6-0.1,0.8,0.1l3.8,3.8c0.2,0.2,0.3,0.5,0.1,0.8
	c-0.1,0.3-0.4,0.4-0.7,0.4l-1.2-0.2l-2,3.5c0.4,1,0.7,2.3-0.5,3.5c-0.1,0.1-0.3,0.2-0.5,0.2l0,0c-0.2,0-0.3-0.1-0.5-0.2l-2.2-2.2
	l-5,3.7C2.4,14.5,2.3,14.5,2.1,14.5z M7.6,9.2c0.2,0,0.3,0.1,0.5,0.2l2,2c0.2-0.4,0.1-0.9-0.3-1.7c-0.1-0.2-0.1-0.4,0-0.6l2.4-4.2
	c0.1-0.2,0.2-0.3,0.4-0.3l-1.1-1.1c0,0.2-0.2,0.3-0.3,0.4L6.9,6.2c-0.2,0.1-0.4,0.1-0.6,0C5.5,5.8,5,5.8,4.6,5.9l2,2
	c0.2,0.2,0.3,0.6,0.1,0.9l-1.4,1.9l1.9-1.4C7.3,9.2,7.4,9.2,7.6,9.2z" />
</symbol>`}),zl=r().add(Rr);const y3=Rr;var Ar=new(e())({id:"pat-placeholder",use:"pat-placeholder-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-placeholder"><path d="M1024 0H0v1024h1024V0z" p-id="9089" /></symbol>'}),Bl=r().add(Ar);const _3=Ar;var Ir=new(e())({id:"pat-play-2",use:"pat-play-2-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-play-2">
  <path d="M7.5,19.1c-.2,0-.3,0-.5-.1-.3-.2-.5-.5-.5-.9V5.9c0-.4.2-.7.5-.9s.7-.2,1,0l10.5,6.1c.3.2.5.5.5.9s-.2.7-.5.9l-10.5,6.1c-.2,0-.3.1-.5.1ZM8.5,7.7v8.7l7.5-4.3-7.5-4.3Z" />
</symbol>`}),Pl=r().add(Ir);const C3=Ir;var Vr=new(e())({id:"pat-play-fill",use:"pat-play-fill-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-play-fill">
<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
	C15.33,3.96,12.04,0.67,8,0.67z M11,8.58l-4,2.31c-0.1,0.06-0.22,0.09-0.33,0.09s-0.23-0.03-0.33-0.09C6.13,10.77,6,10.55,6,10.31
	V5.69c0-0.24,0.13-0.46,0.33-0.58c0.21-0.12,0.46-0.12,0.67,0l4,2.31c0.21,0.12,0.33,0.34,0.33,0.58S11.21,8.46,11,8.58z" />
</symbol>`}),Ll=r().add(Vr);const M3=Vr;var Ur=new(e())({id:"pat-play",use:"pat-play-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-play">
<g>
	<path d="M8,0.67C3.96,0.67,0.67,3.96,0.67,8c0,4.04,3.29,7.33,7.33,7.33c4.04,0,7.33-3.29,7.33-7.33
		C15.33,3.96,12.04,0.67,8,0.67z M8,14c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6c3.31,0,6,2.69,6,6C14,11.31,11.31,14,8,14z" />
	<path d="M11,7.42L7,5.11c-0.21-0.12-0.46-0.12-0.67,0C6.13,5.23,6,5.45,6,5.69v4.62c0,0.24,0.13,0.46,0.33,0.58
		c0.1,0.06,0.22,0.09,0.33,0.09S6.9,10.95,7,10.89l4-2.31c0.21-0.12,0.33-0.34,0.33-0.58S11.21,7.54,11,7.42z M7.33,9.15V6.85
		l2,1.15L7.33,9.15z" />
</g>
</symbol>`}),Ol=r().add(Ur);const k3=Ur;var Nr=new(e())({id:"pat-playback-progress",use:"pat-playback-progress-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-playback-progress">
  <path d="M22,1.5H2c-.6,0-1,.4-1,1v13c0,.6.4,1,1,1h20c.6,0,1-.4,1-1V2.5c0-.6-.4-1-1-1ZM21,14.5H3V3.5h18v11Z" />
  <path d="M10.5,11.9c.1,0,.3.1.5.1s.4,0,.6-.2l3-2c.3-.2.4-.5.4-.8s-.2-.6-.4-.8l-3-2c-.3-.2-.7-.2-1,0-.3.2-.5.5-.5.9v4c0,.4.2.7.5.9ZM12,8.9h.2c0,.1-.2.3-.2.3v-.3Z" />
  <path d="M21,19h-11.7c-.4-.9-1.3-1.5-2.3-1.5s-1.9.6-2.3,1.5h-1.7c-.6,0-1,.4-1,1s.4,1,1,1h1.7c.4.9,1.3,1.5,2.3,1.5s1.9-.6,2.3-1.5h11.7c.6,0,1-.4,1-1s-.4-1-1-1ZM7,20.5c-.3,0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5Z" />
</symbol>`}),Sl=r().add(Nr);const E3=Nr;var Fr=new(e())({id:"pat-plus",use:"pat-plus-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-plus">
<path d="M12.67,7.33H8.68l0.01-4c0-0.37-0.3-0.67-0.67-0.67c0,0,0,0,0,0c-0.37,0-0.67,0.3-0.67,0.67l-0.01,4H3.33
	c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h4.01l-0.01,4c0,0.37,0.3,0.67,0.67,0.67c0,0,0,0,0,0c0.37,0,0.67-0.3,0.67-0.67
	l0.01-4h3.99c0.37,0,0.67-0.3,0.67-0.67S13.04,7.33,12.67,7.33z" />
</symbol>`}),Hl=r().add(Fr);const z3=Fr;var jr=new(e())({id:"pat-preview-close",use:"pat-preview-close-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-preview-close"><path d="M947.2 546.133333L853.333333 452.266667l8.533334-8.533334c29.866667-25.6 55.466667-55.466667 72.533333-85.333333 8.533333-17.066667 4.266667-42.666667-17.066667-55.466667-21.333333-8.533333-46.933333-4.266667-59.733333 17.066667-8.533333 21.333333-25.6 42.666667-46.933333 59.733333-68.266667 55.466667-179.2 89.6-298.666667 89.6s-230.4-34.133333-298.666667-89.6c-21.333333-17.066667-38.4-38.4-46.933333-59.733333-12.8-21.333333-38.4-25.6-59.733333-17.066667-21.333333 12.8-25.6 38.4-17.066667 59.733334 17.066667 29.866667 38.4 59.733333 72.533333 85.333333l8.533334 8.533333-93.866667 93.866667c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 21.333333 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8l106.666667-106.666666c34.133333 17.066667 68.266667 29.866667 110.933333 38.4l-34.133333 128c-4.266667 21.333333 8.533333 46.933333 29.866667 51.2h12.8c17.066667 0 34.133333-12.8 42.666666-29.866667l38.4-136.533333H512c25.6 0 46.933333 0 72.533333-4.266667l38.4 136.533333c4.266667 17.066667 21.333333 29.866667 42.666667 29.866667h12.8c21.333333-4.266667 34.133333-29.866667 29.866667-51.2l-34.133334-128c38.4-8.533333 76.8-21.333333 110.933334-38.4l106.666666 106.666667c8.533333 8.533333 21.333333 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8c12.8-17.066667 12.8-42.666667-4.266667-59.733334z" p-id="3174" /></symbol>'}),Dl=r().add(jr);const B3=jr;var Wr=new(e())({id:"pat-printer",use:"pat-printer-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-printer">
<path d="M14.67,6h-1.33V1.33c0-0.37-0.3-0.67-0.67-0.67H3.33c-0.37,0-0.67,0.3-0.67,0.67V6H1.33
	C0.97,6,0.67,6.3,0.67,6.67v6c0,0.37,0.3,0.67,0.67,0.67H3v1.33c0,0.37,0.3,0.67,0.67,0.67h8.67c0.37,0,0.67-0.3,0.67-0.67v-1.33
	h1.67c0.37,0,0.67-0.3,0.67-0.67v-6C15.33,6.3,15.04,6,14.67,6z M4,2h8v4H4V2z M11.67,14H4.33v-2.67h7.33V14z M14,12h-0.99v-1.33
	c0-0.37-0.3-0.67-0.67-0.67h-0.01H3.67H3.66c-0.37,0-0.67,0.3-0.67,0.67V12H2V7.33h1.33h9.33H14V12z" />
</symbol>`}),Tl=r().add(Wr);const P3=Wr;var Kr=new(e())({id:"pat-profile",use:"pat-profile-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-profile">
<g>
	<path d="M6.67,14l-3.33,0l0-12h6v2.67c0,0.37,0.3,0.67,0.67,0.67h2.67v2.33c0,0.37,0.3,0.67,0.67,0.67S14,8.03,14,7.67
		v-3c0-0.09-0.02-0.17-0.05-0.25c-0.01-0.03-0.04-0.06-0.06-0.09c-0.02-0.04-0.04-0.07-0.07-0.11l-3-3.33
		c-0.13-0.14-0.31-0.22-0.5-0.22h-7C2.6,0.67,2,1.26,2,2v12c0,0.73,0.6,1.33,1.33,1.33h3.33c0.37,0,0.67-0.3,0.67-0.67
		S7.03,14,6.67,14z M11.84,4h-1.17V2.7L11.84,4z" />
	<path d="M12.99,11.79c0.22-0.32,0.35-0.71,0.35-1.12c0-1.1-0.9-2-2-2c-1.1,0-2,0.9-2,2c0,0.42,0.13,0.8,0.35,1.12
		C8.68,12.37,8,13.43,8,14.67c0,0.37,0.3,0.67,0.67,0.67c0.37,0,0.67-0.3,0.67-0.67c0-1.1,0.9-2,2-2s2,0.9,2,2
		c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67C14.67,13.43,13.99,12.37,12.99,11.79z M10.67,10.67c0-0.37,0.3-0.67,0.67-0.67
		C11.7,10,12,10.3,12,10.67c0,0.37-0.3,0.67-0.67,0.67C10.97,11.33,10.67,11.03,10.67,10.67z" />
</g>
</symbol>`}),Rl=r().add(Kr);const L3=Kr;var Zr=new(e())({id:"pat-programming",use:"pat-programming-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-programming"><path d="M280.3 299.17c-11.5-13.42-31.71-14.97-45.12-3.47l-224 192A31.992 31.992 0 0 0 0 512c0 9.34 4.08 18.22 11.17 24.3l224 192a31.902 31.902 0 0 0 20.81 7.71c9.02 0 17.98-3.79 24.31-11.18 11.5-13.42 9.95-33.62-3.47-45.12L81.17 512l195.65-167.71c13.42-11.5 14.98-31.7 3.48-45.12zM1012.83 487.7l-224-192c-13.42-11.5-33.62-9.95-45.12 3.47s-9.95 33.62 3.47 45.12L942.83 512 747.17 679.7c-13.42 11.5-14.97 31.7-3.47 45.12 6.33 7.39 15.3 11.18 24.31 11.18 7.37 0 14.78-2.53 20.81-7.71l224-192a32 32 0 0 0 11.17-24.3c0.01-9.33-4.07-18.21-11.16-24.29zM718.31 99.37c-15.81-7.9-35.03-1.5-42.93 14.31l-384 768.01c-7.9 15.81-1.5 35.03 14.31 42.93 4.59 2.3 9.48 3.38 14.29 3.38 11.74 0 23.04-6.48 28.65-17.7l384-768.01c7.9-15.8 1.49-35.02-14.32-42.92z" p-id="5314" /></symbol>'}),Al=r().add(Zr);const O3=Zr;var $r=new(e())({id:"pat-protect",use:"pat-protect-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-protect">
    <path d="M8,15.7c-0.1,0-0.1,0-0.2,0c-3.9-1.3-6.5-4.9-6.5-9V3.1c0-0.3,0.2-0.6,0.5-0.6l6-1.8c0.1,0,0.3,0,0.4,0l6,1.8
	c0.3,0.1,0.5,0.3,0.5,0.6v3.6c0,4.1-2.6,7.7-6.5,9C8.1,15.7,8.1,15.7,8,15.7z M2.7,3.6v3.1c0,3.4,2.1,6.5,5.3,7.6
	c3.2-1.2,5.3-4.2,5.3-7.6V3.6L8,2L2.7,3.6z" />
    <path d="M7.3,10.7c-0.2,0-0.3-0.1-0.5-0.2L4.5,8.1c-0.3-0.3-0.3-0.7,0-0.9c0.3-0.3,0.7-0.3,0.9,0l1.9,1.9l3.5-3.5
	c0.3-0.3,0.7-0.3,0.9,0c0.3,0.3,0.3,0.7,0,0.9l-4,4C7.7,10.6,7.5,10.7,7.3,10.7z" />
</symbol>`}),Il=r().add($r);const S3=$r;var Gr=new(e())({id:"pat-pta-color",use:"pat-pta-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pta-color"><path d="M719.59 607.72v79.95l-127.92-79.95H64V112h735.54v495.72z m111.93 32V351.88h127.91v495.68c-207.86 0-351.77 80-351.77 80s-143.91-80-351.78-80V639.7h335.79l159.9 95.93V639.7zM112 160v399.75h639.6V160z m431.7 143.91v-48l143.91 78.52v50.82L543.7 463.81v-48l95.94-56z m-319.8 56l95.94 56v48l-143.91-78.63v-50.82l143.91-78.52v48z m287.82-103.97L399.79 463.81h-48l105.67-207.87z" fill="#0C4991" p-id="6169" /></symbol>'}),Vl=r().add(Gr);const H3=Gr;var Xr=new(e())({id:"pat-pta",use:"pat-pta-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-pta"><path d="M719.59 607.72v79.95l-127.92-79.95H64V112h735.54v495.72z m111.93 32V351.88h127.91v495.68c-207.86 0-351.77 80-351.77 80s-143.91-80-351.78-80V639.7h335.79l159.9 95.93V639.7zM112 160v399.75h639.6V160z m431.7 143.91v-48l143.91 78.52v50.82L543.7 463.81v-48l95.94-56z m-319.8 56l95.94 56v48l-143.91-78.63v-50.82l143.91-78.52v48z m287.82-103.97L399.79 463.81h-48l105.67-207.87z" p-id="6139" /></symbol>'}),Ul=r().add(Xr);const D3=Xr;var Yr=new(e())({id:"pat-ptae-color",use:"pat-ptae-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-ptae-color"><path d="M670.81 288.5l-34.34 47.81H288.66L193 734.73h629.5l-55.74-234.06 29.41-46.81 90.12 328.68-47.81 95.62H177.1l-47.81-95.62 135.47-494z m230.56-84.94l-250 433L559 669.05l-18-96.29 250-432.95zM492.93 384.12l31.12 36.3-134.42 115.21-69.1-69.09 33.81-33.81 37.79 37.79z m-236.14 255h255v47.81H240.85z m31.87-79.69h223.12v47.81H272.72z" fill="#324171" p-id="6319" /></symbol>'}),Nl=r().add(Yr);const T3=Yr;var Jr=new(e())({id:"pat-ptae",use:"pat-ptae-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-ptae"><path d="M670.81 288.5l-34.34 47.81H288.66L193 734.73h629.5l-55.74-234.06 29.41-46.81 90.12 328.68-47.81 95.62H177.1l-47.81-95.62 135.47-494z m230.56-84.94l-250 433L559 669.05l-18-96.29 250-432.95zM492.93 384.12l31.12 36.3-134.42 115.21-69.1-69.09 33.81-33.81 37.79 37.79z m-236.14 255h255v47.81H240.85z m31.87-79.69h223.12v47.81H272.72z" p-id="6349" /></symbol>'}),Fl=r().add(Jr);const R3=Jr;var Qr=new(e())({id:"pat-public",use:"pat-public-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-public">
<path d="M14.6,11.18c0.47-0.96,0.73-2.04,0.73-3.18c0-4.04-3.29-7.33-7.33-7.33C3.96,0.67,0.67,3.96,0.67,8
	S3.96,15.33,8,15.33c2.87,0,5.35-1.66,6.55-4.06C14.57,11.24,14.59,11.21,14.6,11.18z M8,2c0.3,0,0.6,0.03,0.89,0.07
	C8.91,2.34,8.95,2.62,9,2.85c0.15,0.81,0.64,1.11,0.93,1.28c0.05,0.03,0.12,0.07,0.12,0.06c0,0,0.01,0.05-0.01,0.2
	c-0.01,0.08-0.03,0.12-0.03,0.13C9.95,4.54,9.8,4.55,9.7,4.56C9.32,4.58,8.75,4.62,8.24,5.07C7.6,5.62,7.71,6.45,7.78,7.06
	c0.09,0.7,0.06,0.89-0.12,0.99C7.4,8.19,7.02,7.97,6.47,7.61c-0.57-0.37-1.29-0.83-2-0.44C3.71,7.58,3.63,8.46,3.58,9.1
	C3.55,9.34,3.52,9.75,3.45,9.84C3.28,9.99,2.83,9.94,2.25,9.71C2.09,9.17,2,8.59,2,8C2,4.69,4.69,2,8,2z M2.96,11.24
	c0.06,0,0.13,0.02,0.18,0.02c0.48,0,0.88-0.15,1.2-0.44C4.8,10.41,4.85,9.77,4.9,9.21c0.03-0.3,0.07-0.8,0.14-0.86
	c0.12,0,0.48,0.24,0.7,0.37c0.67,0.43,1.58,1.02,2.56,0.48c1.02-0.57,0.89-1.62,0.8-2.32C9.07,6.6,9.01,6.16,9.11,6.07
	c0.17-0.14,0.36-0.16,0.68-0.19c0.45-0.03,1.38-0.1,1.56-1.29c0.17-1.06-0.43-1.42-0.75-1.61c-0.21-0.13-0.26-0.16-0.3-0.37
	c-0.01-0.06-0.02-0.11-0.03-0.16C12.46,3.35,14,5.5,14,8c0,0.63-0.1,1.24-0.28,1.82c-0.84-0.71-2.12-1.5-3.3-0.88
	c-1.21,0.63-1.17,1.51-1.15,1.98c0,0.09,0.01,0.21,0,0.24c-0.02,0.06-0.05,0.09-0.17,0.2c-0.21,0.19-0.52,0.47-0.72,1.11
	c-0.16,0.5-0.09,1,0.16,1.51C8.35,13.99,8.18,14,8,14C5.88,14,4.02,12.9,2.96,11.24z M9.89,13.69c-0.24-0.32-0.33-0.59-0.26-0.82
	c0.1-0.3,0.2-0.39,0.35-0.53c0.16-0.15,0.38-0.35,0.52-0.72c0.1-0.28,0.09-0.54,0.08-0.76c-0.02-0.37-0.02-0.5,0.44-0.74
	c0.42-0.22,1.18,0.13,2.1,0.97C12.4,12.3,11.26,13.23,9.89,13.69z" />
</symbol>`}),jl=r().add(Qr);const A3=Qr;var qr=new(e())({id:"pat-pulse",use:"pat-pulse-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-pulse">
    <path d="M5.67,13c-0.02,0-0.03,0-0.05,0c-0.3-0.02-0.55-0.24-0.6-0.54L3.8,6.16l-0.51,1.4C3.2,7.82,2.95,8,2.67,8H1.33
	C0.97,8,0.67,7.7,0.67,7.33s0.3-0.67,0.67-0.67H2.2l1.17-3.23C3.48,3.16,3.76,2.98,4.05,3c0.3,0.02,0.55,0.24,0.6,0.54l1.2,6.25
	l1.18-3.35C7.13,6.19,7.36,6.02,7.62,6C7.9,5.98,8.14,6.13,8.26,6.37l0.76,1.52l1.72-3.2c0.13-0.24,0.39-0.38,0.66-0.35
	c0.27,0.03,0.5,0.22,0.57,0.48l0.69,2.42l0.03-0.09c0.08-0.29,0.34-0.48,0.64-0.48h1.33c0.37,0,0.67,0.3,0.67,0.67S15.04,8,14.67,8
	h-0.83l-0.53,1.85c-0.08,0.29-0.34,0.48-0.64,0.48s-0.56-0.2-0.64-0.48l-0.88-3.09L9.59,9.65C9.47,9.87,9.25,9.99,8.99,10
	C8.74,10,8.52,9.85,8.4,9.63L7.77,8.37l-1.48,4.19C6.2,12.82,5.95,13,5.67,13z" />
</symbol>`}),Wl=r().add(qr);const I3=qr;var t1=new(e())({id:"pat-puzzle",use:"pat-puzzle-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-puzzle">
<path d="M11.33,15.33h-10c-0.37,0-0.67-0.3-0.67-0.67V12c0-0.37,0.3-0.67,0.67-0.67h1.33C3.4,11.33,4,10.74,4,10
	S3.4,8.67,2.67,8.67H1.33c-0.37,0-0.67-0.3-0.67-0.67V4c0-0.37,0.3-0.67,0.67-0.67h2.33c0-1.47,1.2-2.67,2.67-2.67S9,1.86,9,3.33
	h2.33C11.7,3.33,12,3.63,12,4v3.33h0.67c1.47,0,2.67,1.2,2.67,2.67c0,1.47-1.2,2.67-2.67,2.67H12v2C12,15.04,11.7,15.33,11.33,15.33
	z M2,14h8.67v-2c0-0.37,0.3-0.67,0.67-0.67h1.33c0.74,0,1.33-0.6,1.33-1.33s-0.6-1.33-1.33-1.33h-1.33c-0.37,0-0.67-0.3-0.67-0.67
	V4.67H8.33c-0.37,0-0.67-0.3-0.67-0.67V3.33C7.67,2.6,7.07,2,6.33,2S5,2.6,5,3.33V4c0,0.37-0.3,0.67-0.67,0.67H2v2.67h0.67
	c1.47,0,2.67,1.2,2.67,2.67c0,1.47-1.2,2.67-2.67,2.67H2V14z" />
</symbol>`}),Kl=r().add(t1);const V3=t1;var e1=new(e())({id:"pat-question",use:"pat-question-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-question"><path d="M844.8 179.2C755.2 89.6 635.733333 42.666667 512 42.666667 388.266667 42.666667 268.8 89.6 179.2 179.2 89.6 268.8 42.666667 388.266667 42.666667 512c0 123.733333 46.933333 243.2 136.533333 332.8C268.8 934.4 388.266667 981.333333 512 981.333333c123.733333 0 243.2-46.933333 332.8-136.533333S981.333333 635.733333 981.333333 512c0-123.733333-46.933333-243.2-136.533333-332.8z m-59.733333 605.866667c-72.533333 72.533333-170.666667 110.933333-273.066667 110.933333-102.4 0-200.533333-38.4-273.066667-110.933333C166.4 712.533333 128 614.4 128 512c0-102.4 38.4-200.533333 110.933333-273.066667C311.466667 166.4 409.6 128 512 128c102.4 0 200.533333 38.4 273.066667 110.933333 72.533333 72.533333 110.933333 170.666667 110.933333 273.066667 0 102.4-38.4 200.533333-110.933333 273.066667z" p-id="2927" /><path d="M512 226.133333c-93.866667 0-170.666667 76.8-170.666667 170.666667 0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666667-42.666667c0-46.933333 38.4-85.333333 85.333333-85.333333s85.333333 38.4 85.333333 85.333333-38.4 85.333333-85.333333 85.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v85.333333c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666667-42.666667v-46.933333c72.533333-17.066667 128-85.333333 128-166.4 0-93.866667-76.8-170.666667-170.666667-170.666667z" p-id="2928" /><path d="M512 750.933333m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" p-id="2929" /></symbol>'}),Zl=r().add(e1);const U3=e1;var r1=new(e())({id:"pat-quote",use:"pat-quote-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-quote">
	<path d="M6.8,3.1C6.6,2.9,6.5,2.9,6.3,3C3.8,4.7,2.4,6.5,2.1,8.7c-0.4,3.3,2.5,5,4.1,3.5c1.5-1.5,0.6-3.3-0.5-3.8
		C4.6,7.8,3.9,8,4,7.3c0.1-0.7,1.7-2.6,3-3.4c0.1-0.1,0.1-0.2,0-0.3C7,3.5,6.9,3.3,6.8,3.1z" />
	<path d="M13.7,3.9c0.1-0.1,0.1-0.2,0-0.3c-0.1-0.1-0.2-0.2-0.3-0.4c-0.1-0.2-0.3-0.2-0.5-0.1C10.4,4.7,9,6.5,8.7,8.7
		c-0.4,3.3,2.5,5,4.1,3.5c1.5-1.5,0.6-3.3-0.5-3.8s-1.8-0.3-1.6-1C10.7,6.6,12.3,4.8,13.7,3.9z" />
</symbol>`}),$l=r().add(r1);const N3=r1;var o1=new(e())({id:"pat-ranking",use:"pat-ranking-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-ranking">
    <g>
        <path d="M14.33,8h-3.67V2c0-0.37-0.3-0.67-0.67-0.67H5.67C5.3,1.33,5,1.63,5,2v3.33H1.33c-0.37,0-0.67,0.3-0.67,0.67v8
	c0,0.37,0.3,0.67,0.67,0.67h4.33H10h4.33c0.37,0,0.67-0.3,0.67-0.67V8.67C15,8.3,14.7,8,14.33,8z M2,6.67h3v6.67H2V6.67z M6.33,6
	V2.67h3v6v4.67h-3V6z M13.67,13.33h-3v-4h3V13.33z" />
    </g>
</symbol>`}),Gl=r().add(o1);const F3=o1;var a1=new(e())({id:"pat-refresh",use:"pat-refresh-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-refresh">
    <g>
	<path d="M14,2c-0.37,0-0.67,0.3-0.67,0.67v1.35C12.12,2.39,10.18,1.33,8,1.33c-1.83,0-3.53,0.72-4.8,2.04
		C2.95,3.64,2.95,4.06,3.22,4.31C3.48,4.57,3.91,4.56,4.16,4.3C5.18,3.25,6.54,2.67,8,2.67c2.94,0,5.33,2.39,5.33,5.33
		c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V2.67C14.67,2.3,14.37,2,14,2z" />
        <path d="M11.7,11.84c-1,0.96-2.32,1.5-3.7,1.5c-2.94,0-5.33-2.39-5.33-5.33c0-0.37-0.3-0.67-0.67-0.67
		S1.33,7.63,1.33,8v5.33C1.33,13.7,1.63,14,2,14s0.67-0.3,0.67-0.67v-1.35c1.22,1.63,3.15,2.68,5.33,2.68
		c1.74,0,3.38-0.66,4.63-1.87c0.26-0.25,0.27-0.68,0.02-0.94C12.39,11.59,11.97,11.58,11.7,11.84z" />
</g>
</symbol>`}),Xl=r().add(a1);const j3=a1;var n1=new(e())({id:"pat-reject",use:"pat-reject-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-reject">
<path d="M3 1.333c-0.913 0-1.667 0.754-1.667 1.667v10c0 0.913 0.754 1.667 1.667 1.667h3.337c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0h-3.337c-0.192 0-0.333-0.141-0.333-0.333v-10c0-0.192 0.141-0.333 0.333-0.333h10c0.192 0 0.333 0.141 0.333 0.333v3.344c0 0.368 0.298 0.667 0.667 0.667v0c0.368 0 0.667-0.298 0.667-0.667v0-3.344c0-0.913-0.754-1.667-1.667-1.667z" />
<path d="M14 9.012c-0.368 0-0.667 0.298-0.667 0.667v0 3.655h-3.654c-0.368 0-0.667 0.298-0.667 0.667v0c0 0.368 0.298 0.667 0.667 0.667v0h3.988c0.544 0 1-0.456 1-1v-3.988c0-0.368-0.298-0.667-0.667-0.667v0z" />
<path d="M6 9.012c-0.368 0-0.667 0.298-0.667 0.667v0c0 0.368 0.298 0.667 0.667 0.667v0h8c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0z" />
<path d="M7.667 7c-0.184 0-0.351 0.075-0.471 0.195l-2 2c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l2 2c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195v0c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471l-1.529-1.529 1.529-1.529c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471v0c-0.121-0.121-0.287-0.195-0.471-0.195v0z" />
</symbol>`}),Yl=r().add(n1);const W3=n1;var i1=new(e())({id:"pat-report",use:"pat-report-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-report">
<g>
	<path d="M14.67,2H1.33C0.97,2,0.67,2.3,0.67,2.67v10c0,0.37,0.3,0.67,0.67,0.67h4.72l1.47,1.47
		C7.66,14.93,7.83,15,8,15s0.34-0.07,0.47-0.2l1.47-1.47h4.72c0.37,0,0.67-0.3,0.67-0.67v-10C15.33,2.3,15.04,2,14.67,2z M14,12
		H9.67c-0.18,0-0.35,0.07-0.47,0.2L8,13.39l-1.2-1.2C6.68,12.07,6.51,12,6.33,12H2V3.33h12V12z" />
	<path d="M8,9c0.37,0,0.67-0.3,0.67-0.67V5.04c0-0.37-0.3-0.67-0.67-0.67s-0.67,0.3-0.67,0.67v3.29C7.33,8.7,7.63,9,8,9
		z" />
	<path d="M8,11.33c0.46,0,0.83-0.37,0.83-0.83c0-0.46-0.37-0.83-0.83-0.83s-0.83,0.37-0.83,0.83
		C7.17,10.96,7.54,11.33,8,11.33z" />
</g>
</symbol>`}),Jl=r().add(i1);const K3=i1;var s1=new(e())({id:"pat-restore",use:"pat-restore-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-restore"><path d="M512 42.666667C379.733333 42.666667 256 98.133333 166.4 196.266667V145.066667c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667V298.666667c0 25.6 17.066667 42.666667 42.666666 42.666666h153.6c25.6 0 42.666667-17.066667 42.666667-42.666666s-17.066667-42.666667-42.666667-42.666667H226.133333C298.666667 174.933333 401.066667 128 512 128c213.333333 0 384 170.666667 384 384s-170.666667 384-384 384-384-170.666667-384-384c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666666 42.666667c0 260.266667 209.066667 469.333333 469.333333 469.333333s469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667z" p-id="3052" /><path d="M512 213.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v256c0 12.8 4.266667 21.333333 12.8 29.866667l179.2 179.2c8.533333 8.533333 21.333333 12.8 29.866667 12.8s21.333333-4.266667 29.866667-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733334L554.666667 494.933333V256c0-25.6-17.066667-42.666667-42.666667-42.666667z" p-id="3053" /></symbol>'}),Ql=r().add(s1);const Z3=s1;var l1=new(e())({id:"pat-right-arrow",use:"pat-right-arrow-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-right-arrow"><path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0s-24.994 65.516 0 90.51L741.49 448H128c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49L530.744 786.746C518.248 799.242 512 815.622 512 832s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z" p-id="3505" /></symbol>'}),ql=r().add(l1);const $3=l1;var c1=new(e())({id:"pat-right",use:"pat-right-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-right">
<path d="M6.33,12.67c-0.17,0-0.34-0.07-0.47-0.2c-0.26-0.26-0.26-0.68,0-0.94L9.39,8L5.86,4.47
	c-0.26-0.26-0.26-0.68,0-0.94c0.26-0.26,0.68-0.26,0.94,0l4,4c0.26,0.26,0.26,0.68,0,0.94l-4,4C6.67,12.6,6.5,12.67,6.33,12.67z" />
</symbol>`}),tc=r().add(c1);const G3=c1;var d1=new(e())({id:"pat-ring",use:"pat-ring-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-ring">
<path d="M8,15.33c-4.04,0-7.33-3.29-7.33-7.33c0-4.04,3.29-7.33,7.33-7.33c4.04,0,7.33,3.29,7.33,7.33
	C15.33,12.04,12.04,15.33,8,15.33z M8,2C4.69,2,2,4.69,2,8c0,3.31,2.69,6,6,6c3.31,0,6-2.69,6-6C14,4.69,11.31,2,8,2z" />
</symbol>`}),ec=r().add(d1);const X3=d1;var p1=new(e())({id:"pat-road-sign-both",use:"pat-road-sign-both-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-road-sign-both">
  <path d="M19,9c.3,0,.5-.1.7-.3l2-2c.4-.4.4-1,0-1.4l-2-2c-.2-.2-.4-.3-.7-.3h-6v-1c0-.6-.4-1-1-1s-1,.4-1,1v1h-6c-.6,0-1,.4-1,1v4c0,.6.4,1,1,1h6v1.5h-6c-.3,0-.5.1-.7.3l-2,2c-.4.4-.4,1,0,1.4l2,2c.2.2.4.3.7.3h6v4.5h-1.5c-.6,0-1,.4-1,1s.4,1,1,1h5c.6,0,1-.4,1-1s-.4-1-1-1h-1.5v-4.5h6c.6,0,1-.4,1-1v-4c0-.6-.4-1-1-1h-6v-1.5h6ZM18,14.5H5.4l-1-1,1-1h12.6v2ZM6,5h12.6l1,1-1,1H6v-2Z" />
</symbol>`}),rc=r().add(p1);const Y3=p1;var m1=new(e())({id:"pat-scan",use:"pat-scan-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-scan">
<g>
	<path d="M2,5.67c0.37,0,0.67-0.3,0.67-0.67V2.67H5c0.37,0,0.67-0.3,0.67-0.67S5.37,1.33,5,1.33H2
		c-0.37,0-0.67,0.3-0.67,0.67v3C1.33,5.37,1.63,5.67,2,5.67z" />
	<path d="M5,13.33H2.67V11c0-0.37-0.3-0.67-0.67-0.67S1.33,10.63,1.33,11v3c0,0.37,0.3,0.67,0.67,0.67h3
		c0.37,0,0.67-0.3,0.67-0.67S5.37,13.33,5,13.33z" />
	<path d="M14,10.33c-0.37,0-0.67,0.3-0.67,0.67v2.33H11c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h3
		c0.37,0,0.67-0.3,0.67-0.67v-3C14.67,10.63,14.37,10.33,14,10.33z" />
	<path d="M14,1.33h-3c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h2.33V5c0,0.37,0.3,0.67,0.67,0.67
		s0.67-0.3,0.67-0.67V2C14.67,1.63,14.37,1.33,14,1.33z" />
	<path d="M2.67,8c0,0.37,0.3,0.67,0.67,0.67h9.33c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H3.33
		C2.97,7.33,2.67,7.63,2.67,8z" />
</g>
</symbol>`}),oc=r().add(m1);const J3=m1;var g1=new(e())({id:"pat-score",use:"pat-score-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-score">
<g>
	<path d="M13,1.33H3C2.08,1.33,1.33,2.08,1.33,3v3c0,0.37,0.3,0.67,0.67,0.67S2.67,6.37,2.67,6V3
		c0-0.18,0.15-0.33,0.33-0.33h10c0.18,0,0.33,0.15,0.33,0.33v3c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V3
		C14.67,2.08,13.92,1.33,13,1.33z" />
	<path d="M11.33,10.33V8c0-0.37-0.3-0.67-0.67-0.67S10,7.63,10,8v2.33C10,10.7,10.3,11,10.67,11S11.33,10.7,11.33,10.33
		z" />
	<path d="M8.67,10.33V5c0-0.37-0.3-0.67-0.67-0.67S7.33,4.63,7.33,5v5.33C7.33,10.7,7.63,11,8,11S8.67,10.7,8.67,10.33z
		" />
	<path d="M6,10.33v-4c0-0.37-0.3-0.67-0.67-0.67s-0.67,0.3-0.67,0.67v4c0,0.37,0.3,0.67,0.67,0.67S6,10.7,6,10.33z" />
	<path d="M14,9.33c-0.37,0-0.67,0.3-0.67,0.67v3c0,0.18-0.15,0.33-0.33,0.33H3c-0.18,0-0.33-0.15-0.33-0.33v-3
		c0-0.37-0.3-0.67-0.67-0.67S1.33,9.63,1.33,10v3c0,0.92,0.75,1.67,1.67,1.67h10c0.92,0,1.67-0.75,1.67-1.67v-3
		C14.67,9.63,14.37,9.33,14,9.33z" />
</g>
</symbol>`}),ac=r().add(g1);const Q3=g1;var h1=new(e())({id:"pat-screenshot",use:"pat-screenshot-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-screenshot">
<g>
	<path d="M14.67,0.67H1.33c-0.37,0-0.67,0.3-0.67,0.67V8c0,0.37,0.3,0.67,0.67,0.67S2,8.37,2,8V2h12v6
		c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V1.33C15.33,0.97,15.04,0.67,14.67,0.67z" />
	<path d="M12.67,10c-1.08,0-2.01,0.65-2.43,1.57c-0.38-0.54-0.85-1.21-1.42-2.03C9.78,8.18,11,6.49,12.54,4.39
		c0.22-0.3,0.15-0.71-0.14-0.93c-0.3-0.22-0.72-0.15-0.93,0.14C10.06,5.52,8.92,7.09,8,8.39c-0.92-1.3-2.06-2.87-3.46-4.78
		C4.32,3.31,3.9,3.25,3.61,3.46C3.31,3.68,3.24,4.1,3.46,4.39C5,6.49,6.22,8.18,7.18,9.54c-0.58,0.82-1.04,1.49-1.42,2.03
		C5.34,10.65,4.41,10,3.33,10c-1.47,0-2.67,1.2-2.67,2.67c0,0.73,0.3,1.39,0.77,1.87c0,0,0,0.01,0.01,0.01
		c0.24,0.24,0.53,0.43,0.83,0.56c0.01,0,0.01,0.01,0.02,0.01c0.14,0.06,0.28,0.1,0.42,0.13c0.03,0.01,0.05,0.02,0.08,0.03
		c0.17,0.04,0.35,0.05,0.53,0.05c0.18,0,0.36-0.02,0.53-0.05c0.03-0.01,0.06-0.02,0.1-0.03c0.14-0.03,0.28-0.07,0.41-0.13
		c0.02-0.01,0.03-0.02,0.04-0.02c0.3-0.13,0.57-0.31,0.81-0.55c0.27-0.27,0.68-0.86,1.59-2.15c0.32-0.46,0.73-1.04,1.2-1.7
		c0.47,0.66,0.87,1.23,1.19,1.7c0.91,1.3,1.32,1.89,1.59,2.16c0.06,0.06,0.12,0.1,0.18,0.15c0.07,0.06,0.14,0.13,0.22,0.18
		c0.12,0.08,0.24,0.14,0.37,0.2c0.03,0.01,0.05,0.03,0.08,0.04c0.13,0.05,0.26,0.09,0.39,0.12c0.04,0.01,0.07,0.03,0.11,0.03
		c0.17,0.04,0.35,0.05,0.53,0.05s0.36-0.02,0.53-0.05c0.04-0.01,0.07-0.02,0.1-0.03c0.14-0.03,0.27-0.07,0.4-0.12
		c0.02-0.01,0.04-0.02,0.06-0.03c0.14-0.06,0.27-0.13,0.4-0.21c0,0,0,0,0.01-0.01c0.14-0.09,0.27-0.2,0.39-0.32
		c0,0,0-0.01,0.01-0.01c0.48-0.48,0.78-1.15,0.78-1.88C15.33,11.2,14.14,10,12.67,10z M3.33,11.33c0.74,0,1.33,0.6,1.33,1.33
		c0,0.38-0.17,0.72-0.42,0.96c-0.12,0.11-0.26,0.21-0.4,0.27c-0.13,0.05-0.28,0.08-0.42,0.09c-0.05,0-0.1,0.01-0.15,0
		c-0.15-0.01-0.3-0.03-0.44-0.09c-0.14-0.06-0.26-0.14-0.37-0.25C2.18,13.41,2,13.06,2,12.67C2,11.93,2.6,11.33,3.33,11.33z
		 M12.67,11.33c0.74,0,1.33,0.6,1.33,1.33c0,0.37-0.15,0.71-0.4,0.95c-0.49,0.49-1.34,0.49-1.84,0.02
		c-0.26-0.24-0.43-0.58-0.43-0.97C11.33,11.93,11.93,11.33,12.67,11.33z" />
</g>
</symbol>`}),nc=r().add(h1);const q3=h1;var w1=new(e())({id:"pat-search",use:"pat-search-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-search">
    <path d="M7,13.3c-3.5,0-6.3-2.8-6.3-6.3S3.5,0.7,7,0.7s6.3,2.8,6.3,6.3S10.5,13.3,7,13.3z M7,2C4.2,2,2,4.2,2,7
	s2.2,5,5,5s5-2.2,5-5S9.8,2,7,2z" />
    <path d="M8.9,5.4c-0.2,0-0.3-0.1-0.5-0.2c-0.8-0.8-2.1-0.8-2.8,0c-0.3,0.3-0.7,0.3-0.9,0C4.4,5,4.4,4.6,4.6,4.3
	c1.3-1.3,3.5-1.3,4.7,0c0.3,0.3,0.3,0.7,0,0.9C9.2,5.4,9.1,5.4,8.9,5.4z" />
    <path d="M13.9,14.6c-0.2,0-0.3-0.1-0.5-0.2l-2.8-2.8c-0.3-0.3-0.3-0.7,0-0.9c0.3-0.3,0.7-0.3,0.9,0l2.8,2.8
	c0.3,0.3,0.3,0.7,0,0.9C14.2,14.5,14.1,14.6,13.9,14.6z" />
</symbol>`}),ic=r().add(w1);const ti=w1;var v1=new(e())({id:"pat-share",use:"pat-share-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-share">
<path d="M11.67,10c-0.61,0-1.16,0.24-1.58,0.63l-3.5-2.07C6.64,8.38,6.67,8.19,6.67,8c0-0.22-0.04-0.42-0.09-0.62
	l3.43-2.08C10.43,5.73,11.02,6,11.67,6C12.95,6,14,4.95,14,3.67s-1.05-2.33-2.33-2.33c-1.29,0-2.33,1.05-2.33,2.33
	c0,0.16,0.02,0.31,0.05,0.45L5.86,6.25C5.45,5.89,4.92,5.67,4.33,5.67C3.05,5.67,2,6.71,2,8c0,1.29,1.05,2.33,2.33,2.33
	c0.61,0,1.16-0.24,1.58-0.63l3.5,2.07c-0.04,0.18-0.08,0.37-0.08,0.56c0,1.29,1.05,2.33,2.33,2.33c1.29,0,2.33-1.05,2.33-2.33
	S12.95,10,11.67,10z M11.67,2.67c0.55,0,1,0.45,1,1s-0.45,1-1,1c-0.55,0-1-0.45-1-1S11.12,2.67,11.67,2.67z M4.33,9
	c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C5.33,8.55,4.88,9,4.33,9z M11.67,13.33c-0.55,0-1-0.45-1-1s0.45-1,1-1
	c0.55,0,1,0.45,1,1S12.22,13.33,11.67,13.33z" />
</symbol>`}),sc=r().add(v1);const ei=v1;var u1=new(e())({id:"pat-shuffle",use:"pat-shuffle-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-shuffle">
<path d="M15.33,12.33c0-0.09-0.02-0.18-0.05-0.26c-0.03-0.07-0.07-0.13-0.12-0.18c-0.01-0.01-0.01-0.02-0.02-0.03
	l-1.33-1.33c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l0.19,0.19h-0.72c-2.02,0-3.67-1.64-3.67-3.67
	c0-2.02,1.65-3.67,3.67-3.67h0.72l-0.2,0.2c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.19l1.33-1.33
	c0.01-0.01,0.02-0.04,0.03-0.05c0.04-0.05,0.08-0.1,0.11-0.16c0.03-0.08,0.05-0.17,0.05-0.26s-0.02-0.18-0.05-0.26
	c-0.03-0.06-0.07-0.11-0.11-0.16c-0.01-0.02-0.02-0.04-0.03-0.05L13.8,1.86c-0.26-0.26-0.68-0.26-0.94,0
	c-0.26,0.26-0.26,0.68,0,0.94L13.06,3h-0.72C10.47,3,8.86,4.04,8,5.55C7.14,4.04,5.53,3,3.67,3H1.33C0.97,3,0.67,3.3,0.67,3.67
	s0.3,0.67,0.67,0.67h2.33c2.02,0,3.67,1.65,3.67,3.67c0,2.02-1.65,3.67-3.67,3.67H1.33c-0.37,0-0.67,0.3-0.67,0.67S0.97,13,1.33,13
	h2.33c1.86,0,3.47-1.04,4.33-2.55C8.86,11.96,10.47,13,12.33,13h0.72l-0.2,0.2c-0.26,0.26-0.26,0.68,0,0.94
	c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2l1.33-1.33c0.01-0.01,0.01-0.02,0.02-0.03c0.05-0.06,0.09-0.11,0.12-0.18
	C15.32,12.51,15.33,12.42,15.33,12.33z" />
</symbol>`}),lc=r().add(u1);const ri=u1;var f1=new(e())({id:"pat-smart-optimization",use:"pat-smart-optimization-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" id="pat-smart-optimization">
<path d="M20.72,12.02c2.85-3.25,1.91-5.47,1.6-6.02c-0.43-0.76-1.25-1.33-2.29-1.61c-0.86-0.23-2.08-0.32-3.75,0.02
	C14.89,0.76,12.61,0.5,12,0.5c-1.51,0-3.17,1.13-4.24,3.93C6.07,4.08,4.84,4.16,3.97,4.4C2.93,4.68,2.12,5.25,1.69,6
	c-0.31,0.55-1.25,2.77,1.6,6.02c-2.16,2.49-2.38,4.62-1.6,5.97c0.44,0.77,1.26,1.36,2.31,1.64c0.44,0.12,0.99,0.2,1.64,0.2
	c0.61,0,1.32-0.08,2.13-0.25c1.07,2.79,2.73,3.92,4.23,3.92c0.61,0,2.89-0.26,4.27-3.91c0.79,0.17,1.5,0.24,2.09,0.24
	c0.65,0,1.2-0.08,1.64-0.2c1.05-0.28,1.87-0.86,2.31-1.64C23.09,16.64,22.88,14.52,20.72,12.02z M18.33,6.19
	c0.5,0,0.89,0.06,1.18,0.14c0.73,0.2,0.99,0.53,1.07,0.67c0.28,0.49,0.27,1.77-1.28,3.6c-0.6-0.53-1.28-1.08-2.07-1.64
	C17.14,7.98,17,7.11,16.84,6.35C17.41,6.24,17.91,6.19,18.33,6.19z M13.68,14.95c-0.59,0.35-1.15,0.65-1.68,0.92
	c-0.53-0.27-1.09-0.57-1.68-0.92C9.73,14.6,9.2,14.27,8.7,13.94C8.66,13.33,8.64,12.7,8.64,12c0-0.7,0.03-1.33,0.06-1.94
	c0.5-0.33,1.03-0.67,1.62-1.01c0.59-0.35,1.15-0.64,1.68-0.91c0.53,0.27,1.08,0.57,1.68,0.91c0.59,0.35,1.12,0.68,1.62,1.01
	c0.04,0.6,0.06,1.24,0.06,1.93c0,0.7-0.03,1.33-0.06,1.94C14.8,14.27,14.27,14.6,13.68,14.95z M15.02,16.47
	c-0.04,0.23-0.08,0.45-0.13,0.66c-0.2-0.07-0.4-0.15-0.61-0.23c0.14-0.08,0.27-0.14,0.41-0.23C14.8,16.61,14.91,16.54,15.02,16.47z
	 M9.72,16.9c-0.21,0.08-0.41,0.16-0.6,0.23c-0.05-0.21-0.09-0.42-0.13-0.64c0.11,0.06,0.21,0.13,0.32,0.19
	C9.46,16.76,9.59,16.82,9.72,16.9z M6.65,12.45c-0.18-0.15-0.37-0.3-0.53-0.44c0.16-0.15,0.35-0.29,0.53-0.44
	c0,0.15-0.01,0.28-0.01,0.44C6.64,12.16,6.64,12.3,6.65,12.45z M8.99,7.52C9.03,7.3,9.08,7.09,9.12,6.89
	C9.31,6.96,9.51,7.02,9.71,7.1c-0.13,0.08-0.26,0.14-0.4,0.22C9.2,7.39,9.1,7.46,8.99,7.52z M14.29,7.1
	c0.21-0.08,0.41-0.15,0.61-0.22c0.04,0.21,0.09,0.42,0.13,0.65c-0.11-0.07-0.22-0.14-0.33-0.2C14.55,7.25,14.42,7.18,14.29,7.1z
	 M17.36,11.57c0.18,0.15,0.36,0.3,0.53,0.44c-0.16,0.14-0.34,0.29-0.53,0.44c0-0.15,0.01-0.29,0.01-0.45
	C17.36,11.85,17.36,11.71,17.36,11.57z M12,2.5c0.53,0,1.55,0.56,2.32,2.46C13.61,5.21,12.84,5.52,12,5.91
	c-0.83-0.39-1.59-0.7-2.3-0.94C10.49,3.07,11.5,2.5,12,2.5z M3.42,7C3.5,6.86,3.76,6.53,4.49,6.33c0.29-0.08,0.68-0.14,1.18-0.14
	c0.42,0,0.93,0.05,1.52,0.16c-0.18,0.78-0.32,1.64-0.41,2.6C5.99,9.51,5.3,10.06,4.7,10.59C3.16,8.77,3.14,7.49,3.42,7z M4.51,17.7
	C3.77,17.5,3.5,17.15,3.42,17c-0.26-0.45-0.24-1.74,1.29-3.56c0.59,0.52,1.27,1.06,2.07,1.62c0.1,0.96,0.24,1.83,0.42,2.61
	C5.9,17.92,5.04,17.84,4.51,17.7z M12,21.5c-0.5,0-1.51-0.57-2.3-2.47c0.7-0.24,1.47-0.55,2.3-0.94c0.84,0.39,1.61,0.71,2.32,0.95
	C13.54,20.94,12.53,21.5,12,21.5z M20.58,17c-0.08,0.14-0.35,0.5-1.09,0.7c-0.52,0.14-1.37,0.22-2.66-0.03
	c0.17-0.77,0.3-1.64,0.4-2.62c0.79-0.56,1.47-1.1,2.06-1.61C20.82,15.26,20.84,16.55,20.58,17z" />
</symbol>`}),cc=r().add(f1);const oi=f1;var b1=new(e())({id:"pat-sort-asc",use:"pat-sort-asc-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-sort-asc">
<g>
	<path d="M14.33,13.33H7.67C7.3,13.33,7,13.04,7,12.67S7.3,12,7.67,12h6.67C14.7,12,15,12.3,15,12.67
		S14.7,13.33,14.33,13.33z" />
	<path d="M4.95,14.26c-0.07,0.16-0.2,0.29-0.36,0.36c-0.16,0.07-0.35,0.07-0.51,0C4,14.58,3.92,14.53,3.86,14.47
		L1.2,11.81c-0.26-0.26-0.26-0.68,0-0.94c0.13-0.13,0.3-0.2,0.47-0.2s0.34,0.06,0.47,0.2l1.53,1.53V2.67C3.67,2.3,3.97,2,4.33,2
		S5,2.3,5,2.67V14C5,14.09,4.98,14.17,4.95,14.26z" />
	<path d="M13,10H7.67C7.3,10,7,9.7,7,9.33s0.3-0.67,0.67-0.67H13c0.37,0,0.67,0.3,0.67,0.67S13.37,10,13,10z" />
	<path d="M11.67,6.67h-4C7.3,6.67,7,6.37,7,6s0.3-0.67,0.67-0.67h4c0.37,0,0.67,0.3,0.67,0.67S12.04,6.67,11.67,6.67z" />
	<path d="M10.33,3.33H7.67C7.3,3.33,7,3.04,7,2.67S7.3,2,7.67,2h2.67C10.7,2,11,2.3,11,2.67S10.7,3.33,10.33,3.33z" />
</g>
</symbol>`}),dc=r().add(b1);const ai=b1;var x1=new(e())({id:"pat-sort-desc",use:"pat-sort-desc-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-sort-desc">
<g>
	<path d="M14.33,2H7.67C7.3,2,7,2.3,7,2.67s0.3,0.67,0.67,0.67h6.67c0.37,0,0.67-0.3,0.67-0.67S14.7,2,14.33,2z" />
	<path d="M5.33,13.67V2.33c0-0.37-0.3-0.67-0.67-0.67S4,1.97,4,2.33v9.72l-1.53-1.53c-0.26-0.26-0.68-0.26-0.94,0
		c-0.26,0.26-0.26,0.68,0,0.94l2.67,2.67c0.01,0.01,0.02,0.01,0.03,0.02c0.06,0.05,0.12,0.09,0.19,0.12
		c0.08,0.03,0.17,0.05,0.25,0.05c0.09,0,0.17-0.02,0.25-0.05C5,14.25,5.07,14.2,5.13,14.14c0,0,0,0,0,0l0,0
		C5.2,14.08,5.25,14,5.28,13.92C5.32,13.84,5.33,13.75,5.33,13.67z" />
	<path d="M13,5.33H7.67C7.3,5.33,7,5.63,7,6s0.3,0.67,0.67,0.67H13c0.37,0,0.67-0.3,0.67-0.67S13.37,5.33,13,5.33z" />
	<path d="M11.67,8.67h-4C7.3,8.67,7,8.96,7,9.33S7.3,10,7.67,10h4c0.37,0,0.67-0.3,0.67-0.67S12.04,8.67,11.67,8.67z" />
	<path d="M10.33,12H7.67C7.3,12,7,12.3,7,12.67s0.3,0.67,0.67,0.67h2.67c0.37,0,0.67-0.3,0.67-0.67S10.7,12,10.33,12z" />
</g>
</symbol>`}),pc=r().add(x1);const ni=x1;var y1=new(e())({id:"pat-sort",use:"pat-sort-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-sort">
<g>
	<path d="M7.86,5.14c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.06,0.47-0.2c0.26-0.26,0.26-0.68,0-0.94l-3-3
		C5.74,1.13,5.67,1.09,5.59,1.05c0,0,0,0,0,0C5.51,1.02,5.42,1,5.33,1c0,0,0,0,0,0C5.31,1,5.3,1.01,5.28,1.01
		c-0.07,0.01-0.14,0.01-0.2,0.04C4.99,1.09,4.92,1.14,4.85,1.2L1.86,4.2c-0.26,0.26-0.26,0.68,0,0.94c0.26,0.26,0.68,0.26,0.94,0
		l1.86-1.86v7.05c0,0.37,0.3,0.67,0.67,0.67S6,10.7,6,10.33V3.27L7.86,5.14z" />
	<path d="M14.47,10.86c-0.26-0.26-0.68-0.26-0.94,0l-1.86,1.86V5.67C11.66,5.3,11.37,5,11,5s-0.67,0.3-0.67,0.67v7.05
		l-1.86-1.86c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l2.99,2.99c0.06,0.07,0.14,0.12,0.23,0.15
		c0.05,0.02,0.11,0.03,0.17,0.03c0.03,0,0.05,0.02,0.08,0.02c0,0,0,0,0,0s0,0,0,0c0.09,0,0.17-0.02,0.26-0.05
		c0.01,0,0.02-0.01,0.03-0.02c0.07-0.03,0.13-0.07,0.19-0.12l3-3C14.73,11.54,14.73,11.12,14.47,10.86z" />
</g>
</symbol>`}),mc=r().add(y1);const ii=y1;var _1=new(e())({id:"pat-spinner",use:"pat-spinner-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-spinner">
<path d="M8,15.33c-4.04,0-7.33-3.29-7.33-7.33c0-0.37,0.3-0.67,0.67-0.67S2,7.63,2,8c0,3.31,2.69,6,6,6
	c3.31,0,6-2.69,6-6c0-3.31-2.69-6-6-6C7.63,2,7.33,1.7,7.33,1.33S7.63,0.67,8,0.67c4.04,0,7.33,3.29,7.33,7.33
	C15.33,12.04,12.04,15.33,8,15.33z" />
</symbol>`}),gc=r().add(_1);const si=_1;var C1=new(e())({id:"pat-star",use:"pat-star-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-star">
<path d="M12.12,15c-0.11,0-0.21-0.03-0.31-0.08L8,12.9l-3.8,2.03c-0.22,0.12-0.5,0.1-0.71-0.05
	c-0.21-0.15-0.31-0.4-0.27-0.66l0.74-4.21l-3.1-3.03C0.69,6.8,0.62,6.53,0.7,6.29s0.29-0.42,0.54-0.45l4.28-0.62L7.4,1.37
	C7.51,1.15,7.75,1.03,8,1c0.25,0,0.48,0.14,0.6,0.37l1.91,3.85l4.26,0.62c0.25,0.04,0.46,0.21,0.54,0.45
	c0.08,0.24,0.01,0.51-0.17,0.68l-3.1,3.03l0.74,4.21c0.04,0.25-0.06,0.5-0.26,0.65C12.39,14.96,12.25,15,12.12,15z M8,11.47
	c0.11,0,0.22,0.03,0.31,0.08l2.91,1.55l-0.56-3.21c-0.04-0.22,0.03-0.44,0.19-0.59l2.39-2.34L9.97,6.49
	c-0.22-0.03-0.4-0.17-0.5-0.36L8,3.17L6.56,6.12c-0.1,0.2-0.29,0.33-0.5,0.37L2.76,6.96L5.15,9.3c0.16,0.15,0.23,0.38,0.19,0.59
	L4.78,13.1l2.91-1.55C7.78,11.5,7.89,11.47,8,11.47z" />
</symbol>`}),hc=r().add(C1);const li=C1;var M1=new(e())({id:"pat-statistics",use:"pat-statistics-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-statistics">
<g>
	<path d="M14.67,1H1.33C0.97,1,0.67,1.3,0.67,1.67v3.72v0.28v4.39c0,0.37,0.3,0.67,0.67,0.67S2,10.42,2,10.06V6.33h12
		v7.33H4.34c-0.37,0-0.67,0.3-0.67,0.67S3.97,15,4.34,15h10.33c0.37,0,0.67-0.3,0.67-0.67c0-0.05-0.02-0.09-0.03-0.14
		c0.01-0.05,0.03-0.09,0.03-0.14V5.67V5.39V1.67C15.33,1.3,15.04,1,14.67,1z M2,2.33h12V5H2V2.33z" />
	<path d="M7.12,12.16c0.26,0.25,0.68,0.25,0.93-0.01l2.22-2.21l1.02,1c0.26,0.26,0.69,0.25,0.94-0.01
		c0.26-0.26,0.25-0.69-0.01-0.94l-1.49-1.46c-0.26-0.25-0.68-0.25-0.94,0.01l-2.22,2.22L5.85,9.09C5.59,8.84,5.17,8.85,4.92,9.11
		l-4.06,4.1c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.19,0.47,0.19c0.17,0,0.34-0.07,0.47-0.2l3.6-3.63L7.12,12.16z" />
	<path d="M12.67,3h-7C5.3,3,5,3.3,5,3.67s0.3,0.67,0.67,0.67h7c0.37,0,0.67-0.3,0.67-0.67S13.04,3,12.67,3z" />
	<path d="M3.67,3H3.33C2.97,3,2.67,3.3,2.67,3.67s0.3,0.67,0.67,0.67h0.33c0.37,0,0.67-0.3,0.67-0.67S4.03,3,3.67,3z" />
</g>
</symbol>`}),wc=r().add(M1);const ci=M1;var k1=new(e())({id:"pat-stopwatch-start",use:"pat-stopwatch-start-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-stopwatch-start">
<g>
	<path d="M8.66,2.7c0-0.01,0.01-0.02,0.01-0.03V2H10c0.37,0,0.67-0.3,0.67-0.67S10.37,0.67,10,0.67H6
		c-0.37,0-0.67,0.3-0.67,0.67S5.63,2,6,2h1.33v0.67c0,0.01,0.01,0.02,0.01,0.03C4.16,3.03,1.67,5.73,1.67,9
		c0,3.49,2.84,6.33,6.33,6.33s6.33-2.84,6.33-6.33C14.33,5.73,11.84,3.03,8.66,2.7z M8,14c-2.76,0-5-2.24-5-5c0-2.76,2.24-5,5-5
		s5,2.24,5,5C13,11.76,10.76,14,8,14z" />
	<path d="M10.67,8.33h-2v-2c0-0.37-0.3-0.67-0.67-0.67s-0.67,0.3-0.67,0.67V9c0,0.37,0.3,0.67,0.67,0.67h2.67
		c0.37,0,0.67-0.3,0.67-0.67S11.04,8.33,10.67,8.33z" />
</g>
</symbol>`}),vc=r().add(k1);const di=k1;var E1=new(e())({id:"pat-strikethrough",use:"pat-strikethrough-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-strikethrough">
	<path d="M14.3,7.3H8c0,0,0,0,0,0H1.7C1.3,7.3,1,7.6,1,8s0.3,0.7,0.7,0.7h6.2c1.2,0.5,2,1.1,2.4,1.8
		c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.4,0.2,0.8,0.1,1.2c-0.2,1-1,1.7-2,2C8.4,14,8.2,14,8,14c-2.2,0-3.4-2.2-3.4-2.3c0,0,0,0,0,0
		c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0
		c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0.1,0,0.1
		c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0.3,1,1.4,2.8,3.9,3.1c0.2,0,0.5,0.1,0.7,0.1c1.6,0,2.9-0.7,3.6-2
		c0.5-0.9,0.5-1.9,0.2-2.9c0-0.1-0.1-0.2-0.1-0.3c0,0,0,0,0,0c-0.2-0.5-0.6-1-1.1-1.4h3.8C14.7,8.7,15,8.4,15,8S14.7,7.3,14.3,7.3z" />
	<path d="M5.2,6.7c0.1,0,0.3,0,0.4-0.1C5.9,6.4,6,5.9,5.8,5.6C5.2,4.8,5.1,3.9,5.5,3.2C5.9,2.4,6.8,2,8,2
		c2.5,0,3.3,2.1,3.4,2.2c0.1,0.3,0.5,0.5,0.9,0.4c0.3-0.1,0.5-0.5,0.4-0.9c0-0.1-1.2-3.1-4.6-3.1c-1.7,0-3,0.7-3.6,1.9
		C3.7,3.7,3.8,5.1,4.6,6.4C4.8,6.6,5,6.7,5.2,6.7z" />
</symbol>`}),uc=r().add(E1);const pi=E1;var z1=new(e())({id:"pat-subjective",use:"pat-subjective-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-subjective"><path d="M96 864c1.41 0 2.83-0.09 4.25-0.28L307.23 836c1.18-0.16 2.35-0.38 3.51-0.67a96.024 96.024 0 0 0 44.48-25.12l518.21-516.22c37.35-37.21 37.59-97.98 0.54-135.48L772.02 55.31c-18.1-18.32-42.25-28.45-68-28.53h-0.3c-25.64 0-49.74 9.98-67.87 28.12L117.91 572.84a96.013 96.013 0 0 0-25.25 44.6c-0.29 1.16-0.51 2.33-0.67 3.51l-27.7 206.8a32.043 32.043 0 0 0 9.09 26.88A31.966 31.966 0 0 0 96 864z m53.37-189.38l104.02 104.02-120.1 16.08 16.08-120.1zM681.1 100.16c6.05-6.05 14.08-9.37 22.62-9.37h0.1c8.58 0.03 16.63 3.4 22.67 9.51l101.95 103.18c12.35 12.5 12.27 32.76-0.18 45.16L318.02 756.92a31.877 31.877 0 0 0-7.39-11.55l-128-128a31.837 31.837 0 0 0-11.41-7.34L681.1 100.16zM928 960H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h832c17.67 0 32-14.33 32-32s-14.33-32-32-32z" p-id="5404" /><path d="M383.04 544.96c8.19 0 16.38-3.12 22.63-9.37l320.96-320.96c12.5-12.5 12.5-32.76 0-45.25-12.5-12.5-32.76-12.5-45.25 0L360.41 490.33c-12.5 12.5-12.5 32.76 0 45.25a31.909 31.909 0 0 0 22.63 9.38z" p-id="5405" /></symbol>'}),fc=r().add(z1);const mi=z1;var B1=new(e())({id:"pat-submissions",use:"pat-submissions-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-submissions">
<g>
	<path d="M6,4.67h5.33C11.7,4.67,12,4.37,12,4V2c0-0.37-0.3-0.67-0.67-0.67H6c-0.37,0-0.67,0.3-0.67,0.67v2
		C5.33,4.37,5.63,4.67,6,4.67z M6.67,2.67h4v0.67h-4V2.67z" />
	<path d="M6,9.67h6.67c0.37,0,0.67-0.3,0.67-0.67V7c0-0.37-0.3-0.67-0.67-0.67H6c-0.37,0-0.67,0.3-0.67,0.67v2
		C5.33,9.37,5.63,9.67,6,9.67z M6.67,7.67H12v0.67H6.67V7.67z" />
	<path d="M14.67,11.33H6c-0.37,0-0.67,0.3-0.67,0.67v2c0,0.37,0.3,0.67,0.67,0.67h8.67c0.37,0,0.67-0.3,0.67-0.67v-2
		C15.33,11.63,15.04,11.33,14.67,11.33z M14,13.33H6.67v-0.67H14V13.33z" />
	<path d="M2.67,1.67c-0.74,0-1.33,0.6-1.33,1.33s0.6,1.33,1.33,1.33S4,3.74,4,3S3.4,1.67,2.67,1.67z M2.67,3l0-0.67
		L2.67,3C2.67,3,2.67,3,2.67,3z" />
	<path d="M2.67,6.67c-0.74,0-1.33,0.6-1.33,1.33s0.6,1.33,1.33,1.33S4,8.74,4,8S3.4,6.67,2.67,6.67z M2.67,8l0-0.67
		L2.67,8C2.67,8,2.67,8,2.67,8z" />
	<path d="M2.67,11.67c-0.74,0-1.33,0.6-1.33,1.33c0,0.73,0.6,1.33,1.33,1.33S4,13.73,4,13C4,12.26,3.4,11.67,2.67,11.67
		z M2.67,13l0-0.67L2.67,13C2.67,13,2.67,13,2.67,13z" />
</g>
</symbol>`}),bc=r().add(B1);const gi=B1;var P1=new(e())({id:"pat-switch-button",use:"pat-switch-button-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-switch-button">
  <path d="M6,11h12c2.8,0,5-2.2,5-5s-2.2-5-5-5H6C3.2,1,1,3.2,1,6s2.2,5,5,5ZM6,3h12c1.7,0,3,1.3,3,3s-1.3,3-3,3H6c-1.7,0-3-1.3-3-3s1.3-3,3-3Z" />
  <path d="M18,13H6c-2.8,0-5,2.2-5,5s2.2,5,5,5h12c2.8,0,5-2.2,5-5s-2.2-5-5-5ZM18,21H6c-1.7,0-3-1.3-3-3s1.3-3,3-3h12c1.7,0,3,1.3,3,3s-1.3,3-3,3Z" />
  <circle cx="18" cy="6" r="2" />
  <circle cx="6" cy="18" r="2" />
</symbol>`}),xc=r().add(P1);const hi=P1;var L1=new(e())({id:"pat-sync",use:"pat-sync-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-sync">
    <path d="M14.000027864074706,2.000000042915344C13.630027864074707,2.000000042915344,13.330027864074706,2.300000042915344,13.330027864074706,2.670000042915344L13.330027864074706,4.020000042915344C12.119997864074707,2.3900000429153443,10.179997864074707,1.3300000429153442,7.999997864074707,1.3300000429153442C6.169997864074707,1.3300000429153442,4.469997864074707,2.050000042915344,3.199999864074707,3.3700000429153443C2.950000064074707,3.6400000429153443,2.950000064074707,4.060000042915345,3.219999864074707,4.310000042915345C3.479999864074707,4.5700000429153445,3.909999864074707,4.560000042915345,4.1599978640747075,4.300000042915345C5.179997864074707,3.250000042915344,6.5399978640747065,2.670000042915344,7.999997864074707,2.670000042915344C10.939997864074707,2.670000042915344,13.330027864074706,5.060000042915345,13.330027864074706,8.000000042915344C13.330027864074706,8.370000042915343,13.630027864074707,8.670000042915344,14.000027864074706,8.670000042915344C14.370027864074707,8.670000042915344,14.670027864074706,8.370000042915343,14.670027864074706,8.000000042915344L14.670027864074706,2.670000042915344C14.670027864074706,2.300000042915344,14.370027864074707,2.000000042915344,14.000027864074706,2.000000042915344Z" />
    <path d="M11.700000042915343,11.84000027179718C10.700000042915343,12.800000271797181,9.380000042915345,13.34000027179718,8.000000042915344,13.34000027179718C5.060000042915345,13.34000027179718,2.670000042915344,10.95000027179718,2.670000042915344,8.01000027179718C2.670000042915344,7.64000027179718,2.3700000429153443,7.34000027179718,2.000000042915344,7.34000027179718C1.6300000429153443,7.34000027179718,1.3300000429153442,7.63000027179718,1.3300000429153442,8.00000027179718L1.3300000429153442,13.33000027179718C1.3300000429153442,13.70000027179718,1.6300000429153443,14.00000027179718,2.000000042915344,14.00000027179718C2.3700000429153443,14.00000027179718,2.670000042915344,13.70000027179718,2.670000042915344,13.33000027179718L2.670000042915344,11.98000027179718C3.8900000429153443,13.61000027179718,5.8200000429153445,14.66000027179718,8.000000042915344,14.66000027179718C9.740000042915344,14.66000027179718,11.380000042915345,14.00000027179718,12.630000042915345,12.79000027179718C12.890000042915345,12.54000027179718,12.900000042915345,12.11000027179718,12.650000042915345,11.85000027179718C12.390000042915345,11.59000027179718,11.970000042915345,11.58000027179718,11.700000042915343,11.84000027179718Z" />
</symbol>`}),yc=r().add(L1);const wi=L1;var O1=new(e())({id:"pat-table",use:"pat-table-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-table">
<path d="M15.3,2.4c-0.1-0.6-0.6-1.1-1.3-1.1H2c-0.6,0-1.2,0.5-1.3,1.1c0,0.1-0.1,0.2-0.1,0.3v10.7
	c0,0.7,0.6,1.3,1.3,1.3h12c0.7,0,1.3-0.6,1.3-1.3V2.7C15.3,2.6,15.3,2.5,15.3,2.4z M6.5,9.3V6.7h3v2.7H6.5z M9.5,10.7v2.7h-3v-2.7
	H9.5z M2,6.7h3.2v2.7H2V6.7z M10.8,6.7H14v2.7h-3.2V6.7z M14,2.7v2.7H2V2.7H14z M2,10.7h3.2v2.7H2V10.7z M10.8,13.3v-2.7H14v2.7
	H10.8z" />
</symbol>`}),_c=r().add(O1);const vi=O1;var S1=new(e())({id:"pat-text-size",use:"pat-text-size-usage",viewBox:"0 0 512 512",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="pat-text-size">
<g>
    <path d="M42.666 106.666h298.666q2.101 0 4.162-0.41t4.002-1.214 3.688-1.972 3.233-2.653 2.653-3.233 1.971-3.689 1.214-4.002 0.41-4.162-0.41-4.162-1.214-4.002-1.971-3.689-2.653-3.233-3.233-2.653-3.688-1.972-4.002-1.214-4.162-0.41h-298.666q-2.101 0-4.162 0.41t-4.002 1.214-3.689 1.972-3.233 2.653-2.653 3.233-1.971 3.689-1.214 4.002-0.41 4.162 0.41 4.162 1.214 4.002 1.971 3.689 2.653 3.233 3.233 2.653 3.689 1.972 4.002 1.214 4.162 0.41z" />
    <path d="M298.666 245.333h170.666q2.101 0 4.162-0.41t4.002-1.214 3.688-1.971 3.233-2.653 2.653-3.233 1.971-3.689 1.214-4.002 0.41-4.162-0.41-4.162-1.214-4.002-1.971-3.689-2.653-3.233-3.233-2.653-3.688-1.971-4.002-1.214-4.162-0.41h-170.667q-2.101 0-4.162 0.41t-4.002 1.214-3.688 1.971-3.233 2.653-2.653 3.233-1.971 3.689-1.214 4.002-0.41 4.162 0.41 4.162 1.214 4.002 1.971 3.689 2.653 3.233 3.233 2.653 3.688 1.971 4.002 1.214 4.162 0.41z" />
    <path d="M213.333 447.999v-362.666q0-2.101-0.41-4.162t-1.214-4.002-1.971-3.689-2.653-3.233-3.233-2.653-3.689-1.972-4.002-1.214-4.162-0.41-4.162 0.41-4.002 1.214-3.689 1.972-3.233 2.653-2.653 3.233-1.971 3.689-1.214 4.002-0.41 4.162v362.666q0 2.103 0.41 4.163t1.214 4.003q0.804 1.939 1.971 3.687t2.653 3.232q1.486 1.488 3.233 2.653 1.747 1.168 3.689 1.974 1.941 0.803 4.002 1.213t4.162 0.409 4.162-0.409 4.002-1.213q1.941-0.807 3.689-1.974 1.747-1.165 3.233-2.653 1.486-1.485 2.653-3.232t1.971-3.687q0.804-1.942 1.214-4.003t0.41-4.163z" />
    <path d="M405.334 448v-224q0-2.101-0.41-4.162t-1.214-4.002-1.971-3.689-2.653-3.233-3.233-2.653-3.688-1.971-4.002-1.214-4.162-0.41-4.162 0.41-4.002 1.214-3.688 1.971-3.233 2.653-2.653 3.233-1.971 3.689-1.214 4.002-0.41 4.162v224q0 2.101 0.41 4.162t1.214 4.002 1.971 3.688 2.653 3.233 3.233 2.653 3.688 1.971 4.002 1.214 4.162 0.41 4.162-0.41 4.002-1.214 3.688-1.971 3.233-2.653 2.653-3.233 1.971-3.688 1.214-4.002 0.41-4.162z" />
</g>
</symbol>`}),Cc=r().add(S1);const ui=S1;var H1=new(e())({id:"pat-theme-dark",use:"pat-theme-dark-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-theme-dark">
<path d="M8,15.33c-4.04,0-7.33-3.29-7.33-7.33c0-4.04,3.29-7.33,7.33-7.33c0.5,0,1,0.05,1.49,0.15
	c0.3,0.06,0.52,0.33,0.53,0.64c0.01,0.31-0.2,0.58-0.5,0.66C7.95,2.53,6.85,3.95,6.85,5.58c0,1.97,1.6,3.58,3.58,3.58
	c1.63,0,3.05-1.1,3.46-2.67c0.08-0.3,0.37-0.49,0.66-0.5c0.31,0.01,0.57,0.23,0.64,0.53C15.28,7,15.33,7.5,15.33,8
	C15.33,12.04,12.04,15.33,8,15.33z M6.97,2.09C4.15,2.58,2,5.04,2,8c0,3.31,2.69,6,6,6c2.96,0,5.42-2.15,5.91-4.97
	c-0.9,0.91-2.14,1.45-3.49,1.45c-2.71,0-4.91-2.2-4.91-4.91C5.52,4.23,6.06,2.99,6.97,2.09z" />
</symbol>`}),Mc=r().add(H1);const fi=H1;var D1=new(e())({id:"pat-theme-light",use:"pat-theme-light-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-theme-light">
<g>
	<path d="M8,3C5.24,3,3,5.24,3,8c0,2.76,2.24,5,5,5c2.76,0,5-2.24,5-5C13,5.24,10.76,3,8,3z M8,11.67
		c-2.02,0-3.67-1.64-3.67-3.67c0-2.02,1.65-3.67,3.67-3.67c2.02,0,3.67,1.65,3.67,3.67C11.67,10.02,10.02,11.67,8,11.67z" />
	<path d="M8,2c0.46,0,0.83-0.37,0.83-0.83c0-0.46-0.37-0.83-0.83-0.83S7.17,0.71,7.17,1.17C7.17,1.63,7.54,2,8,2z" />
	<path d="M12.83,2.33C12.37,2.33,12,2.71,12,3.17C12,3.63,12.37,4,12.83,4c0.46,0,0.83-0.37,0.83-0.83
		C13.67,2.71,13.29,2.33,12.83,2.33z" />
	<path d="M14.83,7.17C14.37,7.17,14,7.54,14,8s0.37,0.83,0.83,0.83c0.46,0,0.83-0.37,0.83-0.83S15.29,7.17,14.83,7.17z" />
	<path d="M12.83,12C12.37,12,12,12.37,12,12.83c0,0.46,0.37,0.83,0.83,0.83c0.46,0,0.83-0.37,0.83-0.83
		C13.67,12.37,13.29,12,12.83,12z" />
	<path d="M8,14c-0.46,0-0.83,0.37-0.83,0.83c0,0.46,0.37,0.83,0.83,0.83s0.83-0.37,0.83-0.83C8.83,14.37,8.46,14,8,14z" />
	<path d="M3.17,12c-0.46,0-0.83,0.37-0.83,0.83c0,0.46,0.37,0.83,0.83,0.83c0.46,0,0.83-0.37,0.83-0.83
		C4,12.37,3.63,12,3.17,12z" />
	<path d="M1.17,7.17C0.71,7.17,0.33,7.54,0.33,8s0.37,0.83,0.83,0.83C1.63,8.83,2,8.46,2,8S1.63,7.17,1.17,7.17z" />
	<path d="M3.17,4C3.63,4,4,3.63,4,3.17c0-0.46-0.37-0.83-0.83-0.83c-0.46,0-0.83,0.37-0.83,0.83
		C2.33,3.63,2.71,4,3.17,4z" />
</g>
</symbol>`}),kc=r().add(D1);const bi=D1;var T1=new(e())({id:"pat-three-bars",use:"pat-three-bars-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-three-bars">
    <g>
	<path d="M2.65,4.65h10.67c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H2.65c-0.37,0-0.67,0.3-0.67,0.67
		S2.28,4.65,2.65,4.65z" />
        <path d="M13.32,7.32H2.65c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h10.67c0.37,0,0.67-0.3,0.67-0.67
		S13.68,7.32,13.32,7.32z" />
        <path d="M13.32,11.32H2.65c-0.37,0-0.67,0.3-0.67,0.67s0.3,0.67,0.67,0.67h10.67c0.37,0,0.67-0.3,0.67-0.67
		S13.68,11.32,13.32,11.32z" />
</g>
</symbol>`}),Ec=r().add(T1);const xi=T1;var R1=new(e())({id:"pat-ticket",use:"pat-ticket-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-ticket"><path d="M991.5 203.5H480c-12.51 0-23.87 7.29-29.08 18.65-18.78 40.92-55.76 65.35-98.92 65.35s-80.14-24.43-98.92-65.35A31.998 31.998 0 0 0 224 203.5H32.5c-17.67 0-32 14.33-32 32v553c0 17.67 14.33 32 32 32H224c12.51 0 23.87-7.29 29.08-18.65 18.78-40.92 55.76-65.35 98.92-65.35s80.14 24.43 98.92 65.35A31.998 31.998 0 0 0 480 820.5h511.5c17.67 0 32-14.33 32-32v-553c0-17.67-14.33-32-32-32z m-32 553H768.14v-14c0-17.67-14.33-32-32-32s-32 14.33-32 32v14H499.22c-31.59-52.3-86.32-84-147.22-84s-115.63 31.7-147.22 84H64.5v-489h140.28c31.58 52.3 86.32 84 147.22 84s115.63-31.7 147.22-84h204.93v14c0 17.67 14.33 32 32 32s32-14.33 32-32v-14H959.5v489z" p-id="5536" /><path d="M736.14 353.39c-17.67 0-32 14.33-32 32v74.67c0 17.67 14.33 32 32 32s32-14.33 32-32v-74.67c0-17.68-14.32-32-32-32zM736.14 531.94c-17.67 0-32 14.33-32 32v74.67c0 17.67 14.33 32 32 32s32-14.33 32-32v-74.67c0-17.67-14.32-32-32-32zM544 416H160c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32s-14.33-32-32-32zM544 544H160c-17.67 0-32 14.33-32 32s14.33 32 32 32h384c17.67 0 32-14.33 32-32s-14.33-32-32-32z" p-id="5537" /></symbol>'}),zc=r().add(R1);const yi=R1;var A1=new(e())({id:"pat-time-machine",use:"pat-time-machine-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-time-machine"><path d="M1014.754936 261.203807L762.926193 9.375063A32.00684 32.00684 0 0 0 729.146361 2.0051L580.707102 57.224824a32.08784 32.08784 0 0 0-8.569957 4.789977L221.618894 336.363431a31.98384 31.98384 0 0 0-11.809941 19.759902l-21.159894 122.609388a31.97584 31.97584 0 0 0 8.909955 28.06986l319.788404 319.788404a31.99984 31.99984 0 0 0 22.629887 9.369953c1.809991 0 3.629982-0.149999 5.439973-0.469997l122.609388-21.159895a32.00284 32.00284 0 0 0 19.619902-11.639942l276.508621-348.368261c2.209989-2.779986 3.93998-5.909971 5.119974-9.259954l53.049735-150.599248a32.03184 32.03184 0 0 0-7.569962-33.259834zM732.206346 69.154765L955.255233 292.203652l-29.469853 83.669582L649.736758 99.834612l82.469588-30.679847zM254.53873 473.272748l7.839961-45.419773 333.908333 333.908334-45.419773 7.839961-296.328521-296.328522z m405.277977 261.518695l-370.298152-370.298152 299.758504-234.618829 307.008468 307.008468-236.46882 297.908513z" p-id="5567" /><path d="M745.906278 360.73331L607.516968 222.344c-5.99997-5.99997-14.139929-9.369953-22.629887-9.369953s-16.629917 3.369983-22.629887 9.369953L459.127709 325.483486c-12.499938 12.499938-12.499938 32.759837 0 45.249774l138.389309 138.389309c5.99997 5.99997 14.139929 9.369953 22.629887 9.369954s16.629917-3.369983 22.629887-9.369954l103.139486-103.139485c12.489938-12.489938 12.489938-32.749837-0.01-45.249774z m-125.759373 80.509598l-93.139535-93.139535 57.879711-57.879711 93.139535 93.139535-57.879711 57.879711zM294.62853 729.37147c-12.499938-12.499938-32.759837-12.499938-45.249774 0l-175.999122 175.999122c-12.499938 12.499938-12.499938 32.759837 0 45.249774C79.619603 956.880335 87.809562 960.000319 95.999521 960.000319s16.379918-3.119984 22.629887-9.369953l175.999122-175.999122c12.489938-12.499938 12.489938-32.759837 0-45.259774zM174.629129 593.372149c-12.499938-12.499938-32.759837-12.499938-45.249775 0l-119.999401 119.999401c-12.499938 12.499938-12.499938 32.759837 0 45.249774C15.619922 764.881293 23.809881 768.001277 31.99984 768.001277s16.379918-3.119984 22.629887-9.369953l119.999402-119.999401c12.489938-12.499938 12.489938-32.759837 0-45.259774zM385.368077 849.370871l-119.999401 119.999402c-12.499938 12.499938-12.499938 32.759837 0 45.249774 6.249969 6.249969 14.439928 9.369953 22.629887 9.369953s16.379918-3.119984 22.629887-9.369953l119.999401-119.999401c12.499938-12.499938 12.499938-32.759837 0-45.249775-12.499938-12.489938-32.759837-12.489938-45.259774 0z" p-id="5568" /></symbol>'}),Bc=r().add(A1);const _i=A1;var I1=new(e())({id:"pat-time",use:"pat-time-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-time">
  <path d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11,11-4.9,11-11S18.1,1,12,1ZM12,21c-5,0-9-4-9-9S7,3,12,3s9,4,9,9-4,9-9,9Z" />
  <path d="M13,11.6v-5.6c0-.6-.4-1-1-1s-1,.4-1,1v6c0,.3.1.5.3.7l4.2,4.2c.2.2.5.3.7.3s.5,0,.7-.3c.4-.4.4-1,0-1.4l-3.9-3.9Z" />
</symbol>`}),Pc=r().add(I1);const Ci=I1;var V1=new(e())({id:"pat-tips",use:"pat-tips-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-tips">
    <g>
	<path d="M14,6.67c0-3.31-2.69-6-6-6s-6,2.69-6,6c0,2.32,1.37,4.43,3.45,5.41l0.2,2.34c0.04,0.51,0.48,0.92,1,0.92h2.72
		c0.52,0,0.95-0.4,1-0.92l0.19-2.34C12.62,11.1,14,8.98,14,6.67z M6.95,14l-0.14-1.69h2.39L9.05,14H6.95z M9.79,10.98H6.21
		c-1.73-0.72-2.88-2.44-2.88-4.31C3.33,4.09,5.43,2,8,2s4.67,2.09,4.67,4.67C12.67,8.54,11.52,10.26,9.79,10.98z" />
        <path d="M10,5C9.63,5,9.33,5.3,9.33,5.67v0.92L8.3,6.07c-0.19-0.09-0.41-0.09-0.6,0L6.67,6.59V5.67
		C6.67,5.3,6.37,5,6,5S5.33,5.3,5.33,5.67v2c0,0.23,0.12,0.45,0.32,0.57c0.2,0.12,0.44,0.13,0.65,0.03L8,7.41l1.7,0.85
		C9.8,8.31,9.9,8.33,10,8.33c0.12,0,0.24-0.03,0.35-0.1c0.2-0.12,0.32-0.34,0.32-0.57v-2C10.67,5.3,10.37,5,10,5z" />
</g>
</symbol>`}),Lc=r().add(V1);const Mi=V1;var U1=new(e())({id:"pat-to-top",use:"pat-to-top-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-to-top">
  <path d="M12.7,6.3c-.4-.4-1-.4-1.4,0l-6,6c-.4.4-.4,1,0,1.4s1,.4,1.4,0l4.3-4.3v11.6c0,.6.4,1,1,1s1-.4,1-1v-11.6l4.3,4.3c.2.2.5.3.7.3s.5,0,.7-.3c.4-.4.4-1,0-1.4l-6-6Z" />
  <path d="M6,4h12c.6,0,1-.4,1-1s-.4-1-1-1H6c-.6,0-1,.4-1,1s.4,1,1,1Z" />
</symbol>`}),Oc=r().add(U1);const ki=U1;var N1=new(e())({id:"pat-topic",use:"pat-topic-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-topic">
<g>
	<path d="M14.67,2H1.33C0.97,2,0.67,2.3,0.67,2.67v10c0,0.37,0.3,0.67,0.67,0.67h4.72l1.47,1.47
		C7.65,14.93,7.82,15,8,15s0.35-0.07,0.47-0.2l1.47-1.47h4.72c0.37,0,0.67-0.3,0.67-0.67v-10C15.33,2.3,15.04,2,14.67,2z M14,12
		H9.67c-0.18,0-0.35,0.07-0.47,0.2L8,13.39l-1.19-1.2C6.68,12.07,6.51,12,6.33,12H2V3.33h12V12z" />
	<path d="M5,9.67h1.06L6,10.63c-0.02,0.37,0.26,0.68,0.63,0.7c0.01,0,0.03,0,0.04,0c0.35,0,0.64-0.27,0.67-0.63
		l0.06-1.04h1l-0.06,0.96c-0.02,0.37,0.26,0.68,0.63,0.7c0.01,0,0.03,0,0.04,0c0.35,0,0.64-0.27,0.66-0.63l0.06-1.04h0.94
		c0.37,0,0.67-0.3,0.67-0.67s-0.3-0.67-0.67-0.67H9.8l0.06-1H11c0.37,0,0.67-0.3,0.67-0.67S11.37,6,11,6H9.94L10,5.04
		c0.02-0.37-0.26-0.68-0.63-0.7C9.01,4.3,8.69,4.59,8.67,4.96L8.61,6h-1l0.06-0.96c0.02-0.37-0.26-0.68-0.63-0.7
		c-0.36-0.02-0.68,0.26-0.7,0.63L6.27,6H5.33C4.97,6,4.67,6.3,4.67,6.67s0.3,0.67,0.67,0.67h0.86l-0.06,1H5
		c-0.37,0-0.67,0.3-0.67,0.67S4.63,9.67,5,9.67z M7.53,7.33h1l-0.06,1h-1L7.53,7.33z" />
</g>
</symbol>`}),Sc=r().add(N1);const Ei=N1;var F1=new(e())({id:"pat-touch",use:"pat-touch-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-touch">
<path d="M14.14,12.68L7,11.13v-2.3C8.43,8.09,9.33,6.64,9.33,5c0-2.39-1.94-4.33-4.33-4.33S0.67,2.61,0.67,5
	c0,1.64,0.91,3.09,2.33,3.83v5.83c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V8.4c0,0,0,0,0,0V5c0-0.37,0.3-0.67,0.67-0.67
	S5.67,4.63,5.67,5v3.4c0,0,0,0,0,0v3.27c0,0.31,0.22,0.58,0.52,0.65l7.14,1.55v0.8c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67
	v-1.33C14.67,13.02,14.45,12.75,14.14,12.68z M5,3C3.9,3,3,3.9,3,5v2.23C2.38,6.67,2,5.88,2,5c0-1.65,1.35-3,3-3s3,1.35,3,3
	c0,0.88-0.38,1.67-1,2.23V5C7,3.9,6.1,3,5,3z" />
</symbol>`}),Hc=r().add(F1);const zi=F1;var j1=new(e())({id:"pat-transcript",use:"pat-transcript-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-transcript">
<path d="M7,13.3H3c-0.2,0-0.3-0.1-0.3-0.3V3c0-0.2,0.1-0.3,0.3-0.3h8c0.2,0,0.3,0.1,0.3,0.3v2.8c0,0.4,0.3,0.7,0.7,0.7
	s0.7-0.3,0.7-0.7V3c0-0.9-0.7-1.7-1.7-1.7H3C2.1,1.3,1.3,2.1,1.3,3v10c0,0.9,0.7,1.7,1.7,1.7h4c0.4,0,0.7-0.3,0.7-0.7
	S7.3,13.3,7,13.3z" />
<path d="M3.3,10.7V12c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-1.3C4.7,10.3,4.4,10,4,10S3.3,10.3,3.3,10.7z" />
<path d="M5.3,8v4c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V8c0-0.4-0.3-0.7-0.7-0.7S5.3,7.6,5.3,8z" />
<path d="M8.7,12V9.3C8.7,9,8.4,8.7,8,8.7S7.3,9,7.3,9.3V12c0,0.4,0.3,0.7,0.7,0.7S8.7,12.4,8.7,12z" />
<path d="M13.5,11.4c0.5-0.4,0.8-1,0.8-1.7c0-1.3-1-2.3-2.3-2.3c-1.3,0-2.3,1-2.3,2.3c0,0.7,0.3,1.3,0.8,1.7
	c-1.2,0.6-2.1,1.8-2.1,3.3c0,0.4,0.3,0.7,0.7,0.7h6c0.4,0,0.7-0.3,0.7-0.7C15.6,13.2,14.8,12,13.5,11.4z M12,8.7c0.6,0,1,0.4,1,1
	c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1C11,9.1,11.4,8.7,12,8.7z M9.7,14c0.3-1,1.2-1.7,2.2-1.7c1.1,0,1.9,0.7,2.2,1.7H9.7z" />
</symbol>`}),Dc=r().add(j1);const Bi=j1;var W1=new(e())({id:"pat-translate",use:"pat-translate-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-translate">
<path d="M14.61,13.72l-0.76-1.65c0-0.01,0-0.01-0.01-0.02l-1.9-4.32c-0.21-0.48-1.01-0.48-1.22,0l-1.05,2.38
	c-0.04-0.02-0.07-0.05-0.11-0.07c-0.02-0.01-1.83-0.71-3.22-1.62C6.37,8.41,6.38,8.4,6.39,8.39C7.6,7.16,8.26,5.25,8.52,4.33h0.82
	C9.7,4.33,10,4.03,10,3.67S9.7,3,9.33,3H6.32c0-0.07,0-0.14-0.03-0.21l-0.33-1C5.85,1.44,5.47,1.25,5.12,1.37
	C4.77,1.48,4.58,1.86,4.7,2.21L4.96,3H2C1.63,3,1.33,3.3,1.33,3.67S1.63,4.33,2,4.33h5.12C6.84,5.2,6.3,6.58,5.44,7.46
	C5.4,7.5,5.36,7.53,5.32,7.57c-0.93-1.03-1.34-2.4-1.35-2.42C3.87,4.8,3.51,4.59,3.15,4.69C2.8,4.79,2.59,5.16,2.69,5.52
	C2.71,5.6,3.19,7.17,4.31,8.43c-1.25,0.95-2.59,1.63-2.61,1.64c-0.33,0.17-0.46,0.57-0.3,0.9c0.12,0.23,0.35,0.37,0.6,0.37
	c0.1,0,0.2-0.02,0.3-0.07c0.08-0.04,1.62-0.83,3.03-1.93c1.55,1.1,3.67,1.92,3.77,1.96c0.02,0.01,0.04,0.01,0.06,0.01l-0.33,0.75
	c0,0.01-0.01,0.01-0.01,0.02l-0.76,1.65C8.02,13.81,8,13.91,8,14c0,0.25,0.14,0.5,0.39,0.61c0.09,0.04,0.18,0.06,0.28,0.06
	c0.25,0,0.5-0.14,0.61-0.39L9.86,13h2.95l0.58,1.28c0.15,0.33,0.55,0.48,0.88,0.33c0.25-0.11,0.39-0.35,0.39-0.61
	C14.67,13.91,14.65,13.81,14.61,13.72z M10.45,11.67l0.88-2.01l0.88,2.01H10.45z" />
</symbol>`}),Tc=r().add(W1);const Pi=W1;var K1=new(e())({id:"pat-transporter",use:"pat-transporter-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-transporter">
<path d="M14,2H6.67C5.93,2,5.33,2.6,5.33,3.33V6H3.67C3.5,6,3.34,6.06,3.21,6.18L0.88,8.33
	c-0.14,0.13-0.21,0.3-0.21,0.49v2.51c0,0.37,0.3,0.67,0.67,0.67h1.33c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2H10c0,1.1,0.9,2,2,2s2-0.9,2-2
	c0.74,0,1.33-0.6,1.33-1.33V3.33C15.33,2.6,14.74,2,14,2z M2,10.67V9.11l1.93-1.78h1.41v3.33H2z M4.67,12.67C4.3,12.67,4,12.37,4,12
	h1.33C5.33,12.37,5.03,12.67,4.67,12.67z M12,12.67c-0.37,0-0.67-0.3-0.67-0.67h1.33C12.67,12.37,12.37,12.67,12,12.67z M14,10.67
	l-7.33,0v-4V3.33H14V10.67z" />
</symbol>`}),Rc=r().add(K1);const Li=K1;var Z1=new(e())({id:"pat-trashcan",use:"pat-trashcan-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-trashcan">
<g>
	<path d="M6.67,6C6.3,6,6,6.3,6,6.67V11c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67V6.67C7.33,6.3,7.03,6,6.67,6z" />
	<path d="M9.33,6C8.96,6,8.67,6.3,8.67,6.67V11c0,0.37,0.3,0.67,0.67,0.67S10,11.37,10,11V6.67C10,6.3,9.7,6,9.33,6z" />
	<path d="M14.67,2.67H13h-1.93l-0.89-1.65C10.06,0.8,9.84,0.67,9.59,0.67H6.43c-0.24,0-0.47,0.13-0.58,0.35L4.94,2.67H3
		H1.33c-0.37,0-0.67,0.3-0.67,0.67S0.97,4,1.33,4h1v10.67c0,0.37,0.3,0.67,0.67,0.67h10c0.37,0,0.67-0.3,0.67-0.67V4h1
		c0.37,0,0.67-0.3,0.67-0.67S15.04,2.67,14.67,2.67z M6.82,2h2.37l0.36,0.67H6.46L6.82,2z M12.33,14H3.67V4h1.67h5.33h1.67V14z" />
</g>
</symbol>`}),Ac=r().add(Z1);const Oi=Z1;var $1=new(e())({id:"pat-tree-list",use:"pat-tree-list-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-tree-list">
<path d="M14.67,10.67H6c-0.37,0-0.67,0.3-0.67,0.67V12h-3V8.67h3v0.67C5.33,9.7,5.63,10,6,10h6.67
	c0.37,0,0.67-0.3,0.67-0.67V6.67c0-0.37-0.3-0.67-0.67-0.67H6C5.63,6,5.33,6.3,5.33,6.67v0.67h-3V4h3v0.67
	c0,0.37,0.3,0.67,0.67,0.67h4.67c0.37,0,0.67-0.3,0.67-0.67V2c0-0.37-0.3-0.67-0.67-0.67H6c-0.37,0-0.67,0.3-0.67,0.67v0.67h-3V1.33
	c0-0.37-0.3-0.67-0.67-0.67S1,0.97,1,1.33v13.33c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-1.33h3V14
	c0,0.37,0.3,0.67,0.67,0.67h8.67c0.37,0,0.67-0.3,0.67-0.67v-2.67C15.33,10.96,15.04,10.67,14.67,10.67z M6.67,7.33H12v1.33H6.67
	V7.33z M6.67,2.67H10V4H6.67V2.67z M14,13.33H6.67V12H14V13.33z" />
</symbol>`}),Ic=r().add($1);const Si=$1;var G1=new(e())({id:"pat-triple-balloon",use:"pat-triple-balloon-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-triple-balloon">
  <path d="M11,18.5c0-1.1-1.4-1.3-2.6-1.5-.6,0-1.8-.3-1.8-.6,0-1.1,1.1-2.3,2-2.7,0,0,0,0,.1,0,.4-.1.9-.3,1.4-.7-1.3-1.1-2.4-2.8-2.7-4.9-.3-1.8.2-3.5,1.2-4.6.4-.4.8-.8,1.3-1-.5-.1-1.1-.2-1.8-.2-1.6,0-3,.6-3.9,1.6-.9,1.1-1.3,2.6-1.1,4.2.4,2.8,2.6,5,4.2,5.6-.8.7-1.5,1.7-1.5,2.8s1.4,1.3,2.6,1.5c.6,0,1.8.3,1.8.6,0,.5-2.1,1.3-4.5,1.5-.2,0-.4.3-.4.5,0,.2.2.4.4.4s0,0,0,0c1.2-.2,5.3-.8,5.3-2.4Z" />
  <path d="M16.1,14.5c0,0,.1,0,.1-.1,1.7-.6,4.1-2.7,4.6-6.3.3-2.1-.1-3.8-1.1-4.9-1-1.1-2.4-1.6-4.3-1.6s-2.6.4-3.6,1.1c0,0,0,0,0,0-.3.2-.6.5-.8.7-1,1.2-1.5,2.9-1.2,4.8,0,.3,0,.5.2.8,0,0,0,.2,0,.2,0,.2,0,.3.2.5,0,0,0,.2,0,.2,0,.2.1.3.2.5,0,0,0,.1.1.2,0,.2.2.3.3.5,0,0,0,.1,0,.2.1.2.2.4.4.6,0,0,0,0,0,0,.4.6.9,1.1,1.4,1.5,0,0,0,0,0,0h0c.6.5,1.2.9,1.8,1.1-.9.8-1.7,1.9-1.7,3.2s1.6,1.4,2.9,1.6c.7.1,2.1.3,2.1.6,0,.6-2.4,1.4-5.1,1.7-.3,0-.5.3-.4.6,0,.3.2.4.5.4s0,0,0,0c1.4-.2,5.9-.9,5.9-2.7s-1.6-1.4-2.9-1.6c-.7-.1-2.1-.3-2.1-.6,0-1.3,1.3-2.6,2.2-3Z" />
</symbol>`}),Vc=r().add(G1);const Hi=G1;var X1=new(e())({id:"pat-true-or-false",use:"pat-true-or-false-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-true-or-false"><path d="M982.63 41.37a32 32 0 0 0-45.26 0l-896 896a32 32 0 0 0 45.26 45.26l896-896a32 32 0 0 0 0-45.26zM982.63 585.37a32 32 0 0 0-45.26 0L784 738.75 630.63 585.37a32 32 0 0 0-45.26 45.26L738.75 784 585.37 937.37a32 32 0 0 0 45.26 45.26L784 829.25l153.37 153.38a32 32 0 0 0 45.26-45.26L829.25 784l153.38-153.37a32 32 0 0 0 0-45.26zM178.71 431.89c0.38 0.44 0.78 0.86 1.2 1.27a96 96 0 0 0 135.76 0c0.33-0.33 0.65-0.67 1-1L634.05 85.61a32 32 0 1 0-47.19-43.22L270 388.32a32 32 0 0 1-44.32 0.09L87.83 234.64a32 32 0 1 0-47.66 42.72z" p-id="5374" /></symbol>'}),Uc=r().add(X1);const Di=X1;var Y1=new(e())({id:"pat-undo",use:"pat-undo-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="pat-undo">
<path d="M8 1.333c-1.837 0-3.509 0.747-4.714 1.952-0.596 0.596-1.784 1.938-1.784 1.938-0.104 0.117-0.168 0.272-0.168 0.443 0 0.198 0.086 0.376 0.224 0.498l0.001 0.001c0.117 0.104 0.272 0.168 0.443 0.168 0.198 0 0.376-0.086 0.498-0.224l0.001-0.001c0 0 1.22-1.371 1.73-1.881 0.966-0.966 2.295-1.562 3.771-1.562 2.953 0 5.333 2.38 5.333 5.333s-2.38 5.333-5.333 5.333c-1.477 0-2.806-0.596-3.771-1.562-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471v0c1.206 1.206 2.877 1.952 4.714 1.952 3.674 0 6.667-2.993 6.667-6.667s-2.993-6.667-6.667-6.667z" />
<path d="M2 2.333c-0.368 0-0.667 0.298-0.667 0.667v0 2.667c0 0.368 0.298 0.667 0.667 0.667h2.667c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0h-2v-2c0-0.368-0.298-0.667-0.667-0.667v0z" />
</symbol>`}),Nc=r().add(Y1);const Ti=Y1;var J1=new(e())({id:"pat-university",use:"pat-university-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-university">
<path d="M14.83,3.69L8.16,2.02c-0.11-0.03-0.22-0.03-0.32,0L1.17,3.69c-0.3,0.07-0.5,0.34-0.5,0.65
	c0,0.31,0.21,0.57,0.5,0.65l0.5,0.12v5.56H1.33c-0.37,0-0.67,0.3-0.67,0.67v2c0,0.37,0.3,0.67,0.67,0.67h2C3.7,14,4,13.7,4,13.33v-2
	c0-0.37-0.3-0.67-0.67-0.67H3V5.44L3.67,5.6v3.05c0,0.23,0.12,0.45,0.32,0.57C4.06,9.27,5.84,10.33,8,10.33
	c2.16,0,3.94-1.06,4.01-1.11c0.2-0.12,0.32-0.34,0.32-0.57V5.6l2.5-0.62c0.3-0.07,0.5-0.34,0.5-0.65
	C15.33,4.03,15.12,3.76,14.83,3.69z M2,12.56c0.1,0.06,0.21,0.1,0.33,0.1H2V12.56z M2.34,12.67c0.12,0,0.23-0.04,0.33-0.1v0.1H2.34z
	 M8,3.35l3.92,0.98L8,5.31L4.08,4.33L8,3.35z M11,8.26C10.46,8.52,9.3,9,8,9C6.7,9,5.54,8.52,5,8.26V5.94l2.84,0.71
	C7.89,6.66,7.95,6.67,8,6.67s0.11-0.01,0.16-0.02L11,5.94V8.26z" />
</symbol>`}),Fc=r().add(J1);const Ri=J1;var Q1=new(e())({id:"pat-unlock",use:"pat-unlock-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-unlock">
	<path d="M13,6.7H5.3v-2c0-1.4,1-2.5,2.4-2.7c1.4-0.1,2.6,0.8,2.9,2.1c0.1,0.4,0.4,0.6,0.8,0.5c0.4-0.1,0.6-0.4,0.5-0.8
		c-0.4-2-2.3-3.4-4.4-3.2C5.6,0.9,4,2.6,4,4.7v2H3C2.3,6.7,1.7,7.3,1.7,8v6c0,0.7,0.6,1.3,1.3,1.3h10c0.7,0,1.3-0.6,1.3-1.3V8
		C14.3,7.3,13.7,6.7,13,6.7z M3,8l0-0.7L3,8C3,8,3,8,3,8z M13,14H3l0-6h10V14z" />
	<path d="M8,12.7c0.4,0,0.7-0.3,0.7-0.7v-2c0-0.4-0.3-0.7-0.7-0.7S7.3,9.6,7.3,10v2C7.3,12.4,7.6,12.7,8,12.7z" />
</symbol>`}),jc=r().add(Q1);const Ai=Q1;var q1=new(e())({id:"pat-up-fill",use:"pat-up-fill-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-up-fill"><path d="M768 640L512 384l-256 256h512z" p-id="8669" /></symbol>'}),Wc=r().add(q1);const Ii=q1;var to=new(e())({id:"pat-up",use:"pat-up-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-up">
<path d="M12.33,10.67c-0.17,0-0.34-0.07-0.47-0.2L8.33,6.94L4.8,10.47c-0.26,0.26-0.68,0.26-0.94,0
	c-0.26-0.26-0.26-0.68,0-0.94l4-4c0.25-0.25,0.69-0.25,0.94,0l4,4c0.26,0.26,0.26,0.68,0,0.94C12.67,10.6,12.5,10.67,12.33,10.67z" />
</symbol>`}),Kc=r().add(to);const Vi=to;var eo=new(e())({id:"pat-user-to-user",use:"pat-user-to-user-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-user-to-user">
<g>
	<path d="M4.67,6.67c1.65,0,3-1.35,3-3s-1.35-3-3-3c-1.65,0-3,1.35-3,3S3.01,6.67,4.67,6.67z M4.67,2
		c0.92,0,1.67,0.75,1.67,1.67S5.59,5.33,4.67,5.33S3,4.59,3,3.67S3.75,2,4.67,2z" />
	<path d="M11.33,6.67c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S9.68,6.67,11.33,6.67z M11.33,2
		C12.25,2,13,2.75,13,3.67s-0.75,1.67-1.67,1.67S9.67,4.59,9.67,3.67S10.41,2,11.33,2z" />
	<path d="M11.83,7.67h-1.7c-0.88,0-1.63,0.47-2.13,0.97C7.53,8.18,6.8,7.67,5.82,7.67H4.14c-1.92,0-3.47,1.79-3.47,4v3
		c0,0.37,0.3,0.67,0.67,0.67S2,15.03,2,14.67v-3C2,10.2,2.96,9,4.14,9h1.68c0.96,0,1.6,1.01,1.6,1.02c0.19,0.32,0.6,0.42,0.92,0.22
		c0.1-0.06,0.17-0.15,0.22-0.24l0.01,0C8.58,10,9.22,9,10.12,9h1.7c1.2,0,2.17,1.2,2.17,2.67v3c0,0.37,0.3,0.67,0.67,0.67
		s0.67-0.3,0.67-0.67v-3C15.33,9.46,13.76,7.67,11.83,7.67z" />
	<path d="M11.9,11.62c-0.26-0.26-0.68-0.26-0.94,0c-0.26,0.26-0.26,0.68,0,0.94l0.11,0.11H5.13l0.12-0.12
		c0.26-0.26,0.26-0.68,0-0.94c-0.26-0.26-0.68-0.26-0.94,0l-1.26,1.25c-0.26,0.26-0.26,0.68,0,0.94l1.26,1.27
		c0.13,0.13,0.3,0.2,0.47,0.2c0.17,0,0.34-0.06,0.47-0.19c0.26-0.26,0.26-0.68,0.01-0.94L5.12,14h5.98l-0.15,0.15
		c-0.26,0.26-0.25,0.69,0.02,0.94c0.13,0.12,0.3,0.19,0.46,0.19c0.17,0,0.35-0.07,0.48-0.2l1.24-1.28c0.25-0.26,0.25-0.68-0.01-0.93
		L11.9,11.62z" />
</g>
</symbol>`}),Zc=r().add(eo);const Ui=eo;var ro=new(e())({id:"pat-user",use:"pat-user-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-user">
<g>
	<path d="M8,7.33c1.84,0,3.33-1.5,3.33-3.33c0-1.84-1.5-3.33-3.33-3.33S4.67,2.16,4.67,4C4.67,5.84,6.16,7.33,8,7.33z
		 M8,2c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S6,5.1,6,4C6,2.9,6.9,2,8,2z" />
	<path d="M8,8c-3.68,0-6.67,2.99-6.67,6.67c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67c0-2.94,2.39-5.33,5.33-5.33
		c2.94,0,5.33,2.39,5.33,5.33c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67C14.67,10.99,11.68,8,8,8z" />
</g>
</symbol>`}),$c=r().add(ro);const Ni=ro;var oo=new(e())({id:"pat-tablet",use:"pat-tablet-usage",viewBox:"0 0 24 24",content:`<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pat-tablet">
  <path d="M18.5,1.5H5.5c-1.1,0-2,.9-2,2v17c0,1.1.9,2,2,2h13c1.1,0,2-.9,2-2V3.5c0-1.1-.9-2-2-2ZM18.5,20.5H5.5V3.5s0,0,0,0h13v17Z" />
  <path d="M11,19h2c.6,0,1-.4,1-1s-.4-1-1-1h-2c-.6,0-1,.4-1,1s.4,1,1,1Z" />
</symbol>`}),Gc=r().add(oo);const Fi=oo;var ao=new(e())({id:"pat-usergroup",use:"pat-usergroup-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-usergroup">
    <g>
	<path d="M6.33,7.33c1.65,0,3-1.35,3-3c0-1.65-1.35-3-3-3c-1.65,0-3,1.35-3,3C3.33,5.99,4.68,7.33,6.33,7.33z
		 M6.33,2.67C7.25,2.67,8,3.41,8,4.33S7.25,6,6.33,6S4.67,5.25,4.67,4.33S5.41,2.67,6.33,2.67z" />
        <path d="M10.52,5.76c-0.31,0.19-0.42,0.6-0.23,0.92C10.42,6.89,10.64,7,10.87,7c0.12,0,0.24-0.03,0.34-0.1
		c0.91-0.55,1.45-1.51,1.45-2.57c0-1.06-0.54-2.02-1.45-2.57c-0.32-0.19-0.73-0.09-0.92,0.23c-0.19,0.31-0.09,0.73,0.23,0.92
		c0.51,0.3,0.81,0.84,0.81,1.43C11.33,4.92,11.03,5.46,10.52,5.76z" />
        <path d="M10.18,9.03C9.47,8.67,8.67,8.67,7.07,8.67H5.6c-1.6,0-2.4,0-3.11,0.36c-0.63,0.32-1.13,0.82-1.46,1.46
		C0.67,11.2,0.67,12,0.67,13.6V14c0,0.37,0.3,0.67,0.67,0.67h10c0.37,0,0.67-0.3,0.67-0.67v-0.4c0-1.6,0-2.4-0.36-3.11
		C11.31,9.86,10.81,9.35,10.18,9.03z M2,13.33c0-1.21,0.01-1.84,0.22-2.24c0.19-0.38,0.5-0.68,0.88-0.88C3.52,10,4.22,10,5.6,10
		h1.47c1.38,0,2.08,0,2.51,0.22c0.38,0.19,0.68,0.5,0.88,0.87c0.2,0.4,0.22,1.03,0.22,2.24H2z" />
        <path d="M14.97,10.49c-0.32-0.63-0.83-1.13-1.46-1.46c-0.33-0.17-0.73-0.04-0.9,0.29c-0.17,0.33-0.04,0.73,0.29,0.9
		c0.37,0.19,0.68,0.5,0.88,0.87C14,11.52,14,12.21,14,13.6V14c0,0.37,0.3,0.67,0.67,0.67s0.67-0.3,0.67-0.67v-0.4
		C15.33,12,15.33,11.2,14.97,10.49z" />
</g>
</symbol>`}),Xc=r().add(ao);const ji=ao;var no=new(e())({id:"pat-video",use:"pat-video-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-video">
<g>
	<path d="M14,2h-1h-2H5H3H2C1.26,2,0.67,2.6,0.67,3.33v2v1.33v2.67v1.33v2C0.67,13.4,1.26,14,2,14h1h2h6h2h1
		c0.74,0,1.33-0.6,1.33-1.33v-2V9.33V6.67V5.33v-2C15.33,2.6,14.74,2,14,2z M11,12.67C11,12.67,11,12.67,11,12.67l-6,0c0,0,0,0,0,0
		H4.67V3.33l6.67,0v9.33H11z M2,6.67h1.33v2.67H2V6.67z M12.67,6.67H14v2.67h-1.33V6.67z M14,5.33h-1.33v-2l1.33,0V5.33z M2,3.33
		l1.33,0v2H2V3.33z M2,10.67h1.33v2H3c0,0,0,0,0,0l-1,0V10.67z M14,12.67l-1,0c0,0,0,0,0,0h-0.33v-2H14V12.67z" />
	<path d="M7.35,5.77C7.15,5.64,6.89,5.63,6.68,5.75C6.46,5.87,6.33,6.09,6.33,6.33v3.33c0,0.24,0.13,0.47,0.34,0.58
		c0.1,0.06,0.21,0.08,0.32,0.08c0.12,0,0.25-0.03,0.35-0.1l2.67-1.67c0.19-0.12,0.31-0.34,0.31-0.57s-0.12-0.44-0.31-0.57L7.35,5.77
		z M7.67,8.46V7.54L8.41,8L7.67,8.46z" />
</g>
</symbol>`}),Yc=r().add(no);const Wi=no;var io=new(e())({id:"pat-visibility-off",use:"pat-visibility-off-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-visibility-off">
<path d="M14.81,8.53l-1.46-1.46c0.04-0.03,0.09-0.06,0.14-0.1c0.49-0.4,0.86-0.84,1.11-1.33
	c0.17-0.33,0.04-0.73-0.28-0.9c-0.33-0.17-0.73-0.04-0.9,0.28c-0.17,0.32-0.43,0.63-0.77,0.91c-1.07,0.88-2.8,1.4-4.64,1.4
	s-3.57-0.52-4.64-1.4c-0.35-0.28-0.6-0.59-0.77-0.91C2.42,4.7,2.02,4.57,1.69,4.74c-0.33,0.17-0.45,0.57-0.28,0.9
	c0.25,0.48,0.62,0.93,1.11,1.33C2.56,7,2.61,7.03,2.66,7.07L1.2,8.53c-0.26,0.26-0.26,0.68,0,0.94c0.13,0.13,0.3,0.2,0.47,0.2
	c0.17,0,0.34-0.07,0.47-0.2l1.69-1.69c0.52,0.25,1.1,0.45,1.71,0.6L5,10.4c-0.1,0.36,0.12,0.72,0.47,0.82
	c0.06,0.02,0.12,0.02,0.17,0.02c0.29,0,0.56-0.2,0.64-0.49L6.86,8.6C7.24,8.64,7.61,8.67,8,8.67c0.38,0,0.76-0.03,1.13-0.06
	l0.58,2.15c0.08,0.3,0.35,0.49,0.64,0.49c0.06,0,0.12-0.01,0.17-0.02c0.36-0.09,0.57-0.46,0.47-0.82l-0.54-2.02
	c0.62-0.15,1.19-0.35,1.72-0.6l1.69,1.69c0.13,0.13,0.3,0.2,0.47,0.2s0.34-0.07,0.47-0.2C15.07,9.21,15.07,8.79,14.81,8.53z" />
</symbol>`}),Jc=r().add(io);const Ki=io;var so=new(e())({id:"pat-visibility",use:"pat-visibility-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-visibility">
<g>
	<path d="M15.2,7.6C15.07,7.43,11.97,3.33,8,3.33S0.93,7.43,0.8,7.6c-0.18,0.24-0.18,0.56,0,0.8
		c0.13,0.17,3.23,4.27,7.2,4.27s7.07-4.09,7.2-4.27C15.38,8.16,15.38,7.84,15.2,7.6z M8,11.33c-2.64,0-4.97-2.37-5.8-3.33
		C3.03,7.04,5.36,4.67,8,4.67c2.64,0,4.97,2.37,5.8,3.33C12.97,8.96,10.64,11.33,8,11.33z" />
	<path d="M8,5.67C6.71,5.67,5.67,6.71,5.67,8c0,1.29,1.05,2.33,2.33,2.33c1.29,0,2.33-1.05,2.33-2.33
		C10.33,6.71,9.29,5.67,8,5.67z M8,9C7.45,9,7,8.55,7,8c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C9,8.55,8.55,9,8,9z" />
</g>
</symbol>`}),Qc=r().add(so);const Zi=so;var lo=new(e())({id:"pat-wechat",use:"pat-wechat-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-wechat"><path d="M962 827c0 74.56200029-60.44100029 135-135 135H197c-74.56200029 0-135-60.43799971-135-135V197C62 122.44100029 122.44100029 62 197 62h630c74.55899971 0 135 60.44100029 135 135v630z" fill="#2DC100" p-id="4828" /><path d="M664.40899971 397.63999971c-72.639 3.79500029-135.80399971 25.81499971-187.08599971 75.564-51.813 50.26200029-75.465 111.852-69.00000029 188.20200058-28.39200029-3.51600029-54.252-7.38600029-80.25899942-9.576-8.982-0.756-19.64099971 0.31799971-27.24900029 4.61099971-25.254 14.24999971-49.464 30.339-78.15899971 48.276 5.265-23.814 8.67300029-44.667 14.706-64.72500029 4.437-14.742 2.38200029-22.94700029-11.19900058-32.54699971-87.19800029-61.56299971-123.95400029-153.69599971-96.44699971-248.55000029 25.44900029-87.75 87.94500029-140.967 172.863-168.70799971 115.90499971-37.86000029 246.16199971 0.75899971 316.64099971 92.781 25.45499971 33.23999971 41.06400029 70.54800029 45.189 114.67199971z m-334.31099942-29.556c0.66899971-17.34900029-14.364-32.97899971-32.22-33.50099971-18.28199971-0.53700029-33.318 13.43400029-33.85200058 31.44899971-0.54 18.25800029 13.42500029 32.88899971 31.83900029 33.35700058 18.25499971 0.46199971 33.55800029-13.527 34.23300029-31.30500058z m174.42299971-33.51299942c-17.92199971 0.33000029-33.066 15.59400029-32.74800029 33.012 0.32699971 18.054 15.183 32.17799971 33.61200029 31.95599942 18.477-0.22200029 32.49-14.49600029 32.31600029-32.931-0.153-18.09600029-14.94299971-32.37000029-33.18000029-32.03699942z" fill="#FFFFFF" p-id="4829" /><path d="M827.603 850.49c-23.00100029-10.242-44.1-25.60799971-66.564-27.954-22.37699971-2.33700029-45.9 10.57200029-69.31199971 12.96600029-71.31300029 7.29600029-135.20099971-12.57900029-187.88100029-61.29600029-100.19099971-92.67000029-85.87500029-234.76200029 30.042-310.70400029 103.023-67.49399971 254.11200029-44.99399971 326.74799971 48.65700058 63.387 81.72 55.93799971 190.19999971-21.44399942 258.85199971-22.392 19.86900029-30.44999971 36.21899971-16.083 62.41200029 2.65200029 4.83599971 2.95499971 10.95900029 4.49399971 17.06699971z m-261.82199971-253.49699971c14.643 0.01500029 26.70000029-11.44500029 27.25499971-25.90800029 0.585-15.31199971-11.72999971-28.15499971-27.063-28.21799971-15.18000029-0.06900029-27.89700029 12.95399971-27.369 28.03799971 0.49799971 14.41199971 12.63899971 26.07000029 27.17700029 26.08800029z m168.78299942-54.06600058c-14.20800029-0.099-26.28 11.53199971-26.85899971 25.88700058-0.61499971 15.35100029 11.31599971 27.95699971 26.50799971 27.99599942 14.69400029 0.04799971 26.30400029-11.06399971 26.838-25.686 0.56999971-15.38700029-11.367-28.09199971-26.487-28.197z" fill="#FFFFFF" p-id="4830" /></symbol>'}),qc=r().add(lo);const $i=lo;var co=new(e())({id:"pat-wifi-off",use:"pat-wifi-off-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-wifi-off">
	<path d="M15.1,5.8c-2.3-2.2-5.5-3.2-8.7-2.7C6,3.2,5.8,3.5,5.8,3.9s0.4,0.6,0.8,0.6c2.8-0.4,5.6,0.4,7.6,2.4
		C14.3,6.9,14.5,7,14.7,7c0.2,0,0.4-0.1,0.5-0.2C15.4,6.5,15.4,6.1,15.1,5.8z" />
    <path d="M12.2,9.1c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9c-1-1-2.2-1.6-3.5-1.9
		C9.3,6.1,8.9,6.3,8.9,6.7C8.8,7,9,7.4,9.3,7.5C10.4,7.7,11.4,8.3,12.2,9.1z" />
    <path d="M5.4,7.2C5.2,6.9,4.8,6.7,4.5,6.9C3.9,7.2,3.3,7.7,2.9,8.1c-0.3,0.3-0.3,0.7,0,0.9C3,9.2,3.2,9.3,3.3,9.3
		s0.3-0.1,0.5-0.2c0.4-0.4,0.8-0.7,1.3-1C5.4,7.9,5.5,7.5,5.4,7.2z" />
    <path d="M7.6,9.6C7.5,9.3,7.2,9.1,6.8,9.2c-0.7,0.2-1.4,0.6-2,1.1c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2
		s0.3-0.1,0.5-0.2c0.4-0.4,0.9-0.7,1.4-0.8C7.5,10.3,7.7,10,7.6,9.6z" />
    <circle cx="8" cy="12.5" r="0.8" />
    <path d="M3.1,2.2c-0.3-0.3-0.7-0.3-0.9,0c-0.3,0.3-0.3,0.7,0,0.9l10.7,10.7c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2
		c0.3-0.3,0.3-0.7,0-0.9L3.1,2.2z" />
    <path d="M3,5C2.8,4.7,2.4,4.6,2.1,4.8C1.9,5,1.7,5.1,1.5,5.3C1.3,5.5,1.1,5.6,0.9,5.8c-0.3,0.3-0.3,0.7,0,0.9
		C1,6.9,1.2,7,1.3,7c0.2,0,0.3-0.1,0.5-0.2C2,6.6,2.2,6.5,2.4,6.3C2.5,6.2,2.7,6,2.9,5.9C3.2,5.7,3.3,5.3,3,5z" />
</symbol>`}),t7=r().add(co);const Gi=co;var po=new(e())({id:"pat-windows",use:"pat-windows-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-windows"><path d="M32.35 480L32 167.926l384-52.144V480zM480 106.482L991.872 32v448H480zM991.998 544l-0.126 448L480 919.984V544zM416 911.836L32.312 859.242 32.292 544H416z" p-id="7829" /></symbol>'}),e7=r().add(po);const Xi=po;var mo=new(e())({id:"pat-writing",use:"pat-writing-usage",viewBox:"0 0 16 16",content:`<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="pat-writing">
<g>
	<path d="M8,8.67h1.67c0.18,0,0.35-0.07,0.47-0.2l5-5c0.26-0.26,0.26-0.68,0-0.94l-1.67-1.67
		c-0.26-0.26-0.68-0.26-0.94,0l-5,5c-0.12,0.12-0.2,0.29-0.2,0.47V8C7.33,8.37,7.63,8.67,8,8.67z M8.67,6.61L13,2.28L13.72,3
		L9.39,7.33H8.67V6.61z" />
	<path d="M13,10.67H3c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h2.33C5.7,8.67,6,8.37,6,8S5.7,7.33,5.33,7.33H3
		c-1.29,0-2.33,1.05-2.33,2.33C0.67,10.95,1.71,12,3,12h10c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1H6c-0.37,0-0.67,0.3-0.67,0.67
		s0.3,0.67,0.67,0.67h7c1.29,0,2.33-1.05,2.33-2.33C15.33,11.71,14.29,10.67,13,10.67z" />
</g>
</symbol>`}),r7=r().add(mo);const Yi=mo;var go=new(e())({id:"pat-zoj-color",use:"pat-zoj-color-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-zoj-color"><path d="M1024 281.76l-70.39-107.24H739.52L637.46 332l-34.15-95.82 63.21-0.16-44.84-118.69h-177l-69.07 197.82-91.13-140.63H70.39L0 281.77l404.92 624.9H619l64-97.45 0.06-0.1 6.37-9.7v-0.07z m-89-71.47L970.17 264H816.94l-35.22-53.66z m-186 14.36l37.57 57.24-216.25 333.76L533 558z m-279.67-71.54h128.35l17.87 47.31-62.19 0.16 60.07 168.54L512 525.64 399.75 352.42zM89.05 210.29h153.23L207.06 264H53.83zM423.71 870.9L53.6 299.72H207L577.11 870.9z m186.07-14.36L237.42 281.9 275 224.65l372.35 574.64zM668.36 767l-77.05-119L817 299.72h153.44z" fill="#2942A0" p-id="6379" /></symbol>'}),o7=r().add(go);const Ji=go;var ho=new(e())({id:"pat-zoj",use:"pat-zoj-usage",viewBox:"0 0 1024 1024",content:'<symbol class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="pat-zoj"><path d="M1024 281.76l-70.39-107.24H739.52L637.46 332l-34.15-95.82 63.21-0.16-44.84-118.69h-177l-69.07 197.82-91.13-140.63H70.39L0 281.77l404.92 624.9H619l64-97.45 0.06-0.1 6.37-9.7v-0.07z m-89-71.47L970.17 264H816.94l-35.22-53.66z m-186 14.36l37.57 57.24-216.25 333.76L533 558z m-279.67-71.54h128.35l17.87 47.31-62.19 0.16 60.07 168.54L512 525.64 399.75 352.42zM89.05 210.29h153.23L207.06 264H53.83zM423.71 870.9L53.6 299.72H207L577.11 870.9z m186.07-14.36L237.42 281.9 275 224.65l372.35 574.64zM668.36 767l-77.05-119L817 299.72h153.44z" p-id="6409" /></symbol>'}),a7=r().add(ho);const Qi=ho;function qi(){return{abnormal:V,add:j,"add-blank-block":L,"add-blank-inline":R,alert:q,"all-application":i0,announcement:J,apple:C0,audit:x0,balloon:_0,"balloon-fill":v0,bank:V0,"bank-card":H0,banned:E,bell:b0,"bell-fill":o0,"bell-off":a0,bold:Lo,bookshelf:Oo,bug:So,building:Ho,calendar:Do,calling:To,"camera-video":Ao,"camera-video-off":Ro,can:Io,cart:Vo,caution:No,"caution-fill":Uo,certificate:Fo,chart:jo,check:Zo,"check-check":Wo,"check-small":Ko,checkbox:Yo,"checkbox-blank":$o,"checkbox-fill":Go,"checkbox-indeterminate-fill":Xo,checklist:Jo,clear:Qo,clock:qo,close:oa,"close-3":ta,"close-fill":ea,"close-small":ra,"cloud-download":aa,"cloud-storage":na,code:la,"code-brackets":ia,"code-completion":sa,coin:ca,comment:da,communication:pa,"concept-sharing":ma,connection:ha,"connection-point":ga,copy:wa,course:va,crown:fa,"crown-2":ua,dashboard:ba,"data-server":xa,database:ya,desktop:Ca,"desktop-off":_a,devices:Ma,diamond:ka,directory:Ea,"doc-search":za,dot:Pa,"dot-small":Ba,"double-down":La,down:Sa,"down-fill":Oa,download:Ha,drag:Da,edit:Aa,"edit-2":Ta,"edit-paper":Ra,editor:Ia,enquire:Va,enter:Na,"enter-key":Ua,enterprise:Fa,es:Wa,"es-color":ja,excel:Ka,exit:Za,experiment:$a,explore:Ga,external:Xa,file:tn,"file-addition":Ya,"file-conversion":Ja,"file-draft":Qa,"file-success":qa,"fill-in-the-blank":rn,"fill-in-the-blank-for-programming":en,filter:on,fold:an,"folder-plus":nn,"folder-star-fill":sn,"folder-success":ln,formula:cn,fullscreen:dn,gear:pn,"go-start":mn,heading:gn,history:hn,home:wn,"horizontal-gap":vn,image:un,"indent-left":fn,info:bn,italic:xn,"kebab-horizontal":yn,"kebab-vertical":_n,key:Cn,"last-step":kn,"last-step-fill":Mn,layout:Bn,"layout-column":En,"layout-row":zn,left:Ln,"left-arrow":Pn,lightning:On,link:Sn,list:Rn,"list-add":Hn,"list-numbers":Dn,"list-view":Tn,location:An,lock:In,mail:Vn,mark:Un,medal:Fn,"medal-color":Nn,mic:Wn,"mic-off":jn,minus:Kn,mobile:$n,"mobile-off":Zn,mooc:Gn,more:Xn,"multiple-choice":Jn,"multiple-choice-more-than-one-answer":Yn,"multiple-file":Qn,"next-step":t3,"next-step-fill":qn,notebook:e3,offline:r3,"ok-2":o3,"ok-3":a3,oms:i3,"oms-color":n3,online:s3,pat:c3,"pat-color":l3,pause:p3,"pause-fill":d3,pds:g3,"pds-color":m3,"peer-review":v3,"peer-review-distribution":h3,"peer-review-result":w3,"people-delete":u3,peoples:f3,person:b3,pin:y3,"pin-fill":x3,placeholder:_3,play:k3,"play-2":C3,"play-fill":M3,"playback-progress":E3,plus:z3,"preview-close":B3,printer:P3,profile:L3,programming:O3,protect:S3,pta:D3,"pta-color":H3,ptae:R3,"ptae-color":T3,public:A3,pulse:I3,puzzle:V3,question:U3,quote:N3,ranking:F3,refresh:j3,reject:W3,report:K3,restore:Z3,right:G3,"right-arrow":$3,ring:X3,"road-sign-both":Y3,scan:J3,score:Q3,screenshot:q3,search:ti,share:ei,shuffle:ri,"smart-optimization":oi,sort:ii,"sort-asc":ai,"sort-desc":ni,spinner:si,star:li,statistics:ci,"stopwatch-start":di,strikethrough:pi,subjective:mi,submissions:gi,"switch-button":hi,sync:wi,table:vi,"text-size":ui,"theme-dark":fi,"theme-light":bi,"three-bars":xi,ticket:yi,time:Ci,"time-machine":_i,tips:Mi,"to-top":ki,topic:Ei,touch:zi,transcript:Bi,translate:Pi,transporter:Li,trashcan:Oi,"tree-list":Si,"triple-balloon":Hi,"true-or-false":Di,undo:Ti,university:Ri,unlock:Ai,up:Vi,"up-fill":Ii,user:Ni,"user-to-user":Ui,usergroup:ji,video:Wi,visibility:Zi,"visibility-off":Ki,wechat:$i,"wifi-off":Gi,windows:Xi,writing:Yi,zoj:Qi,tablet:Fi,"zoj-color":Ji}}var R0=t(74272);const K0=()=>{var U,H;return((H=(U=document.querySelector('head meta[name="git-commit-hash"]'))==null?void 0:U.getAttribute)==null?void 0:H.call(U,"content"))||""};var ts=(U,H,D)=>new Promise((Q,c0)=>{var h0=K=>{try{e0(D.next(K))}catch(s0){c0(s0)}},g0=K=>{try{e0(D.throw(K))}catch(s0){c0(s0)}},e0=K=>K.done?Q(K.value):Promise.resolve(K.value).then(h0,g0);e0((D=D.apply(U,H)).next())});const es=()=>ts(void 0,null,function*(){window.addEventListener("unhandledrejection",H=>{if(H.reason instanceof o._){H.preventDefault(),H.stopImmediatePropagation();return}throw H.reason});const{default:U}=yield t.e(7804).then(t.t.bind(t,67804,23));(0,n.setLoggers)({aLogger:U.singleton({pid:"eksabfi2cn@94d5b8dc408ab8d",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:!0,enableLinkTrace:!0,behavior:!0,disabled:R0.oH,disableHook:!0,sample:R0.x?1:100,pvSample:R0.x?1:100,environment:R0.x?"daily":"prod",release:K0()}),gLogger:new n.GTag("G-ZHCNP8KECW")})});var L0=t(74756);function rs(){var U;const H=document.createElement("div");H.style.display="flex",H.style.flexDirection="column",H.style.rowGap="1px",H.appendChild(document.createElement("div")),H.appendChild(document.createElement("div")),document.body.appendChild(H);const D=H.scrollHeight===1;return(U=H.parentNode)==null||U.removeChild(H),D}function os(){var U,H,D;L0.default.setWidth(window.innerWidth),window.addEventListener("resize",()=>{L0.default.setWidth(window.innerWidth)}),L0.default.addListener("updateTheme",()=>{document.body&&(L0.default.theme==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark")),(0,a.setCache)({theme:L0.default.theme})}),L0.default.setTheme((0,a.getCache)().theme||"light"),rs()||(D=(H=(U=document==null?void 0:document.body)==null?void 0:U.classList)==null?void 0:H.add)==null||D.call(H,"no-flex-gap")}function as(){p.Z.updateLocale("zh-cn",{week:{doy:7,dow:0}})}var i7=t(21573),s7=t(18479),l7=t(13333);function ns(){window.CLEAR_DEPRECATION_ERROR_HANDLER=!0,window.onerror===window.PRELOAD_GLOBAL_ERROR_HANDLER&&(window.onerror=null)}var is=t(29963),wo=t(74970),ss=t(12653),ls=t.n(ss),vo=t(78349),Z=t(67294),cs=Object.defineProperty,U0=Object.getOwnPropertySymbols,uo=Object.prototype.hasOwnProperty,fo=Object.prototype.propertyIsEnumerable,bo=(U,H,D)=>H in U?cs(U,H,{enumerable:!0,configurable:!0,writable:!0,value:D}):U[H]=D,ds=(U,H)=>{for(var D in H||(H={}))uo.call(H,D)&&bo(U,D,H[D]);if(U0)for(var D of U0(H))fo.call(H,D)&&bo(U,D,H[D]);return U},ps=(U,H)=>{var D={};for(var Q in U)uo.call(U,Q)&&H.indexOf(Q)<0&&(D[Q]=U[Q]);if(U!=null&&U0)for(var Q of U0(U))H.indexOf(Q)<0&&fo.call(U,Q)&&(D[Q]=U[Q]);return D};const xo=U=>{var H=U,{href:D,children:Q,className:c0,showIcon:h0}=H,g0=ps(H,["href","children","className","showIcon"]);return Z.createElement("a",ds({target:"_blank",rel:"noopener noreferrer nofollow",className:ls()("hover:no-underline",c0),href:D},g0),Q,h0&&Z.createElement(vo.Z,{name:"external",className:"ml-[5px]",inline:!0}))};var ms=t(50059),gs=t(62182),P0=t(24065),Z0=t(97877);const hs=({enabled:U=!0,defaultOpen:H=!1,title:D,children:Q,expandHint:c0="\u5C55\u5F00",collapseHint:h0="\u6298\u53E0",className:g0,titleContainerClassName:e0,childrenContainerClassName:K})=>Z.createElement(gs.A,{initialExpanded:H,enabled:U},({expanded:s0,toggle:Ts,renderExpandableContent:Rs})=>Z.createElement("div",{className:(0,Z0.Z)("space-y-2",g0)},Z.createElement(ms.Z,{className:(0,Z0.Z)("inline-flex space-x-4 items-start",e0),onClick:Ts},typeof D=="string"?Z.createElement("div",{className:"break-all"},D):D,Z.createElement(P0.Z,{iconR:s0?"up":"down",className:"flex-none"},s0?h0:c0)),Rs({className:K,children:Q})));var A0=t(3542),ws=t(84098);const yo=/(macintosh|macintel|macppc|mac68k|macos)/i.test(navigator.userAgent),vs=/(win32|win64|windows|wince)/i.test(navigator.userAgent),d7=/win64|x64;|wow64/i.test(navigator.userAgent),p7=(()=>{if(!vs)return!1;const U=/Windows NT ([\d.]+)/i.exec(navigator.userAgent);return U?Number(U[1])>=10:!1})();var us=t(93379),_o=t.n(us),fs=t(7795),Co=t.n(fs),bs=t(90569),Mo=t.n(bs),xs=t(3565),ko=t.n(xs),ys=t(19216),Eo=t.n(ys),_s=t(44589),zo=t.n(_s),N0=t(10744),O0={};O0.styleTagTransform=zo(),O0.setAttributes=ko(),O0.insert=Mo().bind(null,"head"),O0.domAPI=Co(),O0.insertStyleElement=Eo();var m7=_o()(N0.Z,O0);const Bo=N0.Z&&N0.Z.locals?N0.Z.locals:void 0;var Cs=(U,H,D)=>new Promise((Q,c0)=>{var h0=K=>{try{e0(D.next(K))}catch(s0){c0(s0)}},g0=K=>{try{e0(D.throw(K))}catch(s0){c0(s0)}},e0=K=>K.done?Q(K.value):Promise.resolve(K.value).then(h0,g0);e0((D=D.apply(U,H)).next())});class Ms extends Z.PureComponent{constructor(){super(...arguments),this.state={outdated:!1},this.getFields=()=>[{label:"\u9519\u8BEF\u4FE1\u606F",value:this.props.error.stack?Z.createElement(hs,{title:this.props.error.message},Z.createElement("div",{className:"whitespace-pre-wrap"},this.props.error.stack)):Z.createElement(P0.Z,null,this.props.error.message)},{label:"\u6D4F\u89C8\u5668\u4FE1\u606F",value:Z.createElement(P0.Z,null,`${navigator.userAgent} ${window.location.href} ${i.default.isGuest?"Guest":`${i.default.id}(${i.default.nickname})`} ${K0()}`)},{label:"\u53CD\u9988\u95EE\u9898",value:Z.createElement("div",null,"\u90AE\u7BB1\uFF1A",Z.createElement(xo,{href:`mailto:feedback@pat-edu.com?subject=PTA Feedback${i.default.isGuest?"":` ${i.default.id}`}&body=${window.location.href}`},"feedback@pat-edu.com"))},{label:"\u67E5\u9605\u5E38\u89C1\u9519\u8BEF\u89E3\u51B3\u65B9\u6CD5",value:Z.createElement(xo,{href:"https://kdocs.cn/l/chmO3NDq6FWS"},"\u524D\u5F80FAQ")}],this.handleClickHint=({currentTarget:H})=>(0,ws.popView)({target:H,content:Z.createElement("div",null,Z.createElement(P0.Z,{bold:!0},"\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u64CD\u4F5C\uFF1A"),Z.createElement("ul",{className:"m-0 pl-6"},Z.createElement("li",null,"\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u952E\u76D8\u5FEB\u6377\u952E",Z.createElement("code",{className:"bg-bg-normal px-2 py-1 rounded"},yo?"Cmd + Shift + R":"Shift + F5"))))})}componentDidMount(){return Cs(this,null,function*(){try{const H=K0();if(!H)return;const D=(yield(0,is.b)()).prods.gplt;D&&H!==D&&!R0.x&&this.setState({outdated:!0})}catch(H){(0,A0.noop)(H)}})}render(){const{reload:H,error:D,className:Q}=this.props,{outdated:c0}=this.state,{message:h0}=D,g0=/^Loading\schunk\s.*?\sfailed/.test(h0);return Z.createElement("div",{className:(0,Z0.Z)("relative flex flex-col bg-bg-base p-8 text-start",Q)},c0&&Z.createElement("div",{className:"relative flex justify-end max-w-[40rem] w-full mx-auto -mb-6"},Z.createElement(wo.Z,{type:"text",icon:"info",color:"warning",onClick:this.handleClickHint},"\u53D1\u73B0\u65B0\u7248\u672C")),Z.createElement("div",{className:"flex flex-col items-center space-y-2"},Z.createElement("div",{className:Bo.iconWrapper},Z.createElement(vo.Z,{name:"close-small"})),Z.createElement(P0.Z,{size:"xl",bold:!0},g0?"\u7F51\u7EDC\u51FA\u9519\u4E86":"\u51FA\u9519\u4E86"),Z.createElement(wo.Z,{className:Bo.operation,action:H},(0,_.getCommonT)().components.ErrorComponent.ErrorComponent.commonReload)),Z.createElement("div",{className:"max-w-[40rem] mx-auto space-y-6 mt-6"},g0&&Z.createElement("div",null,Z.createElement(P0.Z,{bold:!0},"\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u64CD\u4F5C\uFF1A"),Z.createElement("ul",{className:"pl-6"},Z.createElement("li",null,"\u6E05\u9664\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u952E\u76D8\u5FEB\u6377\u952E",Z.createElement("code",{className:"bg-bg-normal px-2 py-1 rounded"},yo?"Cmd + Shift + R":"Shift + F5")),Z.createElement("li",null,"\u8BBF\u95EE",Z.createElement("a",{href:"?proxyCDN=1"},"\u5907\u7528\u7EBF\u8DEF")))),Z.createElement("div",{className:"space-y-4"},this.getFields().map(({label:e0,value:K})=>Z.createElement("div",{className:"flex flex-col items-start justify-between space-y-1",key:e0},Z.createElement(P0.Z,{bold:!0,className:"min-w-[4rem]"},e0),K)))))}}const ks=U=>Z.createElement(Ms,{error:U.error,reload:U.reload});var Es=t(97583),F0=t(29103),zs=t(11225);function Bs(){F0.default.defaultOptions.placeholder=Z.createElement(Es.Z,null),F0.default.defaultOptions.renderError=ks,setInterval(()=>{F0.default.cache=(0,A0.fromPairs)((0,A0.toPairs)(F0.default.cache).filter(([,{time:U}])=>U>(0,zs.now)()-3e5))},1e3)}const Ps=U=>(0,A0.fromPairs)(U.keys().map(H=>{const D=(0,A0.camelCase)(H);return[D.substr(0,D.length-2),U(H).default]}));var g7=t(39027);function Ls(){const U=Ps(t(66408));window.services=U}var j0=t(9257),S0={};S0.styleTagTransform=zo(),S0.setAttributes=ko(),S0.insert=Mo().bind(null,"head"),S0.domAPI=Co(),S0.insertStyleElement=Eo();var h7=_o()(j0.Z,S0);const w7=j0.Z&&j0.Z.locals?j0.Z.locals:void 0;var Os=t(49502);const Po=U=>{const H=document.createElement("link");H.rel="stylesheet",H.href=Os.ZP.CDN_URL+U,document.head.appendChild(H)};function Ss(){Po("../assets/fonts.css"),Po("../assets/katex.min.css")}var Hs=t(20745),Ds=(U,H,D)=>new Promise((Q,c0)=>{var h0=K=>{try{e0(D.next(K))}catch(s0){c0(s0)}},g0=K=>{try{e0(D.throw(K))}catch(s0){c0(s0)}},e0=K=>K.done?Q(K.value):Promise.resolve(K.value).then(h0,g0);e0((D=D.apply(U,H)).next())});Ds(void 0,null,function*(){yield es(),h(),yield f(),qi(),c(),os(),as(),ns(),Bs(),Ls(),Ss();const{default:U}=yield Promise.all([t.e(76),t.e(9244)]).then(t.bind(t,79244));(0,Hs.s)(document.getElementById("gplt")).render(Z.createElement(U))})},72461:(M,s,t)=>{"use strict";t.d(s,{z5:()=>w,D5:()=>c});var o=t(58707);const l=(0,o.createAPI)({zone:"sparkling-daydream",service:"UserStorage",name:"BatchAddRecentVisits",method:"POST",type:"MUTATE",path:"/api/user-storage/recent-visits",body:["type","ids","shareCodeById"]}),i=(0,o.createAPI)({zone:"sparkling-daydream",service:"UserStorage",name:"DeleteRecentVisits",method:"DELETE",type:"MUTATE",path:"/api/user-storage/recent-visits",body:["type","ids"]}),a=(0,o.createAPI)({zone:"sparkling-daydream",service:"UserStorage",name:"GetUserStorageData",method:"GET",type:"QUERY",path:"/api/user-storage/names/{names}",pathVariables:["names"]}),m=(0,o.createAPI)({zone:"sparkling-daydream",service:"UserStorage",name:"ListRecentVisits",method:"GET",type:"QUERY",path:"/api/user-storage/recent-visits",queries:["limit","filter"]}),n=(0,o.createAPI)({zone:"sparkling-daydream",service:"UserStorage",name:"PutUserStorageData",method:"PUT",type:"MUTATE",path:"/api/user-storage/names/{name}",pathVariables:["name"],body:["value"]});var v=t(41512),g=t(3542),_=t(86977),b=t(12031);const z=new v.N({initialKeys:[],batchGetValues:d=>a({names:d.join(",")}).then(({items:u})=>u),mergeKeys:(d,u)=>(0,g.uniq)([...d,...u])}),h=d=>z.getValues(d).then(u=>{const f=(0,g.keyBy)(u,({name:C})=>C);return d.map(C=>{var e;return((e=f[C])==null?void 0:e.value)||""})}),k=(0,_.P)("remoteCache/batchGetRemoteCache",h),w=(0,_.P)("remoteCache/getRemoteCache",d=>h([d]).then(u=>(0,g.head)(u))),c=(0,_.P)("remoteCache/setRemoteCache",({name:d,value:u})=>n({name:d,value:u},{message:!1})),p=(0,_.P)("remoteCache/getActiveFeature",()=>h(["features"]).then(([d])=>({features:(0,g.intersection)((0,g.keys)({course:!0,grading:!0,multiPaper:!0,excelImportProblems:!0,problemSetStatistics:!0,problemSetAnalysis:!0}),(0,b.As)(d,[]))})))},29963:(M,s,t)=>{"use strict";t.d(s,{b:()=>i});var o=t(49502),l=t(86977);const i=(0,l.P)("version/GET_VERSION",()=>fetch(`${o.ZP.CDN_URL}../meta/version.json`).then(a=>a.json()))},50059:(M,s,t)=>{"use strict";t.d(s,{Z:()=>p});var o=t(12653),l=t.n(o),i=t(29924),a=t(67294),m=t(66397),n=t(70061),v=Object.defineProperty,g=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,z=(d,u,f)=>u in d?v(d,u,{enumerable:!0,configurable:!0,writable:!0,value:f}):d[u]=f,h=(d,u)=>{for(var f in u||(u={}))_.call(u,f)&&z(d,f,u[f]);if(g)for(var f of g(u))b.call(u,f)&&z(d,f,u[f]);return d},k=(d,u)=>{var f={};for(var C in d)_.call(d,C)&&u.indexOf(C)<0&&(f[C]=d[C]);if(d!=null&&g)for(var C of g(d))u.indexOf(C)<0&&b.call(d,C)&&(f[C]=d[C]);return f};const w=(d,u,f,C)=>{const e=u?!1:d===void 0?C?!1:f:d;return e?Number(e):e===void 0?void 0:0},c=d=>{const u=(0,m.m)(d),{children:f,className:C,width:e,height:y,maxWidth:r,maxHeight:A,minWidth:T,minHeight:V,theme:N,scroll:F,onClick:L,onKeyPress:B,noFocus:P,padding:R,margin:S,bgColor:I,flex:j,grow:W,shrink:t0,basis:q,noFlex:Y,noGrow:X,noShrink:i0,noSelect:l0,hint:G,hintPlacement:J,interactive:r0,htmlTag:p0,noWrap:C0,inline:w0,_ref:f0,style:x0,_internal:y0,tabIndex:E0,htmlAttrs:v0}=u,u0=k(u,["children","className","width","height","maxWidth","maxHeight","minWidth","minHeight","theme","scroll","onClick","onKeyPress","noFocus","padding","margin","bgColor","flex","grow","shrink","basis","noFlex","noGrow","noShrink","noSelect","hint","hintPlacement","interactive","htmlTag","noWrap","inline","_ref","style","_internal","tabIndex","htmlAttrs"]),M0=w(W,X,j,Y),_0=w(t0,i0,j,Y);return h(h({ref:f0,className:l()(!y0&&"pc-x",C,{[`pc-bg-${I}`]:I,"select-none":l0,"whitespace-nowrap":C0,"cursor-pointer":L&&!P,grow:M0===1,shrink:_0===1,"no-grow":M0===0,"no-shrink":_0===0,"pc-dark":N==="dark",interactive:r0,inline:w0,scroll:F}),style:h({width:(0,n.Nn)(e),height:(0,n.Nn)(y),maxWidth:(0,n.Nn)(r),maxHeight:(0,n.Nn)(A),minWidth:(0,n.Nn)(T),minHeight:(0,n.Nn)(V),padding:(0,n.ty)(R),margin:(0,n.ty)(S),flexGrow:M0!==1&&M0!==0&&M0,flexShrink:_0!==1&&_0!==0&&_0,flexBasis:q},x0),onKeyPress:k0=>{L&&k0.key==="Enter"&&k0.target.click(),B==null||B(k0)},onClick:L,tabIndex:E0||(L&&!P?0:void 0)},v0),u0)};class p extends a.PureComponent{constructor(){super(...arguments),this.dummy=a.createElement("div",null)}render(){const{htmlTag:u,hint:f,hintPlacement:C,children:e}=this.props,y=c(this.props),r=a.createElement(u||"div",y,e);return!f||y.onClick&&!i.K?r:a.createElement(i.Z,{hint:f,placement:C},r)}}},30331:(M,s,t)=>{"use strict";t.d(s,{Z:()=>F,D:()=>N});var o=t(57522),l=t(55705),i=t(67294),a=t(93379),m=t.n(a),n=t(7795),v=t.n(n),g=t(90569),_=t.n(g),b=t(3565),z=t.n(b),h=t(19216),k=t.n(h),w=t(44589),c=t.n(w),p=t(15171),d={};d.styleTagTransform=c(),d.setAttributes=z(),d.insert=_().bind(null,"head"),d.domAPI=v(),d.insertStyleElement=k();var u=m()(p.Z,d);const f=p.Z&&p.Z.locals?p.Z.locals:void 0;var C=Object.defineProperty,e=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,A=(L,B,P)=>B in L?C(L,B,{enumerable:!0,configurable:!0,writable:!0,value:P}):L[B]=P,T=(L,B)=>{for(var P in B||(B={}))y.call(B,P)&&A(L,P,B[P]);if(e)for(var P of e(B))r.call(B,P)&&A(L,P,B[P]);return L},V=(L,B)=>{var P={};for(var R in L)y.call(L,R)&&B.indexOf(R)<0&&(P[R]=L[R]);if(L!=null&&e)for(var R of e(L))B.indexOf(R)<0&&r.call(L,R)&&(P[R]=L[R]);return P};const N={body:null,open:!1,placement:"right",level:null};class F extends i.PureComponent{constructor(){super(...arguments),this.state=N,this.prevActiveElement=null,this.close=B=>this.setState(()=>({open:!1}),()=>{var P,R;return(R=(P=this.state).onClose)==null?void 0:R.call(P,B)})}componentDidUpdate(B,P){var R,S;P.open&&!this.state.open&&((S=(R=this.prevActiveElement)==null?void 0:R.focus)==null||S.call(R))}getSnapshotBeforeUpdate(B,P){return!P.open&&this.state.open&&(this.prevActiveElement=document.activeElement),null}render(){const B=this.state,{body:P,open:R}=B,S=V(B,["body","open"]);return i.createElement(o.Z,T({onClose:this.close,handler:P===null?!1:void 0,open:R,onHandleClick:this.close,afterVisibleChange:I=>{I||this.setState({body:null})}},S),P)}}},62182:(M,s,t)=>{"use strict";t.d(s,{A:()=>C});var o=t(52460),l=t(97877),i=t(67294),a=t(93379),m=t.n(a),n=t(7795),v=t.n(n),g=t(90569),_=t.n(g),b=t(3565),z=t.n(b),h=t(19216),k=t.n(h),w=t(44589),c=t.n(w),p=t(85929),d={};d.styleTagTransform=c(),d.setAttributes=z(),d.insert=_().bind(null,"head"),d.domAPI=v(),d.insertStyleElement=k();var u=m()(p.Z,d);const f=p.Z&&p.Z.locals?p.Z.locals:void 0,C=({enabled:y,initialExpanded:r,children:A})=>{const[T,V]=i.useState(r||!1),[N,F]=i.useState(!1),L=y&&N,B=L?T:r||!1;return A({expanded:B,toggle:()=>{L&&V(!T)},expandable:!!L,renderExpandableContent:P=>i.createElement(e,{expanded:B,className:P.className,heightThreshold:P.heightThreshold,onExpandableEmit:R=>{var S;F(R),(S=P.onExpandableEmit)==null||S.call(P,R)}},P.children)})};class e extends i.PureComponent{constructor(){super(...arguments),this.ref=i.createRef(),this.emitExpandable=()=>{const{onExpandableEmit:r,heightThreshold:A=0}=this.props;(0,o.assert)(this.ref.current,"this.ref.current should exist"),r==null||r(this.ref.current.scrollHeight>A)}}componentDidMount(){(0,o.assert)(this.ref.current,"this.ref.current should exist"),this.emitExpandable(),this.ref.current.addEventListener("transitionend",r=>{r.target===r.currentTarget&&((0,o.assert)(this.ref.current,"this.ref.current should exist"),this.ref.current.scrollIntoView({behavior:"smooth",block:"center"}),this.emitExpandable())})}render(){const{expanded:r,children:A,className:T,heightThreshold:V=0}=this.props;return i.createElement("div",{className:(0,l.Z)(f.expandableContent,r&&f.expanded,T),style:{"--height-threshold":`${V}px`},ref:this.ref},A)}}},29924:(M,s,t)=>{"use strict";t.d(s,{K:()=>n,Z:()=>v});var o=t(52460),l=t(26903),i=t(69958),a=t(67294),m=t(73935);const n=window.matchMedia("(hover: hover)").matches;class v extends a.PureComponent{constructor(){super(...arguments),this.showHint=_=>{_ instanceof FocusEvent&&CSS.supports("selector(:focus-visible)")&&!this.targetDOM.matches(":focus-visible")||(this.timeoutHandle=(0,i.I)(()=>this.timeoutHandle&&(0,l.hintView)({target:this.targetDOM,content:this.props.hint,placement:this.props.placement}),500),(0,i.I)(()=>{n?(this.targetDOM.addEventListener("mouseleave",this.hideHint),this.targetDOM.addEventListener("blur",this.hideHint),document.addEventListener("click",this.hideHint)):document.addEventListener("touchstart",this.hideHint)},0))},this.hideHint=()=>{clearTimeout(this.timeoutHandle),this.timeoutHandle=void 0,(0,l.closeHintView)(),n?(this.targetDOM.removeEventListener("mouseleave",this.hideHint),this.targetDOM.removeEventListener("blur",this.hideHint),document.removeEventListener("click",this.hideHint)):document.removeEventListener("touchstart",this.hideHint)}}componentDidMount(){const _=m.findDOMNode(this);(0,o.assert)(_ instanceof HTMLElement,"Children of <Hint /> must be rendered as an HTMLElement"),this.targetDOM=_,n?(this.targetDOM.addEventListener("pointerenter",this.showHint),this.targetDOM.addEventListener("focus",this.showHint)):this.targetDOM.addEventListener("click",this.showHint)}componentDidUpdate(){this.timeoutHandle&&(0,l.reloadHintView)({target:this.targetDOM,content:this.props.hint,placement:this.props.placement})}componentWillUnmount(){n?(this.targetDOM.removeEventListener("pointerenter",this.showHint),this.targetDOM.removeEventListener("focus",this.showHint)):this.targetDOM.removeEventListener("click",this.showHint),this.hideHint()}render(){return this.props.children}}},78349:(M,s,t)=>{"use strict";t.d(s,{Z:()=>k});var o=t(12653),l=t.n(o),i=t(24923),a=t(67294),m=t(66397),n=Object.defineProperty,v=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,b=(w,c,p)=>c in w?n(w,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):w[c]=p,z=(w,c)=>{for(var p in c||(c={}))g.call(c,p)&&b(w,p,c[p]);if(v)for(var p of v(c))_.call(c,p)&&b(w,p,c[p]);return w},h=(w,c)=>{var p={};for(var d in w)g.call(w,d)&&c.indexOf(d)<0&&(p[d]=w[d]);if(w!=null&&v)for(var d of v(w))c.indexOf(d)<0&&_.call(w,d)&&(p[d]=w[d]);return p};class k extends a.PureComponent{render(){const c=(0,m.m)(this.props),{size:p,name:d,activeColor:u,color:f,colorTransition:C,className:e,_internal:y}=c,r=h(c,["size","name","activeColor","color","colorTransition","className","_internal"]);return a.createElement(i.Z,z({_internal:!0,className:l()([!y&&"pc-icon",e,{"animate-spin ease-in-out":d==="spinner",[`pc-color-${f||""}`]:f,[`pc-active-${u||""}`]:f!==u&&u}])},r),a.createElement("svg",{"aria-hidden":"true",className:l()(["pc-icon-raw",p&&`pc-${p}`,C&&`pc-trs-${C}`]),style:typeof p=="number"?{fontSize:p}:void 0},a.createElement("use",{xlinkHref:`#pat-${d}`})))}}},24923:(M,s,t)=>{"use strict";t.d(s,{Z:()=>L});var o=t(67294),l=t(12653),i=t.n(l),a=t(50059),m=t(3542),n=t(66397),v=Object.defineProperty,g=Object.defineProperties,_=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(B,P,R)=>P in B?v(B,P,{enumerable:!0,configurable:!0,writable:!0,value:R}):B[P]=R,w=(B,P)=>{for(var R in P||(P={}))z.call(P,R)&&k(B,R,P[R]);if(b)for(var R of b(P))h.call(P,R)&&k(B,R,P[R]);return B},c=(B,P)=>g(B,_(P)),p=(B,P)=>{var R={};for(var S in B)z.call(B,S)&&P.indexOf(S)<0&&(R[S]=B[S]);if(B!=null&&b)for(var S of b(B))P.indexOf(S)<0&&h.call(B,S)&&(R[S]=B[S]);return R};const d={center:"center",left:"flex-start",top:"flex-start",right:"flex-end",bottom:"flex-end"},u=c(w({},d),{auto:"stretch"}),f={none:"",between:"space-between",around:"space-around"},C={"2xs":2,xs:4,sm:6,md:8,lg:12,xl:16,"2xl":24};class e extends o.PureComponent{render(){const P=(0,n.m)(this.props),{direction:R,reverse:S,spacing:I,align:j,alignX:W,gap:t0,center:q,separator:Y,grid:X,inline:i0,children:l0,className:G,style:J,_internal:r0}=P,p0=p(P,["direction","reverse","spacing","align","alignX","gap","center","separator","grid","inline","children","className","style","_internal"]),C0=I&&f[I]||q&&d.center||j&&d[j],w0=q?u.center:W&&W!=="auto"?d[W]:void 0,f0=i()(!r0&&"pc-layout",G,{inline:i0,"pc-grid":X,"flex-column":R==="vertical","flex-reverse":S,"justify-center":C0==="center","items-center":w0==="center",[`pc-gap-${t0&&String(t0)in C?C[String(t0)]:t0===!0?"default":t0}`]:t0}),x0=(0,m.compact)(o.Children.toArray(l0).map((v0,u0)=>o.isValidElement(v0)?v0:o.createElement("span",{key:u0},v0))),y0=Y?(0,m.dropRight)((0,m.flatten)((0,m.concat)((0,m.zipWith)(x0,(0,m.range)(x0.length),(v0,u0)=>[v0,o.cloneElement(Y,{key:`separator_${u0}`})])))):x0,E0=w({justifyContent:C0!=="center"?C0:void 0,alignItems:w0!=="center"?w0:void 0},J);return X&&t0?o.createElement(a.Z,w({},p0),o.createElement(a.Z,{_internal:!0,className:f0,style:E0},y0)):o.createElement(a.Z,w({_internal:!0,className:f0,style:E0},p0),y0)}}var y=Object.defineProperty,r=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,V=(B,P,R)=>P in B?y(B,P,{enumerable:!0,configurable:!0,writable:!0,value:R}):B[P]=R,N=(B,P)=>{for(var R in P||(P={}))A.call(P,R)&&V(B,R,P[R]);if(r)for(var R of r(P))T.call(P,R)&&V(B,R,P[R]);return B},F=(B,P)=>{var R={};for(var S in B)A.call(B,S)&&P.indexOf(S)<0&&(R[S]=B[S]);if(B!=null&&r)for(var S of r(B))P.indexOf(S)<0&&T.call(B,S)&&(R[S]=B[S]);return R};class L extends o.PureComponent{render(){const P=this.props,{className:R,_internal:S}=P,I=F(P,["className","_internal"]);return o.createElement(e,N({_internal:!0,className:i()(!S&&"pc-h",R)},I))}}},24065:(M,s,t)=>{"use strict";t.d(s,{Z:()=>u});var o=t(12653),l=t.n(o),i=t(50059),a=t(78349),m=t(24923),n=t(67294),v=t(66397),g=t(70061),_=Object.defineProperty,b=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(f,C,e)=>C in f?_(f,C,{enumerable:!0,configurable:!0,writable:!0,value:e}):f[C]=e,w=(f,C)=>{for(var e in C||(C={}))z.call(C,e)&&k(f,e,C[e]);if(b)for(var e of b(C))h.call(C,e)&&k(f,e,C[e]);return f},c=(f,C)=>{var e={};for(var y in f)z.call(f,y)&&C.indexOf(y)<0&&(e[y]=f[y]);if(f!=null&&b)for(var y of b(f))C.indexOf(y)<0&&h.call(f,y)&&(e[y]=f[y]);return e};const p={xs:"xs",sm:"xs",md:"xs",lg:"xs",xl:"sm","2xl":"md"},d={xs:"md",sm:"md",md:"md",lg:"md",xl:"lg","2xl":"xl"};class u extends n.PureComponent{render(){const C=(0,v.m)(this.props),{t:e,icon:y,iconR:r,gap:A,iconColor:T,iconColorR:V,className:N,children:F,_internal:L,size:B,color:P,colorTransition:R,hint:S,bold:I,code:j,italic:W,lineHeight:t0,align:q,ellipsis:Y,keepWord:X,activeColor:i0,prettyWrap:l0,balanceWrap:G}=C,J=c(C,["t","icon","iconR","gap","iconColor","iconColorR","className","children","_internal","size","color","colorTransition","hint","bold","code","italic","lineHeight","align","ellipsis","keepWord","activeColor","prettyWrap","balanceWrap"]),r0=Number(Y)>1;return n.createElement(m.Z,w({_internal:!0,gap:A||(B&&B!=="md"?p[B]:void 0),className:l()([!L&&"pc-text",N,{[`pc-color-${P}`]:P,[`pc-active-${i0}`]:P!==i0&&i0,"whitespace-nowrap":Y===!0||Y===1,[`pc-trs-${R}`]:R}]),shrink:Y===void 0?void 0:!!Y,hint:typeof S=="string"?S:S?F:void 0},J),y&&n.createElement(a.Z,{name:y,color:T,size:B?d[B]:void 0,activeColor:i0}),F!==void 0&&n.createElement(i.Z,{_internal:!0,className:l()(["pc-text-raw",{[`text-${B}`]:B,"font-bold":I,"font-mono":j,italic:W,"break-normal":X,ellipsis:Y&&!r0,"ellipsis-m":r0,"text-pretty":l0,"text-balance":G}]),style:w({lineHeight:(0,g.Nn)(t0),textAlign:q},r0?{WebkitLineClamp:Number(Y),maxHeight:Number(Y)*50}:{})},F),r&&n.createElement(a.Z,{name:r,color:V||T,size:B?d[B]:void 0,activeColor:i0}))}}},74970:(M,s,t)=>{"use strict";t.d(s,{Z:()=>R});var o=t(12653),l=t.n(o),i=t(24923),a=t(24065),m=t(67294),n=t(66397),v=t(70061),g=Object.defineProperty,_=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,h=(S,I,j)=>I in S?g(S,I,{enumerable:!0,configurable:!0,writable:!0,value:j}):S[I]=j,k=(S,I)=>{for(var j in I||(I={}))b.call(I,j)&&h(S,j,I[j]);if(_)for(var j of _(I))z.call(I,j)&&h(S,j,I[j]);return S},w=(S,I)=>{var j={};for(var W in S)b.call(S,W)&&I.indexOf(W)<0&&(j[W]=S[W]);if(S!=null&&_)for(var W of _(S))I.indexOf(W)<0&&z.call(S,W)&&(j[W]=S[W]);return j};const c=({icon:S,iconR:I},j)=>{const W=(!S||I)&&j?"spinner":I;return[S&&!W&&j?"spinner":S,W]};class p extends m.PureComponent{constructor(){super(...arguments),this.ref=this.props._ref||m.createRef()}render(){const I=(0,n.m)(this.props),{type:j,size:W,disabled:t0,_loading:q,onClick:Y,color:X,activeColor:i0,colorTransition:l0="normal",iconColor:G,iconColorR:J,icon:r0,iconR:p0,t:C0,align:w0="center",hint:f0,hintPlacement:x0,bold:y0,italic:E0,code:v0,ellipsis:u0,keepWord:M0,lineHeight:_0,className:k0,children:I0,_internal:H0}=I,D0=w(I,["type","size","disabled","_loading","onClick","color","activeColor","colorTransition","iconColor","iconColorR","icon","iconR","t","align","hint","hintPlacement","bold","italic","code","ellipsis","keepWord","lineHeight","className","children","_internal"]),[W0,V0]=c({icon:r0,iconR:p0},q),[z0,x]=(0,v.Ro)(t0),E=j==="solid"||!j;return m.createElement(i.Z,k({_internal:!0,_ref:this.ref,className:l()(!H0&&"pc-button",k0,{[`pc-button-${j}`]:j,[`pc-${W}`]:W,[`pc-color-${X}`]:X,[`pc-active-${i0}`]:i0&&!z0,disabled:z0||q}),onClick:O=>Y==null?void 0:Y(O),hint:x||(typeof f0=="string"?f0:f0?I0:void 0)},D0),m.createElement(a.Z,k({shrink:!0,grow:w0!=="center",icon:W0,iconR:V0,activeColor:E?"white":z0?void 0:i0,ellipsis:u0!=null?u0:!0,color:E?"white":X&&"inherit"},{size:W,lineHeight:_0,align:w0,bold:y0,italic:E0,code:v0,keepWord:M0,colorTransition:l0,iconColor:G,iconColorR:J}),I0))}}var d=t(98137),u=t(18667),f=t(62065),C=t(4507),e=t(57194),y=Object.defineProperty,r=Object.defineProperties,A=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,F=(S,I,j)=>I in S?y(S,I,{enumerable:!0,configurable:!0,writable:!0,value:j}):S[I]=j,L=(S,I)=>{for(var j in I||(I={}))V.call(I,j)&&F(S,j,I[j]);if(T)for(var j of T(I))N.call(I,j)&&F(S,j,I[j]);return S},B=(S,I)=>r(S,A(I)),P=(S,I)=>{var j={};for(var W in S)V.call(S,W)&&I.indexOf(W)<0&&(j[W]=S[W]);if(S!=null&&T)for(var W of T(S))I.indexOf(W)<0&&N.call(S,W)&&(j[W]=S[W]);return j};class R extends m.PureComponent{constructor(){super(...arguments),this.promiseRef=null,this.state={loading:!!this.props.loading},this.handleClick=I=>{const{disabled:j,action:W,onClick:t0,to:q,href:Y,external:X}=this.props,[i0]=(0,v.Ro)(j);if(!(i0||this.state.loading)){if(t0==null||t0(I),q&&(0,e.nf)(I)){if(I.preventDefault(),X){window.open(q);return}u.default.push(q),(0,C.scrollByHashChanges)(I,q)}if(Y&&(0,e.nf)(I)&&(I.preventDefault(),Y.startsWith("/")?window.location.href=Y:window.open(Y,X?"_blank":"_self")),W){I.preventDefault();const l0=new Promise(G=>{G(W==null?void 0:W(I))});this.promiseRef=l0,this.setState({loading:!0}),l0.catch(G=>{this.promiseRef===l0&&!(G instanceof d._)&&(f.default.error(G),console.error(G))}).finally(()=>{this.promiseRef===l0&&this.setState({loading:!1})})}}}}componentWillUnmount(){this.promiseRef=null}static getDerivedStateFromProps(I,j){var W;return B(L({},j),{loading:(W=I.loading)!=null?W:j.loading})}render(){const I=(0,n.m)(this.props),{action:j,onClick:W,to:t0,href:q,external:Y,loading:X,htmlAttrs:i0,hidden:l0}=I,G=P(I,["action","onClick","to","href","external","loading","htmlAttrs","hidden"]),[J]=(0,v.Ro)(this.props.disabled),r0=J?void 0:q||t0;return m.createElement(p,L(L({onClick:this.handleClick,iconR:Y?"external":void 0,_loading:this.state.loading},t0||r0?{htmlTag:"a",href:r0}:{htmlTag:"button",htmlAttrs:L({type:"button",disabled:J},i0)}),G))}}},97583:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n});var o=t(67294),l=t(12653),i=t.n(l),a=t(78349);const n=({className:v,style:g})=>o.createElement("div",{className:i()(v,"p-5 text-center"),style:g},o.createElement(a.Z,{name:"spinner",color:"primary",inline:!0}))},74272:(M,s,t)=>{"use strict";t.d(s,{iE:()=>m,oH:()=>i.oH,x:()=>a});var o=t(3542),l=t.n(o),i=t(49502);const a=i.oH||t.g.location&&["dev.pintia.cn","imsun.pintia.cn","pds-dev.pintia.cn","oms-dev.pintia.cn","uep-dev.pintia.cn","dev.patest.cn","gplt-dev.patest.cn","gplt-dev.pintia.cn","zoj-dev.pintia.cn","pta-oms-dev.pintia.cn","activity-dev.pintia.cn"].includes(t.g.location.host);function m({packageConfig:g,developmentConfig:_,localConfig:b}){return i.oH?(0,o.merge)({},i.f8,g,i.W8,_,b,JSON.parse(localStorage.getItem("DEV_CONFIG")||"{}")):a?(0,o.merge)({},i.f8,g,i.W8,_,t.g.SERVER_CONFIG):(0,o.merge)({},i.f8,g,t.g.SERVER_CONFIG)}const n=g=>{g?localStorage.setItem("DEV_CONFIG",JSON.stringify(g)):localStorage.removeItem("DEV_CONFIG"),t.g.location.reload()};var v=m({})},96429:(M,s,t)=>{"use strict";t.d(s,{g:()=>o});const o={NO_COMPILER:{name:"NO_COMPILER",ordinal:0,isHidden:!0,ext:"",language:"",displayName:"",version:"",sort:0},GCC:{name:"GCC",ordinal:1,ext:"c",language:"C",displayName:"gcc",version:"11.4.0",compileCmd:"gcc -DONLINE_JUDGE -fno-tree-ch -O2 -Wall -std=c99 -pipe $src -lm -o $exe",sort:1},MODERN_GCC:{name:"MODERN_GCC",ordinal:38,ext:"modern.c",language:"C",displayName:"gcc c11",version:"11.4.0",compileCmd:"gcc -DONLINE_JUDGE -pedantic-errors -fno-tree-ch -O2 -Wall -std=gnu11 -pipe $src -lm -o $exe",sort:2},GXX:{name:"GXX",ordinal:2,ext:"cpp",language:"C++",displayName:"g++",version:"11.4.0",compileCmd:"g++ -DONLINE_JUDGE -fno-tree-ch -O2 -Wall -std=gnu++20 -pipe $src -lm -o $exe",sort:3},CLANG:{name:"CLANG",ordinal:3,ext:"clang.c",language:"C",displayName:"clang",version:"17.0.6",compileCmd:"clang -DONLINE_JUDGE -O2 -Wall -std=c99 -pipe $src -lm -o $exe",sort:4},CLANGXX:{name:"CLANGXX",ordinal:4,ext:"clang.cpp",language:"C++",displayName:"clang++",version:"17.0.6",compileCmd:"clang++ -DONLINE_JUDGE -O2 -Wall -std=c++20 -pipe $src -lm -o $exe",sort:5},JAVAC:{name:"JAVAC",ordinal:5,ext:"java",language:"Java",displayName:"javac",version:"17.0.13",compileCmd:"javac -encoding UTF8 $src",runCmd:"java -Dfile.encoding=UTF-8 -XX:+UseSerialGC Main",sort:6},PYTHON2:{name:"PYTHON2",ordinal:6,ext:"py",language:"Python",displayName:"python2",version:"2.7.18",runCmd:"python2 $src",sort:7},PYTHON3:{name:"PYTHON3",ordinal:7,ext:"3.py",language:"Python",displayName:"python3",version:"3.10.13",runCmd:"python3 $src",sort:8},RUBY:{name:"RUBY",ordinal:8,ext:"rb",language:"Ruby",displayName:"ruby",version:"2.7.5",runCmd:"ruby $src",sort:9},BASH:{name:"BASH",ordinal:9,ext:"sh",language:"Bash",displayName:"bash",version:"5.0.17",runCmd:"bash $src",sort:10},CAT:{name:"CAT",ordinal:10,ext:"txt",language:"Plaintext",displayName:"cat",version:"1.0",runCmd:"cat $src",sort:11},CLISP:{name:"CLISP",ordinal:11,ext:"cl",language:"Common Lisp",displayName:"sbcl",version:"2.0.1",runCmd:"sbcl --script $src",sort:12},FPC:{name:"FPC",ordinal:12,ext:"pas",language:"Pascal",displayName:"fpc",version:"3.0.4",compileCmd:"fpc -dONLINE_JUDGE -O2 $src",sort:13},GO:{name:"GO",ordinal:13,ext:"go",language:"Go",displayName:"go",version:"1.20.3",compileCmd:"go build $src",sort:14},GHC:{name:"GHC",ordinal:14,ext:"hs",language:"Haskell",displayName:"ghc",version:"8.8.4",compileCmd:"ghc -v0 -O2 --make -threaded $src -o $exe",sort:15},LUA:{name:"LUA",ordinal:15,ext:"lua",language:"Lua",displayName:"lua",version:"5.2.4",runCmd:"lua $src",sort:16},LUAJIT:{name:"LUAJIT",ordinal:16,ext:"jit.lua",language:"Lua",displayName:"luajit",version:"2.1.0",runCmd:"luajit $src",sort:17},MCS:{name:"MCS",ordinal:17,ext:"cs",language:"C#",displayName:"dotnet",version:"6.0.413",compileCmd:"dotnet build",runCmd:"$exe",sort:18},NODE:{name:"NODE",ordinal:18,ext:"js",language:"JavaScript",displayName:"node",version:"12.22.12",runCmd:"node $src",sort:19},OCAMLC:{name:"OCAMLC",ordinal:19,ext:"ml",language:"OCaml",displayName:"ocamlc",version:"4.08.1",compileCmd:"ocamlc -unsafe $src -o $exe",sort:20},PHP:{name:"PHP",ordinal:20,ext:"php",language:"PHP",displayName:"php",version:"7.4.3",runCmd:"php $src",sort:21},PERL:{name:"PERL",ordinal:21,ext:"pl",language:"Perl",displayName:"perl",version:"5.30.0",runCmd:"perl $src",sort:22},AWK:{name:"AWK",ordinal:22,ext:"awk",language:"AWK",displayName:"awk",version:"5.0.1",runCmd:"awk -f $src",sort:23},DMD:{name:"DMD",ordinal:23,ext:"d",language:"D",displayName:"dmd",version:"2.109.1",compileCmd:"dmd -O $src -of$exe",sort:24},RKT:{name:"RKT",ordinal:24,ext:"rkt",language:"Racket",displayName:"racket",version:"7.2",compileCmd:"raco make $src",runCmd:"racket $src",sort:25},VALAC:{name:"VALAC",ordinal:25,ext:"vala",language:"Vala",displayName:"valac",version:"0.48.6",compileCmd:"valac -D ONLINE_JUDGE --thread $src -o $exe",sort:26},VBNC:{name:"VBNC",ordinal:26,ext:"vb",language:"Visual Basic",displayName:"dotnet",version:"6.0.413",compileCmd:"dotnet build",runCmd:"$exe",sort:27},KOTLIN:{name:"KOTLIN",ordinal:27,ext:"kt",language:"Kotlin",displayName:"kotlinc",version:"1.7.22",compileCmd:"kotlinc $src",runCmd:"java -Dfile.encoding=UTF-8 -XX:+UseSerialGC MainKt",sort:28},SWIFT:{name:"SWIFT",ordinal:28,ext:"swift",language:"Swift",displayName:"swiftc",version:"6.0.3",compileCmd:"swiftc $src -O -o $exe",sort:29},OBJC:{name:"OBJC",ordinal:29,ext:"m",language:"Objective-C",displayName:"clang",version:"17.0.6",compileCmd:"clang $src -MMD -MP -DGNUSTEP -DGNUSTEP_BASE_LIBRARY=1 -DGNU_GUI_LIBRARY=1 -DGNU_RUNTIME=1 -fno-strict-aliasing -fexceptions -fobjc-exceptions -D_NATIVE_OBJC_EXCEPTIONS -pthread -fPIC -Wall -DGSWARN -DGSDIAGNOSE -Wno-import -g -O2 -fgnu-runtime -fconstant-string-class=NSConstantString -fexec-charset=UTF-8 -I. -I/home/judger/GNUstep/Library/Headers -I/usr/local/include/GNUstep -I/usr/include/GNUstep -rdynamic -shared-libgcc -lgnustep-base -lobjc -lm -o $exe",sort:30},FORTRAN:{name:"FORTRAN",ordinal:30,ext:"f95",language:"Fortran95",displayName:"gfortran",version:"9.4.0",compileCmd:"gfortran $src",sort:31},OCTAVE:{name:"OCTAVE",ordinal:31,ext:"octave",language:"Octave",displayName:"octave-cli",version:"5.2.0",runCmd:"octave-cli --no-gui --no-history --no-init-file --no-init-path --no-line-editing --no-site-file --no-window-system --norc $src",sort:32},RLANG:{name:"RLANG",ordinal:32,ext:"r",language:"R",displayName:"R",version:"4.4.2",runCmd:"R --slave --vanilla -f $src",sort:33},ASM:{name:"ASM",ordinal:33,ext:"asm",language:"ASM",displayName:"nasm.sh",version:"2.14.02",compileCmd:"nasm.sh $src $exe",sort:34},RUST:{name:"RUST",ordinal:34,ext:"rs",language:"Rust",displayName:"rustc",version:"1.83.0",compileCmd:"rustc --edition=2018 -O --cfg ONLINE_JUDGE $src -o $exe",sort:35},SCALA:{name:"SCALA",ordinal:35,ext:"scala",language:"Scala",displayName:"scalac",version:"3.3.4",compileCmd:"scalac $src",runCmd:"java -Dfile.encoding=UTF-8 -XX:+UseSerialGC Main",sort:36},PYPY3:{name:"PYPY3",ordinal:36,ext:"pypy.3.py",language:"Python",displayName:"pypy3",version:"3.10.14",runCmd:"pypy3 $src",sort:37},CANGJIE:{name:"CANGJIE",ordinal:37,ext:"cj",language:"\u4ED3\u9889",displayName:"cjc",version:"1.0.0",runCmd:"cjc $src",compileCmd:"cjc --cfg ENV=ONLINE_JUDGE -O2 -Won all --error-count-limit 10 $src -o $exe",sort:38},SQL:{name:"SQL",ordinal:100,isHidden:!0,ext:"sql",language:"SQL",displayName:"SQL",version:"",sort:39}}},98137:(M,s,t)=>{"use strict";t.d(s,{_:()=>l});var o=t(24991);class l extends o.L{constructor(){super("ABORT_ERROR")}}},96915:(M,s,t)=>{"use strict";t.d(s,{h:()=>o});class o extends Error{constructor(i,a){super(i),a&&("text"in a&&(this.text=a.text),"to"in a&&(this.to=a.to),"href"in a&&(this.href=a.href),"onClick"in a&&(this.onClick=a.onClick),"action"in a&&(this.action=a.action),"confirmLeave"in a&&(this.confirmLeave=a.confirmLeave),"ignoreQueryChange"in a&&(this.ignoreQueryChange=a.ignoreQueryChange),"confirmMessage"in a&&(this.confirmMessage=a.confirmMessage))}}},41512:(M,s,t)=>{"use strict";t.d(s,{N:()=>i});var o=t(3542),l=t.n(o);class i{constructor({batchGetValues:m,initialKeys:n,mergeKeys:v,wait:g=0}){this.resolves=[],this.rejects=[],this.getValues=_=>(this.pendingKeys=this.mergeKeys(_,this.pendingKeys),new Promise((b,z)=>{this.resolves.push(b),this.rejects.push(z),this.debouncedBatchGetValues()})),this.initialKeys=n,this.batchGetValues=m,this.pendingKeys=n,this.mergeKeys=v,this.debouncedBatchGetValues=(0,o.debounce)(()=>{const _=[...this.resolves],b=[...this.resolves];this.batchGetValues(this.pendingKeys).then(z=>_.map(h=>h(z))).catch(z=>b.map(h=>h(z))),this.pendingKeys=this.initialKeys,this.resolves=[],this.rejects=[]},g)}}},39027:(M,s,t)=>{"use strict";t.d(s,{L:()=>i});var o=t(17187),l=t.n(o);class i extends l(){emit(m,...n){return m!=="*"&&this.emit("*",m,n),super.emit(m,...n)}}},62765:(M,s,t)=>{"use strict";t.d(s,{Z:()=>i});var o=t(66812),l=t.n(o);const i=l()},1973:(M,s,t)=>{"use strict";t.r(s),t.d(s,{ActionService:()=>n,createAction:()=>_,default:()=>g});var o=t(3542),l=t.n(o),i=t(39027),a=t(69958),m=(b,z,h)=>new Promise((k,w)=>{var c=u=>{try{d(h.next(u))}catch(f){w(f)}},p=u=>{try{d(h.throw(u))}catch(f){w(f)}},d=u=>u.done?k(u.value):Promise.resolve(u.value).then(c,p);d((h=h.apply(b,z)).next())});class n extends i.L{constructor(){super(...arguments),this.waitHandle=o.noop,this.reloadHandle=o.noop,this.redirectHandle=o.noop,this.afterHandle=o.noop,this.trackHandle=o.noop,this.messageHandle=o.noop,this.errorMessageHandle=o.noop,this.createAction=(z,h)=>{const k=(w,c)=>m(this,null,function*(){var p,d;try{const u=c||{};/list|get/.test(z.toLowerCase())||(u.reload=(p=u.reload)!=null?p:"page",u.message=(d=u.message)!=null?d:!0),this.emit("BEFORE_INIT",{type:z,params:w});const f=u!=null&&u.mock?Promise.resolve(u==null?void 0:u.mock):h(w,u);this.emit("AFTER_INIT",{type:z,params:w});const C=yield f;return this.trackHandle(C,u),this.messageHandle(C,z,u),yield this.waitHandle(C,u),yield this.reloadHandle(C,u),this.redirectHandle(C,u),(0,a.I)(()=>this.afterHandle(C,u),0),this.emit("DONE",{type:z,params:w,data:C}),C}catch(u){throw this.emit("ERROR",{type:z,params:w,error:u}),this.errorMessageHandle(u,z,c),u}});return k.toString=()=>z,k}}}const v=new n,g=v,{createAction:_}=v},58707:(M,s,t)=>{"use strict";t.r(s),t.d(s,{createAPI:()=>d});var o=t(1973),l=t(48994),i=t(94082),a=t(12031),m=t(57792),n=t(3542),v=t.n(n),g=Object.defineProperty,_=Object.defineProperties,b=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,w=(u,f,C)=>f in u?g(u,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):u[f]=C,c=(u,f)=>{for(var C in f||(f={}))h.call(f,C)&&w(u,C,f[C]);if(z)for(var C of z(f))k.call(f,C)&&w(u,C,f[C]);return u},p=(u,f)=>_(u,b(f));const d=u=>{const f=y=>{const r={"outside-identity":m.Z.PASSPORT_URL,"event-broadcaster":m.Z.EVENT_CENTER_URL,"sparkling-daydream":m.Z.PTA_URL,"radiant-force-gateway":m.Z.OMS_URL,"silent-majority-gateway":m.Z.UEP_URL,"another-planet-gateway":m.Z.PDS_URL};return(0,n.compact)([r[u.zone],u.path.replaceAll(/\{(\w+)}/g,(A,T)=>`${y[(0,n.camelCase)(T)]}`).replaceAll(":omit",""),u.queries&&`?${(0,a.Oh)((0,n.pick)(y,u.queries))}`]).join("")},C=y=>(0,n.pick)(y,[...u.body||[],...u.part||[]]),e=(0,o.createAction)(u.name,(y={},r={})=>i.default[u.method](f(y),C(y),p(c({},r.http||{}),{formData:!(0,n.isEmpty)(u.part),noCache:(0,l.getCache)().noCache})));return e.getUrl=y=>({action:()=>e(y),url:u.method==="GET"?f(y):`${f(y)}${(0,n.isEmpty)(C(y))?"":`?body=${encodeURIComponent(JSON.stringify(C(y)))}`}`,name:u.name}),e}},52460:(M,s,t)=>{"use strict";t.r(s),t.d(s,{assert:()=>n,check:()=>v,default:()=>m});var o=t(96915),l=t(39027);class i extends l.L{assert(_,b="assert failed!",z=""){if(!_){const h=new Error(b);throw h.label=z,this.emit("error",h),new Error(b)}}}const a=new i,m=a;function n(g,_="assert failed!",b=""){return a.assert(g,_,b)}function v(g,_,b){if(!g)throw new o.h(_,b)}},48994:(M,s,t)=>{"use strict";t.r(s),t.d(s,{clearCache:()=>o,getCache:()=>l,setCache:()=>i});const o=()=>{localStorage.removeItem("user-cache")},l=()=>{try{return JSON.parse(localStorage.getItem("user-cache")||"")||{}}catch(a){return localStorage.removeItem("user-cache"),{}}},i=a=>localStorage.setItem("user-cache",JSON.stringify(Object.assign(l(),a)))},40798:(M,s,t)=>{"use strict";t.r(s),t.d(s,{copy:()=>o,default:()=>l});const o=i=>new Promise((a,m)=>{const n=document.fullscreenElement||document.body,v=document.createElement("textarea");v.style.display="hidden",v.value=i,n.appendChild(v),v.select();try{document.execCommand("copy"),a()}catch(g){m(new Error(g.message))}finally{n.removeChild(v)}}),l={copy:o}},31699:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f,setCurrentUser:()=>C,userService:()=>u});var o=t(39027),l=t(3542),i=t.n(l),a=t(20144),m=Object.defineProperty,n=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,z=(e,y,r)=>y in e?m(e,y,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[y]=r,h=(e,y)=>{for(var r in y||(y={}))_.call(y,r)&&z(e,r,y[r]);if(g)for(var r of g(y))b.call(y,r)&&z(e,r,y[r]);return e},k=(e,y)=>n(e,v(y));const w={info:"",organizationSubdomain:"",id:"0",fake:!1,email:"",nickname:"",organizationId:"",roles:[],phone:"",activate:!0,detail:{gender:"GENDER_NOT_LISTED",birthday:{year:1970,month:1,day:1},phone:"",zipCode:"",studentId:"",graduated:!1,firstName:"",lastName:"",schools:[],experiences:[],intention:"",image:"",skill:"",location:[]},isAdmin:!1,isGuest:!0,isTeacher:!1,isAssistant:!1,isReviewer:!1,isOrganizationAdmin:!1,omsLogin:!1,studentUserLogin:!1,realName:"",emailLogin:!1,phoneLogin:!1,banned:!1,deregistered:!1},c=(e,y)=>{var r;return(r=e==null?void 0:e.roles)==null?void 0:r.includes(y)},p=h({},w);class d extends o.L{}const u=new d,f=p,C=e=>{e?(0,l.assign)(p,k(h({},e),{isAdmin:c(e,"ADMIN"),isTeacher:c(e,"TEACHER"),isGuest:!(0,a.Q)(e==null?void 0:e.id),isAssistant:c(e,"ASSISTANT"),isReviewer:c(e,"REVIEWER")})):(0,l.assign)(e,w),u.emit("update")}},88687:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l,drag:()=>m,registerDraggingContainer:()=>i});const o={dropElementById:{},currentDropElement:null},l=o,i=n=>{o.draggingContainer=n},a=(n,v)=>{var g;const{dropElementById:_}=o;if(!n)return null;if(n.getAttribute("data-drop-id")){const b=((g=n.getAttribute("data-drop-types"))==null?void 0:g.split(","))||[];if(b.length===0||v&&b.includes(v))return _[n.getAttribute("data-drop-id")]}return a(n.parentElement,v)},m=n=>new Promise((v,g)=>{const{draggingContainer:_}=o;_==null||_.setState({dragging:!0,start:n,resolve:({clientX:b,clientY:z})=>{var h;v(),(h=a(document.elementFromPoint(b,z),n.type))==null||h.onDrop(n.data,{clientX:b,clientY:z},n)},reject:g,onMove:({clientX:b,clientY:z})=>{var h,k;const w=a(document.elementFromPoint(b,z),n.type);w!==o.currentDropElement&&(o.currentDropElement&&((h=o.currentDropElement)==null||h.onLeave()),o.currentDropElement=w,(k=o.currentDropElement)==null||k.onEnter())}})})},56955:(M,s,t)=>{"use strict";t.r(s),t.d(s,{closeViewDrawer:()=>k,drawerView:()=>z,registerViewDrawer:()=>h});var o=t(30331),l=t(3542),i=t.n(l),a=Object.defineProperty,m=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(w,c,p)=>c in w?a(w,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):w[c]=p,_=(w,c)=>{for(var p in c||(c={}))n.call(c,p)&&g(w,p,c[p]);if(m)for(var p of m(c))v.call(c,p)&&g(w,p,c[p]);return w};let b;const z=w=>b.setState(_({open:!0,width:"320px"},w)),h=w=>{b=w},k=()=>b.setState(w=>_(_({},(0,l.fromPairs)((0,l.toPairs)(w).map(([c,p])=>[c,void 0]))),o.D))},2350:(M,s,t)=>{"use strict";t.r(s),t.d(s,{getCurrentEdition:()=>g,isMain:()=>m,isPTA:()=>n,isSchool:()=>v});var o=t(57792),l,i;const a=o.Z,m=a.EDITION==="MAIN",n=m&&!((l=a.ORGANIZATION)!=null&&l.code),v=m&&((i=a.ORGANIZATION)==null?void 0:i.code),g=()=>n?"MAIN":v?"SCHOOL":a.EDITION},26903:(M,s,t)=>{"use strict";t.r(s),t.d(s,{closeHintView:()=>b,hintView:()=>_,registerHintContainer:()=>v,reloadHintView:()=>g});var o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(z,h)=>{var k={};for(var w in z)l.call(z,w)&&h.indexOf(w)<0&&(k[w]=z[w]);if(z!=null&&o)for(var w of o(z))h.indexOf(w)<0&&i.call(z,w)&&(k[w]=z[w]);return k};let n={state:{isOpen:!1},setState:z=>{console.log("hint container called with following state:"),console.log(z)},handleToggle:()=>null};const v=z=>{n=z},g=z=>{var h=z,{content:k=null,target:w,placement:c}=h,p=a(h,["content","target","placement"]);n.setState({content:k,target:w,placement:c,props:p})},_=z=>{var h=z,{content:k=null,target:w,placement:c}=h,p=a(h,["content","target","placement"]);n.setState({content:k,target:w,placement:c,props:p},()=>n==null?void 0:n.handleOpen())},b=()=>n==null?void 0:n.handleClose()},2520:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{loadModule:()=>loadModule});var _services_assert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52460),__async=(M,s,t)=>new Promise((o,l)=>{var i=n=>{try{m(t.next(n))}catch(v){l(v)}},a=n=>{try{m(t.throw(n))}catch(v){l(v)}},m=n=>n.done?o(n.value):Promise.resolve(n.value).then(i,a);m((t=t.apply(M,s)).next())});const loadedUrls=[],loadModule=(url,mode="plain")=>__async(void 0,null,function*(){if(loadedUrls.includes(url))return;const response=yield fetch(url);(0,_services_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(response.ok,`Fail to hot load module from ${url} due to network error.`);try{const text=yield response.text();if(mode==="cjs"){const M=new Function("module","exports",text),s={exports:{}};return M(s,s.exports),s.exports}return loadedUrls.push(url),eval(text)}catch(M){(0,_services_assert__WEBPACK_IMPORTED_MODULE_0__.assert)(!M,`Fail to run hot load module from ${url}: ${M.toString()}`)}})},94082:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>T});var o=t(98137),l=t(39027),i=t(3542),a=t(93386),m=t(16935),n=t(11701),v=t(24991),g=t(18121),_=t.n(g);let b="";new(_())().get(V=>{b=V});const z=(()=>{const V=[];let N="";const F=L=>{const[B,P,R,S]=L.split(".").map(I=>parseInt(I,10)&255);return B<<24|P<<16|R<<8|S};return{add:L=>{V.push(L),N=V.map(F).join("%")},get:()=>N}})();function h(){const V=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,N=new V({iceServers:[{urls:"stun:turn.pintia.cn:3478"}]}),F={},L=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;function B(P){F[P]||z.add(P),F[P]=!0}N.createDataChannel(""),N.createOffer(P=>{P.sdp.split(`
`).forEach(R=>{R.indexOf("candidate")<0||R.match(L).forEach(B)}),N.setLocalDescription(P,i.noop,i.noop)},i.noop),N.onicecandidate=P=>{!P||!P.candidate||!P.candidate.candidate||!P.candidate.candidate.match(L)||P.candidate.candidate.match(L).forEach(B)}}try{h()}catch(V){}const k=()=>b,w=z.get;var c=t(12031),p=Object.defineProperty,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,C=(V,N,F)=>N in V?p(V,N,{enumerable:!0,configurable:!0,writable:!0,value:F}):V[N]=F,e=(V,N)=>{for(var F in N||(N={}))u.call(N,F)&&C(V,F,N[F]);if(d)for(var F of d(N))f.call(N,F)&&C(V,F,N[F]);return V};const y=(V,N,F,{formData:L,query:B})=>{const P=`${N.includes("?")?"":"?"}${(0,c.Oh)(V==="GET"?e(e({},B),F):e({},B))}`;return{requestURI:`${N.startsWith("/")?`${N}`:N}${P==="?"?"":P}`,requestBody:(()=>{if(V==="GET")return null;if(F instanceof FormData)return F;if(L){const R=new FormData;return(0,i.toPairs)(F).forEach(([S,I])=>R.append(S,I)),R}return JSON.stringify(F)})()}};class r extends l.L{constructor(){super(...arguments),this.ajax=N=>(F,L={},B=void 0)=>{const P=e({onProgress:i.noop,withCredentials:!0,payment:null,dataHandle:({data:G})=>G,errorHandle:G=>{throw G},outdateHandle:i.noop},B),{onProgress:R=i.noop,formData:S=!1,withCredentials:I=!0,dataHandle:j,errorHandle:W,noCache:t0=!1}=P,{requestURI:q,requestBody:Y}=y(N,F,L||{},{formData:S}),X=new XMLHttpRequest;X.open(N,q),X.withCredentials=I,I&&(X.setRequestHeader("X-Lollipop",k()),X.setRequestHeader("X-Marshmallow",w())),X.setRequestHeader("Accept","application/json;charset=UTF-8"),!S&&I&&X.setRequestHeader("Content-Type","application/json;charset=UTF-8"),X.setRequestHeader("Accept-Language",n.default.language),t0&&X.setRequestHeader("Cache-Control","no-cache");const i0=new Promise((G,J)=>{const r0=p0=>{p0.lengthComputable&&p0.loaded!==p0.total&&R(p0.loaded/p0.total*100)};X.upload.addEventListener("progress",r0),X.addEventListener("progress",r0),X.addEventListener("error",p0=>{R(0),J(new v.L("NETWORK_ERROR",{e:p0}))}),X.addEventListener("abort",()=>{R(0),J(new o._)}),X.addEventListener("load",p0=>{R(100),G({e:p0})})}).then(({e:G})=>{if(this.emit("data",{e:G,requestURI:q}),G.target.status>=500&&G.target.status!==503)throw new v.L("SERVER_ERROR",{e:G});let J={};try{J=JSON.parse(G.target.responseText||"{}")}catch(r0){throw new v.L("PARSE_ERROR",{e:G})}if(J.error){const r0=(0,i.assign)(new Error(J.error.message||J.error.code||J.error),{code:J.error.code||J.error,data:{e:G,data:J,detail:J.error.detail}});throw this.emit("dataError",r0),r0}if(G.target.status>=400&&G.target.status!==402)throw G.target.status===429?new v.L("RATE_LIMIT_EXCEEDED",{e:G}):new v.L("OTHER_HTTP_ERROR",{e:G});return{e:G,data:J,method:N,uri:F,body:L,config:P}}).then(j,W),l0=N==="GET"?m.getQueueByOrigin[new URL(q).origin]:m.otherQueueByOrigin[new URL(q).origin];return l0?l0.enqueue(()=>X.send(Y)):X.send(Y),i0},this.get=(0,a.useCache)(this.ajax("GET")),this.post=this.ajax("POST"),this.put=this.ajax("PUT"),this.patch=this.ajax("PATCH"),this.delete=this.ajax("DELETE"),this.GET=(0,a.useCache)(this.ajax("GET")),this.POST=this.ajax("POST"),this.PUT=this.ajax("PUT"),this.PATCH=this.ajax("PATCH"),this.DELETE=this.ajax("DELETE")}}const T=new r},93386:(M,s,t)=>{"use strict";t.r(s),t.d(s,{HttpCacheService:()=>g,buildCache:()=>v,default:()=>b,useCache:()=>z});var o=t(39027),l=t(3542),i=t.n(l),a=t(48994),m=t(11225),n=t(69958);function v(h,k={}){const{cleanTime:w=3e5,mapValue:c}=k;let p={};try{p=JSON.parse(localStorage.getItem(h)||"")||{}}catch(u){p={}}const d=()=>{const u=Date.now();(0,l.sortBy)((0,l.keys)(p),f=>p[f].time).slice(100).forEach(f=>u-p[f].time>w&&delete p[f]),(0,n.I)(d,w)};return(0,n.I)(d,w),window.addEventListener("unload",()=>{d(),(0,a.setCache)({[h]:JSON.stringify((0,l.mapValues)(p,c||l.identity))})}),p}class g extends o.L{constructor(k,w={cacheTime:1e3}){super(),this.promiseByUrl={},this.invalidate=c=>{delete this.cache[c],delete this.promiseByUrl[c]},this.useCache=c=>(p,d={},u=void 0)=>{if(this.emit("GET",{url:p}),this.cache[p]&&(0,m.now)()-this.cache[p].time<this.cacheTime)return Promise.resolve(this.cache[p].data);if(!this.promiseByUrl[p]){const f=c(p,d,u);this.promiseByUrl[p]=f,f.then(C=>{this.promiseByUrl[p]===f&&(this.cache[p]={data:C,time:(0,m.now)()},this.emit("DONE",{url:p,data:C}))}).catch(C=>{this.promiseByUrl[p]===f&&this.emit("ERROR",{url:p,error:C})}).finally(()=>{this.promiseByUrl[p]===f&&delete this.promiseByUrl[p]})}return new Promise((f,C)=>{const e=({url:r,data:A})=>{p===r&&(f(A),this.off("DONE",e),this.off("ERROR",y))},y=({url:r,error:A})=>{p===r&&(C(A),this.off("DONE",e),this.off("ERROR",y))};this.on("DONE",e),this.on("ERROR",y)})},super.setMaxListeners(50),this.cache=k,this.cacheTime=w.cacheTime}}const _=new g(v("PAT_HTTP_CACHE")),b=_,{useCache:z}=_},16935:(M,s,t)=>{"use strict";t.r(s),t.d(s,{HttpQueue:()=>l,getQueueByOrigin:()=>i,otherQueueByOrigin:()=>a});var o=t(69958);class l{constructor({timeWindow:n,capacity:v}){this.queue=[],this.triggerTimes=[0],this.counter=0,this.dequeue=()=>{const{timer:g,queue:_,triggerTimes:b,capacity:z,timeWindow:h}=this;if(g)return;const k=Date.now();if(_.length){const{fn:w}=_.shift();for(w(),b.push(k);b.length>z;)b.shift();this.timer=(0,o.I)(()=>{this.timer=void 0,this.dequeue()},Math.max(b[0]+h-k,0))}},this.enqueue=g=>{this.counter+=1;const{queue:_,counter:b}=this;return _.push({id:b,fn:g}),this.dequeue(),b},this.leaveQueue=g=>{this.queue=this.queue.filter(({id:_})=>g!==_)},this.timeWindow=n,this.capacity=v}}const i={},a={}},11701:(M,s,t)=>{"use strict";t.r(s),t.d(s,{I18N_KEY:()=>a,default:()=>v,getCommonT:()=>_,getEnumT:()=>b,getInitT:()=>k,getSchemaT:()=>z,getT:()=>h,toggleLanguage:()=>g});const o={error:{name:{ABORT_ERROR:"Operation is aborted",CAPTCHA_ERROR:"Failed captcha check",FILE_TYPE_NOT_SUPPORTED:"Unsupported file type",INVALID_DETECTION_RESULT:"Invalid detection result",INVALID_PROBLEM:"Invalid problem",INVALID_SUBMISSION:"Invalid Submission",MISSING_OR_REJECTED_APPLICATION:"You have not submitted an application or your application has been rejected",NEED_PAYMENT:"This operation needs payment",NETWORK_ERROR:"Network error",OTHER_HTTP_ERROR:"Unknown HTTP error",PARSE_ERROR:"Failed to parse response data",PEER_REVIEW_HOMEWORK_PROBLEM_SET_NO_USER_GROUP:"No user group exists on this peer review problem set",PERMISSION_DENIED:"Permission denied",RATE_LIMIT_EXCEEDED:"Requesting too frequently",SERVER_ERROR:"Server error",USERGROUP_PERMISSION_NOT_EMPTY:"User group permission must not be empty",LOAD_TIMEOUT:"Timeout when loading resources"}},message:{clientOutdated:"New version detected, please refresh",needPayment:"Payment Confirmation",operationSuccessHint:"Operation Success"}},l={error:{name:{ABORT_ERROR:"\u64CD\u4F5C\u88AB\u4E2D\u6B62",CAPTCHA_ERROR:"\u9A8C\u8BC1\u7801\u51FA\u9519",FILE_TYPE_NOT_SUPPORTED:"\u4E0D\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B",INVALID_DETECTION_RESULT:"\u67E5\u91CD\u7ED3\u679C\u4E0D\u5B58\u5728",INVALID_PROBLEM:"\u9898\u76EE\u4E0D\u5B58\u5728",INVALID_SUBMISSION:"\u63D0\u4EA4\u4E0D\u5B58\u5728",MISSING_OR_REJECTED_APPLICATION:"\u60A8\u5C1A\u672A\u7533\u8BF7\u6559\u5E08\u6743\u9650\u6216\u6559\u5E08\u7533\u8BF7\u672A\u901A\u8FC7",NEED_PAYMENT:"\u8BE5\u64CD\u4F5C\u8981\u6C42\u652F\u4ED8",NETWORK_ERROR:"\u7F51\u7EDC\u9519\u8BEF",OTHER_HTTP_ERROR:"\u672A\u77E5HTTP\u9519\u8BEF",PARSE_ERROR:"\u54CD\u5E94\u6570\u636E\u89E3\u6790\u5931\u8D25",PEER_REVIEW_HOMEWORK_PROBLEM_SET_NO_USER_GROUP:"\u4E92\u8BC4\u9898\u76EE\u96C6\u672A\u8BBE\u7F6E\u7528\u6237\u7EC4",PERMISSION_DENIED:"\u65E0\u64CD\u4F5C\u6743\u9650",RATE_LIMIT_EXCEEDED:"\u7F51\u7EDC\u8BF7\u6C42\u9891\u7387\u8D85\u8FC7\u9650\u5236",SERVER_ERROR:"\u670D\u52A1\u5668\u9519\u8BEF",USERGROUP_PERMISSION_NOT_EMPTY:"\u7528\u6237\u7EC4\u6743\u9650\u4E0D\u53EF\u4E3A\u7A7A",LOAD_TIMEOUT:"\u8D44\u6E90\u52A0\u8F7D\u8D85\u65F6"}},message:{clientOutdated:"\u68C0\u6D4B\u5230\u65B0\u7248\u672C, \u8BF7\u5237\u65B0",needPayment:"\u4ED8\u8D39\u786E\u8BA4",operationSuccessHint:"\u64CD\u4F5C\u6210\u529F"}};var i=(w,c,p)=>new Promise((d,u)=>{var f=y=>{try{e(p.next(y))}catch(r){u(r)}},C=y=>{try{e(p.throw(y))}catch(r){u(r)}},e=y=>y.done?d(y.value):Promise.resolve(y.value).then(f,C);e((p=p.apply(w,c)).next())});const a="i18nextLng";class m{constructor(){this.loadTranslation=()=>i(this,null,function*(){this.language==="zh-CN"&&(yield Promise.all([t.e(8564).then(t.bind(t,78564)).then(d=>d.default),t.e(2406).then(t.bind(t,92406)).then(d=>d.default),t.e(1322).then(t.bind(t,31322)).then(d=>d.default),t.e(7977).then(t.bind(t,57977)).then(d=>d.default)]).then(([d,u,f,C])=>{this.translationEnums=d,this.translationSchemas=u,this.translationCommon=f,this.translation=C})),this.language==="en"&&(yield Promise.all([t.e(7766).then(t.bind(t,77766)).then(d=>d.default),t.e(6663).then(t.bind(t,96663)).then(d=>d.default),t.e(7086).then(t.bind(t,77086)).then(d=>d.default),t.e(1003).then(t.bind(t,51003)).then(d=>d.default)]).then(([d,u,f,C])=>{this.translationEnums=d,this.translationSchemas=u,this.translationCommon=f,this.translation=C}))}),this.setLanguage=d=>{d!==this.language&&(this.language=d,localStorage.setItem(a,d),window.location.reload(),document.documentElement.lang=d)};var c;const p=(c=window.localStorage)==null?void 0:c.getItem(a);p?this.language=p==="en"?"en":"zh-CN":this.language=(window.navigator.language||"").startsWith("en")?"en":"zh-CN",this.language==="zh-CN"&&(this.translationInit=l),this.language==="en"&&(this.translationInit=o),document.documentElement.lang=this.language}}const n=new m,v=n,g=()=>n.setLanguage(n.language!=="zh-CN"?"zh-CN":"en"),_=()=>n.translationCommon,b=()=>n.translationEnums,z=()=>n.translationSchemas,h=()=>n.translation,k=()=>n.translationInit},59144:(M,s,t)=>{"use strict";t.r(s),t.d(s,{compressImage:()=>m,getImageURL:()=>a});var o=t(57792),l=t(24991),i=(n,v,g)=>new Promise((_,b)=>{var z=w=>{try{k(g.next(w))}catch(c){b(c)}},h=w=>{try{k(g.throw(w))}catch(c){b(c)}},k=w=>w.done?_(w.value):Promise.resolve(w.value).then(z,h);k((g=g.apply(n,v)).next())});HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value(n,v,g){const _=atob(this.toDataURL(v,g).split(",")[1]),b=_.length,z=new Uint8Array(b);for(let h=0;h<b;h+=1)z[h]=_.charCodeAt(h);n(new Blob([z],{type:v||"image/png"}))}});const a=n=>n?/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\.\w+$/.test(n)?`${o.Z.IMAGE_HOST}/${n}`:n.replace(/^~/,o.Z.IMAGE_HOST).replace(/^\{(.*?)}/,(v,g)=>o.Z[g]):"",m=(n,...v)=>i(void 0,[n,...v],function*(g,{maxWidthOrHeight:_}={maxWidthOrHeight:2048}){if(!/^image\/(png|jpeg|bmp|webp)$/i.test(g.type))throw new l.L("FILE_TYPE_NOT_SUPPORTED");const b=new FileReader,z=yield new Promise((p,d)=>{b.addEventListener("load",()=>p(b.result)),b.addEventListener("error",d),b.readAsDataURL(g)}),h=document.createElement("canvas"),k=document.createElement("img");if(yield new Promise((p,d)=>{k.addEventListener("load",p),k.addEventListener("error",d),k.src=z}),k.width<=_&&k.height<=_)return g;const[w,c]=k.width<=_&&k.height<=_?[k.width,k.height]:k.width<k.height?[_*k.width/k.height,_]:[_,_*k.height/k.width];h.width=w,h.height=c,h.getContext("2d").drawImage(k,0,0,w,c);try{return new File([yield new Promise(p=>{h.toBlob(d=>p(d),g.type)})],g.name,{type:g.type,lastModified:g.lastModified})}catch(p){return g}})},15485:(M,s,t)=>{"use strict";t.r(s),t.d(s,{getStepByIntroKeyAndStepKey:()=>f,registerIntroStepOption:()=>u,removeIntroStepOptions:()=>C,startIntro:()=>e});var o=t(72461);const i={problemSetDashboardIntro:["problemSetDashboardIntroUserGroup","problemSetDashboardIntroLoginType","problemSetDashboardIntroPaperSetting","problemSetDashboardIntroIntroTip"],examManageIntro:["examManageIntroAddExam","examManageIntroSetExaminees","examManageIntroSetSupervisor","examManageIntroIntroTip"],examDetailIntro:["examDetailIntroAlertTip","examDetailIntroExamManage","examDetailIntroRelationProblemSet","examDetailIntroIntroTip"]};var a=t(37523),m=t(229),n=Object.defineProperty,v=Object.defineProperties,g=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,h=(y,r,A)=>r in y?n(y,r,{enumerable:!0,configurable:!0,writable:!0,value:A}):y[r]=A,k=(y,r)=>{for(var A in r||(r={}))b.call(r,A)&&h(y,A,r[A]);if(_)for(var A of _(r))z.call(r,A)&&h(y,A,r[A]);return y},w=(y,r)=>v(y,g(r)),c=(y,r)=>{var A={};for(var T in y)b.call(y,T)&&r.indexOf(T)<0&&(A[T]=y[T]);if(y!=null&&_)for(var T of _(y))r.indexOf(T)<0&&z.call(y,T)&&(A[T]=y[T]);return A};const p={},d={steps:[],nextLabel:"\u4E0B\u4E00\u6B65",prevLabel:"\u4E0A\u4E00\u6B65",doneLabel:"\u5B8C\u6210",scrollToElement:!1,exitOnOverlayClick:!1},u=(y,r)=>{if(!p[y]){p[y]=[r];return}p[y].find(({stepKey:A})=>A===r.stepKey)||p[y].push(r)},f=(y,r)=>{const A=i[y];if(A){const T=A.findIndex(V=>r===V);if(T!==-1)return T}},C=y=>delete p[y],e=y=>{const r=p[y];r&&(0,a.Z)().setOptions(w(k({},d),{steps:r.toSorted((A,T)=>(A.step||0)-(T.step||0)).map(A=>{var T=A,{stepKey:V,content:N}=T,F=c(T,["stepKey","content"]);return w(k({},F),{intro:N,element:`.${V}`})})})).onbeforechange(A=>(A.scrollIntoView({behavior:"instant"}),!0)).onexit(()=>(0,o.D5)({name:y,value:"true"},{message:!1}).then()).start()}},81869:(M,s,t)=>{"use strict";t.r(s),t.d(s,{GTag:()=>i,logError:()=>v,logEvent:()=>_,setLoggers:()=>n,setPage:()=>z,setUsername:()=>b});var o=t(3542);const l={SET_REFERRER_CODE:{name:"SET_REFERRER_CODE",label:"\u8BBE\u7F6E\u5F15\u8350\u7801"},ADD_EXAM_REGISTRATION:{name:"ADD_EXAM_REGISTRATION",label:"\u521B\u5EFA\u62A5\u540D"},PAY_EXAM_REGISTRATION:{name:"PAY_EXAM_REGISTRATION",label:"\u4ED8\u6B3E"},ADD_REG_USER:{name:"ADD_REG_USER",label:"\u521B\u5EFA\u62A5\u540D\u8D26\u6237"},VERIFY_REG_USER:{name:"VERIFY_REG_USER",label:"\u5B9E\u4EBA\u8BA4\u8BC1"},VERIFY_REG_USER_SUCCESS:{name:"VERIFY_REG_USER_SUCCESS",label:"\u5B9E\u4EBA\u8BA4\u8BC1\u901A\u8FC7"},ADD_EXAM:{name:"ADD_EXAM",label:"\u521B\u5EFA\u76D1\u8003\u8003\u8BD5"},ADD_PROBLEM_SET:{name:"ADD_PROBLEM_SET",label:"\u521B\u5EFA\u9898\u76EE\u96C6"},ADD_USER_GROUP:{name:"ADD_USER_GROUP",label:"\u521B\u5EFA\u7528\u6237\u7EC4"},START_EXAM:{name:"START_EXAM",label:"\u5F00\u8003"},REGISTER:{name:"REGISTER",label:"\u6CE8\u518C\u7528\u6237"},LOGIN:{name:"LOGIN",label:"\u767B\u5F55"},BIND_STUDENT_USER:{name:"BIND_STUDENT_USER",label:"\u7ED1\u5B9A\u5B66\u53F7"}};class i{constructor(k){this.sendUserId=c=>{this.gtag("config",this.tagID,{user_id:c})},this.sendPageView=c=>{this.gtag("event","page_view",{page_location:c})},this.sendEvent=(c,p)=>{this.gtag("event",c,p)},this.tagID=k;const w=document.createElement("script");w.async=!0,w.src=`https://www.googletagmanager.com/gtag/js?id=${this.tagID}`,document.body.appendChild(w),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},this.gtag=window.gtag,this.gtag("js",new Date),this.gtag("config",this.tagID,{send_page_view:!1})}}let a,m;const n=h=>{a=h.aLogger,m=h.gLogger},v=(h,k)=>{var w;return(w=a.error)==null?void 0:w.call(a,h,k)},g=(h,k=1)=>{var w;return(w=a.sum)==null?void 0:w.call(a,h,k)},_=(h,k)=>{m.sendEvent(h,k);const w=[l[h].label,...k!=null&&k.referrerCode?["\u5F15\u8350\u7801",k.referrerCode]:[]];(0,o.range)(0,w.length).forEach(c=>g(`${w.slice(0,c+1).join("_")}$`))},b=h=>{var k;m.sendUserId(h),(k=a.setUsername)==null||k.call(a,()=>h)},z=()=>{var h;m.sendPageView(window.location.host+window.location.pathname),(h=a.setPage)==null||h.call(a,window.location.host+window.location.pathname,!1)}},74756:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g});var o=t(39027);const l=640,i=768,a=1024,m=1280;class n extends o.L{constructor(){super(...arguments),this.theme="light",this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.versionOutdated=!1,this.setTheme=b=>{this.theme=b,this.emit("updateTheme")},this.setWidth=b=>{const z=b>=l,h=b>=i,k=b>=a,w=b>=m,c=z!==this.sm,p=h!==this.md,d=k!==this.lg,u=w!==this.xl;this.sm=z,this.md=h,this.lg=k,this.xl=w,c&&this.emit("updateSm"),p&&this.emit("updateMd"),d&&this.emit("updateLg"),u&&this.emit("updateXl")},this.setVersionOutdated=b=>{this.versionOutdated=b,this.emit("updateVersionOutdated")}}}const g=new n},66467:(M,s,t)=>{"use strict";t.r(s),t.d(s,{closeConfirmModal:()=>o.closeConfirmModal,closeFormModal:()=>o.closeFormModal,closeViewModal:()=>o.closeViewModal,modalConfirm:()=>o.modalConfirm,modalForm:()=>o.modalForm,modalView:()=>o.modalView});var o=t(6372)},95608:(M,s,t)=>{"use strict";t.r(s),t.d(s,{getName:()=>v});var o=t(58707);const l=(0,o.createAPI)({zone:"sparkling-daydream",service:"Naming",name:"BatchGetName",method:"POST",type:"QUERY",path:"/api/names",body:["userIds","studentUserIds","problemSetIds","organizationIds","userGroupIds"]});var i=t(41512),a=t(3542),m=(g,_,b)=>new Promise((z,h)=>{var k=p=>{try{c(b.next(p))}catch(d){h(d)}},w=p=>{try{c(b.throw(p))}catch(d){h(d)}},c=p=>p.done?z(p.value):Promise.resolve(p.value).then(k,w);c((b=b.apply(g,_)).next())});const n=new i.N({initialKeys:{userIds:[],studentUserIds:[],problemSetIds:[],organizationIds:[]},mergeKeys:({userIds:g,studentUserIds:_,problemSetIds:b,organizationIds:z},h)=>({userIds:(0,a.uniq)([...h.userIds,...g]),studentUserIds:(0,a.uniq)([...h.studentUserIds,..._]),problemSetIds:(0,a.uniq)([...h.problemSetIds,...b]),organizationIds:(0,a.uniq)([...h.organizationIds,...z])}),batchGetValues:g=>l(g,{message:!1})}),v=g=>m(void 0,[g],function*({userId:_,studentUserId:b,problemSetId:z,organizationId:h}){return n.getValues({userIds:_?[_]:[],studentUserIds:b?[b]:[],problemSetIds:z?[z]:[],organizationIds:h?[h]:[]}).then(({userNames:k,studentUserNames:w,problemSetNames:c,organizationNames:p})=>({user:_?k[_]:void 0,studentUser:b?w[b]:void 0,problemSetName:z?c[z]:void 0,organizationName:h?p[h]:void 0}))})},62065:(M,s,t)=>{"use strict";t.r(s),t.d(s,{browserNotification:()=>z,default:()=>_,notificationStyle:()=>b,registerNotificationSystem:()=>a});var o=t(3542);const l=t.p+"3ab58c973a306c1f9404.mp3";var i=(h,k,w)=>new Promise((c,p)=>{var d=C=>{try{f(w.next(C))}catch(e){p(e)}},u=C=>{try{f(w.throw(C))}catch(e){p(e)}},f=C=>C.done?c(C.value):Promise.resolve(C.value).then(d,u);f((w=w.apply(h,k)).next())});window.notify=console.error;const a=h=>{window.notify=k=>h.addNotification(k)},m=(0,o.throttle)(h=>window.notify({level:"success",message:h,position:"tc"}),2e3,{trailing:!1}),n=(0,o.throttle)(h=>window.notify({level:"warning",message:h,position:"tc"}),2e3,{trailing:!1}),v=(0,o.throttle)(h=>window.notify({level:"error",message:typeof h=="string"?h:h.message,position:"tc"}),2e3,{trailing:!1}),g={info:m,error:v,warn:n},_=g,b={NotificationItem:{DefaultStyle:{borderTop:null,borderRadius:1,color:"#fff"},error:{borderColor:"#d64745",backgroundColor:"#d64745"},info:{borderColor:"#31a3d8",backgroundColor:"#31a3d8"},success:{borderColor:"#17a69b",backgroundColor:"#17a69b"},warning:{borderColor:"#ee7528",backgroundColor:"#ee7528"}},Dismiss:{DefaultStyle:{backgroundColor:null}}},z=h=>i(void 0,[h],function*({title:k="",body:w}){try{if(new Audio(l).play(),!Notification||Notification.permission==="denied")throw new Error("Notification Permission Denied.");return yield Notification.requestPermission().then(c=>{if(c!=="granted")throw new Error(c)}),new Notification(k,{body:w,silent:!0})}catch(c){return g.info(w)}})},6372:(M,s,t)=>{"use strict";t.r(s),t.d(s,{closeConfirmModal:()=>C,closeConfirmPop:()=>V,closeFormModal:()=>e,closeFormPop:()=>N,closeViewModal:()=>y,closeViewPop:()=>F,default:()=>p,modalConfirm:()=>d,modalForm:()=>u,modalView:()=>f,popConfirm:()=>r,popForm:()=>A,popView:()=>T});var o=t(39027),l=t(3542),i=t.n(l),a=t(69958),m=Object.defineProperty,n=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,z=(L,B,P)=>B in L?m(L,B,{enumerable:!0,configurable:!0,writable:!0,value:P}):L[B]=P,h=(L,B)=>{for(var P in B||(B={}))_.call(B,P)&&z(L,P,B[P]);if(g)for(var P of g(B))b.call(B,P)&&z(L,P,B[P]);return L},k=(L,B)=>n(L,v(B));class w extends o.L{}const c=new w,p=c,d=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openConfirmModal",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),u=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openFormModal",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),f=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openViewModal",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),C=L=>{(0,a.I)(()=>c.emit("closeConfirmModal",L),0)},e=L=>{(0,a.I)(()=>c.emit("closeFormModal",L),0)},y=()=>{(0,a.I)(()=>c.emit("closeViewModal"),0)},r=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openConfirmPop",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),A=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openFormPop",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),T=L=>new Promise((B,P)=>{(0,a.I)(()=>c.emit("openViewPop",k(h({},L),{resolve:B,reject:P,id:(0,l.uniqueId)()})),0)}),V=L=>{(0,a.I)(()=>c.emit("closeConfirmPop",L),0)},N=L=>{(0,a.I)(()=>c.emit("closeFormPop",L),0)},F=()=>{(0,a.I)(()=>c.emit("closeViewPop"),0)}},84098:(M,s,t)=>{"use strict";t.r(s),t.d(s,{closeConfirmPop:()=>o.closeConfirmPop,closeFormPop:()=>o.closeFormPop,closeViewPop:()=>o.closeViewPop,popConfirm:()=>o.popConfirm,popForm:()=>o.popForm,popView:()=>o.popView});var o=t(6372)},54492:(M,s,t)=>{"use strict";t.r(s),t.d(s,{publicPathCache:()=>m});var o=t(39027);const l="PUBLIC_PATH_CACHE",i="PUBLIC_PATH_CACHE_TTL";class a extends o.L{get(){try{if(!t.g.localStorage)return null;const v=t.g.localStorage.getItem(l),g=t.g.localStorage.getItem(i);if(v&&g){const _=parseInt(g,10);if(Date.now()-_>864e5)return this.clear(),null}return v}catch(v){return console.error("Failed to get CDN URL:",v),null}}set(v){try{const g=localStorage.getItem(l),_=localStorage.getItem(i);localStorage.setItem(l,v),(v!==g||!_)&&localStorage.setItem(i,Date.now().toString()),this.emit("change",v)}catch(g){console.error("Failed to set CDN URL:",g)}}clear(){try{localStorage.removeItem(l),localStorage.removeItem(i),this.emit("change",null)}catch(v){console.error("Failed to clear CDN URL:",v)}}}const m=new a},11335:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>f,reload:()=>C});var o=t(29103),l=t(52460),i=t(3542),a=t.n(i),m=t(1973),n=t(93386),v=Object.defineProperty,g=Object.defineProperties,_=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,k=(e,y,r)=>y in e?v(e,y,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[y]=r,w=(e,y)=>{for(var r in y||(y={}))z.call(y,r)&&k(e,r,y[r]);if(b)for(var r of b(y))h.call(y,r)&&k(e,r,y[r]);return e},c=(e,y)=>g(e,_(y)),p=(e,y,r)=>new Promise((A,T)=>{var V=L=>{try{F(r.next(L))}catch(B){T(B)}},N=L=>{try{F(r.throw(L))}catch(B){T(B)}},F=L=>L.done?A(L.value):Promise.resolve(L.value).then(V,N);F((r=r.apply(e,y)).next())});class d{constructor(y,r,A){this.reloadInfoById={},this.instanceById={},this.currentResolveId=void 0,this.currentActionType=void 0,this.reloadActionTypes=T=>{const V=(0,i.fromPairs)(T.map(N=>[N,!0]));return(0,i.values)(this.reloadInfoById).forEach(({urlsByActionType:N})=>{(0,i.keys)(N).filter(F=>V[F]).map(F=>N[F].forEach(L=>{this.httpCacheService.invalidate(L)}))}),Promise.all((0,i.values)(this.reloadInfoById).filter(({urlsByActionType:N})=>(0,i.keys)(N).find(F=>V[F])).map(({reload:N})=>N(!0)))},this.reload=T=>p(this,null,function*(){if(T)return typeof T=="string"?T==="all"?Promise.all((0,i.values)(this.instanceById).map(V=>V.reload(!0))):Promise.all((0,i.values)(this.instanceById).filter(V=>V.props.reloadName===T).map(V=>V.reload(!0))):this.reloadActionTypes(T.map(V=>V.toString()))}),this.httpCacheService=n.default,y.on("MOUNT",({id:T,instance:V})=>{this.instanceById[T]=V,this.reloadInfoById[T]={reload:V.reload,urlsByActionType:{}}}),y.on("UNMOUNT",({id:T})=>{delete this.instanceById[T],delete this.reloadInfoById[T]}),y.on("RELOAD",({id:T})=>{(0,i.flatten)((0,i.values)(this.reloadInfoById[T].urlsByActionType)).forEach(V=>{this.httpCacheService.invalidate(V)})}),y.on("BEFORE_RESOLVE_INIT",({id:T})=>{this.currentResolveId=T,this.reloadInfoById[T].urlsByActionType={}}),y.on("AFTER_RESOLVE_INIT",({id:T})=>{(0,l.assert)(T===this.currentResolveId,`currentResolveId does not match! (currentResolveId: ${this.currentResolveId}, id: ${T})`),this.currentResolveId=void 0}),r.on("BEFORE_INIT",({type:T})=>{if(this.currentResolveId){const V=this.reloadInfoById[this.currentResolveId];V.urlsByActionType=c(w({},V.urlsByActionType),{[T]:V.urlsByActionType[T]||[]}),this.currentActionType=T}}),r.on("AFTER_INIT",({type:T})=>{this.currentResolveId&&((0,l.assert)(T===this.currentActionType,`currentActionType does not match! (currentActionType: ${this.currentActionType}, type: ${T})`),this.currentActionType=void 0)}),A.on("GET",({url:T})=>{this.currentResolveId&&this.currentActionType&&this.reloadInfoById[this.currentResolveId].urlsByActionType[this.currentActionType].push(T)})}}const u=new d(o.default,m.default,n.default),f=u,{reload:C}=u},29103:(M,s,t)=>{"use strict";t.r(s),t.d(s,{ResolveService:()=>l,default:()=>a});var o=t(39027);class l extends o.L{constructor(){super(...arguments),this.defaultOptions={},this.count=0,this.cache={}}}const a=new l},18667:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var o=t(25606),l=t(39027),i=t(80129),a=t.n(i),m=Object.defineProperty,n=Object.defineProperties,v=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,z=(u,f,C)=>f in u?m(u,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):u[f]=C,h=(u,f)=>{for(var C in f||(f={}))_.call(f,C)&&z(u,C,f[C]);if(g)for(var C of g(f))b.call(f,C)&&z(u,C,f[C]);return u},k=(u,f)=>n(u,v(f));const w=u=>k(h({},u),{pathname:u.pathname,query:a().parse(u.search,{ignoreQueryPrefix:!0})});class c extends l.L{constructor(f){super(),this.blockers=[],this.listen=C=>this.history.listen((e,y)=>(e.pathname!==this.location.pathname&&window.scrollTo(0,0),this.location=w(e),this.length=this.history.length,C(this.location,y))),this.push=(C,e)=>{this.history.push(C,e),this.emit("change")},this.replace=(C,e)=>{this.history.replace(C,e),this.emit("change")},this.createHref=C=>this.history.createHref(k(h({},C),{search:`?${a().stringify(C.query)}`})),this.updateQuery=(C,e="push")=>{const y=this.createHref(k(h({},this.location),{query:h(h({},this.location.query),C)}));return e==="push"?this.push(y):this.replace(y)},this.block=C=>(this.blockers.push(C),()=>this.blockers.splice(this.blockers.findIndex(e=>C===e),1)),this.goBack=()=>this.history.goBack(),this.go=C=>this.history.go(C),this.setMaxListeners(200),this.history=f,this.length=this.history.length,this.location=w(this.history.location),f.block((C,e)=>{const y=this.blockers.find(r=>r(C,e));if(y)return y(C,e)})}}const d=new c((0,o.lX)())},4507:(M,s,t)=>{"use strict";t.r(s),t.d(s,{scrollByHashChanges:()=>i});var o=t(25606),l=t(69958);const i=(a,m)=>{const n=(0,o.ob)(m);n.hash&&a.button===0&&!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&(0,l.I)(()=>{var v;(v=document.getElementById(n.hash.substring(1)))==null||v.scrollIntoView({behavior:"smooth"})},0)}},5793:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>k,stompClient:()=>b});var o=t(57244),l=t.n(o),i=t(3542),a=t.n(i),m=t(52460),n=t(74272),v=t(57792),g=t(39027);class _ extends g.L{constructor(){super(),this.hidden=!1,this.subscriptionCount=0,this.maxConnectionAttempts=3,this.currentTry=0,this.setHidden=c=>{this.hidden=c,c?this.stompClient.active&&this.stompClient.deactivate():this.subscriptionCount>0&&!this.stompClient.active&&this.stompClient.activate()},this.stompClient=new o.Client({webSocketFactory:()=>new WebSocket(`${v.Z.EVENT_CENTER_URL}/event`),beforeConnect:()=>{this.currentTry+=1,this.currentTry>this.maxConnectionAttempts&&(this.stompClient.deactivate(),this.currentTry=0,this.emit("ERROR",new Error(`Exceeds max attempts (${this.maxConnectionAttempts}), will not try to connect now`)))},debug:n.x?c=>this.emit("DEBUG",c):i.noop}),this.stompClient.onConnect=()=>{this.emit("CONNECT"),this.currentTry>1&&(this.emit("RECONNECT"),this.currentTry=0)}}subscribe(c,p){let d;const u=()=>p({body:JSON.stringify({type:"RECONNECT"})}),f=()=>{this.stompClient.connected&&(d=this.stompClient.subscribe(c,p),this.once("RECONNECT",u))};return f(),this.addListener("CONNECT",f),!this.stompClient.active&&!this.hidden&&this.stompClient.activate(),this.subscriptionCount+=1,()=>{d&&d.unsubscribe(),this.removeListener("CONNECT",f),this.removeListener("RECONNECT",u),this.subscriptionCount-=1,!this.subscriptionCount&&this.stompClient.active&&(this.stompClient.deactivate(),this.currentTry=0)}}}const b=new _;class z extends g.L{constructor(){super(...arguments),this.subscriberByEvent={}}addListener(c,p){return this.subscriberByEvent[c]?this.subscriberByEvent[c].count+=1:this.subscriberByEvent[c]={count:1,unsubscribe:b.subscribe(`/topic/binlog/${c}`,d=>this.emit(c,d))},super.addListener(c,p)}removeListener(c,p){const d=this.subscriberByEvent[c];return(0,m.assert)(d,`removeListener ${c} not found`),d.count-=1,d.count<=0&&(d.unsubscribe(),delete this.subscriberByEvent[c]),super.removeListener(c,p)}}const k=new z},67836:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>b});var o=t(98137),l=t(3542);function i(z,h){return new Promise((k,w)=>{const c=document.createElement("script");c.type="text/javascript",c.charset="utf8",c.async=!0,c.src=z,(0,l.toPairs)(h).forEach(([p,d])=>{c.setAttribute(p,d)}),"onload"in c||(c.onreadystatechange=()=>{this.readyState!=="complete"&&this.readyState!=="loaded"||(this.onreadystatechange=null,k())}),c.onload=()=>{c.onerror=null,c.onload=null,k()},c.onerror=()=>{c.onerror=null,c.onload=null,w(new Error(`Failed to load ${this.src}`))},(document.head||document.getElementsByTagName("head")[0]).appendChild(c)})}var a=t(13385);class m{constructor(h,k,w){this.show=()=>this.instance$.then(c=>c.show()),this.destroy=()=>this.instance$.then(c=>c.destroy()),this.getTicket=()=>this.instance$.then(c=>c.getTicket()),this.instance$=(0,a.ek)(i("https://turing.captcha.qcloud.com/TCaptcha.js"),3e4,new Error("\u9A8C\u8BC1\u7801\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5")).then(()=>new window.TencentCaptcha(h,k,w))}}var n=t(24991),v=(z,h,k)=>new Promise((w,c)=>{var p=f=>{try{u(k.next(f))}catch(C){c(C)}},d=f=>{try{u(k.throw(f))}catch(C){c(C)}},u=f=>f.done?w(f.value):Promise.resolve(f.value).then(p,d);u((k=k.apply(z,h)).next())});const g="194593025",_={instance:void 0,resolveFn:l.noop,rejectFn:l.noop};function b(){return v(this,null,function*(){return new Promise((z,h)=>{_.resolveFn=z,_.rejectFn=h,_.instance||(_.instance=new m(g,k=>{k.ret===0&&!k.errorCode?_.resolveFn({ticket:k.ticket,randStr:k.randstr}):k.ret===2?_.rejectFn(new o._):_.rejectFn(new n.L("CAPTCHA_ERROR",k))})),_.instance.show().catch(h)})})}},11225:(M,s,t)=>{"use strict";t.r(s),t.d(s,{now:()=>i,nowISO:()=>a,setServerTime:()=>l});let o=0;const l=m=>{m&&(o=new Date(m).getTime()-Date.now())},i=()=>Date.now()+o,a=()=>new Date(i()).toISOString()},7481:(M,s,t)=>{"use strict";t.r(s),t.d(s,{Easing:()=>o.oY,Group:()=>o.ZA,Interpolation:()=>o.wf,Sequence:()=>o.T9,Tween:()=>o.kX,VERSION:()=>o.q4,add:()=>o.IH,getAll:()=>o.go,nextId:()=>o.To,now:()=>o.zO,remove:()=>o.Od,removeAll:()=>o.xY,update:()=>o.Vx});var o=t(66792);let l=!1;const i=new o.ZA,a=()=>{i.update(),l=i.getAll().length>0,l&&requestAnimationFrame(a)},m=()=>{l||(l=!0,requestAnimationFrame(a))},n=Reflect.get(o.kX.prototype,"start");o.kX.prototype.start=function(g){return i.getAll().includes(this)||i.add(this),m(),Reflect.apply(n,this,[g])}},58174:(M,s,t)=>{"use strict";t.r(s),t.d(s,{setUepUser:()=>m,uepUser:()=>a});var o=t(3542),l=t.n(o);const i={ptaUserId:"0",regUserId:"0",adminUserId:"0",locationById:{},schoolById:{},supervisorId:"0",schoolManagers:[],locationManagers:[]},a=i,m=(n=i)=>{(0,o.assign)(a,n)}},80589:(M,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i,setUserFeatures:()=>a});const l=[],i=l,a=m=>{l.length=0,l.push(...m)}},6180:(M,s,t)=>{"use strict";t.r(s),t.d(s,{getWechatOauthUrl:()=>m,getWeixinJSBridge:()=>i,isWechatBrowser:()=>a});var o=t(69958),l=t(57792);const i=()=>new Promise((n,v)=>{let g=0;g=setInterval(()=>{window.WeixinJSBridge&&(clearInterval(g),n(window.WeixinJSBridge))},1e3),(0,o.I)(()=>{clearInterval(g),v(new Error("\u5524\u8D77\u5931\u8D25\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u8BD5"))},5e3)}),a=()=>/MicroMessenger/i.test(navigator.userAgent),m=n=>{const v=encodeURIComponent(/^https?/.test(n)?n:`${l.Z.PTA_URL}${n}`),g=encodeURIComponent(`${l.Z.PASSPORT_URL}/api/oauth/wechat/official-account/redirect-and-login?redirectUrl=${v}`);return`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${l.Z.WX_APP_ID}&redirect_uri=${g}&response_type=code&scope=snsapi_userinfo&state=STATE&forcePopup=true#wechat_redirect`}},49502:(M,s,t)=>{"use strict";t.d(s,{W8:()=>n,ZP:()=>v,f8:()=>m,oH:()=>a});var o=t(3542),l=t.n(o),i=t(54492);const a=!1,m={SCRATCH_URL:"https://static.pintia.cn/scratch/index.html",SCRATCH_PLAYER_URL:"https://static.pintia.cn/scratch/player.html",GIT_COMMIT_HASH:"git-commit-hash",COMPANY_URL:"https://www.pat-edu.com/",BLOG_URL:"https://blog.pintia.cn/",ZHIHU_URL:"https://zhuanlan.zhihu.com/pintia",DOCS_URL:"https://pintia.cn/help",CAPTCHA_ID:"391ca36f21a94c13a2d37eaa23316580",HANDSONTABLE_KEY:"non-commercial-and-evaluation",iceServers:[{urls:"stun:turn.pintia.cn:3478"},{urls:"stun:173.194.202.127:19302"},{urls:"stun:[2607:f8b0:400e:c00::7f]:19302"},{urls:"stun:stun.l.google.com:19302"}],PTA_URL:"https://pintia.cn",IMAGE_HOST:"https://images.ptausercontent.com",UEP_IMAGE_HOST:"https://cdn.pintia.cn/UEP_PUBLIC",UEP_USER_IMAGE_HOST:"https://cdn.pintia.cn/UEP_USER_PHOTOS",CDN_URL:i.publicPathCache.get()||"//static.pintia.cn/gplt/",ACTIVITY_URL:"https://activity.pintia.cn",OMS_URL:"https://oms.pintia.cn",PASSPORT_URL:"https://passport.pintia.cn",PDS_URL:"https://pds.pintia.cn",SJ_URL:"https://sj.pintia.cn",UEP_URL:"https://uep.pintia.cn",PAT_URL:"https://www.patest.cn",PPL_URL:"https://ppl.patest.cn",TCTY_URL:"https://tcty.patest.cn",ICPC_URL:"https://icpc.patest.cn",CCPC_URL:"https://ccpc.patest.cn",EVENT_CENTER_URL:"wss://live.pintia.cn",ZOJ_URL:"https://zoj.pintia.cn",CONTENTFUL_URL:"https://contentful.ptausercontent.com",OMS_WATCH_URL:"wss://oms.pintia.cn/watch.ws",GPLT_URL:"https://gplt.pintia.cn",GPLT_NOS_URL:"https://gpltprod.ptausercontent.com",AI_URL:"https://scf.pintia.cn",ENV:"production",SCHOOL_LOGO_HOST:"https://gpltprod.ptausercontent.com",contentful:{spaceId:"18pi2fb74tmp",accessToken:"ecaad61a620f6d12f0cb9147b8e91f5db840b7c71863b235f1e161ba6d3e6f28"},PAGE_LIMIT:30,WX_APP_ID:"wx75730160d67a58cb"},n={SCRATCH_URL:"https://static.pintia.cn/scratch/dev.html",SCRATCH_PLAYER_URL:"https://static.pintia.cn/scratch/player-dev.html",PTA_URL:"https://dev.pintia.cn",IMAGE_HOST:"https://cdn-dev.pintia.cn/PTA_PUBLIC",UEP_IMAGE_HOST:"https://cdn-dev.pintia.cn/UEP_PUBLIC",UEP_USER_IMAGE_HOST:"https://cdn-dev.pintia.cn/UEP_USER_PHOTOS",ACTIVITY_URL:"https://activity-dev.pintia.cn",OMS_URL:"https://oms-dev.pintia.cn",PASSPORT_URL:"https://passport-dev.pintia.cn",PDS_URL:"https://pds-dev.pintia.cn",SJ_URL:"https://sj-dev.pintia.cn",UEP_URL:"https://uep-dev.pintia.cn",PAT_URL:"https://dev.patest.cn",PPL_URL:"https://ppl-dev.patest.cn",GPLT_URL:"https://gplt-dev.pintia.cn",GPLT_NOS_URL:"https://dev-1306810468.cos.ap-shanghai.myqcloud.com/GPLT",TCTY_URL:"https://tcty-dev.patest.cn",ICPC_URL:"https://icpc-dev.patest.cn",CCPC_URL:"https://ccpc-dev.patest.cn",EVENT_CENTER_URL:"wss://live-dev.pintia.cn",ZOJ_URL:"https://zoj-dev.pintia.cn",CONTENTFUL_URL:"https://preview.contentful.com",OMS_WATCH_URL:"wss://oms-dev.pintia.cn/watch.ws",AI_URL:"https://scf.pintia.cn",ENV:"development",SCHOOL_LOGO_HOST:"https://gpltprod.ptausercontent.com",contentful:{spaceId:"18pi2fb74tmp",accessToken:"930ef565b22f83400c9ed6fa2333bd783a2a7d42805d952c3bceb0776263a094"},WX_APP_ID:"wx75730160d67a58cb"},v=(0,o.merge)({},m,a?n:{})},86977:(M,s,t)=>{"use strict";t.d(s,{P:()=>l});var o=t(1973);const l=(i,a)=>o.default.createAction(i,a)},13385:(M,s,t)=>{"use strict";t.d(s,{_v:()=>k,ek:()=>w});var o=t(52460),l=t(69958),i=t(24991),a=Object.defineProperty,m=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(c,p,d)=>p in c?a(c,p,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[p]=d,_=(c,p)=>{for(var d in p||(p={}))n.call(p,d)&&g(c,d,p[d]);if(m)for(var d of m(p))v.call(p,d)&&g(c,d,p[d]);return c},b=(c,p,d)=>new Promise((u,f)=>{var C=r=>{try{y(d.next(r))}catch(A){f(A)}},e=r=>{try{y(d.throw(r))}catch(A){f(A)}},y=r=>r.done?u(r.value):Promise.resolve(r.value).then(C,e);y((d=d.apply(c,p)).next())});function z(c,p){return b(this,null,function*(){var d,u;(d=p==null?void 0:p.onProgress)==null||d.call(p,"\u83B7\u53D6\u5206\u9875\u6570\u636E\u603B\u6570...");const{data:f,total:C}=yield c(0),e=[...f],y=f.length,r=y===0?0:Math.ceil(C/y);for(let A=1;A<r;A+=1){(u=p==null?void 0:p.onProgress)==null||u.call(p,`\u83B7\u53D6\u5206\u9875\u6570\u636E ${A+1} / ${r}..`);const{data:T,total:V}=yield c(A);check(V===C,"\u591A\u6B21\u8BF7\u6C42\u671F\u95F4\u603B\u6570\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5"),A<r-1&&check(T.length===y,"\u591A\u6B21\u8BF7\u6C42\u671F\u95F4\u5206\u9875\u6570\u91CF\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5"),e.push(...T)}return e})}function h(c){return b(this,arguments,function*({listPageData:p,arrayFields:d,objectFields:u,options:f}){var C,e;(C=f==null?void 0:f.onProgress)==null||C.call(f,"\u83B7\u53D6\u5206\u9875\u6570\u636E\u603B\u6570...");const y=yield p(0),r=y.total,A=d[0],T=y[A].length,V=T===0?0:Math.ceil(r/T),N={};for(const F of d)N[F]=[...y[F]];for(const F of u)N[F]=_({},y[F]);for(let F=1;F<V;F+=1){(e=f==null?void 0:f.onProgress)==null||e.call(f,`\u83B7\u53D6\u5206\u9875\u6570\u636E ${F+1} / ${V}..`);const L=yield p(F);check(L.total===r,"\u591A\u6B21\u8BF7\u6C42\u671F\u95F4\u603B\u6570\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5"),F<V-1&&check(L[A].length===T,"\u591A\u6B21\u8BF7\u6C42\u671F\u95F4\u5206\u9875\u6570\u91CF\u53D1\u751F\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5");for(const B of d)N[B].push(...L[B]);for(const B of u)Object.assign(N[B],L[B])}return N})}function k(c){return b(this,null,function*(){return new Promise(p=>{(0,l.I)(p,c)})})}function w(c,p,d){return b(this,null,function*(){return Promise.race([c,new Promise((u,f)=>{(0,l.I)(()=>f(d||new i.L("LOAD_TIMEOUT")),p)})])})}},97877:(M,s,t)=>{"use strict";t.d(s,{Z:()=>n,cn:()=>m});var o=t(12653),l=t.n(o),i=t(21033);const a=(...v)=>(0,i.m6)(l()(...v)),m=a,n=a},66397:(M,s,t)=>{"use strict";t.d(s,{m:()=>i});var o=t(3542),l=t.n(o);function i(a){return(0,o.fromPairs)((0,o.toPairs)(a).map(([m,n])=>[/^(data-|aria-|_)/.test(m)?m:(0,o.camelCase)(m),n]))}},24991:(M,s,t)=>{"use strict";t.d(s,{L:()=>i});var o=t(11701);const l=(0,o.getInitT)().error.name;class i extends Error{constructor(n,v,g){super(l[n]||g),this.code=n,this.data=v}toJSON(){return{message:this.message,name:this.name,code:this.code,data:this.data}}}const a=m=>{if((m==null?void 0:m.code)!=="ABORT_ERROR")return console.error(m),m}},20144:(M,s,t)=>{"use strict";t.d(s,{Q:()=>o});function o(l){return!l||l==="0"?!1:/^\d+$/.test(l)}},12031:(M,s,t)=>{"use strict";t.d(s,{HF:()=>X,KC:()=>q,sC:()=>H0,As:()=>t0,Oh:()=>N,ZN:()=>j});var o=t(96429),l=t(62765),i=t(3542),a=t(41690),m=t(13385),n=(x,E,O)=>new Promise(($,o0)=>{var d0=n0=>{try{a0(O.next(n0))}catch(B0){o0(B0)}},m0=n0=>{try{a0(O.throw(n0))}catch(B0){o0(B0)}},a0=n0=>n0.done?$(n0.value):Promise.resolve(n0.value).then(d0,m0);a0((O=O.apply(x,E)).next())});const v=(x,{format:E="L LTS",forceBeijing:O=!1}={})=>x?O?`${moment(x).utc().utcOffset(8).format(E)} [(\u5317\u4EAC\u65F6\u95F4)]`:moment(x).format(E):"-",g=x=>x>=0?`\uFFE5${x.toFixed(2)}`:`-\uFFE5${(-x).toFixed(2)}`,_=(x,E,{startFormat:O="L LT",endFormat:$="HH:mm",forceBeijing:o0=!1}={})=>o0?`${moment(x).utc().utcOffset(8).format(O)} - ${moment(E).utc().utcOffset(8).format($)} [(\u5317\u4EAC\u65F6\u95F4)]`:`${moment(x).format(O)} - ${moment(E).format($)}`,b=x=>v(x,{format:"HH:mm"}),z=x=>v(x,{format:"HH:mm:ss"}),h=x=>{if(!x)return"";const E=new Date(x);return`${E.getFullYear()}-${`${E.getMonth()+1}`.padStart(2,"0")}-${`${E.getDate()}`.padStart(2,"0")}`},k=x=>{if(x<0)return"--:--";const E=Math.round(x/1e3),O=padStart(`${E%60}`,2,"0"),$=padStart(`${Math.floor(E/60)%60}`,2,"0"),o0=padStart(`${Math.floor(E/3600)%24}`,2,"0"),d0=Math.floor(E/86400);return d0>0?`${d0} \u5929`:+o0>0?`${o0}:${$}:${O}`:`${$}:${O}`},w=x=>{const E=Math.round(x/1e3),O=parseInt((E%60).toString(),10),$=parseInt((Math.floor(E/60)%60).toString(),10),o0=parseInt(Math.floor(E/3600).toString(),10);return{millisecond:x%1e3,second:O,minute:$,hour:o0}},c=x=>{if(x<0)return"";if(x===0)return"0 s";const E=w(x);return[E.hour?`${E.hour} h`:void 0,E.minute?`${E.minute} m`:void 0,E.second?`${E.second} s`:void 0].join(" ")},p=()=>typeof window!="undefined"&&window.matchMedia("(max-width: 768px)").matches;function d(x){return x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const u=(x,E)=>{let O=x;return Object.keys(E).forEach($=>{O=O.replace(new RegExp(`{${d($)}}`,"g"),E[$])}),O},f=({user:x,studentUser:E})=>E!=null&&E.name?`${E.studentNumber} ${E.name}`:x==null?void 0:x.nickname,C=(x,E=!1)=>{const O=x.replace(/<[^>]*>/g,"").replace(/^(#{1,6}|-{3,}$|([>\-*+]\s+)+)/gm,"").replace(/~~(.*?)~~/g,"$1").replace(/\*\*\*(((?!\*{1,3}).)*)\*\*\*/g,"$1").replace(/\*\*(((?!\*{1,2}).)*)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/^```[\w\s]*$[\s\S]*?```/gm," [\u4EE3\u7801] ").replace(/`(.*?\S.*?)`/g,"$1").replace(/(!\[[^\]]*\]\([^)]*\))/g," [\u56FE\u7247] ").replace(/@@\[[^\]]*]\([^)]*\)/g," ____ ").replace(/\[[^\]]*]\([^)]*\)/g," [\u94FE\u63A5] ");return E?O.replace(/\\Theta/g," \u0398 ").replace(/\\Omega/g," \u03A9 ").replace(/\\times/g," \xD7 ").replace(/\\cdots/g," \u22EF ").replace(/\\ge/g," \u2265 ").replace(/\\le/g," \u2264 ").replace(/\\neq/g," \u2260 ").replace(/\\log/g," log ").replace(/\$\$/g," ").replace(/@/g," ____ ").replace(/^(.*?)(（\s*）|\(\s*\))([^（]*?)_*\s*$/g,"$1 ____ $3").replace(/\s+/g," ").trim():O.replace(/\$\$(.*?)\$\$/g," [\u516C\u5F0F] ").replace(/\s+/g," ").trim()},e=(x="")=>{const E=x.trim();return sumBy(range(0,E.length),O=>E.charCodeAt(O)<256?1:2)},y=x=>flatten(x.toSorted((E,O)=>E-O).reduce((E,O,$)=>{if($===0)return[[O]];const o0=last(E);return O===last(o0)+1?[...dropRight(E),[head(o0),O]]:[...E,[O]]},[]).map(([E,O])=>O?E===O-1?[E,O]:`${E}-${O}`:E)).map(E=>E.toString()),r=()=>parseFloat(getComputedStyle(document.documentElement).fontSize),A=x=>{if(x===null)return null;const{overflowX:E,overflowY:O}=window.getComputedStyle(x);return intersection(["scroll","auto"],[E,O]).length>0?x:A(x.parentElement)},T=(x,E)=>n(void 0,null,function*(){const{x:O,y:$,duration:o0=1,threshold:d0=5}=typeof E=="number"?{y:E}:E;[{current:x.scrollLeft,target:O},{current:x.scrollTop,target:$}].every(({current:m0,target:a0})=>a0===void 0||Math.abs(m0-a0)<d0)||(gsap.to(x,{duration:o0,scrollTo:{x:O,y:$,autoKill:!0},ease:"power2.inOut"}),yield sleep(o0*1e3))}),V=(x,E)=>{const[O,$]=[x,E].map(b0=>(b0 instanceof HTMLElement?b0:b0.element).getBoundingClientRect()),[o0,d0]=[x,E].map(b0=>(b0 instanceof HTMLElement?void 0:b0.margin)||[0,0]),[[m0,a0],[n0,B0]]=[[O,o0],[$,d0]].map(([b0,T0])=>[b0.top-(T0[0]||0),b0.bottom+(T0[1]||0)]);return B0<m0?"beyondTop":n0>a0?"beyondBottom":n0<m0?"intersectTop":B0>a0?"intersectBottom":"contain"},N=x=>(0,i.toPairs)(x).filter(([,E])=>E!==void 0).map(([E,O])=>`${/^(captcha)/.test(E)?(0,i.snakeCase)(E).replace(/_/g,"-"):(0,i.snakeCase)(E)}=${encodeURIComponent(typeof O=="string"?O:JSON.stringify(O))}`).join("&");var F=Object.defineProperty,L=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,R=(x,E,O)=>E in x?F(x,E,{enumerable:!0,configurable:!0,writable:!0,value:O}):x[E]=O,S=(x,E)=>{for(var O in E||(E={}))B.call(E,O)&&R(x,O,E[O]);if(L)for(var O of L(E))P.call(E,O)&&R(x,O,E[O]);return x};const I=(x,E)=>{const O=new Set(E);return x.isDisjointFrom(O)?x.union(O):x.difference(O)},j=(x,E)=>{if(E.every($=>!x[$]))return S(S({},x),(0,i.fromPairs)(E.map($=>[$,!0])));const O=(0,i.fromPairs)(E.map($=>[$,!0]));return(0,i.fromPairs)((0,i.toPairs)(x).filter(([$])=>!O[$]))};function W(x){try{return JSON.parse(JSON.stringify(x))}catch(E){return x}}function t0(x,E){try{return x?JSON.parse(x):E}catch(O){return}}const q=(x,E)=>!l.Z.isMoment(x)||!l.Z.isMoment(E)?!1:x.get("date")===E.get("date")&&x.get("month")===E.get("month")&&x.get("year")===E.get("year"),Y=x=>!!x&&/^https:\/\/([-\w]*\.)?(pintia\.cn|patest\.cn|patest\.org)(\/|$)/.test(x),X=(x,E=0,O=void 0)=>{let $=[];const o0=(0,i.debounce)((...d0)=>{const m0=[...$];$=[],x(...d0).then(a0=>m0.map(({resolve:n0})=>n0(a0)),a0=>m0.map(({reject:n0})=>n0(a0)))},E,O);return(...d0)=>new Promise((m0,a0)=>{$.push({resolve:m0,reject:a0}),o0(...d0)})},i0=x=>toPairs(x).filter(([,E])=>E!==void 0).map(([E,O])=>`${encodeURIComponent(E)}=${encodeURIComponent(typeof O=="string"?O:JSON.stringify(O))}`).join("&");function l0(x,E){const O=[];return x.forEach($=>{O.length>0&&O.push(E instanceof Function?E():E),O.push($)}),O}const G=x=>(Number(x)*100).toFixed(1),J=x=>{const E=Number(x);return E>=1e6?numeral(E).format("0.[00] a"):E},r0=x=>{const E=new Date(x);return[E.getFullYear(),E.getMonth()+1].map(J).join("-")},p0=x=>E=>(E.stopPropagation(),E.preventDefault(),x(E));function C0(x,E,O){return($,o0)=>{const d0=O($,E)||"",m0=O(o0,E)||"",a0=isObject(d0)?JSON.stringify(d0):d0,n0=isObject(m0)?JSON.stringify(m0):m0;return isString(a0)&&isString(n0)?x?a0.localeCompare(n0):n0.localeCompare(a0):x?Number(a0)-Number(n0):Number(n0)-Number(a0)}}const w0=(()=>{try{return new RegExp("\\p{C}","gu")}catch(x){return/\u0009|\u000a|\u000d|[\u0020-\uD7FF]|[\uE000-\uFFFD]/g}})(),f0=(x="")=>x.replace(w0,""),x0=x=>x.replace(/~?@\[.*?]\(.*?\)/,"").split(/\n|<br\s*\/?>/).map(E=>cleanMarkdown(f0(E),!0)),y0=x=>x0(x)[0].substring(0,MAX_DERIVED_PROBLEM_TITLE_LENGTH),E0=x=>{const E=memoize(x,(...O)=>O.find($=>!E.cache.has($))||O[0]);return E},v0=x=>!!x.length&&x.some((E,O)=>x.slice(O+1).includes(E)),u0=x=>{if(!x||x==="NO_COMPILER")return"-";const{language:E,displayName:O}=CompilerEnum[x];return`${E} (${O})`},M0=()=>["2022/12/13","2022/09/18","2022/07/07","2022/05/12","2022/12/06"].some(x=>x===moment().utc().utcOffset(8).format("MM/DD")||x===moment().utc().utcOffset(8).format("YYYY/MM/DD")),_0=x=>toPairs(x),k0=x=>fromPairs(x),I0=(x,E)=>mapValues(x,(O,$)=>E[$]===O?void 0:O),H0=x=>x&&new Date(x).getTime()>=1e3,D0=x=>{let E=0;for(const O of x)E+=/[\x00-\xff]/.test(O)?1:2;return E},W0=x=>{if(!x)return"";if(typeof x!="number"&&typeof x!="string"&&"year"in x)return`${x.year}\u5E74${x.month}\u6708${x.day}\u65E5`;const E=new Date(x);return`${E.getFullYear()}\u5E74${`${E.getMonth()+1}`.padStart(2,"0")}\u6708${E.getDate()}\u65E5`},V0=x=>new Date(x.year,x.month-1,x.day).toISOString(),z0=x=>{const E=new Date(x);return{year:E.getFullYear(),month:E.getMonth()+1,day:E.getDate()}}},57194:(M,s,t)=>{"use strict";t.d(s,{C5:()=>g,LX:()=>v,nf:()=>_});var o=t(3542),l=t.n(o),i=t(77994),a=t.n(i),m=t(80129),n=t.n(m);const v=(b,z,h)=>{const k=[],w=a()(b,k,h).exec(z);return w?(0,o.fromPairs)(k.map(({name:c},p)=>[c,w[p+1]])):void 0},g=(b,z,h)=>{const[,k="/",w="",c=""]=/^([^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/.exec(b||"")||[];return v(k,z==null?void 0:z.pathname,h)&&Object.entries(n().parse(w)).every(([p,d])=>(0,o.isEqual)(z==null?void 0:z.query[p],d))&&(!c||c===(z==null?void 0:z.hash.substring(1)))},_=b=>!b.defaultPrevented&&b.button===0&&!(b.metaKey||b.altKey||b.ctrlKey||b.shiftKey)},69958:(M,s,t)=>{"use strict";t.d(s,{I:()=>l});var o=Math.pow;const l=(i,a=0)=>a<o(2,30)?setTimeout(i,a):0},70061:(M,s,t)=>{"use strict";t.d(s,{Nn:()=>i,Ro:()=>m,ty:()=>a});var o=t(3542),l=t.n(o);const i=n=>!n||(0,o.isString)(n)?n:`${(Number(n)/16).toPrecision(3)}rem`,a=n=>(0,o.isArray)(n)?n.map(i).join(" "):i(n),m=n=>{const v=typeof n=="object"?Object.values(n).some(g=>g):!!n;if(v&&typeof n=="object"){const g=(0,o.toPairs)(n).find(_=>_[1]);if(g)return[v,g[0]]}return[v,void 0]}},67377:(M,s,t)=>{var o={"./zh-cn":63570,"./zh-cn.js":63570,"moment/locale/zh-cn":63570,"moment/locale/zh-cn.js":63570};function l(a){var m=i(a);return t(m)}function i(a){if(!t.o(o,a)){var m=new Error("Cannot find module '"+a+"'");throw m.code="MODULE_NOT_FOUND",m}return o[a]}l.keys=function(){return Object.keys(o)},l.resolve=i,M.exports=l,l.id=67377},66408:(M,s,t)=>{var o={"./action.ts":1973,"./api.ts":58707,"./assert.ts":52460,"./cache.ts":48994,"./clipboard.ts":40798,"./currentUser.ts":31699,"./dnd.ts":88687,"./drawer.ts":56955,"./edition.ts":2350,"./hint.ts":26903,"./hotLoad.ts":2520,"./http.ts":94082,"./httpCache.ts":93386,"./httpQueue.ts":16935,"./i18n.ts":11701,"./image.ts":59144,"./intro.ts":15485,"./logger.ts":81869,"./media.ts":74756,"./modal.ts":66467,"./naming.ts":95608,"./notification.ts":62065,"./overlay.ts":6372,"./pop.ts":84098,"./publicPathCache.ts":54492,"./reload.ts":11335,"./resolve.ts":29103,"./router.ts":18667,"./scroll.ts":4507,"./stomp.ts":5793,"./tcCaptcha.ts":67836,"./time.ts":11225,"./tween.ts":7481,"./uepUser.ts":58174,"./userFeatures.ts":80589,"./wechat.ts":6180};function l(a){var m=i(a);return t(m)}function i(a){if(!t.o(o,a)){var m=new Error("Cannot find module '"+a+"'");throw m.code="MODULE_NOT_FOUND",m}return o[a]}l.keys=function(){return Object.keys(o)},l.resolve=i,M.exports=l,l.id=66408}},__webpack_module_cache__={};function __webpack_require__(M){var s=__webpack_module_cache__[M];if(s!==void 0)return s.exports;var t=__webpack_module_cache__[M]={id:M,loaded:!1,exports:{}};return __webpack_modules__[M].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.m=__webpack_modules__,(()=>{var M=[];__webpack_require__.O=(s,t,o,l)=>{if(t){l=l||0;for(var i=M.length;i>0&&M[i-1][2]>l;i--)M[i]=M[i-1];M[i]=[t,o,l];return}for(var a=1/0,i=0;i<M.length;i++){for(var[t,o,l]=M[i],m=!0,n=0;n<t.length;n++)(l&!1||a>=l)&&Object.keys(__webpack_require__.O).every(h=>__webpack_require__.O[h](t[n]))?t.splice(n--,1):(m=!1,l<a&&(a=l));if(m){M.splice(i--,1);var v=o();v!==void 0&&(s=v)}}return s}})(),__webpack_require__.n=M=>{var s=M&&M.__esModule?()=>M.default:()=>M;return __webpack_require__.d(s,{a:s}),s},(()=>{var M=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,s;__webpack_require__.t=function(t,o){if(o&1&&(t=this(t)),o&8||typeof t=="object"&&t&&(o&4&&t.__esModule||o&16&&typeof t.then=="function"))return t;var l=Object.create(null);__webpack_require__.r(l);var i={};s=s||[null,M({}),M([]),M(M)];for(var a=o&2&&t;typeof a=="object"&&!~s.indexOf(a);a=M(a))Object.getOwnPropertyNames(a).forEach(m=>i[m]=()=>t[m]);return i.default=()=>t,__webpack_require__.d(l,i),l}})(),__webpack_require__.d=(M,s)=>{for(var t in s)__webpack_require__.o(s,t)&&!__webpack_require__.o(M,t)&&Object.defineProperty(M,t,{enumerable:!0,get:s[t]})},__webpack_require__.f={},__webpack_require__.e=M=>Promise.all(Object.keys(__webpack_require__.f).reduce((s,t)=>(__webpack_require__.f[t](M,s),s),[])),__webpack_require__.u=M=>""+M+"."+{34:"f11fa7995458738b7248",66:"c6aadf8e5eb724c63ba4",76:"47c6722d37528a1022d7",117:"c1b1980fb337d96df70b",127:"2bdf481b373842bfdb95",198:"af23ca5b20bc606c2acb",298:"0b1ef3c3d67563e60d9c",341:"c93a49a311e6aad30fdd",379:"83e91627675ea51eb331",410:"c74cdd7633fa89a0d56b",434:"eae635d373e69b271d62",444:"c2ffb90effa609298298",570:"6ca747ba70d8423a9954",591:"b9a2b65d67113eb6c751",726:"d436048fe5489e5ef614",771:"7fadfd3f78d97be1c241",794:"5bd5b07a37119114b806",838:"a57c7ab39e9d7cb9eb19",884:"062e76e77c9048f2c64b",914:"d560ff47f3a800b7fbc9",981:"dc10d05abbc4244807db",982:"fac0ddaf1a4925b6439e",1003:"052a6150dd56116df763",1021:"d2ca9b41ebe2aa19841c",1067:"1b17c810b36bf60cb97c",1153:"d3ad2f24d215d2a51e6a",1227:"fec6b2a996d860d61253",1230:"d2fb96be70c464259494",1241:"e4bc8fb67168931fb485",1322:"46bed8df12d0770bfc73",1426:"da65bd6481ff8809d4e6",1472:"dbc531ffadc955a85d51",1486:"4c2b83d392b7a34efdd5",1782:"13dc783049db769dfe9b",1881:"c2073904d8ed6ca00723",1898:"c627ea5b8a7fd9929137",1903:"15732744e40cecc4d232",2097:"76cf02543b39e72f6a72",2107:"8a8681a452cac6cfe7a3",2109:"c38ec20a610d8945e1c9",2136:"606b60d4d6cf68d1e641",2137:"a372b539c1b4e5dccb0b",2271:"0a11a4ecbb9d0beb0124",2354:"db0f24eb83560a4ff09a",2406:"b7b2c68bd4bf8ebacabb",2423:"5bcc7d0d670f2a033e06",2575:"a7ba05ad040a6ba2c728",2589:"fee839e05dfb14973819",2612:"c7174ba114e8cf4814c0",2915:"e82b9176644d001c0644",3012:"aa6dc7949f8bfc5d48c1",3036:"0aca95bf5aacfc9e4a90",3200:"f9a5ef828dcb96523ff0",3291:"e399a11d89e478554588",3336:"27ca4f48e154982d5cfc",3367:"d05ff18d91d7e4617cec",3388:"4ee51d170e848c82f942",3437:"19c9dbbab5e0fbce9eb3",3616:"8bfc8f721b37f5ff96bf",3628:"f21d8ce4bc9282b6f3ee",3778:"63fbc0b9e50f4e09952a",3786:"f6b7f1b370adbafec1fb",3801:"1e9a42b19afb81d4d0fa",3838:"a449108f7f1bde1b819c",3859:"35c7a10a241180e1585b",3895:"fc0d99674e8999a052a0",3973:"9d570843166b71297af3",3981:"b7bcf94e2cc56a088047",4e3:"b7fa8ad5030e50d9320c",4065:"2ae5e9e418636f70f1a3",4109:"f6dcff8104db468f9d39",4157:"c135dabe49b403053ffd",4267:"f4990bd2eb682a7d55fe",4271:"05698a2ab3ba70c31031",4518:"3e1b1eb50136689341c7",4641:"94a624d87837e581c83a",4744:"b3d1fe18a7bb43de41eb",4782:"897c9fb0238f2ca88d02",4867:"8e626b9c4f97e0fe083c",4907:"a2a04994186c5d336068",5090:"bc07fb5ca7537921af77",5214:"b9e26f8e6ef83ef26bc8",5234:"0fc3057fe3f74a15b491",5279:"7504be364142a4fc334e",5289:"f25fec91ee177c9f3a4e",5333:"3131f1b1f1e8dee593b3",5395:"37e7d1e19419c35a209f",5402:"1b05ad1c56ae525417b5",5479:"fd932262c4e5a2534a7f",5547:"1569b6db6284f3a1ad68",5558:"2f205849dc5454e9b90f",5589:"0b36fcb1583a428c3eb8",5752:"e84d133cae27d485cb09",5883:"86d6351ed268ef94664f",5948:"ca13b26ca4fd694be82b",5985:"531c1f3ee528c0bf67e6",6018:"ba00fdd48b6543a645ab",6091:"f84b94ef03fbf9b8713f",6146:"d93491622bcca811ed08",6148:"4b244acdccaa3a30468e",6235:"780d3a6d113630e0227a",6400:"4a5b72d46002ce2c0aef",6450:"03c89463fe44209af85f",6456:"a18f0de0b7adf566a451",6490:"c91dafd02fdb27652fe3",6567:"e5daf6b149c19abe1bb1",6610:"77bced4d9391ce1fefb3",6663:"b6cc5aee5ad2da055424",6677:"620c1e2028d5ffd1eee5",6692:"7917406167587d4709f6",6706:"1178960ba1bc2f49883d",6773:"0be96673c8bfb414e27e",6945:"72295e59bd01013b5d8b",6980:"ba6b54883bb6db38ad06",7086:"3c300fb5f8904f7d37d3",7124:"fd49f3c689d16b044ed9",7163:"4174c3cc66f0b60eef37",7330:"748f8ac50903ed55ad37",7537:"5d437dfe5f8cbb3a5700",7560:"842fbc2b78143623ddd6",7643:"da960fd81de0536e4bbe",7660:"de6bbca1754dd133fee9",7709:"2a88f159874e57351aa1",7731:"06a16e955d83860c2bf7",7766:"8cf794174a2594914814",7784:"d74571dba03dc4a01efb",7804:"ee3b57e59552848cd1de",7815:"6bcc45683a9d980f6b81",7913:"77eb0de79081356c817f",7977:"57c736a075144101d7b0",7990:"ef9f7ded019e80916a78",8012:"6c47d645b2376fbf81ff",8068:"96c105dfb5490bccc1ff",8079:"904b3b87f8d4a4f413de",8086:"b18ce8a9e4a5e4615dbc",8088:"d42eeb69a72055d8429a",8121:"9a8ad6299e4d57dabae6",8135:"db904a1d17522f1d4ff2",8150:"58bdc14312d87683167f",8161:"a34a0e96ae639d0d25d5",8372:"9ffab593561c8299ebd4",8439:"6c7d098e15bd2377bbb9",8548:"fe70ec5815766726027a",8557:"17a43476296646fe3585",8564:"0c67f3bb5d4bb9ad90b7",8577:"eea7c3a26f070398316f",8616:"ac4241e028cb4a96fb9c",8619:"b48a33a11614b6fd9916",8730:"c6dc5c237fb98499a122",8792:"6da81722ab4203175f68",8929:"80a61e2c1056b610c94e",9003:"fd7cc100f8e010ba3979",9025:"252062ae5905993f74ee",9060:"0ef9488038e429214bd6",9062:"d0155c46b3d0628c8756",9148:"9d38c3fb81015d2cee40",9212:"03b4ba56a36c8653fe8f",9244:"c16ea3ea039d5b873040",9326:"09dfc574f19bc175df6a",9442:"eed080425a79d02a9738",9506:"51728aaa7e5280fe813a",9522:"ed57412f3f2890ea1046",9669:"38ca5263a925fb9e8447",9723:"22b44a20380d3c459168",9830:"4c64ad939c13710c8024"}[M]+".chunk.js",__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(M){if(typeof window=="object")return window}}(),__webpack_require__.o=(M,s)=>Object.prototype.hasOwnProperty.call(M,s),(()=>{var M={},s="big-front:";__webpack_require__.l=(t,o,l,i)=>{if(M[t]){M[t].push(o);return}var a,m;if(l!==void 0)for(var n=document.getElementsByTagName("script"),v=0;v<n.length;v++){var g=n[v];if(g.getAttribute("src")==t||g.getAttribute("data-webpack")==s+l){a=g;break}}a||(m=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",s+l),a.src=t),M[t]=[o];var _=(z,h)=>{a.onerror=a.onload=null,clearTimeout(b);var k=M[t];if(delete M[t],a.parentNode&&a.parentNode.removeChild(a),k&&k.forEach(w=>w(h)),z)return z(h)},b=setTimeout(_.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=_.bind(null,a.onerror),a.onload=_.bind(null,a.onload),m&&document.head.appendChild(a)}})(),__webpack_require__.r=M=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})},__webpack_require__.nmd=M=>(M.paths=[],M.children||(M.children=[]),M),__webpack_require__.p="//static.pintia.cn/gplt/",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var M={179:0};__webpack_require__.f.j=(o,l)=>{var i=__webpack_require__.o(M,o)?M[o]:void 0;if(i!==0)if(i)l.push(i[2]);else{var a=new Promise((g,_)=>i=M[o]=[g,_]);l.push(i[2]=a);var m=__webpack_require__.p+__webpack_require__.u(o),n=new Error,v=g=>{if(__webpack_require__.o(M,o)&&(i=M[o],i!==0&&(M[o]=void 0),i)){var _=g&&(g.type==="load"?"missing":g.type),b=g&&g.target&&g.target.src;n.message="Loading chunk "+o+` failed.
(`+_+": "+b+")",n.name="ChunkLoadError",n.type=_,n.request=b,i[1](n)}};__webpack_require__.l(m,v,"chunk-"+o,o)}},__webpack_require__.O.j=o=>M[o]===0;var s=(o,l)=>{var[i,a,m]=l,n,v,g=0;if(i.some(b=>M[b]!==0)){for(n in a)__webpack_require__.o(a,n)&&(__webpack_require__.m[n]=a[n]);if(m)var _=m(__webpack_require__)}for(o&&o(l);g<i.length;g++)v=i[g],__webpack_require__.o(M,v)&&M[v]&&M[v][0](),M[v]=0;return __webpack_require__.O(_)},t=self.webpackChunkbig_front=self.webpackChunkbig_front||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__.O(void 0,[8158,406],()=>__webpack_require__(79195));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();})();

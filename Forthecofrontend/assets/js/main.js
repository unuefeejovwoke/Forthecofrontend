"use strict";

const heading4 = document.querySelector(".abbreviation");
const customUnderline = document.querySelector('.custom-underline');

const headWidth = heading4.offsetWidth;
const headLeft = heading4.offsetLeft;

customUnderline.style.width = headWidth + "px";
// customUnderline.style.left = headLeft + "px";


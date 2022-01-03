"use strict";
const tooltip = document.querySelector(".social");
const tooltipBtn = document.querySelector(".share");
const hoverEl = document.querySelector(".hover");
const noHoverEl = document.querySelector(".no-hover");
const cardAuthor = document.querySelector(".card-author");

tooltipBtn.addEventListener("mouseenter", () => {
    if (window.innerWidth > 900) {
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
    }
});

tooltipBtn.addEventListener("mouseleave", () => {
    if (window.innerWidth > 900) {
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
    }
});

cardAuthor.addEventListener("mouseenter", () => {
    if (window.innerWidth < 900) {
        hoverEl.style.display = "flex";
        noHoverEl.style.display = "none";
        cardAuthor.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
});

cardAuthor.addEventListener("mouseleave", () => {
    if (window.innerWidth < 900) {
        hoverEl.style.display = "none";
        noHoverEl.style.display = "flex";
        cardAuthor.style.backgroundColor = "#fff";
    }
});

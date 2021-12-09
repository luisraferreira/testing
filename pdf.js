window.addEventListener("load", () => {
    document.querySelectorAll('img').forEach((img) => {
        img.src = img.dataset.src;
    })
});
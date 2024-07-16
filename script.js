document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const banner = document.getElementById("banner");
        const checked = document.getElementById("checked");

        banner.classList.add("fade-out");

        banner.addEventListener("transitionend", function() {
            banner.style.display = "none";
            checked.style.display = "flex";
            checked.classList.add("fade-in");
        });
    }, 5000);
});

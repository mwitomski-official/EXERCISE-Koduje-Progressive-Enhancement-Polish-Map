const iframe = document.getElementById("description");
iframe.src =
    "https://pl.wikipedia.org/wiki/Województwo_zachodniopomorskie";

document.querySelector(".map").addEventListener("click", (ev) => {
    if (ev.target.matches("a[href]")) {
        ev.preventDefault();
        window.location.hash = `#${ev.target.innerText}`;
        iframe.src = ev.target.getAttribute("href");
    }
});

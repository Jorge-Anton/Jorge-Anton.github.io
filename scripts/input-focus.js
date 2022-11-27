const input = document.querySelector(".search-box")
window.addEventListener("keydown", (e) => {
    if (e.key != "Escape" && e.key != "CapsLock" && e.key != "Tab" && e.key != "Shift" && e.key != "Control" && e.key != "Alt" && e.key != "F1" && e.key != "F2" && e.key != "F3" && e.key != "F4" && e.key != "F5" && e.key != "F6" && e.key != "F7" && e.key != "F8" && e.key != "F9" && e.key != "F10" && e.key != "F11" && e.key != "F12" && e.key != "NumLock" && e.key != "AltGraph") {
        input.focus()
    }
    if (e.key == "Escape") {
        input.blur()
    }
    if (e.key == "Enter") {
        let url = "https://www.google.com/search?q=" + input.value
        window.open(url, "_self")
    }
})
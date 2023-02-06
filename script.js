var menu = document.querySelector(".menu")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")


menu.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}



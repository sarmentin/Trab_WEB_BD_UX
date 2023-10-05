function toggle_menu_dropdown() {
    var dropdown = document.getElementById("menu-dropdown");
    dropdown.classList.toggle("menu-content-show");
}

// Fechar o menu dropdown se o usuário clicar nele de novo
window.onclick = function(event) {
if (!event.target.matches('.menu-icn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('menu-content-show')) {
        openDropdown.classList.remove('menu-content-show');
    }
    }
}
};
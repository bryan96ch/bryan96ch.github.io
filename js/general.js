document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_menu_mobile').addEventListener('click', function () {
        document.getElementById('nav').className = document.getElementById('nav').className === 'nav hide-on-medium' ? 'nav' : 'nav hide-on-medium';
    });
});
//console.log('its working');



const g = window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('its working');

    let sideBar = document.querySelector('.sidebar-nav')

    sideBar.addEventListener('click', (e) => {
        let li = e.target;

        let liValue = li.value.toLowerCase();

        window.location.hash = liValue;
    });
});

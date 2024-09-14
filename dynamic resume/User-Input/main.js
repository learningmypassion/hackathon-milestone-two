"use strict";
let edubtn = document.getElementById('edubtn');
let expbtn = document.getElementById('expbtn');
let skibtn = document.getElementById('skibtn');
let edusection = document.getElementById('edusection');
edubtn?.addEventListener('click', () => {
    if (edusection.style.display == 'block') {
        edusection.style.display = 'none';
    }
    else {
        edusection.style.display = 'block';
    }
});

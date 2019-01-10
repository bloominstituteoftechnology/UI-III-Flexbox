

// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.


window.onload = function() {
    initForReal();
};

let init = function() {
    const clicky = document.getElementById('2');
    clicky.addEventListener('click', function (event) {
        document.getElementById('1').classList.remove('blank');
        document.getElementById('1').classList.add('orange');
        document.getElementById('2').classList.remove('orange');
        document.getElementById('2').classList.add('blank');
    // alert('Element clicked through function!');
    });
};

let initForReal = function() {
    const squares = document.getElementsByClassName('track');
    for (var v of squares) {
        v.addEventListener('click', function(event) {
            let empty = document.getElementsByClassName('blank')[0];
            let color = event.target.classList.item(1);
            empty.classList.remove('blank');
            empty.classList.add(color);
            event.target.classList.remove(color);
            event.target.classList.add('blank');
        });
    }
}
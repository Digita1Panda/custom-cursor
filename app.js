const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function(event) {
    movingCursor(event.x, event.y);
    console.log(event);
})

const movingCursor = function(x, y) {
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
}
//Set initail count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");
// This function finds the list of classes the clicked element belongs too, then I can target specific classes to change the value using if statements.
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++; 
        }
        else{
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
});

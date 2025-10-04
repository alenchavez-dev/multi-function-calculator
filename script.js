/* ============================================================
   Program: Multi-Function Calculator (Front-End)
   Author: Alen Chavez
   Description:
     Vanilla JS logic for button click handling. Supports:
     Clear, equals (eval of expression), x^2, random number, and
     appending button text to the read-only display.
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch (e.target.innerText) {
                case 'Clear':
                    display.innerText = '';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText.replace('x', '*').replace('÷', '/'));
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                case 'x^2':
                    display.innerText = Math.pow(parseFloat(display.innerText), 2);
                    break;
                case 'Rand':
                    display.innerText = Math.random().toFixed(5);
                    break;
                default:
                    display.innerText += e.target.innerText;
                    
            }
        });
    });
});

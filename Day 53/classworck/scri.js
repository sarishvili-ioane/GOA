
function swapParagraphs() {
   
    let paragraph1 = document.getElementById('paragraph1');
    let paragraph2 = document.getElementById('paragraph2');

    let temp = paragraph1.textContent;
    paragraph1.textContent = paragraph2.textContent;
    paragraph2.textContent = temp;
}


let swapButton = document.getElementById('swapButton');

swapButton.addEventListener('click', swapParagraphs);
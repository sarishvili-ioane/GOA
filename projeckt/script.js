// მოიძიებს ყველა ელემენტს, რომელსაც აქვს კლასი 'choice' და ახდენს თითოეულზე 'click' მოვლენის მკვეთრი ფუნქციის მიწერას
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', playGame);
});

// ფუნქცია, რომელიც ასრულებს თამაშს და აჩვენებს შედეგს
function playGame(event) {
    // მომხმარებლის არჩევანი განსაზღვრავს დაჭერილი ღილაკის ID-ის მიხედვით
    const userChoice = event.target.id;
    // შესაძლო არჩევანიების მასივი
    const choices = ['stone', 'scissors', 'sheet'];
    // კომპიუტერის შემთხვევითი არჩევანი
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // შედეგის განსაზღვრა
    const resultText = determineWinner(userChoice, computerChoice);
    
    // შედეგის ჩვენება
    document.getElementById('result-text').textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
}

// ფუნქცია, რომელიც განსაზღვრავს თამაშის შედეგს
function determineWinner(userChoice, computerChoice) {
    // თუ არჩევანიები ერთმანეთს ემთხვევა
    if (userChoice === computerChoice) {
        return "ფრეა!";
    }
    // განმარტავს, ვინ გაიმარჯვა
    if ((userChoice === 'stone' && computerChoice === 'scissors') || 
        (userChoice === 'scissors' && computerChoice === 'sheet') || 
        (userChoice === 'sheet' && computerChoice === 'stone')) {
        return "შენ მოიგე!";
    } else {
        return "შენ წააგე!";
    }
}

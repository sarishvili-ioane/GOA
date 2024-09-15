// Simple JavaScript for form submission (example: alert on submission)
// ამ კოდით მოვძებნით HTML დოკუმენტში ელემენტს, რომლის id არის 'contact-form',
// და ამ ელემენტზე ვამატებთ მოვლენას 'submit', რომელიც განლაგებულია ფორმის გაგზავნისას.
document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    // event.preventDefault() ფუნქცია თიშავს ფორმის ჩვეულებრივ გაგზავნის მოქმედებას,
    // ანუ ფორმა არ გაიგზავნება სერვერზე, როგორც ეს ჩვეულებრივ ხდება.
    event.preventDefault();

    // ეს არის ალერტი, რომელიც გამოისახება მომხმარებლისთვის,
    // როდესაც ისინი დააჭერენ "Send Message" ღილაკს.
    alert('Thank you for your message!');
});

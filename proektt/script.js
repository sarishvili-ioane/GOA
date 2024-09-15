// ფუნქცია, რომელიც გადადის მითითებულ სექციაზე გლუვი გადახვევის ეფექტით
function scrollToSection(sectionId) {
    // მოძებნის ელემენტს, რომელსაც აქვს ID, რომელიც გადაეცა ფუნქციის არგუმენტად
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

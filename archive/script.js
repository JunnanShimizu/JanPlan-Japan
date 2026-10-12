// document.getElementById('english').addEventListener('click', function() {
//     switchLanguage('en');
// });

// document.getElementById('japanese').addEventListener('click', function() {
//     switchLanguage('jp');
// });

// function switchLanguage(lang) {
//     localStorage.setItem('language', lang);
//     document.querySelectorAll('[data-en]').forEach(function(element) {
//         element.textContent = element.getAttribute('data-' + lang);
//     });
// }

// document.addEventListener('DOMContentLoaded', function() {
//         const savedLanguage = localStorage.getItem('language') || 'en';
//         switchLanguage(savedLanguage);
//     });

// const controller = new ScrollMagic.Controller();

// const scene1 = new ScrollMagic.Scene({
//     triggerElement: ".body",
//     triggerHook: 0,
//     duration: "100%"
// }).addIndicators().setPin(".body").addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".body-text",
//     triggerHook: 0

//     // reverse: false
// }).setClassToggle('fade-in', 'show').addIndicators().addTo(controller);

document.addEventListener('DOMContentLoaded', function() {
    const controller = new ScrollMagic.Controller();

    // const scene1 = new ScrollMagic.Scene({
    //     triggerElement: ".body-1",
    //     triggerHook: 0,
    //     duration: "100%"
    // }).addIndicators().setPin(".body-1").addTo(controller);

    const lines = document.querySelectorAll('.fade-in');

    console.log(lines)

    lines.forEach((line, index) => {
        const scene = new ScrollMagic.Scene({
            triggerElement: line,
            triggerHook: 0.1,
            reverse: false
        })
            .setClassToggle(line, 'show').addIndicators().addTo(controller);
    });

    const scene2 = new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 0.1
    }).setClassToggle('fade-in', 'show').addIndicators().addTo(controller);
});

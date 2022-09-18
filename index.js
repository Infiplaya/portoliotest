// form div display

const formSubmit = document.querySelector('#form')
const hero = document.querySelector('.hero')


// when form is submitted
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    let userName = document.querySelector('#name').value
    const greeting = document.createElement('div');
    greeting.innerHTML = `<div class="mx-auto m-3 text-center" style="width: 50%;">
        <h1>Hello, ${userName}</h1>
        <h1 class ="display-5 fs-4">My name is Robo. Nice to meet you.</h1>
        <p>Make sure to check other pages like:
            <a href="hobbies.html" class="link">Hobbies</a>,
            <a href="about.html" class="link">About me</a> or if you need me don't be shy to
            <a href="contact.html" class="link">Contact me</a>!</p>
            <img src="images/dog.png" class="img-fluid" alt="...">
    </div>`
    hero.innerHTML = greeting.innerHTML
})


// dark mode

if (!localStorage.getItem('mode')) {
    localStorage.setItem('mode', 'light')
}

const switcher = document.querySelector('#switch')

switcher.addEventListener('click', () => {
    if (localStorage.getItem('mode') == 'light') {
        localStorage.setItem('mode', 'dark');
        document.body.classList.toggle('dark');
    } else {
        localStorage.setItem('mode', 'light');
        document.body.classList.toggle('dark')
    }
    document.querySelector('body').style.transition = "all 0.2s";
})

document.querySelector('body').classList = localStorage.getItem('mode');



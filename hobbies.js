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
})

document.querySelector('body').classList = localStorage.getItem('mode');

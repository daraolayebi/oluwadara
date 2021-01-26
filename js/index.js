let body = document.getElementsByTagName("body")[0]

document.addEventListener('scroll', function (e) {
    (window.pageYOffset >= 100) ? body.classList.add('name-is-hidden') : body.classList.remove('name-is-hidden');
    (window.pageYOffset >= 400) ? body.classList.add('bg-is-dark') : body.classList.remove('bg-is-dark');
})

let projects = document.querySelectorAll('.project')
projects.forEach(project => {
    project.addEventListener('click', function (e) {
        const siblings = Array.from(this.parentNode.children)
        siblings.forEach(sibling => sibling.classList.remove('active'))
        this.classList.toggle('active')
    })
})
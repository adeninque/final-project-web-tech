document.addEventListener('DOMContentLoaded', () => {
    const navEl = document.querySelectorAll('.nav__el');
    

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.home__header');
        const probe = document.querySelector('.probe');
        header.classList.toggle('_sticky', window.scrollY > 0);
        probe.classList.toggle('_sticky', window.scrollY > 0);
    })

    navEl.forEach((item, index) => {
        item.addEventListener('mouseover', () => {
            item.classList.toggle('_selected')
        })
        item.addEventListener('mouseout', () => {
            item.classList.toggle('_selected')
        })
    })

    const progressbar = document.getElementById('progressbar')
    let totalheight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
        let progressHeight = (window.pageYOffset / totalheight) * 100
        progressbar.style.height = progressHeight + '%';
    }

    const popup = document.querySelector('.popup')
    const popup__close = document.querySelector('.popup__close')
    const popup__img = document.querySelector('.popup__img')
    let gallery = document.querySelectorAll('.gallary__img')

    gallery.forEach((item, index) => {
        item.addEventListener('click', () => {
            popup__img.style.backgroundImage = `${item.style.backgroundImage}`;
            popup.style.display = "flex";
        })
    })

    popup__close.addEventListener('click', ()=>{
        popup.style.display = "none";
    })
});
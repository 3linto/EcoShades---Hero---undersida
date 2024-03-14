const headerScroll = () => {
    
    // Get Element from DOM
    const header = document.querySelector('.site-header')

    //Function to toggle scroll on header
    const classOnScroll = () => {
        
        if ( window.scrollY > 215) {
            header.classList.add('site-header--scroll')
        } else {
            header.classList.remove('site-header--scroll')
        }

    }

    // Add or remove class for links
    const links = document.querySelectorAll('.site-header .menu__link')
    
    const menuLinks = () => {

        links.forEach(link => {

            if ( window.scrollY > 215) {
                link.classList.add('dark-link')
            } else {
                link.classList.remove('dark-link')
            }
        });
    }


    window.addEventListener('scroll', menuLinks)
    window.addEventListener('scroll', classOnScroll)

}

headerScroll()
function megamenu () {

    const headerLinksParrent = document.querySelector('.header-nav'),
          menuContentLinks = document.querySelectorAll('.nav-megamenu'),
          headerNav = document.querySelector('.header-nav'),
          navigationLinks = headerNav.querySelectorAll('.nav-link'),
          body = document.querySelector('body');

    
    headerLinksParrent.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (target.closest('.nav-link')) {

            menuContentLinks.forEach(menuLink => {
                if (target.id === menuLink.getAttribute("data-name")) {

                    target.classList.toggle('nav-link_active');
                    menuLink.classList.toggle('nav-megamenu_active');

                } else if (menuLink.classList.contains('nav-megamenu_active')) {

                    navigationLinks.forEach(link => {

                        if (link.id === menuLink.getAttribute("data-name")) {
                            link.classList.remove('nav-link_active');
                        }
                    })

                    menuLink.classList.remove('nav-megamenu_active');
                }
            })

            body.addEventListener('click', closeMenu);

        } 
    })

    function closeMenu (event) {

        if (!event.target.closest('.nav-megamenu_active') && !event.target.closest('.nav-item')) {

            menuContentLinks.forEach(menuLink => menuLink.classList.remove('nav-megamenu_active'));
            navigationLinks.forEach(link => link.classList.remove('nav-link_active'));

            body.removeEventListener('click', closeMenu);
        }

    }
}

export default megamenu;
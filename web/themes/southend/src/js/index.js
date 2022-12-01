let viewportWidth = window.innerWidth;
let miniCart = document.getElementById('mini-cart');
let miniCartContainer = document.getElementById('cart-container');
let deskNavBar = document.getElementById('navbar-desktop');
miniCartContainer.addEventListener('click', event => {
    if (!miniCart.classList.contains('mini-cart-shown')) {
        miniCart.classList.add('mini-cart-shown');
        // deskNavBar.classList.add('z-negative');
    }
})

document.addEventListener('click', function(event) {
    if (miniCartContainer !== event.target && !miniCartContainer.contains(event.target)) {
        miniCart.classList.remove('mini-cart-shown');
        // deskNavBar.classList.remove('z-negative');
    }
});

if (viewportWidth < 1024) {
    const bar = document.getElementById('mobile');
    const nav = document.getElementById('navbar-mobile');
    const overlay = document.getElementById('overlay');
    const filters = document.getElementById('filters-overlay-mobile');
    const filtersIcon = document.getElementById('filters-mobile');
    const mapping = {
        'main-menu-li' : 'navbar-mobile',
        'filters-li' : 'filters-overlay-mobile',
    }

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)

        );
    }

    bar.addEventListener('click', (e) => {
        overlay.classList.add('sidebar');
        nav.setAttribute('class', 'slide-in');
        document.body.classList.add('no-scroll');
        overlay.classList.add('pointer-events-none');
    })

    if (filtersIcon) {
        filtersIcon.addEventListener('click', (e) => {
            overlay.classList.add('sidebar');
            filters.setAttribute('class', 'slide-in');
            document.body.classList.add('no-scroll');
            overlay.classList.add('pointer-events-none');
        })
    }

    document.querySelectorAll('.close').forEach(item => {
        item.addEventListener('click', (e) => {
            overlay.classList.remove('sidebar');
            document.getElementById(mapping[e.currentTarget.parentElement.id]).setAttribute('class', 'slide-out');
            document.body.classList.remove('no-scroll');
            overlay.classList.remove('pointer-events-none');
        })
    })


    document.addEventListener('click', (e) => {
        if (isInViewport(nav)) {
            if (!nav.contains(e.target)) {
                overlay.classList.remove('sidebar');
                nav.setAttribute('class', 'slide-out');
                document.body.classList.remove('no-scroll');
                overlay.classList.remove('pointer-events-none');
            }
        }
        if (isInViewport(filters)) {
            if (!filters.contains(e.target)) {
                overlay.classList.remove('sidebar');
                filters.setAttribute('class', 'slide-out');
                document.body.classList.remove('no-scroll');
                overlay.classList.remove('pointer-events-none');
            }
        }
    })
}

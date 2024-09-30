const componentImports = {
    navbar: () => import('bundle-text:./components/navbar.html'),
    hero: () => import('bundle-text:./components/hero.html'),
    welcome: () => import('bundle-text:./components/welcome.html'),
    'our-inn': () => import('bundle-text:./components/our-inn.html'),
    contact: () => import('bundle-text:./components/contact.html'),
    footer: () => import('bundle-text:./components/footer.html')
};


loadAndInjectComponents(Object.keys(componentImports), () => {
    addNavbarToggleFunction()
});

updateGoogleReview()
fadeInBody()

/**
 * Import bundled text using object of import calls. Object keys must match
 * include-html ids.
 * @param {*} components 
 * @param {*} callback 
 */
async function loadAndInjectComponents(components, callback) {

    function addElement(id, html) {
        document.querySelector(`div[w3-include-html=${id}]`).innerHTML = html
    }

    async function loadAndAddComponents(components, callback) {
        for (const component of components) {
            const componentHTML = await loadComponent(component);
            if (componentHTML) {
                addElement(component, componentHTML);
            }
        }
       
        callback()
    }

    loadAndAddComponents(components, callback)

}

// Function to load a component dynamically
async function loadComponent(componentName) {
    if (componentImports[componentName]) {
        const module = await componentImports[componentName]();
        return module
    } else {
        console.error(`Component ${componentName} not found.`);
        return null;
    }
}


function fadeInBody() {
    window.addEventListener('load', function () {
        const content = document.getElementsByTagName('body')[0];
        content.classList.add('fade-in');
    });
}

function addNavbarToggleFunction() {

    document.getElementById('toggle-nav-menu').onclick = toggleFunction

    const divChildren = document.querySelector('#navbar-mobile').children;
    for (let i = 0; i < divChildren.length; i++) {
        divChildren[i].onclick = toggleFunction;
    }

}

function updateGoogleReview() {

    fetch("https://shaunnielsen.com.au/mpbi/review.json")
        .then((response) => response.json())
        .then((data) => {

            //console.log(data)

            let x = {
                rating: document.getElementById('star-rating-value'),
                starWidth: document.getElementsByClassName('stars-filled')[0],
                totalReviews: document.getElementById('star-rating-total-reviews-total')
            }

            x.rating.innerHTML = data.rating
            x.starWidth.style.width = (data.rating / 5 * 100) + '%'
            x.totalReviews.innerHTML = data.user_ratings_total
        })
}

function toggleFunction() {
    var x = document.getElementById("navbar-mobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}






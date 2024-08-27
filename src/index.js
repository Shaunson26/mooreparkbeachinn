const componentImports = {
    navbar: () => import('bundle-text:./components/navbar.html'),
    hero: () => import('bundle-text:./components/hero.html'),
    welcome: () => import('bundle-text:./components/welcome.html'),
    'our-inn': () => import('bundle-text:./components/our-inn.html'),
    contact: () => import('bundle-text:./components/contact.html'),
    footer: () => import('bundle-text:./components/footer.html')
};

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

// Example usage
async function loadAndInjectComponents() {

    function addElement(id, html) {
        document.querySelector(`div[w3-include-html=${id}]`).innerHTML = html
    }

    const navbarHTML = await loadComponent('navbar');
    const heroHTML = await loadComponent('hero');
    const welcomeHTML = await loadComponent('welcome');
    const ourInnHTML = await loadComponent('our-inn');
    const contactHTML = await loadComponent('contact');
    const footerHTML = await loadComponent('footer');

    if (navbarHTML) addElement('navbar', navbarHTML);
    if (heroHTML) addElement('hero', heroHTML);
    if (welcomeHTML) addElement('welcome', welcomeHTML);
    if (ourInnHTML) addElement('our-inn', ourInnHTML);
    if (contactHTML) addElement('contact', contactHTML);
    if (footerHTML) addElement('footer', footerHTML);

    document.getElementById('toggle-nav-menu').onclick = toggleFunction
    const divChildren = document.querySelector('#navbar-mobile').children;
    for (let i = 0; i < divChildren.length; i++) {
        divChildren[i].onclick = toggleFunction;
    }
}

loadAndInjectComponents();

function updateGoogleReview() {

    fetch("https://shaunnielsen.com/mpbi/review.json")
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

updateGoogleReview()

function toggleFunction() {
    console.log('meow')
    var x = document.getElementById("navbar-mobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}






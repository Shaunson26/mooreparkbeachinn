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
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navbar-mobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}    
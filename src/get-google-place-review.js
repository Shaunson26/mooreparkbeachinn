const key = process.env.PLACES_API_KEY
const place_id = process.env.PLACE_ID

if (!key || !place_id) {
    console.error('Missing PLACES_API_KEY or PLACE_ID environment variables.')
    process.exit(1)
}

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${key}`

// Get the Google Place review data
// extract rating and user_ratings_total from the result, add last_updated time stamp and save to review.json file
fetch(url)
    .then(response => response.json())
    .then(data => {

        if (!data.result) {
            throw new Error('Google Places API did not return a result: ' + JSON.stringify(data))
        }

        const reviewData = {
            rating: data.result.rating,
            user_ratings_total: data.result.user_ratings_total,
            last_updated: new Date().toISOString()
        }

        const fs = require('fs')
        
        fs.writeFile('docs/review.json', JSON.stringify(reviewData, null, 2), (err) => {
            if (err) {
                console.error('Error writing review data to file:', err)
                process.exit(1)
            } else {
                console.log('Review data saved to docs/review.json')
            }
        })
    })
    .catch(error => {
        console.error('Error fetching Google Place review data:', error)
        process.exit(1)
    })
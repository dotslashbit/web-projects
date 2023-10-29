const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;



let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'n0-4gRea8CjY_LVLzSlQj5NaukPyi0Vbr2Jg2OEmc6c';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    console.log(imageLoaded);
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready);
    }
}


// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create elements for links & photos, add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });

        // Event listener, check when each is finished loading
        img.addEventListener('load', imageLoaded)

        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);


        // item.innerHTML = `
        //     <img src="${photo.urls.regular}" alt="${photo.alt_description}" title="${photo.alt_description}">
        //     <div class="photo-info">
        //         <p>${photo.alt_description}</p>
        //         <a href="${photo.links.html}" target="_blank">Photo by ${photo.user.name}</a>
        //     </div>
        // `;

        // imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // console.log(photosArray);
        displayPhotos();

    } catch (error) {
        // Catch error here
    }
}


// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    // console.log('scrolled');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        // console.log('load more');
        ready = false;
        getPhotos();
    }
});

// On load
getPhotos();
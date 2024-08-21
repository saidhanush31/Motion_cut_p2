const imageSlider = document.querySelector('.image-slider');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    imageSlider.appendChild(img);
});
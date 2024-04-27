document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popup-img');
        popupImg.src = img.src; 
        popup.style.display = 'flex'; 
    });
});

document.getElementById('popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none'; 
});

let currentImgIndex = 0; 
const images = document.querySelectorAll('.gallery-img');

function changeSlide(direction) {

    images[currentImgIndex].style.display = 'none';

   
    currentImgIndex += direction;
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0; 
    } else if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1; 
    }


    images[currentImgIndex].style.display = 'block';
}


images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    function showImage(src) {
        const mainImage = document.getElementById('main-image');
        const thumbnails = document.querySelectorAll('.thumbnail');

        mainImage.src = src;

        thumbnails.forEach(thumbnail => {
            if (thumbnail.src === src) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            showImage(thumbnail.src);
        });
    });
});
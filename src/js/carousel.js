document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle("hidden", i !== index);
        });
    }

    function goToNextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }
    
    const intervalId = setInterval(goToNextItem, 5000);

    showItem(currentIndex);
});



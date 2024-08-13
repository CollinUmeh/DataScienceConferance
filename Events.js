var count = 0;
        var inc = 0;
        var margin = 0;
        var slider = document.getElementsByClassName("slider-width")[0];
        var itemDisplay = 0;
        if (screen.width > 990) {
            itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
            margin = itemDisplay * 5;
        } else if (screen.width > 700 && screen.width < 990) {
            itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
            margin = itemDisplay * 6.8;
        } else if (screen.width > 280 && screen.width < 700) {
            itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
            margin = itemDisplay * 20;
        }

        var items = document.getElementsByClassName("item");
        var itemCount = items.length;
        var itemsPerSlide = itemDisplay || 1;
        var totalSlides = Math.floor(itemCount / itemsPerSlide);
        var currentSlide = 0;

        for (let i = 0; i < items.length; i++) {
            items[i].style.width = (screen.width / itemDisplay) - margin + "px";
        }

        function next() {
            if (currentSlide < totalSlides) {
                 currentSlide++;
                 slider.style.left = -(currentSlide * screen.width) + "px";
             }
        }

        function prev() {
            if (currentSlide > 0) {
                 currentSlide--;
                 slider.style.left = -(currentSlide * screen.width) + "px";
             }
        }          

console.log(itemDisplay);

console.log(itemDisplay);
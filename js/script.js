
    document.addEventListener("DOMContentLoaded", function () {
      const carousel = document.querySelector("#heroCarousel");
      let isDown = false,
        startX,
        scrollLeft;

      carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX;
      });

      carousel.addEventListener("mouseleave", () => (isDown = false));
      carousel.addEventListener("mouseup", () => (isDown = false));

      carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        const walk = e.pageX - startX;
        if (walk > 50) {
          bootstrap.Carousel.getInstance(carousel).prev();
          isDown = false;
        } else if (walk < -50) {
          bootstrap.Carousel.getInstance(carousel).next();
          isDown = false;
        }
      });
    });

let scrollContainer = document.querySelector(".image-list");
    let preBtn = document.getElementById("prev-slide");
    let nextBtn = document.getElementById("next-slide");



    preBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 900;
    });

    nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 900;
    });

document.addEventListener("DOMContentLoaded", function() {
    const displayedImg = document.querySelector(".displayed-img");
    const overlay = document.querySelector(".overlay");
    const darkBtn = document.querySelector(".dark");
    const thumbBar = document.querySelector(".thumb-bar");
  

    const images = [
      "images/ichigo.jpg",
      "images/aizen.jpg",
      "images/byakuya.jpg",
      "images/grimmjow.jpg",
      "images/toshiro.jpg"
    ];
    const alts = {
        'ichigo.jpg' : 'Ichigo',
        'aizen.jpg' : 'Aizen',
        'byakuya.jpg' : 'Byakuya',
        'grimmjow.jpg' : 'Grimmjow',
        'toshiro.jpg' : 'Toshiro'
    }
  

    images.forEach(image => {
      const thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", image);
      thumbImg.setAttribute("alt", alts[image.split('/').pop()]);
      thumbImg.addEventListener("click", function() {
        displayedImg.setAttribute("src", image);
      });
      thumbBar.appendChild(thumbImg);
    });
  

    darkBtn.addEventListener("click", function() {
      if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block";
        darkBtn.textContent = "Undarken";
      } else {
        overlay.style.display = "none";
        darkBtn.textContent = "Darken";
      }
    });
});

const dangerBtn = document.getElementById("dangerBtn");

const destructionScreen =
    document.getElementById("destructionScreen");

const destructionTitle =
    document.getElementById("destructionTitle");

const destructionSub =
    document.getElementById("destructionSub");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingPercent =
    document.getElementById("loadingPercent");


dangerBtn.addEventListener("click", () => {

    destructionScreen.classList.add("active");

    document.body.style.overflow = "hidden";


    let progress = 0;


    const loading = setInterval(() => {

        progress++;

        loadingProgress.style.width =
            progress + "%";

        loadingPercent.textContent =
            progress + "%";


        if (progress >= 100) {

            clearInterval(loading);


            setTimeout(() => {

                destructionTitle.classList.remove(
                    "destruction-title"
                );


                destructionTitle.classList.add(
                    "coordinates-found"
                );


                destructionTitle.textContent =
                    "COORDINATES DETECTED";


                destructionSub.classList.add(
                    "target-locked"
                );


                destructionSub.textContent =
                    "TARGET LOCKED";


                loadingPercent.textContent =
                    "LOCATION CONFIRMED";
setTimeout(() => {
    window.location.href = "index.html";
}, 2500);

            }, 400);

        }

    }, 40);

});
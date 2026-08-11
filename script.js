const langBtn = document.querySelector(".language-btn");

let currentLanguage = localStorage.getItem("language") || "ar";

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-ar][data-en]");

    elements.forEach(function (element) {

        if (language === "en") {
            element.textContent = element.getAttribute("data-en");
        } else {
            element.textContent = element.getAttribute("data-ar");
        }

    });

    if (language === "en") {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        langBtn.textContent = "AR";

    } else {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        langBtn.textContent = "EN";
    }

    localStorage.setItem("language", language);
}

langBtn.addEventListener("click", function () {

    if (currentLanguage === "ar") {
        currentLanguage = "en";
    } else {
        currentLanguage = "ar";
    }

    changeLanguage(currentLanguage);

});

changeLanguage(currentLanguage);
let run = () => {

    let headerShadow = document.getElementsByClassName("header")[0];

    let shadow = () => {
        let yAxis = window.scrollY;

        if (yAxis >= 1) {
            headerShadow.classList.add("header-shadow");
        } else {
            headerShadow.classList.remove("header-shadow");
        }
    }

    window.addEventListener("scroll", shadow);
}

run();
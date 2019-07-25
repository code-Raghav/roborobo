window.onscroll = function () {
    if (pageYOffset <= 0) {
        document.querySelector("#navbar").style.backgroundColor = "unset";
        document.querySelector("header").style.height = "80px";
        document.getElementById("link1").style.paddingTop = "30px"
        document.getElementById("link2").style.paddingTop = "30px"
        document.getElementById("link3").style.paddingTop = "30px"
        document.getElementById("link4").style.paddingTop = "30px"
    } else {
        document.querySelector("#navbar").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        document.querySelector("header").style.height = "60px"
        document.getElementById("link1").style.paddingTop = "20px"
        document.getElementById("link2").style.paddingTop = "20px"
        document.getElementById("link3").style.paddingTop = "20px"
        document.getElementById("link4").style.paddingTop = "20px"
    };
};




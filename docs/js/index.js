window.addEventListener("load", loadPngs, true);
function loadPngs() {
    fetch("https://aware-tan-flannel-nightgown.cyclic.app/user/385614400163151872")
        .then((r) => r.json())
        .then((result) => {
            document.querySelector("#zeta_pfp").src = result.avatar.url
        });
    fetch("https://aware-tan-flannel-nightgown.cyclic.app/user/1188720447454461972")
        .then((r) => r.json())
        .then((result) => {
            document.querySelector("#geodude_pfp").src = result.avatar.url
        });
    fetch("https://aware-tan-flannel-nightgown.cyclic.app/user/688849359474917432")
        .then((r) => r.json())
        .then((result) => {
            document.querySelector("#lolcat_pfp").src = result.avatar.url
        });
    fetch("https://aware-tan-flannel-nightgown.cyclic.app/user/1177722124035706931")
        .then((r) => r.json())
        .then((result) => {
            document.querySelector("#upio_pfp").src = result.avatar.url
        });
    fetch("https://aware-tan-flannel-nightgown.cyclic.app/user/1098248637789786165")
        .then((r) => r.json())
        .then((result) => {
            document.querySelector("#mstudio45_pfp").src = result.avatar.url
        });
}

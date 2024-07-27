let radios = document.getElementsByName("alarm");
radios.forEach((radio) => {
  radio.addEventListener("change", checkimg);
});

function checkimg() {
  let checktime = document.getElementsByName("alarm");
  checktime.forEach((radio) => {
    let label = document.querySelector(`label[for=${radio.id}]`);
    if (radio.checked) {
      if (!label.querySelector("img")) {
        let img = document.createElement("img");
        img.src = "./img/check.png";
        label.appendChild(img);
      }
    } else {
      let img = label.querySelector("img");
      if (img) {
        label.removeChild(img);
      }
    }
  });
}

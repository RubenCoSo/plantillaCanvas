window.onload = () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  const car = new Image();
  car.src = "./images/car.png";

  let w = 50;
  let h = 70;

  car.onload = () => {
    ctx.drawImage(car, canvas.width / 2 - w / 2, canvas.height - h, w, h);
  };
};

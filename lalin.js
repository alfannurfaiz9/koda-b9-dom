const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const yellowOn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      red.classList.add("off");
      yellow.classList.remove("off");
      resolve();
    }, 3000);
  });
};

const greenOn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      yellow.classList.add("off");
      green.classList.remove("off");
      resolve();
    }, 2000);
  });
};

const redOn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      red.classList.remove("off");
      yellow.classList.add("off");
      green.classList.add("off");
      resolve();
    }, 3000);
  });
};

async function run() {
  await yellowOn();
  await greenOn();
  await redOn();

  return run();
}

run();

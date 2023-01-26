const navigation = document.querySelector(".navigation-list");
const burger = document.querySelector(".burger");
const links = navigation.querySelectorAll("a");
/*const open = document.querySelector(".open");*/

const weddingTime = new Date("2030-06-23 14:00:00").getTime();
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

burger.addEventListener("click", () => {
  navigation.classList.toggle("open");
  burger.classList.toggle("toggle");
});

links.forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    navigation.classList.toggle("open");
    burger.classList.toggle("toggle");
  });
});

setInterval(() => {
  const nowTime = new Date().getTime();
  const timeToWedding = weddingTime - nowTime;

  let days = Math.floor(
    weddingTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
  );
  days = days < 10 ? `0${days}` : days;

  let hours = Math.floor(
    (weddingTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
  );
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor(
    (weddingTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
  );
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((weddingTime / 1000 - nowTime / 1000) % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}, 1000);

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const tempDate = date.getDate();

const futureDate = new Date(year, month, tempDate + 10, 9, 30, 0);
const day = date.getDay();

document.querySelector(".subtitle").innerHTML = `L'offre se termine le ${
  days[futureDate.getDay()]
} ${date.getDate() + 10} ${months[month]} ${year} à 9h30`;

let dayMS = 86400000;
let hourMS = 3600000;
let minuteMS = 60000;
let secondMS = 1000;

function remaining() {
  const date = new Date();
  let remainingTime = futureDate.getTime() - date.getTime();

  let remainingDays = Math.floor(remainingTime / dayMS);
  let remainingHours = Math.floor((remainingTime % dayMS) / hourMS);
  let remainingMinutes = Math.floor((remainingTime % hourMS) / minuteMS);
  let remainingSeconds = Math.floor((remainingTime % minuteMS) / secondMS);

  if (remainingTime >= 0) {
    document.querySelector(".days").innerHTML = `${remainingDays}`;
    document.querySelector(".hours").innerHTML = `${remainingHours}`;
    document.querySelector(".minutes").innerHTML = `${remainingMinutes}`;
    document.querySelector(".seconds").innerHTML = `${remainingSeconds}`;
  } else {
    document.querySelector(".days").innerHTML = `0`;
    document.querySelector(".hours").innerHTML = `0`;
    document.querySelector(".minutes").innerHTML = `0`;
    document.querySelector(".seconds").innerHTML = `0`;
    document.querySelector(".subtitle").innerHTML =
      "L'offre est malheureusement terminée!";
    document.querySelector(".subtitle").classList.add("time-up");
  }
}

setInterval(remaining, 1000);

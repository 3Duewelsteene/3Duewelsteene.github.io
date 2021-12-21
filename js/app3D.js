//Movement Animation to happen
const card = document.querySelector(".karte");
const container = document.querySelector(".card-container");
//Items
const gizmo = document.querySelector(".gizmo img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const timeslots = document.querySelector(".timeslots");
const moreinfo = document.querySelector(".more-information");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 40;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 40;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  gizmo.style.transform = "translateZ(100px) rotateZ(188deg)";
  title.style.transform = "translateZ(100px)";
  description.style.transform = "translateZ(150px)";
  timeslots.style.transform = "translateZ(5px)";
  moreinfo.style.transform = "translateZ(5px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  gizmo.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  timeslots.style.transform = "translateZ(0px)";
  moreinfo.style.transform = "translateZ(0px)";
});
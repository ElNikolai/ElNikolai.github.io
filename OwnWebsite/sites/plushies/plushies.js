const plushy_infos = [
  {
    name: "Chuey",
    birthday: "10.08.2020",
    family: "Squishmallows",
    description: "Chuey is a student of the world, he loves to pick up new tips and tricks on the adventure with his twin brother. They aren't old enough to travel on their own just yet, but they have a huge list of places they want to go. Where do you think they should go first?"
  },
  {
    name: "Stan",
    birthday: "-",
    family: "BumBumz (RootBumz)",
    description: "-"
  },
  {
    name: "Colton",
    birthday: "-",
    family: "BumBumz (BreakfastBumz)",
    description: "-"
  },
  {
    name: "Susie",
    birthday: "-",
    family: "Zuru Snackles",
    description: "-"
  },
  {
    name: "Robert",
    birthday: "-",
    family: "Patooties Pets",
    description: "-"
  },
  {
    name: "Ritter",
    birthday: "11.07.2022",
    family: "Squishmallows",
    description: "-"
  },
  {
    name: "Pattie",
    birthday: "-",
    family: "BUM BUMZ (BreakfastBumz)",
    description: "-"
  },
  {
    name: "Ring Ring",
    birthday: "04.09.2023",
    family: "YooHoo",
    description: "I love eating bamboo leaves while rolling around and resting all day."
  }
];

const plushies = document.querySelectorAll("div[data-text]");
const plushy_infobox = document.getElementById("plushy_infobox");
const plushy_name = document.getElementById("plushy_name");
const plushy_birthday = document.getElementById("plushy_birthday");
const plushy_family = document.getElementById("plushy_family");
const plushy_description = document.getElementById("plushy_description");

/*let plushies_displays = document.getElementsByClassName("plushies_display");
let plushies_display = plushies_displays[plushies_displays.length - 1];
let temp = document.getElementsByTagName("template")[0];

for (let i = 0; i < plushy_infos.length; i++) {
  temp.setAttribute("data-text", plushy_infos[i].name);
  temp.setAttribute("style", "--image: url(plushy_images/img_pattie.jpg)");
  let clon = temp.content.cloneNode(true);
  plushies_display.appendChild(clon);
  console.log(plushies_display);
}*/


for (let i = 0; i < plushies.length; i++) {
  plushies[i].addEventListener("click", () => {
    plushy_infobox.style.zIndex = "100";
    plushy_infobox.style.opacity = "1";
    plushy_infobox.style.top = "75px";
    plushy_infobox.style.width = "700px";
    
    for (let k = 0; k < plushy_infos.length; k++) {
      if (plushies[i].getAttribute("data-text") == plushy_infos[k].name) {
        plushy_name.innerHTML = plushy_infos[k].name;
        plushy_birthday.innerHTML = plushy_infos[k].birthday;
        plushy_family.innerHTML = plushy_infos[k].family;
        plushy_description.innerHTML = plushy_infos[k].description;
      }
    }
  });
}

function closePlushyBox() {
  plushy_infobox.style.zIndex = "-100";
  plushy_infobox.style.opacity = "0";
  plushy_infobox.style.top = "100px";
  plushy_infobox.style.width = "100px";
}

/*function prepImg(img_url) {
  let img = new Image();
  img.src = img_url;
}
prepImg("iplushy_images/img_chuey.jpg");
prepImg("iplushy_images/img_colton.jpg");
prepImg("iplushy_images/img_pattie.jpg");
prepImg("iplushy_images/img_ringring.jpg");
prepImg("iplushy_images/img_ritter.jpg");
prepImg("iplushy_images/img_robert.jpg");
prepImg("iplushy_images/img_stan.jpg");
prepImg("iplushy_images/img_susie.jpg");*/
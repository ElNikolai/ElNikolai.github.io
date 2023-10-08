const lego_sets = [
  {
    theme: "ninjago",
    name: "The Crystal King",
    number: "71772"
  },
  {
    theme: "ninjago",
    name: "Kai's Dragon Power Spinjitzu Flip",
    number: "71777"
  },
  {
    theme: "ninjago",
    name: "Lloyd's Ninja Street Bike",
    number: "71788"
  },
  {
    theme: "ninjago",
    name: "Jay's Spinjitzu Ninja Training",
    number: "70690"
  },
  {
    theme: "ninjago",
    name: "Lloyd's Dragon Power Spinjitzu Spin",
    number: "71747"
  },
  {
    theme: "ninjago",
    name: "Zane's Power Up Mech EVO",
    number: "71761"
  },
  {
    theme: "ninjago",
    name: "Jay's Golden Dragon Motorbike",
    number: "71768"
  },
  {
    theme: "ninjago",
    name: "Epic Battle Set - Zane vs. Nindroid",
    number: "71731"
  },
  {
    theme: "ninjago",
    name: "Airjitzu Jay Flyer",
    number: "70740"
  },
  {
    theme: "ninjago",
    name: "ElectroMech",
    number: "70754"
  },
  {
    theme: "ninjago",
    name: "Jungle Trap",
    number: "70752"
  },
  {
    theme: "ninjago",
    name: "Lava Falls",
    number: "70753"
  },
  {
    theme: "ninjago",
    name: "Boulder Blaster",
    number: "70747"
  },
  {
    theme: "ninjago",
    name: "Kai's Fire Mech",
    number: "70500"
  },
  {
    theme: "star_wars",
    name: "Luke Skywalker (Red Five) Helmet",
    number: "75327"
  },
  {
    theme: "star_wars",
    name: "Imperial TIE Fighter",
    number: "75300"
  },
  {
    theme: "star_wars",
    name: "Scout Trooper Helmet",
    number: "75305"
  },
  {
    theme: "star_wars",
    name: "Stormtrooper Helmet",
    number: "75276"
  },
  {
    theme: "nexo_knights",
    name: "Knighton Battle Blaster",
    number: "70310"
  },
  {
    theme: "nexo_knights",
    name: "Chaos Catapult",
    number: "70311"
  },
  {
    theme: "nexo_knights",
    name: "Lance's Mecha Horse",
    number: "70312"
  },
  {
    theme: "nexo_knights",
    name: "Clay's Rumble Blade",
    number: "70315"
  },
  {
    theme: "nexo_knights",
    name: "Ultimate Beast Master",
    number: "70334"
  },
  {
    theme: "nexo_knights",
    name: "Ultimate Robin",
    number: "70333"
  },
  {
    theme: "nexo_knights",
    name: "Aaron Fox's Aero-Striker V2",
    number: "70320"
  },
  {
    theme: "nexo_knights",
    name: "Macy's Thunder Mace",
    number: "70319"
  },
  {
    theme: "nexo_knights",
    name: "General Magmar's Siege Machine of Doom",
    number: "70321"
  },
  {
    theme: "nexo_knights",
    name: "Ruina's Lock & Roller",
    number: "70349"
  },
  {
    theme: "nexo_knights",
    name: "Lance's Twin Jouster",
    number: "70348"
  },
  {
    theme: "nexo_knights",
    name: "Battle Suit Axl",
    number: "70365"
  }
];

let ninjago = document.getElementById("ninjago");
let star_wars = document.getElementById("star_wars");
let nexo_knights = document.getElementById("nexo_knights");
let city = document.getElementById("city");
let dots = document.getElementById("dots");
let other = document.getElementById("other");

let temp = document.getElementsByTagName("template")[0];
let name = temp.content.querySelector("p");
let number = temp.content.querySelector("h3");

for (var i = 0; i < lego_sets.length; i++) {
  name.innerHTML = lego_sets[i].name
  number.innerHTML = lego_sets[i].number;
  let clon = temp.content.cloneNode(true);
  
  switch (lego_sets[i].theme) {
    case "ninjago":
      var child = ninjago.children[1];
      break;
    case "star_wars":
      var child = star_wars.children[1];
      break;
    case "nexo_knights":
      var child = nexo_knights.children[1];
      break;
    case "city":
      var child = nexo_knights.children[1];
      break;
    case "dots":
      var child = dots.children[1];
      break;
    case "other":
      var child = other.children[1];
      break;
  }
  
  child.appendChild(clon);
}

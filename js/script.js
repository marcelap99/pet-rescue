const statusButton = document.querySelector("#showStatus");
const pets = document.querySelector(".all-pets");
const hideStatus = document.querySelector("#hideStatus");

function createPet(name,species){
  let pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function(){
        console.log(`${this.name} needs a nap. Zzz…” `);
        this.isTired = 1;
    },
    play: function(){
      if(this.isTired === 10){
        console.log(`Too tired to play.`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  }
  return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "Rat");
const francine = createPet("Francine", "turtle");

// console.log(sora, clover, baxter, cleo, francine);

// clover.sleep();
// baxter.play();

// console.log(clover);
// console.log(baxter);

// clover.isTired = 8;
// francine.isTired = 9;


let allPets = [
  sora, clover, baxter, cleo, francine
]

// console.log(allPets);

function showPets (petArray){

  pets.innerHTML = "";
  for(let element of petArray){
    let status = "ready to play!";

    if(element.isTired >= 7){
      status = "sleeping";

    }

    let li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${element.name}</span> the ${element.species} is ${status}`;
    pets.append(li);
  };



}
// Click button to show list
statusButton.addEventListener("click", function () {
  pets.classList.remove("hide");
 pets.classList.add("all-pets");
 hideStatus.classList.remove("hide");
statusButton.classList.add("hide");
 showPets(allPets);
});

// Click close button to hide list
hideStatus.addEventListener("click",function(){
 pets.classList.remove("all-pets");
 pets.classList.add("hide");
 li = "";
 hideStatus.classList.add("hide");
 statusButton.classList.remove("hide");

});

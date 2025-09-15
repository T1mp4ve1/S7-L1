console.log("_______ESRCIZIO_1_______");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} is younger than ${otherUser.firstName}`;
    } else {
      return `${this.firstName} and ${otherUser.firstName} are the same age`;
    }
  }
}

const user1 = new User("Claudio", "Rossi", 34, "Milano");
const user2 = new User("Ciccio", "Magri", 23, "Nonsolandia");
const user3 = new User("Bruto", "Belli", 56, "Sesto San Fantozzi");
const user4 = new User("Borat", "Afghan", 23, "Schifano");

console.log(user2.compareAge(user4));
console.log(user1.compareAge(user3));
console.log(user4.compareAge(user1));

console.log("");
console.log("_______ESRCIZIO_2_______");

// class
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compareOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
  }
}

// array animals
const pets = [];

// link
const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

// animal in list
function refreshFunc() {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const li = document.createElement("li");
    li.innerText = `${pet.petName} (${pet.species}, ${pet.breed} - Padrone: ${pet.ownerName})`;
    petList.appendChild(li);
  });
}

// form event
petForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // link value
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  // add pet
  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  refreshFunc();

  petForm.reset();

  pets.forEach((pet) => {
    if (pet !== newPet && newPet.compareOwner(pet)) {
      console.log(
        `${newPet.petName} e ${pet.petName} hanno lo stesso padrone (${newPet.ownerName})`
      );
    }
  });
});

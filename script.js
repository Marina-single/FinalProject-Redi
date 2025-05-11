let Yassine = {
  firstName: 'Yassine',
  lastName: "Latiri",
  age: 34,
  isProgrammer: true,
  favoriteBook: "1984",
  favoriteFood: "Curry",
  address: {
      streetName: "Benzenbergstrasse",
      streetNumber: "20A",
      district: "Unter Bilk",
      city: "Dusseldorf",
      zipCode: 40239,
      country: "Germany"
  }
};

let Marina = {
  firstName: 'Marina',
  lastName: "Semenova",
  age: 28,
  isProgrammer: false,
  favoriteBook: "1996",
  favoriteFood: "Pizza",
  address: {
      streetName: "strasse",
      streetNumber: "17",
      district: "Mundsburg",
      city: "Hamburg",
      zipCode: 22087,
      country: "Germany"
  }
};

function deleteSomeProperties(person) {
  delete person.favoriteFood;
  delete person.address.district;

}

deleteSomeProperties(Yassine)
console.log(Yassine)

deleteSomeProperties(Marina)
console.log(Marina)

function celebrateBirthday (person){
  person.age+=1
}

celebrateBirthday(Marina)
console.log(Marina.age)

function isInGermany(person) {
return (person.address.country.toLowerCase()==="germany")
}

console.log(isInGermany(Marina))
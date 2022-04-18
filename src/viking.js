// Soldier
class Soldier {

  constructor(healthParaman, strengthParaman) {
    this.health = healthParaman;
    this.strength = strengthParaman;
  }

  attack = () => {
    return this.strength;
  }
  receiveDamage = (damageParameter) => {
  this.health -= damageParameter;
 };
}

// Viking

class Viking extends Soldier {
constructor(nameParaman, healthParaman, strengthParaman) {
  super(healthParaman, strengthParaman);
  this.name = nameParaman;
 }

receiveDamage = (damageParameter) => {
this.health = this.health - damageParameter;
 if (this.health > 0) {
 return `${this.name} has received ${damageParameter} points of damage;`
} else {
  return `${this.name} has died in act of combat`;

 }
};

battleCry = () => {
 return "Odin Owns You All!";

 };
}
  


// Saxon
class Saxon extends Soldier {
  receiveDamage=(damageParameter) => {
    this.health = this.health - damageParameter
    if (this.health > 0){
      return `A Saxon has receive ${damageParameter} points of damage` 
    } else {
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

// Soldier
class Soldier {
  constructor (health, strength){
    this.health=health;
    this.strength=strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(theDamage){
    this.health-=theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength);
    this.name=name;
  }
  receiveDamage(theDamage){
    super.receiveDamage(theDamage);
    if (this.health>0){
     return `${this.name} has received ${theDamage} points of damage`;
    }else{
     return`${this.name} has died in act of combat`;
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(theDamage){
    this.health-=theDamage
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`
  }else{
    return "A Saxon has died in combat"
  }
}
}



// War
class War {
  vikingArmy= [];
  saxonArmy= [];
  addViking(plus1Viking){
    this.vikingArmy.push(plus1Viking);
  }
  addSaxon(plus1Saxon){
    this.saxonArmy.push(plus1Saxon);
  }
attack(attackers, defenders){
  let randomSaxon=Math.floor(Math.random()*this.saxonArmy.length)
  let randomViking=Math.floor(Math.random()*this.vikingArmy.length)
  let defender=defenders[randomViking];
  let result=defender.receiveDamage(attackers[randomSaxon].strength);
  if (defender.health<=0) defenders.splice(randomViking, 1);
  return result
}
vikingAttack(){
return this.attack(this.vikingArmy, this.saxonArmy);  
}
saxonAttack(){
return this.attack(this.saxonArmy, this.vikingArmy);
}
showStatus(){
  if (this.saxonArmy.length===0){
    return "Vikings have won the war of the century!"
  } else if(this.vikingArmy.length===0){
    return "Saxons have fought for their lives and survived another day..."
  }else if (this.saxonArmy.length===1 && this.vikingArmy.length===1) {
    return "Vikings and Saxons are still in the thick of battle."
  }
}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

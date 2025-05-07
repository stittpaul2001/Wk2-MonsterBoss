const heroes = [
  {
    name: 'Slate Slabrock',
    type: 'dwarf',
    damage: 5,
    health: 100
  },
  {
    name: 'Swift Ironstag',
    type: 'elf',
    damage: 10,
    health: 50
  }
]

const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1
}




//NOTE - Attacking the boss


function attackBoss() {
  let totalDamage = 0
  heroes.forEach(hero => {
    if (hero.health == 0)
      return
    totalDamage += hero.damage  //... Calculate total damage
    console.log('attacking Fat-Head-Smurf')
  })
  boss.health -= totalDamage

  if (boss.health < 1)  //... Reduce the boss health and update the boss's health on the page
    boss.health = 0

}

//NOTE - Boss attacking back


function bossAttack() {
  heroes.forEach(hero => {
    hero.health -= Math.floor(boss.damage * (boss.level * Math.random()))
    if (hero.health < 1) {
      hero.health = 0
      //... Update the hero's health on the page

    }
  })
}


//NOTE - Leveling up


// function levelUpBoss() {
//   if (boss.health <= 0) {
//     //... Update the boss level and health
//   }
// }


//NOTE - Getting paid


// let heroGold = 0
// let bank = heroGold


// function awardHeroes() {
//   let gold = 0
//   heroes.forEach(hero => {

//   })
// Increase the heroes gold, based on boss level, Update gold display on the page

//NOTE - Heroes Dying

function heroHealth() {
  heroes.forEach(hero => {
    hero.health -= 1
    // console.log('hero health dropping')
  })
}


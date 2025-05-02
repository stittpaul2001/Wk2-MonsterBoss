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

function findHeroes() {
  heroes.forEach(hero => {
    let heroElement = document.getElementById(hero.name)
    console.log('Getting Heros')

  })
}

function drawHeroes(heroName) {
  const findHeroes = heroes.find(hero => hero.name == heroName)
  console.log('herosname')

}

function heroHealth() {
  heroes.forEach(hero => {
    hero.health -= 1
  })
}
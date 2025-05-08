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



//NOTE - the logical aspect of the page.

function attackBoss() {
  let totalDamage = 0
  heroes.forEach(hero => {
    if (hero.health == 0) return
    totalDamage += hero.damage
  })

  boss.health -= totalDamage

  console.log('boss is being attacked')
  console.log('boss health', boss.health)
  updateBossHealth()
}

function updateBossHealth() {
  if (boss.health < 1) { }
}

//NOTE - Draw section for the boss/heroes/ and the bank


//NOTE -happens when the page loading

// setInterval()
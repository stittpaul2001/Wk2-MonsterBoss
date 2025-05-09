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
  drawBossHealthBar()
  updateBossHealth()
}

function updateBossHealth() {
  if (boss.health < 1) {
    drawBoss()
    drawBossHealthBar()
  }
}

let heroGold = 0
let bank = heroGold;

function awardHeroes() {
  bank += boss.reward
  drawBank() // Increase the heroes gold, based on boss level, Update gold display on the page
}



//NOTE - Draw section for the boss/heroes/ and the bank
function drawBank() {
  const bankElm = document.getElementById('reward')
  const bankAmount = bankElm.querySelector('bank-amount')
  bankAmount.innerHTML = 'Gold: ' + bank.toString()
}
function drawBoss() {
  const bossElement = document.getElementById('boss-health')
  bossElement.innerText = boss.health.toString()
  const bossMaxHealth = bossElement.querySelector('MaxHealth')

  const bossLevel = bossElement.querySelector('Level')
  bossLevel.innerHTML = 'Level:' + boss.level.toString()


}

function drawBossHealthBar() {
  const bossBarElement = document.getElementById('boss-health-bar')
  bossBarElement.innerText = boss.health.toString()
}

//NOTE -happens when the page loading

// setInterval()
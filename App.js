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
  level: 1,
  award: 50
}

let heroGold = 0

//section - the logical aspect of the page.
//NOTE - this is my onclick for the boss
function attackBoss() {
  let totalDamage = 0
  heroes.forEach(hero => {
    if (hero.health == 0) return
    totalDamage += hero.damage
  })

  boss.health -= totalDamage
  if (boss.health < 0) {
    boss.health = 0
    console.log('boss is dead')
    levelUpBoss()
  }

  console.log('boss is being attacked')
  console.log('boss health', boss.health)
  drawBossStats()

}



function bossAttack() {
  heroes.forEach(hero => {
    if (hero.health == 0) return
    hero.health -= Math.floor(boss.damage * (boss.level * Math.random()))
    if (hero.health < 0) {
      hero.health = 0
      console.log(hero.name + ' is dead')
    }
  })
  console.log('boss is attacking')
  checkForDeath()
  drawHeroes()
}
function checkForDeath() {
  const allHeroesDead = heroes.every(hero => hero.health === 0)
  if (allHeroesDead) return

  const heroesReadyToFight = window.confirm('Shall we fight again?')
  if (!heroesReadyToFight) return
  boss.maxHealth = 100
  boss.health = boss.maxHealth
  boss.level = 1
  drawBossStats()
  heroes.forEach(hero => {
    hero.health = 100
  })
}
function levelUpBoss() {
  if (boss.health === 0)
    console.log('boss is dead now leveling up')
  boss.maxHealth = Math.floor(boss.maxHealth * (boss.level * Math.random()))
  boss.health = boss.maxHealth
  boss.level++
  console.log('boss level up')
  heroGold += Math.ceil(Math.random() * 100)
  drawHeroGold()

}


function awardHeroes() {
  heroGold += boss.award
  drawHeroGold()
  console.log('heroes are being awarded')
}



//Section - Draw section for the boss/heroes/ and the bank

function drawHeroGold() {

  const heroGoldElement = document.getElementById('hero-gold')
  heroGoldElement.innerText = heroGold.toString()

}

function drawSlabRockStats() {
  const slabrockHealthElm = document.getElementById('slabrock-health')
  const slabrockLevelElm = document.getElementById('slabrock-level')
  slabrockHealthElm.innerText = heroes[0].health.toString()
  slabrockLevelElm.innerText = boss.level.toString()
}

function drawSwiftIronstagStats() {
  const swiftIronstagHealthElm = document.getElementById('swiftIronstag-health')
  const swiftIronstagLevelElm = document.getElementById('swiftIronstag-level')
  swiftIronstagHealthElm.innerText = heroes[1].health.toString()
  swiftIronstagLevelElm.innerText = boss.level.toString()

}
function drawHeroes() {
  drawSlabRockStats()
  drawSwiftIronstagStats()
}

function drawBossStats() {
  const bossHealth = Math.floor((boss.health / boss.maxHealth) * 100)
  const bossElement = document.getElementById('boss')

  const bossBarElement = document.getElementById('boss-health-bar')
  bossBarElement.innerText = boss.health.toString()
  const bossHealthElement = document.getElementById('bossHealth')
  bossHealthElement.style.width = bossHealth + '%'

  const bossLevelElement = document.getElementById('bossLevel')
  bossLevelElement.innerText = boss.level.toString()

}


//Section -happens when the page loading
drawHeroes()
setInterval(bossAttack, 5000)
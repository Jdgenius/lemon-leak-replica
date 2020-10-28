let projectile: Sprite = null
let projectile_2: Sprite = null
scene.setBackgroundColor(6)
let playerImg = sprites.food.smallLemon
let projectileImg1 = sprites.food.smallStrawberry
let projectileImg2 = sprites.food.smallCherries
let itemImg = sprites.builtin.coin0

//Set lives
info.setLife(100)


// Create lemon character
let hero = sprites.create(playerImg, SpriteKind.Player)
controller.moveSprite(hero, 100, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(350, function () {
    projectile_2 = sprites.createProjectileFromSide(projectileImg2, 50, 0)
    projectile_2.setPosition(0, randint(0, 120))
})
game.onUpdateInterval(200, function () {
    projectile = sprites.createProjectileFromSide(projectileImg1, 0, 50)
    projectile.setPosition(randint(0, 160), 0)
})
namespace SpriteKind {
    export const Money = SpriteKind.create()
}
let item = sprites.create(itemImg, SpriteKind.Money)
item.setPosition(randint(10, 150), randint(10, 110))

// Detect when player and money collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Money, function(sprite: Sprite, otherSprite: Sprite) {
    item.setPosition(randint(10, 150), randint(10, 110))
    info.changeScoreBy(1)
    info.changeLifeBy(75)
})

//Detect when player and projectiles collide
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(sprite: Sprite, otherSprite: Sprite) {
   info.changeLifeBy(-3) 
   
   hero.startEffect(effects.spray,200)
})
game.onUpdate(function() {
    if (info.score() == 100){
        game.over(true)
    }
})

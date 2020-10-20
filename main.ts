scene.setBackgroundColor(6)
let playerImg = sprites.castle.heroWalkFront1
let projectileImg1 = sprites.castle.rock0
let projectileImg2 = sprites.dungeon.collectibleBlueCrystal
let itemImg = sprites.builtin.coin0

//Create princess character
let hero = sprites.create(playerImg, SpriteKind.Player)
controller.moveSprite(hero, 100, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)

game.onUpdateInterval(500, function() {
    let projectile = sprites.createProjectileFromSide(projectileImg1, 50, 50)
})
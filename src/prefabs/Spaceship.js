//rocket prefab

class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 3;
    }

    update() {

        //left && right movement

        this.x -= this.moveSpeed;

        if (this.x <= this.moveSpeed) {
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }
}
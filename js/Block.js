class Block {
    constructor(x, y) {

        var options = {
            restitution: 0.1,
            friction: 0.4,
            density: 0.5
        }

        this.body = Bodies.rectangle(x, y, 50, 60, options);
        this.width = 50;
        this.height = 60;

        World.add(world, this.body);
    }


    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
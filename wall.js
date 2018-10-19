const WALL_WIDTH = 50;

function WallPair() {
    let walls =  {
        upperWall: new Sprite(scene, 'assets/wall.png', WALL_WIDTH, 220),
        lowerWall: new Sprite(scene, 'assets/wall.png', WALL_WIDTH, 220)
    };

    walls.resetCount  = false;

    walls.setSpeed = function(speed){
        this.upperWall.setSpeed(speed);
        this.lowerWall.setSpeed(speed);
    }

    walls.setBoundAction = function(action){
        this.upperWall.setBoundAction(action);
        this.lowerWall.setBoundAction(action);
    }

    walls.collidesWith = function(sprite){
        return this.upperWall.collidesWith(sprite) || this.lowerWall.collidesWith(sprite);
    }

    walls.update = function(){
        this.upperWall.update();
        this.lowerWall.update();
        if (this.upperWall.x < 0){
            walls.newPosition = true;
            this.setPosition(scene.width+40);
        }
    }

    walls.setPosition = function(x){
        let randomHeight = 0;
        if (this.newPosition){
            let posOrNeg = Math.random() > 0.5 ? -1 : 1;
            randomHeight = Math.floor(Math.random() * 80 * posOrNeg);
        }
        this.upperWall.setPosition(x, 0 + randomHeight);
        this.lowerWall.setPosition(x, scene.height - randomHeight);
    }

    walls.setBoundAction(CONTINUE);
    walls.setSpeed(-18);

    return walls;
}
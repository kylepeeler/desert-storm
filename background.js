function Background(){
    let background = new Sprite(scene, 'assets/background.png', 1600, 800);
    background.setSpeed(-10);
    background.setBoundAction(CONTINUE);
    background.setY(background.height/2);
    background.checkBounds = function(){
        if (this.x <= 0){
            background.setX(800);
        }
    }
    return background;
}
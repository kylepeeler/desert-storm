function Helicopter() {
    let helicopter = new Sprite(scene, 'assets/helicopter/heli-0.png', 75, 23);
    let imgInd = 0;
    helicopter.animate = function(){
        imgInd = (imgInd + 1) % 4;
        helicopter.setImage('assets/helicopter/heli-' + (imgInd) + '.png');
    }
    helicopter.setPosition(200,250);
    helicopter.setSpeed(0);
    helicopter.setDY(8);
    helicopter.flyUp = function(){
        helicopter.setDY(-9);

    }
    helicopter.flyDown = function(){
        helicopter.setDY(9);
    }
    return helicopter;
}
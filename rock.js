function Rock() {
    var rock = new Sprite(scene, 'assets/rock.png', 40, 125);
    rock.setSpeed(-18);
    rock.setBoundAction(CONTINUE);
    rock.updateWithPos = function(){
        if (rock.x < 0) {
            rock.setPosition(950, 350 - Math.floor(Math.random() * 180));
            rock.height = Math.floor(Math.random() * 25) + 125;
        }
        rock.update();
    }
    return rock;
}
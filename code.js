

say("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!");


setup(()=>{

var gamepads = {};

var gamepad;
var gamepadPos;

window.addEventListener("gamepadconnected",
    function (e) {
        gamepads = navigator.getGamepads();
        gamepadPos = e.gamepad.index;
        gamepad = navigator.getGamepads()[e.gamepad.index];
    },
    false
);


function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];
}


addEventListener("gamepadconnected", ()=>{
    
    pen.style.height = 100
    pen.style.width = 100

    pen.style.borderRadius = "50%"
    
    setInterval(()=>{
        
        updateControllers()
        
        pen.clear()
        
        pen.style.color = color.rgb(200, 200, 0)
        pen.x = gamepad.axes[0] * 100 + 100
        pen.y = gamepad.axes[1] * 100 + 100
        pen.rectangle()
        
        pen.style.color = color.rgb(0, 200, 200)
        pen.x = gamepad.axes[2] * 100 + 400
        pen.y = gamepad.axes[3] * 100 + 100    
        pen.rectangle()
    
    }, 1);
})


})


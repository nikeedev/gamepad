

say("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev and stio_studio!");

function updateControllers() {
    gamepads = navigator.getGamepads();
    gamepad = navigator.getGamepads()[gamepadPos];
}


// Setup funksjonen bryter et par ting for oss:
// 1. Vi kan ikke få tilgang til variablene som inneholder kontroller data, og då kan vi ikke heller kjøre vibration.
// 
// Grunn: Funksjoner som endrer på variabler eller lager nye, er bare tilgjenlige inni funksjonen, det betyr at eksisterende variabler får ikke oppdatering (at vi f.eks setter gamepad variablen til kontrolleren din inni setup, skjer det ikke utenfor), 
//
// -og det stopper muligheten til å gjøre ting vi vil, som vibration, og jeg har ikke funnet en god grunn hvifor det skjer, men det fungerer greit utenfor funksjonen. 
//
//  Om du bestemmer deg om å ta vekk setup funksjonen og gjør sånt at koden fungerer overalt, så takker jeg deg.
//
//                      
//                      
//  Nikita : 2022         
//                    |-\       |-|             
//                    | |\      | |
//                    | | \     | |     
//                    | |  \    | |   
//                    | |   \   | |
//                    | |    \  | |
//                    |_|     \_|_|
//


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


    addEventListener("gamepadconnected", ()=>{
        
        pen.style.height = 100
        pen.style.width = 100

        pen.style.borderRadius = "50%"
        

        const updateFunc = () => {
                   
            updateControllers()
        
            pen.clear()
            
            // If you click on L3, the joy stick color gets darkened
            if (gamepad.buttons[10].pressed) {
                pen.style.color = color.rgb(120, 120, 0)
            }
            else {
                pen.style.color = color.rgb(200, 200, 0)
            }
            // pen.style.color = color.rgb(200, 200, 0)
            pen.x = gamepad.axes[0] * 100 + (window.innerHeight/2+100);
            pen.y = gamepad.axes[1] * 100 + (window.innerHeight/2);
            pen.rectangle()
            
            // If you click on R3, the joystick color gets darkened
            if (gamepad.buttons[11].pressed) {
                pen.style.color = color.rgb(0, 120, 120)
            }
            else {
                pen.style.color = color.rgb(0, 200, 200)
            }

            // pen.style.color = color.rgb(0, 200, 200)
            pen.x = gamepad.axes[2] * 100 + (window.innerHeight/2+400);
            pen.y = gamepad.axes[3] * 100 + (window.innerHeight/2);    
            pen.rectangle()

            requestAnimationFrame(updateFunc);
    
        }
        requestAnimationFrame(updateFunc);
        

    })
})



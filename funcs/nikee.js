
/*
function playVibration() {

    gamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: parseFloat(durationTime.value),
        weakMagnitude: parseFloat(weakMagnitudeInput.value),
        strongMagnitude: parseFloat(strongMagnitudeInput.value)
    });
}

*/

/*
var btns = document.createElement("div");
var playVbrtion = document.createElement("button");

btns.id = "btns";

playVbrtion.onclick = playVibration();
playVbrtion.innerText = "Play Vibration"


btns.appendChild(playVbrtion);


var weakMagnitudeInput = document.createElement("input");
weakMagnitudeInput.placeholder = "Weak Magnitude ( 0.0 <-> 1.0 )"

var strongMagnitudeInput = document.createElement("input");
strongMagnitudeInput.placeholder = "Strong Magnitude ( 0.0 <-> 1.0 )"

var durationTime = document.createElement("input");
durationTime.placeholder = "Duration ( secs )"


btns.appendChild(weakMagnitudeInput);
btns.appendChild(strongMagnitudeInput);
btns.appendChild(durationTime);

document.body.appendChild(btns);


/*
<div id="btns">
        <button onclick="updateControllers();">Update Controllers</button>
        <br>
        <button onclick="playVibration();">Play Vibration</button>
    </div>
*/


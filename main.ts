radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("biotza")
})
radio.onReceivedString(function (receivedString) {
    if ("pozik" == receivedString) {
        basic.showIcon(IconNames.Happy)
    }
    if ("triste" == receivedString) {
        basic.showIcon(IconNames.Sad)
    }
    if ("biotza" == receivedString) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(6)

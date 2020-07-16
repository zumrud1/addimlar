input.onButtonPressed(Button.A, function () {
    addim_saymaq = 0
})
input.onGesture(Gesture.Shake, function () {
    addim_saymaq += 1
    led.stopAnimation()
})
let addim_saymaq = 0
addim_saymaq = 0
basic.forever(function () {
    basic.showNumber(addim_saymaq)
})

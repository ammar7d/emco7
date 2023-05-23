let myVar = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    myVar += 1
    basic.showNumber(myVar)
})

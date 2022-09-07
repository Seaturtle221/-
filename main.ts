input.onButtonPressed(Button.A, function () {
    기록[위치] = input.runningTime() / 1000
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        # . # . #
        # # # # #
        `)
    basic.pause(200)
    위치 += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(기록[0])
    basic.showNumber(기록[1])
    basic.showNumber(기록[2])
})
let 위치 = 0
let 기록: number[] = []
기록 = [0, 0, 0]
위치 = 0

// Total Sum of Player 1
input.onButtonPressed(Button.A, function () {
    basic.showString("Total P1")
    PLYR_1_Sum = Player_1
    basic.showNumber(Player_1)
})
// MAIN button to play
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    if (Coin_1 == "Heads" && Coin_2 == "Heads") {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        basic.showString("W")
        basic.showString("PYR 1")
        Player_1 += 1
        basic.showNumber(Player_1)
    } else if (Coin_1 == "Tails" && Coin_2 == "Tails") {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        basic.showString("W")
        basic.showString("PYR 1")
        Player_1 += 1
        basic.showNumber(Player_1)
    } else if (Coin_1 == "Heads" && Coin_2 == "Tails") {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        basic.showString("W")
        basic.showString("PYR 2")
        Player_2 += 1
        basic.showNumber(Player_2)
    } else if (Coin_1 == "Tails" && Coin_2 == "Heads") {
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        basic.showString("W")
        basic.showString("PYR 2")
        Player_2 += 1
        basic.showNumber(Player_2)
    }
})
// Total Sum of Player 2
input.onButtonPressed(Button.B, function () {
    basic.showString("Total P2")
    PLYR_2_Sum = Player_2
    basic.showNumber(Player_2)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let PLYR_2_Sum = 0
let PLYR_1_Sum = 0
let Coin_2 = ""
let Coin_1 = ""
let Player_2 = 0
let Player_1 = 0
Player_1 = 0
Player_2 = 0
Coin_1 = "Heads"
Coin_2 = "Heads"

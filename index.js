function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (act2= "go to the office") {
    return `This Monday, I will ${act2}.`
}

function wrapAdjective (flair = "*") {
    return function(word = "special") {
        return `You are ${flair}${word}${flair}!`
    }
}

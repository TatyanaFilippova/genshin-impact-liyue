
function ChangeText({ count }) {
    if (count === 1) {
        return ' персонаж'
    }
    else if ((count === 2) || (count === 3) || (count === 4)) {
        return ' персонажа'
    }
    return ' персонажей'
}

export default ChangeText
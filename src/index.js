module.exports = function toReadable(number) {
    let result = '';

    if (number === 0) {
        result = 'zero';
    }

    if (number >= 100) {
        console.log((number % 100 == 0) ? '' : (' ' + toReadable(number % 100)));
        result = toReadable(Math.floor(number / 100)) + ' hundred' + (number % 100 == 0 ? '' : ' ' + toReadable(number % 100));
    } else if (number < 20) {
        switch (number) {
            case 1:
                result += 'one';
                break;
            case 2:
                result += 'two';
                break;
            case 3:
                result += 'three';
                break;
            case 4:
                result += 'four';
                break;
            case 5:
                result += 'five';
                break;
            case 6:
                result += 'six';
                break;
            case 7:
                result += 'seven';
                break;
            case 8:
                result += 'eight';
                break;
            case 9:
                result += 'nine';
                break;
            case 10:
                result += 'ten';
                break;
            case 11:
                result += 'eleven';
                break;
            case 12:
                result += 'twelve';
                break;
            case 13:
                result += 'thirteen';
                break;
            case 14:
                result += 'fourteen';
                break;
            case 15:
                result += 'fifteen';
                break;
            case 16:
                result += 'sixteen';
                break;
            case 17:
                result += 'seventeen';
                break;
            case 18:
                result += 'eighteen';
                break;
            case 19:
                result += 'nineteen';
                break;
        }
    } else {
        if (number % 10 === 0) {
            switch (number) {
                case 20:
                    result += 'twenty';
                    break;
                case 30:
                    result += 'thirty';
                    break;
                case 40:
                    result += 'forty';
                    break;
                case 50:
                    result += 'fifty';
                    break;
                case 60:
                    result += 'sixty';
                    break;
                case 70:
                    result += 'seventy';
                    break;
                case 80:
                    result += 'eighty';
                    break;
                case 90:
                    result += 'ninety';
                    break;
            }
        } else {
            let reminder = number % 10;
            result += toReadable(number - reminder) + ' ' + toReadable(reminder);
        }
    }

    return result;
}
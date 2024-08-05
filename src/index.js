module.exports = function toReadable (number) {
    const a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const c = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const d = 'hundred';
    const e = 'zero';
    const f = 'ten';

    let string = number.toString();
    let final_num = '';

    if (number == 0) return e;
    else if (string.length == 1) {
        return a[number - 1];
    } else if (string.length == 2) {
        final_num = 
        (number == 10) ? f : (parseInt(string[0]) == 1) ?  b[parseInt(string[1]) - 1] : 
        (parseInt(string[1]) == 0) ? c[parseInt(string[0]) - 1] : c[parseInt(string[0]) - 1] + ' ' + a[parseInt(string[1]) -1];
    } else if (string.length == 3) {
        final_num = 
        (parseInt(string[1]) == 0 && parseInt(string[2]) == 0) ? a[parseInt(string[0] - 1)] + ' ' + d : 
        (parseInt(string[1]) == 1) ? a[parseInt(string[0] - 1)] + ' ' + d + ' ' + (b[parseInt(string[2] - 1)] || f) : 
        (parseInt(string[1]) == 0) ? a[parseInt(string[0] - 1)] + ' ' + d + ' ' + a[parseInt(string[2] - 1)] : 
        (parseInt(string[2]) == 0) ? a[parseInt(string[0] - 1)] + ' ' + d + ' ' + c[parseInt(string[1] - 1)] : 
        a[parseInt(string[0] - 1)] + ' ' + d + ' ' + c[parseInt(string[1] - 1)] + ' ' + a[parseInt(string[2]) - 1];
    };
    return final_num;
}

// Given a time in 12 - hour AM / PM format, convert it to military(24 - hour) time.
//     Note: - 12:00:00AM on a 12 - hour clock is 00:00:00 on a 24 - hour clock. - 12:00:00PM on a 12 - hour clock is 12:00:00 on a 24 - hour clock.

//         exmple -
//         s='12:01:00PM'
// Return '12:01:00'.
//     s = '12:01:00AM'
// Return '00:01:00'.

function timeConversion(s) {
    const period = s.slice(-2);
    let hours = parseInt(s.slice(0, 2));
    const minutes = s.slice(3, 5);
    const seconds = s.slice(6, 8);
    if (period === "PM") {
        if (hours !== 12) {
            hours += 12;
        }
    }
    else {
        if (hours === 12) {
            hours = 0;
        }
    }
    let hourStr = hours < 10 ? "0" + hours : hours.toString();
    return `${hourStr}:${minutes}:${seconds}`;
}


let s = '07:01:00PM'
console.log(timeConversion(s))
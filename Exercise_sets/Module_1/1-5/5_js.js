const a = prompt('Enter a year: ');

const year = parseInt(a);

if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
    document.querySelector('#year').innerHTML = year + ' is a leap year';
} else {
    document.querySelector('#year').innerHTML = year + ' is not a leap year';
}
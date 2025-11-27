const answer = confirm('Should I calculate the square root?');

if (answer === true){
    const a = prompt('Enter a number: ');
    const num = parseInt(a);

    if (num > 0){
        const squared = Math.sqrt(num);
        document.querySelector('#square').innerHTML = 'The square root of a '+ num + ' is ' + squared ;
    }else{
        document.querySelector('#square').innerHTML = 'The square root of a negative number is not defined';
    }

}else{
    document.querySelector('#square').innerHTML = 'The square root is not calculated';
}
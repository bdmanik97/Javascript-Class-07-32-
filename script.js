
function show(){
    event.preventDefault();

    // document.getElementById('output').innerHTML = "Roymanikbd.com";

// Calculate Value start here
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    if(number2 == ''){
        number2 = 0;
    }

    let numberint1 = parseInt(number1);
    let numberint2 = parseInt(number2);

    let result = numberint1+numberint2;
    document.getElementById('result').innerHTML ='Result= '+ result;
        // console.log(result);
    // Calculate Value end here
}
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`;
    }
    //result.innerHTML = `${height}`
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight ${weight}`
    }

    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`
    

    if(bmi <= 16.6){
        result.innerHTML = `<span style="color: orange;">Underweight: ${bmi}</span>`;
    }
    else if( bmi >= 16.6 && bmi <= 24.9){
        result.innerHTML = `<span style="color: green;">Normal range: ${bmi}</span>`
    }
    else{
        result.innerHTML = `<span style="color: red:">Overweight: ${bmi}</span>`
    }
    
});
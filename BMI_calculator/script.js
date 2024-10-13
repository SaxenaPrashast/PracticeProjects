const form  = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')    
    const eminem = document.querySelector('#eminem')    


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "please give a valid number";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "please give a valid number";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span/>`

        if(bmi<18.6){
            eminem.innerHTML= `<span>Underweight</span>`
        }
        else if(bmi>=18.6 && bmi <=24.9){
            eminem.innerHTML= `<span>Normal range</span>`
        }
        else{
            eminem.innerHTML= `<span>overweight</span>`
        }
    }
})
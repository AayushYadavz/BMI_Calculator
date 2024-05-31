// Selecting form element
const form = document.querySelector('form')
/* const weight = parseInt(document.querySelector('#weight').value); This usecase will give us 
empty value when page loads. */

form.addEventListener('submit', (e) => {
    e.preventDefault(); // To stop default action of form.
     
    // Selecting here cause we want values on this event, when clicking on calculate
    const height = parseInt(document.querySelector('#height').value); /* To access the value & 
    using parseInt cause value comes in string and parseInt parse it into integar. */
    const weight = parseInt(document.querySelector('#weight').value); // To access the value
    const results = document.querySelector('#results'); 

    // Adding values in result after checks
    if (height === '' || height < 0 || isNaN(height)) { // isNaN(), Value should not be a NaN
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2) // toFixed(2), for 2 decimals values
        results.innerHTML = `<span>${bmi}</span>`;
    } 
} );
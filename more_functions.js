function displayMailingLabel(name, address, city, state, zip){
    console.log(`
    ${name}
    ${address}
    ${city} 
    ${state} ${zip}
    `)
}
displayMailingLabel("Danielle", "555 noname st", "Livingston", "NJ", "O7O59");
displayMailingLabel("Anna Banana", "123 NY ST", "Jersey City", "NJ", "08500");


// ADD NUMBERS
function addNumbers(num1, num2){
   let result= num1 + num2;
console.log(result)
}
addNumbers(5,10);
addNumbers(56,100);


// DISPLAY RECEIPTS
function displayReceipt(totalDue, amountPaid){
    console.log(amountPaid - totalDue);
   
    if(amountPaid<totalDue){
        console.log(`Your payment has been declined for insuffiant funds.`)
    }else if (amountPaid>totalDue){
        console.log("Payment succesfull")
    }
    // console.log(changeDue)
}
displayReceipt(300, 200);
displayReceipt(200, 300);

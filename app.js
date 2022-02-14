/* function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number')
    let caseNumber = caseInput.value
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber)+1
    }
    else if( caseNumber > 0){
       caseNumber = parseInt(caseNumber)-1
    }

    caseInput.value = caseNumber;

    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber*59;

}

document.getElementById('case-plus').addEventListener('click', function(){

    updateCaseNumber(true)
      
})

document.getElementById('case-minus').addEventListener('click', function(){
   
    updateCaseNumber(false)
    
}) */


function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) { 
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}

// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})
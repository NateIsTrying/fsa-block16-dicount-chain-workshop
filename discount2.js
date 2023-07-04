const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//ATEMPT #1

// //calculate fullCost
// const fullCost = (price, numRefills) => {
//     return price * numRefills;
// }

// // testing each patient, dot notation used to call from objects
// const timmyCost = fullCost(timmy.pricePerRefill, timmy.refills)
// //console.log(timmyCost);
// const sarahCost = fullCost(sarah.pricePerRefill, sarah.refills)
// //console.log(sarahCost);
// const rockyCost = fullCost(rocky.pricePerRefill, rocky.refills)
// //console.log(rockyCost);


// // if subsciption applicable, calculate 25% of total to subtract.
// const subDiscount = (hasSub, fullPrice) => {
//     if(hasSub === true){
//         return fullPrice = fullPrice * .25;
//     } else {
//         return 0;
//     }
// }

// const timmySub = subDiscount(timmy.subscription,timmyCost);
// // console.log(timmySub);
// const sarahSub = subDiscount(sarah.subscription,sarahCost);
// // console.log(sarahSub);
// const rockySub = subDiscount(rocky.subscription,rockyCost);
// // console.log(rockySub);


// // if coupon applicable, subtract -10 from total
// const coupDiscount = (hasCoup) => {
//     if(hasCoup === true){
//         return 10;
//     } else {
//         return 0;
//     }
// }

// const timmyCoup = coupDiscount(timmy.coupon);
// // console.log(timmyCoup);
// const sarahCoup = coupDiscount(sarah.coupon);
// // console.log(sarahCoup);
// const rockyCoup = coupDiscount(rocky.coupon);
// // console.log(rockyCoup);


// // calculate final total with discounts
// // ((totalCost - subDiscount) - coupDiscount)
// const grandTotal = (totalCost, subDiscount, coupDiscount) => {
//     const finalTotal = (totalCost - subDiscount) - coupDiscount;
//     // console.log(`The regular full price is: ${totalCost}`);
//     // console.log(`Your subscription discount is: -${subDiscount}`);
//     // console.log(`Your coupon discount is: -${coupDiscount}`);
//     // return grand total with 'your grand total is (total)'
//     return `Your grand total is $${finalTotal}`
// }

// const timmyGrand = grandTotal(timmyCost, timmySub, timmyCoup);
// console.log(timmyGrand);
// const sarahGrand = grandTotal(sarahCost, sarahSub, sarahCoup);
// console.log(sarahGrand);
// const rockyGrand = grandTotal(rockyCost, rockySub, rockyCoup);
// console.log(rockyGrand);

// How to make this as tight as possible?

// SECOND ATTEMPT: SHORTER, CLEANER, but not easier to understand. Used too
// many pieces for one function, not simple code. 

//if object's name is called in a parameter, you can interchange objects, 
//by calling different names (timmy, sarah, rocky). 
const grandTotal = (patient) => {
    // calculate full patient price with object properties only.
    let patientPrice = patient.pricePerRefill * patient.refills;
        console.log(`The regular full price is: ${patientPrice}`);

    // use 'if' statements 
    // subtract from regularPrice on subDiscount
    if(patient.subscription === true){
        const subtractedAmount = patientPrice * 0.25;
        patientPrice = patientPrice * 0.75;
        // used to visualize sub discount
        console.log(`Your subscription discount is: -$${subtractedAmount}`);
    } // no else, because if 'if' condition not met, it exits anyways

    // subtract coupDiscount from regularPrice
    if(patient.coupon === true){
        patientPrice = patientPrice - 10;
        // used to visualize coupon discount
        console.log(`Your coupon discount is: -$10`);
    } // no else, because if 'if' condition not met, it exits anyways

    // return patientPrice
    return `Your grand total is: $${patientPrice}`;
    
}

const timmyGrandTotal = grandTotal(timmy);
console.log(timmyGrandTotal);
const sarahGrandTotal = grandTotal(sarah);
console.log(sarahGrandTotal);
const rockyGrandTotal = grandTotal(rocky);
console.log(rockyGrandTotal);
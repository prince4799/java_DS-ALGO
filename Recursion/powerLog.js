

//====================== Type 1 =====================

// const power=(base , exponent)=>{

//     if(exponent == 0)return 1;

//     let xpw2= power(base, Math.floor(exponent / 2));
//     let result= xpw2*xpw2;

//     if(exponent % 2 == 1){
//         result *= base;
//     }
//     return result;


// }

// console.log(power(2,6));

//======================= Type 2 ====================

let num_of_rec = 0
const power = (base, exponent, result = 1) => {
    num_of_rec++
    if (exponent == 0) {
        return 1
    }
    let xpw2 = power(base, Math.floor(exponent / 2), result);
    let pow = xpw2 * xpw2;
    if (exponent % 2 == 1) {
        pow *= base;
    }
    result = pow;
    // exponent==num_of_rec? console.log(result):null
    return result;

}

//==============Type 2 is still incomplete ==========================

power(2, 1)

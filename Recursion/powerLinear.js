
// ========================== type 1 ==========================
// const power = (base, exponent) => {

//     if(exponent==0){
//         return 1;
//     }
//         return base*power(base,exponent-1);
// }

// console.log(power(2,4));

// ========================== type 2 ==========================

const power = (base , exponent, result=1 ) =>{

    if (exponent == 0)
    {
        console.log(result);
        return 1;
    }

    result *= base
     power(base,exponent-1 , result)
}
power(2,10)


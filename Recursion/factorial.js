

// ================== Type 1 ===============
// const factorial=(num)=>{
//     if(num==0 || num =1)return 1;

//    return num* factorial(num-1);
// }

// console.log(factorial(5));

// ================== Type 2 ===============

const factorial = (num, result = 1) => {
    if (num === 0) {
        console.log(result);
        return;
    }

    result *= num;
    factorial(num - 1, result);
}

factorial(5);
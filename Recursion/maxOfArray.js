

//=================== Type 1 ======================
const max_of_array_1 = (arr, index = 0) => {
    if (!arr[index]) {
        return Number.NEGATIVE_INFINITY; // Return negative infinity to initialize max
    }
    let max = max_of_array_1(arr, index + 1);
    return Math.max(max, arr[index]);
}

console.log(max_of_array_1([1, 2, 6, 4]));




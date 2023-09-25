

const ret_freq_of = (arr, i, target, result = 0) => {
    if (arr[i] == undefined) {
        return result;
    }
    if (arr[i] !== undefined && arr[i] == target)
        result += 1
    return  ret_freq_of(arr, i + 1, target, result)
}

let val = ret_freq_of([1, 2, 3, 3, 3, 3, 4,1,1,1,1,1,], 0, 1)
console.log(val);
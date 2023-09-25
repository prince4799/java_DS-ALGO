

//========================== Type 1 ========================

const first_index_of_1 = (arr, i, target) => {
    // console.log(i, target, arr[i]);
    if (arr[i] == undefined) return

    if (target != arr[i]) 
        return first_index_of_1(arr, i + 1, target)
        return i;

}

let index_of_num = first_index_of_1([1, 2, 0, 0, 3, 4, 5], 0, 3)

console.log("first_index_of_1 :"+index_of_num);

// ========================= Type 2 ===================

const first_index_of_2 = (arr, i, target) => {
    // console.log(i, target, arr[i]);
    if (arr[i] == undefined) return

    if (target != arr[i]) 
        return first_index_of_2(arr, i + 1, target)
        console.log("first_index_of_2 :"+i);

}

first_index_of_2([1, 2, 0, 0, 3, 4, 5], 0, 3)

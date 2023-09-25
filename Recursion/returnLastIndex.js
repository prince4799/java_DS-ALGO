

// ==================== Type 1 =================

const last_index_of_1=(arr,index,target)=>{

    if(!arr[index])return ;

    let last_index=last_index_of_1(arr,index+1,target);

    if(last_index== -1){
        if(target==arr[index]){
            return index
        }else
        return -1
    }else return last_index

}
let val=last_index_of_1([1, 2, 0, 0, 3, 4, 5], 0, 3)
console.log("val->",val);
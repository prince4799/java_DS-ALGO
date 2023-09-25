
//=============== array in order ===================
const print_inorder=(arr,index=0)=>{

    if(!arr[index]){
        return;
    }

    process.stdout.write("  "+arr[index].toString());
    print_inorder(arr,index+1);
    
}
console.log("In order");
print_inorder([1,2,3,4,5,6,7,8])

//=============== array in reverse order ===================
console.log("\n");

const print_rev_order=(arr,index=0)=>{

    if(!arr[index]){
        return;
    }

    print_rev_order(arr,index+1);
    process.stdout.write("  "+arr[index].toString());
    
}
console.log("In reverse order");

print_rev_order([1,2,3,4,5,6,7,8])
console.log("\n");

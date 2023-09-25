

const get_stairs_paths=( stairs)=>{
console.log("stairs",stairs);
    if(stairs== 0)return [""]

    if(stairs<0)return []

    let path_new= []

    // for (let i=1;i<=3;i++){
    //     path_new.push(''+i+get_stairs_paths(stairs-i))
    // }

    for (let i = 1; i <= 3; i++) {
        const pathsWithCurrentStep = get_stairs_paths(stairs - i).map((path) => '' + i + path);
        path_new = path_new.concat(pathsWithCurrentStep);
    }
console.log(path_new);
    return [...path_new]
} 



const total_paths = get_stairs_paths(4);
console.log("total_paths", total_paths);


// let total_paths=get_stairs_paths(4)
// console.log("total_paths",total_paths);
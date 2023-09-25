
let data = [
    {
        "name": "Prince",
        "Subjects": ["eng", "hindi", "maths"]
    },
    {
        "name": "Verma",
        "Subjects": ["eng", "hindi", "maths"]
    },

]

let mapData= data.map(item=>{
   return item.Subjects
})
console.log("mapData :",mapData);

let flatmapData= data.flatMap(item=>{
    return item.Subjects
 })
 const newData= new Map([mapData])
 const newDataSet= new Set(flatmapData)
 console.log("flatmapData :",flatmapData);
//  console.log("newData :",newData);
//  console.log("newDataSet",newDataSet);
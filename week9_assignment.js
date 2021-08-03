let cutleries1 = ["cup","glass","spoon","knives","fork"];
let cutleries2 = ["cup","spoon","knives","plate","teamug"];

function diffArray (array1,array2) { 
    const x = array1.filter(x => !array2.includes(x));
    const y = array2.filter(x => !array1.includes(x));

    return x.concat(y);
}
console.log (diffArray(cutleries1, cutleries2));  

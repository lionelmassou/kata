//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    var a = [];
    var b = [];
    var prev = 0;
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        } prev = arr[i];
    } return [a, b];

    // var sup = [];
    // for (var i = 0; i < b.length; i++){
    //     if (sup[0]<sup[i]){
    //         sup = sup[i];
    //         return a[i];
    //     }
    // }
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5
    // findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); //-1
    // findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); //5
    // findOdd([10]); //10
    // findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); //10
    // findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); //1
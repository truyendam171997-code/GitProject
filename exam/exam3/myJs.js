function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function increase(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function findPrime(arr) {
    let result = [];
    for (let i = 0; i < arr.length ; i++) {
      if (isPrime(arr[i])) {
          result.push(arr[i]);
      }
    }
    if (result.length === 0) {
        document.write("mảng không có số nguyên tố "+"<br>");
    }
    else {
        increase(result);
        document.write("mảng các số nguyên tố đã sắp sếp là:" + result +"<br>");
    }

}


findPrime([1,5,6,23,8,47,10,3]);
findPrime([]);
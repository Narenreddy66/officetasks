let num = [12, 34, 25, 67, 88, 50];
num.map(
    (n) => {
        if (n >= 50) {
            console.log(n * 2);
        }
        else {
            console.log(n * 1);
        }
    }
)
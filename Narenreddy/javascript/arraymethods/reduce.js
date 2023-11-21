let num = [10, 20, 40, 23, 45];
num.reduce(
    (num) => {
        if (num <= 120) {
            console.log(num)
        }
    }
)
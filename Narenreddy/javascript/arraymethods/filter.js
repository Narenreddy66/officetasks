let naren = [2, 5, 7, 8, 10, 24];
naren.filter(
    (n) => {
        if (n % 2 === 0) {
            console.log(n);
        }
        else {
            console.log('no even');
        }

    }
)

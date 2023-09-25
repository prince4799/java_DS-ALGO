

function incDec(num) {
    if (num < 0) {
        console.log(num);
        return;
    }

    console.log(num);
    incDec(num - 1);
    console.log(num);
}

incDec(5);
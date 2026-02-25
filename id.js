let num = 49;
i = 2;
while (i < num) {
    if (i * i === num) {
        console.log(`the square root of ${num} is ${i}`);
        break;
    }
    else {
        console.log(`please input another number`);
    }
    break;
    i++;
}
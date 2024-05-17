async function radixSort(arr, order = 'asc') {
    const max = Math.max(...arr);
    let exp = 1;
    while (Math.floor(max / exp) > 0) {
        uiUpdater.updateTrace(arr, `Ordenando por el dígito en el lugar ${exp}`);
        await countingSortByDigit(arr, exp, order);
        exp *= 10;
    }
    uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
}

async function countingSortByDigit(arr, exp, order) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    uiUpdater.updateTrace(count, `Conteo de dígitos antes de extraer los números`);
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        uiUpdater.updateTrace(arr, `Colocado ${arr[i]} según su dígito ${Math.floor(arr[i] / exp) % 10}`, [i]);
        await delay();
    }
    if (order === 'desc') {
        arr.reverse();
        uiUpdater.updateTrace(arr, `Secuencia invertida para el orden descendente`);
    }
}

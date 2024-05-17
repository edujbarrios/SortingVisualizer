async function shakeSort(arr, order = 'asc') {
    let swapped = true;
    let start = 0;
    let end = arr.length;
    while (swapped) {
        swapped = false;
        for (let i = start; i < end - 1; ++i) {
            if ((order === 'asc' && arr[i] > arr[i + 1]) || (order === 'desc' && arr[i] < arr[i + 1])) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                uiUpdater.updateTrace(arr, `Intercambiado ${arr[i]} y ${arr[i + 1]} para mover elementos ${order === 'asc' ? 'menores a la izquierda' : 'mayores a la izquierda'}`, [i, i + 1]);
                await delay();
                swapped = true;
            }
        }
        if (!swapped) break;
        swapped = false;
        end--;
        for (let i = end - 1; i >= start; i--) {
            if ((order === 'asc' && arr[i] > arr[i + 1]) || (order === 'desc' && arr[i] < arr[i + 1])) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                uiUpdater.updateTrace(arr, `Intercambiado ${arr[i]} y ${arr[i + 1]} para mover elementos ${order === 'asc' ? 'mayores a la derecha' : 'menores a la derecha'}`, [i, i + 1]);
                await delay();
                swapped = true;
            }
        }
        start++;
    }
    uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
}

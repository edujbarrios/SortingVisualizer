async function heapSort(arr, order = 'asc') {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i, order);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        uiUpdater.updateTrace(arr, `Intercambiado ${arr[0]} y ${arr[i]} para mover el elemento más grande a la posición correcta`, [0, i]);
        await delay();
        await heapify(arr, i, 0, order);
    }
    uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
}

async function heapify(arr, n, i, order) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && ((order === 'asc' && arr[left] > arr[largest]) || (order === 'desc' && arr[left] < arr[largest]))) {
        largest = left;
    }
    if (right < n && ((order === 'asc' && arr[right] > arr[largest]) || (order === 'desc' && arr[right] < arr[largest]))) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        uiUpdater.updateTrace(arr, `Intercambiado ${arr[i]} y ${arr[largest]} para mantener la propiedad del montón`, [i, largest]);
        await delay();
        await heapify(arr, n, largest, order);
    }
}

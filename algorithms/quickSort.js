async function quickSort(arr, left = 0, right = arr.length - 1, order = 'asc') {
    if (left < right) {
        const pivotIndex = await partition(arr, left, right, order);
        await quickSort(arr, left, pivotIndex - 1, order);
        await quickSort(arr, pivotIndex + 1, right, order);
    }
    if (left === 0 && right === arr.length - 1) {
        uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
    }
}

async function partition(arr, left, right, order) {
    const pivot = arr[right];
    let i = left - 1;
    uiUpdater.updateTrace(arr, `Pivote seleccionado: ${pivot}`, [right]);
    for (let j = left; j < right; j++) {
        if ((order === 'asc' && arr[j] < pivot) || (order === 'desc' && arr[j] > pivot)) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            uiUpdater.updateTrace(arr, `Intercambiado ${arr[i]} y ${arr[j]} porque ${arr[j]} es ${order === 'asc' ? 'menor' : 'mayor'} que el pivote ${pivot}`, [i, j]);
            await delay();
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    uiUpdater.updateTrace(arr, `Pivote ${arr[i + 1]} movido a la posición correcta`, [i + 1, right]);
    await delay();
    return i + 1;
}

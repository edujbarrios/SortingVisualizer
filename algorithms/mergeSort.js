async function mergeSort(arr, order = 'asc') {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        uiUpdater.updateTrace(arr, `Dividido en subsecuencias izquierda [${left}] y derecha [${right}]`);
        await mergeSort(left, order);
        await mergeSort(right, order);
        let i = 0, j = 0, k = 0;
        while (i < left.length && j < right.length) {
            if ((order === 'asc' && left[i] < right[j]) || (order === 'desc' && left[i] > right[j])) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
            uiUpdater.updateTrace(arr, `Combinado ${arr[k - 1]} desde subsecuencia ${left[i - 1] < right[j - 1] ? 'izquierda' : 'derecha'}`, [k - 1]);
            await delay();
        }
        while (i < left.length) {
            arr[k++] = left[i++];
            uiUpdater.updateTrace(arr, `Combinado el restante ${arr[k - 1]} desde la subsecuencia izquierda`, [k - 1]);
            await delay();
        }
        while (j < right.length) {
            arr[k++] = right[j++];
            uiUpdater.updateTrace(arr, `Combinado el restante ${arr[k - 1]} desde la subsecuencia derecha`, [k - 1]);
            await delay();
        }
    }
    if (arr.length === array.length) {
        uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
    }
}

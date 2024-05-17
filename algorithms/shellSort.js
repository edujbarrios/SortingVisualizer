async function shellSort(arr, order = 'asc') {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        uiUpdater.updateTrace(arr, `Delta actual: ${gap}`);
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && ((order === 'asc' && arr[j - gap] > temp) || (order === 'desc' && arr[j - gap] < temp)); j -= gap) {
                arr[j] = arr[j - gap];
                uiUpdater.updateTrace(arr, `Movido ${arr[j - gap]} a la posición ${j} porque es ${order === 'asc' ? 'mayor' : 'menor'} que ${temp}`, [j, j - gap]);
                await delay();
            }
            arr[j] = temp;
            uiUpdater.updateTrace(arr, `Insertado ${temp} en la posición ${j}`, [j, i]);
            await delay();
        }
    }
    uiUpdater.updateTrace(arr, 'La secuencia está completamente ordenada.');
}

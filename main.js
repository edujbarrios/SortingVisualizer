let array = [];
let order = 'asc';

function visualizeSorting() {
    const valueInput = document.getElementById('valueInput');
    array = valueInput.value.split(/[\s,]+/).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
    order = document.getElementById('orderSelect').value;
    if (array.length > 0) {
        const algorithm = document.getElementById('algorithmSelect').value;
        resetVisualization();
        switch (algorithm) {
            case 'quickSort':
                uiUpdater.updateDescription("Ordenación Rápida (Quick Sort): Un algoritmo de divide y vencerás que selecciona un pivote y divide la secuencia en dos subsecuencias, ordenándolas recursivamente.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                quickSort(array, 0, array.length - 1, order);
                break;
            case 'shellSort':
                uiUpdater.updateDescription("Ordenación por Incrementos Decrecientes (Shell Sort): Una optimización de la ordenación por inserción que permite el intercambio de elementos lejanos al comparar elementos que están lejos y reduciendo progresivamente la brecha entre los elementos a comparar.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                shellSort(array, order);
                break;
            case 'radixSort':
                uiUpdater.updateDescription("Ordenación por Radix (Radix Sort): Un algoritmo de ordenación no comparativa que ordena números procesando dígitos individuales, típicamente del dígito menos significativo al más significativo.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                radixSort(array, order);
                break;
            case 'mergeSort':
                uiUpdater.updateDescription("Ordenación por Mezcla (Merge Sort): Un algoritmo de divide y vencerás que divide la secuencia en dos mitades, las ordena recursivamente y luego combina las dos mitades ordenadas.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                mergeSort(array, order);
                break;
            case 'shakeSort':
                uiUpdater.updateDescription("Ordenación de Sacudida (Shake Sort): Una variación de la ordenación de burbuja que ordena en ambas direcciones en cada pasada a través de la lista, moviendo elementos a sus posiciones correctas de manera bidireccional.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                shakeSort(array, order);
                break;
            case 'heapSort':
                uiUpdater.updateDescription("Ordenación por Montículos (Heap Sort): Un algoritmo de ordenación basado en comparaciones que construye un montón binario y luego extrae repetidamente el elemento máximo para construir la secuencia ordenada.");
                uiUpdater.updateTrace(array, 'Secuencia inicial');
                heapSort(array, order);
                break;
        }
    } else {
        alert('Por favor, ingresa una lista válida de números, separados por comas o espacios.');
    }
}

function resetVisualization() {
    document.getElementById('trace-container').innerHTML = '';
}

function delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

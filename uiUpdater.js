class UIUpdater {
    updateTrace(array, message, highlightIndices = []) {
        const traceContainer = document.getElementById('trace-container');
        const traceLine = document.createElement('p');
        array.forEach((value, index) => {
            const span = document.createElement('span');
            span.textContent = value;
            if (highlightIndices.includes(index)) {
                span.classList.add('highlight');
            }
            traceLine.appendChild(span);
            traceLine.appendChild(document.createTextNode(' '));
        });
        traceLine.appendChild(document.createTextNode(`- ${message}`));
        traceContainer.appendChild(traceLine);
    }

    updateDescription(description) {
        const traceContainer = document.getElementById('trace-container');
        const descLine = document.createElement('p');
        descLine.textContent = description;
        descLine.style.fontWeight = 'bold';
        traceContainer.appendChild(descLine);
    }
}

const uiUpdater = new UIUpdater();

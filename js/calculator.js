const technologiesSelect = document.querySelector('#calculatorFormTechnologiesType')

const technologiesMultiSelect = new Choices(technologiesSelect, {
    allowSearch: false,
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    removeItems: true,
    removeItemButton: true,
    editItems: false,
    duplicateItemsAllowed: false,
    delimiter: ",",
    paste: true,
    searchEnabled: false,
    searchChoices: true,
    searchResultLimit: -1,
    position: "auto",
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: true,
    noChoicesText: "No available options",
    itemSelectText: "Click to select",
    classNames: {
        containerInner: "choices__inner tech-input-container",
        input: "choices__input",
    },
});

calculateSum();

const calculatorForm = document.querySelector('#calculatorForm')

calculatorForm.addEventListener('submit', function (event) {
    event.preventDefault();
    calculateSum();
});

//запускаем обсчет работы при запуске экрана
function calculateSum() {
    //SELECTOR
    const websiteTypeSelect = document.querySelector('#calculatorFormWebsiteType');
    const websiteCart = document.querySelector('#calculatorFormCart input:checked');
    const websiteReception = document.querySelector('#calculatorFormReception input:checked');

    //VALUE
    const websiteTypeValue = extractPriceFromValue(websiteTypeSelect.value);
    const tecjnologiesValue = getTechnologiesSumm(technologiesMultiSelect.getValue());
    const websiteCartValue = convertCartOptionToPrice(websiteCart.value);
    const websiteReceptionValue = convertReceptionOptionToPrice(websiteReception.value);

    const totalSumm = websiteTypeValue + tecjnologiesValue + websiteCartValue + websiteReceptionValue;
    renderSumm(totalSumm);
};

//отображаем сумму на экране
function renderSumm(sum) {
    const costElement = document.querySelector('#calculatorFormTotalCost');

    costElement.textContent = 'Calculating...';

    setTimeout(function () {
        costElement.textContent = sum + '$';
    }, 2000);

};

// Конвектируем подтверждение карзины в сумму
function convertCartOptionToPrice(option) {
    if (option === 'yes') {
        return 300
    }

    return 0;
};

// Конвектируем подтверждение приема эмэйлов в сумму
function convertReceptionOptionToPrice(option) {
    if (option === 'yes') {
        return 300
    }

    return 0;
};

//выводим числа из массива мультселекта
function getTechnologiesSumm(technologiesArr) {
    let totalSumm = 0;

    technologiesArr.forEach(function (tech) {
        totalSumm = totalSumm + extractPriceFromValue(tech.value)
    });
    return totalSumm;
};

//получаем числовые значение из value
function extractPriceFromValue(str) {
    const price = str.match(/:\d+/);

    if (price) {
        return Number(price[0].slice(1)) || 0;
    }

    return 0;
};




const form = document.querySelector(".feedback-form");
const inputs = form.querySelectorAll('input, textarea');
const inputsDataKey = "feedback-form-state";


form.addEventListener("input", _.throttle(savingData, 500));

loadDataFromLocalStorage();

function savingData() {
    const formData = {};

    for (const input of inputs) {
        formData[input.name] = input.value;
    }

    localStorage.setItem(inputsDataKey, JSON.stringify(formData));
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem(inputsDataKey);

    if (storedData) {
        try {
            const formData = JSON.parse(storedData);

            for (const input of inputs) {
                if (formData.hasOwnProperty(input.name)) {
                    input.value = formData[input.name];
                }
            }
        } catch (e) {
            console.log(e.message);
        }
    }
}

form.addEventListener('submit', storageClean);

function storageClean(event) {
    event.preventDefault();
    const inputsJSON = localStorage.getItem(inputsDataKey);
    try {
        const inputsObj = JSON.parse(inputsJSON);
        console.log(inputsObj);
    } catch (e) {
        console.log(e.message);
    }
    localStorage.removeItem(inputsDataKey);
    form.reset()
}
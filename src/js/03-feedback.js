const form = document.querySelector(".feedback-form");
const inputs = form.querySelectorAll('input, textarea');


form.addEventListener("input", _.throttle(savingData, 500));

loadDataFromLocalStorage();

function savingData() {
    const formData = {};

    for (const input of inputs) {
        formData[input.name] = input.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadDataFromLocalStorage() {
    const storedData = localStorage.getItem("feedback-form-state");

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
    localStorage.clear();
    for (const input of inputs) {
        input.value = "";
    }
}
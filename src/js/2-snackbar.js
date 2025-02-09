import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const delayInput = form.querySelector(`input[name="delay"]`);
const stateRadios = form.querySelectorAll('input[name="state"]');

form.addEventListener(`submit`, function (event) {
    event.preventDefault();

    const delay = parseInt(delayInput.value);
    const state = Array.from(stateRadios).find(radio => radio.checked)?.value;

    if (!state) return;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === `fulfilled`) {
                resolve(delay);
            }
            else {
                reject(delay);
            }
        }, delay);
    });

  promise
    .then((delay) => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
        });
    })
    .catch((delay) => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight',
        });
    });
 });
   

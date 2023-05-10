import { set } from 'lodash';

export const updateState = (state, event) => {
    const newState = state;
    const target = event && event.currentTarget ? event.currentTarget : event.target;
    const targetValue = target.type === 'checkbox' ? target.checked : target.value;
    set(newState, target.name, targetValue);
    return newState;
}

export const toggleSubmitButtonState = (buttonTitle, testObject) => {
    const submitButton = process.env.NODE_ENV.toLowerCase() !== "test" ? document.getElementById(buttonTitle ? buttonTitle : 'submitButton') : testObject;
    if (submitButton) {

        const isPressed = submitButton.className.indexOf('loading') !== -1;
        if (isPressed) {
            if (submitButton.children[0]) {
                const replaceWithAttribute = submitButton.children[0].getAttribute('text');
                submitButton.children[0].innerHTML = replaceWithAttribute ? replaceWithAttribute : '';
            }
            let buttonClasses = submitButton.className;
            submitButton.className = buttonClasses.replace(' loading', '');

        } else {
            if (submitButton.children[0]) {
                submitButton.children[0].setAttribute('text', submitButton.children[0].innerHTML);
                submitButton.children[0].innerHTML = "Loading..."
            }
            submitButton.className = `${submitButton.className} loading`;
        }
    }
}

export function hasFilledRequiredFields() {
    var formRequiredFields = document.getElementsByTagName('input');
    if (formRequiredFields && formRequiredFields.length > 0) {
        for (let i = 0; i < formRequiredFields.length; i++) {
            let element = formRequiredFields[i];
            if (element.value === '' && element.hasAttribute('required')) {
                alert('There are required fields to fill');
                return false;
            }
        }
    }
    return true;
}
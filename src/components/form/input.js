import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormInput = (props) => {
    const FormLabel = (
        <Label for={props.actionNotLinkedToLabel ? undefined : props.id ? props.id : props.name} style={props.type === 'checkbox' ? { "verticalAlign": "sub" } : {}}>
            {props.required && <span className='text-danger'>*</span>} {props.label ? props.label : props.name}
        </Label>
    )
    return (
        <FormGroup check={props.type === 'checkbox' ? true : false} style={props.style} className={props.className ? props.className : undefined}>

            {!(props.type === 'checkbox' || props.noLabel) && FormLabel}

            <Input
                type="text"
                name={props.name}
                id={props.id ? props.id : props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.type === "checkbox" ? undefined : props.onChange}
                onFocus={props.type === "checkbox" ? undefined : props.onChange}
                required={props.required}
                disabled={props.disabled}
                autoComplete={props.autoComplete ? props.autoComplete : "off"}
                checked={props.checked}
                invalid={props.invalid}
            />

            {((props.type === 'checkbox' && !props.noLabel) || props.type === 'radio') && FormLabel}

        </FormGroup>
    );
};

export default FormInput;
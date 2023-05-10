import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

const FormFooter = (props) => {

    return (
        <>
            <div className='d-flex align-items-center'>
                <div className='ml-auto'>
                    {props.link && (
                        <Fragment>
                            {props.linkLabel}
                            <Link to={props.link} className='btn-lg btn btn-link'>
                                {props.linkText}
                            </Link>{' '}
                        </Fragment>
                    )}

                    {props.action && (
                        <Fragment>
                            {props.actionLabel}
                            <Button onClick={props.action} className='additional-action btn-lg btn' color="link">
                                {props.actionText}
                            </Button>{' '}
                        </Fragment>
                    )}

                    {props.secondarySubmit && (
                        <Button
                            color='link'
                            size='lg'
                            onClick={props.secondarySubmit.action}
                            id={`${props.formTitle ? props.formTitle : 'submit'}SecondaryButton`}
                            type="button"
                            className="submitButton ml-3 text-white"
                        >
                            {props.secondarySubmit.text} <u>{props.secondarySubmit.buttonText}</u>
                            <Spinner type="grow" color="light" size="sm" className="ml-2 loadingIcon" />
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}

export default FormFooter
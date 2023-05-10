import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const FormHeader = (props) => {

    return (
        <Fragment>
            {props.title && (
                <h5 className='mb-0 text-black'>
                    {props.title && props.title}
                </h5>
            )}


            {(props.description || props.subDescription) && (
                <p className='mt-5'>
                    <big>
                        {props.description}<br />
                        <small>{props.subDescription}</small>
                    </big>
                </p>
            )}

            {props.link && (
                <p className='mt-5'>
                    <big>
                        {props.linkLabel}
                        <Link to={props.link} className='text-primary'>
                            {props.linkText}
                        </Link>
                    </big>
                </p>
            )}
            <br />
            <Row className='divider' />
        </Fragment>
    );
}

export default FormHeader
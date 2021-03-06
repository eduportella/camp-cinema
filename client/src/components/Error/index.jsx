import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './error.scss';

const Error = (props) => {
    const {
        children,
        custom,
    } = props;

    const element = 'error';
    const errorStyles = classNames({
        [`${element}`]: true,
        [`${element}__${custom}`]: custom,
    });

    return (
        <div className={errorStyles}>
            {children}
        </div>
    );
};

Error.propTypes = {
    children: PropTypes.node.isRequired,
    custom: PropTypes.oneOf([
        'center',
        'inline',
    ]),
};

export default Error;
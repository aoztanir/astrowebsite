import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h4 className="">
        <Link to="/">
          <Image
            // src={require('./../../../../assets/images/logo.svg')}
            src="/dzidza_logo.png"
            alt="Open"
            width={40}
            height={40} />
        </Link>
      </h4>
    </div>
  );
}

export default Logo;
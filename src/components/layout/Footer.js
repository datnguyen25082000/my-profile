import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FooterNav from './partials/FooterNav';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className=" py-2"
          >
          <div className="footer-top space-between text-xxs">
    
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <div className="footer-copyright" style={{marginLeft:"50%", transform: "translate(-50%,0%)"}}>Made by <a class="badge badge-secondary px-2 ml-1 py-1" href="http://fb.com/datquadep" target="_blank">NTD</a> - inspired by <a href="http://cruip.com" target="_blank">cruip.com</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
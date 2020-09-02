import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const sectionHeader = {
    title: 'Contact me',
  };

  return (
    <section
      {...props}
      className={outerClasses} id="contact-me" style={{paddingTop: "80px"}}
    >
       <SectionHeader data={sectionHeader} className="center-content" />
       <div className="text-center contact-list">
         <a href="http://fb.com/datquadep" target="_blank"><i class="fb-icon fab fa-facebook-square"></i></a>
         <a href="https://www.linkedin.com/in/nguy%E1%BB%85n-t%E1%BA%A5n-%C4%91%E1%BA%A1t-857b591aa/" target="_blank"><i class="link-icon fab fa-linkedin"></i></a>
         <a href="#"><i class="dev-icon fab fa-dev"></i></a>
       </div>
      <div className="container reveal-from-bottom"  data-reveal-delay="400">
        <div
          className={innerClasses} style={{borderRadius:"10px"}}
        >
         
          <div className="cta-slogan">
            <h3 className="m-0">
              Send message to me
              </h3>
          </div>
          <div className="cta-action">
          <Input id="email" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your email" className="p-3">
          <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <Input id="message" type="message" label="Subscribe" labelHidden hasIcon="right" placeholder="Your message" className="p-3">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <input id="submit" type="submit" value="Send" className="py-2 px-3 mt-2" style={{borderRadius:"10px", }} />
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
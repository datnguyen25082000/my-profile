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
            <form action="https://formspree.io/xzbjnobg" method="POST">
                <label style={{fontSize:"1rem", color: "white"}} >Your email:</label>
                  <input type="text" style={{height: "40px", width: "300px"}} name="_replyto" />
              
                <label style={{fontSize:"1rem", color: "white"}}>Your message:</label>
                  <textarea name="message" style={{height: "100px", width: "300px"}}></textarea>
                <label></label>

                <button type="submit" className="btn btn-success px-4 mt-3 py-2" >Send</button>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
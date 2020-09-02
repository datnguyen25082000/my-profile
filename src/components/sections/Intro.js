import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses} id="about-me"
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content mb-4">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to NTD's area
            </h1>
            <h4 style={{margin: "8px"}}>Web Developer</h4>
            <div className="container-xs">
            
              <div className="reveal-from-bottom" data-reveal-delay="600">
            
              </div>
            </div>
          </div>
          <container className="ml-5">
         
              <div className="row">
                <div className="col-4">
                <Image
                      src={require('./../../assets/images/avatar.jpg')}
                      alt="Features tile icon 05"
                      width={300}
                      height={400} style={{borderRadius:"10px"}} 
                      className="reveal-from-bottom" data-reveal-delay="1000"
                      />
                </div>
                <div className="col-8 info" style={{textAlign: "left"}}>
                <span className="m-0 mb-32 reveal-from-right" style={{fontSize:"25px"}} data-reveal-delay="1500">
               Hi, My name is <b className="text-color-primary" style={{fontSize:"25px"}}>Nguyen Tan Dat</b>
                </span>
              
               
                <p><i class="far fa-calendar-alt mr-2 mt-4"></i> &#160;25 August, 2000 - Quang Ngai, Viet Nam</p>
             
                <p><i class="fas fa-school mr-2"></i> University of Science, Ho Chi Minh, Viet Nam</p>
                <p><i class="fas fa-envelope mr-2"></i> &#160;Datnguyen25082000@gmail.com</p>
                <p><i class="fas fa-star mr-2"></i>  &#160;KPA: 7.71</p>
                <span><i class="fas fa-angle-double-right"></i>&#160;&#160;&#160;&#160;Job objective: Web Developer specializing in full-stack development. Experience with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages. Solid skills in project management and customer relations in the future.</span>
                </div>
              </div>
          </container>

      
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
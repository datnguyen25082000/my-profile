import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

function onScrollTop(element) {
  try {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
  }
  catch(err) {

  }
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

  const sectionHeader = {
    title: 'Intro'
  };

  return (
    <section
      {...props}
      className={outerClasses} 
    >

      <div className="container-sm" style={{position: "relative"}}>
        <div>
          <div className="home-page" style={{minHeight: "100vh", position: "relative", top: "-80px"}}>
            <div style={{position: "absolute", top: "35%", width: "100%"}}>
            <h1 className="line-1 anim-typewriter"  data-reveal-delay="2000">Welcome to NTD's area<br/></h1>
            <div className="row" style={{position: "relative", top: "50px"}}>
             <div className="col-8">
             <div style={{textAlign: "left"}}>
              <div className="reveal-from-bottom" data-reveal-delay="3100">
                <h1 style={{margin: "0px"}}>NGUYEN TAN DAT</h1>
                <div className="reveal-from-bottom" data-reveal-delay="3200">
                <h3>Web developer</h3>
                <button className="btn btn-primary p-3" href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });}} >About me</button>
              </div>
              </div>
            </div>
             </div>
             <div className="col-4">
               <div style={{}}>
                <Image
                      src={require('./../../assets/images/avatarintro.jpg')}
                      alt="Features tile icon 05"
                      width={200}
                      height={200} style={{borderRadius:"50%"}} 
                      className="reveal-from-bottom" data-reveal-delay="3300"
                      />
             </div>
             </div>
            </div>
            </div>
          </div>

          <div>
          <div className={innerClasses} id="about-me">
          <SectionHeader data={sectionHeader} className="center-content" style={{paddingBottom: "80px"}} />
              <div className="row" >
                <div className="col-12 col-sm-5 mb-3">
                <Image
                      src={require('./../../assets/images/avatar.jpg')}
                      alt="Features tile icon 05"
                      width={300}
                      height={400} style={{borderRadius:"10px"}} 
                      className="reveal-from-bottom" data-reveal-delay="800"
                      />
                </div>
                <div className="col-12 col-sm-7 info" style={{textAlign: "left"}}>
               
                <span className="m-0 mb-32 reveal-from-right" style={{fontSize:"25px"}} data-reveal-delay="300">
               Hello, I am <b className="text-color-primary" style={{fontSize:"25px"}}>Nguyen Tan Dat</b>
                </span>
               
                <p><i class="far fa-calendar-alt mr-2 mt-4"></i> &#160;25 August, 2000 - Quang Ngai, Viet Nam</p>
             
                <p><i class="fas fa-school mr-2"></i> University of Science, Ho Chi Minh, Viet Nam</p>
                <p><i class="fas fa-envelope mr-2"></i> &#160;Datnguyen25082000 @gmail .com</p>
                <p><i class="fas fa-star mr-2"></i>  &#160;GPA: 8.0</p>
                <span><i class="fas fa-angle-double-right"></i>&#160;&#160;&#160;&#160;Job objective: Web Developer specializing in full-stack development. Experience with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages. Solid skills in project management and customer relations in the future.</span>
                </div>
              </div>
          </div>
          </div>
      
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
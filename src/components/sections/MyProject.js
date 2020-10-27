import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const MyProject = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'My projects',
    paragraph: 'Subject projects of courses at my university (individual + group), self-study + self-coding projects'
  };

  return (
    <section
      {...props}
      className={outerClasses}  id="my-project"
    >
      <div className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Javascript
                  </div>
                <h3 className="mt-0 mb-12">
                  E-commerce shop
                  </h3>
                <p className="m-0">
                 <i class="fas fa-terminal mr-2"></i>Database: MongoDB <br/> <i class="fas fa-terminal mr-2"></i>Frontend: ReactJS <br/><i class="fas fa-terminal mr-2"></i>Backend: Express
              
                  <br/><i class="fas fa-terminal mr-2"></i><a href="https://my-first-react-shop.herokuapp.com/" style= {{display: "inline-block"}} target="_blank"><br />Link website </a><br/>
                  <i class="fas fa-terminal mr-2"></i>Basic features: register, login, add/remove item to cart
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/project1.png')}
                  alt="project1"
                  />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Python
                  </div>
                <h3 className="mt-0 mb-12">
                  Simple web server
                  </h3>
                <p className="m-0">
                <i class="fas fa-terminal mr-2"></i>Members: 2 <br />
                <i class="fas fa-terminal mr-2"></i>Library: Socket <br/>
                <i class="fas fa-terminal mr-2"></i>Basic features: redirect login, multi threading
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/project2.png')}
                  alt="Features split 02"
                  />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  C++
                  </div>
                <h3 className="mt-0 mb-12">
                  Break Brick Game
                  </h3>
                <p className="m-0">
                <i class="fas fa-terminal mr-2"></i>Members: 2 <br/>
                <i class="fas fa-terminal mr-2"></i>Paradism: OOP <br/>
              
                  <i class="fas fa-terminal mr-2"></i><a  href="https://drive.google.com/open?id=1MOzjq58ZVmOhvM5VmXDhKYo9jSI_AvSG" target="_blank">Link demo</a>
                  </p>
                  <p className="m-0">
                  <i class="fas fa-terminal mr-2"></i><a href="https://github.com/datnguyen25082000/Break-Brick-Game.git" target="_blank">Link github</a><br/>
                  <i class="fas fa-terminal mr-2"></i>Basic features: 3 levels, ball speed changes over time, charts, items function
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/project3.png')}
                  alt="Features split 03"
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

MyProject.propTypes = propTypes;
MyProject.defaultProps = defaultProps;

export default MyProject;
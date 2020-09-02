import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Skill from './partials/Skill.js';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const MySkill = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'My skills',
    paragraph: 'Programming language, framework, toolkit, techniques,...'
  };

  const arrSkill = [
    {name: "C", type:"language",img: "c" , delay: "0", pecent: "60%"},
    {name: "C++", type:"language", img: "c++", delay: "200", pecent: "80%"},
    {name: "Python", type:"language", img: "python", delay: "400", pecent: "50%"},
    {name: "Javascript", type:"language", img: "js", delay: "600", pecent: "60%"},
    {name: "ReactJS", type:"language", img: "react", delay: "0", pecent: "50%"},
    {name: "SQL Server", type:"language", img: "mysql", delay: "200", pecent: "60%"},
    {name: "HTML", type:"language",img: "html", delay: "400", pecent: "60%"},
    {name: "CSS", type:"language",img: "css", delay: "600", pecent: "60%"}
  ];

  return (
    <section
      {...props}
      className={outerClasses} id="my-skill" style={{paddingTop: "80px"}}
    >
      <div className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{paddingBottom: "40px"}} />
          <div className={tilesClasses}>
         
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  
                        <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Language
                    </h4>
                
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Framework
                    </h4>
                 
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Techniques
                    </h4>
                 
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Toolkit
                    </h4>
                
                </div>
              </div>
            </div>


            {
              arrSkill.map((skill, idx) => {
                return <Skill key={idx} name={skill.name} img={skill.img} delay={skill.delay} pecent={skill.pecent} />;
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

MySkill.propTypes = propTypes;
MySkill.defaultProps = defaultProps;

export default MySkill;
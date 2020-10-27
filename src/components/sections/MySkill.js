import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Skill from './partials/Skill.js';
import { forEach } from 'lodash';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

// details each type skill
const handleDetailSkill = (e) => {
  const detailSkills = document.getElementById("detail-skill");
  const targetValue = document.getElementById(e.target.value);
  const listbutton = document.getElementById("list-button-skill");

  detailSkills.childNodes.forEach(skill => skill.style.display = "none");

  listbutton.childNodes.forEach(divbtn => divbtn.childNodes[0].classList.remove("active"));

  e.target.classList.add("active");

  targetValue.style.display = "block";
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
    {name: "ReactJS", type:"framework", img: "react", delay: "0", pecent: "50%"},
    {name: "SQL", type:"other", img: "mysql", delay: "200", pecent: "60%"},
    {name: "HTML", type:"other",img: "html", delay: "400", pecent: "60%"},
    {name: "CSS", type:"other",img: "css", delay: "600", pecent: "60%"},
    {name: "Bootstrap", type:"framework",img: "bootstrap", delay: "200", pecent: "60%"}
  ];

  const languageSkills = arrSkill.filter(skill => skill.type === "language");
  const frameworkSkills = arrSkill.filter(skill => skill.type === "framework");
  const otherSkills = arrSkill.filter(skill => skill.type === "other");
  
  return (
    <section
      {...props}
      className={outerClasses} id="my-skill" style={{paddingTop: "80px", minHeight: "100vh"}}
    >
      <div className="container" >
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" style={{paddingBottom: "40px"}} />
          <div className={tilesClasses}>
            

            <div className="row mt-3" id="list-button-skill" style={{width: "100%"}}>
                <div className="col-6 col-md-3 mb-3">
                  <button type="button" class="btn btn-info active" value="all-skills" style={{width: "60%", height: "2.4rem"}} onClick={(e) => handleDetailSkill(e)} >All</button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <button type="button" class="btn btn-info" value="language-skills" style={{width: "60%", height: "2.4rem"}} onClick={(e) => handleDetailSkill(e)}>Programming Language</button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <button type="button" class="btn btn-info" value="framework-skills" style={{width: "60%", height: "2.4rem"}} onClick={(e) => handleDetailSkill(e)}>Framework</button>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <button type="button" class="btn btn-info" value="other-skills" style={{width: "60%", height: "2.4rem"}} onClick={(e) => handleDetailSkill(e)}>Other</button>
                </div>

                <div id="detail-skill" style={{width: "100%", marginTop:"50px"}}>
                  <div style={{width: "100%"}} id="all-skills">
                    {
                      arrSkill.map((skill, idx) => {
                        return <Skill key={idx} name={skill.name} img={skill.img} delay={skill.delay} pecent={skill.pecent} />;
                      })
                    }
                  </div>
                  <div style={{width: "100%", display:"none"}} id="language-skills">
                    {
                      languageSkills.map((skill, idx) => {
                        return <Skill key={idx} name={skill.name} img={skill.img} delay={skill.delay} pecent={skill.pecent} />;
                      })
                    }
                  </div>
                  <div style={{width: "100%", display:"none"}} id="framework-skills">
                    {
                      frameworkSkills.map((skill, idx) => {
                        return <Skill key={idx} name={skill.name} img={skill.img} delay={skill.delay} pecent={skill.pecent} />;
                      })
                    }
                  </div>
                  <div style={{width: "100%", display:"none"}} id="other-skills">
                    {
                      otherSkills.map((skill, idx) => {
                        return <Skill key={idx} name={skill.name} img={skill.img} delay={skill.delay} pecent={skill.pecent} />;
                      })
                    }
                  </div>
                </div>
             
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

MySkill.propTypes = propTypes;
MySkill.defaultProps = defaultProps;

export default MySkill;
import React from 'react';


const images = {
  "c++": require('../../../assets/images/c++.jpg'),
  "c": require('../../../assets/images/c.png'),
  "python": require('../../../assets/images/python.png'),
  "react": require('../../../assets/images/react.png'),
  "html": require('../../../assets/images/html.png'),
  "css": require('../../../assets/images/css.png'),
  "js": require('../../../assets/images/javascript.png'),
  "mysql": require('../../../assets/images/mysql.png'),
  "bootstrap": require('../../../assets/images/bootstrap.png'),
};

export class Skill extends React.Component {
    constructor(props) {
        super(props);

      }
    
    handleClickSkill = (event) => {
      const parent = event.target.parentNode.parentNode.parentNode;
      parent.getElementsByClassName("skill-progress")[0].classList.toggle("hiden-skill");
    }

    render() {
      const image = this.props.img;
      const name = this.props.name;
      const pecent = this.props.pecent;
      return(
        <div className="col-6 col-sm-4 col-md-3" style={{display: "inline-block"}}>
        <div className="tiles-item reveal-from-bottom" data-reveal-delay={this.props.delay}>
        <a href="javascript:void(0)"><div className="tiles-item-inner" onClick={(e) => this.handleClickSkill(e)}>
          <div className="features-tiles-item-header">
            <div className="mb-16" style={{height: "64px"}}>
              <img
                src={(images[image])}
                alt="Features tile icon 01"
                width={64}
                height={72} />
                
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
              {name}
              </h4>
          </div>
          <div class="progress skill-progress" style={{transform: "translateX(-20px)"}}>
          <div class="progress-bar" role="progressbar" style={{width: pecent}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        </div>
      </a>
      </div>
        </div>
      )
      ;
    }
}

export default Skill;
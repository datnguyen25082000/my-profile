import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';
import { exception } from 'react-ga';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

function onScrollTop(element) {
  try {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
  }
  catch(err) {

  }
}


const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.addEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )} >
        
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                  
                  <Image
                      src={require('./../../assets/images/logo192.png')}
                      alt="Features tile icon 05"
                      width={45}
                      height={45} 
                      style={{position: "absolute", top: "15px"}}
                      className="App-logo"
                      />
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    
                    <li id="list-link">
           
                      <a href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("about-me").scrollIntoView({ behavior: 'smooth' });}} >About me</a>
                      <a href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("my-skill").scrollIntoView({ behavior: 'smooth' });}}>Skills</a>
                      <a href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("my-project").scrollIntoView({ behavior: 'smooth' });}} >My projects</a>
                      <a href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("my-experience").scrollIntoView({ behavior: 'smooth' });}} >Experience</a>
                      <a href="javascript:void(0)" onClick= {onScrollTop = () => {document.getElementById("contact-me").scrollIntoView({ behavior: 'smooth' });}}>Contact</a>
                    </li>
                  </ul>
                 
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right" id="my-github"
                    >
                      <li>
                        <a href="https://github.com/datnguyen25082000" className="button button-primary button-wide-mobile button-sm" target="_blank" onClick={closeMenu}><i class="fab fa-github mt-1 mr-2"></i>My Github</a>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
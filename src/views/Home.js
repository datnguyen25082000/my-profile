import React from 'react';
// import sections
import Intro from '../components/sections/Intro';
import MySkill  from '../components/sections/MySkill';
import MyProject from '../components/sections/MyProject';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Contact';

const Home = () => {

  return (
    <>
      <Intro className="illustration-section-01" />
      <MySkill />
      <MyProject invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;
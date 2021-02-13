import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Joey, a full-stack developer living in beautiful Tucson</h2>
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default IndexPage

//Goal: add a couple of links to the site

//1. on contact page, link to GH + LinkedIn
//2. on about page, link to contact page
//3. test my work!

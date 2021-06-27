import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Tile from './Tile.js';
import SkillTile from './SkillTile';
import mykaarma from './assets/mykaarma.png';
import boeing from './assets/boeing.png';
import uas from './assets/uas.png'
import dunkin from './assets/dunkin.png';
import acm from './assets/acm.png'
import android from './assets/android.png';
import recipe from './assets/recipe.png';
import ucla from './assets/ucla.png';
import troy from './assets/troy.png';
import profile from './assets/profile.jpg';

export default class App extends Component{

  constructor(props){
    super(props)
    this.homeDiv = React.createRef()
    this.educationDiv = React.createRef()
    this.experienceDiv = React.createRef()
    this.projectDiv = React.createRef()
    this.skillsDiv = React.createRef()

    this.state = {
      refs: [this.homeDiv,
        this.educationDiv,
        this.experienceDiv,
        this.projectDiv,
        this.skillsDiv
      ]
    }

    this.handleOnClick= this.handleOnClick.bind(this);
 }

 handleOnClick = function(index) {
  if(this.state.refs[index].current){
      this.state.refs[index].current.scrollIntoView({ 
         behavior: "smooth", 
         block: "nearest"
      })
  }
}

  render(){
  return (
    <div className="App">
      <Sidebar handleClick = {this.handleOnClick}/>
      <div class="Content">
        <div class="Top">
          <div class="Intro" ref={this.homeDiv}>
            <img class = "intro-image" src = { profile }></img>
            <h1>Hi, I'm Chirag Singh</h1>
            <p>Welcome to my website! I'm a second-year computer science and engineering student at UCLA with full stack software development experience. 
              &nbsp;You can scroll through my education, experience, projects, and skills, or use the sidebar
              to navigate to any specific section.
            </p>
          </div>
          <div class="Education">
            <div class="SectionTitle" id="education"  ref={this.educationDiv}>EDUCATION</div>
            <Tile title="University of California, Los Angeles" role="Computer Science and Engineering, BS"
                  location="Los Angeles, CA" dates="September 2020-Present"
                  image={ ucla } description={ [
                    '4.00 GPA (major and overall)',
                    'Relevant Coursework: Data Structures, Computer Architecture, Software Construction Lab, Intro to Electrical Engineering',
                    'National Merit Scholarship Recipient',
                    'Alumni Scholarship Recipient and Club Member',
                  ] }
            />
            <Tile title="Troy High School" role="Troy Tech Program"
                  location="Fullerton, CA" dates="August 2016-May 2020"
                  image={ troy } description={ [
                    'Valedictorian (4.89 GPA weighted, 4.00 unweighted)',
                    'SAT: 1590/1600, SAT II Math, Physics, Chemistry: 800/800',
                    '4 yrs. honors and AP classes including AP/IB Computer Science, Linear Algebra, Multivariable Calculus, and AP Physics C',
                    '3 year varsity athlete and soccer team captain',
                  ] }
            />
          </div>
        </div>
        <div class="SectionTitle" id="experience">EXPERIENCE</div>
        <div class="Row"  ref={this.experienceDiv}>
          <Tile title="MyKaarma" role="Software Development Intern"
                location="Long Beach, CA" dates="June 2021-September 2021"
                image={ mykaarma } description={[]}
          />
          <Tile title="Unmanned Aerial Systems at UCLA" role="Docking Software Team Member"
                location="Los Angeles, CA" dates="September 2020-Present"
                image={ uas }
                description={ [
                  'Collaborated on computer-vision docking software for NASA Undergraduate Student Research Challenge (USRC) project',
                  'Prototyped docking logic in Python-based simulation, including simulation of the drone field of view and target detection',
                  'Implemented full docking logic in C++ and integrated docking behavior with existing controls code',
                  'Contributed to research report documenting docking logic and testing'
                ] }
          />
          <Tile title="Boeing Company" role="Systems Engineering Intern"
                location="Seal Beach, CA" dates="June 2019-August 2019"
                image={ boeing } 
                description={ [
                  'Performed complex computer simulations and cost-benefit analysis of missile defense systems',
                  'Identified missile defense architecture changes capable of increasing interception success rates by up to 41%',
                  'Presented findings to group of Boeing engineers as proof of concept of developing technologies',
                  'Collaborated with group of 8 interns to provide IT support for internship program of over 70 interns'
                ] }
          />
          <Tile title="Dunkin Donuts" role="Crew Member"
                location="Tustin, CA" dates="July 2020-September 2020"
                image={ dunkin } description={ [
                  'Clearly communicated with customers to ensure positive experience in high-volume store',
                  'Took initiative to improve store inventory control and organization during lower-traffic shifts'
                ] }
          />
        </div>
        <div class="SectionTitle" id="projects">PROJECTS</div>
        <div class="Row"  ref={this.projectDiv}>
          <Tile title="Cassave Leaf Disease Classification AI" role="ACM AI Project"
                location="Los Angeles, CA"
                dates="January 2021-March 2021" image={ acm }
                description={ [
                  'Working in a 4-person team under the ACM AI branch, developed a convolutional neural network using transfer learning to identify diseases in cassava leaves with 86% validation accuracy',
                  'Developed and tested CNN transfer learning model using Google Colab, tensorflow, pytorch, and other state-of-the-art machine learning libraries',
                  'Implemented multiple forms of data augmentation in Python, increasing validation accuracy approximately 5%',
                ] }
          />
          <Tile title="Android App Development" role="Personal Project"
                location="Los Angeles, CA"
                dates="July 2018-Present" image={ android }
                description={ [
                  'Designed, created, programmed (using Java and XML), and published 3 apps to the Google Play Store with over 668 combined lifetime downloads',
                  'Basketball Shot Predictor: Trained a neural network on 1 million+ NBA shots to predict percent chance of made shot, created user interface to visualize last 7 years of NBA shots',
                  'Music Updater: Accesses Deezer music API to notify user of new music from user-selected artists',
                  'Debate Tools: Suite of tools including custom timer and web integration for speech and debate competitors'
                ] }
          />
          <Tile title="Find My Recipe" role="Class Group Project"
                location="Los Angeles, CA"
                dates="April 2021-June 2021" image={ recipe }
                description={ [
                  'Collaborated in 6-person team to develop web application using React and Node.js frameworks and a MySQL database',
                  'Contributed to design and implementation of full-stack web application',
                  'Designed algorithm to search over 56,000 recipes based on a user\'s current ingredients and recipe tags',
                  'Implemented secure password storage system for user accounts using modern hashing techniques',
                ] }
          />
        </div>
        <div class="SectionTitle" id="skills">SKILLS</div>
              <div class="Row skills-section"  ref={this.skillsDiv}>
                <SkillTile title="Java Programming Language" num="5"/>
                <SkillTile title="C++ Programming Language" num="5"/>
                <SkillTile title="C Programming Language" num="3"/>
                <SkillTile title="Python Programming Language" num="4"/>
                <SkillTile title="JavaScript Programming Language" num="4"/>
                <SkillTile title="React Programming Framework" num="4"/>
                <SkillTile title="Angular.js Programming Framework" num="4"/>
                <SkillTile title="Node.js Runtime Environment" num="4"/>
                <SkillTile title="Web Development" num="4"/>
                <SkillTile title="Native Android Development" num="4"/>
                <SkillTile title="XML Frontend Android Design" num="3"/>
                <SkillTile title="CSS Frontend Design" num="4"/>
                <SkillTile title="Git Version Control Software" num="5"/>
                <SkillTile title="Development in Linux Environments" num="4"/>
                <SkillTile title="Bash Scripting Language" num="3"/>
                <SkillTile title="Docker Virtualization Platform" num="4"/>
                <SkillTile title="Agile Development Model" num="4"/>
                <SkillTile title="Relational Databases" num="3"/>
                <SkillTile title="SQL Database Query Language" num="4"/>
                <SkillTile title="Supervised Learning Machine Learning Algorithms" num="4"/>
                <SkillTile title="Convolutional and Deep Neural Networks" num="4"/>
                <SkillTile title="Transfer Learning Techniques" num="4"/>
              </div>
      </div>
    </div>
    
  );
 }
}


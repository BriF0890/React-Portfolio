import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
          <img
              class="img img-thumbnail" src="./component/img/Screen Shot 2021-01-05 at 11.42.34 PM.png"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardTitle>Code Refactor</CardTitle>
            <CardText>
            For this project you had to find the errors within the HTML and CSS coding for the Horiseon website page. This was really fun to do and it will make you dig into different things such as making sure everything is properly linked together, the layout is percise, the images loads up perfect and it does not have a lag to it, and making sure that the font family is one in the same and nothing different. If you like challenges to help expand your knowledge on how to layout a webpage and making sure all the links, images, and font is placed where it needs to be this is the project to work on.
            </CardText>
            <CardActions border>
            <li><a href="https://brif0890.github.io/Project-1/">Deployed version click here</a></li>
            <li><a href="https://github.com/BriF0890/Project-1">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
          <img
              class="img img-thumbnail" src="./component/img/Screen Shot 2021-01-05 at 11.41.18 PM.png"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardTitle>Day Planner</CardTitle>
            <CardText>
            This assignment is based on a functional planner where you are able to store and events/chores that you have to attend to. The time frame that you fill out you will be able to submit and save your task that you have to do and it will be color coded to the time from when your task will be ready.
            </CardText>
            <CardActions border>
            <li><a href="https://brif0890.github.io/Day-Planner/">Deployed version click here</a></li>
            <li><a href="https://github.com/BriF0890/Day-Planner">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle>Code Quiz</CardTitle>
            <img
              class="img img-thumbnail" src="./component/img/Screen Shot 2021-01-05 at 11.43.54 PM.png"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardText>
            This assignment we had to create a pop quiz that has a timer and is able to store high score points. The person will have to go through each question within 50 seconds . Each question they get right it is 10 points and with each question they get wrong the timer is reduced by 10 seconds. Once the person is done with the pop quiz they will be able to place in their initials and keep record of their score.
            </CardText>
            <CardActions border>
            <li><a href="https://brif0890.github.io/Code-Quiz/">Deployed version click here</a></li>
            <li><a href="https://github.com/BriF0890/Code-Quiz">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle>Team Profile Generator</CardTitle>
            <img
              class="img img-thumbnail" src="./component/img/20210111_072007.jpg"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardText>
            In this homework assignment, the challenge was to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. 
            </CardText>
            <CardActions border>
            <li><a href="https://github.com/BriF0890/Team-Profile-Generator">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle>User Directory</CardTitle>
            <img
              class="img img-thumbnail" src="./component/img/20210111_073706.jpg"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardText>
            For this assignment, I had to create a employee directory with React. This assignment will require to break up the application's UI into components, manage component state, and respond to user events.
            </CardText>
            <CardActions border>
            <li><a href="https://brif0890.github.io/User-Directory/">Deployed version click here</a></li>
            <li><a href="https://github.com/BriF0890/User-Directory">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 6*/}
          <Card shadow={6} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle>Employee Tracker</CardTitle>
            <img
              class="img img-thumbnail" src="./component/img/20210111_074224.jpg"
              alt="pic"
              style={{height: '250px'}}
               />
            <CardText>
            In this homework assignment, the challenge was to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.
            </CardText>
            <CardActions border>
            <li><a href="https://github.com/BriF0890/employeelist">Github version click here</a></li>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
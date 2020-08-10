import * as React from "react";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/homepage';
import ContactPage from './pages/contactPage';
import AboutPage from './pages/aboutpage';
import Footer from './Components/footer';

class App extends React.Component<IAppProps, IAppState> {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Matthew Brogan',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Driven',
        subTitle: 'Projects that make a difference',
        text: 'Check out my code or find me on social media:'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="headbar" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand style={{color: 'white'}}>Matthew Brogan</Navbar.Brand>

            <Navbar.Toggle className="navbar-dark border-0" aria-controls="navbar-toggle" style={{color: 'white'}}/>
            <Navbar.Collapse id="navbar-toggle" >
              <Nav className="ml-auto">
                <Link className="nav-link" to="/" style={{color: 'white'}}>Home</Link>
                <Link className="nav-link" to="/about" style={{color: 'white'}}>About</Link>
                <Link className="nav-link" to="/contact" style={{color: 'white'}}>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
}

export interface IAppState{
  title: string;
  headerLinks: IHeaderLinks[];
  home: IHomeProps;
  about: IAboutProps;
  contact: IContactProps;
}
export interface IHeaderLinks{
  title: string;
  path: string;
}
export interface IHomeProps{
  title: string;
  subTitle: string;
  text: string;
}
export interface IAboutProps{
  title: string;

}
export interface IContactProps{
  title: string;

}




export default App;

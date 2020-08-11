import React from 'react';
import Hero from '../components/hero'
import Content from '../components/content';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';


class ContactPage extends React.Component<IContactPageProps,IContactPageState> {

    constructor(props: IContactPageProps) {
        super(props);
        this.state = {
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailSent: null,
        }

    }

      handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{

        this.setState({
           name: event.target.value
         })

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled:true
        });

        Axios.post('http://localhost:3000/api/email',this.state)
            .then(res => {
                if(res.data.success){
                    this.setState({
                    disabled:false,
                    emailSent: true
                });
                }
                else{
                    this.setState({
                        disabled:false,
                        emailSent:false                   
                     });
                }
                
                
            })
            .catch(err=> {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
             })
            
   
        }
    
    render(){
        return(
        <div // style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?cs=srgb&dl=pexels-tobias-bj%C3%B8rkli-2335126.jpg&fm=jpg" + ")",
    //    backgroundPosition: 'center',
    //    backgroundSize: 'cover',
    //    backgroundRepeat: 'no-repeat'}}
       >
           <Hero title={this.props.title} />
           <Content >
               <Form onSubmit={this.handleSubmit}>
                   <Form.Group>
                       <Form.Label htmlFor="fullName">Full Name</Form.Label>
                       <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> this.setState({name: e.target.value})} />
                   </Form.Group>

                   <Form.Group>
                       <Form.Label htmlFor="email">Email</Form.Label>
                       <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>this.setState({email: e.target.value})}  />
                   </Form.Group>

                   <Form.Group>
                       <Form.Label htmlFor="message">Message</Form.Label>
                       <Form.Control id="message" name="message" as="textarea" rows={3} value={this.state.message} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> this.setState({message: e.target.value})}  />
                   </Form.Group>


                   <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                       Send
                   </Button>

                   {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                   {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

               </Form>
           </Content>
       </div>

    );
    }

    
}
export interface IContactPageProps{
    title:string;

}

export interface IContactPageState{
    name: string;
    email:string;
    message:string;
    disabled: boolean;
    emailSent: boolean;
  }


export default ContactPage;

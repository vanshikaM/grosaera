import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../register/register-axios';

class Login extends Component{

    state = {
        loading: false,
        email : {
            data: '',
            isActive: false,
            error : ''
        },
        password : {
            data: '',
            isActive: false,
            error : ''
        }
    }

    onChange = (e) => {


        if(e.target.value !== ''){
            this.setState({
                ...this.state,
               [e.target.name]: {
                   data: e.target.value,
                   isActive: true,
                   error: ''
               }
            })

            switch(e.target.name){
                case 'email':
                    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if(!emailPattern.test(e.target.value))
                    {
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Email is invalid'
                            }
                         })
                    } 
                    break;

                case 'password':
                    let length = e.target.value.length;
                    if(length < 6){
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Password should be greater than 6'
                            }
                            })
                    }
                    break;

                default:
                    break;
            }
        }
        else
        {
            this.setState({
                ...this.state,
                [e.target.name]: {
                    data: e.target.value,
                    isActive: false,
                    error: ''
                }
             })
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        
    }

    render(){
        return(
            <section className='register-form-section'>
                <div className="container">
                    <div className="register-box">
                        <form method="post" onSubmit={this.handleSubmit}>
                        <p style={{textAlign:'center'}}>
                            <i style={{fontSize:'40px'}} className="fa fa-user-circle"></i>
                        </p>
                        <h1>
                            Login
                        </h1>
                        <div>
                            <input type="text" name="email" onChange={this.onChange} className={this.state.email.isActive ? 'focus' : ''}/>
                            <label>Email</label>                            
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.email.error !=='' ?  this.state.email.error : ''}
                        </span>


                        <div>
                            <input type="password" name="password" onChange={this.onChange} className={this.state.password.isActive ? 'focus' : ''}/>
                            <label>Password</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.password.error !=='' ?  this.state.password.error : ''}
                        </span>

                        <div style={{textAlign:'center'}}>
                            Don't have an account?<Link to='/register'> Register here</Link>
                            <input className="button-secondary" type="submit" name="submit" value={this.state.loading ? 'Loading...' : 'Submit'} />
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Login;
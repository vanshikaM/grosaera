import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from './register-axios';
import { checkUser } from '../../store/userAction';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action'

class Register extends Component{

    state = {
        loading: false,
        email : {
            data: '',
            isActive: false,
            error : ''
        },
        fullname : {
            data: '',
            isActive: false,
            error : ''
        },
        password : {
            data: '',
            isActive: false,
            error : ''
        },
        cpassword : {
            data: '',
            isActive: false,
            error : '' 
        },
        isUser:false
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

                case 'fullname':
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: ''
                            }
                         })
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


                case 'cpassword':
                    if(e.target.value !== this.state.password.data){
                        this.setState({
                            ...this.state,
                            [e.target.name]: {
                                data: e.target.value,
                                isActive: true,
                                error: 'Both passwords should match'
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
        alert("submit");
        let v = true;
        this.state.isUser = v;
        alert(this.props.isUser);    
        // if(this.props.submitted){
        //     const reg = {
        //     email: this.state.email.data,
        //     password: this.state.password.data,
        //     fullname: this.state.fullname.data};

        //         axios.post('/reg.json',reg);}
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
                            Registration
                        </h1>
                        <div>
                            <input ref={el => this._input = el} type="text" name="email" onChange={this.onChange} className={this.state.email.isActive ? 'focus' : ''}/>
                            <label>Email</label>                            
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.email.error !=='' ?  this.state.email.error : ''}
                        </span>

                        <div>
                            <input type="text" name="fullname" onChange={this.onChange} className={this.state.fullname.isActive ? 'focus' : ''}/>
                            <label>Full Name</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.fullname.error !=='' ?  this.state.fullname.error : ''}
                        </span>

                        <div>
                            <input type="password" name="password" onChange={this.onChange} className={this.state.password.isActive ? 'focus' : ''}/>
                            <label>Password</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.password.error !=='' ?  this.state.password.error : ''}
                        </span>

                        <div>
                            <input type="password" name="cpassword" onChange={this.onChange} className={this.state.cpassword.isActive ? 'focus' : ''}/>
                            <label>Confirm Password</label>
                        </div>
                        <span style={{color: 'red', fontWeight:'bold'}}>
                            {this.state.cpassword.error !=='' ?  this.state.cpassword.error : ''}
                        </span>

                        <div style={{textAlign:'center'}}>
                            Already have an account ?<Link to='/login'>Log In here</Link>
                            <input className="button-secondary" type="submit" name="submit" value={this.state.loading ? 'Loading...' : 'Submit'} />
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        profile:state.us.profile,
        isUser:state.us.isUser
    };
        }
const mapDispatchToProps = dispatch => {
    return {
        checkUser: (isUser)=> dispatch({type:actionTypes.CHECK_USER,payload:isUser})
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Register);
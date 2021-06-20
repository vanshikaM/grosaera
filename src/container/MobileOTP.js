import React from 'react';
import firebase from '../firebase';

let num=null;
const onHandleOtp=(e)=>{
    num="+91"+e.target.value;
    
}


const mobileOTP=()=>{
    const onSubmitOtp=()=>{
    
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        firebase.auth().signInWithPhoneNumber(num,recaptcha).then(function(e){
            let code = prompt('Enter the OTP','');
            if(code == null) return;
            e.confirm(code).then(function(result){
                console.log(result.user,'user');
                document.querySelector('label').textContent=result.user.phoneNumber + " Number Verified";
    
            }).catch((error)=>{
                console.log(error)
            })
        })
    }

    return(
        <div >
            <h6>Phone Number Verification</h6><br />
            <input type="text" placeholder="Enter 10 digit number" onChange={onHandleOtp}/>
            <label></label>
            <div id="recaptcha-container"></div>
            <button onClick={onSubmitOtp}>Get OTP</button>
        </div>
    );
}

export default mobileOTP;
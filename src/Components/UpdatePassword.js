import React, { useState } from 'react'
import styled from 'styled-components';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { OtpInput } from 'reactjs-otp-input';
import { UpdatePasswordAPI,RequestOTPApi } from '../APIpoints/SignupAPI';
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router';

const UpdatePassword = (props) => {
    const history = useNavigate();
    const [resendOTP,setResendOTP] = useState(true);
    const [otp,setotp]=useState('')
    const  message= props.message;
    const email = props.email;
    const [invalidMsg,setInvalidMsg]= useState(false);
    const [password,setPassword]=useState({password:'',repassword:''});
    const PasswordOnChange = (e)=>{
        setPassword({...password,[e.target.name]:e.target.value})
    }
    const [passwordmismatch,setPasswordMismatch]=useState(false);
    const [showpassword,setshowpassword]=useState(false);

    const passwordMatch = ()=>{
        console.log(password)
        if(password.password===password.repassword){
            setPasswordMismatch(false);
        }else{
            setPasswordMismatch(true);
        }
    }
    const VerifyOTP = async(e)=>{
       passwordMatch();
        if(otp.length<6){
            setInvalidMsg(true);
            return;
        }
        
       
        setInvalidMsg(false);
        e.preventDefault();
        const response = await UpdatePasswordAPI(email,otp,password.password);
        const {success,message} = await response;
        if(success){
            toast.success(message);
            setTimeout(() => {
                history('/login')
            }, 5000);
        }else{
            toast.error(message)
        }
    };  
    const ResendOtp = async()=>{
        const response = await RequestOTPApi(email);
        const {message}= await response;
        toast(message);
    }
   
  return (
    <>
   <OTPblock>
    <Toaster position='top-center' toastOptions={{duration:5000}}/>
    <OTPwrapper>
        <h2 style={{textAlign:'center',padding:'10px 0'}}>{message}</h2>
        <div style={{padding:'20px 0'}}>
        <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={['#780000']}
        
            size={100} strokeWidth={12} 
            onComplete={()=>setResendOTP(false)}
        >
        {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <ResendOTP onClick={ResendOtp} disabled={resendOTP}>Resend OTP </ResendOTP>
        </div>
        <OtpInput value={otp} onChange={setotp} numInputs={6} inputStyle={{padding:'10px',margin:'8px'}} isInputNum={true} separator={<span>-</span>}/>
        <InvalidMsg> {invalidMsg ?'PLEASE ENTER OTP':''}</InvalidMsg>
        <Input onChange={PasswordOnChange} value={password.password} name='password' placeholder='Enter Password' type={showpassword?'text':'password'}/>
       <Showpassdiv>
         <div><input onChange={()=>setshowpassword(!showpassword)} type="checkbox" name="showpassword" id="" />&nbsp;ShowPassword</div>
         <InvalidMsg>{passwordmismatch ? 'password Mismatch' :''}</InvalidMsg>
         </Showpassdiv>
        
        <Input value={password.repassword} onChange={PasswordOnChange}  name='repassword' placeholder='Reenter password'/>
        <ResendOTP onClick={VerifyOTP}>Verify</ResendOTP>
    </OTPwrapper>
   </OTPblock>
   </>
  )
}

const OTPblock = styled.div({
    width:'100vw',
    height:'100vh',
    background:'#00000075',
    position:'absolute',
    zIndex:'15',
    top:'0'
    ,left:'0',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
});
const Input = styled.input({
    background:'#e9ecef',
    border:'none'
    ,borderRadius:'5px',
    width:'100%',
    maxWidth:'400px',
    padding:'10px 3px',
    fontSize:'18px',
    margin:'10px 0'
});
                    
const OTPwrapper = styled.div({
    background:'white',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:"20px",
    boxSizing:'border-box'
})
const ResendOTP = styled.button({
    background:'#348DF1',
    border:'none'
    ,borderRadius:'5px',
    width:'100%',color:'white',
    maxWidth:'400px',
    display:'flex',alignItems:'center',
    justifyContent:'center',
    height:'40px',
    fontSize:'16px',
    margin:'10px 0',
    fontWeight:'bold',
    transition:'0.4s ease',
    '&:hover':{
        background:'#0F72E3',
        color:'white'
    } ,
    '&:disabled':{
        opacity:'0.6'
    }      
});const Showpassdiv=styled.div({
    display:'flex',justifyContent:'space-between',width:'100%',
    '@media (max-width: 768px)':{
        width:'100%'
    }
})
const InvalidMsg = styled.p({
    color:'red',
    textTransform:'capitalize'
    ,fontWeight:'normal'
});
export default UpdatePassword
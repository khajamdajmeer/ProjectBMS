import React from 'react';
import Signupimg from '../Resources/bgloginimg.png';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {RequestOTPApi} from '../APIpoints/SignupAPI';
import toast,{Toaster} from 'react-hot-toast';
import UpdatePassword from './UpdatePassword';
const ForgotPassword = () => {
    const history = useNavigate();
  
    const [SignupCredentials,setSignupCredentials] = useState({email:'',mobilenumber:''});
    const onchangeSignupCredentials = (e)=>{
        setSignupCredentials({...SignupCredentials,[e.target.name]:e.target.value});
    };
   
   

   
    const [message,setMessage]=useState("")
    const [ShowEnterOTP,setShowEnterOTP]=useState(false);
    
    const HandleOnsubmit = async(e)=>{
        e.preventDefault();
            const response = await RequestOTPApi(SignupCredentials.email);
            const {success,message}=response;
            if(success){
                setMessage(message);
                setShowEnterOTP(true);
                toast.success(message);

            }else{
                toast.error(message);
            }
    };
  return (
    <>
    
    <FullScreen>
        <Toaster
            position='top-center'
            toastOptions={{duration:5000}}
            />
   <CenterBox>
    <Wrapperleft>
        <h1 style={{textAlign:'center'}}>Forgot Password</h1>
        <InputForm onSubmit={HandleOnsubmit}>

            
            <Lables>Email   </Lables>
            
            <Input onChange={onchangeSignupCredentials} name='email' value={SignupCredentials.email} placeholder='Enter Email'type='email'/>
            
            <SignupBtn type='submit'>REQUEST OTP</SignupBtn>
      
            <BoderDiv></BoderDiv>
        </InputForm>
        <h3 style={{padding:'20px 0 10px 0',color:'black',textTransform:'capitalize'}}>Already have an account?</h3>
        <SignupBtn onClick={()=>history('/login')}>SIGN IN</SignupBtn>
    </Wrapperleft>
    <WrapperRight>
        <img style={{display:'flex',height:'100%',width:'auto'}} src={Signupimg} alt="" />
    </WrapperRight>
   </CenterBox>
  <BottomColor></BottomColor>
  <RightColor></RightColor>
  <LeftColor></LeftColor>
  {ShowEnterOTP && <UpdatePassword email={SignupCredentials.email} message={message}/>}
  
  
    </FullScreen>
    </>
  )
}

const FullScreen = styled.div({
    height:'100vh',
    width:'100vw',
    display:'flex',
    alignItems:'center'
    ,justifyContent:'center',
    background:'#E6E6E6',


})
const CenterBox = styled.div({
    width:'80%',
   height:'80%',
    // backgroundColor:'#FFFFFF40',
    borderRadius:'10px',
    padding:'30px 10px',
    // backdropFilter:'blur(2px)',
    display:'flex',
    alignItems:'center',justifyContent:'center',
    position:'absolute',zIndex:'10'
})
const WrapperRight = styled.div({
    width:'60%',
    minWidth:'500px',
   
    height:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderLeft:'2px solid #E6E6E6',
    '@media (max-width: 768px)':{
        display:'none'
    }
    
    
})
const Wrapperleft = styled.div({
    width:'40%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    '@media (max-width: 768px)':{
        width:'100%',
    }
    
})
const Input = styled.input({
    background:'#e9ecef',
    border:'none'
    ,borderRadius:'5px',
    width:'100%',
    maxWidth:'400px',
    padding:'8px 3px',
    fontSize:'16px',
    margin:'10px 0',
   
    '::-webkit-progress-inner-value':{
        display:"none"
    }
})
const SignupBtn = styled.button({
    background:'#348DF1',
    border:'none'
    ,borderRadius:'5px',
    width:'100%',color:'white',
    maxWidth:'400px',
    padding:'8px 0px',
    fontSize:'16px',
    margin:'8px 0',
    fontWeight:'bold',
    transition:'0.4s ease',
    '&:hover':{
        background:'#0F72E3',
        color:'white'
    } ,
    ':disabled':{
        opacity:'0.8'
    }      
});
const InputForm = styled.form({
    width:'100%',
   
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    margin:"0px"
})
const BoderDiv = styled.div({
    width:'90%',
    height:'3px',
    background:'#e9ecef',
    borderRadius:'5px'
})

const BottomColor = styled.div({
    background:'#F19934',
    width:'100%',
    height:'100%',clipPath: 'polygon(0 0%, 9% 0, 100% 100%, 0 49%)',
    position:'absolute',
 

});
const LeftColor = styled.div({
    background:'#3A34F1',
    width:'100%',position:'absolute',
    height:'100%',
    clipPath:'polygon(96% 0, 100% 0, 100% 100%, 84% 100%)',
    '@media (max-width: 768px)':{
        clipPath: 'polygon(96% 0, 100% 0, 100% 100%, 54% 100%)'
    }
});
const RightColor = styled.div({
    background:'#34EBF1',
    width:'100%',position:'absolute',
    height:'100%',
    clipPath:'polygon(100% 100%, 100% 100%, 0 100%, 0 48%)'
});

const Lables = styled.label({
    width:'100%',
    maxWidth:'400px',
    textTransform:'capitalize',
    fontWeight:'bold',display:'flex'
});

export default ForgotPassword
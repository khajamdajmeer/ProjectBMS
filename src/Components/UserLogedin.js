import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const UserLogedin = (props) => {

  const History = useNavigate();
    const HandleHomeBtn = ()=>{             
        History('/')
    };
    

  return (
    <>
    <FullScreen>
        <DialogBox>
            <DialogHeading>
                User Already LogedIn
                </DialogHeading>
            <UserDiv>
            <span class="material-symbols-outlined" style={{fontSize:'150px'}}>account_circle</span>
            <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',boxSizing:'border-box',padding:'10px 20px'}}>
            <BackHomeBtn onClick={HandleHomeBtn}><span class="material-symbols-outlined" style={{fontWeight:'revert-layer',fontSize:'24px'}}>Home</span>Home</BackHomeBtn>
            <LogOutBtn onClick={props.handlelogout}><span class="material-symbols-outlined" style={{fontWeight:'revert-layer',fontSize:'24px'}}>Logout</span>Logout</LogOutBtn>

            </div>
            </UserDiv>
            
        </DialogBox>
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
    background:'#00000045',
    position:'absolute',
    zIndex:100,
   

})
const DialogBox = styled.div({
    // height:'350px',
    width:'90%',
    maxWidth:'400px',
    background:'#FFFFFF',
    boxSizing:'border-box',
    borderRadius:'10px'
    ,paddingBottom:'20px'
});
const DialogHeading = styled.h2({
    width:'100%',
    textAlign:'center',
    verticalAlign:'ceter',
    boxSizing:'border-box',
    padding:'15px',
    textTransform:'uppercase',
    backgroundColor:'#3A34F1',
    borderTopLeftRadius:'10px',
    borderTopRightRadius:'10px',
    color:'#FFFFFF'

    
});
const UserDiv = styled.div({
    display:'flex',
    width:'100%',
    maxHeight:'100%',
    alignItems:'center'
    ,justifyContent:'center'
    ,flexDirection:'column'


});
const BackHomeBtn = styled.button({
    display:'flex'
    ,alignItems:'center'
    ,justifyContent:'center'
    ,padding:'10px'
    ,boxSizing:'border-box',
    background:'#edede9',
    fontSize:'24px',
    borderRadius:'10px',
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    ,border:'none',fontWeight:'bold',
    transition:'ease 0.3s',
    '&:hover':{
    boxShadow: "rgba(0, 0, 0, 0.66) 0px 3px 8px"
    }
});

const LogOutBtn = styled.button({
    display:'flex'
    ,alignItems:'center'
    ,justifyContent:'center'
    ,padding:'10px'
    ,boxSizing:'border-box',
    background:'#f48c06',
    fontSize:'24px',
    borderRadius:'10px',
    boxShadow: "#f48c0645 0px 3px 8px"
    ,border:'none',color:'#FFFFFF',
    transition:'ease 0.3s',fontWeight:'bold',
    '&:hover':{
    boxShadow: "#f48c0699 2px 8px 12px"
    }
});

export default UserLogedin
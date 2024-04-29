import React, { useState } from 'react'
import styled, {  } from 'styled-components';
import './Navbar.css';
import BmsLogo from '../../Resources/bmsbglogo.png';
const Navbar = () => {

    const [openmenu,setOpenMenu]=useState(false);
    
    const HandlemenuToggle = ()=>{
       const checkbox  = document.getElementById('menucheckbox');
    checkbox.checked = !checkbox.checked;
    console.log(checkbox.checked);
   };
   
        
    
    const Navigation = styled.div({
        width:'100vw'
        ,height:'100vh',
        position:'absolute',
        background:'#00000045' ,
      });
    
  return (
    <>
    <NavBarDiv>
        <div><NavLogo src={BmsLogo} alt="" /></div>
       
        <button style={{border:'none',cursor:'pointer'}} onClick={HandlemenuToggle}><span class="material-symbols-outlined" style={{color:'black',fontSize:'30px',overflow:'hidden'}}>menu</span></button>
    </NavBarDiv>
    {/* <Navigation onClick={HandlemenuToggle}>

    </Navigation> */}
        <input id='menucheckbox' name='mycheck' type='checkbox' style={{display:'none'}} value={openmenu}/>
    <ul id='navlist'>
        <MenuNavListItem>
        <button style={{border:'none',cursor:'pointer',background:'none' }} onClick={HandlemenuToggle}><span class="material-symbols-outlined" style={{color:'black',fontSize:'30px',overflow:'hidden'}}>menu</span></button>
        </MenuNavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
    </ul>
    </>
  )
  
}

const NavBarDiv = styled.div({
    width:'100%',
    background:'#edf2f4',
    boxSizing:'border-box'
    ,padding:'0 10px'
    ,    display:'flex',
    alignItems:'center'
    ,justifyContent:'space-between'
    ,position:'fixed',
    top:'0px'
});
const NavLogo = styled.img({
    height:'50px'
    ,width:'auto',
    padding:'0'
    
})

const NavListItem = styled.li({
    padding:'0 20px'
});
const MenuNavListItem = styled.li({
   display:'flex',
   alignItems:'center'
   ,justifyContent:'flex-end',
   padding:'10px 20px',
   boxSizing:'border-box',
   boxShadow:'#00000040 -6px -6px 40px -7px'
});

export default Navbar
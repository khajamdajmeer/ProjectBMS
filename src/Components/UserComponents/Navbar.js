import React, { useState } from 'react'
import styled, {  } from 'styled-components';
import './Navbar.css';
import BmsLogo from '../../Resources/bmsbglogo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [openmenu,setOpenMenu]=useState(false);
    
    const HandlemenuToggle = ()=>{
       const checkbox  = document.getElementById('menucheckbox');
    checkbox.checked = !checkbox.checked;
    console.log(checkbox.checked);
   };
   
        
    
   
    const cssOfSigninlink = {
        display:'flex',
        textDecoration:'none',
        padding:'8px 20px',
        backgroundColor:'rgb(248, 68, 100)',
        color:'white',
        margin:'10px'
        ,borderRadius:'5px',
        fontSize:'12px'
    };

    const LocationsList = ['hyderabad','chennai','mumbai','pune','delhi','vizag','ahmedabad','bangalor'];

    const [location,setLocation] = useState();
    
  return (
    <>
    <Nav>

    <NavBarDiv>
        <NavLeft >
            <NavLogo src={BmsLogo} alt="" />
        <SearchInput type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
        <LocationDiv>
            <SelectLocatin value={location} name='location' onChange={(e)=>setLocation(e.target.value)}>
                {LocationsList.map((ele,index)=>{
                    return <option value={ele}>{ele.toUpperCase()}</option>
                })}
            </SelectLocatin>
            {/* <span style={{display:'flex',fontSize:'20px',padding:'0 4px'}} class="material-symbols-outlined">my_location</span>location */}
            </LocationDiv>
        <Link style={cssOfSigninlink} to='/login'>SIGN IN</Link>
        </NavLeft>
        
       
        <button style={{border:'none',cursor:'pointer',background:'white'}} onClick={HandlemenuToggle}><span class="material-symbols-outlined" style={{color:'black',fontSize:'30px',overflow:'hidden'}}>menu</span></button>
    </NavBarDiv>
    </Nav>

        <input id='menucheckbox' name='mycheck' type='checkbox' style={{display:'none'}} value={openmenu}/>
    <ul id='navlist'>
        <MenuNavListItem>
        <strong>Hey!</strong><button style={{border:'none',cursor:'pointer',background:'none' }} onClick={HandlemenuToggle}><span class="material-symbols-outlined" style={{color:'black',fontSize:'30px',overflow:'hidden'}}>close</span></button>
        </MenuNavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
            <NavListItem>Home</NavListItem>
    </ul>
    </>
  )
  
}
const Nav = styled.div({display:'flex',
width:'100%',
alignItems:'center',
justifyContent:'center',
background:'#FFFFFF'
,position:'fixed',
    top:'0px',
    padding:'4px 0'
});
const LocationDiv = styled.div({
    display:'flex',
    padding:'4px 20px'
})

const NavBarDiv = styled.div({
    width:'100%',
    boxSizing:'border-box'
    ,padding:'0 10px'
    ,    display:'flex',
    alignItems:'center'
    ,justifyContent:'space-between'
    ,maxWidth:'1240px'
});
const NavLogo = styled.img({
    height:'50px'
    ,width:'auto',
    padding:'0'
    
})
const NavLeft = styled.div({
    display:'flex'
    ,alignItems:'center'
})
const NavListItem = styled.li({
    padding:'0 20px',
    listStyle:'none'
});
const SearchInput = styled.input({
    width:'750px'
    ,padding:'5px',
    border:'1px solid grey'
    ,borderRadius:'5px',
    height:'20px'
})
const MenuNavListItem = styled.li({
   display:'flex',
   alignItems:'center'
   ,justifyContent:'space-between',
   padding:'10px 20px',
   boxSizing:'border-box',
   boxShadow:'#00000040 -6px -6px 40px -7px'
});
const SelectLocatin = styled.select({
    padding:'4px 15px',
    border:'none'
    ,background:'white'
})

export default Navbar
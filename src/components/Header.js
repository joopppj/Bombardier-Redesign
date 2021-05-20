import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { selectJets, slelectJets } from '../features/jetSlice/jetSlice';
import { useSelector } from 'react-redux';
function Header() {
    const [DropDownOpen, setDropDownOpen] = useState(false);
    const jets = useSelector(slelectJets);
    console.log(jets)
    return (
        <Nav>
            <a href="/assets/logo.png" alt="" >
                <LOGO src="/assets/logo.png" alt="" />
            </a>
            <Menu>
                {jets && jets.map((jet, index) =>
                    (<a key={index} href="">{jet}</a>)
                )}



            </Menu>
            <OtherMenu>
                <a href="https://github.com/joopppj">Source Code</a>
                <a href="https://bombardier.com/en">Old Site</a>
                <SideMenu onClick={() => setDropDownOpen(true)} />
            </OtherMenu>
            <DropDownMenu showDropDown={DropDownOpen} >
                <Close onClick={() => setDropDownOpen(false)}>
                    <CloseButton onClick={() => setDropDownOpen(false)} />
                </Close>
                {jets && jets.map((jet, index) =>
                    (<li> <a key={index} href="#">{jet}</a></li>)
                )}
                <li> <a href="https://www.google.com/">Exit</a></li>
            </DropDownMenu>
        </Nav>
    )
}

export default Header;



const Nav = styled.div`
    
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    top: 0;
    left:0;
    right:0;
    z-index:1;
`
const LOGO = styled.img`
    margin-top:1px;
    height:60px;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a {
        font-weight: 600;
        padding:0 10px;
        flex-wrap: no-wrap;
    }
    @media(max-width:768px){
        display: none;
    }
    
    
`

const OtherMenu = styled.div`
display: flex;
align-items= center;
a {
    font-weight: 600;
    padding:0 10px;
    flex-wrap: nowrap;

}
`

const SideMenu = styled(MenuIcon)`
cursor:pointer;
`

const DropDownMenu = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.showDropDown ? `translateX(0)` : `translateX(100%)`};
    transition: transform 0.3s ;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a{
            font-weight:600;
        }
    }
`

const Close = styled(HighlightOffIcon)`
cursor: pointer;
`

const CloseButton = styled.div`
display:flex;
justify-content:flex-end;
`
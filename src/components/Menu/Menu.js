import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import AllPhotos from '../../static/AllPhotos.png';
import Search from '../../static/search.jpeg';
import LogOut from '../../static/log-out.jpg';


const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/homepage" tabIndex={tabIndex}>
        Dashboard
        <span aria-hidden="true"><img src={AllPhotos} alt="img1"/></span>
      </a>
      <a href="/categories" tabIndex={tabIndex}>
        Search
        <span aria-hidden="true"><img src={Search} alt="img2"/></span>
        </a>

      <a href="/" tabIndex={tabIndex}>
        Log Out
        <span aria-hidden="true"><img src={LogOut} alt="img4"/></span>
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

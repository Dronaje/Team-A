import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import AllPhotos from '../../static/AllPhotos.png';
import Share from '../../static/share.png';
import Categories from '../../static/categories.png';
import LogOut from '../../static/log-out.jpg';


const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"><img src={AllPhotos} /></span>
        All photos
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"><img src={Categories} /></span>
        Categories
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"><img src={Share} /></span>
        Send to a friend
        </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"><img src={LogOut} /></span>
        Log Out
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

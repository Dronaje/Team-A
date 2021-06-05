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
        All photos
        <span aria-hidden="true"><img src={AllPhotos} /></span>
      </a>
      <a href="/" tabIndex={tabIndex}>
        Categories
        <span aria-hidden="true"><img src={Categories} /></span>
        </a>
      <a href="/" tabIndex={tabIndex}>
        Send to a friend
        <span aria-hidden="true"><img src={Share} /></span>
        </a>
      <a href="/" tabIndex={tabIndex}>
        Log Out
        <span aria-hidden="true"><img src={LogOut} /></span>
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

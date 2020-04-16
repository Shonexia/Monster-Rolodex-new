import React from 'react';

import './sidebar-item.styles.css';

export const SideBarItem = (props) => (
  <div className="sidebar-item sidebar-itemtest" >
    <div className="sidebar-overlay"></div>
    <img src={props.image} alt="monster" className="sidebar-icon" />
  </div>
)
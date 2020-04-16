import React from 'react';

import { SideBarItem } from '../sidebar-item/sidebar-item.component';

import './sidebar.styles.css';

export const SideBar = () => (
  <div className="sidebar">
   <SideBarItem image={'https://icons.iconarchive.com/icons/designbolts/monsters-university/256/Scary-Monsters-icon.png'}/> 
   <SideBarItem image={'https://freepngimg.com/download/monster/34041-7-blue-monster-transparent-background.png'}/>
   <SideBarItem image={'https://icons.iconarchive.com/icons/tanitakawkaw/monsters/256/monster-icon.png'}/>
  </div> 
)
import React from 'react';
import { NavLink } from 'react-router-dom';
import m2 from './AppGrid2.module.css';

const colorMenu = ({ isActive }) => ({ color: isActive ? '#76808D' : '#472F08' });

const AppGrid2 = () => {
  return (
    <div className={m2.AppGrid_2}>
      <NavLink to='/AppGrid3' className={m2.catalog} style={colorMenu}>Главная</NavLink>
      <NavLink to='/AppGrid4' className={m2.catalog} style={colorMenu}>Проекты</NavLink>
      <NavLink to='/AppGrid5' className={m2.catalog} style={colorMenu}>Какой-то чат</NavLink>
      <NavLink to='/AppGrid6' className={m2.catalog} style={colorMenu}>О нас</NavLink>
    </div>
  );
}
export default AppGrid2;
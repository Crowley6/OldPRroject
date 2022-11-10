import React from 'react';
import { NavLink } from 'react-router-dom';
import m2 from './css/Menu.module.css';

const colorMenu = ({ isActive }) => ({ color: isActive ? '#76808D' : '#472F08' });

const AppGrid2 = () => {
  return (
    <div className={m2.AppGrid_2}>
      <NavLink to='/Main' className={m2.catalog} style={colorMenu}>Главная</NavLink>
      <NavLink to='/Projects' className={m2.catalog} style={colorMenu}>Проекты</NavLink>
      <NavLink to='/SomeChat' className={m2.catalog} style={colorMenu}>Какой-то чат</NavLink>
      <NavLink to='/About' className={m2.catalog} style={colorMenu}>О нас</NavLink>
      <NavLink to='/MyProfile' className={m2.catalog} style={colorMenu}>Мой Профиль</NavLink>
    </div>
  );
}
export default AppGrid2;
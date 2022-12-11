import React from 'react';
import m3 from './css/DinamycGrid.module.css';

const AppGrid4 = () => {
  let aRef = React.createRef();

  let Atext = () => {
    let aRef1 = aRef.current.value;
    alert('Ваш пароль: ' + aRef1 );
  }
  return (
    <div className={`${m3.AppGrid_3}`}>
      <input type='password' ref={aRef} />
      <a onClick={Atext}>Записать</a>

    </div>
  );
}
export default AppGrid4;
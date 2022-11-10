import m3 from './css/DinamycGrid.module.css';
import m5 from './css/Chat.module.css';
import Friends from './Back/Friends';
import Messages from './Back/Messages';


const AppGrid6 = () => {

  return (
    <div className={m3.AppGrid_3}>
      <div className={m5.Chat}>
        <Friends />
        <Messages />
      </div>
    </div>
  );
}


export default AppGrid6;
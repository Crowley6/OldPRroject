import m3 from './css/DinamycGrid.module.css';
import m5 from './css/Chat.module.css';
import Friends from './Back/Friends';
import Messages from './Back/Messages';


const AppGrid6 = (props) => {

  return (
    <div className={m3.AppGrid_3}>
      <div className={m5.Chat}>
        <Friends dID={props.dcID2.ChatBack.dID} />
        <Messages mD={props.dcID2.ChatBack.mD} addPost={props.addPost} />
      </div>
    </div>
  );
}


export default AppGrid6;
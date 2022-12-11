import React from 'react';
import m5 from './../css/Chat.module.css';

const Message = (props) => { return <div>{props.message}</div> }

const Messages = (props) => {

    let mElem = props.mD.map(m => <Message message={m.message} />);

    let aRef = React.createRef();
    let addPost = () => {
        let aRefText = aRef.current.value;
        props.addPost(aRefText);
    };

    return (
        <div className={m5.Chat_2}>
            <div>{mElem}</div>
            <textarea cols="20" rows="5" ref={aRef}></textarea>
            <button onClick={addPost}>123</button>
        </div>
    )
}
export default Messages;
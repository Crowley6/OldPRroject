import m5 from './../css/Chat.module.css';

const Message = (props) => { return <div>{props.message}</div> }

const Messages = () => {
    let mD = [
        { id: 1, message: "Какое-то сообщение" },
        { id: 2, message: "Что-то на неважном" },
        { id: 3, message: "ААА!ъУъ!?" },
    ]

    let mElem = mD.map(m => <Message message={m.message} />);

    return (
        <div className={m5.Chat_2}>
            {mElem}
        </div>
    )
}
export default Messages;
import React from 'react';
import m3 from './css/DinamycGrid.module.css';

let Div11 = (props) => { return <div><img src={props.img} /><div>{props.profile}</div><div>{props.likeCount}</div></div> }

let MyProfile = (props) => {

    let div1 = props.profileInfo.pData.map(proflie => <Div11 img={proflie.img} profile={proflie.profile} likeCount={proflie.likeCount} />)

    let refProfile = React.createRef();
    let addnewProfile = () => {
        props.addnewProfile();
    };
    let addnewProfileText = () => {
        let profileData = refProfile.current.value;
        props.addnewProfileText(profileData);
    }

    return (
        <div className={`${m3.AppGrid_3}`}>
            <div>{div1}</div>
            <textarea onChange={addnewProfileText} ref={refProfile} value={props.profileInfo.ProfileText} cols="150" rows="10" />
            <button onClick={addnewProfile}>123</button>
        </div>
    );
}
export default MyProfile;
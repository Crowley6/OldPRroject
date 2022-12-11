let rerenderReact = () => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
}

let Backend = {
  ChatBack: {
    dID: [
      { id: 1, name: "Дмитрий", url: 'dmitrii.jpg' },
      { id: 2, name: "Человек", url: 'people.jpg' },
      { id: 3, name: "Он", url: 'he.jpg' },
      { id: 4, name: "Кто-То", url: 'somebody.jpg' },
      { id: 5, name: "ТОт-Самый", url: 'heis.jpg' },
    ],
    mD: [
      { id: 1, message: "Какое-то сообщение" },
      { id: 2, message: "Что-то на неважном" },
      { id: 3, message: "ААА!ъУъ!?" },
    ]
  },
  MainBack: {
    cD: [
      { id: 1, message: "Какое-то сообщение", likeCount: 14 },
      { id: 2, message: "Что-то на неважном", likeCount: 12 },
      { id: 3, message: "ААА!ъУъ!?", likeCount: 4 }]
  },
  MyProfile: {
    ProfileText: 'asdasdasdsadsdsdsd1232323',
    pData: [
      { img: '1.jpg', profile: 'aaaa', likeCount: 0 },
      { img: '2.jpg', profile: 'aaasa', likeCount: 2 },
    ]
  }
}

export const addnewProfile = () => {
  let newProfile =
    { img: '3.jpg', profile: Backend.MyProfile.ProfileText, likeCount: 0 };
  Backend.MyProfile.pData.push(newProfile);
  rerenderReact(Backend);
  Backend.MyProfile.ProfileText = 'profileName';
}
export const addnewProfileText = (profileName) => {
  Backend.MyProfile.ProfileText = profileName;
  rerenderReact(Backend);
}

export const addPost = (dialogMessage) => {
  let newDialog =
    { id: 9, message: dialogMessage };
  Backend.ChatBack.mD.push(newDialog);
  rerenderReact(Backend);
}

export const subscribe = (observer) => {
  rerenderReact = observer;
}


export default Backend;
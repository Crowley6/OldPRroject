import './index.css';
import reportWebVitals from './reportWebVitals';
import Backend, { subscribe, addPost, addnewProfile, addnewProfileText } from './Redux/Backend';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderReact = (Backend) => {
    root.render(
        <React.StrictMode>
            <App dcID={Backend} addPost={addPost} profileInfo={Backend} addnewProfile={addnewProfile} addnewProfileText={addnewProfileText} />
        </React.StrictMode>
    );
}

rerenderReact(Backend);

subscribe(rerenderReact);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import m3 from './css/DinamycGrid.module.css';

function MyProfile() {
    return (
        <div className={`${m3.AppGrid_3}`}>
            <div>
                <img src="#" alt="image is not displayed" /><br />
                <a>info about him</a><br />
                <a>likes</a>
            </div>
        </div>
    );
}
export default MyProfile;
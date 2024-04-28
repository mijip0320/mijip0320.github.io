
import "./Header.scss"
import logo  from './미모티콘.jpeg'
const Header = (): JSX.Element => {

    return (
        <div className="header">
            <div className="header_logo">
                <img src={logo}  alt="logo" className="header_image" width="80"></img>
            </div>
        </div>
    )
}

export default Header;
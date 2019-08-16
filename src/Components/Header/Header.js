import React from 'react';
import {
    Dropdown,
    Button,
    Image 
} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import defaultProfileImg from '../../Assets/Images/default-profile-img.png'
import './Header.css';

const Header = (props) => {
    const {logo, profileImg, userName, userList } = props;

    const handleImageError  = (e) => {
        e.target.src = defaultProfileImg
    }
    return (
        <header className="navbar navbar-expand">
             <Link to="/">
                <div className="logo-wrap">                
                    <Image  
                        src={logo}
                        fluid 
                    />
                </div>
            </Link>
            <div className="navbar-nav ml-auto">
                <Button className="btn block transparent link"><Link to="/create-user">{props.addUserText}</Link></Button>

                <Dropdown className="switchUser-dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                        <span className="firstName">{userName}</span>
                        <div className="profileImg-wrap">
                            <Image onError={handleImageError} src={profileImg ? profileImg : defaultProfileImg } alt={'Profile Image'} fluid/>
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {userList.map((user,i)=>{
                            return <Dropdown.Item key={i} onClick={()=>{props.setActiveUserHander(user)}} >{user.firstName}</Dropdown.Item>
                        })}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    );
}

export default Header;
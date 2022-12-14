import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'
function Header() {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>

        <img src="https://img.icons8.com/fluency/48/000000/--tinder.png"/>

        <IconButton>
     <ForumIcon fontSize="large" className="header__icon"/>
     </IconButton>
    </div>
  )
}

export default Header
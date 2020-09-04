import React from 'react'
import Box from "@material-ui/core/Box";
import PersonIcon from '@material-ui/icons/Person'
import StorageIcon from '@material-ui/icons/Storage'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import AppsIcon from '@material-ui/icons/Apps'
import DvrIcon from '@material-ui/icons/Dvr'
import '../../styles/Nav.css'

const Nav = () => {
    const [navSelected, setNavSelection] = React.useState(0);

    const handleClick = (position) => {
        setNavSelection(position)
    }

    return (
        <Box className="nav-root">
            <Box className={navSelected === 0 ? "selected" : "unselected"} onClick={() => { handleClick(0) }}>
                <PersonIcon className="nav-icon" />
            </Box>
            <Box className={navSelected === 1 ? "selected" : "unselected"} onClick={() => { handleClick(1) }}>
                <StorageIcon className="nav-icon" />
            </Box>
            <Box className={navSelected === 2 ? "selected" : "unselected"} onClick={() => { handleClick(2) }}>
                <DvrIcon className="nav-icon" />
            </Box>
            <Box className={navSelected === 3 ? "selected" : "unselected"} onClick={() => { handleClick(3) }}>
                <AppsIcon className="nav-icon" />
            </Box>
            <Box className={navSelected === 4 ? "selected" : "unselected"} onClick={() => { handleClick(4) }}>
                <LocalPhoneIcon className="nav-icon" />
            </Box>
        </Box >
    );
}

export default Nav

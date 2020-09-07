import React from 'react'
import Box from "@material-ui/core/Box";
import PersonIcon from '@material-ui/icons/Person'
import StorageIcon from '@material-ui/icons/Storage'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import AppsIcon from '@material-ui/icons/Apps'
import DvrIcon from '@material-ui/icons/Dvr'
import { useSpring, animated } from 'react-spring'

import '../../styles/Nav.css'

const Nav = () => {
    const [navSelected, setNavSelection] = React.useState(0);

    const handleClick = (position) => {
        setNavSelection(position)
    }

    const personAnim = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 300 }, delay: 1000 })
    const storageAnim = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 300 }, delay: 1200 })
    const dvrAnim = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 300 }, delay: 1300 })
    const appsAnim = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 300 }, delay: 1400 })
    const phoneAnim = useSpring({ marginLeft: 0, from: { marginLeft: -100 }, config: { duration: 300 }, delay: 1500 })
    return (
        <Box className="nav-root">
            <animated.div style={personAnim} className={navSelected === 0 ? "selected" : "unselected"} onClick={() => { handleClick(0) }}>
                <PersonIcon className="nav-icon" />
            </animated.div>
            <animated.div style={storageAnim} className={navSelected === 1 ? "selected" : "unselected"} onClick={() => { handleClick(1) }}>
                <StorageIcon className="nav-icon" />
            </animated.div>
            <animated.div style={dvrAnim} className={navSelected === 2 ? "selected" : "unselected"} onClick={() => { handleClick(2) }}>
                <DvrIcon className="nav-icon" />
            </animated.div>
            <animated.div style={appsAnim} className={navSelected === 3 ? "selected" : "unselected"} onClick={() => { handleClick(3) }}>
                <AppsIcon className="nav-icon" />
            </animated.div>
            <animated.div style={phoneAnim} className={navSelected === 4 ? "selected" : "unselected"} onClick={() => { handleClick(4) }}>
                <LocalPhoneIcon className="nav-icon" />
            </animated.div>
        </Box >
    );
}

export default Nav

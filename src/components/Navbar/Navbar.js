import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import grey from '@material-ui/core/colors/grey';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ScrollTop} from './ScrollTop';
import {DesktopMenuItem} from "./DesktopMenuItem";
import {I} from '../I'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        textTransform: 'capitalize',
        fontWeight: 900,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    dropDownMenu: {
        color: theme.palette.getContrastText(grey[200]),
        backgroundColor: grey[200],
    },
}));


ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export const Navbar = (props) => {
    const {view} = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'settings';
    const settingsMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <ListItemIcon>
                    <I>edit</I>
                </ListItemIcon>
                <Typography variant="inherit">Настройки расписания</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <ListItemIcon>
                    <I>preferences</I>
                </ListItemIcon>
                <Typography variant="inherit">Глобальные настройки</Typography>
            </MenuItem>
        </Menu>
    );


    const mobileMenuId = 'menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            <MenuItem>
                <IconButton aria-label="schedule" color="inherit">
                    <I>schedule</I>
                </IconButton>
                <p>Расписание</p>
            </MenuItem>
            {/*<MenuItem>*/}
            {/*    <IconButton aria-label="json" color="inherit">*/}
            {/*        <I>code</I>*/}
            {/*    </IconButton>*/}
            {/*    <p>Файл конфигурации</p>*/}
            {/*</MenuItem>*/}
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} variant="h5" noWrap edge="start">
                        Щедуля
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        {/*<DesktopMenuItem title="Тестовое задание" icon="task" active={view==='task'} />*/}
                        <DesktopMenuItem title="Расписание" icon="schedule" active={view==='schedule'}  />
                        {/*<DesktopMenuItem title="Файл конфигурации" icon="fileCode" active={view==='code'} />*/}
                        {/*<DesktopMenuItem title="GitHub" icon="github"/>*/}
                        {/*<DesktopMenuItem title="LinkedIn" icon="linkedin" pos={"end"}/>*/}
                    </div>
                    <div className={classes.sectionMobile}>
                        <DesktopMenuItem title="" icon="menu" onClick={handleMobileMenuOpen} aria-controls={mobileMenuId}
                                         aria-haspopup="true"/>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="toTop"/>
            {renderMobileMenu}
            {settingsMenu}
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>
        </div>
    );
}

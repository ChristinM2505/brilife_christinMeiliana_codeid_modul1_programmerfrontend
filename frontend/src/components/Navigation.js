import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { 
    Drawer,Hidden,List,
    ListItem,ListItemText,ListItemAvatar, Avatar 
} from '@material-ui/core';
import { GiRolledCloth } from "react-icons/gi";
import { TiHomeOutline ,
    TiEdit , TiDocumentText ,TiZoomInOutline
} from "react-icons/ti";
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';

const menus = [
    {
        path: '/',
        icon: TiHomeOutline ,
        label: 'Home'
    },
    {
        path: '/KontrasepsiPage',
        icon: GiRolledCloth,
        label: 'Kontrasepsi'
    },
    {
        path: '/PropinsiPage',
        icon: TiZoomInOutline,
        label: 'Propinsi'
    },
    {
        path: '/JumlahPemakaiPage',
        icon: TiZoomInOutline,
        label: 'Jumlah Pemakai'
    },
];

class Navigation extends Component {

    render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List >{menus.map((menu, index) => (
                <Link key={index} to={menu.path} >
                  <ListItem button >
                        <ListItemAvatar >
                            <Avatar className={classes.avatar}><menu.icon /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={menu.label} />
                  </ListItem>
                </Link>
            ))}
            </List> 
        </div>
        );

        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={ theme.direction === 'rtl' ? 'right' : 'left'}
                        open={ mobileOpen }
                        onClose={ handleDrawerToggle }
                        classes={{ paper: classes.drawerPaper}}
                        ModalProps={{ keepMounted: true}} >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{paper: classes.drawerPaper,}}
                        variant="permanent"
                        open >
                    {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        );
    }
}

Navigation.propTypes = {
    mobileOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
};
export default withStyles(styles, { withTheme: true })(Navigation);
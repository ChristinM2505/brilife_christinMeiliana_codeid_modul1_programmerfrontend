const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    header: {
        fontFamily:'Roboto'
    },
    content:{
        flexGrow:1,
        padding: theme.spacing(3),
        marginLeft:10,
        marginRight:10
    },
    appBar: {
        zIndex:theme.zIndex.drawer +1,
        background: '#01579b',
        color:"white"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    avatar: {
        background: '#01579b', 
    }
});

export default styles;

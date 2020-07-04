const style = theme => ({
    buttonContainer: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'flex-end',
    },
    backdrop: {
        zIndex:theme.zIndex.drawer + 1,
        color: '#e3f2fd'
    } 
});

export default style;

import React, {Component} from "react";
import {connect} from 'react-redux';
import MUIDataTable from "mui-datatables"; 
import {Button,CircularProgress} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ReloadIcon from '@material-ui/icons/Cached';
import Backdrop from '@material-ui/core/Backdrop';
import {withStyles} from '@material-ui/core/styles';
import Page from "../../components/Page";
import {findAll} from '../../action/propinsi';
import styles from "./style.js";

class JumlahPemakaiPage extends Component {

constructor(props){
  super(props);

  this.state ={
    data:[],
    params : {
      search:{name:''},
      sort: 'asc',
      size:10,
      page:0
    }
  }
}

componentDidMount() { this.reload(); }

reload(){ this.props.findAll(this.state.params); }

componentDidUpdate(prevProps,prevState){
  const { data, error } = this.props;
  const {params} = this.state;

  if(prevProps.data !== data){
    this.setState({data:data.list,total:data.total});
  } else if (prevState.params !== params){
    this.reload();
  } else if (error && prevProps.error !== error){
    this.setState({error:error});
    }
  }

onReload = () => {
  this.reload(); 
}

onRowClick = (rowData) => {
    this.props.history.push(`/PropinsiDetailPage/${rowData[0]}`); 
};

onChangePage = (currentPage) => {
  const {params} = this.state;
  this.setState({ params : {...params , page : currentPage }});
};

onChangeRowsPerPage = (numberOfRows) => {
  const {params} = this.state;
  this.setState({ params : {...params , size : numberOfRows}});
};

onSearchChange = (searchText) => {
  const {params} = this.state;
  this.setState({ params : {...params,search : {name : searchText}}});
};

onColumnSortChange = (changedColumn,direction) =>{
  const {params} = this.state;
  const sort = direction == 'descending' ? 'desc' : 'asc';
  this.setState({params: {...params,sort}});
};

render() {
  const {classes,loading} = this.props;
  const {data,total,params,error} = this.state; 
  
  const columns = [
    {
      name:"id_propinsi",
      label:"ID",
      options:{
      sortDirection : params.sort
    }
    },
    {
      name:'nama_propinsi',
      label:'NAME',
      options:{
      sort:false
    }
    }
  ];

  const options = {
    serverSide :true,
    selectableRows :'single',
    page : params.page,
    count : total,
    rowsPerPage : params.size,
    filter : false,
    searchText : params.search.name,
    onRowClick : this.onRowClick,
    onChangePage : this.onChangePage,
    onChangeRowsPerPage : this.onChangeRowsPerPage,
    onSearchChange : this.onSearchChange,
    onColumnSortChange : this.onColumnSortChange
   }

  return ( 
    <Page error={error} >
      <h1>List Kontrasepsi</h1> 
      <div className={classes.buttonContainer}>
        <Button variant="contained"
          style={{background: '#ffa726', color: 'white',margin:'10px'}}
          color="primary"
          onClick={this.onReload}
          startIcon={<ReloadIcon/>}>
          Reload
        </Button>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit"/>
        </Backdrop>
    </div> 
    <MUIDataTable
        data = {!loading ? data : [] }
        columns = {columns}
        options = {options} />  
  </Page>
  );
}
}

  const mapStateToProps = state => ({
    data  : state.findPropinsi.data ,
    loading : state.findPropinsi.loading,
    error : state.findPropinsi.error 
  });

  const mapDispatchProps = {
    findAll
  }

export default withStyles(styles, {withTheme: true})(
connect(mapStateToProps,mapDispatchProps)(JumlahPemakaiPage));



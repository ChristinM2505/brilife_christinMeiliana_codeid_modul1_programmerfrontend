import React, {Component} from "react";
import {connect} from 'react-redux';
import MUIDataTable from "mui-datatables"; 
import {Button,CircularProgress} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ReloadIcon from '@material-ui/icons/Cached';
import Backdrop from '@material-ui/core/Backdrop';
import {withStyles} from '@material-ui/core/styles';
import Page from "../../components/Page";
import {findAll} from '../../actions/kontrasepsi';
import styles from "./style.js";

class Kontrasepsi extends Component {

constructor(props){
  super(props);

  this.state ={
    data:[],
    total:0,
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
  const {data, error } = this.props;
  const {params} = this.state;

  if(prevProps.data !== data){
    this.setState({data:data.list,total:data.total});
  } else if (prevState.params !== params ){
    this.reload();
  } else if (error && prevProps.error !== error){
    this.setState({error:error});
    }
  }

onReload = () => {
  this.reload(); 
}

onAdd = () => { 
  this.props.history.push('/KontrasepsiDetailPage/list'); 
}

onRowClick = (rowData) => {
    this.props.history.push(`/KontrasepsiDetailPage/${rowData[0]}`); 
};

onRowsDelete = (rowsDeleted) => {
  const {list} = this.props.data;
  const e = list[rowsDeleted.data[0].index];
  this.props.deleteById(e.id);
  return false;
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
      name:"id_kontrasepsi",
      label:"ID",
      options:{
      sortDirection : params.sort
    }
    },
    {
      name:'nama_kontrasepsi',
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
        <Button variant="contained" style={{background: '#01579b', color: 'white',margin:'10px'}}
          onClick={this.onAdd}
          startIcon={<AddIcon/>}
          disabled={loading}>
          Add Item
        </Button>
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
    data  : state.findKontrasepsi.data ,
    loading : state.findKontrasepsi.loading,
    error : state.findKontrasepsi.error 
  });

  const mapDispatchProps = {
    findAll
  }

export default withStyles(styles, {withTheme: true})(
connect(mapStateToProps,mapDispatchProps)(Kontrasepsi));



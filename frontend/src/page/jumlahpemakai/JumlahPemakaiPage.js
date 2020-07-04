import React, {Component} from "react";
import {connect} from 'react-redux';
import MUIDataTable from "mui-datatables"; 
import {Button,CircularProgress} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ReloadIcon from '@material-ui/icons/Cached';
import Backdrop from '@material-ui/core/Backdrop';
import {withStyles} from '@material-ui/core/styles';
import Page from "../../components/Page";
import {save,findAll} from '../../actions/jumlahPemakai';
import styles from "./styles.js";

class JumlahPemakaiPage extends Component {

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
  const {deleteData , deleteError , data, error } = this.props;
  const {params} = this.state;

  if(prevProps.data !== data){
    this.setState({data:data.list,total:data.total});
  } else if (prevState.params !== params ||
    prevProps.deleteData !== deleteData){
    this.reload();
  } else if (deleteError && prevProps.deleteError !== deleteError){
    this.setState({error: deleteError});
  } else if (error && prevProps.error !== error){
    this.setState({error:error});
    }
  }

onReload = () => {
  this.reload(); 
}

onAdd = () => { 
  this.props.history.push('/ItemPage/add'); 
}

onRowClick = (rowData) => {
    this.props.history.push(`/ItemPage/${rowData[0]}`); 
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
      name:"id",
      label:"ID",
      options:{
      sortDirection : params.sort
    }
    },
    {
      name:'name',
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
    onRowsDelete : this.onRowsDelete,
    onRowClick : this.onRowClick,
    onChangePage : this.onChangePage,
    onChangeRowsPerPage : this.onChangeRowsPerPage,
    onSearchChange : this.onSearchChange,
    onColumnSortChange : this.onColumnSortChange
   }

  return ( 
    <Page error={error} >
      <h1>Items Data</h1> 
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
    deleteData  : state.deleteItemById.data,
    deleteError : state.deleteItemById.error,
    data  : state.findItems.data ,
    loading : state.findItems.loading || state.deleteItemById.loading,
    error : state.findItems.error 
  });

  const mapDispatchProps = {
    save,findAll
  }

export default withStyles(styles, {withTheme: true})(
connect(mapStateToProps,mapDispatchProps)(JumlahPemakaiPage));



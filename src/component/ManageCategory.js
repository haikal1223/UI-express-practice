import React,{ Component } from 'react';
import { connect } from 'react-redux'
import {
    getListCategory,
    addCategory,
    deleteCategory,
    editCancelCategory,
    updateCategory} from '../action'
import {Spinner} from 'reactstrap'


class ManageCategory extends Component{

    componentDidMount(){
    //     axios.get('http://localhost:1999/category')
    // .then((res)=>{
    //     this.props.getListCategory(res.data)  
    // })
    // .catch((err)=>{
    //     console.log(err);
        
    // }) *Tanpa redux-thunk
    this.props.getListCategory()

}
     onBtnAddCatClick = () =>{
        this.props.addCategory(this.refs.namaCatAdd.value)
     }
     onBtnDeleteCatClick = (id) => {
         if(window.confirm('Are you sure ?')){
             this.props.deleteCategory(id)
         }
        
     }
     onBtnEditCatClick = (id) => {
        this.props.editCancelCategory(id)
     }
     onBtnSaveCatClick = (id) =>{
         this.props.updateCategory({ 
             nama: this.refs.namaCatEdit.value,
             id
            })
     }
    
    renderListCategory = () =>{
        return this.props.listCategory.map((item) =>{
            if(this.props.categoryForm.selectedEditId !== item.id){
                return(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td><input className='btn btn-primary' type='button' value="EDIT" onClick={()=> this.onBtnEditCatClick(item.id)}/></td>
                    <td><input className='btn btn-danger' type='button' value="DELETE" onClick={()=> this.onBtnDeleteCatClick(item.id)}/></td>
                </tr>
                )
            }
            return (
                <tr key={item.id}>
                    <td>{item.id}</td> 
                    <td><input type='text' ref='namaCatEdit' defaultValue={item.nama}/></td>
                    <td><input className='btn btn-primary' type='button' value="CANCEL" onClick={()=> this.props.editCancelCategory(0)}/></td>
                    <td><input className='btn btn-danger' type='button' value="SAVE" onClick={()=> this.onBtnSaveCatClick(item.id)}/></td>
                </tr>
            )
        })
    }

    renderButtonAdd = () =>{
        if(this.props.categoryForm.loadingAdd) {
            return <Spinner color= 'warning'/>
        }
        return <input className='btn btn-success' type='button' value= 'ADD' onClick={this.onBtnAddCatClick}/>
    }

    render(){
        return(
            <center>
            <div>
                <h2>Table Category</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAMA</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListCategory()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><input type= 'text' ref="namaCatAdd"/></td>
                            <td>{this.renderButtonAdd()}</td>
                            <td>{this.props.categoryForm.statusAdd}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            </center> 
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        listCategory : state.categoryList,
        categoryForm : state.formCategory
    }
}

export default connect(mapStateToProps,{
    getListCategory,
    addCategory,
    deleteCategory,
    editCancelCategory,
    updateCategory
})(ManageCategory)
import React, {Component} from 'react'
import Axios from 'axios';
import ManageCategory from './component/ManageCategory'

class App extends Component{
componentDidMount(){
  Axios.get('http://localhost:1999/test')
  .then((res)=>{
    console.log('Masuk Then');
    
    console.log(res.data);
  })
  .catch((err)=>{
    console.log('Terjadi Error');
    console.log(err);
  })
}

onBtnAddClick = () =>{
  Axios.post('http://localhost:1999/addproduct',{
    id : 4,
    nama: 'Popok Biskuat',
    harga : 200000,
    description : 'siapkah bayi anda menjadi macan!'
  })
  .then((res)=>{
    console.log(res.data);
    
  })
}

  render(){
    return(
      <div>
        <h1>Selamat Datang Di Indomerat</h1>
        <input type='button' value='Add Product' onClick={this.onBtnAddClick}/>
        <ManageCategory/>
      </div>
    )
  }
}
export default App
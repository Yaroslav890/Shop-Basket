import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Items from './Components/Items';
import Category from './Components/Category';
import ShowFullItem from './Components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      order:[],
      currentItems:[],
      items:[
        {
          id: 1,
          title: 'Стул серый',
          img:'chair-grey.jpg',
          desc:'Lorem ipsum',
          category:'chairs', 
          price:'4990.00'
        },
        {
          id: 2,
          title: 'Стол',
          img:'table.jpeg',
          desc:'Lorem ipsum',
          category:'tables', 
          price:'14990.00'
        },
        {
          id: 3,
          title: 'Диван',
          img:'sofa.jpg',
          desc:'Lorem ipsum',
          category:'sofa', 
          price:'54990.00'
        },
        {
          id: 4,
          title: 'Лампа',
          img:'lamp.jpeg',
          desc:'Lorem ipsum',
          category:'lamp', 
          price:'2500.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img:'chair-white.jpg',
          desc:'Lorem ipsum',
          category:'chairs', 
          price:'4990.00'
        },
        {
          id: 6,
          title: 'Стул белый',
          img:'chair-white.jpg',
          desc:'Lorem ipsum',
          category:'chairs', 
          price:'4990.00'
        }
      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
 render(){
 return (
  <div className = 'wrapper'>
    <Header order = {this.state.order} onDelete ={this.deleteOrder}/>
    <Category chooseCategory={this.chooseCategory}/>
    <Items onShowItem ={this.onShowItem} items = {this.state.currentItems} onAdd = {this.addToOrder}/>
    {this.state.showFullItem && <ShowFullItem  onShowItem ={this.onShowItem} onAdd = {this.addToOrder} item = {this.state.fullItem}/>}
    <Footer />
  </div>
  )
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category){
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    
    currentItems: this.state.items.filter(el=> el.category === category)
  })
}

deleteOrder(id){
  this.setState({order:this.state.order.filter(el=>el.id !== id)})
}

addToOrder(item){
  let isInArr = false
  this.state.order.forEach(el=>{
    if(el.id===item.id)
    isInArr = true
  })
  if(!isInArr)
    this.setState({order: [...this.state.order, item]})
}
}

export default App;

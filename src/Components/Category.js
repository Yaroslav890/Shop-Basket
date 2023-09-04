import React, { Component } from 'react'

export class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'стулья'
                },
                {
                    key: 'tables',
                    name: 'столы'
                },
                {
                    key: 'sofa',
                    name: 'диваны'
                },
                {
                    key: 'lamp',
                    name: 'лампы'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key = {el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category
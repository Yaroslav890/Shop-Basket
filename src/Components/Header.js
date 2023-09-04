import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrder = (props) =>{
    let summa = 0;
    props.order.forEach(el => summa += Number.parseFloat(el.price));
    return(<div>
        {props.order.map(el => (
            <Order  key ={el.id} item={el} onDelete={props.onDelete}/>
        ))}
        <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>)
}

const showNothing = () =>{
    return ( <div className="empty">
        <h2>Товары еще не добавлены</h2>
    </div>
    )

}

export default function Header(props){
let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>   
                <span className = 'logo'>House Staff</span>
                <ul className ='nav'>
                    <li>O нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className = {`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen &&(
                    <div className = 'shop-cart'>
                       {props.order.length > 0 ? 
                       showOrder(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className ='presentation'></div>
        </header>
    )
}
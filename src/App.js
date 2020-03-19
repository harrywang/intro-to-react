import React from 'react';
import Game from './Game';
import Example from './Example';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import NameForm from './NameForm'
import Calculator from './Calculator'
import FilterableProductTable from './ProductSearch'


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

function App() {
    return (
        <div>
            <Game/>
            <Example/>
            <Clock/>
            <Clock/>
            <Toggle />
            <LoginControl />
            <NameForm />
            <Calculator />
            <FilterableProductTable products={PRODUCTS} />
        </div>

    );
}

export default App;

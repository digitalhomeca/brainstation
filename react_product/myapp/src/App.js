import React, { Component } from 'react';
import logo from './logo.svg';
// import PropTypes to ensure proper type of props are passed to the component
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      searchString: '',
      useInStock: false
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onInStockChange = this.onInStockChange.bind(this);
  }
  onSearchChange(searchString) {
    console.log('new search :' + searchString.target.value);
    this.setState({
      searchString: searchString.target.value
    })
  }
  onInStockChange(inStock) {
    console.log('new in stock :' + inStock.target.checked);
    this.setState({
      useInStock: inStock.target.checked
    })
  }
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <div className="App-intro">
          <Search onSearchChange={this.onSearchChange}
                  onInStockChange={this.onInStockChange} />
          <ProductList  products={this.props.inventory} 
                        searchString={this.state.searchString} 
                        inStock={this.state.useInStock} />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  inventory: PropTypes.array.isRequired
}

class ProductList extends Component {
  render () {
    let productsToRender = this.props.products;
    if (this.props.inStock === true) {
      productsToRender = productsToRender.filter((product) => { 
        return product.inStock;
      })
    }
    if (this.props.searchString) {
      productsToRender = productsToRender.filter((product) => {
        return product.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) !== -1;
      })
    }
    productsToRender = productsToRender.map((product, i) => {
      return <Product key={i} name={product.name} price={product.price} inStock={product.inStock} />
    })
    return (
      <div className="product-list">
        {productsToRender}
      </div>
    )
  }
}
ProductList.propTypes = {
  inStock: PropTypes.bool.isRequired,
  searchString: PropTypes.string,
  products: PropTypes.array.isRequired
}
// simple component or function does not need class or extends or render sections 
function Header (props) {
  return (<div className="App-header">
          <img src={props.logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>);
}

class Product extends Component {
  render () {
    const styleObject = {color: this.props.inStock ? 'black' : 'red'}
    return (<div style={styleObject}>
      <span>{this.props.name}</span>{' '}
      <span>{this.props.price}</span>
    </div>)
  }
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired
}

class Search extends Component {
  render () {
    return (<div>
      Search <input type="input" 
                    onChange={this.props.onSearchChange}/>
      <br />
      In Stock? <input  type="checkbox"
                        onChange={this.props.onInStockChange} />
    </div>)
  }
}
Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onInStockChange: PropTypes.func.isRequired
}

export default App;
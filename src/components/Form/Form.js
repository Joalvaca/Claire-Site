import React from "react";
import "./Form.css";
import Products from "../Products/Products";
import Claire from "../../images/Claire-logo.png";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      filterResult: [],
      name: "Platinum",
      allProducts: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.filterByGpm = this.filterByGpm.bind(this);
    this.filterByName = this.filterByName.bind(this);
    // this.filterByFilter = this.filterByFilter.bind(this);
    // this.filterBySource = this.filterBySource.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/products")
      .then(response => response.json())
      .then(products => {
        console.log(products);
        this.setState({ allProducts: products });
      });
  }

  handleSubmit(event) {
    alert("Your product is  " + this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    if (name == "name") {
      this.filterByName(value);
    }
    //   if (name == "preFilter") {
    //     this.filterByFilter(value);
    //   }

    //   if (name == "source") {
    //     this.filterBySource(value);
    //   }
    // }
  }
  filterByName(name) {
    this.setState(state => {
      return {
        ...state,
        filterResult: state.allProducts.filter(product => {
          return product.product_name === name;
        })
      };
    });
  }
  // filterByFilter(value) {
  //   if (value == "No") {
  //     alert("you need pre filter");
  //   } else {
  //     this.setState(state => {
  //       return {
  //         ...state,
  //         filterResult: state.filterResult.filter(product => {
  //           return product.product_filter == value;
  //         })
  //       };
  //     });
  //   }
  // }

  // filterBySource(value) {
  //   if (value == "No") {
  //     alert("you need to be on well water");
  //   } else {
  //     this.setState(state => {
  //       return {
  //         ...state,
  //         filterResult: state.filterResult.filter(product => {
  //           return product.product_filter == value;
  //         })
  //       };
  //     });
  //   }
  // }

  render() {
    return (
      <div className="form">
        <div className="form-intro">
          <img className="form-logo" src={Claire} alt="platinum" />
          <p className="form-text">
            Please choose the specfic product so that we may give you further
            information, so see which product suites your best needs
          </p>
        </div>
        <div></div>
        <div className="form-section">
          <section className="user-form">
            <form onSubmit={this.handleSubmit}>
              <h1 className="form-header">Hello</h1>
              <p className="user-text">
                What is your household flow in gpms (gallons per minute)
              </p>
              <label>
                <select
                  className="drop-down"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                >
                  <option value="Platinum">Platinum</option>
                  <option value="Silver">Silver</option>
                  <option value="Clairify 1">Clairify 1</option>
                </select>
              </label>
            </form>
          </section>
          <section className="user-form">
            <div>
              <h1>Results</h1>
              <p>{this.state.filterResult.length}</p>
              <div className="unit-result">
                <div className="unit-section"></div>
                {this.state.filterResult.map(item => {
                  return (
                    <div className="product-text">
                      <h1>{item.product_name}</h1>
                      <p>{item.image}</p>
                      <p>{item.product_description}</p>
                      <p>{item.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Form;

import React from "react";
import "./Form.css";
import Claire from "../../images/Claire-logo.png";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      filterResult: [],
      name: "Select",
      allProducts: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterByName = this.filterByName.bind(this);
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
    event.preventDefault();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    if (name === "name") {
      this.filterByName(value);
    }
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

  render() {
    return (
      <div className="form" id="specifications">
        <div className="form-intro">
          <img className="form-logo" src={Claire} alt="platinum" />
          <p className="form-text">
            Please choose the specfic product so that we may give you further
            information, to see which product suites your best needs
          </p>
        </div>
        <div></div>
        <div className="form-section">
          <section className="user-form">
            <form onSubmit={this.handleSubmit}>
              <h1 className="form-header">Claire Technologies</h1>
              <p className="user-text">
                Select a unit from the drop down box to see unique
                specifications for each unit
              </p>
              <label>
                <select
                  className="drop-down"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                >
                  <option value="Select">Select unit</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Silver">Silver</option>
                  <option value="Clairify 1">Clairify 1</option>
                </select>
              </label>
            </form>
            <div className="user-bar"></div>
          </section>
          <section className="user-form">
            <div>
              <div className="unit-result">
                {this.state.filterResult.map(item => {
                  return (
                    <div>
                      <h1 className="product-name">{item.product_name}</h1>

                      <p className="product-text">
                        Water Flow: {item.max_water_flow}
                      </p>
                      <p className="product-text">
                        QD Quantity: {item.quantity_of_qd}
                      </p>
                      <p className="product-text">
                        Prefiltration: {item.prefiltration}
                      </p>
                      <p className="product-text">
                        Unit Dimensions: {item.unit_dimensions}
                      </p>
                      <p className="product-text">
                        Expected Life: {item.expected_life}
                      </p>
                      <p className="product-text">
                        Operating Temperature: {item.operating_temperature} ℉
                      </p>
                      <p className="product-text">
                        Inlet/Outlet: {item.inlet_outlet}
                      </p>
                      <div className="results-bar"></div>
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

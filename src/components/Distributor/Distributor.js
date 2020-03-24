import React from "react";
import "./Distributor.css";
import Claire from "../../images/Claire-logo.png";
import config from "../../config";
console.log(config);

class Distributor extends React.Component {
  constructor() {
    super();
    this.state = {
      distributorResult: [],
      name: "Select",
      allDistributors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}api/distributors`)
      .then(response => response.json())
      .then(distributors => {
        this.setState({ allDistributors: distributors });
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
        distributorResult: state.allDistributors.filter(distributors => {
          return distributors.region_name === name;
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
            Once you have choosen a product that best fits your needs, please
            select the region you are nearest to, so that you may contact one of
            our distributors to purchase a product.
          </p>
        </div>
        <div></div>
        <div className="form-section">
          <section className="user-form">
            <form onSubmit={this.handleSubmit}>
              <h1 className="form-header">Claire Technologies</h1>
              <p className="user-text">
                Select a region from the drop down box to see our distributors
                in the given region
              </p>
              <label>
                <select
                  className="drop-down"
                  onChange={this.handleChange}
                  value={this.state.name}
                  name="name"
                  aria-label="select region"
                >
                  <option value="Select">Select region</option>
                  <option value="North America">North America</option>
                  <option value="Central America">Central America</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                </select>
              </label>
            </form>
            <div className="user-bar"></div>
          </section>
          <section className="user-form">
            <div>
              <div className="unit-result">
                {this.state.name === "Select" ? (
                  <img className="form-results" src={Claire} alt="platinum" />
                ) : (
                  this.state.distributorResult.map(distributor => {
                    return (
                      <li key={distributor.id}>
                        <div>
                          <h1 className="product-name">
                            {distributor.region_name}
                          </h1>

                          <p className="product-text">
                            company name: {distributor.company_name}
                          </p>
                          <p className="product-text">
                            phone number: {distributor.phone_number}
                          </p>
                          <p className="product-text">
                            email address: {distributor.email_address}
                          </p>
                          <p className="product-text">
                            physical address: {distributor.physical_address}
                          </p>
                          <div className="results-bar"></div>
                        </div>
                      </li>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Distributor;

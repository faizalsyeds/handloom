import React from 'react';

class Customer extends React.Component {

  constructor () {
    super ();
    this.state = {
      customers : []
    }
  }

  componentDidMount () {
    fetch('api/customers/')
      .then(res => res.json())
      .then(customers => {
        this.setState({customers : customers});
        console.log(`customers ${JSON.stringify(this.state)}`);

      });
  }

  render() {
    return (
          <div>
            <h1>User track</h1>
            <ul>{this.state.customers.map(item =>
              <li key={item.id}>{item.name}</li>
            )}</ul>
          </div >
        )
      }
    }
export default Customer;

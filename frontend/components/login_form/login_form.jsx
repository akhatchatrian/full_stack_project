import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="">
        <form className="" onSubmit={this.handleSubmit}>
          <p>Sign In</p>
          {this.renderErrors()}
          <div className="">
            <label>Email</label>
            <input type="text" 
              value={this.state.email} 
              onChange={this.update('email')}
            />
          </div>
          <div className="">
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
            <br/>
            <input className="" type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}
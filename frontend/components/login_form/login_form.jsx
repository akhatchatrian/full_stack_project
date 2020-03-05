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
      <div className="login-page">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <p>Sign In</p>
          {this.renderErrors()}
          <div className="user-form-field">
            <label>Email</label>
            <input type="text" 
              value={this.state.email} 
              onChange={this.update('email')}
            />
          </div>
          <div className="user-form-field">
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </div>
            <br/>
            <input className="login-button" type="submit" value="Sign In"/>
        </form>
      </div>
    );
  }
}
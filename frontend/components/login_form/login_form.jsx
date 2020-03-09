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
    this.props.processForm(user)
  }

  renderErrors() {
    if (this.props.errors) {      
      return (
        <ul>
          {Object.values(this.props.errors).map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="jumbo jumbo-2">
        <div className="container">
          <div className="row justify-center">

            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="login-title text-left">
                <p>Sign In</p>
              </div>
              {this.renderErrors()}
              <div className="login-inputs text-left">
                <label className="login-label">Email</label>
                <input className="login-field" type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </div>
              <div className="login-inputs text-left">
                <label className="login-label">Password</label>
                <input className="login-field" type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </div>
              <div className="login-button-container text-left">
                <input className="button-primary login-button" type="submit" value="Sign In" />
              </div>
            </form>

          </div>
        </div>

      </div>
    );
  }
}
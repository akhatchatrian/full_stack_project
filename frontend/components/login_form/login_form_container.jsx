import { connect } from 'react-redux';
import React from 'react';
import { LoginForm } from './login_form';
import { login } from '../../actions/session_actions';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

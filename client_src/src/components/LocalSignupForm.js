import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = theme => ({
  flash_on: {
    display: 'block',
  },
  flash_off: {
    display: 'none',
  },
  fieldOutline: {
    fontWeight: 300,
    borderRadius: 2,
    border: '1px solid red',
    boxSizing: 'border-box',
  },
});

const messages = {
  "LocalLoginForm": {
    "email_placeholder": [
      "이메일 주소",
      "Email Address",
      "JP-Email Address",
      "ZH-Email Address",
      "FR-Email Address",
      "ES-Email Address"
    ],
    "email_label": [
      "이메일",
      "Email",
      "JP-Email",
      "ZH-Email",
      "FR-Email",
      "ES-Email"
    ],
    "password_label": [
      "패스워드",
      "Password",
      "JP-Password",
      "ZH-Password",
      "FR-Password",
      "ES-Password"
    ],
    "password_placeholder": [
      "패스워드",
      "Password",
      "JP-Password",
      "ZH-Password",
      "FR-Password",
      "ES-Password"
    ],
    "submit_label": [
      "로그인",
      "Log in",
      "JP-Log in",
      "ZH-Log in",
      "FR-Log in",
      "ES-Log in"
    ]
  }
};

export class LocalSignUpForm extends Component {
  static propTypes = {

  }

  render() {
    const { handleSubmit, pristine, reset, submitting, translate, auth, classes } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div className={classes.fieldOutline}>
          <Field name="email"
            fullWidth
            component={NinesqEmailField}
            label={translate('LocalLoginForm.email_placeholder')}
            placeholder={translate('LocalLoginForm.email_placeholder')}
          />
        </div>
        <div className={classes.fieldOutline}>
          <Field name="mypassword"
            fullWidth
            component={NinesqPasswordField}
            placeholder={translate('LocalLoginForm.password_placeholder')}
            label={translate('LocalLoginForm.password_placeholder')}
          />
        </div>
        <div className={auth.error ? classes.flash_on: classes.flash_off}>{`error: ${auth.error}`}</div>

        <div><button type="submit">{translate('LocalLoginForm.submit_label')}</button></div>
      </form>
    )
  }
}

export default LocalSignUpForm

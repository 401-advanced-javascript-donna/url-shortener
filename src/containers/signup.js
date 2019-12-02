import { connect } from 'react-redux';

const mapStateToProps = () => ({
  buttonText: 'SignUp'
});

const mapDispathToProps = () => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
  }
})

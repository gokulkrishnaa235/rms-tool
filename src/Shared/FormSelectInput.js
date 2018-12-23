
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'520px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width:'520px'
  },
});

const transactionType = [
  {
    value: 'Credit',
    label: 'Credit',
  },
  {
    value: 'Debit',
    label: 'Debit',
  }
];

class FormSelectInput extends React.Component {
  state = {
    multiline: 'Controlled',
    transactionType: 'Credit'
  };

  handleChange = name => event => {
    this.props.changeCreditDebitState(event.target.value)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-select-currency"
          select
          fullWidth
          label={this.props.displayName}
          className={classes.textField}
          value={this.props.transactionType}
          onChange={this.handleChange()}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {transactionType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    );
  }
}

const mapStateToProps = state => {
    return {
        transactionType: state.creditDebitCalculator.transactionType,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeCreditDebitState: (value) => dispatch(actions.changeCreditDebitState(value))
    };
};

FormSelectInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FormSelectInput));
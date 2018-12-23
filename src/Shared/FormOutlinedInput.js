
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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
  }
});


function  FormOutlinedInput (props) {
    return (
      <form className={styles.container} noValidate autoComplete="off">
        <TextField
          id="standard-required"
          fullWidth
          label={props.displayName}
          value={props.value}
          onChange = {props.changeInput}
          className={styles.textField}
          margin="normal"
        />    
      </form>
    );
  }



FormOutlinedInput.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(FormOutlinedInput);
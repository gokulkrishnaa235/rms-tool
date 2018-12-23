import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormOutlinedInput from '../Shared/FormOutlinedInput';
import DateInput from '../Shared/DateInput';
import FormSelectInput from '../Shared/FormSelectInput';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';


const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class RmsDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  saveTransaction = () => {
      this.props.addNewTransaction()
      this.handleClose();
  }


  changeInput = value =>event => {
    if(value === 'description') {
        this.props.updateDescription(event.target.value)
    } else if (value === 'touch') {
        this.props.updateTouchValue(event.target.value)
    } else if (value === 'credit') {
        this.props.updateCreditValue(event.target.value)
    } else if (value === 'debit'){
        this.props.updateDebitValue(event.target.value)
    }else {
       this.props.updateExtraWeightage(event.target.value)
    }

  }

  dateChangeHandler = value => event => {
      this.props.updateDate(event.target.value)
  }

   addExtraWeightage = ()=> {
      if(this.props.transactionType === "Debit") {
          return (
            <>
            <FormOutlinedInput changeInput={this.changeInput('debit')} nameValue = "debit"  value={this.props.debit} displayName="Debit"/>
            <FormOutlinedInput changeInput={this.changeInput('extraWeightage')} value={this.props.extraWeightage} nameValue = "extraWeightage" displayName="Extra Weightage"/>
            </>
          )
      }else {
          return(
            <FormOutlinedInput changeInput={this.changeInput('credit')} nameValue = "credit"  value={this.props.credit} displayName="Credit"/>
          )
      }

  }


  render() {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Open dialog
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Add Credit / Debit 
          </DialogTitle>
          <DialogContent>
          <div className="formField">
            <div className="CreditDebitCounter">
                <DateInput dateChange={this.dateChangeHandler()} value={this.props.date} displayName="Date"/>
                { this.props.transactionType === "Credit" ? 
                <div>
                <Typography color="textPrimary" variant="headline">Credit</Typography>
                <Typography color="textPrimary" variant="headline">{this.props.actualCredit}</Typography>
                </div>
                : <div> <Typography color="textPrimary" variant="headline">Debit</Typography>
                <Typography color="textPrimary" variant="headline">{this.props.actualDebit}</Typography> </div>
                }
            </div>
          

            <FormSelectInput    nameValue = "transactionType" displayName="Credit/Debit"/>
            <FormOutlinedInput changeInput={this.changeInput('description')} value={this.props.description} displayName="Description" />
            <FormOutlinedInput changeInput={this.changeInput('touch')} nameValue="touch"  value={this.props.touchValue} displayName="Touch(%)"/>
            {this.addExtraWeightage()}
         

         </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.saveTransaction} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        transactionType: state.creditDebitCalculator.transactionType,
        actualCredit: state.creditDebitCalculator.actualCredit,
        actualDebit: state.creditDebitCalculator.actualDebit,
        description: state.creditDebitCalculator.description,
        touchValue: state.creditDebitCalculator.touchValue,
        credit: state.creditDebitCalculator.credit,
        debit: state.creditDebitCalculator.debit,
        extraWeightage : state.creditDebitCalculator.extraWeightage,
        date: state.creditDebitCalculator.date
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateDescription: (value) => dispatch(actions.updateDescription(value)),
        updateTouchValue: (value) => dispatch(actions.updateTouchValue(value)),
        updateCreditValue: (value) => dispatch(actions.updateCreditValue(value)),
        updateExtraWeightage: (value) => dispatch(actions.updateExtraWeightage(value)),
        updateDate: (value) => dispatch(actions.updateDate(value)),
        updateDebitValue: (value) => dispatch(actions.updateDebitValue(value)),
        addNewTransaction: () => dispatch(actions.addNewTransaction())

    };
};

export default  connect(mapStateToProps, mapDispatchToProps) (RmsDialog);

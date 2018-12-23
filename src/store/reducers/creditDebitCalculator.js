import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    data:[],
    transactionType: "Credit",
    touchValue :'',
    credit:"",
    debit:"",
    actualCredit:0,
    actualDebit:0,
    extraWeightage:"",
    description:"",
    date: ""
};

const changeCreditDebitState = (state, action) => {
    return updateObject( state, {
        transactionType: action.transactionType,
    } );
}

const setTouch = (state, action) => {
    return updateObject( state, {
        touchValue: action.touchValue
    } );
}

const setCreditValue = (state,action) => {
    return updateObject( state, {
        credit: action.creditValue
    } );
}

const setDebitValue = (state,action) => {
    return updateObject( state, {
        debit: action.debitValue
    } );
}

const updateDate = (state, action) => {
    return updateObject( state, {
        date: action.date
    } );
}

const updateDescription = (state, action) => {
    return updateObject( state, {
        description: action.description
    } );
}

const updateExtraWeightage = (state, action) => {
    return updateObject( state, {
        extraWeightage: action.extraWeightage
    } );
}

const resetAll = (state) => {
    return updateObject( state, {
        touchValue :'',
        credit:"",
        debit:"",
        actualCredit:"",
        actualDebit:"",
        extraWeightage:"",
    }
  );
}

const doCreditCalculation = (state) => {
    const updatedActualCredit = parseFloat(state.touchValue) * parseFloat(state.credit) / 100
    return updateObject( state, {
        actualCredit: updatedActualCredit,
    } );

}

const doDebitCalculation = (state) => {
    const updatedActualDebit = (parseFloat(state.debit)- parseFloat(state.extraWeightage))*parseFloat(state.touchValue)/100
    return updateObject( state, {
        actualDebit: updatedActualDebit,
    } );

}

const addNewTransaction = (state) => {
    const updatedData = [...state.data]
    const newItem = {};
    newItem.Date = state.date;
    newItem.Description = state.description;
    newItem.Credit = isNaN(state.actualCredit) ? 0: state.actualCredit;
    newItem.Debit = isNaN(state.actualDebit)  ? 0: state.actualDebit;
    updatedData.push(newItem)
    return updateObject( state, {
        data: updatedData,
    } );
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CHANGE_CREDIT_DEBIT_STATE: return changeCreditDebitState( state, action );
        case actionTypes.UPDATE_TOUCH_VALUE: return setTouch (state, action);
        case actionTypes.UPDATE_CREDIT_VALUE: return setCreditValue (state, action);
        case actionTypes.UPDATE_DESCRIPTION: return updateDescription(state, action);
        case actionTypes.UPDATE_EXTRA_WEIGHTAGE: return updateExtraWeightage (state, action);
        case actionTypes.UPDATE_DATE: return updateDate (state, action);
        case actionTypes.RESET_ALL: return resetAll (state);
        case actionTypes.DO_CREDIT_CALCULATION: return doCreditCalculation(state);
        case actionTypes.DO_DEBIT_CALCULATION: return doDebitCalculation(state);
        case actionTypes.UPDATE_DEBIT_VALUE: return setDebitValue(state, action);
        case actionTypes.ADD_NEW_TRANSACTION: return addNewTransaction(state, action)
        default: return state;
    }
};

export default reducer;
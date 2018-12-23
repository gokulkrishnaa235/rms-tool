import * as actionTypes from './actionTypes';

export const CreditDebitState = ( value ) => {
    return {
        type: actionTypes.CHANGE_CREDIT_DEBIT_STATE,
        transactionType: value
    };
};

export const touchValue = (value) => {
    return {
        type: actionTypes.UPDATE_TOUCH_VALUE,
        touchValue: value
    };

};

export const changeCreditDebitState = (value) => {
    return dispatch => {
        dispatch (CreditDebitState(value));
        dispatch (resetAll());
    }

}

export const updateTouchValue = (value) => {
    return dispatch =>{
        dispatch(touchValue(value));
        dispatch(doCreditCalculation());
        dispatch(doDebitCalculation());

    }
}

export const doCreditCalculation = () => {
    return {
        type: actionTypes.DO_CREDIT_CALCULATION,    
    }
}


export const doDebitCalculation = () => {
    return {
        type: actionTypes.DO_DEBIT_CALCULATION,    
    }

}

export const updateCreditValue = (value) => {
    return dispatch =>{
        dispatch(creditValue(value));
        dispatch(doCreditCalculation());

    }
}

export const debitValue = (value)=>{
    return {
        type: actionTypes.UPDATE_DEBIT_VALUE,
        debitValue: value
    };
}

export const updateDebitValue = (value) => {
    return dispatch =>{
        dispatch(debitValue(value));
        dispatch(doDebitCalculation());

    }
}

export const updateExtraWeightage = (value) => {
    return dispatch =>{
        dispatch(ExtraWeightage(value));
        dispatch(doDebitCalculation());

    }
}

export const addNewTransaction = () => {
    return {
        type: actionTypes.ADD_NEW_TRANSACTION
    };

}





export const creditValue = (value) => {
    return {
        type: actionTypes.UPDATE_CREDIT_VALUE,
        creditValue: value
    };

};

export const updateDescription = (value) => {
    return {
        type: actionTypes.UPDATE_DESCRIPTION,
        description: value
    };

};

export const ExtraWeightage = (value) => {
    return {
        type: actionTypes.UPDATE_EXTRA_WEIGHTAGE,
        extraWeightage: value
    };
};

export const updateDate = (value) => {
    return {
        type: actionTypes.UPDATE_DATE,
        date: value
    };
};


export const resetAll = () => {
    return {
        type: actionTypes.RESET_ALL,
    }
}


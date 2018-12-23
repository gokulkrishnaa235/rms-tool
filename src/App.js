import React, { Component } from 'react';
import './App.css';
import RmsTable from './component/RmsTable';
import { connect } from 'react-redux';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tableData:[],
      totalCredit : 0,
      totalDebit: 0,
      balance:0
    }
  }

  componentWillReceiveProps(nextProps){
  let totalCredit = 0;
  let totalDebit = 0;
  let balanceValue =0;
   nextProps.data.forEach((value)=>{
    totalCredit = totalCredit + value.Credit
    totalDebit = totalDebit + value.Debit
   })
   balanceValue = totalCredit - totalDebit

   this.setState({
    tableData: nextProps.data,
    totalCredit:totalCredit,
    totalDebit: totalDebit,
    balance: balanceValue
   })
  }
  render() {
    return (
      <div className="App">
      <RmsTable  balance={this.state.balance} data={this.state.tableData}/>
      <h1>Total Credit:{this.state.totalCredit}</h1>
      <h1>Total Debit:{this.state.totalDebit }</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data : state.creditDebitCalculator.data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

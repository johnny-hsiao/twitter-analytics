import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';

export default class AccountList extends Component {

  render() {
    return (
      <div className="list-group">
      {this.props.accounts.map((account) =>
        this.props.category === account.category ?
            <button type="button" className="list-group-item" key={account.handle}>{account.handle}</button>
          : null
      )}
      </div>
    );
  }
};

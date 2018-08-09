import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Income } from 'components/preview';
import * as baseActions from '../reducers/base';
import moment from 'moment';

class IncomeContainer extends Component {
  handleDateChange = (date) => {
    const { BaseActions } = this.props
    BaseActions.change({
      'action': 'date',
      'value': date
    })
  }

  handleDesChange = (e) => {
    const value = e.target.value
    const { BaseActions } = this.props
    BaseActions.change({
      'action': 'description',
      'value': value
    })
  }

  handleSum = (e) => {
    const value = e.target.value
    const { BaseActions } = this.props
    BaseActions.change({
      'action': 'sum',
      'value': value
    })
  }

  handleCategory = (e) => {
    const value = e.target.value
    const { BaseActions } = this.props
    BaseActions.change({
      'action': 'category',
      'value': value
    })
  }

  handleType = (e) => {
    const value = e.target.value
    const { BaseActions } = this.props
    BaseActions.change({
      'action': 'type',
      'value': value
    })
  }

  handleAction = () => {
    const { BaseActions } = this.props
    BaseActions.create()
  }

  handleRemove = (id) => {
    const { BaseActions } = this.props
    BaseActions.remove(id)
  }

  handleMonth = (m) => {
    const { BaseActions } = this.props
    BaseActions.month(m)
  }

  render() {
    const {
      month,
      list,
      create,
      category,
      type,
    } = this.props;

    const {
      handleDateChange,
      handleCategory,
      handleDesChange,
      handleSum,
      handleType,
      handleAction,
      handleRemove,
      handleMonth
    } = this

    return (
      <div>
        <Income
          dateChange={handleDateChange}
          desChange={handleDesChange}
          sumChange={handleSum}
          typeChange={handleType}
          onAction={handleAction}
          removeAction={handleRemove}
          monthChange={handleMonth}
          categoryChange={handleCategory}
          create={create}
          list={list}
          type={type}
          month={month}
          category={category}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    month: state.base.get('month'),
    create: state.base.get('create'),
    // list: state.base.get('list').filter(list => list.date < moment().add(1, 'M').date(1).unix() && list.date >= moment().date(1).unix()),
    list: state.base.get('list'),
    type: state.base.get('type'),
    category: state.base.get('category'),
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(IncomeContainer)
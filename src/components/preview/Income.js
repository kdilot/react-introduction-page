import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit'
import { cross } from 'react-icons-kit/entypo/cross'
import { chevronLeft, chevronRight } from 'react-icons-kit/fa'

const Header = styled.div`
  padding: 1em;
  display: flex;
  
  input[type='text'] {
    width: 7em;
    margin-right: 1em;
  }

  select {
    margin-right: 1em;
  }

  .dp {
    width: 5em;
  }

`

const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  padding-top: 0;
  width: 100%;
  
  table {
    display: table;
    width: 100%;
    table-layout: fixed;  
    border-collapse: collapse;
  }
  
  table td {
    padding: 0.5em;
    border : 1px solid black;
  }

  .list tr{
    text-align: center;
  }

  .list>thead>tr {
    background-color: #E8D1A2;
    font-weight: bold;
  }

  table>tbody> tr:hover {
    background-color: #E7E7E5;
  }

  .summery {
    text-align: center;
  }
  
  .summery tr {
    background-color: white;
    font-weight:bold;
  }
  
  .summery .plus {
    color: blue;
  }
  
  .summery .minus {
    color: red;
  }
  
  .in {
    background-color: #A2E4E8;
  }

  .ex {
    background-color: #FFB2B6;
  }
`

const Month = styled.div`
  text-align: center;
  margin: 1em 0;

  h2 {
    display: inline;
    margin: 0 0.5em;
  }
`

class Income extends Component {
  handleKeyUp = (e) => {
    const { onAction } = this.props;
    //  click Enter button event
    if (e.keyCode === 13) {
      onAction();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    document.body.addEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const {
      dateChange,
      desChange,
      sumChange,
      categoryChange,
      typeChange,
      onAction,
      monthChange,
      removeAction,
      list,
      type,
      category,
      create,
      month,
    } = this.props;

    const { description, sum, date } = create.toJS();
    const _list = list.toJS();
    const income = _list.filter(_list => _list.type === 'income').map(_list => _list.sum).reduce((a, b) => (a + b), 0).toFixed(2);
    const expense = _list.filter(_list => _list.type === 'expense').map(_list => _list.sum).reduce((a, b) => (a + b), 0).toFixed(2);
    const difference = (income - expense).toFixed(2);
    const total = difference > 0 ? 'plus' : 'minus';

    return (
      <div>
        <Header>
          <DatePicker className="dp"
            placeholderText="Click to select a date"
            withPortal
            selected={date}
            onChange={dateChange}
          />
          <select name="type" onChange={typeChange}>
            {type.map(
              (_type, index) => (<option name={_type} key={index}>{_type}</option>)
            )}
          </select>
          <select name="category" onChange={categoryChange}>
            {category.map(
              (_category, index) => (<option name={_category} key={index}>{_category}</option>)
            )}
          </select>
          Description <input type="text" name="des" value={description} onChange={desChange} />
          Sum <NumberFormat name="sum" value={sum} onChange={sumChange} decimalScale={2} />
          <input type="button" value="btn" onClick={onAction} />
        </Header>
        <Wrapper>
          <div>
            <Month>
              <Icon icon={chevronLeft} size="30" onClick={() => monthChange(-1)} />
              <h2>{moment(month * 1000).format('YYYY/MM')}</h2>
              <Icon icon={chevronRight} size="30" onClick={() => monthChange(1)} />
            </Month>
            <table className="list">
              <thead>
                <tr>
                  <td style={{ width: '5%' }}></td>
                  <td>Date</td>
                  <td>Type</td>
                  <td>Category</td>
                  <td style={{ width: '40%' }}>Description</td>
                  <td>Sum of Money</td>
                </tr>
              </thead>
              <tbody>
                {_list.sort((a, b) => a.date - b.date).map(
                  _list => (
                    <tr key={_list.id} className={_list.type === 'income' ? 'in' : 'ex'}>
                      <td><Icon icon={cross} size="20" style={{ color: '#A62E2E' }} onClick={() => removeAction(_list.id)} /></td>
                      <td>{moment(_list.date * 1000).format('MM/DD/YYYY')}</td>
                      <td>{_list.type}</td>
                      <td>{_list.category}</td>
                      <td>{_list.description}</td>
                      <td>$ {_list.sum.toFixed(2)}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </Wrapper>
        <Wrapper>
          <table className="summery">
            <thead>
              <tr>
                <td className="in" style={{ width: '30%' }}>Income Total</td>
                <td className="in">$ {income}</td>
              </tr>
              <tr>
                <td className="ex">Expense Total</td>
                <td className="ex">$ {expense}</td>
              </tr>
              <tr>
                <td>Money Difference</td>
                <td className={total}>$ {difference}</td>
              </tr>
            </thead>
          </table>
        </Wrapper>

      </div>
    );
  }
}

Income.propTypes = {
  dateChange: PropTypes.func,
  onChange: PropTypes.func,
  sumChange: PropTypes.func,
  categoryChange: PropTypes.func,
  typeChange: PropTypes.func,
  onAction: PropTypes.func,
  monthChange: PropTypes.func,
  month: PropTypes.number,
  list: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.number,
    type: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    sum: PropTypes.number
  }),
  create: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.number,
    type: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    sum: PropTypes.number
  }),
  type: PropTypes.object,
  category: PropTypes.object,
}

export default Income;
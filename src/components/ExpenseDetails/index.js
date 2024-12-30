import React from "react";
import { renderForm } from "../../helpers/utility";
import SubHeader from "../shared/SubHeader";
import './styles.css'
import { Button } from "../shared/Buttons";
import CurrencyCodeIcon from '../../assets/icons/CurrencyCode.svg'
import { useState } from "react";

const Toggle = () => {

  const [selected, setSelected] = useState('$')

  return (
    <div className="expenses-conteiner-header">
      <span className="expenses-currency">
        <span>$ 00</span>
        <span>/</span>
        <span>{selected} 00</span>
      </span>
      <div className="options" onClick={() => setSelected(prev => prev === '$' ? '%' : '$')}>
        <span className={selected === '$' && 'selected'} >$</span>
        <span className={selected === '%' && 'selected'} >%</span>
      </div>
    </div>
  )
};

const ExpenseDetailsContainer = ({ initialState, formikProps }) => {

  const countryOptions = [
    { value: "", label: "Select a country" },
    { value: "us", label: "United States" },
    { value: "in", label: "India" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
  ];

  const departments = [
    { id: 1, label: "Finance", value: "FINANCE" },
    { id: 2, label: "Sales", value: "SALES" },
    { id: 3, label: "Procurement", value: "PROCUREMENT" },
    { id: 4, label: "Logistics", value: "LOGISTICS" },
    { id: 5, label: "Human Resources", value: "HUMAN_RESOURCES" },
    { id: 6, label: "Customer Support", value: "CUSTOMER_SUPPORT" },
    { id: 7, label: "IT Services", value: "IT_SERVICES" },
    { id: 8, label: "Marketing", value: "MARKETING" },
    { id: 9, label: "Legal", value: "LEGAL" },
    { id: 10, label: "Operations", value: "OPERATIONS" }
  ];

  const accounts = [
    { id: 1, label: "Accounts Payable", value: "ACCOUNTS_PAYABLE" },
    { id: 2, label: "Accounts Receivable", value: "ACCOUNTS_RECEIVABLE" },
    { id: 3, label: "General Ledger", value: "GENERAL_LEDGER" },
    { id: 4, label: "Payroll", value: "PAYROLL" },
    { id: 5, label: "Fixed Assets", value: "FIXED_ASSETS" },
    { id: 6, label: "Inventory", value: "INVENTORY" },
    { id: 7, label: "Cost of Goods Sold", value: "COGS" },
    { id: 8, label: "Revenue", value: "REVENUE" },
    { id: 9, label: "Taxes", value: "TAXES" },
    { id: 10, label: "Equity", value: "EQUITY" }
  ];

  const locations = [
    { id: 1, label: "New York Office", value: "NEW_YORK" },
    { id: 2, label: "San Francisco Office", value: "SAN_FRANCISCO" },
    { id: 3, label: "Los Angeles Office", value: "LOS_ANGELES" },
    { id: 4, label: "London Office", value: "LONDON" },
    { id: 5, label: "Tokyo Office", value: "TOKYO" },
    { id: 6, label: "Sydney Office", value: "SYDNEY" },
    { id: 7, label: "Berlin Office", value: "BERLIN" },
    { id: 8, label: "Mumbai Office", value: "MUMBAI" },
    { id: 9, label: "Singapore Office", value: "SINGAPORE" },
    { id: 10, label: "Dubai Office", value: "DUBAI" }
  ];




  return (
    <>
      <div className="expense-details-header">
        <SubHeader heading={'Expense Details'} />
        <div>
          <Toggle />
        </div>
      </div>
      <form className="expense-details-form">
        <div>
          {renderForm(formikProps, {
            name: 'invoiceDetails.expenseDetails.lineAmount',
            placeholder: '',
            label: 'Line Amount',
            type: 'currency-text',
            options: countryOptions,
            icon: CurrencyCodeIcon,
            important: true
          })}
          {renderForm(formikProps, {
            name: 'invoiceDetails.expenseDetails.department',
            placeholder: 'Select Department',
            label: 'Department',
            type: 'dropdown',
            options: departments,
            important: true
          })}
          {renderForm(formikProps, {
            name: 'invoiceDetails.expenseDetails.account',
            placeholder: 'Select Account',
            label: 'Account',
            type: 'dropdown',
            options: accounts,
            important: true
          })}
          {renderForm(formikProps, {
            name: 'invoiceDetails.expenseDetails.location',
            placeholder: 'Select Location',
            label: 'Location',
            type: 'dropdown',
            options: locations,
            important: true
          })}
        </div>
        {renderForm(formikProps, {
          name: 'invoiceDetails.expenseDetails.description',
          placeholder: '',
          label: 'Description',
          type: 'text',
          options: countryOptions,
          important: true
        })}
      </form>
      <div className='expense-btn'>
        <Button text={'+ Add Expense Coding'} version={'version-3'} />
      </div>
    </>
  )
};

export default ExpenseDetailsContainer;

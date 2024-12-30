import './App.css';
import UploadInvoice from './components/UploadInvoice';
import VendorDetailsContainer from './components/VendorDetails';
import InvoiceDetailsContainer from './components/InvoiceDetails';
import CommentsContainer from './components/Comments';
import Footer from './components/Footer';
import { Form, Formik } from 'formik';
import { validationSchema } from './helpers/utility';
import LoginForm from './components/Login';
import { useState } from 'react';
import InvoiceHeaderContainer from './components/InvoiceHeader';

function App() {
  const initialState = {
    vendorInformation: {
      vendor: ''
    },
    invoiceDetails: {
      purchaseOrderNumber: '',
      invoiceNumber: '',
      invoiceDate: '',
      totalAmount: '',
      paymentTerms: '',
      invoiceDueDate: '',
      glPostDate: '',
      invoiceDescription: '',
      expenseDetails: {
        lineAmount: '',
        department: '',
        account: '',
        location: '',
        description: ''
      },
    },
    comments: {
      comment: ''
    },
    uploadedFile: ''
  };

  const handleSubmit = ({ formData }) => {
    localStorage.setItem('formData', JSON.stringify(formData))
    alert('Submitted successfully')
  }

  const handleSaveDraft = ({ formikProps }) => {
    const formData = formikProps.values;
    localStorage.setItem('draftFormData', JSON.stringify(formData));
    alert('Draft saved successfully');
  }

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(JSON.parse(localStorage.getItem('userData')))

  return !isUserLoggedIn ? <LoginForm setIsUserLoggedIn={setIsUserLoggedIn} /> : (
    <>
      <InvoiceHeaderContainer setIsUserLoggedIn={setIsUserLoggedIn} />
      <Formik
        initialValues={JSON.parse(localStorage.getItem('draftFormData')) || JSON.parse(localStorage.getItem('formData')) || initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, errors, touched }) => {
          handleSubmit({ formData: values })
        }}
      >
        {formikProps => (
          <>
            <div className="App">
              <Form>
                <UploadInvoice initialState={initialState}
                  formikProps={formikProps} />
                <div>
                  <VendorDetailsContainer
                    initialState={initialState.vendorInformation}
                    formikProps={formikProps}
                  />
                  <InvoiceDetailsContainer
                    initialState={initialState.invoiceDetails}
                    formikProps={formikProps}
                  />
                  <CommentsContainer
                    initialState={initialState.comments}
                    formikProps={formikProps}
                  />
                </div>
              </Form>
            </div>
            <Footer submitForm={formikProps.submitForm} handleSaveDraft={() => handleSaveDraft({ formikProps })} />
          </>
        )}
      </Formik >
    </>
  );

}

export default App;

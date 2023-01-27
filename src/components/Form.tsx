import React,{ useState } from 'react';
import { Urgency } from '../enums/enum';
import { Tasks } from '../interfaces/interfaces';
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as Yup from 'yup'

import '../styles/form.css';

interface Props {
  addTask: (task:Tasks) => void
}

const formTaskSchema = Yup.object().shape(
  {
    title : Yup.string()
                .min(5,'Task title too short')
                .max(20,'Task title too long')
                .required('Title is required'),
    description: Yup.string()
                .min(5,'Description too short')
                .max(40,'Description too long')
                .required('Description is required'),
  }
);

function FormTask({addTask}: Props) {
  
  const INITIAL_VALUES = {
    id: Math.floor(Math.random() * 1000000),
    title:'',
    description:'',
    urgency:Urgency.Normal,
    completed:false, 
  }
  

  return (
    <Formik
      initialValues={ INITIAL_VALUES }
      validationSchema={ formTaskSchema }
      onSubmit={(values, { resetForm }) => {
        values.completed = false;
        addTask(values);
        resetForm()
      }}
    >
      {
        props => {
          const {
            touched,
            errors,
          } = props;

          return(
            <Form className='form'>
              <div className='form-errors'>
                {
                  errors.title && touched.title && (<ErrorMessage name='title'/>)
                }
                <br/>
                {
                  errors.description && touched.description && (<ErrorMessage name='description'/>)
                }
              </div>
              <div className='form-container'>
                <Field 
                  id='name' type='text' name='title' placeholder='Task Title' className='form-container-input-title'
                />
                <Field 
                  id='description' type='text' name='description' placeholder='Task Description' className='form-container-input-description'
                />
                <Field as='select' name='urgency' className='form-container-select'>
                  <option className='form-container-select-option' value='Normal' selected>Normal</option>
                  <option className='form-container-select-option' value='Urgent'>Urgent</option>
                </Field>
                <button type='submit' className='form-container-button'>ADD TASK</button>
              </div>             
            </Form>
          )
        }
      }
      
    </Formik>
  )
}

export default FormTask

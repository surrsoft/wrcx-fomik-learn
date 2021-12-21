import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const eFields = {
  NAME: 'name',
  CITY: 'city',
  EMAIL: 'email',
  QUESTION: 'question'
}

const eStrings = {
  REQUIRED_FIELD: 'обязательное поле',
  EMAIL_INVALID: 'невалидный email'
}

const yupSchema = Yup.object({
  email: Yup.string().trim().email().required(eStrings.REQUIRED_FIELD)
})

export function Form1() {
  return (
    <Formik
      validate={values => {
        const errors = {}
        console.log('!!-!!-!! 1329- values {211219132511}\n', values) // del+
        // ---
        const cast = yupSchema.cast(values)
        console.log('!!-!!-!! 1329- cast {211219132933}\n', cast) // del+
        // --- email
        if (!values.email) {
          errors[eFields.EMAIL] = eStrings.REQUIRED_FIELD
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[eFields.EMAIL])
        ) {
          errors[eFields.EMAIL] = eStrings.EMAIL_INVALID
        }
        // ---
        return errors;
      }}
      initialValues={{
        [eFields.NAME]: '',
        [eFields.CITY]: '',
        [eFields.EMAIL]: '',
        [eFields.QUESTION]: '',
      }}
      validationSchema={Yup.object({
        [eFields.NAME]: Yup.string().trim().max('200', '200 символов максимум').required(eStrings.REQUIRED_FIELD),
        [eFields.CITY]: Yup.string().trim().max('200', '200 символов максимум'),
        [eFields.QUESTION]: Yup.string().trim().required(eStrings.REQUIRED_FIELD),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('!!-!!-!! values {211212171308}\n', values) // del+
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form className="formikForm">
          <div className="title">Задайте вопрос</div>

          <label>Ваше имя *</label>
          <Field type="text" name={eFields.NAME}/>
          <ErrorMessage className="fieldError" name={eFields.NAME} component="div"/>

          <label>город, населённый пункт</label>
          <Field type="text" name={eFields.CITY}/>
          <ErrorMessage className="fieldError" name={eFields.CITY} component="div"/>

          <label>email *</label>
          <Field type="text" name={eFields.EMAIL}/>
          <ErrorMessage className="fieldError" name={eFields.EMAIL} component="div"/>

          <label>вопрос *</label>
          <Field name={eFields.QUESTION} as="textarea"/>
          <ErrorMessage className="fieldError" name={eFields.QUESTION} component="div"/>

          <div className="buttonBox">
            <button type="submit" disabled={isSubmitting}>
              Отправить
            </button>
          </div>

          <div>{JSON.stringify(errors, null, 4)}</div>
        </Form>
      )}
    </Formik>
  )
}

import React from 'react';
import './Registration.css';
import {useFormValidation} from '../../hooks/useFormValidation';

function Registration() {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.name || !values.phone) {
      return;
    }
    resetForm();
  }

  return (
    <section className="registration">
      <div className="registration__container">
        <h2 className="registration__title">Запись на дегустацию</h2>
        <p className="registration__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.
          Pellentesque nisi, mi sit non sit sed fermentum.
        </p>
        <form action="#" method="post" className="registration__form" noValidate onSubmit={handleSubmit}>
          <input
            type="text"
            className="registration__input registration__input_type_name"
            name="name"
            autoComplete="on"
            minLength="2"
            maxLength="200"
            required
            placeholder="Имя"
            value={values.name || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            className="registration__input registration__input_type_phone"
            name="phone"
            autoComplete="on"
            minLength="2"
            maxLength="200"
            required
            placeholder="Телефон"
            value={values.phone || ''}
            onChange={handleChange}
          />
          <input
            type="text"
            className="registration__input registration__input_type_address"
            name="address"
            autoComplete="on"
            minLength="2"
            maxLength="200"
            required
            placeholder="Телефон"
            value={values.address || ''}
            onChange={handleChange}
          />
          <input
            type="submit"
            className={`registration__submit-button ${!isValid ? 'registration__submit-button_inactive' : ''}`}
            name="submit"
            value="Записаться"
            disabled={!isValid}
          />
        </form>
      </div>
    </section>
  )
}

export default Registration;

import "../styles/registerForm.css";

function FormRegister() {
  return (
    <>
      <h3>Take your experience to the next level</h3>
      <section className="register-form__container" action="">
        <div className="register-form__img-container"></div>
        <form className="register-form__form">
          <div className="form__input-container">
            <input className="input-container__input register__input" type="text" />
            <label htmlFor="">Email</label>
          </div>
          <div className="form__input-container">
            <input className="input-container__input register__input" type="text" />
            <label htmlFor="">Password</label>
          </div>
          <div className="form__input-container">
            <input className="input-container__input register__input" type="text" />
            <label htmlFor="">Username</label>
          </div>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="LastName" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Phone" />
          </div>
          <div className="">
            <input type="checkbox" required />
            <label> Accept Terms and conditions</label>
          </div>
          <button type="submit">Register</button>
        </form>
      </section>
    </>
  );
}

export default FormRegister;

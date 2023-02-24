function Form() {
  return (
    <section className="section__contact">
      <div className="contact__img-container">
        <img src="contact__img" alt="" />
      </div>
      <div className="contact__form-container">
        <h2>Keep In Touch</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          nisi?
        </p>
        <form action="">
            <div className="form__input-container">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" />
            </div>
            <div className="form__input-container">
                <label htmlFor="">Last-name</label>
                <input type="text" placeholder="Name" />
            </div>
            <div className="form__input-container">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Name" />
            </div>
            <div className="form__input-container">
                <label htmlFor="">Your message</label>
                <textarea></textarea>
            </div>
        </form>
      </div>
    </section>
  );
}

export default Form;

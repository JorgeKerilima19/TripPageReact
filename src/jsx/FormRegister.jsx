function FormRegister() {
  return (
    <section action="">
      <h3>Take your experience to the next level</h3>
      <div>
        <img
          src="https://images.unsplash.com/photo-1607000975574-0b425df6975a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <form>
        <div>
          <input type="text" />
          <label htmlFor="">Email</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Password</label>
        </div>
        <div>
          <input type="text" />
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
  );
}

export default FormRegister;

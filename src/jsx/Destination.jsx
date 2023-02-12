export default function Destinations({ item }) {
  return (
    <>
      <article className="destination-card">
        <div className="destination-card_images">
          <img src={item.src1} alt="Image1" />
          <img src={item.src2} alt="Image2" />
        </div>
        <div className="destination-card_description">
          <h3 className="card-title">
            {item.title},{" "}
            <small className="card-title_small">{item.popular}</small>
          </h3>
          <p className="card-description">{item.description}</p>
          <button className="button-medium">Book</button>
        </div>
      </article>
    </>
  );
}

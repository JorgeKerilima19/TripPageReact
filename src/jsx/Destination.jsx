export default function Destinations({item}) {
  return (
    <>
      <article className="destination-card">
        <div className="destination-card_images">
          <img src={item.src1} alt="Image1" />
          <img src={item.src2} alt="Image2" />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button>Book</button>
      </article>
    </>
  );
}

const OpinionCard = ({ el, arr }) => {
  return (
    <article>
      <div>Photo</div>
      <div>
        <h2>{el.userName}</h2>
        <p>{el.comment}</p>
        <div>
          {Object.entries(arr).map(([key, value], index) => (
            <div key={index}>
              <strong>{key}:</strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default OpinionCard;

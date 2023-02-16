export default function Information({ title, content }) {
  return (
    <div className="info-wrapper">
      <h3 className="info_title">{title}</h3>
      <p className="info_content">{content}</p>
    </div>
  );
}

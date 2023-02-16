export default function Information({ title, content, id }) {
  return (
    <div id={id} className="info-wrapper">
      <h3 className="info_title">{title}</h3>
      <div className="info_content">{content}</div>
    </div>
  );
}

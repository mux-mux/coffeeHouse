import './Paragraph.scss';

function Paragraph({ children, ...delegated }) {
  return (
    <>
      <p {...delegated}>{children}</p>
    </>
  );
}
export default Paragraph;

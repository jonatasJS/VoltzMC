export default function LinkNewPage({ link, children }) {

  return (
    <a href={link} target="_blank">{children}</a>
  );
}
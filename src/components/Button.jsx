export default function Button({ id, className, children, onClick }) {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

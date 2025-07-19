export function Card({ children }) {
  return <div className="bg-white rounded-lg shadow border">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
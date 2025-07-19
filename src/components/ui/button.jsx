export function Button({ children, onClick, disabled, variant = '', asChild = false, className = '' }) {
  const classMap = {
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    default: "bg-blue-600 text-white hover:bg-blue-700"
  };
  const buttonClass = \`px-4 py-2 rounded text-sm font-medium \${classMap[variant] || classMap.default} \${className}\`;
  return <button onClick={onClick} disabled={disabled} className={buttonClass}>{children}</button>;
}
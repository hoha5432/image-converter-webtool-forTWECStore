export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div className="bg-green-500 h-3 rounded-full" style={{ width: \`\${value}%\` }}></div>
    </div>
  );
}
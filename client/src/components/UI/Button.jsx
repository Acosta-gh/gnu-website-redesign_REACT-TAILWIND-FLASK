function Button({ text, className, bgColor }) {
  return (
    <button className={`text-white ${bgColor} hover:brightness-90 font-bold py-2 px-4 rounded ${className}`}>
      {text}
    </button>
  );
}

export default Button;

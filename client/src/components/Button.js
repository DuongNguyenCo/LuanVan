function Button(prop) {
  return (
    <button className={"rounded border border-sky-500 " + prop.className}>
      {prop.text}
    </button>
  );
}

export default Button;

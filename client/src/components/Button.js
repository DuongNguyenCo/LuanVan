function Button(prop) {
  console.log("button", prop.text);
  return (
    <button className={"rounded border border-sky-500 " + prop.className}>
      {prop.text}
    </button>
  );
}

export default Button;

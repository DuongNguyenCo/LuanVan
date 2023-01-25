function Button(prop) {
  console.log("button", prop.text);
  return (
    <button
      className={prop.className || "rounded border border-sky-500 w-2/12"}
    >
      {prop.text}
    </button>
  );
}

export default Button;

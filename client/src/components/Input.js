function Input(prop) {
  console.log("input", prop.placeholder);
  return (
    <div className={prop.className || " h-20 w-full"}>
      <label
        className={prop.label === undefined ? null : "mb-2 inline-block"}
        htmlFor={prop.id}
      >
        {prop.label || null}
      </label>
      <input
        id={prop.id}
        className={
          "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        }
        type={prop.type || "text"}
        placeholder={prop.placeholder}
        name={prop.name}
      />
    </div>
  );
}

export default Input;

function Input(prop) {
  console.log("input", prop.name);
  return (
    <>
      <label htmlFor={prop.id}>{prop.label || null}</label>
      <input
        id={prop.id}
        className={
          (prop.className &&
            "placeholder:italic placeholder:text-slate-400 block bg-white w-5/12 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm") ||
          "mr-3 placeholder:italic placeholder:text-slate-400 block bg-white w-5/12 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        }
        type={prop.type || "text"}
        placeholder={prop.placeholder}
        name={prop.name}
      />
    </>
  );
}

export default Input;

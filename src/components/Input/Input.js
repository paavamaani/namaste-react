import "./Input.css";

const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  );
};

export default Input;

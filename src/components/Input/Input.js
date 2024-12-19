import './Input.scss';

function Input({
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  errors,
  required = false,
  children,
  ...delagated
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{children}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...delagated}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          {...delagated}
        />
      )}
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
}

export default Input;

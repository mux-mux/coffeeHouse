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
  className,
  ...delagated
}) {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-group__label">
        {children}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={className}
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
          className={className}
          {...delagated}
        />
      )}
      {errors && <span className="form-group__error-message">{errors}</span>}
    </div>
  );
}

export default Input;

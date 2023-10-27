function FormRow({
  type = 'text',
  name,
  value,
  handleChange,
  labelText = name,
  optional,
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        id={name}
        required={optional ? false : true}
      />
    </div>
  );
}

export default FormRow;

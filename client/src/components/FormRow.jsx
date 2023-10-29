function FormRow({
  type = 'text',
  name,
  value,
  handleChange,
  labelText = name,
  notRequired,
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
        required={!notRequired}
      />
    </div>
  );
}

export default FormRow;

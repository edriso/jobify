function FormRow({
  type = 'text',
  name,
  defaultValue,
  notRequired,
  labelText,
  onChange,
}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required={!notRequired}
        onChange={onChange}
      />
    </div>
  );
}

export default FormRow;

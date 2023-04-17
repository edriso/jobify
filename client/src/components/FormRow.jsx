function FormRow({ type = 'text', name, value, onChange, labelText = name }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="form-input"
        id={name}
      />
    </div>
  );
}

export default FormRow;

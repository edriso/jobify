function FormRow({ type = 'text', name, value, onChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-input"
        id={name}
      />
    </div>
  );
}

export default FormRow;

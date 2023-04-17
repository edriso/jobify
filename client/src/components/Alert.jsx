const Alert = ({ type = 'danger' }) => {
  return <div className={`alert alert-${type}`}>alert goes here</div>;
};
export default Alert;

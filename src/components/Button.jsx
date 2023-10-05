const Button = ({ children, showAlert } = props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={showAlert}>
        {children}
      </button>
    </div>
  )
}

export default Button

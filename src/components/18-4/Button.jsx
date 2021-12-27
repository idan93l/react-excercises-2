const Button = ({buttonName, click}) => {
  return (
    <div>
      <button onClick={click}>{buttonName}</button>
    </div>
  )
}

export default Button;
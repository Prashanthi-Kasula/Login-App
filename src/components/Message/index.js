import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'Welcome User' : 'Please Login'

  return (
    <>
      <h1 className="message">{message}</h1>
      {/* <input type="text" className="input" /> */}
    </>
  )
}

export default Message

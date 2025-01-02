
const headingStyle = {
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    backgroundColor: 'var(--backgroundtransy)',
    width: '100%',
    color: 'var(--accentdark)'
  }
  
const headingh1Style = {
    fontSize: '3rem',
    color: 'var(--accent)'
}
  
const Layout = props => (
    <div style={headingStyle}>
      <p>{props.subtitle}</p>
      <h1 style={headingh1Style}>{props.title}</h1>
    </div>
  )
  
  export default Layout
  
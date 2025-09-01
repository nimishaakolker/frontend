function Msg({ username, textColor }) {
    let styles = {color : textColor}
    return (

        <div style = {styles}>
            <h3>Hello {username}</h3>
        </div>
    )
}
export default Msg;
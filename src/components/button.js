import PropTypes from 'prop-types'

export const button = ({ color, text, onClick }) => {

    return ( <
        button onClick = { onClick }
        style = {
            { backgroundcolor: { color } }
        }
        className = 'btn' > { text } < /button>
    )
}
button.defaultProps = {
    color: 'steelblue',
}
button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default button
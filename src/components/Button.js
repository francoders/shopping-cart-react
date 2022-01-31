import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#54BAB9',
        color: 'white',
        borderRadius: '20px',
        padding: '10px',
        margin: '12px',
        cursor: 'pointer'

    }
}


class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button
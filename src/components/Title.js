import { Component } from "react/cjs/react.production.min";

const styles = {
    title: {
        marginBottom: '30px',
        color: '#fff'
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={styles.title}>Alimentos</h1>
        )
    }
}

export default Title
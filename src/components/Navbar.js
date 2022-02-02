import { Component } from "react/cjs/react.production.min";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justyfyContent: 'space-between'
    }
}

class Navbar extends Component {
    render(){
        return(
            <nav style= {styles.navbar}>
                <p>Logo</p>
                <p>Carro</p>
            </nav>
        )
    }
}

export default Navbar
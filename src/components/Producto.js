import { Component } from 'react'
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 1px 5px 0 rgb(0,0,0,0.1)',
        width: '30%',
        textAlign: 'center',
        borderRadius: '20px',
        backgroundColor: '#fff'
    },

    img:{
        width: '260px',
        height: 'auto'
    }
}

class Producto extends Component {
    render() {
        const {producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
            </div>
        )
    }
}

export default Producto
import { Component } from 'react';
import Productos from './components/Productos'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 600, img: '/productos/tomate.png' },
      { name: 'Helado Chocolate', price: 4.990, img: '/productos/helado-chocolate.png' },
      { name: 'Mantequilla de Mani', price: 4.450, img: '/productos/mantequilla-mani.png' }
    ]
  }
  render() {
    return (
      //Componente productos
      <div>
        <Productos
          agregarAlCarro={() => console.log('no hace nada')}
          productos={this.state.productos}
        />
      </div>
    )
  };
}

export default App;

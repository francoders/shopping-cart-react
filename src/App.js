import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

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
      //
      <div>
        <Navbar></Navbar>
        <Layout>
          <Title></Title>
          <Productos
            agregarAlCarro={() => console.log('no hace nada')}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  };
}

export default App;

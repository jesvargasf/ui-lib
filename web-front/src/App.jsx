import React, { useState } from 'react';
import { Button, Card, Modal } from 'mi-libreria-ui';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const handleButtonClick = () => {
    setButtonClickCount(prev => prev + 1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Web Front - Demo mi-libreria-ui</h1>
        <p>Aplicación React + Vite usando componentes de mi-libreria-ui</p>
      </header>

      <main className="app-content">
        {/* Button Section */}
        <section className="demo-section">
          <h2>Botones</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3>Variantes</h3>
              <div className="button-group">
                <Button variant="primary">Botón Primario</Button>
                <Button variant="secondary">Botón Secundario</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3>Tamaños</h3>
              <div className="button-group">
                <Button size="sm">Pequeño</Button>
                <Button size="md">Mediano</Button>
                <Button size="lg">Grande</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3>Estados</h3>
              <div className="button-group">
                <Button>Normal</Button>
                <Button disabled>Deshabilitado</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3>Interactivo</h3>
              <div className="button-group">
                <Button onClick={handleButtonClick}>
                  Clickeado {buttonClickCount} veces
                </Button>
                <Button onClick={openModal}>Abrir Modal</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section className="demo-section">
          <h2>Tarjetas</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3>Elevaciones</h3>
              <div className="card-grid">
                <Card elevation="none" title="Sin Elevación">
                  <p>Esta tarjeta no tiene sombra.</p>
                </Card>
                <Card elevation="sm" title="Elevación Pequeña">
                  <p>Esta tarjeta tiene una sombra pequeña.</p>
                </Card>
                <Card elevation="md" title="Elevación Media">
                  <p>Esta tarjeta tiene una sombra media.</p>
                </Card>
                <Card elevation="lg" title="Elevación Grande">
                  <p>Esta tarjeta tiene una sombra grande.</p>
                </Card>
              </div>
            </div>

            <div className="showcase-group">
              <h3>Contenido Variado</h3>
              <div className="card-grid">
                <Card title="Tarjeta Simple">
                  <p>Esta es una tarjeta con contenido simple y directo.</p>
                  <Button size="sm" onClick={handleButtonClick}>
                    Acción
                  </Button>
                </Card>
                <Card title="Tarjeta Compleja">
                  <h4>Subtítulo</h4>
                  <p>
                    Esta tarjeta contiene múltiples elementos como títulos,
                    párrafos y botones. Demuestra la flexibilidad del componente.
                  </p>
                  <ul>
                    <li>Elemento de lista 1</li>
                    <li>Elemento de lista 2</li>
                    <li>Elemento de lista 3</li>
                  </ul>
                  <div className="button-group">
                    <Button size="sm" variant="secondary">
                      Cancelar
                    </Button>
                    <Button size="sm">Aceptar</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Section */}
        <section className="demo-section">
          <h2>Modal</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3>Demostración</h3>
              <p>
                Haz clic en el botón de abajo para abrir un modal de ejemplo.
              </p>
              <Button onClick={openModal}>Abrir Modal de Ejemplo</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal de Ejemplo">
        <h3>¡Bienvenido al Modal!</h3>
        <p>
          Este es un ejemplo del componente Modal. Puedes cerrarlo haciendo clic
          en el botón de cerrar, haciendo clic fuera del modal, o presionando la
          tecla Escape.
        </p>
        <p>
          Los modales son útiles para mostrar información importante, formularios,
          o acciones que requieren la atención del usuario.
        </p>
        <div className="button-group">
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button onClick={closeModal}>Aceptar</Button>
        </div>
      </Modal>

      <footer className="app-footer">
        <p>
          Creado con ❤️ usando Web Front + mi-libreria-ui
        </p>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, Card, Modal } from '../index';
import './demo.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const handleButtonClick = () => {
    setButtonClickCount(prev => prev + 1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="demo">
      <header className="demo-header">
        <h1 className="demo-title">Mi Librería UI Demo</h1>
        <p className="demo-subtitle">
          Componentes React con estilos consistentes y personalizables
        </p>
      </header>

      <main className="demo-content">
        {/* Button Section */}
        <section className="demo-section">
          <h2 className="section-title">Botones</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Variantes</h3>
              <div className="button-group">
                <Button variant="primary">Botón Primario</Button>
                <Button variant="secondary">Botón Secundario</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3 className="showcase-subtitle">Tamaños</h3>
              <div className="button-group">
                <Button size="sm">Pequeño</Button>
                <Button size="md">Mediano</Button>
                <Button size="lg">Grande</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3 className="showcase-subtitle">Estados</h3>
              <div className="button-group">
                <Button>Normal</Button>
                <Button disabled>Deshabilitado</Button>
              </div>
            </div>

            <div className="showcase-group">
              <h3 className="showcase-subtitle">Interactivo</h3>
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
          <h2 className="section-title">Tarjetas</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Elevaciones</h3>
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
              <h3 className="showcase-subtitle">Contenido Variado</h3>
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
          <h2 className="section-title">Modal</h2>
          <div className="component-showcase">
            <div className="showcase-group">
              <h3 className="showcase-subtitle">Demostración</h3>
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

      <footer className="demo-footer">
        <p>
          Creado con ❤️ usando Mi Librería UI - Componentes React reutilizables
        </p>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

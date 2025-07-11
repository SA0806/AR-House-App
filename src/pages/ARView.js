
import React, { useState } from 'react';
import ModelViewerAR from '../components/ModelViewerAr';
import { useSelectedObjects } from '../Context/SelectedObjectsContext';
import SelectedItemsBar from '../components/SelectedItemsBar';

const ARViewModelViewer = () => {
  const { selectedObjects, toggleObjectSelection } = useSelectedObjects();
  const [activeModel, setActiveModel] = useState(selectedObjects[0]?.model || null);

  return (
    <div>
      {/* Top bar to show selected items */}
      <div className="top-bar">
        <SelectedItemsBar 
          selectedObjects={selectedObjects}
          toggleObjectSelection={toggleObjectSelection}
        />
      </div>

      {/* AR Model Viewer */}
      {activeModel && (
        <model-viewer
          src={activeModel}
          alt="3D Model in AR"
          ar
          ar-modes="scene-viewer webxr quick-look"
          auto-rotate
          camera-controls
          style={{
            width: '100vw',
            height: '100vh',
            background: 'transparent',
          }}
        ></model-viewer>
      )}

      {/* Model switcher (from selected list) */}
      <div style={{
        position: 'absolute',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#fff',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        gap: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 100
      }}>
        {selectedObjects.map((object, index) => (
          <button key={index} onClick={() => setActiveModel(object.model)}>
            {object.name || `Model ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ARViewModelViewer;

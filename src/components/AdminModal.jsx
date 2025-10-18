import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AdminModal({ initial, onClose, onSave }) {
  const [animal, setAnimal] = useState(initial || { id: uuidv4(), name: '', type: '', habitat: '', description: '', image: '' });

  useEffect(() => {
    setAnimal(initial || { id: uuidv4(), name: '', type: '', habitat: '', description: '', image: '' });
  }, [initial]);

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimal(prev => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    onSave(animal);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal modal-admin" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">{initial ? 'Editar Animal' : 'Agregar Animal'}</h2>
        
        <label className="input-group">
          Nombre
          <input type="text" name="name" value={animal.name} onChange={handleChange} placeholder="Ej. Perro" />
        </label>

        <label className="input-group">
          Tipo
          <input type="text" name="type" value={animal.type} onChange={handleChange} placeholder="Ej. Mamífero" />
        </label>
        
        <label className="input-group">
          Hábitat
          <input type="text" name="habitat" value={animal.habitat} onChange={handleChange} placeholder="Ej. Terrestre" />
        </label>
        
        <label className="input-group">
          Imagen URL
          <input type="text" name="image" value={animal.image} onChange={handleChange} placeholder="Ej. https://url-de-imagen.jpg" />
        </label>
        
        <label className="input-group">
          Descripción
          <textarea name="description" value={animal.description} onChange={handleChange} placeholder="Escriba una breve descripción..." rows="4"></textarea>
        </label>

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="btn-secondary">Cancelar</button>
          <button onClick={handleSave} className="btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  );
}
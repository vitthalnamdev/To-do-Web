import React, { useState } from 'react';

const FormPopup = (props) => {
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;
  
  const [formData, setFormData] = useState({
    Title: '',
    desc: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.sno = props.count
    props.Increment();
    props._setTodos(formData);
    setFormData({ Title: '', desc: '' });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const modalStyles = {
    overlay: {
      display: isOpen ? 'flex' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modal: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%'
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '4px',
      marginBottom: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '16px',
      marginBottom: '16px'
    }
  };

  return (
    <div>
      <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
          <h2 style={{ marginBottom: '20px' }}>Add-Todo</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Title">Title</label>
              <input
                id="Title"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                required
                style={modalStyles.input}
              />
            </div>
            <div>
              <label htmlFor="desc">Description</label>
              <input
                id="desc"
                name="desc"
                type="desc"
                value={formData.desc}
                onChange={handleChange}
                required
                style={modalStyles.input}
              />
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                style={{ ...modalStyles.button, backgroundColor: '#6c757d' }}
              >
                Cancel
              </button>
              <button 
                type="submit"
                style={modalStyles.button}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
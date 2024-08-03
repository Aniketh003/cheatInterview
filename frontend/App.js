import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await axios.get('http://localhost:8081/contacts');
    setContacts(response.data);
  };

  const addContact = async () => {
    const response = await axios.post('http://localhost:8081/contacts', { name, phone });
    setContacts([...contacts, response.data]);
    setName('');
    setPhone('');
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8081/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
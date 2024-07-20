import React from "react";

<<<<<<< HEAD
function App() {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const API_URL = 'http://localhost:5000/';
=======
>>>>>>> 220d28d0155f4b2ddc8a50821c55f401e0adea7f

export default function HelloMessage() {

<<<<<<< HEAD
  const fetchPersons = async () => {
    const response = await axios.get('${API_URL}/persons');
    setPersons(response.data);
  };

  const addPerson = async () => {
    if (editIndex !== null) {
      await axios.put(`${API_URL}/persons/${editIndex}`, { name, number });
      setEditIndex(null);
    } else {
      await axios.post('${API_URL}/persons', { name, number });
    }
    setName('');
    setNumber('');
    fetchPersons();
  };

  const deletePerson = async (index) => {
    await axios.delete(`${API_URL}/${index}`);
    fetchPersons();
  };

  const editPerson = (index) => {
    setName(persons[index].name);
    setNumber(persons[index].number);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Personen Verwalten</h1>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Zahl" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button onClick={addPerson}>
        {editIndex !== null ? 'Aktualisieren' : 'Hinzufügen'}
      </button>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} - {person.number}
            <button onClick={() => editPerson(index)}>Bearbeiten</button>
            <button onClick={() => deletePerson(index)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
=======

return <h1>Hello, World</h1>; 
return <h1>Hello, World</h1>;
return <h1>Hello, World xxx</h1>;

>>>>>>> 220d28d0155f4b2ddc8a50821c55f401e0adea7f

}
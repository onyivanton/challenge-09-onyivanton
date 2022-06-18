import './App.css';

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App

  return (    
    <div className="App" style={{backgroundColor:"#9771AC"}}>
      <Header/>
      <Contact index="0"/>
      <Contact index="1"/>
      <Contact index="2"/>
      <Contact index="3"/>
      <Contact index="4"/>
      <Contact index="5"/>
      
    </div>
  );
}

export default App;

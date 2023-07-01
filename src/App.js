import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';

const contacts = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const languages = [
  {
    lang: 'de'
  },
  {
    lang: 'en'
  }
]


const contactList = () => contacts.map(contact => (
  <IdCard lastName={ contact.lastName} firstName={ contact.firstName } gender={ contact.gender } height={ contact.height } birth={ contact.birth } picture={ contact.picture } />
 ))

const getLang = () => languages.map(language => (
  <Greetings lang={ language.lang }>Ludwig</Greetings>
))

function App() {
  return (
    <div className="App">
      {contactList()}
      {getLang()}
      <Random min={1} max={6}/>
    </div>
  );
}

export default App;

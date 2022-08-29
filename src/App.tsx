import './App.css';
import Avatar from './components/Avatar/Avatar';
import IconList from './components/IconsList/IconsList';
import Link from './components/Link/Link';


function App() {
  
  return (
    <div className="App">
      <Avatar />
      <Link name="LINK 1"/>
      <Link name="LINK 2"/>
      <Link name="LINK 3"/>
      <Link name="LINK 4"/>
      <IconList/>
    </div>
  )
}

export default App


import './App.css';
import useFetch from './useFetch';

function App() {

 const {data} = useFetch()


  return (
      <div>
          <h1> welcome to the application </h1>
          {
            data.map((user)=>(
              <li key={user.id}>{user.title}</li>
            ))
          }
      </div>
  );
}

export default App;

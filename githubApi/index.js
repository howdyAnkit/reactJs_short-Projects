import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

    function Github({login}){
      const [data, setData] = useState(null);
      useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
      }, []);

      if(data){
        return(
          <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} width={100}/>
          </div>
        );
      }
      return null;
    }

    function App(){
        return <Github login="howdyAnkit"/>
    }
    
ReactDOM.render(

    <Github />,
    document.getElementById('root')
);
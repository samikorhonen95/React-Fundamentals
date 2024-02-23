import { useState } from 'react'
import './App.css'

function App() {
  const [listItems, setListItems] = useState([]);
  const [keyword, setKeyword] = useState('')

    const fetchOnClick = () => {
      fetch(`https://api.github.com/search/repositories?q=$keyword`)
      .then((response) => response.json())
      .then((responseData) => {
        setListItems(responseData.items);
      })
      .catch(err => console.log(err))
    };

    const inputChanged = (Event) => {
      setKeyword(Event.target.value);
    }

  return (
    <>
      <h2>Repositories</h2>
      <input placeholder='Keyword' value={keyword} onChange={inputChanged}></input>
      <button type='button' onClick={fetchOnClick}>Search</button>
      <table>
          <tbody>
          <tr><th>Name</th><th>URL</th></tr>
          {
            listItems.map((repo) => 
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td><a href={repo.html_url}>{repo.html_url}</a></td>
              </tr>)
          }
          </tbody>
      </table>
    </>
  );
}

export default App
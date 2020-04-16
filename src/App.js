import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { SideBar } from './components/sidebar/sidebar.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFieldName: '',
      searchFieldEmail: '',
      searchFieldUserName: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChangeName = e => { this.setState({ searchFieldName: e.target.value }) }
  handleChangeEmail = e => { this.setState({ searchFieldEmail: e.target.value }) }
  handleChangeUserName = e => { this.setState({ searchFieldUserName: e.target.value }) }

  render() {
    const { monsters, searchFieldName, searchFieldEmail, searchFieldUserName } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFieldName.toLowerCase()) &&
      monster.email.toLowerCase().includes(searchFieldEmail.toLowerCase()) &&
      monster.username.toLowerCase().includes(searchFieldUserName.toLowerCase())
    )

    return (
      <div className='App'>
        <h1 className='monsters'> Monsters Rolodex </h1>
        <h2 className="criteria"> Seach Monsters Criteria</h2>
        <SearchBox
          image={'https://toppng.com/uploads/preview/person-icons-android-username-icon-ios-11553402461wnwwgdi6wz.png'}
          label='Name'
          placeholder='Donald Trump'
          handleChange={this.handleChangeName}
        />
        <SearchBox
          image={'https://image.flaticon.com/icons/png/512/46/46951.png'}
          label='Email'
          placeholder='example@email.com'
          handleChange={this.handleChangeEmail}
        />
        <SearchBox
          image={'https://i7.pngguru.com/preview/471/411/643/black-and-white-cartoon-black-and-white-cartoon-monster.jpg'}
          label='User Name'
          placeholder='Tarzaned'
          handleChange={this.handleChangeUserName}
        />
        <CardList monsters={filteredMonsters} />
        <SideBar />
      </div>
    )
  }
}

export default App;

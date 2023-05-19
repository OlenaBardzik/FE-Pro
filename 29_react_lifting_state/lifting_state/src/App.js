import * as React from 'react';

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

// Принимать `animal` и `onAnimalChange` props в эту компоненту
function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
}

function App() {
  // Добавить useState для animal
  const [name, setName] = React.useState('');
  const [animal, setAnimal] = React.useState('');
  
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* Передать animal и onAnimalChange prop тут (см. как сделано в компоненте Name выше) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      {/* Передать animal prop тут */}
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default App;

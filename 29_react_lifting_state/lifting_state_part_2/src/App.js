import * as React from 'react';

function Name() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
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

function Display({animal}) {
  return <div>{`Эй, твое любимое животное: ${animal}!`}</div>
}

function App() {
  // Добавить useState для animal
  // const [name, setName] = React.useState('');
  const [animal, setAnimal] = React.useState('');
  
  return (
    <form>
      <Name />
      {/* Передать animal и onAnimalChange prop тут (см. как сделано в компоненте Name выше) */}
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      {/* Передать animal prop тут */}
      <Display animal={animal}/>
    </form>
  )
}

export default App;

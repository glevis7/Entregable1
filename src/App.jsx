
import './App.css'
import FortuneCard from './components/FortuneCard'
import phrases from './data/phrases.json';
import { useState } from 'react';
import backgroundImage1 from './assets/imagfondo/fortuna-1/fondo1.jpg';
import backgroundImage2 from './assets/imagfondo/fortuna-1/fondo2.jpg';
import backgroundImage3 from './assets/imagfondo/fortuna-1/fondo3.jpg';
import backgroundImage4 from './assets/imagfondo/fortuna-1/fondo4.jpg';



function App() {

  const backgroundImage = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4]

  

  const randomPhrases = Math.floor(Math.random() * phrases.length)
  const [indexPhrases, setIndexPhrases] = useState(randomPhrases)
  

  const randomImage = Math.floor(Math.random() * backgroundImage.length)
  const [indexImage, setIndexImage] = useState(randomImage)
  
  const changeUser = () => {
    const newRandomPhrases = Math.floor(Math.random() * phrases.length)
    const newRandomImage = Math.floor(Math.random() * backgroundImage.length)
    setIndexPhrases(newRandomPhrases)
    setIndexImage(newRandomImage)
    
  }

  
  
  return (
    <>
    <div style={{
            backgroundImage:`url(${backgroundImage [indexImage]})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} className='container'>
          

     <div className="App">
     <FortuneCard data={phrases[indexPhrases]}/>

     <button onClick={changeUser}><i className='bx bx-shuffle'></i></button>
     </div>
     
     </div>
    </>
    
  )

}
export default App

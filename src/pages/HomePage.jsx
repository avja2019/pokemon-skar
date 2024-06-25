import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css'

const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const textInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setTrainer(textInput.current.value.trim()));
        textInput.current.value = '';
        navigate('/pokedex');
    }

  return (
    <div className='container'> 
      <div className='logo'>
        <img src="../../assets/pokedex.png" alt='pokedex image' />
      </div>
      <div className='title'>
        <h1>!Hi trainer¡</h1>
        <p>to start give me your name</p>
      </div>
      <div className='input'>
        <form onSubmit={handleSubmit}>
          <input ref={textInput} type="text"  placeholder='Tu nombre...'/>
          <button>Start</button>
        </form>
      </div>
    </div>
  )
}

export default HomePage;

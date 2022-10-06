import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import angular from '../img/angular.png';
import react from '../img/react.png';
import vue from '../img/vue.png';
import svelte from '../img/svelte.png';
import '../css/formulario.css';
import Tabla from './tabla';

function Formulario(){
    
    const obtenerRegistros = () =>{
        if(localStorage.getItem("datos")){
            return JSON.parse(localStorage.getItem("datos"));
        } else{
           return [];
        }
    }

    const {register , formState: { errors }, handleSubmit, reset} = useForm();
    const [registros , setRegistros] = useState(obtenerRegistros());
    
    const setDatos = (e) =>{
        setRegistros([...registros, e]);
        limpiarInput()
    }

    useEffect(()=>{
         localStorage.setItem("datos", JSON.stringify(registros));
    }, [registros])

    const limpiarInput = () =>{
        reset();
        document.querySelector(".imgAngular").classList.remove("azul");
        document.querySelector(".imgReact").classList.remove("azul");
        document.querySelector(".bueImg").classList.remove("azul");
        document.querySelector(".svelteImg").classList.remove("azul");
    }
    
    const seleccionado = (sel) => {
        document.querySelector(sel).classList.toggle("azul");
    }


   
       return (
        <div className='container'>
            <div className='formularioContainer'>
               <form className='form' onSubmit={handleSubmit(setDatos)}>
                    {/* input */}
                    <div className='nombres'>
                        <div className='divInput'>
                            <span className='span'>Nombre</span>
                            <input className='inputNombre input' type='text'  {...register('nombre' ,{ required: true })}/>
                            {errors.nombre?.type === 'required' && <p className='alerta'>Este campo es obligatorio</p> }
                        </div>
                        <div className='divInput'>
                            <span className='span'>Apellido</span>
                            <input className='inputNombre input inputApellido' type='text' {...register('apellido' ,{ required: true })}/>
                            {errors.apellido?.type === 'required' && <p className='alerta'>Este campo es obligatorio</p>}
                        </div>
                    </div>
                    <div className='correo'>
                        <span className='span'>Email</span>
                        <input type='text' className='emaill' {...register('email' ,{ required: true })}/>
                        {errors.email?.type === 'required' && <p className='alerta'>Este campo es obligatorio</p>}
                    </div>
                    <div className='signos'>
                        <div className='divInput'>
                            <span className='span'>Telefono</span>
                            <input className='inputSigno inputS' type='number' {...register('telefono' ,{ required: true })}/>
                            {errors.telefono?.type === 'required' && <p className='alerta'>Este campo es obligatorio</p>}
                        </div>
                        <div className='divInput'>
                        <select className='inputSigno' {...register('signo', { required: true })}>
                            <option value="">Signos</option>
                            <option>Aries</option>
                            <option>Leo</option>
                            <option>Sagitario</option>
                            <option>Escorpio</option>
                            <option>Capricornio</option>
                            <option>Piscis</option>
                            <option>Geminis</option>
                            <option>Cancer</option>
                            <option>Libra</option>
                            <option>Tauro</option>
                            <option>Acuario</option>
                            <option>Virgo</option>
                        </select>
                        {errors.signo?.type === 'required' && <p className='alerta'>Este campo es obligatorio</p>}
                    </div>
                    </div>
                    <h1>Seleccionas tus lenguages favoritos</h1>
                    <div className='lenguages'>
                        <div className='labelLenguage'>
                            <input id='angular' value='Angular' type='checkbox' {...register('angular')}/>
                            <label onClick={() => seleccionado('.imgAngular')} className='angular' htmlFor='angular'><img className='imgLenguage imgAngular' src={angular}/></label>
                            <p>Angular</p>
                             {/* {errors.angular?.type === 'required' && <h1 className='alerta'>Seleccionar</h1> } */}
                        </div>
                        <div className='labelLenguage'>
                            <input id='react' value='Recat'  type='checkbox' {...register('react')}/>
                            <label onClick={() => seleccionado('.imgReact')} className='react' htmlFor='react'><img className='imgLenguage imgReact' src={react}/></label>
                            <p>React</p>
                             {/* {errors.react?.type === 'required' && <h1 className='alerta'>Seleccionar</h1> } */}
                            </div>
                        <div className='labelLenguage'>
                            <input  id='vue' value='Vue'  type='checkbox' {...register('vue')}/>
                            <label onClick={() => seleccionado('.bueImg')} className='vue' htmlFor='vue'><img className='imgLenguage bueImg' src={vue}/></label>
                            <p>Vue</p>
                             {/* {errors.vue?.type === 'required' && <h1 className='alerta'>Seleccionar</h1> } */}
                        </div>
                        <div className='labelLenguage'>
                            <input id='svelte'  value='Svelte'  type='checkbox' {...register('svelte')}/>
                            <label onClick={() => seleccionado('.svelteImg')}   className='svelte' htmlFor='svelte'><img className='imgLenguage svelteImg' src={svelte}/></label>
                            <p>Svelte</p>
                             {/* {errors.svelte?.type === 'required' && <h1 className='alerta'>Seleccionar</h1> } */}
                        </div>
                    </div>
                   <button className='boton1'>Enviar</button>
               </form>
            </div>
            <Tabla dat={registros} />
        </div>

       )
   };
    

   export default Formulario;
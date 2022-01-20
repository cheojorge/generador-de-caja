import React, { useState } from 'react'
import  {Cubo}  from './Cubo';
import listaColores from './ListaColores';

export const Form = () => {
    const [color, setColor] = useState("");
    const [dato, setDato] = useState([]);
    const [dimensions, setDimension] = useState("100px")
    const addColor = (event) =>{
        event.preventDefault()
        let check = listaColores.find(list => list === color)
        if(check){
            const newDato = {
                color: color,
                dimensions: dimensions,
            }
            setDato([...dato,newDato])
            setColor('')
            setDimension('100px')
            event.target.reset()
        }
        else{
            color ? alert(`${color} no es un color valido, vuelva a intentar`) : alert('No se ingreso ningun color')   
        }
        
    }
    return (
        <>
        <form onSubmit={addColor}>
            <div className="input-group mb-3">
                <label className="mx-3">Color</label>
                <input type="text" className="form-control bg-light rounded" onChange = {(e) => setColor(e.target.value)}/>
            </div>
            <div className="input-group mb-3">
                <label className="mx-3">Dimensions</label>
                <input type="number" className="form-control bg-light rounded" onChange = {(e) => setDimension(`${e.target.value}px`)}/>
            </div>
            <button type = 'submit' className="btn btn-outline-secondary rounded">Add</button>
        </form>

        <Cubo cubos = {dato}/>
        </>
    )
}



import { useRef } from 'react';
import './Simple.css'
export default function Simple(){
const valeur=useRef(0);
const result=useRef(0);

const saisieHandleInput=(e)=>{
    if(e.target.innerText==='C'){valeur.current.value=0
    result.current.value=0;
    }
    else if(e.target.innerText==='DEL'){
        if(valeur.current.value==''){result.current.value=0;}


        let cur=valeur.current.selectionStart
       
        valeur.current.value = valeur.current.value.substring(0, cur-1) + valeur.current.value.substring(cur);
        valeur.current.setSelectionRange(cur-1,cur-1)
        valeur.current.focus()
    }
    else if(e.target.innerText==='0' && valeur.current.value=='0'){
         }
         else if(e.target.innerText==='.' && valeur.current.value==''){
            valeur.current.value+='0.'
        }
         
    else{
        if(valeur.current.value=='0'){
            valeur.current.value=valeur.current.value.slice(0,-1) 
  
        }
    valeur.current.value+=e.target.innerText
    
  
    }
}



const calculateResult = (expression) => {
    // Replace underscores (_) with dashes (-) to make negative numbers work correctly
    expression = expression.replace(/_/g, '-');

    try {
      // Using eval to evaluate the expression
      const result = eval(expression);
      return result;
    } catch (error) {
      // If there's an error in the expression, return NaN
      return NaN;
    }
  };


const calcHandleInput=(e)=>{
   
    if(e.target.innerText=='='){
       result.current.value=calculateResult(valeur.current.value.toString())
       
       
       console.log()
    }else{
        valeur.current.value+=e.target.innerText
    }
    }



    // const getInputStyle = () => {
    //     return {
    //       backgroundColor: isFocused ? 'lightblue' : 'white',
    //       border: isFocused ? '2px solid blue' : '1px solid gray',
    //       padding: '10px',
    //       borderRadius: '5px',
    //     };
    //   };





    return(<>
    <div className="simple">
        <div className="calc">
            <h2>Calculatrice</h2>
            <div className="affichage">
            <input type="text" name="" id="" className='res' readOnly ref={result}/>
            <input type="text" name="" id="" className='saisie' ref={valeur} />
            </div>

        <div className="btns">
            <button className="btn" onClick={saisieHandleInput}>C</button>
            <button className="btn"onClick={saisieHandleInput}>DEL</button>
            <button className="btn"onClick={calcHandleInput}>%</button>
            <button className="btn"onClick={calcHandleInput}>/</button>
            <button className="btn"onClick={saisieHandleInput}>7</button>
            <button className="btn"onClick={saisieHandleInput}>8</button>
            <button className="btn"onClick={saisieHandleInput}>9</button>
            <button className="btn"onClick={calcHandleInput}>*</button>
            <button className="btn"onClick={saisieHandleInput}>4</button>
            <button className="btn"onClick={saisieHandleInput}>5</button>
            <button className="btn"onClick={saisieHandleInput}>6</button>
            <button className="btn"onClick={calcHandleInput}>-</button>
            <button className="btn"onClick={saisieHandleInput}>1</button>
            <button className="btn"onClick={saisieHandleInput}>2</button>
            <button className="btn"onClick={saisieHandleInput}>3</button>
            <button className="btn"onClick={calcHandleInput}>+</button>
            <button className="btn"onClick={saisieHandleInput}>.</button>
            <button className="btn"onClick={saisieHandleInput}>0</button>
            <button className="btn"onClick={calcHandleInput}>=</button>
        </div>
        <h3>Devloped by : EL-HATHAT</h3>
        </div>

    </div>
    </>);
}
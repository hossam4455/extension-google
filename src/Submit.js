import React from 'react';
import './App.css';
const Submit = () => {
    return (
   
        <div class="mb-3">
          <h5>Description</h5>

          <form>
            <textarea>Write Description ...</textarea>

            <button class="buttons" id="submit">
              <a  class="btn btn-success">  Submit</a>  
            </button>

          </form>
          
        </div>
       
    );
}

export default Submit;

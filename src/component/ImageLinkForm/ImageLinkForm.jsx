import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputCahnge , onSubmit}) => {
    return(
        <div >
                <p className='f3'>
                    {'This Magic will detect faces in your pictures. Git it '}
                </p>
                <div className='center'>
                    <div className='form  center pa4 br3 shadow-5'>
                 <input className='f4 pa2 w-70 center' type='tex' onChange={onInputCahnge}/>
                <button className='w-30 grow f4 link ph3 pv2 dib  bg-light-purple' onClick={onSubmit}> 
                  Detect
                </button>
                </div>
                </div>
               
        </div>
    );
}
export default ImageLinkForm;
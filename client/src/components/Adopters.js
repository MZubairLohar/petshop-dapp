import React from 'react';
import { useSelector} from 'react-redux';

const Adopters = () => {
    const adopterList = useSelector((state) =>{
        return state.adoptReducer.adopters;
    })
    return (
        <div>
            <div>
                <h2>Adopters</h2>
            </div>
            <div >
                {
                    adopterList.map((list,index)=>(
                            list!='0x0000000000000000000000000000000000000000'?<div>index = {index} {list}</div>:null    
                        
                    ))
                }
            </div>
        </div>
    )
}

export default Adopters

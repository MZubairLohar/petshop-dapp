import React from 'react';
import { useSelector } from 'react-redux';
import petlistJson from './pets.json'


const List = () => {

        const address = useSelector((state)=>{
            return state.adoptReducer.address;
        });

    return (
        <div>
            your Address : {address}
                {
                    petlistJson.map((item)=>(
                        <div key={item.id}>
                            {item.name}
                        </div>    
                    ))
                } 
        </div>
    )
}

export default List


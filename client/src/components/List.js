import React from 'react';
import { useSelector } from 'react-redux';
import petlistJson from './pets.json';
import './list.css';


const List = () => {

        const address = useSelector((state)=>{
            return state.adoptReducer.address;
        });
        const contract = useSelector((state)=>{
            return state.adoptReducer.contract;
        });

    return (
        <div >
            <div className='head'>
                <strong>your Address :</strong>  {address}
            </div>
            <div >
            {
                    petlistJson.map((item)=>(
                        <div key={item.id} className='col'>
                            <h3>{item.name}</h3>
                            <div className='pics' >
                                <img src={item.picture} alt='140x140' />
                                <br/>
                                <strong>Breed :</strong> <span>{item.breed}</span>
                                <br/>
                                <strong>Age :</strong> <span>{item.age}</span>
                                <br/>
                                <strong>Location :</strong> <span>{item.location}</span>
                                <br/>
                                <br />
                                <button onClick={async()=>{
                                    console.log('button pressed!', item.id);
                                    const result = await contract.methods.adopt(item.id).send({from: address});
                                    console.log('your adoption ',result);
                                    const getAdoptList = await contract.methods.getAdopters().call();
                                    console.log('pet adopters = ',getAdoptList);
                                }} >Adopt</button>
                                <br />
                                <br />
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List


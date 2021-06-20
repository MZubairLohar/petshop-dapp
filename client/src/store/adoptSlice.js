import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";
import Adoption from '../contracts/Adoption.json';



export const initWeb3 = createAsyncThunk(
    'InitWeb3',
    async(a, thunkApi)=>{
        console.log('this is a = ', a);
        console.log('this is thunk = ', thunkApi);
        console.log('this is thunk = ', thunkApi.dispatch);
        try {
            if(window.givenProvider);
            const web3 = await new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            const networkId = await web3.eth.net.getId();
            const network = await Adoption.networks[networkId];
            const contract = await new web3.eth.Contract(Adoption.abi, network.address);
            const addresses = await web3.eth.getAccounts();
            thunkApi.dispatch(loadAdopters({
                contract : contract,
                address : addresses[0],
            }));   
            return{
                web3,
                address : addresses[0],
                contract : contract,
            }
            
            
        } catch (error) {
            console.log('Blockchain error = ',error);
        }
    }
    );
    
    export const loadAdopters = createAsyncThunk(
        'loadAdopters',
        async(data, thunk)=>{
            const adopterList = await data.contract.methods.getAdopters().call();
            return adopterList;
        }
    );

const adoptSlice = createSlice({
    name:'AdoptSlice',
    initialState:{
        web3: null,
        contract: null,
        address:null,
        adopters: [],
    },
    reducers:{
        adopt:()=>{

        }
    },
    extraReducers:{
        [initWeb3.fulfilled]:(state, action)=>{
            // console.log('state login = ',state);
            // console.log('action log = ', action);
            state.web3 = action.payload.web3;
            state.contract = action.payload.contract;
            state.address = action.payload.address;
        },
        [loadAdopters.fulfilled]:(state, action )=>{
            state.adopters = action.payload;
        }
    }


});


export const adoptReducer = adoptSlice.reducer;
export const {adopt} = adoptSlice.actions;
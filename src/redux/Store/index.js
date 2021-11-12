import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    name: 'Apitstry',
    company: 'aptistry@gmail.com',
    email: 'aptistry@gmail.com'
}

const store = configureStore({
    preloadedState: initialState,
    reducer: state => state 
})
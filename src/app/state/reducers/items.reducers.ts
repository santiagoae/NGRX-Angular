import { createReducer, on } from '@ngrx/store';
import { loadItems, loadedItems } from '../actions/items.actions';
import { ItemsState } from '@core/models/items.state';



export const initialState:ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (state) => {
        return {...state, loading: true}
    }),
    on(loadedItems, (state, props) => {
        return {...state, items: props.items, loading: false}
    })
);
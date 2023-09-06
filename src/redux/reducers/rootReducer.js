import {combineReducers} from 'redux';
import bookingReducer from './booking';

import cartReducer from './cart';
import categoryReducer from './category';
import  countryReducer from './country';
import expertReducer from './experts';
export default combineReducers({
  cart: cartReducer,
  country:countryReducer,
  category:categoryReducer,
  expert:expertReducer,
  booking:bookingReducer
});

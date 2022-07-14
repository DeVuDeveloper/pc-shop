import basketReducer from './basketReducer';
import profileReducer from './profileReducer';
import miscReducer from './miscReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = {
  users: userReducer,
  profile: profileReducer,
  products: productReducer,
  basket: basketReducer,
  app: miscReducer,
};

export default rootReducer;

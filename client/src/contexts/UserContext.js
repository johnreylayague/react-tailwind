import { createContext } from "react";

const UserContext = createContext({
  sharedState: {},
  setSharedState: () => {},
  handleProductModal: () => {},
});

export default UserContext;

// import { createContext } from 'react';

// const UserContext = createContext({ sharedState: null, setSharedState: () => {} }); // Updated default value

// export default UserContext;

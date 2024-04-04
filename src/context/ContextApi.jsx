import PropTypes from 'prop-types';
import { createContext } from "react";

export const CreateContextApi = createContext(null)

const ContextApi = ({children}) => {
    const contextValue = {}
    return (
        <CreateContextApi.Provider value={contextValue}>
            {children}
        </CreateContextApi.Provider>
    );
};

export default ContextApi;


ContextApi.propTypes = {
    children: PropTypes.node
}
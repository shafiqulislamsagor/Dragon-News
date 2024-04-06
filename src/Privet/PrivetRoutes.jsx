import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { CreateContextApi } from '../context/ContextApi';


const PrivetRoutes = ({children}) => {
    const context = useContext(CreateContextApi)
    const {users} = context
    console.log(users);
    if(users){
        return (
            <div>{children}</div>
        )
    }
    return <Navigate to='/login'></Navigate>
};

PrivetRoutes.propTypes = {
    children:PropTypes.node
}

export default PrivetRoutes;


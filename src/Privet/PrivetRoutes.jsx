import { PropTypes } from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivetRoutes = () => {
    return <Navigate to='/register'></Navigate>
};

PrivetRoutes.propTypes = {
    children:PropTypes.node
}

export default PrivetRoutes;


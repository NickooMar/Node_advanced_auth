import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest}) => {
    
    console.log(rest)

    return (
        <Route 
            {...rest}
            render = {(props) => 
                //Vemos si el token de usuario esta en el localStorage para poder acceder a la ruta privada
                localStorage.getItem('authToken') ? (
                    <Component {...props} /> //Mostrara informacion del componente que le hayamos pasado
                ) : ( 
                    <Redirect to="/login" />
                )
            }
        />
    )
}

export default PrivateRoute

import {Navigate} from "react-router-dom"

interface PrivateRouteProps{
    condition:boolean,
    children:React.JSX.Element,
    redirectPage:string
}

export default function PrivateRoute({condition,children,redirectPage}: PrivateRouteProps){
    if(condition){
        return children
    }
    else{
        return <Navigate to={redirectPage} replace/>
    }
}
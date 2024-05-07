import  { useContext, createContext} from 'react'

 export const AuthContext = createContext<any | null>(null)



export  const useAuth = () => useContext(AuthContext)
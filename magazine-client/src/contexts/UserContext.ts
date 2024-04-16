import  { createContext} from 'react'

 const UsersContext = createContext<any | null>(null)

 const CurrentUserContext = createContext<string | null>('')


export  {UsersContext, CurrentUserContext}
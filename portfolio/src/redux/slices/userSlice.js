// //? importar dependencia (3)
// import {createSlice} from "@reduxjs/toolkit";
// //? crear un slice para cada grupo de acciones que se almacenan en reducers y exportar en una constante(4)
// export const userSlice = createSlice({
//     name:"users",
//     initialState: {
//         list:[]
//     },
//     reducers: {
//         //? se configura la action para que modifique el estado global(9)
//         setUserList: (state,action) => {
//             state.list = action.payload
//         }
//     }
// })

// //?exportamos las actions desestructurando desde las actions(10)
// export const {setUserList} = userSlice.actions

// //? exportar el reducer individual(5)
// export default userSlice.reducer

// //? crear las funciones que van a realizar acciones asincronas y que seran llamadas para despachar las actions (8) que se configuran dentro del slice(11)
// export const fetchAllUsers = () => (dispatch) => {
//     axios.get("https://regres.in/api/users?per_page=12")
//     .then((response)=> {
//         dispatch(setUserList(response.data.data))
//     })
//     }

// //?finalmente esas funciones creadas P.E. fetchAllUsers, de deben llamar donde se requieran para que se ejetuce la actions y modifique el estado global. el llamado se hace a travez de un dispatch haciendo uso de useDispatch. "dispatch(fetchAllUsers)" con esto el estado global queda cargado con la informacion necesaria pero para poder usar esa informacion se usa useSelector.

// "const {nombre de la propiedad q se quiere} = useSelector(state=>state.nombre del slice)"
// "const {list} = useSelector(state=>state.users)"
// "const cualquier_nombre = useSelector(state=>state.users.list)"

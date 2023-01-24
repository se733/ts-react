import { Usuario } from './interface/ReqResListado';
import { useUsuarios } from './hooks/useUsuarios';

export const Usuarios = () => {

   const {usuarios,cargarUsuarios} = useUsuarios()


    const renderItem = ({id, email, first_name, last_name, avatar}:Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img src={avatar} alt={first_name} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>

            </tr>
        )
    }
    
  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {
                    usuarios.map(renderItem)
                }
            </tbody>
        </table>

        <button className='btn btn-primary' onClick={cargarUsuarios}>
            Siguiente
        </button>

    </>
  )
}

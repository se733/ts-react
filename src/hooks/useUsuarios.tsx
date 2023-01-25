import { useState, useRef, useEffect } from 'react';
import { ResListado, Usuario } from '../interface/ReqResListado';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const ref = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async() => {

        const resp = await reqResApi.get<ResListado>('/users', {
            params: {
                page: ref.current
            }
        })

        if(resp.data.data.length > 0){
            setUsuarios(resp.data.data)
        } else {
        ref.current--;
            alert('No hay mas registros')
        }
        
    }
    
    const paginaSiguiente = () => {
        ref.current++;
        cargarUsuarios()
    }

    const paginaAnterior = () => {
       
        if(ref.current > 1){
            ref.current--;
            cargarUsuarios()
        } 
    }

    return {
        usuarios,paginaAnterior, paginaSiguiente
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = "http://localhost:3000";
  //inyectar el http cliente
  private http = inject(HttpClient);

  //este es controlador donde viene esto
  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+"/clientes").pipe(
      catchError(error=>{
        console.log("Error al obtener la lista de clientes. " + error);
        return of ([])
      })
    );
  }

  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/clientes/${id}`).pipe(
      map(res=>{
          return res;
      }),
      catchError(error=>{
        console.log("Error al obtener los clientes. " + error);
        return of ({} as Cliente)
      })
    );
  }

  addCliente(cliente:Cliente):Observable<boolean>{
    return this.http.post(`${this.url}/clientes`, cliente).pipe(
      map(()=>true),
      catchError(error=>{
        console.log("Error al añadir al cliente. " + error);
        return of (false)
      })
    );
  }

  updateCliente(cliente:Cliente, id:number):Observable<boolean>{
    return this.http.put(`${this.url}/clientes/${id}`, cliente).pipe(
      map(()=>true),
      catchError(error=>{
        console.log("Error al hacer update al cliente. " + error);
        return of (false)
      })
    );
  }


  //borrar cliente
  delCliente(id:number):Observable<boolean>{//va a devolver un boolean
    return this.http.delete(`${this.url}/clientes/${id}`).pipe(
      map(()=>true), //se devuelve cuando es correcto
      catchError(error=>{ //por si falla
        console.log("Error al eliminar el cliente. " + error);
        return of (false)
      })
    );
  }

  constructor() { }
}

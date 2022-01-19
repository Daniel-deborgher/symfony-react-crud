import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
 
function VoitureList() {
    const  [voitureList, setVoitureList] = useState([])
  
    useEffect(() => {
        fetchVoitureList()
    }, [])
  
    const fetchVoitureList = () => {
        axios.get('/api/voiture')
        .then(function (response) {
          setVoitureList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: "Vous ne pourrez pas faire demi-tour.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer.'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/voiture/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Voiture supprimée avec succès',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchVoitureList()
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Une erreur est survenue',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    }
  
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Gérer les voitures</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-primary"
                            to="/create">Créer une nouvelle voiture
                        </Link>
                    </div>
                    <div className="card-body">
              
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Kmh</th>
                                    <th>Caractéristiques</th>
                                    <th width="240px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {voitureList.map((voiture, key)=>{
                                    return (
                                        <tr key={key}>
                                            <td>{voiture.model}</td>
                                            <td>{voiture.kmh}</td>
                                            <td>{voiture.caracteristiques}</td>
                                            <td>
                                                <Link
                                                    to={`/show/${voiture.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Voir
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/edit/${voiture.id}`}>
                                                    Modifier
                                                </Link>
                                                <button 
                                                    onClick={()=>handleDelete(voiture.id)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Supprimer
                                                </button>
                                                <Link
                                                    to={`calcule/${voiture.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Calculer
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
  
export default VoitureList;
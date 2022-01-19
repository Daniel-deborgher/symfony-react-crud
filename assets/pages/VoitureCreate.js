import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Layout from "../components/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
  
function VoitureCreate() {
    const [model, setModel] = useState('');
    const [kmh, setKmh] = useState('')
    const [caracteristiques, setCaracteristiques] = useState('')
    const [isSaving, setIsSaving] = useState(false)
  
    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData()
        formData.append("model", model)
        formData.append("kmh", kmh)
        formData.append("caracteristiques", caracteristiques)
        axios.post('/api/voiture', formData)
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Voiture ajoutée avec succès',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
            setModel('')
            setKmh('')
            setCaracteristiques('')
          })
          .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
          });
    }
  
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Créer une nouvelle voiture</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/">Voir toutes les voitures
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="model">Model</label>
                                <input 
                                    onChange={(event)=>{setModel(event.target.value)}}
                                    value={model}
                                    type="text"
                                    className="form-control"
                                    id="model"
                                    name="model"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="kmh">Kmh</label>
                                <input 
                                    value={kmh}
                                    onChange={(event)=>{setKmh(event.target.value)}}
                                    className="form-control"
                                    id="kmh"
                                    rows="3"
                                    name="kmh"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="caracteristiques">Caractéristiques</label>
                                <textarea 
                                    value={caracteristiques}
                                    onChange={(event)=>{setCaracteristiques(event.target.value)}}
                                    className="form-control"
                                    id="caracteristiques"
                                    rows="6"
                                    name="caracteristiques"></textarea>
                            </div>
                            <button 
                                disabled={isSaving}
                                onClick={handleSave} 
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Sauvegarder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
  
export default VoitureCreate;
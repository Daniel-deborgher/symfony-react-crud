import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout"
import axios from 'axios';
  

function VoitureCalcule() {
    const [id, setId] = useState(useParams().id)
    const [voiture, setVoiture] = useState({model:'', kmh:''})
    
    useEffect(() => {
        axios.get(`/api/voiture/${id}`)
        .then(function (response) {
          setVoiture(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
    return (
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Voiture</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/">Toutes les voitures
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Model:</b>
                        <p>{voiture.model}</p>
                        <b className="text-muted">Kmh:</b>
                        <p>{voiture.kmh}</p>
                    </div>
                    <div className="form-group">
                                <label htmlFor="model">Distance</label>
                                <input 
                                    value={this.state.myInputValue}
                                    onChange={e => this.setState({myInputValue: e.target.value})}
                                    type="text"
                                    className="form-control"
                                    id="distance"
                                    name="distance"/>
                            </div>
                            <p>Votre voiture {voiture.model} mettra avec {voiture.kmh}km/h</p> 
                            
                </div>
            </div>
        </Layout>
    );
}
  
export default VoitureCalcule;
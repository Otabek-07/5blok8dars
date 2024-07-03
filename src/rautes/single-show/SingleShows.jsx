import { useEffect , useState } from "react";
import { useParams } from "react-router-dom" 
import axios from "../../api";
import './SingleShows.css'

const SingleShows = () => {
    const data = useParams();
    console.log(data.id)
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        axios.get(`/shows/${data.id}`)
            .then((res) => setPictures(res.data))
            .catch((err) => console.log(err))
    }, [])

    console.log(pictures)
  return (
    <div className="show-container">
        <div className="show-wrapper">
            <div className="show">
                <div className="showImage">
                <img src={pictures.image?.original} alt="" />
                </div>
                <div className="showContent">
                    <h1>{pictures.id}</h1>
                    <strong>{pictures.name}</strong>
                    <span>{pictures.summary}</span>
                    <h5>{pictures.genres}</h5>
                    <p>{pictures.status}</p>
                    <p>{pictures.runtime}</p>
                    <p>{pictures.language}</p>
                    <a href={pictures.officialSite}>{pictures.officialSite}</a>
                </div>
            </div>

        </div>        
    </div>
  )
}

export default SingleShows
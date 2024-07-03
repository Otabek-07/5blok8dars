import { Fragment, useEffect, useState } from "react" 
import axios from "../../api";
import { Link } from "react-router-dom";
import './Shows.css'

const Shows = () => {

    const[shows, setShows] = useState([])
    const [ corrent, setCorrent ] = useState(10)
    useEffect(() => {
        axios.get("/shows")
            .then((res) => setShows(res.data))
            .catch((err) => console.log(err))
    }, [])

    const addShow = () => {
        setCorrent(corrent + 5)
    }
  return (
    <div className="wrapper">
        <div className="shows">
        {
            shows.slice(0, corrent).map((show) => 
                <Fragment key={show.id}>
                    <div className="showCards">
                        <img className="show__img" src={show.image?.original} alt="" />
                        <Link className="show__card" to={`/single-show/${show.id}`} key={show.id}>{show.name}</Link>
                    </div>
                </Fragment>
            )
        }
    </div>
    <div className="addBtn">
        <button onClick={addShow}>View All</button>
    </div>
    </div>
  )
}

export default Shows
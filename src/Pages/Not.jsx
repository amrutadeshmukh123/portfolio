import { useNavigate } from "react-router-dom"
import './Not.css';


export default function NotFoundComp() {

    const navigate = useNavigate()

    const goToHome = () => {
      navigate('/')
    }

    return (
      <>
        <div className='not-found-container'>
          <p>404 Page is not found.</p>
          <p>Click here to visit homepage !</p>
          <button onClick={goToHome}>Homepage</button>
        </div>
      </>
    )
  }
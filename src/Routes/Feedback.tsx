import{useEffect} from 'react'

const Feedback = () => {
  useEffect(()=>{
    document.title="Feedback"
  },[])
  return (
    <div>Feedback</div>
  )
}

export default Feedback
import React, { useEffect } from 'react'

const styles = {
  home:{
    margin:0,
    padding:'20px',
    color:'aliceblue',
    background:'-webkit-linear-gradient(110deg, rgb(59 117 253) 34%, rgb(82 82 82) 34%)',
    minHeight:'50vh',
    // transform:'skew(-5deg)'
  }
}
const HomePage = () => {
    useEffect(()=>{
        document.title='Computational math Roadmap | Home'
    },[])
    // useEffect(()=>{
    //   window.scrollTo(0,0);
    // })
  return (
    <>
    <section id='home' style={styles.home}>
      <h1>Hello world</h1>
    </section>
    </>
  )
}

export default HomePage
import './Presentation.css'

export const Presentation = () => {
  return (
    <>
        <div className='container-flex'>
            <div className='container-flex--description'>
                <h2>Hi, i’m <span className='subrayado'>Tomas Neufel.</span></h2>
                <h3>Systems engineerig student.<br />22 ages.<br />Argentina, Mendoza.</h3>
                <div className='container-buttons'>
                    <button><a href="https://www.linkedin.com/in/tomás-neufel-195688256/"><img src="src\assets\linkdn.svg" alt="icono-likdn"/></a></button>
                    <button><a href=""><img src="src\assets\github.svg" alt="github-icon" /></a></button>
                    <button><img src="src\assets\gmail.svg" alt="gmail-icon" /></button>
                </div>
            </div>
            <div className='container-flex--picture'>
                <div className='circle-pink'></div>
                <img src="src\assets\IMG_4166.jpg" alt="profile picture" />
            </div>
        </div>
    </>
  )
}

import './Technologies.css'

const Technologies = () => {
  return (
    <section>
      <div className='technologies-body'>
        <div className='container-flex-title-left'>
          <h2 className='title'><span className='subrayado-rosa'>Tech</span>nologies</h2>
        </div>

        <div className='container-grid-technologies'>
          <div className='grid-item grid-item-large'>
            <div>
              <h2 className='subtitle'>Frontend</h2>
              
              <div className='flex-container'>
                <img src="src\assets\css.svg" alt="" className='img-tech'/>
                <img src="src\assets\JS.svg" alt="" className='img-tech' />
                <img src="src\assets\react.svg" alt="" className='img-tech' />
              </div>
            </div>

            <div>
              <h2 className='subtitle'>Maquetacion</h2>
              <div className='flex-container'>
                <img src="src\assets\figma.svg" alt="" className='img-tech'/>
                <img src="src\assets\adobeIllustrator.svg" alt="" className='img-tech' />
              </div> 
            </div>

          </div>

          <div className='grid-item'>
            <div>
              <h2 className='subtitle'>Backend</h2>
              <div className='flex-container'>
                <img src="src\assets\java.svg" alt="" className='img-tech'/>
              </div>
            </div>
          </div>
          <div className='grid-item'>
          <div>
              <h2 className='subtitle'>Databases</h2>
              <div className='flex-container'>
                <img src="src\assets\mysql.svg" alt="" className='img-tech'/>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div>
                <h2 className='subtitle'>Version Control</h2>
                <div className='flex-container'>
                  <img src="src\assets\git.svg" alt="" className='img-tech'/>
                  <img src="src\assets\github.svg" alt="" className='img-tech'/>
                </div>
              </div>
          </div>
          <div className='grid-item'>
          <div>
                <h2 className='subtitle'>UML</h2>
                <div className='flex-container'>
                  <img src="src\assets\enterprise.svg" alt="" className='img-tech'/>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies

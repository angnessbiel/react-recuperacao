export default function Galeria(){
    return(
      <><div className="linha1">
        <li><div className="galeria">
          <img src="cabana.jpg" alt="" />
          <h3>A cabana</h3>
          <h3>2007</h3>
        </div></li>

        <li><div className="galeria">
          <img src="harry.jpg" alt="" />
          <h3>Harry Potter e a Pedra Filosofal</h3>
          <h3>1997</h3>
        </div></li>

        <li><div className="galeria">
          <img src="menino.jpg" alt="" />
          <h3>O menino do pijama listrado</h3>
          <h3>2006</h3>
        </div></li>
      </div><div className="linha2">
          <li>
            <div className="galeria">
              <img src="romeu.jpg" alt="" />
              <h3>Romeu e Julieta</h3>
              <h3>1996</h3>
            </div></li>

          <li><div className="galeria">
            <img src="senhor.jpg" alt="" />
            <h3>O Senhor dos Anéis</h3>
            <h3>1954</h3>
          </div></li>

          <li><div className="galeria">
            <img src="sherlock.jpg" alt="" />
            <h3>Um estudo em vermelho</h3>
            <h3>1933</h3>
          </div></li>
        </div></>
        
     
  )
}
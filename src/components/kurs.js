import React from 'react'

class Kurs extends React.Component {

  state = {
    listaKursow: ['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']
  }
  
  zapiszNaKurs() {
    let imie = document.getElementById('imie').value;
    let kurs = document.getElementById('kurs').value;
    let kursText = 'Nieprawidłowy numer kursu';

    if (Number.parseInt(kurs)) {
      if (kurs > 0 && kurs < 4) {
        kursText = this.state.listaKursow[kurs - 1];
      }
    } 

    console.log('Imie: ', imie);
    console.log('Numer kursu: ', kursText);
  }

  render() {
    const listaKursow = this.state.listaKursow

    return (
        <div>
          <h2>Liczba kursów: {listaKursow.length}</h2>

          <ol>
            {listaKursow.map(kurs => {
              return <li key={kurs}>{kurs}</li>
            })}  
          </ol>

          <form>
            <div className="form-group">
            <label htmlFor="imie">Imię i nazwisko:</label>
            <input type="text" className="form-control" name="imie" id="imie"/>

            <label htmlFor="kurs">Numer kursu:</label>
            <input type="text" className="form-control" name="kurs" id="kurs"/>

            <button type="button" className="btn btn-primary" onClick={() => this.zapiszNaKurs()}>Zapisz do kursu</button>
            </div>
          </form>
        </div>
    )
  }
}

export default Kurs
import React from "react";

function CreateGame() {

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="playerNum">Number of Players</label>
          <input type="number" className="form-control playerNum" placeholder="" />
        </div>
        <div className="form-group">
          <label for="mafiaNum">Number of Mafia</label>
          <select className="form-control" id="mafiaNum">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-check">
          <label for="form-check">Additional Roles</label><br />
            <input className="form-check-input" type="checkbox" value="" id="detectiveCheck" />
            <label className="form-check-label" for="detectiveCheck">
              Detective
        </label>
      </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="medicCheck" />
            <label className="form-check-label" for="medicCheck">
              Medic
        </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="cupidCheck" />
            <label className="form-check-label" for="cupidCheck">
              Cupid
        </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="tannerCheck" />
            <label className="form-check-label" for="tannerCheck">
              Tanner
        </label>
          </div>

          <br />
          <button id="goMafia" className="btn btn-success">Go!</button>
    </form>
                  </div>
      )
}

export default CreateGame
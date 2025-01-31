import "bootstrap/dist/css/bootstrap.css";
import "./formMine.css"
import React, { useRef, useState } from "react";
import FormAdult from "./formunden/formAdult";
import FormJungen from "./formunden/formJungen";
import FormOld from "./formunden/formOld";
function FormMine() {
  var Name = useRef();
  var SurName = useRef();
  var DateUsed = useRef();
  var WichKurs = useRef();
  const [WichOneForm, setForm] = useState();
  function zapisz() {

    var yearOfDate = new Date(DateUsed.current.valueAsNumber)
    var NowDate = new Date().getFullYear()
    var yearsOld = NowDate - yearOfDate.getFullYear()
    if(yearsOld<18 && yearsOld>0)
    {
      setForm(<FormJungen ref={WichKurs} onClickPass={zapiszDoKursu}/>)
    }
    else if(yearsOld>=18 && yearsOld<40)
    {
      setForm(<FormAdult ref={WichKurs} onClickPass={zapiszDoKursu}/>)
    }
    else if(yearsOld>=40 && yearsOld<100)
    {
      setForm(<FormOld ref={WichKurs} onClickPass={zapiszDoSanatorium}/>)
    }
    else if(yearsOld>100)
    {
      alert("Nie no, ty to nie istniejesz. Za stary jesteś")
    }
    else if(yearsOld<=0)
    {
      alert("Nie no, ty to nie istniejesz. Za młody jesteś. Jakim cudem ty tutaj jesteś?")
    }
  }
  function zapiszDoKursu() {
    console.log(WichKurs.current.value)
    alert("Pomyślnie zapisano do "+ WichKurs.current.value+" użytkownika "+Name.current.value+" "+SurName.current.value)
  }
  function zapiszDoSanatorium() {
    console.log(WichKurs.current.value)
  }
  return (
    <div class="mb-3">
      <form className="form-inline">
        <div className="row g-3 align-items-center">
          <label htmlFor="exampleInputEmail1" className="col-auto">Imie:</label>
          <input class="form-control" ref={Name} className="col-auto" />
        </div>
        <div className="row g-3 align-items-center">
          <label for="exampleInputEmail1" className="col-auto">Nazwisko:</label>
          <input class="form-control" ref={SurName} className="col-auto" />
        </div>
        <div className="row g-3 align-items-center">
          <label for="exampleInputEmail1" className="col-auto">Nazwisko:</label>
          <input class="form-control" ref={DateUsed} className="col-auto" type="date" />
        </div>
        <input type='button' class="btn btn-primary" value={"Zgłoś się do kursu"} onClick={zapisz} />
      </form>
      {WichOneForm}
    </div>
  );
}
export default FormMine;

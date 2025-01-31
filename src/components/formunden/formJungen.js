import { forwardRef } from "react";

const FormJungen = forwardRef(function(props,ref) {
    return (
        <div className="row g-3 align-items-center">
            <label for="exampleInputEmail1" className="col-auto">Wybierz kurs</label>
            <select className=" col-auto" ref={ref}>
                <option>Angielski</option>
                <option>Hiszpański</option>
                <option>Francuski</option>
            </select>
            <input type="button" value="Zapisz się" className="btn btn-primary" onClick={props.onClickPass}/>
        </div>
    )
})
export default FormJungen;
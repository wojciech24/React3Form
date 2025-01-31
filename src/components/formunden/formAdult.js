import { forwardRef } from "react";

const FormAdult = forwardRef(function(props,ref) {
    return (
        <div className="row g-3 align-items-center">
            <label for="exampleInputEmail1" className="col-auto">Wybierz kurs</label>
            <select className=" col-auto" ref={ref}>
                <option>React</option>
                <option>Angluar</option>
                <option>Android studio</option>
            </select>
            <input type="button" value="Zapisz się" className="btn btn-primary" onClick={props.onClickPass}/>
        </div>
    )
})
export default FormAdult;
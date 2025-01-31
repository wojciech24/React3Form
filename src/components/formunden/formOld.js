import { forwardRef } from "react"

const FormOld = forwardRef(function(props,ref) {
    return (
        <div class="row g-3 align-items-center">
            <label for="exampleInputEmail1" className="col-auto">Wybierz kurs</label>
            <div className="row g-3 align-items-center col-auto" >
                <input type="radio" ref={ref} value={"Sanatorium Kołobrzeg"} className="col-auto twojeRadio" name="Sanatorium" />
                <label className="col-auto">Sanatorium Kołobrzeg</label>
            </div>
            <div className="row g-3 align-items-center col-auto">
                <input type="radio" ref={ref} value={"Sanatorium Cichocinek"} className="col-auto twojeRadio" name="Sanatorium" />
                <label className="col-auto">Sanatorium Cichocinek</label>
            </div>
            <input type="button" value="Zapisz się" className="btn btn-primary col-auto" onClick={props.onClickPass}/>
        </div>
    )
})
export default FormOld
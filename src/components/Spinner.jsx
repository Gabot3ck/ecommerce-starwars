import "./Spinner.css"

export default function Spinner() {
    return (<>
        <div className="wrapper_spinner d-flex justify-content-center align-items-center">
        <div className="spinner-border text-warning " role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <span className="text-warning mt-3">Loading...</span>
    </div>
    </>)
}

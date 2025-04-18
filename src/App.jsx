import './app.css'
function App({emprecords}) {
  const employeeDetail= [];
  emprecords.slice(0,11).forEach(emp => {
    employeeDetail.push(
      <div style={{border:"4px solid black",margin:"10px",padding:"10px"}}>
        <img src={emp.URL} alt="" />
        <div>{emp.Name}</div>
        <img src={URL} alt="" />
        <div>{emp.Age}</div>
        <div>{emp.Position}</div>
        <a href={emp.URL}><button>Linkedin</button></a>
      </div>
    )
  });
  return <h1>{employeeDetail}</h1>

}



export default App;



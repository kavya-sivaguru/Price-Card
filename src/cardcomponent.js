
import './style.css'



export default function Card(props){
    return (
      <div className="col-lg-4">
            
            <div className="card mb-5 mb-lg-0">
              
              <div className="card-body">
                
                <h5 className="card-title text-muted text-uppercase text-center">{props.data.cardtier}</h5>
                
                <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
                
                <hr></hr>
                
                <ul className="fa-ul">
                  
                  {props.data.offers.map((obj)=>{
                  
                  return <li className={obj.isEnabled ? "" : "text-muted"}><span className="fa-li"><i className={`fas ${obj.isEnabled ? "fa-check"  : "fa-times"}`}></i></span>{obj.name}</li>
                })}

                </ul>
                <a href="#" class="btn btn-block btn-danger text-uppercase">Button</a>
                </div>
                </div>
                </div>
            
    )
}
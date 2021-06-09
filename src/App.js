import './App.css';
import Card from "./cardcomponent";
import "./style.css";


function App(){
  let details = [
    {
      cardtier: 'Free',
      price       : '$0',
      offers      : [
        {
          name         : 'Single User',
          isEnabled    : true
        },
        {
          name         : '5GB Storage',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Public Projects',
          isEnabled    : true
        },
        {
          name         : 'Community Access',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Private Projects',
          isEnabled    : false
        },
        {
          name         : 'Dedicated Phone Support',
          isEnabled    : false
        },
        {
          name         : 'Free Subdomain',
          isEnabled    : false
        },
        {
          name         : 'Monthly Status Reports',
          isEnabled    : false
        },
      ]
    },
    {
      cardtier    : 'Plus',
      price       : '$9',
      offers      : [
        {
          name         : '5 Users',
          isEnabled    : true
        },
        {
          name         : '50GB Storage',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Public Projects',
          isEnabled    : true
        },
        {
          name         : 'Community Access',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Private Projects',
          isEnabled    : true
        },
        {
          name         : 'Dedicated Phone Support',
          isEnabled    : true
        },
        {
          name         : 'Free Subdomain',
          isEnabled    : true
        },
        {
          name         : 'Monthly Status Reports',
          isEnabled    : false
        },
      ]
    },
    {
      cardtier    : 'Pro',
      price       : '$49',
      offers      : [
        {
          name         : 'Unlimited Users',
          isEnabled    : true
        },
        {
          name         : '150GB Storage',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Public Projects',
          isEnabled    : true
        },
        {
          name         : 'Community Access',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Private Projects',
          isEnabled    : true
        },
        {
          name         : 'Dedicated Phone Support',
          isEnabled    : true
        },
        {
          name         : 'Unlimited Subdomains',
          isEnabled    : true
        },
        {
          name         : 'Monthly Status Reports',
          isEnabled    : true
        },
      ]
    }
  ] 
  
      
  return <section class="pricing py-5">
           <div className="container">
              <div className="row">
                {
                  details.map((obj) => {
                    return <Card data={obj}></Card>
                  })
                }
              </div>
           </div>
      </section>
}

export default App;
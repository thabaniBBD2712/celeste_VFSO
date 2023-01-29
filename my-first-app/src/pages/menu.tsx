import React from 'react';
import '../css/menu.css'

export function menu(){
    return (
        <body>
        <nav>Testing Menu</nav>
        <section>
         <p className="main-paragraph">Glazed oysters with zucchini pearls and sevruga caviar</p>
         <p className="sub-paragraph">Wine pairing: kleine zalze brut rose</p>
         <p className="main-paragraph">Seared anhi tuna with provincial vegetables and tapenade croutons</p>
         <p className="sub-paragraph">Wine pairing: bizoe semillon</p>
         <p className="main-paragraph">Bream with asparagus, tempura mussels and a lime velouté</p>
         <p className="sub-paragraph">Wine pairing:  red city blend</p>
         <p className="main-paragraph">Aged gouda with espresso, hazelnut and onion</p>
         <p className="sub-paragraph">Wine pairing: thelema early harvest</p>
         <p className="main-paragraph">Dark chocolate panna cotta with a rhubarb and cherry compote</p>
         <p className="sub-paragraph">Wine pairing: clarington sauvignon blanc</p>
        </section>
        <footer>
         <div className="order-selector">
             <button
               className="wrapper-btn"
               //onClick={}
             >
               -
             </button>
             <div className="order-count">0</div>
             <button
               className="wrapper-btn"
              // onClick={this.incrementCounter.bind(this)}
             >
               +
             </button>
           </div>
     
         <p className="nop-tittle">Number of Persons</p>
         <p className="per-person">R100 per person</p>
         <button>Add to Order</button>
        </footer>
        </body>
    )
}
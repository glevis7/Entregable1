
import React from 'react'




const FortuneCard = (props) => {
    
    

   const data =props.data

    return(
            <article className="fortuneCard" >
            
                <div>
                    <blockquote>{props.data.phrase}</blockquote>
                    <p> {props.data.author}</p>
                </div>

            
            </article>
        
    
        
    );
};


export default FortuneCard;
import type { ReactElement } from "react"
import  './card.css'

type CardProps = {
    children:ReactElement

}
const Card = ({children}:CardProps)=>{

    return(<div className="card-container">
        {children}
    </div>)
}

export {Card}
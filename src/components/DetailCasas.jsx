import React from "react"
import { useParams } from "react-router-dom"


const DetailCasas = () => {

const params = useParams()


  return (
    <div>
       <p>ID: {params.id}</p>
      <p>Settlement: {params.settlement}</p>
    </div>
  )
}

export default DetailCasas

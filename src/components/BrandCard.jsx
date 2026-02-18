import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { brands } from "../data/brands"
import { useState } from "react"
import { use } from "react"
const BrandCard = ({brand}) => {
const navigate = use()


  if (!brand) return  null
  return (
    < >
<div className="border rounded-1g shadow hover:shadow-1g transition
">
  <img src={brand.image} alt={brand.name} className='w-full h-48 object-cover rounded-t'/>
  <div className="p-4">
    <h3 className='text-1g font-semibold'>{brand.name}</h3>
    <p className='text-green-600 font-bold'>KES {brand.price}</p>
  {/*LINK TO ORDER PAGE */}
  <Link to={`/Order/${brand.id}`}
  className="block text-center mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Order Now</Link>
  </div>
  </div>    

    </>
  )
}

export default BrandCard

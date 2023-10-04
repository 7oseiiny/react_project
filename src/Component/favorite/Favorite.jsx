import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchfavorite } from '../../../store/Slice/favorite'
// import { fetchfavorite } from '../../../store/Slice/favorite'

export default function Favorite() {
    // var dispatch=useDispatch()
    // var favorite =useSelector((state)=>{return state.favorite.data})
    // useEffect( () => {
    //      dispatch( fetchfavorite())
    //   }, [dispatch])
    
    let favoriteSlice
    return (
        <>
            <div className=" d-flex row w-auto p-3 cart  container-fluid " style={{ backgroundColor: "rgb(234,237,237)" }}>
                <div className="p-2 col-sm-12 col-lg-12">
                    <div className="cart-left-side p-3   " style={{ backgroundColor: "white" }}>
                        <h2>Your Favorite</h2>
                        <hr />
                        {
                            favorite.map((item) => {
                                return<>{item.title_en}</>
                                // return <Product item={item} />

                                
                            })
                        }
                    </div>
                </div>


            </div>

        </>
    )
}

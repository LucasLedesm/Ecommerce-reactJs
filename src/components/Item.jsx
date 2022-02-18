import React from 'react'
import ItemCount from './ItemCount';


const Item = ({ id, title, stock, img, price }) => {
    return (
        <div className="container">
            <div className="col">
                <div className="card shadow-sm">
                    <h1>{title}</h1>
                    <img src={img} alt="ilustracion" />
                    <div className="card-body">
                        <h3>${price}</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sed deserunt exercitationem illum distinctio hic qui optio debitis ea magni voluptates eaque earum numquam iusto veniam modi mollitia commodi iste voluptatum, deleniti autem dolorum harum eos nam. Cupiditate nulla error minus optio?</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="btn-group">
                                <ItemCount stock={stock} initial={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
console.log(Item);
export default Item
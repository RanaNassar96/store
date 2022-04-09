import React , { useState  } from 'react';

import './IncomingOrder.css'

const IncomingOrder = ({item , editable , listEditIncome , setListEditIncome }) => {



    const [ check , setCheck ] = useState(false);


    const handleChange = (e) => {

        setCheck(true);

        const inputVal = e.target.value.trim().length === 0  ?  0 : parseInt(e.target.value) ;

        let x = listEditIncome.length === 0 ? null : listEditIncome.find( list => list.id == item.id ) ;

        x ? 
            setListEditIncome(
                listEditIncome.map( 
                    list => {
                        if(list.id == item.id){
                            let updateItem =list;
                            updateItem.quantity = inputVal
                            return updateItem;
                        }else return list
                    }
                )
            ) : setListEditIncome( [ ...listEditIncome , {id: item.id , quantity:inputVal}] )
    }
    return (
        <div className="pre-order-box">
            <div className="img-box">
                <img src={item.img} alt={item.title} className="img-fluid" />
            </div>
            <div className="text-box">
                <p className="box-p"> {item.title} </p>
                { 
                check && !editable ? 
                    <p className="box-hint"> تم تعديل الكمية </p>
                : 
                    null
                }
            </div>
            <div className="count-box"> 
                {
                editable ? 
                    <div className= {check ? "edit-count" : ""}>
                        <input type="number" className="input-count" defaultValue={item.quantity} onChange={handleChange}  /> 
                    </div>
                : 
                    <p className="count-p"> {item.quantity} </p> 
                }
            </div>
        </div>
    );
};

export default IncomingOrder;
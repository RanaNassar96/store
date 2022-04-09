import React , { useEffect , useState , useContext  } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import { Link  } from "react-router-dom";
import Products from '../../components/products/Products'
import Tags from '../../components/tags/Tags'
import Form from '../../components/forms/Form'
import IncomingOrders from '../../components/incomingOrders/IncomingOrders'
import edit from '../../assets/img/edit.svg'
import { get_products , search_products } from '../../actions/productsActions'
import { get_incoming , edit_incoming  } from '../../actions/incomingActions'
import { Context } from '../../context'
import back from '../../assets/img/back.svg'
import dish from '../../assets/img/dish.svg'
import funnel from '../../assets/img/funnel.svg'
import './PreOrders.css'


const PreOrders = () => {

    const { products , incoming } = useSelector((state) => state);

    const dispatch = useDispatch()

    const [ search , setSearch ] = useState([]);

    const [ editable , setEditable ] = useState(false);

    const [ listEditIncome , setListEditIncome ] = useState([]);

    const { open } = useContext(Context);




    useEffect( () => {



        const fetchProducts = async () => {
            try {
    
                await fetch('api/products.json')
                .then(function(response){
                    return response.json();
                }).then(function(myJson) {
                    dispatch( get_products( myJson) );
                    if(search.length !== 0) {
                        let searchArr = search.map( el => el.name.toLowerCase());
                        dispatch( search_products(searchArr) )
                    }
                });
    
                
            } catch (error) {
                
            }
        }
        
        fetchProducts();


        const fetchIncoming = async () => {
            try {
    
                await fetch('api/incoming.json')
                .then(function(response){
                    return response.json();
                }).then(function(myJson) {
                    dispatch( get_incoming( myJson) );
                });
    
                
            } catch (error) {
                
            }
        }
        
        fetchIncoming();

        

    } , [search]);

    const handleSubmitSearch = (searchInput) =>{
        let searchObj = {
            id: search.length + 1 , 
            name: searchInput
        }
        setSearch([...search, searchObj]);
    }

    const deleteSearch =  id  => {
        setSearch([...search].filter( el => id !== el.id ));
    }

    const listEditIncomeHandler = () => {
        dispatch( edit_incoming(listEditIncome) )
    }
    


    return (
        <div>
            <div className="title-section">
                <div className="title-after">
                <h3 className="box-h"> كل الطلبات المسبقة </h3>
                <span className="back-span">
                    <Link  to="/">
                        <img src={back} alt="back" className="img-fluid" />
                    </Link >
                </span>
                </div>
            </div>
            <div className="pre-content">
                <div className="main-content">
                    <div className="content-section">
            
                        <div className="product-search">
                            <div className="container">
                                <div className="main-search-box">
                                    <div className="search-box">
                                        <div className="search-icon">
                                            <img src={dish} alt="dish" className="img-fluid" />
                                        </div>
                                        <Form 
                                            title="بحث"
                                            handleSubmitSearch={handleSubmitSearch}  />
                                    </div>
                                    <div className="filter-box">
                                        <img src={funnel} alt="funnel" className="img-fluid" />
                                    </div>
                                </div>
                                <Tags 
                                    items={search} 
                                    deleteSearch={deleteSearch}
                                />
                            </div>
                        </div>
            
                        
                        <Products items={products} />
                    </div>
                    <div className={`aside-section pre-order-aside ${open ? "open-menu" : ""}`}>
                        <div className="aside-top-box-pre">
                            <h5 className="pre-heading">
                                الطلبات الحالية
                            </h5>
                        </div>
                        <div className="result-aside">
                            <div className="result-box">
                                <div className="up-heading-box">
                                    <p className="box-p"> ملخص الطلبات الواردة </p>
                                    {editable ? (
                                        <p className="sm-btn sec-green-btn" onClick={ () => {
                                            setEditable(false);
                                            listEditIncomeHandler()
                                        }}>
                                            حفظ
                                        </p>
                                    ) : (
                                        <p className="sm-btn yellow-btn" onClick={ () => setEditable(true)}>
                                            <img src={edit} alt="edit" className="img-fluid" />
                                            تعديل
                                        </p>
                                    )}
                                </div>
                                <IncomingOrders 
                                    items={incoming} 
                                    editable={editable} 
                                    listEditIncome= {listEditIncome}
                                    setListEditIncome={setListEditIncome}
                                />
                            </div>
                            <div className="summary-box">
                                <div className="single-summary">
                                    <p className="sec-box-h"> عدد الطلبات </p>
                                    <p className="bold-box-p"> 30 </p>
                                </div>
                                <div className="single-summary">
                                    <p className="sec-box-h"> المجموع  </p>
                                    <p className="total-box-p">  22.50  <span> ريال </span> </p>
                                </div>
                                <div className="summary-btn-box">
                                    <div className="double-box">
                                        <button className="summary-btn green-btn">
                                            قبول الطلبات
                                        </button>
                                        <button className="summary-btn red-btn">
                                            رفض الطلبات
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreOrders;
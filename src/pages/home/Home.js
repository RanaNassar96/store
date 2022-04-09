import React , { useEffect , useState , useContext  } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'
import Form from '../../components/forms/Form'
import Users from '../../components/users/Users'
import { get_products , filter_products } from '../../actions/productsActions'
import { get_users , search_users , delete_users , delete_users_orders } from '../../actions/usersActions'
import { Context } from '../../context'
import searchByNumber from '../../assets/img/searchByNumber.svg'
import notRegistered from '../../assets/img/notRegistered.svg'
import './Home.css'


const Home = () => {

    const { products , users } = useSelector((state) => state);

    const dispatch = useDispatch();

    const [ categories , setCategories ] = useState([]);

    const [activeCategory, setActiveCategory] = useState(-1);

    const [searchUserText, setSearchUserText] = useState('');

    const { open } = useContext(Context);

    const categoryHandler =  id => {
        setActiveCategory(id);
    }

    const handleSubmitSearch =  searchInput =>{
        setSearchUserText(searchInput);
    }

    const handleDelUser = (id) =>{
        dispatch(delete_users(id))
    }
    const handleDelUserOrder = ( id , userId) =>{
        dispatch(delete_users_orders(id , userId))
    }
    

    useEffect( () => {


        const fetchCategories = async () => {
            try {

                await fetch('api/categories.json').then(function(response){
                    return response.json();
                }).then(function(myJson) {
                    setCategories(myJson)
                });

                
            } catch (error) {
                
            }
        }
        fetchCategories();

        const fetchProducts = async () => {
            try {
    
                await fetch('api/products.json')
                .then(function(response){
                    return response.json();
                }).then(function(myJson) {
                    dispatch( get_products( myJson) );
                    fetchFilterProducts();
                });
    
                
            } catch (error) {
                
            }
        }
        
        fetchProducts();
        
        const fetchFilterProducts = () => {

            if(activeCategory !== -1){
                dispatch(filter_products(activeCategory));
            }
    
        }

        const fetchUsers = async () => {
            try {
    
                await fetch('api/users.json').then(function(response){
                    return response.json();
                }).then(function(myJson) {
                    dispatch(get_users(myJson))
                    dispatch(search_users(searchUserText));
                });
    
                
            } catch (error) {
                
            }
        }
        if(searchUserText && searchUserText.length !== 0 ){
            fetchUsers();
        }

        
        
    } , [activeCategory , searchUserText , open]);

    
   
    return (
        <div className="main-content">
            <div className="content-section">
                <Categories 
                    items={categories} 
                    categoryHandler={categoryHandler} 
                    activeCategory={activeCategory}
                />
                <Products items={products} />
            </div>
            <div className={`aside-section ${open ? "open-menu" : ""}`}> 
                <div className="aside-top-box">
                    <div className="aside-search">
                    <Form 
                        title="اسم الطالب"
                        handleSubmitSearch={handleSubmitSearch}  />
                    </div>
                    <span className="search-span yellow-search">
                        <img src={searchByNumber} alt="search" className="img-fluid" /> 
                    </span>
                    <span className="search-span blue-search">
                        <img src={notRegistered} alt="search" className="img-fluid" /> 
                    </span>
                </div>
                { !searchUserText && searchUserText.length === 0 ? (
                    <Empty title="يجب البحث عن طالب اولا" />
                ) : (
                    users && users.length !== 0 ? (
                        <div className="result-aside">
                            <div className="result-box">
                                <Users items={users} handleDelUser={handleDelUser} handleDelUserOrder={handleDelUserOrder} />
                            </div>
                            <div className="summary-box">
                                <div className="single-summary">
                                    <p className="box-h"> الملاحظات </p>
                                    <p className="box-p"> يفضل تاريخ صلاحية حديث </p>
                                </div>
                                <div className="single-summary">
                                    <p className="box-h"> عمولة التطبيق </p>
                                    <p className="sec-box-p">  2.50  <span> ريال </span> </p>
                                </div>
                                <div className="single-summary">
                                    <p className="sec-box-h"> المجموع  </p>
                                    <p className="total-box-p">  22.50  <span> ريال </span> </p>
                                </div>
                                <div className="summary-btn-box">
                                    <button className="summary-btn green-btn">
                                        شراء
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Empty title="لا يوجد طالب بهذا الاسم " />
                    )
                ) }
            </div>
        </div>
    );
};

export default Home;
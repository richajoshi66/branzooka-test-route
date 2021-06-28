import React, {useEffect, useState} from 'react';
import Layout from "../MyLayout";
import {Link, useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import ProductItems from "./productItems";
import CategoryItems from "./CategoryItems";
import BrandItems from "./BrandItems";
import ColorItems from "./ColorItems";
import Slider from '@material-ui/core/Slider';
import makeStyles from "@material-ui/core/styles/makeStyles";
import authHeader from "../../services/auth-header";

function valuetext(value) {
    return `${value}°C`;
}
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function Products() {
    const classes = useStyles();
    let query = useQuery();
    let history = useHistory();
    const [value, setValue] = React.useState([0, 5000]);
    const [allProducts, setAllProduct] = useState([]);
    const [categoryLists, setCategoryLists] = useState([]);
    const [brandLists, setBrandLists] = useState([]);
    const [colorLists, setColorLists] = useState([]);
    const [brandArray, setBrandArray] = useState([]);
    const [categoryArray, setCategoryArray] = useState([]);
    const [colorArray, setColorArray] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    let [colorFilter, setColorFilter] = useState('');
    let [priceFilter, setPriceFilter] = useState('');
    let [sortFilter, setSortFilter] = useState('');
    let [totalPage, setTotalPage] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        if (query.get("search")) {
            searchProduct(query.get("search"))
        } else {
            callAPI();
        }
    }, []);
    /**
     * Product List
     * */
    const callAPI = (filter = '?page=1') => {
        //making a get request with the fetch API
        if (filter) {
            history.push(filter);
        }
        axios({
            method: 'get',
            url: 'http://localhost:8082/products' + filter,
            data: JSON.stringify({}),
            config: {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}}
        })
            .then((response) => {
                setAllProduct(response.data.allProduct)
                setCategoryLists(response.data.categoryLists)
                setBrandLists(response.data.brandLists)
                setColorLists(response.data.colorLists)
                setCurrentPage(response.data.current_page)
                setTotalPage(response.data.total_page)
            })
            .catch(function (response) {
                console.log(response);
            });
    }
    /**
     * Product Search
     * */
    const searchProduct = (search) => {
        //making a get request with the fetch API
        axios({
            method: 'get',
            url: 'http://localhost:8082/products?search=' + search,
            data: JSON.stringify({}),
            config: {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}}
        })
            .then((response) => {
                setAllProduct(response.data.allProduct)
                setCategoryLists(response.data.categoryLists)
                setBrandLists(response.data.brandLists)
                setColorLists(response.data.colorLists)
                setCurrentPage(response.data.current_page)
                setTotalPage(response.data.total_page)
            })
            .catch(function (response) {
                console.log(response);
            });
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
        let filter = 'min_price=' + newValue[0] + '&max_price=' + +newValue[1]
        setPriceFilter(filter)
        callAPI(getFilters('price', filter))
        console.log(newValue)
    };
    const handleSortChange = (event) => {
        let filter = 'sort=' + event.target.value
        setSortFilter(filter)
        callAPI(getFilters('sort', filter))
    };
    const handelAddProductToWishlist = (item) => {
        axios.post('http://localhost:8082/AddToWishList/', {product_id: item.id}, {
            headers: authHeader()
        }).then((response) => {
            callAPI();
        })
            .catch(function (response) {
                console.log(response);
            });
    };
    const parameterizeArray = (key, brandArray) => {
        brandArray = brandArray.map(encodeURIComponent)
        return key + '[]=' + brandArray.join('&' + key + '[]=')
    }
    const handelCategoryChange = (event) => {
        console.log(event.target.checked)
        //parameterizeArray('brand', brandArray);
        // const filter = '?brand[]=1&brand[]=4&category[]=18&category[]=19&color=1&min_price=201&max_price=1000'
        let isChecked = event.target.checked;
        if (isChecked) {
            categoryArray.push(event.target.value)
        } else {
            const index = categoryArray.indexOf(event.target.value);
            if (index > -1) {
                categoryArray.splice(index, 1);
            }
        }
        let filter = parameterizeArray('category', categoryArray);
        setCategoryFilter(filter)
        callAPI(getFilters('category', filter))
    }
    const getFilters = (filter, option) => {
        let filterFinal = '';
        if (filter === 'category') {
            colorFilter = colorFilter ? '&' + colorFilter : ''
            priceFilter = priceFilter ? '&' + priceFilter : ''
            sortFilter = sortFilter ? '&' + sortFilter : ''
            filterFinal = brandFilter ? '?' + brandFilter + '&' + option + colorFilter + priceFilter + sortFilter : '?' + option + colorFilter + priceFilter + sortFilter
        }
        if (filter === 'brand') {
            colorFilter = colorFilter ? '&' + colorFilter : ''
            priceFilter = priceFilter ? '&' + priceFilter : ''
            sortFilter = sortFilter ? '&' + sortFilter : ''
            filterFinal = categoryFilter ? '?' + categoryFilter + '&' + option + colorFilter + priceFilter + sortFilter : '?' + option + colorFilter + priceFilter + sortFilter
        }
        if (filter === 'color') {
            if (brandFilter
                || categoryFilter
                || priceFilter
                || sortFilter) {
                filterFinal = '?' + brandFilter + '&' + priceFilter + '&' + sortFilter + '&' + categoryFilter + '&' + option
            } else {
                filterFinal = '?' + option
            }
        }
        if (filter === 'price') {
            if (brandFilter
                || categoryFilter
                || colorFilter
                || sortFilter) {
                filterFinal = '?' + colorFilter + '&' + sortFilter + '&' + brandFilter + '&' + categoryFilter + '&' + option
            } else {
                filterFinal = '?' + option
            }
        }
        if (filter === 'sort') {
            if (brandFilter
                || categoryFilter
                || colorFilter
                || priceFilter) {
                filterFinal = '?' + colorFilter + '&' + brandFilter + '&' + categoryFilter + '&' + priceFilter + '&' + option
            } else {
                filterFinal = '?' + option
            }
        }
        return filterFinal;
    }
    const handelBrandChange = (event) => {
        console.log(event)
        let isChecked = event.target.checked;
        if (isChecked) {
            brandArray.push(event.target.value)
        } else {
            const index = brandArray.indexOf(event.target.value);
            if (index > -1) {
                brandArray.splice(index, 1);
            }
        }
        let filter = parameterizeArray('brand', brandArray);
        setBrandFilter(filter)
        callAPI(getFilters('brand', filter))
    }
    const handelColorChange = (event) => {
        console.log(event)
        let filter = 'color=' + event;
        setColorFilter(filter)
        callAPI(getFilters('color', filter))
    }
    const checkedcondition = (value, page) => {
        if (page === 0) return false
        setCurrentPage(page)
        callAPI(value)
    }
    return (
        <Layout>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumb">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Men</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="listing_pageMn">
                <div className="container">
                    <div className="listing_page">
                        <div className="page_heading mobile_heading">
                            <h1>OUR PRODUCTS</h1>
                        </div>
                        <div className="sb_filter_toggle">Filter</div>
                        <aside className="listing_sidebar">
                            <div className="sb_filterMn">
                                <div id="sbcategory-head" className="sb_filter_title">
                                    <h2>Filter by Category</h2>
                                </div>
                                <div id="sbcategory-content" className="sb_filter_content sb_filter_checkbox">
                                    <ul>
                                        {categoryLists
                                        && categoryLists.length
                                        && categoryLists.map(item => {
                                            return <CategoryItems items={item}
                                                                  handelCategoryChange={handelCategoryChange}/>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="sb_filterMn">
                                <div id="sbbrand-head" className="sb_filter_title">
                                    <h2>Filter by Brand</h2>
                                </div>
                                <div id="sbbrand-content" className="sb_filter_content sb_filter_checkbox">
                                    <ul>
                                        {brandLists
                                        && brandLists.length
                                        && brandLists.map(item => {
                                            return <BrandItems items={item} handelBrandChange={handelBrandChange}/>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="sb_filterMn">
                                <div id="sbcolor-head" className="sb_filter_title">
                                    <h2>Filter by Color</h2>
                                </div>
                                <div id="sbcolor-content" className="sb_filter_content sb_filter_color">
                                    <ul>
                                        {colorLists
                                        && colorLists.length
                                        && colorLists.map(item => {
                                            return <ColorItems items={item} handelColorChange={handelColorChange}/>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="sb_filterMn">
                                <div id="sbprice-head" className="sb_filter_title">
                                    <h2>Filter by Price</h2>
                                </div>
                                <div id="sbprice-content" className="sb_filter_content sb_filter_price">
                                    <Slider
                                        value={value}
                                        max={5000}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={valuetext}
                                    />
                                    {/* <div className="slider-labels">
                                        <div className="caption">
                                            <span id="slider-range-value1"/>
                                        </div>
                                        <div className="caption">
                                            <span id="slider-range-value2"/>
                                        </div>
                                    </div>
                                    <div className="pr-range-wrap">
                                        <div id="slider-range"/>
                                    </div>*/}
                                </div>
                            </div>
                        </aside>
                        <main className="listing-productsMn">
                            <div className="page_heading">
                                <h1>OUR PRODUCTS <small style={{
                                    fontSize: '17px',
                                    fontWeight: 400
                                }}>{query.get("search") ? "Showing " + allProducts.length + " results for “" + query.get("search") + "” " : ""}</small></h1>
                            </div>
                            <div className="listing_actionBar">
                                <div className="sortby">
                                    <select name="sort" id="sort" onChange={(e) => handleSortChange(e)}>
                                        <option value selected>Sort by Position</option>
                                        <option value="featured">Featured Items</option>
                                        <option value="newest">Newest Items</option>
                                        <option value="bestselling">Best Selling</option>
                                        <option value="alphaasc">A to Z</option>
                                        <option value="alphadesc">Z to A</option>
                                        <option value="avgcustomerreview">By Review</option>
                                        <option value="priceasc">Price: Ascending</option>
                                        <option value="pricedesc">Price: Descending</option>
                                    </select>
                                </div>
                                {totalPage > 0 &&
                                <div className="paginationMn">
                                    {currentPage !== 1 && <div className="page_prev"><a href="#" onClick={(e) => checkedcondition('?page=' + (Number(currentPage) - 1), (Number(currentPage) - 1))}>Prev</a></div>}
                                    <div className="pagination">
                                        <ul>
                                            {Array.from(Array(totalPage).keys()).map(page =>
                                                <li key={page} className={`page-item number-item ${Number(currentPage) === Number(page) + 1 ? 'active' : ''}`}>
                                                    <a href={'javascript:void(0)'} onClick={() => checkedcondition(`?page=${page}`, page)}>{page + 1}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    {currentPage !== totalPage && <div className="page_next">
                                        <a href="#" onClick={() => checkedcondition('?page=' + (Number(currentPage) + 1), (Number(currentPage) + 1))}>Next</a>
                                    </div>}
                                </div>
                                }
                            </div>
                            <div className="listing-products">
                                <div className="product_grid">
                                    {allProducts.length === 0 ? <strong className={'text-center'}>No Data Found</strong> : ""}
                                    <ul>
                                        {allProducts
                                        && allProducts.length
                                        && allProducts.map(item => {
                                            let o = Object.assign({}, item);
                                            o.price = item.price.slice(1);
                                            return <ProductItems items={o} addProductToWishlist={handelAddProductToWishlist}/>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="listing_actionBar lp_bottom">
                                {totalPage > 0 &&
                                <div className="paginationMn">
                                    {currentPage !== 1 && <div className="page_prev"><a href="#" onClick={(e) => checkedcondition('?page=' + (Number(currentPage) - 1), (Number(currentPage) - 1))}>Prev</a></div>}
                                    <div className="pagination">
                                        <ul>
                                            {Array.from(Array(totalPage).keys()).map(page =>
                                                <li key={page} className={`page-item number-item ${Number(currentPage) === Number(page) + 1 ? 'active' : ''}`}>
                                                    <a href={'javascript:void(0)'} onClick={() => checkedcondition(`?page=${page}`, page)}>{page + 1}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    {currentPage !== totalPage && <div className="page_next">
                                        <a href="#" onClick={() => checkedcondition('?page=' + (Number(currentPage) + 1), (Number(currentPage) + 1))}>Next</a>
                                    </div>}
                                </div>
                                }
                            </div>
                        </main>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
export default Products;

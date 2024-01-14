import { useEffect } from "react";

//components
import Banner from "./Banner";
import NavBar from "./NavBar";
import {Box, styled} from '@mui/material';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from './Slide';
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;    
`

const Home = () => {

    const {products} = useSelector(state => state.getProducts) /// ye wala react DOM mein jo database ka getproducts uska hai
    
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())////ye wala function hai
    }, [dispatch])
    
    
    return ( 
        <>
            <NavBar />
            <Component>
            <Banner />
            <MidSlide products={products} title="Deals of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for you" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's top picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
        </>
    )
}

export default Home;
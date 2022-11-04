const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 3000;
const api_key = "b8546bd95c901ba5f05cdf207d87e3a8"
const returnScraperApiUrl = (apiKey) => `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to Amazon Scraper API.");
})
//Get products details
app.get('/products/:productId',async(req,res)=>{
 const {productId} = req.params;
 try {
    const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.in/dp/${productId}`);
    
    res.json(JSON.parse(response));
} catch (error) {
    res.json(error);
}

})
//Get products Reviews
app.get('/products/:productId/reviews',async(req,res)=>{
 const {productId} = req.params;
 try {
    const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.in/product-reviews/${productId}`);
    
    res.json(JSON.parse(response));
} catch (error) {
    res.json(error);
}

})
//Get products Offers
app.get('/products/:productId/offers',async(req,res)=>{
 const {productId} = req.params;
 try {
    const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.in/gp/offer-listing/${productId}`);
    
    res.json(JSON.parse(response));
} catch (error) {
    res.json(error);
}

})
//Get Search Results
app.get('/search/:searchQuery',async(req,res)=>{
 const {searchQuery} = req.params;
 try {
    const response = await request(`${returnScraperApiUrl(api_key)}&url=https://www.amazon.in/s?k=${searchQuery}`);
    
    res.json(JSON.parse(response));
} catch (error) {
    res.json(error);
}

})
app.listen(PORT,()=> console.log(`Server running at port ${PORT}`));
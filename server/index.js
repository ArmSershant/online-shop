const express = require("express")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
  }

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.send(`
        <h1>SERVER API</h1>
        <ul>
            <li>GET - <b>http://localhost:5000/products</b> - GET ALL THE PRODUCTS</li>
            <li>GET - <b>http://localhost:5000/products/:category</b> - GET ALL THE PRODUCTS WITH SPECIFIED CATEGORY</li>
        </ul>
    `)
})


let products = [
    {category:"books", name:"Psychology", price:15000, photo:"https://m.media-amazon.com/images/I/510nEVlK9jL._AC_SY780_.jpg"},
    {category:"books", name:"Politics", price:15000, photo:"https://images.booksense.com/images/905/473/9781465473905.jpg"},
    {category:"books", name:"Science", price:15000, photo:"https://images.booksense.com/images/651/419/9781465419651.jpg"},
    {category:"books", name:"Biology", price:15000, photo:"https://images.booksense.com/images/389/027/9780744027389.jpg"},
    {category:"books", name:"Black History", price:15000, photo:"https://images.booksense.com/images/146/042/9780744042146.jpg"},
    {category:"books", name:"Classical Music", price:15000, photo:"https://images.booksense.com/images/424/473/9781465473424.jpg"},
    {category:"books", name:"Philosophy", price:15000, photo:"https://images.booksense.com/images/617/668/9780756668617.jpg"},
    {category:"books", name:"Literature", price:15000, photo:"https://images.booksense.com/images/015/491/9781465491015.jpg"},
    {category:"books", name:"Math", price:15000, photo:"https://images.booksense.com/images/248/480/9781465480248.jpg"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://www.tradeinn.com/f/13701/137015570/puma-rs-x-reinvention-trainers.jpg"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://m.media-amazon.com/images/I/81p+RazBT7L._AC_UY1000_.jpg"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://m.media-amazon.com/images/I/81p+RazBT7L._AC_UY1000_.jpg"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://m.media-amazon.com/images/I/71Vhhy6VmSL._AC_UY1000_.jpg"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://images.stockx.com/images/Puma-RS-X-3-Mercedes-AMG-Petronas-Black.png?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1626898738&q=75"},
    {category:"clothes", name:"Puma rs-x1", price:15000, photo:"https://cdn.runrepeat.com/i/puma/31533/puma-rs-x-reinvention-white-irish-green-369579-05-uomo-white-c276-main.jpg"},
    {category:"clothes", name:"Mango Man", price:15000, photo:"https://i.pinimg.com/originals/cf/f8/ba/cff8ba555e336dbf7fcb2f2497a3340a.jpg"},
    {category:"clothes", name:"Mango Man", price:15000, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBHwbBC18OPzWRTfCLn01guAQ18_fU7Wmng&usqp=CAU"},
    {category:"clothes", name:"Mango Man", price:15000, photo:"https://st.mngbcn.com/rcs/pics/static/T7/fotos/S20/77137658_01.jpg?ts=1603384588738&imwidth=412&imdensity=2"},
    {category:"clothes", name:"Zara Man", price:15000, photo:"https://static.zara.net/photos///2022/I/0/2/p/6987/330/519/2/w/232/6987330519_2_1_1.jpg?ts=1658833492267"},
    {category:"clothes", name:"Zara Man", price:15000, photo:"https://i.pinimg.com/736x/f6/7c/46/f67c46be3d8dba4b22ed426d668589d0--zara-united-kingdom-zara-united-states.jpg"},
    {category:"clothes", name:"Zara Man", price:15000, photo:"https://i.pinimg.com/originals/f3/0b/e1/f30be15234ccfed93f74343e8338c4c3.jpg"},
    {category:"tech", name:"Macbook", price:15000, photo:"https://m.media-amazon.com/images/I/61NRYreJ2cL._AC_SL1500_.jpg"},
    {category:"tech", name:"Macbook", price:15000, photo:"https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png"},
    {category:"tech", name:"Macbook", price:15000, photo:"https://m.media-amazon.com/images/I/61NRYreJ2cL._AC_SL1500_.jpg"},
    {category:"tech", name:"Iphone", price:15000, photo:"https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1649166329/c6ckx0oqsv4xbsaub5ex.png"},
    {category:"tech", name:"Iphone", price:15000, photo:"https://m.media-amazon.com/images/I/61FZC+6hDFL.jpg"},
    {category:"tech", name:"Sony", price:15000, photo:"https://m.media-amazon.com/images/I/41pJlddKb3L._AC_.jpg"},
    {category:"tech", name:"Sony", price:15000, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEBzKNG4Nj0-OxAEGKO-c7Yp7jyL_WssOMA&usqp=CAU"},
    {category:"tech", name:"Sony", price:15000, photo:"https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/3:2/w_2400,h_1600,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg"},
    {category:"tech", name:"Sony", price:15000, photo:"https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/3:2/w_2400,h_1600,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg"},
]

products = products.map(elm => {
    return {...elm, id:Date.now()+Math.random()*10e+40, price:20000+Math.floor(Math.random() * 300000)}
})
app.get("/products", (req, res) => {
   for(let i = 0; i < products.length; i++){
     let r = Math.floor(Math.random() * products.length)
     let temp = products[i]
     products[i] = products[r]
     products[r] = temp
   }

    res.send({products})
})
app.get("/products/:category", (req,res) => {
   res.send({products:products.filter(a => a.category === req.params.category)})
})

app.listen(5000)
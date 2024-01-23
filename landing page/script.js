let url = "https://fakestoreapi.com/products";
let root = document.getElementById("root");

async function getProducts(){
    const response = await fetch(url);
    let products = await response.json();

    let display = products
     .map((product) => {
        return`
          <div class="cart">
                 <div class="box-img">
                   <img src=${product.image} alt="MAN" class="mini">
                 </div>
                <div>
                   <p>${product.title.substr(0,25)}</p>
                   <p>${product.Price}</p>
                   <p>${product.description.substr(0,26)}</p>
                </div>
            </div>
        `
        
     })
     .join("")
     root.innerHTML = display;
}
getProducts();

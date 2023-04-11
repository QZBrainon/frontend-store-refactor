export async function getCategories() {
    const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const response = await request.json();
    return response;
  }
  
  export async function getProductsFromCategoryAndQuery(categoryId, query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const response = await request.json();
    return response;
  }
  
  export async function fetchItemById(id) {
    const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const response = await request.json();
    return response;
  }
  
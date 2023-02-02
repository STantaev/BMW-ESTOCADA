
export function calcTotalPrice(products){
    return products.reduce((acc, cur) => {
        return (acc += cur.subPrice);
    }, 0)
}

export function calcSubPrice(product) {
    return +product.count * product.item.price;
}

export function calcQuantity(products) {
    return products.reduce((acc, a) => {
      return acc + +a.count;
    }, 0);
  }

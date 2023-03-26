// export const getOtrimData = () => {
//     return fetch('https://devonp.onpassive.com/wp-json/wl/v1/products/o-trim').then((response) => {
//         console.log(response);
//         return response.json();
//     });
// }

export const getProductData = (url) => {
    return fetch(url).then(response => response.json())//.catch(err => new Error(err));
}
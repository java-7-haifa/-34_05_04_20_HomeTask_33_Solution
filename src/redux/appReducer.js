const init = {
    products:getProducts()
}

export default function appReducer(state = init,action){
    return state;
}


function getProducts(){
    return [
        {
            id:123,
            title:'Product 1',
            desc: 'Description',
            price:100
        },
        {
            id:324,
            title:'Product 2',
            desc: 'Description',
            price:130
        },
        {
            id:234,
            title:'Product 3',
            desc: 'Description',
            price:80
        },
        {
            id:543,
            title:'Product 4',
            desc: 'Description',
            price:200
        },
        {
            id:678,
            title:'Product 5',
            desc: 'Description',
            price:170
        }
    ];
}
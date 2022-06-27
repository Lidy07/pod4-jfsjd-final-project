class ProductsController{
    
    constructor(currentId = 0){
        this.products =[];
        this.currentId = currentId;
    }
    addItem(name,description,createdAt){
        const product ={
            id: this.currentId ++,
            name:name,
            description: description,
            createdAt: createdAt
        };
        this.products.push(product);
    }
    }

// const product1 = new ProductsController();
// product1.addItem(product1.name,product1.description, product1.createdAt); 
// console.log(product1.products[0].createdAt); 

const products = {
    1: {
        name: "Electronics & Office",
        description:'Headphones' ,
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\electronics',
        createdAt: '2022-06-27'
    },

    2: {
        name: "Home & Furniture",
        description: 'online-shopping',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\Sofa',
        createdAt: '2022-06-27'
    },

    3: {
        name: "Jewleries,Clothing & Shoes",
        description: 'shoes',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\shoes',
        createdAt: '2022-06-27'

     },

    4:{
        name: "Pharmacy,Health & Beauty",
        description: 'pharmacy',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pharmacy',
        createdAt: '2022-06-27'
     },
    5:{
        name: "bakery,Grocery & Diary",
        description: 'fresh produce',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\fresh produce',
        createdAt: '2022-06-27'

     },
    6:{
        name: "Pet Store & Household",
        description: 'pet food',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pet food',
        createdAt: '2022-06-27'
     }
    
}

for (let i = 1; i <=2; i++){
    console.log(products[i].name)
}

class PostsController{
    
    constructor(currentId = 0){
        this.Posts =[];
        this.currentId = currentId;
    }
    addItem(name,text){
        const ppost ={
            id: this.currentId ++,
            name:name,
            text: text
        };
        this.Posts.push(ppost);
    }
    }
    const mypost1 = new PostsController();
    mypost1.addItem("name1","text1"); 
    console.log(mypost1.Posts[0].text); 

const posts = {
    1:{
        name: "Electronics & Office",
        text:'Headphones' ,
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\electronics',
        author:'A',
        createdAt: '2022-06-27'
    },
    2:{
        name: "Home & Furniture",
        text: 'online-shopping',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\Sofa',
        author:'B',
        createdAt: '2022-06-27'
    },
    3:{
        name: "Jewleries,Clothing & Shoes",
        text: 'shoes',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\shoes',
        author:'C',
        createdAt: '2022-06-27'
    },
    4:{
        name: "Pharmacy,Health & Beauty",
        text: 'pharmacy',
        author: 'D',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pharmacy',
        createdAt: '2022-06-27'
    },
    5:{
        name: "bakery,Grocery & Diary",
        text: 'fresh produce',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\fresh produce',
        author:'E',
        createdAt: '2022-06-27'
    },
    6:{
        id: 6,
        name: "Pet Store & Household",
        text: 'pet food',
        img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pet food',
        author:'F',
        createdAt: '2022-06-27'
    }
}
for (let i = 1; i <=2; i++){
    console.log(posts[i].name)
}

// class PostsController{
    
//     constructor(currentId = 0){
//         this.Posts =[];
//         this.currentId = currentId;
//     }
//     addItem(name,text){
//         const ppost ={
//             id: this.currentId ++,
//             name:name,
//             text: text
//         };
//         this.Posts.push(ppost);
//     }
//     }
//     const mypot1 = new PostsController();
//     mypost1.addItem("name1","text1"); 
//     console.log(mypost1.Posts[0].text); 

// const post1 = {
//     id: 1,
//     name: "Electronics & Office",
//     text:'Headphones' ,
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\electronics',
//     author:'A',
//     createdAt: '2022-06-27'
// };

// const post2 = {
//     id: 2,
//     name: "Home & Furniture",
//     text: 'online-shopping',
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\Sofa',
//     author:'B',
//     createdAt: '2022-06-27'
// };
// const post3 = {
//     id: 3,
//     name: "Jewleries,Clothing & Shoes",
//     text: 'shoes',
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\shoes',
//     author:'C',
//     createdAt: '2022-06-27'
// };
// const post4 = {
//     id: 4,
//     name: "Pharmacy,Health & Beauty",
//     text: 'pharmacy',
//     author: 'D',
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pharmacy',
//     createdAt: '2022-06-27'
// };
// const post5 = {
//     id: 5,
//     name: "bakery,Grocery & Diary",
//     text: 'fresh produce',
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\fresh produce',
//     author:'E',
//     createdAt: '2022-06-27'
// };
// const post6 = {
//     id: 6,
//     name: "Pet Store & Household",
//     text: 'pet food',
//     img: 'G:\DEV\GENERATION\pod4-jfsjd-final-project\image\pet food',
//     author:'F',
//     createdAt: '2022-06-27'
// };
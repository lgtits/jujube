import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    shoppingCartQuantity: '',
    shoppingList: [
      {
        'id': 'jujube45',
        'name': '雪麗棗 4.5A',
        'image': 'https://i.imgur.com/gpfAb8E.jpg',
        'specification': '超大大(每顆平均4.5兩)',
        'subSpecification': '顆數: 16 ± 1',
        'price': 750,
        'quantity': localStorage.getItem('jujube45')
      },
      {
        'id': 'jujube40',
        'name': '雪麗棗 4A',
        'image': 'https://i.imgur.com/gpfAb8E.jpg',
        'specification': '超大(每顆平均4.0-4.4兩)',
        'subSpecification': '顆數: 18 ± 1',
        'price': 600,
        'quantity': localStorage.getItem('jujube40') ? localStorage.getItem('jujube40') : 0
      },
      {
        'id': 'jujube35',
        'name': '雪麗棗 3.5A',
        'image': 'https://i.imgur.com/gpfAb8E.jpg',
        'specification': '頂級(每顆平均3.5-3.9兩)',
        'subSpecification': '顆數: 21 ± 1',
        'price': 500,
        'quantity': localStorage.getItem('jujube35')
      },
      {
        'id': 'jujube30',
        'name': '雪麗棗 3A',
        'image': 'https://i.imgur.com/gpfAb8E.jpg',
        'specification': '特級(每顆平均3.0-3.4兩)',
        'subSpecification': '顆數: 24 ± 1',
        'price': 400,
        'quantity': localStorage.getItem('jujube30')
      },
      {
        'id': 'jujubeCandy',
        'name': '柴燒蜜棗糖',
        'image': 'https://i.imgur.com/gLE8CD3.jpg',
        'specification': '頂級蜜棗製作',
        'subSpecification': '顆數: 10 ± 1',
        'price': 150,
        'quantity': localStorage.getItem('jujubeCandy')
      }
    ]
  },
  mutations: {
    getShoppingCartQuantity(state){
      const totalAmount = Number(localStorage.getItem('jujube45')) + Number(localStorage.getItem('jujube40')) + Number(localStorage.getItem('jujube35')) + Number(localStorage.getItem('jujube30')) + Number(localStorage.getItem('jujubeCandy')) 
      state.shoppingCartQuantity = totalAmount
    }
  },
  actions: {
  },
  modules: {
  }
})

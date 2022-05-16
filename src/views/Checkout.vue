<template>
  <div class="checkout">
    <div class="header">
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
      <span> 蜜棗晨。結帳</span>
    </div>
    <main v-if="Amt > 0">
      <div class="order">
        <div class="list-head-mobile">
            訂單詳情
        </div>
        <div class="list-head-pc" style="display:none">
            訂購商品
        </div>
        <ul class="order-list">
          <li class="item-wrapper" v-for="item in this.$store.state.shoppingListFiltered" :key="item.id" >
            <div class="product-image">
              <img :src="item.image" alt="">
            </div>
            <div class="product-description">
              <div class="prodcut-name">
                {{item.name}}
              </div>
              <div class="specification">
                {{item.specification}}
              </div>
              <div class="price-wrapper">
                <div class="unit-price">
                  {{item.price}}
                </div>
                <div class="quantity">
                  x {{item.quantity}}
                </div>
                <div class="gross-price" style="display:none;">
                  1500
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <form id="newbpay" method='post' action='https://ccore.newebpay.com/MPG/mpg_gateway'>
      <!-- hidden info-->
        <label for="MerchantID" hidden>merchantID</label>
        <input  id='MerchantID' name='MerchantID' value="MS136074798" hidden>
        <label for="" hidden>trade info</label>
        <input  id='TradeInfo' name='TradeInfo' value="TradeInfo" hidden>
        <label for="" hidden>tradesha</label>
        <input  id='TradeSha' name='TradeSha' value="TradeSha" hidden>
        <label for="" hidden>version</label>
        <input  id='Version' name='Version' value='2.0' hidden>
        <div class="address-wrapper">
          <label for="address">寄送地點：</label>
          <input type="text" id="address" value="" placeholder="請輸入您的地址" v-model="Address" required>
        </div>
        <div class="contact-wrapper">
          <label for="name">收件人姓名：</label>
          <input type="name" id="name" placeholder="請輸入收件人姓名" v-model="Receiver" required>
        </div>
        <div class="contact-wrapper">
          <label for="contact">聯絡電話：</label>
          <input type="telephone" id="contact" placeholder="請輸入您的聯絡電話" v-model="Contact" required>
        </div>
        <div class="comment-wrapper">
          <label for="comment">留言：</label>
          <textarea type="text" id="comment" placeholder="" v-model="Comment" >
          </textarea>
        </div>
        <div class="amount-wrapper">
          <span>訂單金額： {{this.$store.state.totalAmount}}元</span>
          <p>宅配費用： 60元</p>
          <span class="checkout-amount">總付款金額： 
            <span class="amount">{{Amt}}</span>元
          </span>
        </div>
      </form>
    </main>
    <div class="checkout-button-panel" v-if="Amt > 0">
      <button class="checkout-button" @click="checkout()" type="submit" form="newbpay" >結帳</button>
    </div>
    <main class="no-goods" v-if="this.$store.state.shoppingListFiltered.length === 0">
      <h1>訂單尚無商品</h1>
      <router-link to="/jujubes">再去逛逛</router-link>
    </main>
    
  </div>
</template>

<style lang="scss" scoped>

.checkout{
  .header{
    width: 100%;
    color: $main-green;
    font-size: 40px;
    padding: 10px 20px;
    -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  }
  main{
    padding: 10px 20px;
    label{
      display: block;
    }
    input{
      width: 100%;
    }
    textarea{
      width: 100%;
    }
    .order{
      .list-head-mobile{
        width: 100%;
        text-align: center;
        border-bottom: 1px solid $main-gray;
        padding-bottom: 5px;
        margin-bottom: 15px;
      }
      .order-list{
        background-color: rgba(67, 109, 3, 0.116);
        .item-wrapper{
          display: flex;
          height: 100px;
          .product-image{
            width: 80px;
            height: 80px;
            margin: 10px 20px 10px 10px;
            img{
              width: 100%;
              height: 100%;
              object-fit:cover;
            }
          }
          .product-description{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .price-wrapper{
              display: flex;
            }
          }
        }
      }
    }
    .address-wrapper{
      border-top: 1px solid $main-gray;
      padding-top: 10px;
      margin-bottom: 10px;
    }
    .contact-wrapper{
      margin-bottom: 10px;
    }
    .comment-wrapper{
      margin-bottom: 10px;
    }
    .amount-wrapper{
      display: flex;
      flex-direction: column;
      text-align: left;
      .checkout-amount{
        border-top: solid 1px $main-gray;
        padding-top: 5px;
        .amount{
          color: red;
          font-weight: 800;
        }
      }
    }
  }

  .checkout-button-panel{
    -webkit-box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 60px;
    // position: absolute;
    // bottom: 0;
    display: flex;
    align-items: center;
    .checkout-button{
      outline: none;
      border:none;
      background-color: $main-green;
      color: white;
      width: 70%;
      height: 50px;
      margin: 0 auto;
      border-radius: 50px;
      font-weight: 800;
      font-size: 20px;
    }
  }
}

  @media screen and (min-width: 700px) {
  }
</style>

<script>
// import axios from 'axios'
import CryptoJS from 'crypto-js'

export default {
  data(){
    return{
      MerchantOrderNo:'1485232229',
      ItemDesc:'',
      LoginType: 0,
      TradeInfo:'',
      TradeSha:'',
      Freight: 60,
      TotalCost: 0,
      Amt: 0,
      OrderComment: this.Address + this.Contact,
      Receiver:'',
      Address:'',
      Contact:'',
      Comment: '',
      ClientBackURL: "https://lgtits.github.io/jujube/"
    }
  },
  methods:{
    checkout(){
      if(this.Amt === 0 || !this.Address || !this.Contact || !this.Receiver) {
        return
      }
      this.OrderComment = '地址: ' + this.Address + '/收件人: ' + this.Receiver + '/聯絡電話: ' + this.Contact + '/留言: ' + this.Comment
      let key = CryptoJS.enc.Utf8.parse('xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE')
      let iv = CryptoJS.enc.Utf8.parse('C1jp9ruxzNXY86qP')
      const trade_info_arr = new URLSearchParams({
        MerchantID:  'MS136074798',
        RespondType: 'JSON',
        TimeStamp: parseInt(new Date().getTime()/1000),
        Version: 2.0,
        MerchantOrderNo: 'jc' + parseInt(new Date().getTime()/1000),
        Amt: this.Amt,
        ItemDesc: this.ItemDesc,
        ClientBackURL: this.ClientBackURL,
        OrderComment: this.OrderComment
        // LoginType: 0
      });
      console.log(trade_info_arr.toString())
      let encrypted = CryptoJS.AES.encrypt(trade_info_arr.toString(), key, { 
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const cipherText = encrypted.ciphertext.toString()
      console.log('TradeInfo:', cipherText)
      document.getElementById('TradeInfo').value = cipherText
      let beforeTradeSha = 'HashKey=xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE&' + cipherText + '&HashIV=C1jp9ruxzNXY86qP'
      // console.log('before tradeSha', beforeTradeSha)
      const tradeSha = CryptoJS.SHA256(beforeTradeSha).toString().toUpperCase();
      console.log('TradeSha:', tradeSha)
      document.getElementById('TradeSha').value = tradeSha
      localStorage.clear();
    },
    getItemDesc(){
      this.$store.state.shoppingListFiltered.forEach(item => {
        this.ItemDesc += item.name + '*' + item.quantity + '/'
      });
      console.log(this.ItemDesc)
    }
  },
  created(){
    this.$store.commit('getShoppingList')
    this.Amt = Number(this.Freight) + Number(this.$store.state.totalAmount)
    this.getItemDesc()
  }
}
</script>

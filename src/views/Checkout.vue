<template>
  <div class="checkout">
    <div class="header">
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
      <span> 蜜棗晨。結帳</span>
    </div>
    <main>
      <div class="order">
        <div class="list-head-mobile">
            訂單詳情
        </div>
        <div class="list-head-pc" style="display:none">
            訂購商品
        </div>
        <ul class="order-list">
          <li class="item-wrapper">
            <div class="product-image">
              <img src="https://i.imgur.com/gpfAb8E.jpg" alt="">
            </div>
            <div class="product-description">
              <div class="prodcut-name">
                雪麗棗 4.5A
              </div>
              <div class="specification">
                超大大(每顆平均4.5兩)
              </div>
              <div class="price-wrapper">
                <div class="unit-price">
                  750
                </div>
                <div class="quantity">
                  x 2
                </div>
                <div class="gross-price" style="display:none;">
                  1500
                </div>
              </div>
            </div>
          </li>
          <li class="item-wrapper">
            <div class="product-image">
              <img src="https://i.imgur.com/gpfAb8E.jpg" alt="">
            </div>
            <div class="product-description">
              <div class="prodcut-name">
                雪麗棗 4A
              </div>
              <div class="specification">
                超大(每顆平均4.0-4.4兩)
              </div>
              <div class="price-wrapper">
                <div class="unit-price">
                  600
                </div>
                <div class="quantity">
                  x 2
                </div>
                <div class="gross-price" style="display:none;">
                  1200
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="address-wrapper">
        <label for="address">寄送地點：</label>
        <input type="text" id="address" value="臺南市中西區青年路21號">
      </div>
      <div class="contact-wrapper">
        <label for="contact">聯絡電話：</label>
        <input type="telephone" id="contact">
      </div>
      <div class="comment-wrapper">
        <label for="comment">留言：</label>
        <textarea type="text" id="comment">
        </textarea>
      </div>
      <div class="amount-wrapper">
        <span>訂單金額： 2700元</span>
        <p>宅配費用： 0060元</p>
        <span class="checkout-amount">總付款金額： 2760元</span>
      </div>
    </main>
    <div class="checkout-button-panel">
      <button class="checkout-button" @click="checkout()">結帳</button>
    </div>
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
      text-align: right;
      .checkout-amount{
        border-top: solid 1px $main-gray;
        padding-top: 5px;
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
import axios from 'axios'
import CryptoJS from 'crypto-js'

export default {
  data(){
    return{
      MerchantOrderNo:'1485232229',
      ItemDesc:'UnitTest',
      LoginType: 0,
      TradeInfo:'',
      TradeSha:''
    }
  },
  methods:{
    checkout(){
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
      let beforeTradeSha = 'HashKey=xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE&' + cipherText + '&HashIV=C1jp9ruxzNXY86qP'
      // console.log('before tradeSha', beforeTradeSha)
      const tradeSha = CryptoJS.SHA256(beforeTradeSha).toString().toUpperCase();
      console.log('TradeSha:', tradeSha)
      // post request
      axios.post('https://ccore.newebpay.com/MPG/mpg_gateway',{
        MerchantID: 'MS136074798',
        TradeInfo: cipherText,
        TradeSha: tradeSha
      })
    }
  }
}
</script>

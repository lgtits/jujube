<template>
  <div class="checkout">
    <div class="header">
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
      <span> 蜜棗晨。結帳</span>
      <span class="cancel-order">
        <router-link to="/jujubes" class="return">取消</router-link>
      </span>
    </div>
    <main v-if="Amt > 0">
      <div class="order">
        <div class="list-head-mobile">
            訂單詳情
        </div>
        <div class="list-head-pc">
          <span class="title name">訂單商品</span>
          <span class="title price">單價</span>
          <span class="title quantity">數量</span>
          <span class="title total-price">總價</span>
        </div>
        <ul class="order-list">
          <li class="item-wrapper" v-for="item in this.$store.state.shoppingListFiltered" :key="item.id" >
            <div class="product-image">
              <img :src="item.image" alt="">
            </div>
            <div class="product-description-mobile">
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
              </div>
            </div>
            <div class="product-description-pc">
              <div class="prodcut-name">
                {{item.name}}
              </div>
              <div class="specification">
                {{item.specification}}
              </div>
              <div class="sub-specification">
                {{item.subSpecification}}
              </div>
              <div class="price-wrapper">
                <div class="unit-price">
                  {{item.price.toLocaleString('en-US')}}
                </div>
                <div class="quantity">
                  {{item.quantity}}
                </div>
                <div class="gross-price">
                  {{(item.price*item.quantity).toLocaleString('en-US')}}
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
        <div class="contact-info">
          <div class="name-wrapper">
            <label for="name">收件人姓名：</label>
            <input type="name" id="name" placeholder="請輸入收件人姓名" v-model="Receiver" required>
          </div>
          <div class="contact-wrapper">
            <label for="contact">聯絡電話：</label>
            <input type="telephone" id="contact" placeholder="請輸入您的聯絡電話" v-model="Contact" required>
          </div>
        </div>
        <div class="address-wrapper">
          <label for="address">寄送地點：</label>
          <input type="text" id="address" value="" placeholder="請輸入您的地址" v-model="Address" required>
        </div>
        <div class="comment-wrapper">
          <label for="comment">留言：</label>
          <textarea type="text" id="comment" placeholder="" v-model="Comment" >
          </textarea>
        </div>
        <div class="amount-wrapper">
          <span>訂單金額： {{this.$store.state.totalAmount.toLocaleString('en-US')}}元</span>
          <p>宅配費用： 60元</p>
          <span class="checkout-amount">總付款金額： 
            <span class="amount">{{Amt.toLocaleString('en-US')}}</span>元
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
    position: relative;
    .cancel-order{
      position: absolute;
      right: 10px;
      font-size: 16px;
      a{
        color: $main-gray;
      }
    }
  }
  main{
    padding: 10px 20px;
    textarea{
      width: 100%;
    }
    .order{
      .list-head-pc{
        display: none;
      }
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
          .product-description-pc{
            display: none;
          }
          .product-description-mobile{
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
      margin-bottom: 10px;
      input{
        width: 100%;
      }
    }
    .contact-info{
      padding-top: 10px;
      border-top: 1px solid $main-gray;
      .name-wrapper{
        margin-bottom: 10px;
        input{
          width: 100%;
        }
      }
      .contact-wrapper{
        margin-bottom: 10px;
        input{
          width: 100%;
        }
      }
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
    .checkout{
      main{
        .order{
          .list-head-mobile{
            display: none;
          }
          .list-head-pc{
            background-color: rgba(67, 109, 3, 0.116);
            display: block;
            display: grid;
            grid-template-columns: 50% 15% 15% 20%;
            .name{
              font-size: 20px;
              padding: 10px;
            }
            .price, .quantity, .total-price{
              text-align: center;
              padding: 15px;
              color: gray;
            }
          }
          .order-list{
            .item-wrapper{
              .product-description-mobile{
                display: none;
              }
              .product-description-pc{
                width: 100%;
                display: grid;
                grid-template-columns: 15% 15% 15% 55%;
                align-content: center;
                text-align: center;
                .price-wrapper{
                  display: grid;
                  grid-template-columns: 30% 30% 40%;
                }
              }
            }
          }
        }
        .contact-info{
          display: flex;
          margin-bottom: 10px;
          .name-wrapper{
            width: 50%;
            label{
              display: block;
            }
            input{
              width: 80%;
            }
          }
          .contact-wrapper{
            width: 50%;
            label{
              display: block;
            }
            input{
              width: 100%;
            }
          }
        }
      }
      .checkout-button-panel{
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        .checkout-button{
          width: 30%;
        }
      }
    }


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
      this.getItemDesc()
   
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
      });

      let key = CryptoJS.enc.Utf8.parse('xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE')
      let iv = CryptoJS.enc.Utf8.parse('C1jp9ruxzNXY86qP')
      let encrypted = CryptoJS.AES.encrypt(trade_info_arr.toString(), key, { 
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const cipherText = encrypted.ciphertext.toString()
      document.getElementById('TradeInfo').value = cipherText
      
      let beforeTradeSha = 'HashKey=xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE&' + cipherText + '&HashIV=C1jp9ruxzNXY86qP'
      const tradeSha = CryptoJS.SHA256(beforeTradeSha).toString().toUpperCase();
      document.getElementById('TradeSha').value = tradeSha
      localStorage.clear();
    },
    getItemDesc(){
      this.$store.state.shoppingListFiltered.forEach(item => {
        this.ItemDesc += item.name + '*' + item.quantity + '/'
      });
      this.ItemDesc = this.ItemDesc +  '地址: ' + this.Address + '/收件人: ' + this.Receiver + '/聯絡電話: ' + this.Contact + '/留言: ' + this.Comment
    }
  },
  created(){
    this.$store.commit('getShoppingList')
    this.Amt = Number(this.Freight) + Number(this.$store.state.totalAmount)

  }
}
</script>

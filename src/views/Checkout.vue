<template>
  <div class="checkout">
    <div class="header">
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
      <span> 蜜棗晨。結賬</span>
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
          <li class="order-wrapper">
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
        </ul>
      </div>
      <div class="address">
        <label for="address">寄送地點：</label>
        <input type="text" id="address" value="臺南市中西區青年路21號">
      </div>
      <div class="contact-wrapper">
        <label for="contact">聯絡電話：</label>
        <input type="telephone" id="contact">
      </div>
      <div class="order-comment">
        <label for="comment">留言：</label>
        <textarea type="text" id="comment">
        </textarea>
      </div>
      <div class="order-amount">
        <span>訂單金額： 1560元</span>
        <p>宅配： 60元</p>
      </div>
    </main>

    <div class="checkout-button-panel">
      <div class="amount-wrapper">
        <p class="amount-description">總付款金額</p>
        <span class="checkout-amount">1590</span>
      </div>
      <button class="checkout-button">結賬</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.checkout{
  main{
    padding: 20px;
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
      }
      .order-list{
        .order-wrapper{
          display: flex;
          .product-image{
            width: 80px;
            height: 80px;
            img{
              width: 100%;
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
    .order-amount{
      display: flex;
      flex-direction: column;
      text-align: right;
    }
  }
  .header{
    width: 100%;
    color: $main-green;
    font-size: 40px;
    padding: 15px;
  }
  .checkout-button-panel{
    display: flex;
    justify-content: end;
    width: 100%;
    position: absolute;
    bottom: 0;
    -webkit-box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.1);
    .amount-wrapper{
      .checkout-amount{
        color: rgb(216, 37, 37);
      }
    }
    .checkout-button{
      outline: none;
      border:none;
      background-color: $main-green;
      color: white;
      width: 30%;
      font-weight: 800;
      font-size: 20px;
    }
  }
}

</style>

<script>

export default {

}
</script>

<template>
  <div class="outer">
    <h1>
      Not Found
    </h1>
    <router-link to="/">回首頁</router-link>
    <button @click="showData()">show Data</button>


    <div class="form">
<form   method='post' action='https://core.newebpay.com/MPG/mpg_gateway'> 
<!-- <form  >  -->
<label for="">merchantID</label>
<input  id='MerchantID' name='MerchantID' v-model="MerchantID">
<label for="">trade info</label>
<input  id='TradeInfo' name='TradeInfo' v-model="TradeInfo">
<label for="">tradesha</label>
<input  id='TradeSha' name='TradeSha' v-model="TradeSha">
<!-- <input  id='RespondType' name='RespondType' value='JSON'> -->
<!-- <input id='TimeStamp' name='TimeStamp' value='<?php echo $date_now;?>'> -->
<label for="">version</label>
<input  id='Version' name='Version' value='2.0'>
<!-- <input  id='MerchantOrderNo' name='MerchantOrderNo' value='<?php echo $date_now;?>'>
<input  id='Amt' name='Amt' value='<?php echo $Money;?>'>
<input id='ItemDesc' name='ItemDesc' value='<?php echo $ItemDesc;?>'>
<input  id='Email' name='Email' value='<?php echo $Email?>'>
<input  id='LoginType' name='LoginType' value='no'> -->
<button>delivery</button>
</form>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
  .outer{
    width: 80%;
    margin: 0 auto;
    h1{
    margin: 20px auto;
    }
    .form{
      background-color: lightblue;
    }
  }
</style>

<script>
// import axios from 'axios'
///crypto
import CryptoJS from 'crypto-js'

export default {
  data() {
    return{
      MerchantID:  'MS136074798',
      RespondType: 'JSON',
      TimeStamp: parseInt(new Date().getTime()/1000),
      Version: 2.0,
      MerchantOrderNo:'S_1485232229',
      Amt: 40,
      ItemDesc:'UnitTest',
      HashKey: 'xfPcxoYSugve9JQWCHhvMMI0t7QZ2GcE',
      HashIV: 'C1jp9ruxzNXY86qP',
      TradeInfo:'',
      TradeSha:''
    }
  },
  methods:{
    // handleSubmit(e) {
    //   const form = new FormData(e.target);
    //   // this.sendAJAXRequest(form);
    //   console.log(form)
    //   let object = {};
    //   form.forEach((val, key) => {
    //     object[key] = val;
    //   });
    //   console.log(object)
    // },
    showData(){
      const trade_info_arr = new URLSearchParams({
        MerchantID:  this.MerchantID,
        RespondType: this.RespondType,
        TimeStamp: parseInt(new Date().getTime()/1000),
        Version: this.Version,
        MerchantOrderNo: this.MerchantOrderNo,
        Amt: this.Amt,
        ItemDesc: this.ItemDesc
      });
      console.log('交易資料URL ENCODED:', trade_info_arr.toString())
      // 自己研究 document
      // let key = CryptoJS.enc.Hex.parse(this.HashKey)
      let key = CryptoJS.enc.Utf8.parse(this.HashKey)
      // let key = this.HashKey
      // let iv = CryptoJS.enc.Hex.parse(this.HashIV)
      let iv = CryptoJS.enc.Utf8.parse(this.HashIV)

      console.log('key', key)
      console.log('iv', iv)
      //AES encryption
      var encrypted = CryptoJS.AES.encrypt(trade_info_arr.toString(), key, { 
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      const cipherText = encrypted.ciphertext.toString()
      console.log('TradeInfo:', cipherText)
      this.TradeInfo = cipherText
      //tradesha transfer
      let beforeTradeSha = `HashKey=${this.HashKey}&` + cipherText + `&HashIV=${this.HashIV}`
      console.log('before tradeSha', beforeTradeSha)
      const tradeSha = CryptoJS.SHA256(beforeTradeSha).toString().toUpperCase();
      console.log('TradeSha:', tradeSha)
      this.TradeSha = tradeSha
    },
    sendAJAXRequest(form) {
      const url = 'https://ccore.newebpay.com/MPG/mpg_gateway';
      fetch(url, {
        method: 'POST',
        body: form,
      });
    },
    getTradeInfo(){
      console.log('GET TRADE INFO')
      var my_var = "<?php echo 'ddd'; ?>";
      
      console.log(my_var)
      console.log('FINISH  PROCESS')
    }
  },
  created(){
    // this.getResult()
    this.showData()
  }
}
</script>


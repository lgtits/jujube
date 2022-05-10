<template>
  <div class="outer">
    <h1>
      Not Found
    </h1>
    <router-link to="/">回首頁</router-link>
    <button @click="getTradeInfo">test api</button>


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
// const crypto = require('crypto');

// const HashKey = 'jMv52ZPKDUlJhXRlU2siHu3tQCXMd8TI'
// const HashIV = 'C7yyC3JOKW4RJbfP'

// const trade_info_arr = new URLSearchParams({
//   MerchantID:  'MS135597852',
//   RespondType: 'JSON',
//   TimeStamp: parseInt(new Date().getTime()/1000),
//   Version: 2.0,
//   MerchantOrderNo:'S_1485232229',
//   Amt: 40,
//   ItemDesc:'UnitTest'
// });


export default {
  data() {
    return{
      MerchantID:  'MS135597852',
      RespondType: 'JSON',
      TimeStamp: parseInt(new Date().getTime()/1000),
      Version: 2.0,
      MerchantOrderNo:'S_1485232229',
      Amt: 40,
      ItemDesc:'UnitTest',
      HashKey: 'jMv52ZPKDUlJhXRlU2siHu3tQCXMd8TI',
      HashIV: 'C7yyC3JOKW4RJbfP',
      TradeInfo:'',
      TradeSha:''
    }
  },
  methods:{
    // async getResult() {
    //   try{
    //     const result = await axios.post('https://ccore.newebpay.com/MPG/mpg_gateway', {
    //       MerchantID: 'MS135597852',
    //       TradeInfo: '447567545fac4f29dbd76e7800cb88d419434d7ee2da71c6da8ac60e907f275f96d387ecd5ce18682f6a138b317d521e17bfa0088d783ba2b9c0945ad41c77a8be987d208cf2650a02f96b483a75a1e112f0068c7d6f44b20b37171a1b4b507cc0da70c46261efbd38ca44e15f3df3d57ac2e2fa6377ef4e8940e694a5242a49',
    //       TradeSha: '2A1AA8B31AE65E00F74BF37D92A99CA5F68DEBDE8B7BB0D5597818C96FD57EE7',
    //       Version: 2.0
    //     })
    //     console.log(result)
    //   } catch(error){
    //     console.log('error', error)
    //   }
    // },
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
      var encrypted = CryptoJS.AES.encrypt(trade_info_arr.toString(), key, { iv: iv });
      console.log('encrypted', encrypted)
      const cipherText = encrypted.ciphertext.toString()
      console.log('cipherText:', cipherText)
      this.TradeInfo = cipherText
      //tradesha
      let beforeTradeSha = `HashKey=${this.HashKey}&` + cipherText + `&HashIV=${this.HashIV}`
      console.log('before tradeSha', beforeTradeSha)
      const tradeSha = CryptoJS.SHA256(beforeTradeSha).toString().toUpperCase();
      console.log('tradeSha:', tradeSha)
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


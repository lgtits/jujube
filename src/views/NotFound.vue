<template>
  <div class="outer">
    <h1>
      Not Found
    </h1>
    <router-link to="/">回首頁</router-link>
    <button @click="getResult">test api</button>
    <div class="form">
<form name='Spgateway' method='post' action='https://core.newebpay.com/MPG/mpg_gateway'> 
<input  id='MerchantID' name='MerchantID' value='MS135597852'>
<input  id='TradeInfo' name='TradeInfo' value='447567545fac4f29dbd76e7800cb88d419434d7ee2da71c6da8ac60e907f275f96d387ecd5ce18682f6a138b317d521e4f49f68538721a03f60a541808a5369fc06eaad20b5e95e0711bc1b38b45f5da09652c656b7dc7a3c48e79abd9f63fb50ad011d46668b579e0b6f56fd135f698a0069f9da1d86aa68c3f659a965fca02'>
<input  id='TradeSha' name='TradeSha' value='AE9C05E1DAE0BD88E681DD36ED43596E28E19569127E4119932FDFCDA1D8E297'>
<input  id='RespondType' name='RespondType' value='JSON'>
<!-- <input id='TimeStamp' name='TimeStamp' value='<?php echo $date_now;?>'> -->
<input  id='Version' name='Version' value='2.0'>
<!-- <input  id='MerchantOrderNo' name='MerchantOrderNo' value='<?php echo $date_now;?>'>
<input  id='Amt' name='Amt' value='<?php echo $Money;?>'>
<input id='ItemDesc' name='ItemDesc' value='<?php echo $ItemDesc;?>'>
<input  id='Email' name='Email' value='<?php echo $Email?>'>
<input  id='LoginType' name='LoginType' value='no'> -->
<button>delievier</button>
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
      background-color: blue;
    }
  }
</style>

<script>
import axios from 'axios'

export default {
  methods:{
    async getResult() {
      try{
        const result = await axios.post('https://ccore.newebpay.com/MPG/mpg_gateway', {
          MerchantID: 'MS135597852',
          TradeInfo: '447567545fac4f29dbd76e7800cb88d419434d7ee2da71c6da8ac60e907f275f96d387ecd5ce18682f6a138b317d521e17bfa0088d783ba2b9c0945ad41c77a8be987d208cf2650a02f96b483a75a1e112f0068c7d6f44b20b37171a1b4b507cc0da70c46261efbd38ca44e15f3df3d57ac2e2fa6377ef4e8940e694a5242a49',
          TradeSha: '2A1AA8B31AE65E00F74BF37D92A99CA5F68DEBDE8B7BB0D5597818C96FD57EE7',
          Version: 2.0
        })
        console.log(result)
      } catch(error){
        console.log('error', error)
      }
    },
  },
  created(){
    this.getResult()
  }


}
</script>

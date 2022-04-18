<template>
  <form class="contact_form" ref="form" @submit.prevent="sendEmail">
    <h1>聯絡我們</h1>
    <div class="row">
      <div class="input_wrapper">
        <label>主旨</label>
        <input type="text" name="subject" v-model="subject" required>
      </div>
      <div class="input_wrapper">
        <label>姓名</label>
        <input type="text" name="from_name"  v-model="name" required>
      </div>
    </div>
    <div class="row">
      <div class="input_wrapper">
        <label>Email</label>
        <input type="email" name="receive_email" v-model="email" >
      </div>
      <div class="input_wrapper">
        <label>聯絡電話</label>
        <input type="text" name="receive_number"  v-model="number" required>
      </div>
    </div>
    <div class="row">
      <label>Message</label>
      <textarea name="message" rows="5" cols="100" v-model="message" required></textarea>
    </div>
    <button type="submit" value="Send" v-show="isPending === false" >送出</button>
    <button v-show="isPending === true" disabled>...送出中</button>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data(){
    return{
      subject:"",
      name:"",
      email:"",
      number:"",
      message:"",
      isPending: false,
    }
  },
  methods: {
    sendEmail() {
      this.isPending = true
      emailjs.sendForm('service_sjnr01l', 'contact_form', this.$refs.form, 'aM4x9wEs_Ps_QdhbA')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            // alert success message
            this.subject = ""
            this.name = ""
            this.email = ""
            this.number = ""
            this.message = ""
            this.isPending = false
        }, (error) => {
            console.log('FAILED...', error.text);
            alert("error")
            this.isPending = false
        });
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact_form{
    width: 80%;
    margin: 0 auto;
    h1,label{
      color: $main-green;
    }
    h1{
      margin-top: 30px;
    }
    .row{
      display: flex;
      flex-direction: column;
    }
    input, textarea{
      width: 100%;
      border:  1px solid black;
      border-radius: 5px;
      padding: 5px;
      &:focus, &:hover{
        outline: 1px solid $main-yellow;
        border:  1px solid $main-yellow;
      }
    }
    label{
      margin-top: 16px;
    }
    button{
      width: 30%;
      margin: 20px auto;
      display: block;
      background-color: $main-green;
      border-radius: 50px;
      border:  1px solid $main-green;
      line-height: 16px;
      padding: 10px;
      &:hover{
        background-color: $main-yellow;
        border:  1px solid $main-yellow;
      }
    }
  }

  @media screen and (min-width: 700px) {
    .contact_form{
      width: 60%;
      label{
        display: inline-block;
      }
      .row{
        flex-direction: row;
        justify-content: space-between;
        .input_wrapper{
          width: 45%;
        }
      }
    }
  }
</style>
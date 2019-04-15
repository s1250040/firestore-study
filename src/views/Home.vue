<template>
  <div class="home" style="margin-left: 20px;">
      <p>Name</p>
      <input v-model="name" placeholder="Name">
      <p>e-mail</p>
      <input type="email" v-model="email" placeholder="email" maxlength="30">
      <p>message</p>
      <input v-model="message" placeholder="message">
      <p class="send-button">
      <button @click="sendItem">send</button>
      </p>
      <p v-if="showMessage" style="margin-top: 20px">
          succeeded!
      </p>
  </div>
</template>
<script>
// Vue CLIで作成したアプリでは、@マークは./srcを指す
import firebase from '@/firebase/firestore'

export default {
  name: 'home',
  data() {
    return {
        name: '',
        email: '',
        message: '',
        items: [],
        showMessage: false,
    }
  },
  
  methods: {
   sendItem(){
     const colref = firebase.firestore().collection("formcontent"); // "formcontent"という名前のコレクションへの参照を作成
     
     // 保存用JSONデータを作成
     const saveData = {
        name: this.name,
        email: this.email,
        message: this.message
     };
     

    // addの引数に保存したいデータを渡すときドキュメントは指定できない自動生成される
     colref.add(saveData).then(function(docRef){
    //setを使うことでfirestoreのドキュメントを指定できる
    // colref.doc("mydocument").set(saveData).then(function (docRef) {
        //正常にデータ保存できたときの処理
        console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
    //エラー発生時の処理
    console.error("Error adding document: ", error);
    });

      this.showMessage = true;
   },
  }
}
</script>

<style scoped>
  .home{
    display: inline-table;
    background-color: rgb(255, 255, 255);
    border: 1px solid #000;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.4);
    width: 50%;
    text-align: center;
  }

  P{
    width: 50%;
    margin: 20px auto;
  }

  .send-button{

  }
</style>

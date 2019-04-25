<template>
  <div id="display">
    <div v-for="user in users">
        <div>
            {{user.name}}
        </div>
      <p></p>
    </div>
  </div>
</template>
<script>
// Vue CLIで作成したアプリでは、@マークは./srcを指す
import firebase from '@/firebase/firestore'

export default {
  name: 'display',
  data() {
    return {
        users: [],
    }
  },
  

    mounted() {
    firebase.firestore().collection('formcontent').get().then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.users = array
    });
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

</style>

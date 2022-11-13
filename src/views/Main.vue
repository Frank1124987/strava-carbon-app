<template>
  <div class="">
    <h1>Hello! {{ $route.params.account }}</h1>
    <button @click="signOut">Log out</button>
    <form @submit.prevent="submit">
      <div>
        <h1>帳號資訊</h1>
        <div>
          <label for="client-id">client id:</label>
          <input id="client-id" v-model="client.id" >
        </div>
        <div>
          <label for="client-secret">client secret:</label>
          <input id="client-secret" v-model="client.secret">
        </div>
      </div>
      <div>
        <h1>通勤習慣</h1>
        <UserSurvey v-for="(interval, key) in surveyInterval"
          :key=key
          :answer = "surveyResult[interval]"
          @update:answer = "(newKey, newValue) => {surveyResult[interval][newKey] = newValue}"
        >
          <template #question>
            如果不考慮電動自行車，在{{ interval }}公里的路程會選擇何種交通工具。
          </template>
        </UserSurvey>
      </div>
      <br>
      <div>
        <h1>要上傳的</h1>
        <label for="activity-id">Activity Id:</label>
        <input v-model="client.activityId" id="activity-id" type="text">
      </div>
      <br>
      <button>Submit</button>
    </form>

    <div v-if="submitted">
      <CustomLink :to="authLink" > Auth </CustomLink>
    </div>
  </div>
</template>

<script>
import { reactive, ref} from 'vue'
import { useRouter } from 'vue-router'

import { onAuthStateChanged } from 'firebase/auth'

import dataService from "@/services/dataService.js"
import UserSurvey from '@/components/UserSurvey.vue'
import firebaseAuth from '@/firebase/firebaseAuth.js'
import firestore from '@/firebase/firebaseFirestore.js'

export default {
  name: 'HelloWorld',
  components:{
    UserSurvey
  },
  setup(){
    const router = useRouter()

    const client = reactive({
      id: null,
      secret: null,
      activityId: null
    })
    
    const authLink = ref("")
    const submitted = ref(false)
    const surveyInterval = reactive(['2', '5', '15', '20', '20以上'])
    const surveyResult = reactive({
      2:{
        first: null,
        second: null,
        third: null,
        firstPer: 0,
        secondPer: 0,
        thirdPer: 0
      },
      5:{
        first: null,
        second: null,
        third: null,
        firstPer: 0,
        secondPer: 0,
        thirdPer: 0
      },
      15:{
        first: null,
        second: null,
        third: null,
        firstPer: 0,
        secondPer: 0,
        thirdPer: 0
      },
      20:{
        first: null,
        second: null,
        third: null,
        firstPer: 0,
        secondPer: 0,
        thirdPer: 0
      },
      '20以上':{
        first: null,
        second: null,
        third: null,
        firstPer: 0,
        secondPer: 0,
        thirdPer: 0
      }
    })

    const submit = () => {
      submitted.value = true

      // Dev version
      authLink.value = `https://www.strava.com/oauth/authorize?client_id=${client.id}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=activity:read_all`
      // Public version
      // authLink.value = `https://www.strava.com/oauth/authorize?client_id=${client.id}&response_type=code&redirect_uri=https://27b3-119-14-159-44.jp.ngrok.io/exchange_token&approval_prompt=force&scope=activity:read_all`
      
      let data = {
        client: client,
        survey: surveyResult
      }

      firestore.createInfo(firebaseAuth.auth.currentUser.email, data)

      dataService.uploadData(client, surveyResult)
      .then(() => {
        console.log("data submitted")
      })
    }


    onAuthStateChanged(firebaseAuth.auth, (user) => {
        if (!user){
          router.push('/login')
          return
        }

        firestore.getInfo(user.email)
          .then((data) => {
            // console.log(data)
            Object.assign(client, data.client)
            Object.assign(surveyResult, data.survey)
          })
    })

    const signOut = async() => {
      const result = await firebaseAuth.signOut()
    }


    return{
      client,
      authLink,
      submit,
      submitted,
      surveyResult,
      surveyInterval,
      signOut
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
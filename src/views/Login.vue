<template>
    <div>
        <h1>Login</h1>
        <button @click="signIn">login</button>
    </div>
</template>
<script>
import firebaseAuth from '@/firebase/firebaseAuth.js'
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router'

export default {
    setup(){
        const router = useRouter()

        const signIn = async () => {
            const result = await firebaseAuth.signIn()

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            console.log(user)

            router.push(`/user/${user.email}`)
        }

        onAuthStateChanged(firebaseAuth.auth, (user) => {
            if (user){
                router.push(`/user/${user.email}`)
            }
        })

        return{
            signIn
        }
    }    
}
</script>
<style lang="">
    
</style>
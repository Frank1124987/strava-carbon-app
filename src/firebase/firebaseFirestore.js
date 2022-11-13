import {getFirestore, collection, getDoc, doc, setDoc, addDoc, getDocs} from 'firebase/firestore/lite';
import {app} from '@/firebase/firebaseInit.js'

class firestore{
    db = getFirestore(app)

    async createInfo(account, data){
        // console.log(account, data)
        await setDoc(doc(this.db, 'userInfo', account), data)
    }

    async getInfo(account){
        const result = await getDoc(doc(this.db, 'userInfo', account))
        if (result.exists()){
            const data = result.data()
            // console.log(result.data())
            return data
        }
    }
}

export default new firestore
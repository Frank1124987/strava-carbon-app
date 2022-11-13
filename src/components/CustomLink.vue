<template>
    <div>
        <a v-if="isExternal" 
            :href="to" 
            target="_blank"
        > <slot/></a>
        <router-link v-else v-bind="props"><slot/></router-link>
    </div>
</template>
<script>
import {RouterLink} from "vue-router"
import {computed, toRefs} from 'vue'

export default {
    props:{
        ...RouterLink.props
    },
    // computed: {
    //     isExternal(){
    //         console.log()
    //         return typeof this.to === 'string' && this.to.startsWith('https')
    //     }
    // }
    setup(props){
        const {to} = toRefs(props)
        // console.log(props) 
        const isExternal = computed(() => {
            return typeof to.value === 'string' && to.value.startsWith('http')
        })

        return{
            to,
            isExternal
        }
    }
}
</script>
<style lang="">
</style>
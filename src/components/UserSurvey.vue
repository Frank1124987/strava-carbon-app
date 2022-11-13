<template>
    <div>
        <h3>
            <slot name="question"/>
        </h3>
        <div class="">
            <label for="selectFirst">第一選項：</label>
            <select id="selectFirst" 
                required
                :value="answer.first"
                @change="$emit('update:answer', 'first', $event.target.value)"
            >
                <!-- !PROBLEM: Why won't placeholder display text -->
                <option value="null" disabled selected>請選擇</option>
                <option v-for="(opt, key) in options" :key="key" :value="opt.value">
                    {{ opt.text }}
                </option>
            </select>

            <label for="selectSecond">第二選項：</label>
            <select id="selectSecond" 
                :value="answer.second"
                @change="$emit('update:answer', 'second', $event.target.value)"    
            >
                <option value="null" disabled selected>請選擇</option>
                <option v-for="(opt, key) in options" :key="key" :value="opt.value">
                    {{ opt.text }}
                </option>
                <option value="">無</option>
            </select>

            <label for="selectThird">第三選項：</label>
            <select id="selectThird" 
                :value="answer.third"
                @change="$emit('update:answer', 'third', $event.target.value)"
            >
                <option value="null" disabled selected>請選擇</option>
                <option v-for="(opt, key) in options" :key="key" :value="opt.value">
                    {{ opt.text }}
                </option>
                <option value="">無</option>
            </select>
        </div>
        <div>
            <label for="firstPercentage">第一選項%：</label>
            <input type="number" id="firstPercentage"
                :value = "answer.firstPer"
                @input="$emit('update:answer', 'firstPer', Number($event.target.value))"
            >
            <label for="secondPercentage">第二選項%：</label>
            <input type="number" id="secondPercentage"
                :value = "answer.secondPer"
                @input="$emit('update:answer', 'secondPer', Number($event.target.value))"
            >
            <label for="thirdPercentage">第三選項%：</label>
            <input type="number" id="thirdPercentage"
                :value = "answer.thirdPer"
                @input="$emit('update:answer', 'thirdPer', Number($event.target.value))"
            >
        </div>

    </div>
</template>
<script>
import {reactive, toRefs} from 'vue'
export default {
    emits:[
        'update:answer'
    ],
    props: {
        answer:{
            required: true
        }
    },
    setup(props){
        const {answer} = toRefs(props)
        // console.log(answer)
        // watch()
        const options = reactive([
            {
                text: '機車',
                value: 'scooter'
            },
            {
                text: '電動機車',
                value: 'eScooter'
            },
            {
                text: '公車',
                value: 'bus'
            },
            {
                text: '汽車',
                value: 'car'
            },
            {
                text: '油電混合車',
                value: 'hCar'
            },
            {
                text: '電動車',
                value: 'eCar'
            },
            {
                text: '捷運',
                value: 'mrt'
            },
            {
                text: '火車',
                value: 'train'
            },
            {
                text: '高鐵',
                value: 'hsr'
            },
            {
                text: '步行',
                value: 'walk'
            },
            {
                text: '自行車',
                value: 'bike'
            }
        ])

        const selectedOptions = reactive({
            "first" : null,
            "second" : null,
            "third" : null
        })

        
        return{
            options,
            selectedOptions
        }
    }
}
</script>
<style lang="">
    
</style>
<template>
    <div>
        <h3>
            <slot name="question"/>
        </h3>
        <div id="survey-container">
            <div class="">
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
            </div>
            <div>
                <div>
                    <label for="firstPercentage">第一選項%：</label>
                    <input type="number" id="firstPercentage"
                        :value = "answer.firstPer"
                        @input="$emit('update:answer', 'firstPer', Number($event.target.value))"
                    >
                </div>
                <div>
                    <label for="secondPercentage">第二選項%：</label>
                    <input type="number" id="secondPercentage"
                        :value = "answer.secondPer"
                        @input="$emit('update:answer', 'secondPer', Number($event.target.value))"
                    >
                </div>
                <div>
                    <label for="thirdPercentage">第三選項%：</label>
                    <input type="number" id="thirdPercentage"
                        :value = "answer.thirdPer"
                        @input="$emit('update:answer', 'thirdPer', Number($event.target.value))"
                    >
                </div>
            </div>
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
        // console.log(answer)
        // watch()
        const options = reactive([
            {
                text: '機車',
                value: '機車'
            },
            {
                text: '電動機車',
                value: '電動機車'
            },
            {
                text: '公車',
                value: '公車'
            },
            {
                text: '汽車',
                value: '汽車'
            },
            {
                text: '油電混合車',
                value: '油電混合車'
            },
            {
                text: '電動車',
                value: '電動車'
            },
            {
                text: '捷運',
                value: '捷運'
            },
            {
                text: '火車',
                value: '火車'
            },
            {
                text: '高鐵',
                value: '高鐵'
            },
            {
                text: '步行',
                value: '步行'
            },
            {
                text: '自行車',
                value: '自行車'
            },
            {
                text: '電動自行車',
                value: '電動自行車'
            }
        ])

        return{
            options
        }
    }
}
</script>
<style>
#survey-container{
    display: flex;
    justify-content: center;
}
</style>
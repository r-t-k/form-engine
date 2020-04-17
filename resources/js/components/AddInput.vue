<template>
    <div v-if="appEdit">
        <label>
            input type:
            <select v-model="meta.type">
                <option disabled value="">Choose Type</option>
                <option>button</option>
                <option>checkbox</option>
                <option>color</option>
                <option>date</option>
                <option>datetime-local</option>
                <option>email</option>
                <option>file</option>
                <option>hidden</option>
                <option>image</option>
                <option>month</option>
                <option>number</option>
                <option>password</option>
                <option>radio</option>
                <option>range</option>
                <option>reset</option>
                <option>search</option>
                <option>submit</option>
                <option>tel</option>
                <option>text</option>
                <option>time</option>
                <option>url</option>
                <option>week</option>
            </select>
        </label>
        <label>
            input ID:
            <input v-model="meta.inputId" type="text">
        </label>
        <label>
            input label:
            <input v-model="meta.label" type="text">
        </label>
        <label>
            input default value:
            <input v-model="meta.value" type="text">
        </label>
        <button @click="createText">Add Input</button>
    </div>
</template>

<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	import storeData from "../store/index";
	const store = new Vuex.Store(
		storeData
	);
	import FormInput from "./FormInput";

	export default {
		name   : "AddInput",
		data() {
			return {
				meta: {
					type       : '',
					inputId    : '',
					label      : '',
					name       : '',
					value      : '',
					placeholder: '',
					section    : '',
					order      : ''
				}
			}
		},
		computed    : {
			appEdit(){
				return this.$store.getters.getEdit;
			}
		},
		methods: {
			createText() {
				var ComponentClass = Vue.extend(FormInput);
				var instance = new ComponentClass({
					/*propsData: {type: 'text', inputId: 'testClone', label: 'text clone'}*/
					propsData: this.meta,
                    store
				});
				/*instance.$slots.default = ['Click me!'];*/
				instance.$mount(); // pass nothing
//         console.log(this.$refs)
				this.$parent.$refs["group"].appendChild(instance.$el);
				for (var key in this.meta){
					if (this.meta.hasOwnProperty(key)){
						if (typeof this.meta[key] === 'string'){
							this.meta[key] = undefined;
						} else if (this.meta[key] instanceof Array) {
							this.meta[key] = [];
						} // else ???  Not sure how you want to handle other types
					}
				}
			}
		}
	}
</script>

<style scoped>

</style>

<template>
    <div v-if="appEdit">
        <!--  <label>
              input ID:
              <input v-model="meta.inputId" type="text">
          </label>-->
        <label>
           Section Order:
            <input v-model="meta.order" type="text">
        </label>
        <button @click="createSection">Add Section</button>
    </div>
</template>

<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	import Helpers from "../helpers.js";
	import storeData from "../store/index";
	const store = new Vuex.Store(
		storeData
	);
	import FormSection from "./FormSection";

	export default {
		name   : "AddSection",
		data() {
			return {
				meta: {
					sectionId    : '',
					order      : ''
				}
			}
		},
		computed    : {
			appEdit(){
				return this.$store.getters.getEdit;
			},
			formId(){
				return this.$store.getters.getFormId;
			}
		},
		methods: {
			setInputId() {
				this.meta.sectionId = Helpers.genInputId(this.$store.getters.getFormId);
			},
			createSection() {
				this.setInputId();
				var ComponentClass = Vue.extend(FormSection);
				var instance = new ComponentClass({
					/*propsData: {type: 'text', inputId: 'testClone', label: 'text clone'}*/
					propsData: this.meta,
					store
				});
				/*instance.$slots.default = ['Click me!'];*/
				instance.$mount(); // pass nothing
//         console.log(this.$refs)
				this.$parent.appendChild(instance.$el);
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

<template>
    <div v-if="appEdit">
        <label>
            input type:
            <select v-model="meta.type">
                <option disabled value="">Choose Type</option>
                <option>button</option>
                <option disabled value="">checkbox</option>
                <option disabled value="">color</option>
                <option disabled value="">date</option>
                <option disabled value="">datetime-local</option>
                <option disabled value="">email</option>
                <option disabled value="">file</option>
                <option disabled value="">hidden</option>
                <option disabled value="">image</option>
                <option disabled value="">month</option>
                <option>number</option>
                <option>password</option>
                <option disabled value="">radio</option>
                <option disabled value="">range</option>
                <option disabled value="">reset</option>
                <option disabled value="">search</option>
                <option>submit</option>
                <option disabled value="">tel</option>
                <option>text</option>
                <option disabled value="">time</option>
                <option disabled value="">url</option>
                <option disabled value="">week</option>
            </select>
        </label>
        <!--  <label>
              input ID:
              <input v-model="meta.inputId" type="text">
          </label>-->
        <label>
            input label:
            <input v-model="meta.label" type="text">
        </label>
        <label>
            input default value:
            <input v-model="meta.value" type="text">
        </label>
        <label>
            group:
            <input v-model="meta.value" type="text">
        </label>
        <button @click="createInput">Add Input</button>
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
	import FormInput from "./FormInput";

	export default {
		name    : "AddInput",
		data() {
			return {
				meta: {
					type       : '',
					inputId    : '',
					label      : '',
					name       : '',
					value      : '',
					placeholder: '',
					group      : '',
					order      : ''
				}
			}
		},
		computed: {
			appEdit() {
				return this.$store.getters.getEdit;
			},
			formId() {
				return this.$store.getters.getFormId;
			}
		},
		methods : {
			setInputId() {
				if (!this.meta.inputId) {
					this.meta.inputId = Helpers.genInputId(this.$store.getters.getFormId);
				}
			},
			setSectionId() {
				//this.meta.section = this.$parent.$props.sectionId;
			},
			createInput() {
				this.setInputId();
				//this.setSectionId();
				var ComponentClass = Vue.extend(FormInput);
				var instance = new ComponentClass({
					/*propsData: {type: 'text', inputId: 'testClone', label: 'text clone'}*/
					propsData: this.meta,
					store
				});
				/*instance.$slots.default = ['Click me!'];*/
				instance.$mount(); // pass nothing
//         console.log(this.$refs)
				this.$parent.$refs["form"].appendChild(instance.$el);
				for (var key in this.meta) {
					if (this.meta.hasOwnProperty(key)) {
						if (typeof this.meta[key] === 'string') {
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

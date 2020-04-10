<template>
    <div class="container">
        <button v-on:click="loadForm">Load Form by ID: </button>
        <input v-model="form.id" placeholder="Form Id">
        <input v-model="form.data" placeholder="Form Data">
        <input v-model="form.name" placeholder="Form Name">
        <button v-on:click="saveForm">save</button>
        <p>Form Name: {{ storedForm.name }}</p>
        <p>Form Data: {{ storedForm.data }}</p>
        <p>Form ID: {{ getCurrentFormId }}</p>
    </div>
</template>

<script>
	export default {
		name    : "FormBasicDisplay",
		data() {
			return {
				form: {
					name: '',
                    data: '',
                    id: 0
                },
            }
		},
		mounted() {
			this.$store.dispatch("getFormData");
		},
		computed: {
			storedForm(){
				return this.$store.getters.getForm;
            },
            getCurrentFormId(){
				return this.$store.getters.getCurrentFormId;
            }
		},
		methods: {
			saveForm(){
				this.$store.dispatch("saveForm", this.form);
				/*this.activeFormId = this.$store.getters.getCurrentFormId;*/
				this.$store.dispatch("getFormData");
				/*this.$store.commit("loadForm");*/
			},
			loadForm(){
				this.$store.commit("changeCurrentForm", parseInt(this.form.id));
				this.$store.dispatch("getFormData");

				/*this.$store.commit("loadForm");*/
			},

		}
	}
</script>

<style scoped>

</style>

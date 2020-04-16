<template>
    <div>
        <h2>{{ formInputs.testInput.name }}:</h2> <h3>{{ formInputs.testInput.value}}</h3> <br />
        <h2>{{ formInputs.testPassword.name }}:</h2> <h3>{{ formInputs.testPassword.value}}</h3> <br />
    </div>
</template>

<script>

	export default {
		name    : "FormBasicDisplay",
		data() {
			return {}
		},
		mounted() {

		},
		computed: {
			formInputs() { //final output from here
				return this.$store.getters.getFormInputs;
			}
		},
        methods: {
        }
	}
</script>

<style scoped>

</style>

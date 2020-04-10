<template>
    <div>
        <h1>{{ getCount }}</h1>
        <button v-on:click="increase">add 1</button>
    </div>
</template>

<script>

	export default {
		name    : "FormBasicDisplay",
		data() {
			return {}
		},
		mounted() {
			this.$store.dispatch("increment")
		},
		computed: {
			getCount() { //final output from here
				return this.$store.getters.getCount;
			}
		},
        methods: {
			increase(){
				this.$store.commit("increment");
            }
        }
	}
</script>

<style scoped>

</style>

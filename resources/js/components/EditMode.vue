<template>
    <div>
        <button @click="toggleEdit">Edit Form</button>
    </div>
</template>

<script>
	export default {
		name: "EditMode",
        computed: {
			/*appMode() {
				return this.$store.getters.getEdit;
            }*/
        },
        methods: {
			toggleEdit(){
				this.$store.commit('setEdit');
            }
        }
	}
</script>

<style scoped>

</style>

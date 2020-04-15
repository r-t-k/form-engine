<template>
    <div>
        <form v-html=htmlDisplay></form>
    </div>
</template>

<script>
	export default {
		name    : "FormBasicEdit",
		data() {
			return {
				htmlDisplay : ''
			}
		},
		created() {
			this.$store.watch(
				(state)=>{
					return this.$store.state.formEdit // could also put a Getter here
				},
				(newValue, oldValue)=>{
                    if (newValue === true){
						this.listTempForm();
                    }
				},
			)
		},
		computed: {
			tempForm() {
				return this.$store.getters.getTempFormData;
			},
		},
		methods : {
                listTempForm(){
                	let self = this;
					Object.keys(this.tempForm).forEach(function (item) {
						self.htmlDisplay += itemWithDelete;
						console.log(self.tempForm);
					});
                }
		}
	}

</script>

<style scoped>

</style>

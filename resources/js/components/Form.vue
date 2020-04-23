<template>
    <div class="fe-form" ref="form">
        <form :id="formId" @submit.prevent>
            <slot></slot>
        </form>
    </div>
</template>

<script>
	export default {
		name    : "Form",
		data() {
			return {
				meta   : {
					action: '',
					target: '',
				},
                sections: {},
				baseTag: 'div',
			}
		},
		computed: {
			dynamicComponent() {
				let tag = '';
				if (this.$store.getters.getEdit) {
					tag = 'div';
				} else {
					tag = 'form';
				}
                return tag;
			},
			formId() {
				return this.$store.getters.getFormId;
			},
			appEdit() {
				return this.$store.getters.getEdit;
			},
            formData(){
				return this.$store.getters.getForm
            }
		},
        methods : {
			buildSections (){
				let self = this;
				for (var s in self.formData.sections) {
					console.log(self.formData.sections[s]['id']);
				/*	for (var sec in s) {
						console.log(s['id']);
					}*/
				}
            }
        }
	}
</script>

<style scoped>
    .fe-form {
        background: #ddd;
    }
</style>

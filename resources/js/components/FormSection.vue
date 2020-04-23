<template>
    <div class="form-section" ref="section">
        <slot></slot>
    </div>
</template>
<script>
	export default {
		name        : "FormSection",
		inheritAttrs: false,
		props       : [
			'order',
			'sectionId',
		],
		data() {
			return {
				meta: {
					id   : this.sectionId,
					order: this.order,
				},
			}
		},
		mounted() {
			let payload = {
				id  : this.meta.id,
				data: this.meta,
			};
			this.$store.commit('setFormSection', payload);

		},
		computed    : {},
		methods     : {
		},
		updated() {
			let payload = {
				id  : this.meta.id,
				data: this.meta,
			};
			this.$store.commit('setFormSection', payload);
		}
	}
</script>

<style scoped>
    .form-section {
        background: red;
    }
</style>

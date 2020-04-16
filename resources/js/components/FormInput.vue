<template>
    <label>
        {{ label }}
        <input v-bind="$attrs" :input-id="meta.id" :name="meta.name" :type="meta.type" :order="meta.order" v-bind:value="meta.value" v-on:input="changeValue($event.target.value)">
    </label>

</template>

<script>
	export default {
		name        : "FormInput",
		inheritAttrs: false,
		props       : [
			'label',
			'value',
            'inputId',
            'name',
            'type',
            'placeholder',
            'order',
		],
		data() {
			return {
				meta       : {
				    id: this.inputId,
					type: this.type,
					name: this.name,
                    placeholder: this.placeholder,
					value : this.value,
                    order : this.order,
                },
			}
		},
		mounted() {
			let payload = {
				id : this.meta.id,
				data : this.meta,
			};
			this.$store.commit('setFormInput', payload);
		},
		computed    : {},
		methods     : {
			changeValue(x){
                this.meta.value = x;
                this.value = this.meta.value;
            }
        },
     updated() {
			let payload = {
				id : this.meta.id,
				data : this.meta,
            };
			this.$store.commit('setFormInput', payload);
	 }
	}
</script>

<style scoped>

</style>

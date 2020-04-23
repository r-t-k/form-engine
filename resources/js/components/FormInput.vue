<template>
    <div class="form-input">
        <label>
            {{ label }}
            <input :class="group" v-bind="$attrs" :input-id="meta.id" :name="meta.name" :type="meta.type" :order="meta.order" :section="meta.group" v-bind:value="meta.value" v-on:input="changeValue($event.target.value)">
        </label>
        <button v-if="appEdit"  @click="deleteSelf">X</button>
        <!--<button v-if="appEdit"  @click="">Modify</button>-->
    </div>
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
			'group',
			'order',
		],
		data() {
			return {
				meta: {
					id         : this.inputId,
					type       : this.type,
					name       : this.name,
					placeholder: this.placeholder,
					value      : this.value,
					order      : this.order,
					group    : this.group,
                    active: true
				},
			}
		},
		mounted() {
			let payload = {
				id  : this.meta.id,
				data: this.meta,
			};
			this.$store.commit('setFormInput', payload);
		},
		computed    : {
			appEdit(){
				return this.$store.getters.getEdit;
            }
        },
		methods     : {
			changeValue(x) {
				this.meta.value = x;
				this.value = this.meta.value;
			},
			deleteSelf() {
				// destroy the vue listeners, etc
				this.$destroy();
				// remove the element from the DOM
				this.$el.parentNode.removeChild(this.$el);
				//update state
                this.meta.active = false;
				let payload = {
					id  : this.meta.id,
					data: this.meta,
				};
				this.$store.commit('setFormInput', payload);
			}
		},
		updated() {
			let payload = {
				id  : this.meta.id,
				data: this.meta,
			};
			this.$store.commit('setFormInput', payload);
		}
	}
</script>

<style scoped>

</style>

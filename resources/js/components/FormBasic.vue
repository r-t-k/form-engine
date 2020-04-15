<template>
    <div>
        <input v-model="elName" type="text" placeholder="Element name"> <br />
        <input v-model="elLabel" type="text" placeholder="Element Label"> <br />
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>text</option>
            <option>password</option>
            <option>email</option>
        </select>
        <span>Selected: {{ selected }}</span> <br />
        <button v-on:click="createFormEl">Create Element</button>
        <br />
        <button v-on:click="renderForm">Render Form</button>
        <br />
        <button v-on:click="updateTempForm">Save Form</button>
        <br />
        <button v-on:click="toggleEditActive">Edit Form</button>
        <br />
        <form v-html=rawHtml></form>
    </div>
</template>

<script>
	import basicKit from '../form_style_kits/basic-kit.json';

	export default {
		name    : "FormBasic",
		data() {
			return {
				elName  : '',
				elLabel : '',
				selected: '',
				rawHtml : '',
				kit     : basicKit,
				form    : {}
			}
		},
		mounted() {

		},
		computed: {
			tempForm() {
				return this.$store.getters.getTempFormData;
			},
		},
		methods : {
			createFormEl() {
				//console.log(this.kit[this.selected]);
				let tag = this.kit[this.selected].tag;
				let type = this.kit[this.selected].type;
				let id = this.kit[this.selected].id;
				let selector = this.kit[this.selected].selector;
				let placeholder = this.kit[this.selected].placeholder;
				let label = `<label for="` + this.elName + `">` + this.elLabel + `</label>`;
				let html = label + '<' + tag + ' type="' + type + '" ' + 'id="' + id + '" ' + 'class="' + selector + '" ' + 'placeholder="' + placeholder + '" ' + '/>';
				console.log(html);
				this.form[this.elName] = html;
				this.elName = '';
			},
			renderForm() {
				let self = this;

				function resetHtml() {
					self.rawHtml = '';
				}

				resetHtml();
				Object.keys(this.form).forEach(function (item) {
					self.rawHtml += self.form[item];
					console.log(self.form);
				});

			},
			updateTempForm() {
				this.$store.commit('setTempFormData', this.form);
			},
			toggleEditActive() {
				this.$store.commit('setFormEdit', true);
			}
		}
	}
</script>

<style scoped>

</style>

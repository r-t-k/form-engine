export default {

    state    : {
        edit: true,
        form: {
            id: 'bastard_form',
            sections : {},
            inputs: {}
        }
    },
    getters  : {
        getForm(state) {
            return state.form
        },
        getFormId(state) {
            return state.form.id
        },
        getFormInputs(state) {
            return state.form.inputs
        },
        getFormSections(state) {
            return state.form.sections
        },
        getEdit(state) {
            return state.edit
        }

    },
    mutations: {

        /*saveRaw(state, val) {
            state.raw = val;
            state.form = state.raw.find(x => x.id === state.currentFormId);
            console.log("loading form by index of: " + state.currentFormId);
        },*/
       /* setFormEdit(state, val) {
            state.formEdit = val;
        },*/
        setFormInput(state, payload) {
            if (state.form.inputs[payload.id]) {
                state.form.inputs[payload.id] = payload.data;
                //console.log('doesnt exist');
            } else {
                Vue.set(state.form.inputs, payload.id, payload.data);
                //console.log('exists');
            }

        },
        setFormSection(state, payload) {
            if (state.form.sections[payload.id]) {
                state.form.sections[payload.id] = payload.data;
                //console.log('doesnt exist');
            } else {
                Vue.set(state.form.sections, payload.id, payload.data);
                //console.log('exists');
            }
        },
        setEdit(state){
            state.edit = !state.edit;
        }
    },
    actions  : {
        /*getFormData(context) {
            axios.get("api/forms")
                .then((response) => {
                    console.log(response);
                    context.commit("saveRaw", response.data.forms);
                })
                .catch(() => {

                    console.log("Error........")

                })
        },*/
      /*  saveForm(context, newData) {
            axios.post("api/forms", {data: newData.data, name: newData.name})
                .then((response) => {
                    console.log('success');
                    console.log(response.data.record.id);
                    context.commit("changeCurrentForm", response.data.record.id);
                    context.commit("saveRaw", response.data.forms);
                })
                .catch(() => {
                    console.log("Post Error........")
                })
        },*/

    },
}

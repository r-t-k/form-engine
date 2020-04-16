export default {

    state    : {
        form: {
            inputs: {}
        }
    },
    getters  : {
        getCount(state) { //take parameter state
            return state.count
        },
        getForm(state) {
            return state.form
        },
        getFormInputs(state) {
            return state.form.inputs
        }


    },
    mutations: {
        increment(state) {
            state.count++
        },
        saveRaw(state, val) {
            state.raw = val;
            state.form = state.raw.find(x => x.id === state.currentFormId);
            console.log("loading form by index of: " + state.currentFormId);
        },
        setFormEdit(state, val) {
            state.formEdit = val;
        },
        setFormInput(state, payload) {
            if (state.form.inputs[payload.id]) {
                state.form.inputs[payload.id] = payload.data;
                //console.log('doesnt exist');
            } else {
                Vue.set(state.form.inputs, payload.id, payload.data);
                //console.log('exists');
            }

        },


    },
    actions  : {
        increment(context) {
            context.commit('increment')
        },
        /*saveForm(context, val) {
            context.commit('saveForm', val)
        },*/
        getFormData(context) {
            axios.get("api/forms")
                .then((response) => {
                    console.log(response);
                    context.commit("saveRaw", response.data.forms);
                })
                .catch(() => {

                    console.log("Error........")

                })
        },
        saveForm(context, newData) {
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
        },

    },
}

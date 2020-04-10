export default {

    state    : {
        count: 0,
        form : {},
        raw  : [],
        currentFormId: 1
    },
    getters  : {
        getCount(state) { //take parameter state
            return state.count
        },
        getForm(state) { //take parameter state
            return state.form
        },
        getCurrentFormId(state) { //take parameter state
            return state.currentFormId
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
        loadForm(state) {
            state.form = state.raw.find(x => x.id === state.currentFormId);
            console.log("loading form by index of: " + state.currentFormId);
        },
        changeCurrentForm(state, val) {
          state.currentFormId = val;
        }

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
                    context.commit("changeCurrentForm",response.data.record.id);
                    context.commit("saveRaw", response.data.forms);
                })
                .catch(() => {
                    console.log("Post Error........")
                })
        },

    },
}

var app = new Vue({

    el: '#root',
    data: {
        contacts: contacts,
    },
    created() {
        console.log(this.contacts);
    },
});
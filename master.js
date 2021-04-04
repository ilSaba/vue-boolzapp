var app = new Vue({

    el: '#root',
    data: {
        index: 0,
        contacts: contacts,
    },
    methods: {
        getTime: function (date) {
            let datetime = new Date(date);
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            return `${hours}:${minutes}`;
        },
    },
});
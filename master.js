var app = new Vue({

    el: '#root',
    data: {
        index: 0,
        contacts: contacts,
        message: '',
    },
    methods: {
        getTime: function (date) {
            let datetime = new Date(date);
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            return `${hours}:${minutes}`;
        },
        getLastAccess: function (index) {
            const messages = this.contacts[index].messages;
            const lastIndex = messages.length - 1;

            return messages[lastIndex].date;
        },
        send: function () {
            const nowIndex = this.index
            const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
            const message = {
                date,
				text: this.message,
				status: 'sent',
            }
            this.contacts[nowIndex].messages.push(message);
            this.message = '';

            setTimeout(() => {
                const date = dayjs().format('DD/MM/YYYY HH:mm:ss');
                const message = {
                    date,
                    text: 'Ok! Mamy',
                    status: 'received',
                }
                this.contacts[nowIndex].messages.push(message);
            }, 1000);
        }
    }
});
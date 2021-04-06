var app = new Vue({

    el: '#root',
    data: {
        index: 0,
        indexMess: null,
        contacts: contacts,
        message: '',
        filter: '',
        showWindow: false,
        currentMessage: '',
    },
    methods: {
        showMenu: function (index) {
            if (this.showWindow) {
                this.showWindow = false;
                
            } else {
                this.showWindow = true;
                this.currentMessage = index;
            }
            
        },
        getTime: function (date) {
            let datetime = new Date(date);
            let hours = datetime.getHours();
            let minutes = datetime.getMinutes();
            return `${hours}:${minutes}`;
        },
        getLastAccess: function (index) {
            const messages = this.contacts[index].messages;

            if (messages.length) {
                const lastIndex = messages.length - 1;

                return messages[lastIndex].date;
            }  else {
                return '';
            }

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
                    text: 'Ok!',
                    status: 'received',
                }
                this.contacts[nowIndex].messages.push(message);
            }, 1000);
        },
        deleteMsg: function (indexMess) {
            this.contacts[this.index].messages.splice(indexMess, 1);
        }
    }
});
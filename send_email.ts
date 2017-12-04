import { EmailComposer } from '@ionic-native/email-composer';

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.isAvailable().then((available: boolean) => {
    if (available) {
        //Now we know we can send
    }
});

let email = {
    to: 'max@mustermann.de',
    cc: 'erika@mustermann.de',
    bcc: ['john@doe.com', 'jane@doe.com'],
    subject: 'Cordova Icons',
    body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
};

// Send a text message using default options
this.emailComposer.open(email);

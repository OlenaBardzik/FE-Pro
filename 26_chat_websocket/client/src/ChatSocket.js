export class ChatSocket {
    static URL = 'ws://localhost:8000';

    #ws = new WebSocket(ChatSocket.URL);
    #listeners;

    constructor(listeners) {
        this.#listeners = listeners;
        this.#ws.onopen = this.onOpen.bind(this);
        this.#ws.onclose = this.onClose.bind(this);
        this.#ws.onmessage = this.onMessage.bind(this);
        this.#ws.onerror = this.onError.bind(this);
    }

    onOpen(event) {
        console.log("Connection is opened");
    }

    onClose(event) {
        console.log("Connection is closed");
    }

    onMessage(event) {
        try {
            let data = JSON.parse(event.data);
            this.#listeners.onMessage(data)
        } catch(error) {
            this.onError(error);
        }
    }

    onError(error) {
        console.log(`Error: ${error.message}`);
        this.#listeners.onError(error.message);
    }

    send(body) {
        try {
            this.#ws.send(JSON.stringify(body));
        } catch(error) {
            this.onError(error);
        }
    }
}

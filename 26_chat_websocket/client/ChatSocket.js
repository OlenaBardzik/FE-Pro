class ChatSocket {
    #ws = new WebSocket('ws://localhost:8080');

    constructor(listeners) {
        this.#ws.onmessage = listeners.onMessage;
        this.#ws.onerror = listeners.onError;
    }

    send(body) {
        this.#ws.send(JSON.stringify(body));
    }
}

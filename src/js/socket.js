const Socket =function() {
    //创建连接
    this.ws = null;
    this.create = function(url){
        if ('WebSocket' in window) {
            this.ws = new WebSocket(url);
        } else if ('MozWebSocket' in window) {
            this.ws = new MozWebSocket(url);
        } else {
            alert('WebSocket is not supported by this browser.');
            return;
        }
        return this.ws;
    }
    // this.onmessage = function(onmsgcallback){
    //     if(typeof onmsgcallback != 'function' || this.ws == null) return;
    //     this.ws.onmessage = onmsgcallback(event);
    // }
    // this.send = function(msg){
    // }
}

export default Socket
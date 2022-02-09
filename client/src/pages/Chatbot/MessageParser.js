class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowercase = message.toLowerCase();

        if (lowercase.includes('hola')) {
          this.actionProvider.handleHola()
        } else if (lowercase.includes('ayuda')) {
            this.actionProvider.handleAyuda()
        } else if (lowercase.includes('iphone')) {
            this.actionProvider.handleProducto('iPhone')
        } else if (lowercase.includes('ipad')) {
            this.actionProvider.handleProducto('iPad')
        } else if (lowercase.includes('watch')) {
            this.actionProvider.handleProducto('Apple Watch')
        } else if (lowercase.includes('macbook')) {
            this.actionProvider.handleProducto('Macbook')
        } else if (lowercase.includes('tv')) {
            this.actionProvider.handleProducto('TV & Home')
        } else if (lowercase.includes('homepod')) {
            this.actionProvider.handleProducto('TV & Home')
        } else if (lowercase.includes('airpods')) {
            this.actionProvider.handleProducto('Airpods')
        } else if (lowercase.includes('gracias') || lowercase.includes('perdon') || lowercase.includes('disculpe')) {
            this.actionProvider.handleAgradecer()
        }
        else {
            this.actionProvider.handleReformula()
        }
    }
  }

export default MessageParser
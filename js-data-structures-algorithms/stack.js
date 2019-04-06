function createStack(){
    const stack = []
    return {
        push(item){
            stack.push(item)
        },
        pop(){
            if(stack.length === 0){
                return undefined
            }
            return stack.pop()
        },
        peek(){
            if(stack.length === 0){
                return undefined
            }
            return stack[stack.length - 1]
        },
        get length(){
            return stack.length
        },
        isEmpty(){
            return stack.length === 0
        }
    }
}

const ropa = createStack()
ropa.push('Calzoncillos')
ropa.push('medias')
ropa.push('pantalones')
ropa.push('zapatillas')

ropa.pop()
ropa.pop()

console.log('Ya me saque 2, la siguiente es:', ropa.peek())
console.log('Faltan', ropa.length)
function createQueue(){
    const queue = []
    return{
        enqueue(item) {
            return queue.unshift(item)
        },
        dequeue(){
            return queue.pop()
        },
        peek(){
            return queue[queue.length - 1]
        },
        get length(){
            return queue.length
        },
        isEmpty(){
            return queue.length === 0
        },
        get queue(){
            return queue
        }
    }
}

console.log('Queue.js Test')
console.log('------------------------------------')

// Creo una fila y la testeo
const q = createQueue()
q.enqueue('Hacer un cursito de egghead')
q.enqueue('Codear mejor')
q.enqueue('Be happy')
console.log('Primero en la lista:', q.peek())
// Completo algunas tareas y pruebo
q.dequeue()
q.dequeue()
console.log('Dequeue * 2:', q.peek())
q.dequeue()
console.log('Terminamos?', q.isEmpty())
console.log('------------------------------------')

exports.createQueue = createQueue
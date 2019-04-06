const { createQueue } = require('./queue')

function createPriorityQueue(){
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return{
        enqueue(item, isHightPriority = false){
            isHightPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        dequeue(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.dequeue()
            }

            return lowPriorityQueue.dequeue()
        },
        peek(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.peek()
            }

            return lowPriorityQueue.peek()
        },
        length(){
            return highPriorityQueue.length + lowPriorityQueue.length
        },
        isEmpty(){
            return(highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty())
        }
    }
}

const q = createPriorityQueue()
console.log('priorityQueue.js Test')
console.log('------------------------------------')

// Agrego alguans tareas
q.enqueue('Fix de estilos de una app')
q.enqueue('Solucionar un bug')
q.enqueue('Una nueva feature')
console.log('Primera en la lista:', q.peek())
// Ejecuto una urgente y miro si se encola con prioridad
q.enqueue('TAREA DE EMERGENCIA', true)
console.log('Siguiente tarea: ',q.peek())
// Completo una más y verifico
q.dequeue()
console.log('Siguiente tarea: ', q.peek())

console.log('------------------------------------')
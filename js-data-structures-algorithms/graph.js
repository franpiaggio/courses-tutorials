function createNode(key){
    const neighbors = []
    return{
        key,
        neighbors,
        addNeighbor(node){
            neighbors.push(node)
        }
    }
}

function createGraph(directed = false){
    const nodes = []
    const edges = []
    return{
        directed,
        nodes,
        edges,
        addNode(key){
            nodes.push(createNode(key))
        },
        getNode(key){
            return nodes.find(node => node.key === key)
        },
        addEdge(node1key, node2key){
            const node1 = this.getNode(node1key)
            const node2 = this.getNode(node2key)

            node1.addNeighbor(node2)
            edges.push(`${node1key}-${node2key}`)

            if(!directed){
                node2.addNeighbor(node1)
            }
        },
        print(){
            return nodes.map( ({key, neighbors}) => {
                let result = key
                
                if(neighbors.length){
                    result += `=> ${neighbors
                        .map(neighbor => neighbor.key)
                        .join(' ')
                    }`
                    return result
                }
            })
            .join('\n')
        }
    }
}

const graph = createGraph(true);
graph.addNode('Fran')
graph.addNode('Flor')
graph.addNode('Mora')

graph.addEdge('Fran', 'Flor')
graph.addEdge('Flor', 'Fran')
graph.addEdge('Fran', 'Mora')

console.log('--- Graph 1 not directed ---')
console.log(graph.print())

const graph2 = createGraph();
graph2.addNode('Fran')
graph2.addNode('Flor')

graph2.addEdge('Fran', 'Flor')

console.log('--- Graph 2 directed ---')
console.log(graph2.print())
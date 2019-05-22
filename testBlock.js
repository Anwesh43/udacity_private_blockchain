const Block = require('./src/Block').Block
const block = new Block({name : 'Anwesh', age : 26})
const block1 = new Block({name : 'Bn', age : 30})
const block3 = new Block({name : 'An', age : 28})

block.getBData().then((data)=>{
    console.log(typeof(data))
    console.log(data)
}).catch(err=>{
    console.log(err)
})
const blocks = []
blocks.push(block)
blocks.push(block1)
blocks.push(block3)
async function getAllBlockData(){

  return blocks.map(async (block) => {
      const blockData = await block.getBData()
      return blockData
  }).filter((block) => block.age < 30)
}

async function printAllBlcokData() {
    const blockDatas = await getAllBlockData()
    console.log(blockDatas)
}
printAllBlcokData()

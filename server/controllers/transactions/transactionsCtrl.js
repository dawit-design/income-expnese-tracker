const createTransactionsCtrl = async (req, res) => {
    try{
        res.json({msg: 'Create transactions route'})
    }catch(error){
        res.json(error)
    }
}
const singleTransactionsCtrl = async (req, res) => {
    try{
        res.json({msg: 'Get A single transactions route'})
    }catch(error){
        res.json(error)
    }
}
const deleteTransactionsCtrl = async (req, res) => {
    try{
        res.json({msg: 'Delete transactions route'})
    }catch(error){
        res.json(error)
    }
}
const updateTransactionsCtrl = async (req, res) => {
    try{
        res.json({msg: 'Update transactions route'})
    }catch(error){
        res.json(error)
    }
}

module.exports = {
    createTransactionsCtrl,
    singleTransactionsCtrl,
    deleteTransactionsCtrl,
    updateTransactionsCtrl
}
const createAccountCtrl = async (req, res) => {
    try{
        res.json({msg: 'Create Account route'})
    }catch(error){
        res.json(error)
    }
}
const singleAccountCtrl = async (req, res) => {
    try{
        res.json({msg: 'Get A single account route'})
    }catch(error){
        res.json(error)
    }
}
const deleteAccountCtrl = async (req, res) => {
    try{
        res.json({msg: 'Delete account route'})
    }catch(error){
        res.json(error)
    }
}
const updateAccountCtrl = async (req, res) => {
    try{
        res.json({msg: 'Update account route'})
    }catch(error){
        res.json(error)
    }
}

module.exports = {
    createAccountCtrl,
    singleAccountCtrl,
    deleteAccountCtrl,
    updateAccountCtrl,
}
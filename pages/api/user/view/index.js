
export default function handler(req, res){
    var userArray = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Peter"},
        {"id": 3, "name": "Harry"}
    ];
    if(req.method=='GET'){
        const { id } = req.query
        console.log(id)
        var result = userArray.find(user => user.id === id);
        console.log(result)
        res.status(200).json({ data: result})
    } else{
        res.status(404).json({ message: 'Page Not Found!'})
    }
}
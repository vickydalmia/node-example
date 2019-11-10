module.exports = {
    index:function(req, res){
        res.json({name:"controller example"});
    },
    show:function(req,res){
        res.render('index', {name:"vicky"});
    }
}
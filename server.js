const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]



app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params.id)
    res.json({
        success:true,
        message:'successfully got the page.',
        users:req.params.id
    })
})

app.post('/login',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="username";
    const mockPassword="password";

    if(username==mockUsername && password==mockPassword){
        res.json({
            success:true,
            message:'password and username match!',
            token:'encrypted token goes here'
        })
    }else{
        res.json({
            success:false,
            message:'password and username do not match'
        })
    }
})

app.listen(5000,()=>{
    console.log("server is running")
});
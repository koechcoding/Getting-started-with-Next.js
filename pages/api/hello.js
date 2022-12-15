// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method=='GET'){
    res.status(200).json({ message: "Working GET Request"})
  }else{
    res.status(404).json({ message: 'Page not Found!'})
  }
}

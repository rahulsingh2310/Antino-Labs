import React from 'react';
import ReactDOM from 'react-dom';
import { fas,faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInput } from "shards-react";
import {
Container,
Col,
Row,
Card,
CardHeader,
CardTitle,
CardImg,
CardBody,
CardFooter,
Button,
FormSelect
} from "shards-react";

class Incompleteids extends React.Component {
  constructor(){
    super();
    this.state = {
      data : [],
      open:false,
    }

    this.getData();
  }

addData(){
  let data1 = fetch('https://randomuser.me/api/?results=1&exc=picture').then((resp)=>{
    resp.json().then((res)=>{
      console.log('parsed json', res)
      let next = res.results;
      let prev = this.state.data;
      let newDATA = [...next, ...prev]
      this.setState({
        data: newDATA
      })



})
})
}

getData(){
  let data = fetch('https://randomuser.me/api/?results=50&exc=picture').then((resp)=>{
    resp.json().then((res)=>{
      console.log('parsed json', res)
      this.setState({
        data: res.results
      })



})
})
}

handleClick = user => event => {
  const items  = this.state.data;
  items.splice(items.indexOf(user), 1);

  this.setState({
    data : items
  });
};



render(){
      console.log(this.state.data)

const sortedConf = this.state.data.map(item=>{
return(
<Col lg="3" md="12">
<Card className="h-auto p-1 m-2 ml-3">
   <CardBody>
      <CardTitle  >{item.name.title} {item.name.first} {item.name.last}</CardTitle>
      <span>
          <p>{item.gender}, {item.dob.age}</p>
          <p>{item.email}</p>
          <p>phone : {item.phone}</p>

      </span>
   </CardBody>
   <CardFooter float="center">
      <div>  <Button className="ml-5">Edit</Button>
      <Button className="ml-5" theme="danger" onClick={this.handleClick(item)}>
                    Delete
                  </Button>
                </div>
   </CardFooter>
</Card>
</Col>
)
})

return (
<div>
   <Row className="w-100">
      <Col lg="4">
      <h3 className="m-4" >Fetched Results</h3>
      </Col>

   </Row>
   <Row >

               <Col lg="3" md="12">
               <Card className="h-75 p-1 m-2 ml-3" onClick={() => this.addData()}>
               <CardImg top src="https://cdn.iconscout.com/icon/free/png-512/add-1459-457729.png" alt="alt" onError={(e)=>
               {e.target.onerror = null; e.target.src="../conference.gif"}}/>

                <CardTitle style={{marginLeft:"100px",justifyContent: "center", alignItems: "center"}}>Add New Id</CardTitle>
               </Card>
               </Col>
      {sortedConf}
   </Row>
</div>
);
}
}
export default Incompleteids;

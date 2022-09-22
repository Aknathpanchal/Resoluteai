import "./App.css";
import axios from "axios"
import React ,{useState} from "react";
import Add from "./Components/Add";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
  const [data, setdata] = useState([]);

  const getdatas = () => {
    axios.get("http://localhost:8080/student_data").then((res) => {
      setdata([...res.data]);
    });
  };

  // console.log(getdatas());

  function handleform( firstName,middleName,lastName,batch,division,roll,ad1,ad2,landmark,city,pin) {
    // console.log("enterrrr");
	if(firstName && middleName && lastName && batch && division && roll && ad1 && ad2 && landmark && city && pin){
		// console.log(name && age && mobile && email ==true);
		const obj = {
      firstName,
      middleName,
      lastName,
      batch,
      division,
      roll,
      ad1,
      ad2,
      landmark,
      city,
      pin
		  };
		  axios.post("http://localhost:8080/student_data", obj).then((res) => {
			console.log(res);
	  
			console.log(res.data);
	  
			setdata([...data,res.data])
		  });
	}else{
		alert("Please fill all required fields");
	}
   
  }

  return (
    <div className="App">
      <div className="division1">
        <Sidebar />
        <div>
          <Header />
          <div>
            <Add handleform={handleform}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

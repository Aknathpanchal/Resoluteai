import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./Body";
import D_T from "./D_T";
import noData from './noData.jpg'
function Manage() {
  const [data, setdata] = useState([]);

  const getdatas = () => {
    axios.get("http://localhost:8080/student_data").then((res) => {
      setdata([...res.data]);
    });
  };

  const deletedata = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/student_data/${id}`).then((res) => {
      getdatas();
    });
  };

  useEffect(() => {
    getdatas();
  }, []);

  return (
    <div className="add">
      <div className="same">
        <label htmlFor="name">Edit Student Data</label>
        <div className="date-time">
          <D_T />
        </div>
      </div>
      { data.length > 0 ?(
      <table className="head">
        <thead>
          <tr>
            <td className="head1">Name</td>
            <td className="head1">Class</td>
            <td className="head1">Roll No.</td>
            <td className="head1">View/Edit/Delete</td>
          </tr>
        </thead>
        <tbody>
           {
            data.map((elem) => {
              return (
                <Body
                  key={elem.id}
                  {...elem}
                  deletedata={deletedata}
                  getdatas={getdatas}
                />
              );
            })}
        </tbody>
      </table>)
      : ( 
      <>
      <h1 className="text-center">No Data Found!</h1>
         <img style={{width:"50%"}} src={noData}/>
         </>
      )}

    </div>
  );
}

export default Manage;

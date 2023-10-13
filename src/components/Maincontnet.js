import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { store } from '../App';
export default function Maincontnet(props) {
    let sno=1;
    let [count , setcount]=useState(1);
    useEffect(()=> {console.log("hello world")},[count]);
    const[data,setData]=useContext(store);
  return (
    <>
    {/* {
        props.data.map((e,i)=>{
            return (
                <>
                <h1>{e}</h1>
                </>
            )
        })
    } */
    <table className='table table-bordered table-responsive++'>
        <thead>
            <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Branch</th>
            </tr>
        </thead>
        <tbody>
            {
                props.data.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.name}</td>
                            <td>{e.roll}</td>
                            <td>{e.branch}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    }
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)} className='btn btn-danger'>click</button>
    <button onClick={()=>setcount(count-1)} className='btn btn-danger'>remove</button>
    <button onClick={()=>setcount(count*2)} className='btn btn-danger'>mutiply2</button>
    <button onClick={()=>setcount(count*2)} className='btn btn-danger'>mutiply2</button>

    {/* {
        props.data.map((e,i)=>{
            return (
                <>
                <h1>{e}</h1>
                </>
            )
        })
    } */
    <table className='table table-bordered table-responsive++'>
        <thead>
            <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>Roll</th>
                <th>Branch</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((e,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{sno++}</td>
                            <td>{e.name}</td>
                            <td>{e.roll}</td>
                            <td>{e.branch}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    }
    </>
  )
}

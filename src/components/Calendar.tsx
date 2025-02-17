import React from 'react'

export default function Calendar() {
  return (
    <table className='w-full'>
        <thead>
            <tr>
              {
                  ["Lu","Ma","Mi","Ju","vi","Sa","Do"].map((day,index)=>(
                      <th key={index} className='text-center'>{day}</th>
                  ))
              }
            </tr>
        </thead>
        <tbody>
            <tr >
              {
                 [0,0,0,0,0,1,2].map((e,index)=>(
                  <td key={index} className='text-center'>{e ? 2:""}</td>
              ))
              }
            </tr>
            <tr>
              {
                [3,4,5,6,7,8,9].map((e,index)=>(
                  <td key={index} className='text-center'>{e}</td>
                ))
              }
            </tr>
            <tr>
              {
                [10,11,12,13,14,15,16].map((e,index)=>(
                  <td key={index} className='text-center'>{e}</td>
                ))
              }
            </tr>
            <tr>
              {
                [17,18,19,20,21,22,23].map((e,index)=>(
                  <td key={index} className='text-center'>{e}</td>
                ))
              }
            </tr>
            <tr>
              {
                [24,25,26,27,28,0,0].map((e,index)=>(
                  <td key={index} className='text-center'>{e}</td>
                ))
              }
            </tr>
        </tbody>
    </table>
  )
}

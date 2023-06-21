import React from 'react'
import { Card, Typography, Button} from "@material-tailwind/react";
import TeacherInvite from './TeacherInvite';
import AdminPopover from './AdminPopover';
import Row from './Row';

function fetchTeacherData(){ //= async(req,res)=>{
    //get data
    return [
        {
            name: "Prakhar Gupta",
            email: 'visitprakhar@gmail.com',
            _id: 'feruifberufbheriufh59749476gi',
            date: '12/3/22',

        },        {
            name: "Rivu Naskar",
            email: 'test@rugneriu.com',
            _id: 'feruifberufbheriufh59749476gi',
            date: '12/3/22',

        },        {
            name: "Prakhar Gupta",
            email: 'lorem@ipsum.3',
            _id: 'feruifberufbheriufh59749476gi',
            date: '12/33/22',

        }
    ]
}

const TeacherTable = () => {
  return (
    <>
          <TeacherInvite></TeacherInvite>
          <Card className="overflow-y-auto h-full w-full items-center">
              <table className="w-full min-w-max table-auto text-left border-spacing-2 border-slate-500 p-2">
                  <thead>
                      <tr className='h-20px'>
                          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Name
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Email
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Student ID
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Enrollment Number
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Roll No
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                                  Last Modified
                              </Typography>
                          </th>    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                              </Typography>
                          </th><th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                              <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                              >
                              </Typography>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          fetchTeacherData().map(({_id }) => {
                              return (
                                  <Row id = {_id}></Row>
                              )
                          })}
                  </tbody>
              </table>
          </Card>
    </>
  );
}

export default TeacherTable
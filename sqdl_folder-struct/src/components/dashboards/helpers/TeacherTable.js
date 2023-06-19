import React from 'react'
import { Card, Typography, Button} from "@material-tailwind/react";
import TeacherInvite from './TeacherInvite';

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
                                  Teacher ID
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
                          fetchTeacherData().map(({ name, email, date }, _id) => {
                              return (
                                  <tr key={email} className='font-bold'>
                                      <td className='p-2 '>
                                          <Typography>
                                              {name}
                                          </Typography>
                                      </td>
                                      <td>
                                          <Typography>
                                              {email}
                                          </Typography>
                                      </td>
                                      <td>
                                          <Typography>
                                              {_id}
                                          </Typography>
                                      </td>
                                      <td>
                                          <Typography>
                                              {date}
                                          </Typography>
                                      </td>
                                      <td>
                                          <Typography>
                                              <Button size='sm'>Edit</Button>
                                          </Typography>
                                      </td>            <td>
                                          <Typography>
                                              <Button size='sm' color='red'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                              </svg></Button>
                                          </Typography>
                                      </td>
                                  </tr>
                              )
                          })}
                  </tbody>
              </table>
          </Card>
    </>
  );
}

export default TeacherTable
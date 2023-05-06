import React, { useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import TeacherCard from "./TeacherCard";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherData } from "../redux/hireReducer/action";
import { Progress,Box } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
const TeacherList = () => {
  const [searchParams]=useSearchParams()
  const data = useSelector((store) => store.teacherReducer.teacherData);
  const isLoading = useSelector((store) => store.teacherReducer.isLoading);
 

  const dispatch = useDispatch();

  const paramObj = {
    params: {
       q:searchParams.get('search'),
      _limit: 12,

    },
  };

  useEffect(() => {
    dispatch(getTeacherData(paramObj));
  }, []);

  console.log(data);
  console.log(isLoading)
  return isLoading ? (<Box>
    <Progress size='xs' isIndeterminate />
    <br/>
    <br/>
    <br/>
    <Progress size='xs' isIndeterminate />
    <br/>
    <br/>
    <br/>
   
    <Progress size='xs' isIndeterminate />
    </Box>
  ) : (

  
    <SimpleGrid style={{width:'100%',margin:'auto',border:'1px solid black'}} columns={{ sm: 2, md: 3, lg: 4, base: 1 }} spacing="8px">
      {data.map((item) => {
        return <TeacherCard key={item.id} {...item} />;
      })}
    </SimpleGrid>
   
  );
};

export default TeacherList;

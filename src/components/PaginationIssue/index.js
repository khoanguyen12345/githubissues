import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationIssue = ({pageNum,totalPageNum,setPageNum}) => {
  const handleClickOnFirst= ()=>{
    setPageNum(1)
  }
  const handleClickOnPrev= ()=>{
    if (pageNum>1){
    setPageNum((num)=>num-1)
    }
  };
  const handleClickOnLast =()=>{
    setPageNum(totalPageNum)
  }
  const handleClickOnNext=()=>{
    setPageNum((num)=>num+1)
  }
  const handleclickOnPage=(page)=>{
    setPageNum(page)
  }
  return (
    <Pagination size="lg" className="justify-content-center">
      <Pagination.First disabled={pageNum === 1} onClick ={handleClickOnFirst}/>
      <Pagination.Prev disabled = {pageNum===1}  onClick ={handleClickOnPrev}/>
      <Pagination.Item active = {pageNum ===1} onClick = {()=>handleclickOnPage(1)}>{1}</Pagination.Item>
      {pageNum > 2 && <Pagination.Ellipsis/>}

      { pageNum > 1 && pageNum<totalPageNum &&(<Pagination.Item active>{pageNum}</Pagination.Item>)}

      {pageNum +1 < totalPageNum &&<Pagination.Ellipsis />}
      {totalPageNum >1 &&(
      <Pagination.Item active = {pageNum===totalPageNum} onClick = {()=>handleclickOnPage(totalPageNum)}>{totalPageNum}</Pagination.Item>)}
      <Pagination.Next onClick = {handleClickOnNext} disabled = {pageNum === totalPageNum && pageNum!==1}/>
      <Pagination.Last onClick = {handleClickOnLast} disabled = {pageNum === totalPageNum} />
    </Pagination>
  );
};

export default PaginationIssue;

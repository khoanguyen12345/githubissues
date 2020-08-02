import React,{useEffect} from "react";
import { Alert } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment'
const CommentSection = ({selectedIssue, repo,owner,comments,setComments,setTotalCommentPageNum,totalCommentPageNum,errorMessageCommentSection, setErrorMessageCommentSection,commentLoading,setCommentLoading}) => {

    console.log("number",selectedIssue.number)
      useEffect(() => {
        const fetchComments = async () => {
          // if (!owner || !repo) return;
          setCommentLoading(false);
          const url = `https://api.github.com/repos/${owner}/${repo}/issues/${selectedIssue.number}/comments`;
          try {
            const response = await fetch(url);
            const data = await response.json();
            setCommentLoading(false);
            if (response.status === 200) {
              if (selectedIssue.comments>0){
              setComments(data);
              console.log(data)
              setCommentLoading(false);
              }else if (selectedIssue.comments===0){
                  setComments(["No Comments"])
                  setCommentLoading(false);
              }
              // const link = response.headers.get("link")
              // if (link){
              //   const getTotalPage = link.match(/page=(\d+)>; rel="last"/);
              //   if (getTotalPage){
              //     setTotalCommentPageNum(parseInt(getTotalPage[1]))
              //   }
              // }
            } else {
              setErrorMessageCommentSection(data.message);
            }
          } catch (error) {
            setErrorMessageCommentSection(error.message);
          }
          
        };
        fetchComments();
    }, [owner,repo,selectedIssue.number,setCommentLoading,setComments,selectedIssue.comments,setErrorMessageCommentSection]);
    

    if (comments[0] === "No Comments"){
      return(
        <div>
          <h4>Comments</h4>
          <hr></hr>
          <p>There are no comments on this issue</p>
        </div>
      )
    }else{

    return (
      <div>
        {errorMessageCommentSection && <Alert variant="danger">{errorMessageCommentSection}</Alert>}
        <h4>Comments</h4>
        <hr></hr>
        {comments.map((comment) => (
       <div>
       <div class = "comment"> 
         <div>
         <img src = {comment.user.avatar_url} alt = "" height = "100px" width = "100px" ></img>
         </div>
         <div>
         <i>@{comment.user.login} commented <Moment parse="YYYY-MM-DDHH:mm" fromNow> {comment.updated_at.slice(0, -4)} </Moment><br></br></i>
         <ReactMarkdown source = {comment.body}></ReactMarkdown>
         </div>
        </div>
        <hr></hr>
        </div>
      ))}
  
      </div>
    )
  }
} 
  export default CommentSection;

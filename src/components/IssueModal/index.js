import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import CommentSection from "./CommentSection";
import ClipLoader from "react-spinners/ClipLoader";
import ReactMarkdown from "react-markdown"

const IssueModal = ({ selectedIssue, showModal, setShowModal,repo,owner,comments,setComments,setTotalCommentPageNum,totalCommentPageNum,errorMessageCommentSection, setErrorMessageCommentSection }) => {
  const [commentLoading,setCommentLoading] = useState(false)
  if (!selectedIssue) selectedIssue = {}
  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        dialogClassName="modal-90w"
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg" 
      >
        <Modal.Header closeButton>
          <Modal.Title class = "modalTitle" id="example-modal-sizes-title-lg">
            <h4>{selectedIssue.title} </h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p><ReactMarkdown source={selectedIssue.body} /></p>
        </Modal.Body>

        {commentLoading ? (
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        ) : (
          <CommentSection 
          selectedIssue = {selectedIssue} 
          owner = {owner} 
          repo={repo} 
          comments = {comments} 
          setComments = {setComments} 
          setTotalCommentPageNum = {setTotalCommentPageNum} 
          totalCommentPageNum = {totalCommentPageNum}
          errorMessageCommentSection = {errorMessageCommentSection} 
          setErrorMessageCommentSection = {setErrorMessageCommentSection}
          commentLoading = {commentLoading} 
          setCommentLoading = {setCommentLoading}>
          </CommentSection>
          )}
       
      </Modal>
    </>
  );
};
export default IssueModal;

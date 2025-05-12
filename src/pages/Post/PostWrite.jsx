import "./PostWrite.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextPost } from "./postContext";
import { useContext } from "react";
import { getDate } from "../../common/common.js"
import { getNextNo } from "./postData.js";

function PostWrite() {

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  // context 에 담겨있는 postArray, setPostArray 모두 꺼냄
  const {postArray, setPostArray} = useContext(ContextPost);

  const writeDo = ()=>{
    const temp = {};
    temp.title = title;
    temp.content = content;
    temp.date = getDate();
    temp.no = getNextNo(postArray);

    postArray.push(temp);

    // 라우터에 의해 페이지가 바뀌면 postArray가 변하지만
    // 일반적으로 useState으로 관리중인 postArray에 대해 수정하는 경우
    // setPostArray를 이용하는 것이 권장됨
    setPostArray([...postArray]);

    navigate("/post");
  }

  return (
    <div className="write-container">
      <input 
        className="write-title" type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        />
      <textarea 
        className="write-content"
        onChange={(e)=>setContent(e.target.value)}
        ></textarea>
      <div className="text-align-end">
        <button className="btn-empty" onClick={()=>navigate("/post")}>취소</button>
        <button className="btn-fill" onClick={writeDo}>등록</button>
      </div>
    </div>
  );
}

export default PostWrite;

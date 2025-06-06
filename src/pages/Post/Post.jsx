import "./Post.css";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostWrite from "./PostWrite";
import PostEdit from "./PostEdit";
import { Routes, Route } from "react-router-dom";
// 2. 생성한 ContextPost 불러오기
import { ContextPost } from "./postContext";
import { useState } from "react";
import { initPostArray } from "./postData";

// Post 컴포넌트에서 PostList, PostDetail, PostWrite, PostEdit 화면전환
function Post() {

  // 하위 컴포넌트 여러곳에서 상위 컴포넌트인 Post의 postArray 변수를 사용하고자 함
  // 일일히 props 로 넘겨주기보다는 context 를 이용하자!!
  // 1. context 만들기 -> postContext.js 생성
  const [postArray, setPostArray] = useState(initPostArray);


  return (
    <div>
      {/* Routes 로 post 관련 컴포넌트들 Route 등록 */}
      {/* Post 컴포넌트 진입시 주소 /post 이고, 화면은 PostList 컴포넌트*/}
      {/* 3. 해당 ContextPost를 사용할 하위 컴포넌트들을 감싸주기 */}
      {/*    이후 공유할 데이터 넣어주기 (함수도 공유가능) */}
      <ContextPost.Provider value={{postArray, setPostArray}}>
        <Routes>
          {/* 현재 /는 /post와 같음 */}
          <Route path="/" element={<PostList />} />
          {/* 글쓰기 페이지 /write 는 /post/write 와 같음 */}
          <Route path="/write" element={<PostWrite />} />
          {/* 상세보기시 /detail?no=23123 으로 요청 */}
          <Route path="/detail" element={<PostDetail />} />
          {/* 글수정시 /edit/23123 으로 요청 (path variable) */}
          <Route path="/edit/:no" element={<PostEdit />} />
        </Routes>  
      </ContextPost.Provider>
    </div>
  );
}

export default Post;

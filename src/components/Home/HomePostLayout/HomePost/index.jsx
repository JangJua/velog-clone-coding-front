import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

// styles
import * as S from "./style";

const HomePost = ({ data }) => {
  return (
    <>
      <S.HomePostStyle>
        <S.PostImage to={`/@${data.author}/${data.title}`}>
          <div>
            <img src={data.thumbnail} />
          </div>
        </S.PostImage>
        <S.MainInfo>
          <S.Payload to={`/@${data.author}/${data.title}`}>
            <h4>{data.title}</h4>
            <div>
              <p>{data.content}</p>
            </div>
          </S.Payload>
          <S.Date>
            <span>게시일자</span>
            <span className="separator"></span>
            <span>조회수</span>
            <span>수정일자</span>
          </S.Date>
        </S.MainInfo>
        <S.SubInfo>
          <Link to={`/@${data.author}/${data.title}`}>
            <img src={data.avatar} />
            <span>
              by <b>{data.author}</b>
            </span>
          </Link>
          <div className="likes">
            <BsFillHeartFill />
            {data.heart}
          </div>
        </S.SubInfo>
      </S.HomePostStyle>
    </>
  );
};

export default memo(HomePost);

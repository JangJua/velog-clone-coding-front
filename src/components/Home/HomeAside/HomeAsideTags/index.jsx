import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POPULAR_TAGS_LOAD_REQUEST } from "store/actions/postAction";
import TagItem from "./TagItem";
import * as S from "./style";

const HomeAsideTags = () => {
  const dispatch = useDispatch();
  const popularTags = useSelector((state) => state.postReducer.popularTags);
  useEffect(() => {
    dispatch({
      type: POPULAR_TAGS_LOAD_REQUEST,
    });
  }, []);

  return (
    <S.StyledTagsWrapper>
      <S.StyledTagsTitle>인기 태그</S.StyledTagsTitle>
      <S.StyledTagLIst>
        {popularTags.slice(0, 10).map((Tag) => (
          <TagItem Tag={Tag} key={Tag.id} />
        ))}
        <S.StyledMore>
          <Link to="/tags">더보기</Link>
        </S.StyledMore>
      </S.StyledTagLIst>
    </S.StyledTagsWrapper>
  );
};
export default HomeAsideTags;

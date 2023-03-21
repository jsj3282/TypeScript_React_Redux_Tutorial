import React from "react";
import GithubUsernameForm from "../components/GithubUsernameForm";
import GithubProfileInfo from "../components/GithubProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../moduels";
import {getUserProfileAsync, getUserProfileThunk, GithubAction} from "../moduels/github";
import {ThunkDispatch} from "redux-thunk";

type GithubDispatch = ThunkDispatch<RootState, null, GithubAction>

function GithubProfileLoader() {
    const {data, loading, error} = useSelector((state: RootState) => state.github.userProfile);
    const dispatch: GithubDispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        // dispatch(getUserProfileThunk(username));
        dispatch(getUserProfileAsync.request(username));
    };
    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername}/>
            {loading && <p style={{textAlign: 'center'}}>로딩중...</p>}
            {error && <p style={{textAlign: 'center'}}>에러 발생!...</p>}
            {data && <GithubProfileInfo name={data.name} thumbnail={data.avatar_url} bio={data.bio} blog={data.blog}
            />}
        </>
    )
}

export default GithubProfileLoader;
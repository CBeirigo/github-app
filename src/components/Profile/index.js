import React from 'react'
import useGithub from '../../hooks/GithubHooks'
import * as S from './styled'

function Profile() {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/48778090?v=4" alt="Avatar of user" />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <a href={githubState.user.htmlUrl}
                        target='_blank' 
                        rel='noreferrer'>{githubState.user.login}</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                   
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>

                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.publicGists}</span>
                    </div>

                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile
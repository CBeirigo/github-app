import React, { useEffect, useState } from 'react'
import useGithub from '../../hooks/GithubHooks';
import RepositoryItem from '../RepositoryItem'
import * as S from './styled'

function RepositoriesList() {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, sethasUserForSearchrepos] = useState(false)

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        sethasUserForSearchrepos(!!githubState.repositories)
    }, [githubState.user.login])

    return (
        <>
            {hasUserForSearchrepos ? (
                <S.WrapperTabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>

                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>

                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
                </S.WrapperTabs>

            ) : (<></>)}


        </>
    )
}

export default RepositoriesList
import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
})

const GithubProvider = ({ children }) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        repositories: [],
        starred: []
    })

    const getUser = (username) => {
        api.get(`users/${username}`).then(({ data: {user}}) => {
            setGithubState(prevState => ({
                ...prevState,
                user: {
                    login: user.login,
                    name: user.name,
                    htmlUrl:user.htmlUrl,
                    blog: user.blog,
                    company:user.company,
                    location: user.location,
                    followers: user.followers,
                    following: user.following,
                    publicGists: user.publicGists,
                    publicRepos: user.publicRepos,
                }
            }))
        })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username),[] )
    }

    return <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
}

export default GithubProvider
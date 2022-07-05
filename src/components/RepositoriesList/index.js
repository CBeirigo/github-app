import React from 'react'
import RepositoryItem from '../RepositoryItem'
import * as S from './styled'

function RepositoriesList() {
    return (
        <>
            <S.WrapperTabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <RepositoryItem
                        name='Awesome-Profile-README-templates'
                        linkToRepo="https://github.com/CBeirigo/Awesome-Profile-README-templates"
                        fullName="CBeirigo/Awesome-Profile-README-templates"
                    /></S.WrapperTabPanel>

                <S.WrapperTabPanel>
                    <RepositoryItem
                        name='CBeirigo'
                        linkToRepo="https://github.com/CBeirigo/CBeirigo"
                        fullName= "CBeirigo/CBeirigo"
                    /></S.WrapperTabPanel>
                <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>

            </S.WrapperTabs>
        </>
    )
}

export default RepositoriesList
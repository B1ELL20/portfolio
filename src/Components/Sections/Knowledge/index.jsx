import { FaReact, FaHtml5, FaNodeJs, FaBootstrap, FaWordpress  } from 'react-icons/fa'
import { SiElectron, SiExpress, SiTypescript, SiJavascript, SiNextdotjs } from 'react-icons/si'
import { DiMysql, DiCss3 } from 'react-icons/di'
import { 
    Background,
    Backimage,
    ContainerList,
    ContainerSection,
    IconItem,
    ItemDescription,
    KnowledgeBox, 
    KnowledgeContainer, 
    ListItem
} from "./KnowledgeElements"

import html from '../../../images/html.png'
import css from '../../../images/css.png'
import js from '../../../images/Javascript.png'
import ts from '../../../images/typescript.png'
import react from '../../../images/react.png'
import node from '../../../images/nodejs.png'
import wp from '../../../images/wordpress.png'
import mysql from '../../../images/mysql.png'
import boots from '../../../images/bootstrap.png'
import electron from '../../../images/electron.png'
import express from '../../../images/express.png'
import { useState } from 'react'
import TitleSection from '../../TitleSection'

const Knowledge = () => {

    const [idImg, setIdImg] = useState(6);
    const listImg = [react, node, express, html, css, mysql, js, ts, boots, wp, electron];

  return (
    <>
        <KnowledgeBox>
            <Background>
                <Backimage src={listImg[idImg]} />
            </Background>
            <TitleSection color={0} text={'Conhecimentos'} />
            <KnowledgeContainer>
                <ContainerSection>
                    <ContainerList>
                        <ListItem id="0" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaReact /></IconItem>
                            <ItemDescription>React JS</ItemDescription>
                        </ListItem>
                        <ListItem id="0" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaReact /></IconItem>
                            <ItemDescription>React Native</ItemDescription>
                        </ListItem>
                        <ListItem id="1" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaNodeJs /></IconItem>
                            <ItemDescription>Node JS</ItemDescription>
                        </ListItem>
                        <ListItem id="2" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><SiExpress /></IconItem>
                            <ItemDescription>Express</ItemDescription>
                        </ListItem>
                        <ListItem id="10" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><SiElectron /></IconItem>
                            <ItemDescription>Electron</ItemDescription>
                        </ListItem>
                        <ListItem id="5" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><DiMysql /></IconItem>
                            <ItemDescription>MySQL</ItemDescription>
                        </ListItem>
                    </ContainerList>
                </ContainerSection>
                <ContainerSection>
                    <ContainerList>
                        <ListItem id="6" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><SiJavascript /></IconItem>
                            <ItemDescription>JavaScript</ItemDescription>
                        </ListItem>
                        <ListItem id="7" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><SiTypescript /></IconItem>
                            <ItemDescription>TypeScript</ItemDescription>
                        </ListItem>
                        <ListItem id="8" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaBootstrap /></IconItem>
                            <ItemDescription>Bootstrap</ItemDescription>
                        </ListItem>
                        <ListItem id="9" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaWordpress /></IconItem>
                            <ItemDescription>WordPress</ItemDescription>
                        </ListItem>
                        <ListItem id="3" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><FaHtml5 /></IconItem>
                            <ItemDescription>HTML5</ItemDescription>
                        </ListItem>
                        <ListItem id="4" onMouseEnter={(e) => setIdImg(e.target.id)}>
                            <IconItem><DiCss3 /></IconItem>
                            <ItemDescription>CSS3</ItemDescription>
                        </ListItem>
                    </ContainerList>
                </ContainerSection>
            </KnowledgeContainer>
        </KnowledgeBox>
    </>
  )
}

export default Knowledge
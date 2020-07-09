import React from "react";
import Head from "next/head";
import { Row, Col, Breadcrumb, Affix } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../static/style/pages/detailed.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

const Detailed = (props) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  });

  let html = marked(props.article_content);
  
  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="/">视频列表</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                xxxxxx
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div>
            <div className="detailed-title">
              React实战技术教程-技术胖Blog开发（更新第10集）
            </div>
            <div className="list-icon center">
              <span>2020-06-08</span>
              <span>视频教程</span>
              <span>5498人</span>
            </div>
            <div className="detailed-content"
              dangerouslySetInnerHTML={{__html: html}}
            ></div>
          </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className='article-menu'
                source={html}
                headingTopOffset={0}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detailed.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id)
      .then(res => {
        resolve(res.data.data[0])
      })
  })
  return await promise;
}
export default Detailed;

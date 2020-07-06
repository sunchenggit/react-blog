import React from 'react';
import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../static/style/components/author.css';

const Author = () => {
  return (
    <div className='author-div comm-box'>
      <div><Avatar size={100} src='http://blogimages.jspang.com/blogtouxiang1.jpg'></Avatar></div>
      <div className='author-introduction'>
        50元跟着胖哥学一年，掌握程序的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className='account'></Avatar>
        <Avatar size={28} icon={<QqOutlined />} className='account'></Avatar>
        <Avatar size={28} icon={<WechatOutlined />} className='account'></Avatar>
      </div>
    </div>
  )
}

export default Author;